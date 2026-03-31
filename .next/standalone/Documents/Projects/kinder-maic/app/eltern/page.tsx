'use client';

import { useState, useEffect } from 'react';
import { useProfilesStore } from '@/lib/store/profiles';
import { calculateAge, getZyklus } from '@/lib/utils/profile-helpers';
import { Lock, ArrowLeft, BarChart2, Clock, CheckCircle, Flame } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ElternDashboard() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { profiles, fetchProfiles } = useProfilesStore();
  const router = useRouter();

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '0893') {
      setIsAuthenticated(true);
    } else {
      alert('Falscher PIN');
      setPin('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <button onClick={() => router.push('/')} className="absolute top-8 left-8 p-2 rounded-full bg-white shadow flex items-center gap-2 text-slate-600">
            <ArrowLeft size={20}/> <span className="font-semibold px-2">Zurück</span>
        </button>
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-slate-100 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Elternbereich</h1>
          <p className="text-slate-500 text-center mb-8 font-medium">Bitte geben Sie den 4-stelligen PIN ein.</p>
          
          <form onSubmit={handlePinSubmit} className="w-full flex flex-col gap-4">
            <input 
              type="password" 
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full text-center text-3xl tracking-[1em] p-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none"
              placeholder="••••"
              autoFocus
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors">
              Entsperren
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <header className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/')} className="p-3 bg-white rounded-full shadow-sm hover:shadow text-slate-600">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-extrabold text-slate-800">Eltern Dashboard</h1>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="px-4 py-2 bg-slate-200 rounded-lg text-slate-700 font-semibold text-sm hover:bg-slate-300">
          Sperren
        </button>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Child Overview Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {profiles.map(p => {
                const age = calculateAge(p.geburtsdatum);
                const zyklus = getZyklus(age);
                const totalLessons = p.completedLessons.length;
                
                // Average Score Calculation
                const scores = Object.values(p.quizScores || {});
                const avgScore = scores.length > 0 ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;

                return (
                    <div key={p.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col" style={{borderTop: `6px solid ${p.farbe}`}}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: `${p.farbe}20`}}>
                                {p.avatar}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-800">{p.name}</h2>
                                <p className="text-sm font-medium text-slate-500">{age} Jahre • {zyklus === 'zyklus-2' ? 'Zyklus 2' : 'Zyklus 3'}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <StatBox icon={<CheckCircle size={18}/>} label="Lektionen" value={totalLessons} color="text-emerald-600" bg="bg-emerald-50" />
                            <StatBox icon={<Flame size={18}/>} label="Streak" value={p.streakDays} color="text-orange-600" bg="bg-orange-50" />
                            <StatBox icon={<BarChart2 size={18}/>} label="Ø Score" value={`${avgScore}%`} color="text-indigo-600" bg="bg-indigo-50" />
                            <StatBox icon={<Clock size={18}/>} label="Letzter Login" value={p.lastLoginDate || 'Nie'} color="text-slate-600" bg="bg-slate-50" />
                        </div>
                    </div>
                )
            })}
        </div>

        {/* Global Activity Panel */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <BarChart2 className="text-blue-500"/> Wochenübersicht
            </h3>
            
            <div className="flex-1 rounded-xl bg-slate-50 border border-slate-100 p-4 flex flex-col gap-4">
               {/* Mock Table since actual lesson subject mapping is not fully populated in completedLessons array initially */}
               <div className="text-sm text-slate-500 text-center mt-10">
                   Die detaillierte Historie wird hier angezeigt, sobald die Kinder Lektionen abschließen.
               </div>
               
               {/* Simple activity log demo */}
               <div className="mt-auto flex flex-col gap-3">
                   <h4 className="font-semibold text-slate-700 text-sm">Letzte Aktivitäten</h4>
                   {profiles.map(p => (
                       p.completedLessons.length > 0 && (
                        <div key={p.id} className="text-xs bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex items-center gap-3">
                            <span>{p.avatar}</span> 
                            <div><span className="font-semibold">{p.name}</span> hat eine Lektion abgeschlossen.</div>
                        </div>
                       )
                   ))}
               </div>
            </div>
        </div>

      </div>
    </div>
  );
}

function StatBox({icon, label, value, color, bg}: any) {
    return (
        <div className={`${bg} rounded-2xl p-4 flex flex-col items-center justify-center text-center`}>
            <div className={`${color} mb-1`}>{icon}</div>
            <div className="text-xl font-bold text-slate-800 leading-tight">{value}</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</div>
        </div>
    )
}
