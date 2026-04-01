import sys

content = open("app/page.tsx", "r").read()
lines = content.split('\n')

import_idx = 0
for i, line in enumerate(lines):
    if "import { useProfilesStore" in line:
        import_idx = i
        break

if import_idx > 0:
    lines.insert(import_idx + 1, "import { LEHRPLAN_SUBJECTS } from '@/lib/constants/lehrplan';")
else:
    lines.insert(4, "import { LEHRPLAN_SUBJECTS } from '@/lib/constants/lehrplan';")

start_idx = -1
end_idx = -1
for i in range(len(lines)):
    if "  return (" in lines[i] and i+1 < len(lines) and "min-h-[100dvh]" in lines[i+1]:
        start_idx = i
    if "OpenMAIC Open Source Project" in lines[i]:
        end_idx = i + 4
        break

new_return = """  const currentSubject = typeof window !== 'undefined' ? sessionStorage.getItem('currentSubject') : null;
  const subjectObj = LEHRPLAN_SUBJECTS.find(s => s.id === currentSubject);
  const subjectName = subjectObj?.name || 'Dein Fach';
  const subjectEmoji = subjectObj?.emoji || '✨';

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center p-4 overflow-x-hidden font-sans relative">
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 z-[1] pointer-events-none">
         <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', bounce: 0.5 }}
        className="w-full max-w-3xl bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] border-white relative z-10"
      >
        <button 
          onClick={() => { router.push('/'); sessionStorage.removeItem('currentSubject'); }}
          className="absolute -top-6 -left-6 bg-white rounded-full p-4 shadow-xl border-4 border-indigo-100 hover:scale-110 transition-transform text-indigo-600 font-black flex items-center gap-2"
        >
          <ChevronDown className="rotate-90" size={24} /> Zurück
        </button>

        <div className="flex flex-col items-center mb-8">
          <div className="text-7xl mb-4 bg-indigo-50 w-32 h-32 rounded-full flex items-center justify-center border-4 border-indigo-100 shadow-inner">
            <span className="drop-shadow-sm">{subjectEmoji}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 text-center tracking-tight">
            Was machen wir heute in <span className="text-indigo-600">{subjectName}</span>?
          </h1>
        </div>

        <div className="relative w-full mb-6">
          <textarea
            value={form.requirement}
            onChange={(e) => updateForm('requirement', e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Schreibe hier rein, was wir zusammen machen sollen! (z.B. Bruchrechnen mit Pizza 🍕)"
            className="w-full bg-slate-50 border-4 border-slate-200 rounded-3xl p-6 text-xl md:text-2xl font-bold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all resize-none min-h-[160px] shadow-inner"
          />
          <div className="absolute bottom-4 right-4">
            <SpeechButton
              size="lg"
              onTranscription={(text) => {
                setForm((prev) => {
                  const next = prev.requirement + (prev.requirement ? ' ' : '') + text;
                  updateRequirementCache(next);
                  return { ...prev, requirement: next };
                });
              }}
            />
          </div>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6 bg-red-100 text-red-600 p-4 rounded-xl font-bold text-center border-2 border-red-200">
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={canGenerate ? { scale: 1.02 } : {}} whileTap={canGenerate ? { scale: 0.98 } : {}}
          onClick={handleGenerate}
          disabled={!canGenerate}
          className={`w-full py-5 rounded-2xl text-2xl font-black flex items-center justify-center gap-3 transition-all border-b-8 ${canGenerate ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-teal-600 shadow-xl hover:brightness-110 cursor-pointer' : 'bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed'}`}
        >
          Los geht's! 🚀
        </motion.button>
      </motion.div>
    </div>
  );"""

if start_idx != -1 and end_idx != -1:
    new_content = lines[:start_idx] + new_return.split('\n') + lines[end_idx:]
    open("app/page.tsx", "w").write('\n'.join(new_content))
    print(f"Success! Replaced lines {start_idx} to {end_idx}")
else:
    print(f"Failed. Start: {start_idx}, End: {end_idx}")
