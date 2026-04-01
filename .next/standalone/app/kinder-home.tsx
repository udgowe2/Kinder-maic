'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProfilesStore } from '@/lib/store/profiles';
import { calculateAge, getZyklus, getApproximateKlasse, isBirthdayToday } from '@/lib/utils/profile-helpers';
import { LEHRPLAN_SUBJECTS } from '@/lib/constants/lehrplan';
import { useRouter } from 'next/navigation';
import { Flame, Star, Settings, LogOut, ChevronRight } from 'lucide-react';
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
      const duration = 3000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ff0000', '#00ff00', '#0000ff', '#f5a623', '#e27baf']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ff0000', '#00ff00', '#0000ff', '#f5a623', '#e27baf']
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
      setHasConfettiFired(true);
    }
  }, [activeProfile, hasConfettiFired]);

  const handleSubjectClick = (subjectId: string) => {
    sessionStorage.setItem('currentSubject', subjectId);
    router.push(`/?subject=${subjectId}&mode=learn`);
  };

  const [isLearnMode, setIsLearnMode] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('mode') === 'learn') {
        setIsLearnMode(true);
      }
    }
  }, []);

  if (isLoadingProfiles(profiles)) return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-16 h-16 border-4 border-white border-t-transparent rounded-full" />
    </div>
  );

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center overflow-x-hidden font-sans relative">
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-sky-300 via-indigo-300 to-purple-300 z-[-2]">
         <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>
      
      {/* Floating Blobs */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-400/40 mix-blend-multiply blur-3xl z-[-1]" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-yellow-300/40 mix-blend-multiply blur-3xl z-[-1]" 
      />

      <div className="w-full flex-1 flex flex-col items-center p-4 pt-10 md:p-8 md:pt-16 z-10 w-full max-w-7xl mx-auto">
        {/* Settings / Eltern Button */}
        <div className="absolute top-6 right-6">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}
            onClick={() => router.push('/eltern')}
            className="p-3 md:px-5 md:py-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 text-indigo-700 flex items-center gap-3 font-bold"
          >
            <Settings size={22} className="text-indigo-600" />
            <span className="max-md:hidden text-lg tracking-wide uppercase">Elternbereich</span>
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {!activeProfile ? (
            <ProfileSelector key="selector" profiles={profiles} onSelect={(id) => {
              setActiveProfile(id);
            }} />
          ) : (
            <SubjectDashboard 
              key="dashboard"
              profile={activeProfile} 
              onLogout={() => {
                  setActiveProfile('');
                  setHasConfettiFired(false);
                  setIsLearnMode(false);
                  router.push('/');
              }} 
              onSubjectClick={handleSubjectClick}
            />
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

function isLoadingProfiles(profiles: any[]) {
    return !profiles || profiles.length === 0; 
}

function ProfileSelector({ profiles, onSelect }: { profiles: any[], onSelect: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ type: 'spring', bounce: 0.5 }}
      className="flex flex-col items-center w-full max-w-5xl mt-[12vh]"
    >
      <motion.div 
        initial={{ y: -50 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="px-8 py-4 bg-white/60 backdrop-blur-xl rounded-full border-2 border-white/50 shadow-xl mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 tracking-tighter drop-shadow-sm">
          Wer bist du heute? ✨
        </h1>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
        {profiles.map((p, i) => {
          const age = calculateAge(p.geburtsdatum);
          const zyklus = getZyklus(age);
          const klasse = getApproximateKlasse(age);
          const streak = p.streakDays || 0;

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.08, y: -15, rotate: i % 2 === 0 ? 2 : -2 }} whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(p.id)}
              className="relative cursor-pointer rounded-[2.5rem] p-8 flex flex-col items-center bg-white/80 backdrop-blur-md border-[6px]"
              style={{ 
                borderColor: p.farbe, 
                boxShadow: `0 20px 40px -10px ${p.farbe}80, inset 0 -10px 20px -5px ${p.farbe}20` 
              }}
            >
              {streak > 0 && (
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.1), type: 'spring' }}
                  className="absolute -top-6 -right-4 bg-gradient-to-br from-orange-400 to-red-500 text-white px-4 py-2 rounded-2xl text-lg font-black shadow-lg shadow-orange-500/50 flex items-center gap-2 transform rotate-12 border-4 border-white"
                >
                  <Flame fill="currentColor" size={24} /> {streak}
                </motion.div>
              )}

              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center text-7xl mb-6 shadow-inner border-4 border-white overflow-hidden relative"
                style={{ backgroundColor: p.farbe + '30' }}
              >
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>
                <span className="relative z-10 drop-shadow-lg">{p.avatar}</span>
              </div>
              
              <h2 className="text-3xl font-black text-slate-800 mb-2 drop-shadow-sm">{p.name}</h2>
              
              <div className="flex flex-col items-center gap-2 text-slate-600 font-bold">
                <span className="bg-slate-100/80 px-4 py-1.5 rounded-full text-base border border-slate-200 shadow-sm">
                  {age} Jahre • {klasse}. Klasse
                </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-1 rounded-xl text-sm uppercase tracking-widest shadow-md">
                  {zyklus === 'zyklus-2' ? 'Zyklus 2' : 'Zyklus 3'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function SubjectDashboard({ profile, onLogout, onSubjectClick }: any) {
  const age = calculateAge(profile.geburtsdatum);
  const zyklus = getZyklus(age);
  const isBirthday = isBirthdayToday(profile.geburtsdatum);

  const subjects = LEHRPLAN_SUBJECTS.filter(s => {
    if (zyklus === 'zyklus-2') return !!s.zyklus2;
    if (zyklus === 'zyklus-3') return !!s.zyklus3;
    return false;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      className="w-full max-w-6xl flex flex-col items-center"
    >
      <div className="w-full flex items-center justify-between mb-8 px-4">
        <motion.button 
          whileHover={{ scale: 1.05, x: -5 }} whileTap={{ scale: 0.95 }}
          onClick={onLogout} 
          className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors font-bold bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white"
        >
          <LogOut size={22} className="rotate-180" /> <span className="text-lg">Zurück</span>
        </motion.button>
        
        <motion.div 
          initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-4 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-[2rem] shadow-xl border-4"
          style={{ borderColor: profile.farbe }}
        >
          <div className="relative">
            <span className="text-4xl drop-shadow-md">{profile.avatar}</span>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-800 leading-none mb-1">{profile.name}</span>
            <span className="text-sm font-bold text-slate-500">
                {profile.streakDays > 0 ? (
                    <span className="flex items-center gap-1 text-orange-500 bg-orange-100 px-2 rounded-lg w-max"><Flame size={14} fill="currentColor"/> {profile.streakDays} Tage Streak!</span>
                ) : <span className="bg-slate-100 px-2 rounded-lg text-slate-500">Lass uns lernen! 🚀</span>}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="text-center mb-10 w-full relative">
        {isBirthday && (
          <motion.div 
            initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', bounce: 0.6 }}
            className="mb-8 inline-block bg-gradient-to-r from-pink-500 to-rose-400 text-white font-black px-10 py-4 rounded-full text-2xl shadow-[0_10px_30px_rgba(244,63,94,0.4)] border-4 border-white transform hover:scale-105 cursor-default"
          >
            🎂 Alles Gute zum {age}. Geburtstag! 🎊
          </motion.div>
        )}
        
        <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] tracking-tight mb-4">
          Was möchtest du heute lernen?
        </h1>
        <p className="text-xl text-white/90 font-bold bg-black/20 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
          Wähle dein Abenteuer für heute aus!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full px-4 pb-20">
        {subjects.map((s, i) => {
            const isCompleted = profile.completedLessons.includes(s.id);

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.1 + (i * 0.05), type: 'spring', bounce: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }} whileTap={{ scale: 0.95 }}
                onClick={() => onSubjectClick(s.id)}
                className="group cursor-pointer relative bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 flex flex-col items-center justify-center shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all overflow-hidden"
              >
                {/* Deco Background Shape */}
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-500" style={{ backgroundColor: profile.farbe }}></div>
                
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-inner border-4 border-white relative z-10 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-6xl drop-shadow-md">{s.emoji}</span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-800 text-center leading-tight mb-4 relative z-10">{s.name}</h3>
                
                <div className="mt-auto w-full flex items-center justify-between z-10">
                  {isCompleted ? (
                     <div className="flex items-center gap-1.5 text-sm font-black text-emerald-600 bg-emerald-100 px-3 py-2 rounded-xl">
                        <Star size={16} fill="currentColor" /> Erledigt
                     </div>
                  ) : (
                     <div className="flex items-center gap-1.5 text-sm font-black text-slate-500 bg-slate-100 px-3 py-2 rounded-xl group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                        Starten <ChevronRight size={16} />
                     </div>
                  )}
                </div>

                {/* Bottom colored lip */}
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{ backgroundColor: profile.farbe }}></div>
              </motion.div>
            )
        })}
      </div>
    </motion.div>
  );
}
