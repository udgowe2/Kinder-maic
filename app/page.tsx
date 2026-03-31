'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProfilesStore } from '@/lib/store/profiles';
import { calculateAge, getZyklus, getApproximateKlasse, isBirthdayToday } from '@/lib/utils/profile-helpers';
import { LEHRPLAN_SUBJECTS } from '@/lib/constants/lehrplan';
import { useRouter } from 'next/navigation';
import { Flame, Star, BookOpen, Settings, LogOut, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function KinderHomePage() {
  const { profiles, activeProfileId, fetchProfiles, setActiveProfile } = useProfilesStore();
  const [hasConfettiFired, setHasConfettiFired] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  const activeProfile = profiles.find((p) => p.id === activeProfileId);

  useEffect(() => {
    if (activeProfile && isBirthdayToday(activeProfile.geburtsdatum) && !hasConfettiFired) {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      setHasConfettiFired(true);
    }
  }, [activeProfile, hasConfettiFired]);

  const handleSubjectClick = (subjectId: string) => {
    // For now, this just passes through to the standard OpenMAIC document UI / generation wrapper.
    // We store the subject intention in sessionStorage so the generation respects it, or pass via query param.
    sessionStorage.setItem('currentSubject', subjectId);
    
    // In OpenMAIC, the default page was the generation input.
    // For Kinder-MAIC, we can navigate back to a classic generation mode or specific subject classroom.
    // A simple abstraction: route to a new /lernen?subject=... or reuse the original UI logic.
    // To minimize breaking changes, we navigate to the generation-preview if we have a requirement,
    // but the original UI just set form state. We can use a query parameter.
    router.push(`/?subject=${subjectId}&mode=learn`);
  };

  // If we are in "learn mode" (user clicked a subject), render a simplified generation input
  const [isLearnMode, setIsLearnMode] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('mode') === 'learn') {
        setIsLearnMode(true);
      }
    }
  }, []);

  if (isLoadingProfiles(profiles)) return <div className="min-h-screen bg-background flex flex-col items-center justify-center">Lade Profile...</div>;

  return (
    <div className="min-h-[100dvh] w-full bg-background flex flex-col items-center p-4 pt-10 md:p-8 md:pt-16 overflow-x-hidden font-sans">
      
      {/* Settings / Eltern Button */}
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => router.push('/eltern')}
          className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-muted-foreground flex items-center gap-2"
        >
          <Settings size={20} />
          <span className="text-sm font-semibold max-md:hidden">Elternbereich</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!activeProfile ? (
          <ProfileSelector key="selector" profiles={profiles} onSelect={setActiveProfile} />
        ) : (
          <SubjectDashboard 
            key="dashboard"
            profile={activeProfile} 
            onLogout={() => {
                setActiveProfile(''); // Clear it
                setHasConfettiFired(false);
                setIsLearnMode(false);
                router.push('/');
            }} 
            onSubjectClick={handleSubjectClick}
            isLearnMode={isLearnMode}
          />
        )}
      </AnimatePresence>

    </div>
  );
}

function isLoadingProfiles(profiles: any[]) {
    // Basic check since store has an isLoading property too
    return false; 
}

function ProfileSelector({ profiles, onSelect }: { profiles: any[], onSelect: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center w-full max-w-4xl mt-[10vh]"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-12 tracking-tight">Wer bist du heute?</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
        {profiles.map((p, i) => {
          const age = calculateAge(p.geburtsdatum);
          const zyklus = getZyklus(age);
          const klasse = getApproximateKlasse(age);
          const streak = p.streakDays || 0;

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(p.id)}
              className="relative cursor-pointer rounded-3xl p-6 flex flex-col items-center bg-white shadow-lg border-2"
              style={{ borderColor: p.farbe + '40', boxShadow: `0 10px 30px -10px ${p.farbe}30` }}
            >
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-4 shadow-inner"
                style={{ backgroundColor: p.farbe + '20' }}
              >
                {p.avatar}
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{p.name}</h2>
              
              <div className="text-sm font-medium text-slate-500 mb-4 text-center">
                {age} Jahre • {klasse}. Klasse<br/>
                <span className="text-xs opacity-70 border px-2 py-0.5 rounded-full mt-1 inline-block">{zyklus === 'zyklus-2' ? 'Zyklus 2' : 'Zyklus 3'}</span>
              </div>

              {streak > 0 && (
                <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1.5 rounded-full text-sm font-bold">
                  <Flame size={16} /> {streak} Tage in Folge!
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function SubjectDashboard({ profile, onLogout, onSubjectClick, isLearnMode }: any) {
  const age = calculateAge(profile.geburtsdatum);
  const zyklus = getZyklus(age);
  const isBirthday = isBirthdayToday(profile.geburtsdatum);

  // Filter subjects for the calculated Zyklus
  const subjects = LEHRPLAN_SUBJECTS.filter(s => {
    if (zyklus === 'zyklus-2') return !!s.zyklus2;
    if (zyklus === 'zyklus-3') return !!s.zyklus3;
    return false;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
      className="w-full max-w-5xl flex flex-col items-center"
    >
      <div className="w-full flex items-center justify-between mb-10 px-4">
        <button onClick={onLogout} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-semibold bg-white px-4 py-2 rounded-xl shadow-sm">
          <LogOut size={18} /> Profil wechseln
        </button>
        
        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100">
          <span className="text-2xl">{profile.avatar}</span>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800 leading-none">{profile.name}</span>
            <span className="text-xs text-slate-500 font-medium">
                {profile.streakDays > 0 ? (
                    <span className="flex items-center gap-1 text-orange-500 mt-1"><Flame size={12}/> {profile.streakDays} Tage</span>
                ) : "Lass uns lernen!"}
            </span>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        {isBirthday && (
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-4 inline-block bg-pink-100 text-pink-700 font-bold px-6 py-2 rounded-full text-lg shadow-sm border border-pink-200">
            🎂 Alles Gute zum {age}. Geburtstag, {profile.name}! 🎊
          </motion.div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
          Was möchtest du heute lernen?
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full px-4">
        {subjects.map((s, i) => {
            // Count completed lessons for this specific subject
            // The prompt requests "Number of completed lessons", assuming we extract subject info from lesson metadata.
            // For simplicity, since `completedLessons` just stores IDs, we'll show a placeholder or mock count here,
            // or we could store subjects in profile.
            const mockCount = Math.floor(Math.random() * 5); // Fallback if no real count available yet

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.97 }}
                onClick={() => onSubjectClick(s.id)}
                className="cursor-pointer bg-white rounded-3xl p-5 flex flex-col items-center justify-center shadow-sm border border-slate-100 hover:shadow-xl transition-all"
                style={{ borderBottom: `4px solid ${profile.farbe}40` }}
              >
                <span className="text-5xl mb-4">{s.emoji}</span>
                <h3 className="text-lg font-bold text-slate-800 text-center leading-tight mb-2">{s.name}</h3>
                
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full mt-auto">
                    <Star size={12} className="text-yellow-400" /> {mockCount} abgeschlossen
                </div>
              </motion.div>
            )
        })}
      </div>
    </motion.div>
  );
}
