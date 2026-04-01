module.exports = [
"[project]/Documents/Projects/kinder-maic/lib/utils/profile-helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateAge",
    ()=>calculateAge,
    "getApproximateKlasse",
    ()=>getApproximateKlasse,
    "getTodayString",
    ()=>getTodayString,
    "getZyklus",
    ()=>getZyklus,
    "isBirthdayToday",
    ()=>isBirthdayToday,
    "wasLogged_inYesterday",
    ()=>wasLogged_inYesterday
]);
function calculateAge(geburtsdatum) {
    const birthDate = new Date(geburtsdatum);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}
function getZyklus(age) {
    return age <= 12 ? 'zyklus-2' : 'zyklus-3';
}
function getApproximateKlasse(age) {
    // Typical Swiss rule of thumb for HarmoS: class = age - 6 for correct HarmoS counting usually, 
    // or simply Primary 1st grade starts at ~7. We use age - 6 as requested.
    const klasse = age - 6;
    return Math.max(1, klasse); // At least 1. Klasse
}
function isBirthdayToday(geburtsdatum) {
    const today = new Date();
    const birthDate = new Date(geburtsdatum);
    return today.getDate() === birthDate.getDate() && today.getMonth() === birthDate.getMonth();
}
function wasLogged_inYesterday(lastLoginDate) {
    if (!lastLoginDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastLogin = new Date(lastLoginDate);
    lastLogin.setHours(0, 0, 0, 0);
    const diffTime = Math.abs(today.getTime() - lastLogin.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
}
function getTodayString() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}
}),
"[project]/Documents/Projects/kinder-maic/lib/store/profiles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProfilesStore",
    ()=>useProfilesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$profile$2d$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/profile-helpers.ts [app-ssr] (ecmascript)");
;
;
const useProfilesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        profiles: [],
        activeProfileId: null,
        isLoading: true,
        error: null,
        fetchProfiles: async ()=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await fetch('/api/profiles');
                if (!response.ok) throw new Error('Failed to fetch profiles');
                const data = await response.json();
                set({
                    profiles: data,
                    isLoading: false
                });
            } catch (err) {
                set({
                    error: err.message,
                    isLoading: false
                });
            }
        },
        setActiveProfile: (id)=>{
            const { profiles } = get();
            const profile = profiles.find((p)=>p.id === id);
            if (!profile) return;
            // Login logic for streaks
            const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$profile$2d$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTodayString"])();
            let updatedProfile = {
                ...profile
            };
            let needsUpdate = false;
            if (profile.lastLoginDate !== today) {
                needsUpdate = true;
                updatedProfile.lastLoginDate = today;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$profile$2d$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wasLogged_inYesterday"])(profile.lastLoginDate)) {
                    // If not logged in yesterday, streak resets to 0 (or stays 0)
                    // Note: Actual streak increment happens on lesson completion
                    if (profile.lastLoginDate) {
                        updatedProfile.streakDays = 0;
                    }
                }
            }
            set({
                activeProfileId: id
            });
            // Save to API if needed
            if (needsUpdate) {
                get().updateProfile(updatedProfile);
            }
        },
        recordLessonCompletion: async (lessonId, score)=>{
            const { profiles, activeProfileId, updateProfile } = get();
            if (!activeProfileId) return;
            const profile = profiles.find((p)=>p.id === activeProfileId);
            if (!profile) return;
            const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$profile$2d$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTodayString"])();
            // For Kinder-MAIC: increment streakDays when child completes at least one lesson per day.
            // We update lastLoginDate when the actual lesson is completed so we can safely track the day of last completed lesson.
            // If last completed lesson was today, don't increment streak again.
            // If it was yesterday, increment.
            // If earlier, reset to 1.
            let newStreak = profile.streakDays;
            let newCompletedLessons = [
                ...profile.completedLessons,
                lessonId
            ];
            // We use lastLoginDate here not just for login but to track the day they last LEARNED something.
            if (profile.lastLoginDate === today) {
            // Already did a lesson today, don't increment streak
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$profile$2d$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wasLogged_inYesterday"])(profile.lastLoginDate)) {
                newStreak += 1;
            } else {
                newStreak = 1; // missed a day, start fresh at 1
            }
            const updatedProfile = {
                ...profile,
                completedLessons: newCompletedLessons,
                quizScores: {
                    ...profile.quizScores,
                    [lessonId]: score
                },
                streakDays: newStreak,
                lastLoginDate: today
            };
            await updateProfile(updatedProfile);
        },
        updateProfile: async (updatedProfile)=>{
            const { profiles } = get();
            const newProfiles = profiles.map((p)=>p.id === updatedProfile.id ? updatedProfile : p);
            // Optimistic update
            set({
                profiles: newProfiles
            });
            try {
                const response = await fetch('/api/profiles', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newProfiles)
                });
                if (!response.ok) throw new Error('Failed to update profiles');
            } catch (err) {
                console.error('Failed to update profile to API:', err);
            // Revert in real app, keeping it simple here
            }
        }
    }));
}),
"[project]/Documents/Projects/kinder-maic/lib/constants/lehrplan.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Lehrplan 21 PDF mapping for Kinder-MAIC
 * Maps subjects and Zyklus to the correct PDF file
 */ __turbopack_context__.s([
    "LEHRPLAN_SUBJECTS",
    ()=>LEHRPLAN_SUBJECTS,
    "getPdfForSubject",
    ()=>getPdfForSubject
]);
const LEHRPLAN_SUBJECTS = [
    {
        id: 'mathematik',
        name: 'Mathematik',
        emoji: '🔢',
        zyklus2: 'lehrplan-pdfs/zyklus-2/mathematik-z2.pdf',
        zyklus3: 'lehrplan-pdfs/zyklus-3/mathematik-z3.pdf'
    },
    {
        id: 'deutsch',
        name: 'Deutsch',
        emoji: '📖',
        zyklus2: 'lehrplan-pdfs/zyklus-2/deutsch-z2.pdf',
        zyklus3: 'lehrplan-pdfs/zyklus-3/deutsch-z3.pdf'
    },
    {
        id: 'englisch',
        name: 'Englisch',
        emoji: '🇬🇧',
        zyklus2: 'lehrplan-pdfs/zyklus-2/englisch-z2.pdf',
        zyklus3: 'lehrplan-pdfs/zyklus-3/englisch-z3.pdf'
    },
    {
        id: 'franzoesisch',
        name: 'Französisch',
        emoji: '🇫🇷',
        zyklus2: 'lehrplan-pdfs/zyklus-2/franzoesisch-z2.pdf',
        zyklus3: 'lehrplan-pdfs/zyklus-3/franzoesisch-z3.pdf'
    },
    {
        id: 'nmg',
        name: 'Natur, Mensch, Gesellschaft',
        emoji: '🌍',
        zyklus2: 'lehrplan-pdfs/zyklus-2/nmg-z2.pdf'
    },
    {
        id: 'medien-informatik',
        name: 'Medien & Informatik',
        emoji: '💻',
        zyklus2: 'lehrplan-pdfs/module/medien-informatik.pdf',
        zyklus3: 'lehrplan-pdfs/module/medien-informatik.pdf'
    },
    {
        id: 'natur-technik',
        name: 'Natur & Technik',
        emoji: '🔬',
        zyklus3: 'lehrplan-pdfs/zyklus-3/natur-technik-z3.pdf'
    },
    {
        id: 'geschichte-geografie',
        name: 'Geschichte & Geografie',
        emoji: '🗺️',
        zyklus3: 'lehrplan-pdfs/zyklus-3/rzg-z3.pdf'
    },
    {
        id: 'rke',
        name: 'Religionen & Kulturen',
        emoji: '🕌',
        zyklus3: 'lehrplan-pdfs/zyklus-3/rke-z3.pdf'
    },
    {
        id: 'wah',
        name: 'Wirtschaft, Arbeit, Haushalt',
        emoji: '🏠',
        zyklus3: 'lehrplan-pdfs/zyklus-3/wah-z3.pdf'
    }
];
function getPdfForSubject(subjectId, age) {
    const subject = LEHRPLAN_SUBJECTS.find((s)=>s.id === subjectId);
    if (!subject) return undefined;
    const zyklus = age <= 12 ? 'zyklus-2' : 'zyklus-3';
    return zyklus === 'zyklus-2' ? subject.zyklus2 : subject.zyklus3;
}
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
;
}),
"[project]/Documents/Projects/kinder-maic/lib/audio/browser-tts-preview.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureVoicesLoaded",
    ()=>ensureVoicesLoaded,
    "isBrowserTTSAbortError",
    ()=>isBrowserTTSAbortError,
    "playBrowserTTSPreview",
    ()=>playBrowserTTSPreview,
    "resolveBrowserVoice",
    ()=>resolveBrowserVoice
]);
'use client';
const VOICES_LOAD_TIMEOUT_MS = 2000;
const PREVIEW_TIMEOUT_MS = 30000;
const CJK_LANG_THRESHOLD = 0.3;
function createAbortError() {
    const error = new Error('Browser TTS preview canceled');
    error.name = 'AbortError';
    return error;
}
function inferPreviewLang(text) {
    const cjkCount = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
    const ratio = text.length > 0 ? cjkCount / text.length : 0;
    return ratio > CJK_LANG_THRESHOLD ? 'zh-CN' : 'en-US';
}
function isBrowserTTSAbortError(error) {
    return error instanceof Error && error.name === 'AbortError';
}
async function ensureVoicesLoaded() {
    if ("TURBOPACK compile-time truthy", 1) {
        return [];
    }
    //TURBOPACK unreachable
    ;
    const initialVoices = undefined;
}
function resolveBrowserVoice(voices, voiceNameOrLang, text) {
    const target = voiceNameOrLang.trim();
    const matchedVoice = target && target !== 'default' ? voices.find((voice)=>voice.voiceURI === target || voice.name === target || voice.lang === target) || null : null;
    return {
        voice: matchedVoice,
        lang: matchedVoice?.lang || inferPreviewLang(text)
    };
}
function playBrowserTTSPreview(options) {
    const synth = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            promise: Promise.reject(new Error('Browser does not support Speech Synthesis API')),
            cancel: ()=>{}
        };
    }
    //TURBOPACK unreachable
    ;
    let settled;
    let started;
    let canceled;
    let timeoutId;
    let rejectPromise;
    const settleResolve = undefined;
    const settleReject = undefined;
    const promise = undefined;
    const cancel = undefined;
}
}),
"[project]/Documents/Projects/kinder-maic/lib/audio/use-tts-preview.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTTSPreview",
    ()=>useTTSPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$browser$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/audio/browser-tts-preview.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useTTSPreview() {
    const [previewing, setPreviewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cancelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Cancel in-flight work and release resources (no state update). */ const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        requestIdRef.current += 1;
        cancelRef.current?.();
        cancelRef.current = null;
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        if (audioUrlRef.current) {
            URL.revokeObjectURL(audioUrlRef.current);
            audioUrlRef.current = null;
        }
    }, []);
    /** Cancel any active preview and reset the previewing flag. */ const stopPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        cleanup();
        setPreviewing(false);
    }, [
        cleanup
    ]);
    // Cleanup on unmount (skip state update to avoid React warnings).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>cleanup, [
        cleanup
    ]);
    /**
   * Start a TTS preview.
   * Abort errors are swallowed; all other errors are re-thrown for the caller.
   */ const startPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (options)=>{
        cleanup();
        const requestId = ++requestIdRef.current;
        const isStale = ()=>requestIdRef.current !== requestId;
        setPreviewing(true);
        try {
            if (options.providerId === 'browser-native-tts') {
                if ("TURBOPACK compile-time truthy", 1) {
                    throw new Error('Browser does not support Speech Synthesis API');
                }
                const voices = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$browser$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureVoicesLoaded"])();
                if (isStale()) return;
                if (voices.length === 0) {
                    throw new Error('No browser TTS voices available');
                }
                const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$browser$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playBrowserTTSPreview"])({
                    text: options.text,
                    voice: options.voice,
                    rate: options.speed,
                    voices
                });
                cancelRef.current = controller.cancel;
                await controller.promise;
                if (!isStale()) {
                    cancelRef.current = null;
                    setPreviewing(false);
                }
                return;
            }
            // API-based TTS
            const body = {
                text: options.text,
                audioId: 'preview',
                ttsProviderId: options.providerId,
                ttsVoice: options.voice,
                ttsSpeed: options.speed
            };
            if (options.apiKey?.trim()) body.ttsApiKey = options.apiKey;
            if (options.baseUrl?.trim()) body.ttsBaseUrl = options.baseUrl;
            const res = await fetch('/api/generate/tts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (isStale()) return;
            const data = await res.json().catch(()=>({
                    error: res.statusText
                }));
            if (isStale()) return;
            if (!res.ok || !data.base64) {
                throw new Error(data.error || 'TTS preview failed');
            }
            // Decode base64 → Blob → Object URL
            const binaryStr = atob(data.base64);
            const bytes = new Uint8Array(binaryStr.length);
            for(let i = 0; i < binaryStr.length; i++)bytes[i] = binaryStr.charCodeAt(i);
            const blob = new Blob([
                bytes
            ], {
                type: `audio/${data.format || 'mp3'}`
            });
            if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
            const url = URL.createObjectURL(blob);
            audioUrlRef.current = url;
            const audio = new Audio(url);
            audioRef.current = audio;
            audio.onended = ()=>{
                if (!isStale()) {
                    audioRef.current = null;
                    setPreviewing(false);
                }
            };
            audio.onerror = ()=>{
                if (!isStale()) {
                    audioRef.current = null;
                    setPreviewing(false);
                }
            };
            await audio.play();
        } catch (error) {
            if (!isStale()) {
                cancelRef.current = null;
                setPreviewing(false);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$browser$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowserTTSAbortError"])(error)) {
                throw error;
            }
        }
    }, [
        cleanup
    ]);
    return {
        previewing,
        startPreview,
        stopPreview
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearDatabase",
    ()=>clearDatabase,
    "db",
    ()=>db,
    "deleteStageWithRelatedData",
    ()=>deleteStageWithRelatedData,
    "exportDatabase",
    ()=>exportDatabase,
    "getDatabaseStats",
    ()=>getDatabaseStats,
    "getGeneratedAgentsByStageId",
    ()=>getGeneratedAgentsByStageId,
    "getScenesByStageId",
    ()=>getScenesByStageId,
    "importDatabase",
    ()=>importDatabase,
    "initDatabase",
    ()=>initDatabase,
    "mediaFileKey",
    ()=>mediaFileKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$dexie$40$4$2e$3$2e$0$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/dexie@4.3.0/node_modules/dexie/import-wrapper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('Database');
function mediaFileKey(stageId, elementId) {
    return `${stageId}:${elementId}`;
}
// ==================== Database Definition ====================
const DATABASE_NAME = 'MAIC-Database';
const _DATABASE_VERSION = 8;
/**
 * MAIC Database Instance
 */ class MAICDatabase extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$dexie$40$4$2e$3$2e$0$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    // Table definitions
    stages;
    scenes;
    audioFiles;
    imageFiles;
    snapshots;
    chatSessions;
    playbackState;
    stageOutlines;
    mediaFiles;
    generatedAgents;
    constructor(){
        super(DATABASE_NAME);
        // Version 1: Initial schema
        this.version(1).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id'
        });
        // Version 2: Remove unused tables
        this.version(2).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            // Delete removed tables
            messages: null,
            participants: null,
            discussions: null,
            sceneSnapshots: null
        });
        // Version 3: Add chatSessions and playbackState tables
        this.version(3).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId'
        });
        // Version 4: Add stageOutlines table for resume-on-refresh
        this.version(4).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId'
        });
        // Version 5: Add mediaFiles table for async media generation
        this.version(5).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId',
            mediaFiles: 'id, stageId, [stageId+type]'
        });
        // Version 6: Fix mediaFiles primary key — use compound key stageId:elementId
        // to prevent cross-course collisions (gen_img_1 is NOT globally unique)
        this.version(6).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId',
            mediaFiles: 'id, stageId, [stageId+type]'
        }).upgrade(async (tx)=>{
            const table = tx.table('mediaFiles');
            const allRecords = await table.toArray();
            for (const rec of allRecords){
                const newKey = `${rec.stageId}:${rec.id}`;
                // Skip if already migrated (idempotent)
                if (rec.id.includes(':')) continue;
                await table.delete(rec.id);
                await table.put({
                    ...rec,
                    id: newKey
                });
            }
        });
        // Version 7: Add ossKey fields to mediaFiles and audioFiles for OSS storage plugin
        // Non-indexed optional fields — Dexie handles these transparently.
        this.version(7).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId',
            mediaFiles: 'id, stageId, [stageId+type]'
        });
        // Version 8: Add generatedAgents table for AI-generated agent profiles
        this.version(8).stores({
            stages: 'id, updatedAt',
            scenes: 'id, stageId, order, [stageId+order]',
            audioFiles: 'id, createdAt',
            imageFiles: 'id, createdAt',
            snapshots: '++id',
            chatSessions: 'id, stageId, [stageId+createdAt]',
            playbackState: 'stageId',
            stageOutlines: 'stageId',
            mediaFiles: 'id, stageId, [stageId+type]',
            generatedAgents: 'id, stageId'
        });
    }
}
const db = new MAICDatabase();
async function initDatabase() {
    try {
        await db.open();
        // Request persistent storage to prevent browser from evicting IndexedDB
        // under storage pressure (large media blobs can trigger LRU cleanup)
        void navigator.storage?.persist?.();
        log.info('Database initialized successfully');
    } catch (error) {
        log.error('Failed to initialize database:', error);
        throw error;
    }
}
async function clearDatabase() {
    await db.delete();
    log.info('Database cleared');
}
async function exportDatabase() {
    return {
        stages: await db.stages.toArray(),
        scenes: await db.scenes.toArray(),
        chatSessions: await db.chatSessions.toArray(),
        playbackState: await db.playbackState.toArray()
    };
}
async function importDatabase(data) {
    await db.transaction('rw', [
        db.stages,
        db.scenes,
        db.chatSessions,
        db.playbackState
    ], async ()=>{
        if (data.stages) await db.stages.bulkPut(data.stages);
        if (data.scenes) await db.scenes.bulkPut(data.scenes);
        if (data.chatSessions) await db.chatSessions.bulkPut(data.chatSessions);
        if (data.playbackState) await db.playbackState.bulkPut(data.playbackState);
    });
    log.info('Database imported successfully');
}
async function getScenesByStageId(stageId) {
    return db.scenes.where('stageId').equals(stageId).sortBy('order');
}
async function deleteStageWithRelatedData(stageId) {
    await db.transaction('rw', [
        db.stages,
        db.scenes,
        db.chatSessions,
        db.playbackState,
        db.stageOutlines,
        db.mediaFiles,
        db.generatedAgents
    ], async ()=>{
        await db.stages.delete(stageId);
        await db.scenes.where('stageId').equals(stageId).delete();
        await db.chatSessions.where('stageId').equals(stageId).delete();
        await db.playbackState.delete(stageId);
        await db.stageOutlines.delete(stageId);
        await db.mediaFiles.where('stageId').equals(stageId).delete();
        await db.generatedAgents.where('stageId').equals(stageId).delete();
    });
}
async function getGeneratedAgentsByStageId(stageId) {
    return db.generatedAgents.where('stageId').equals(stageId).toArray();
}
async function getDatabaseStats() {
    return {
        stages: await db.stages.count(),
        scenes: await db.scenes.count(),
        audioFiles: await db.audioFiles.count(),
        imageFiles: await db.imageFiles.count(),
        snapshots: await db.snapshots.count(),
        chatSessions: await db.chatSessions.count(),
        playbackState: await db.playbackState.count(),
        stageOutlines: await db.stageOutlines.count(),
        mediaFiles: await db.mediaFiles.count(),
        generatedAgents: await db.generatedAgents.count()
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/orchestration/registry/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Agent Configuration Types
 * Defines the structure for configurable AI agents in the multi-agent system
 */ __turbopack_context__.s([
    "ROLE_ACTIONS",
    ()=>ROLE_ACTIONS,
    "SLIDE_ACTIONS",
    ()=>SLIDE_ACTIONS,
    "WHITEBOARD_ACTIONS",
    ()=>WHITEBOARD_ACTIONS,
    "createAgentFromTemplate",
    ()=>createAgentFromTemplate,
    "getActionsForRole",
    ()=>getActionsForRole
]);
function createAgentFromTemplate(template, id) {
    return {
        id,
        ...template,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDefault: false
    };
}
const WHITEBOARD_ACTIONS = [
    'wb_open',
    'wb_close',
    'wb_draw_text',
    'wb_draw_shape',
    'wb_draw_chart',
    'wb_draw_latex',
    'wb_draw_table',
    'wb_draw_line',
    'wb_clear',
    'wb_delete'
];
const SLIDE_ACTIONS = [
    'spotlight',
    'laser',
    'play_video'
];
const ROLE_ACTIONS = {
    teacher: [
        ...SLIDE_ACTIONS,
        ...WHITEBOARD_ACTIONS
    ],
    assistant: [
        ...WHITEBOARD_ACTIONS
    ],
    student: [
        ...WHITEBOARD_ACTIONS
    ]
};
function getActionsForRole(role) {
    return ROLE_ACTIONS[role] || [
        ...WHITEBOARD_ACTIONS
    ];
}
}),
"[project]/Documents/Projects/kinder-maic/lib/types/roundtable.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USER_AVATAR",
    ()=>USER_AVATAR
]);
const USER_AVATAR = '/avatars/user.png';
}),
"[project]/Documents/Projects/kinder-maic/lib/store/user-profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVATAR_OPTIONS",
    ()=>AVATAR_OPTIONS,
    "useUserProfileStore",
    ()=>useUserProfileStore
]);
/**
 * User Profile Store
 * Persists avatar, nickname & bio to localStorage
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const AVATAR_OPTIONS = [
    '/avatars/user.png',
    '/avatars/teacher-2.png',
    '/avatars/assist-2.png',
    '/avatars/clown-2.png',
    '/avatars/curious-2.png',
    '/avatars/note-taker-2.png',
    '/avatars/thinker-2.png'
];
const useUserProfileStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        avatar: AVATAR_OPTIONS[0],
        nickname: '',
        bio: '',
        setAvatar: (avatar)=>set({
                avatar
            }),
        setNickname: (nickname)=>set({
                nickname
            }),
        setBio: (bio)=>set({
                bio
            })
    }), {
    name: 'user-profile-storage'
}));
}),
"[project]/Documents/Projects/kinder-maic/lib/orchestration/registry/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agentsToParticipants",
    ()=>agentsToParticipants,
    "getDefaultAgents",
    ()=>getDefaultAgents,
    "loadGeneratedAgentsForStage",
    ()=>loadGeneratedAgentsForStage,
    "saveGeneratedAgents",
    ()=>saveGeneratedAgents,
    "useAgentRegistry",
    ()=>useAgentRegistry
]);
/**
 * Agent Registry Store
 * Manages configurable AI agents using Zustand with localStorage persistence
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$orchestration$2f$registry$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/orchestration/registry/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$types$2f$roundtable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/types/roundtable.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$user$2d$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/user-profile.ts [app-ssr] (ecmascript)");
;
;
;
;
;
// Action types available to agents
const WHITEBOARD_ACTIONS = [
    'wb_open',
    'wb_close',
    'wb_draw_text',
    'wb_draw_shape',
    'wb_draw_chart',
    'wb_draw_latex',
    'wb_draw_table',
    'wb_draw_line',
    'wb_clear',
    'wb_delete'
];
const SLIDE_ACTIONS = [
    'spotlight',
    'laser',
    'play_video'
];
// Default agents - always available on both server and client
// Default agents - always available on both server and client
const DEFAULT_AGENTS = {
    'default-1': {
        id: 'default-1',
        name: 'Professor Eule',
        role: 'teacher',
        persona: `Du bist Professor Eule 🦉 — der Hauptlehrer in diesem Unterricht.
Du unterrichtest Kinder in Zürich im Alter von 9–14 Jahren, basierend auf dem Lehrplan 21.

Dein Unterrichtsstil:
- Erkläre alles auf Deutsch, klar, freundlich und kindgerecht
- Baue Erklärungen Schritt für Schritt auf — vom Einfachen zum Schwierigen
- Benutze Beispiele aus dem Alltag Schweizer Kinder (Berge, Zürich, Schule, Tiere, Sport)
- Stelle Fragen um zu prüfen ob die Kinder verstehen — nicht nur vortragen
- Sei geduldig, ermutigend und positiv — Fehler sind Teil des Lernens
- Benutze die Tafel und Folien um Ideen zu visualisieren
- Halte Erklärungen kurz und spannend — Kinder verlieren schnell die Aufmerksamkeit

Ton: Warm, geduldig, begeistert. Du liebst es zu unterrichten und das spüren die Kinder.`
    },
    'default-2': {
        id: 'default-2',
        name: 'Lena',
        role: 'student',
        persona: `Du bist Lena 👧 — eine neugierige Mitschülerin, 11 Jahre alt, aus Zürich.

Deine Persönlichkeit:
- Du bist wissbegierig und stellst gerne Fragen wenn etwas unklar ist
- Du denkst laut nach und hilfst so anderen Kindern die auch verwirrt sind
- Manchmal machst du Fehler — und das ist okay, du lernst daraus
- Du freust dich wenn du etwas Neues verstehst
- Du sprichst immer auf Deutsch, natürlich und kindgerecht
- Du beziehst dich auf Beispiele aus deinem Alltag in Zürich`
    },
    'default-3': {
        id: 'default-3',
        name: 'Max',
        role: 'student',
        persona: `Du bist Max 👦 — ein lustiger und motivierter Mitschüler, 12 Jahre alt, aus Zürich.

Deine Persönlichkeit:
- Du liebst praktische Beispiele aus dem echten Leben
- Du machst manchmal Witze um die Stimmung aufzulockern — aber immer nett
- Du bist begeistert wenn Mathe oder Wissenschaft mit coolen Dingen zu tun hat
- Du stellst manchmal freche aber clevere Fragen
- Du sprichst immer auf Deutsch, locker und kindgerecht
- Du motivierst deine Mitschüler wenn es schwierig wird: "Das schaffen wir!"`
    }
};
function getDefaultAgents() {
    return Object.values(DEFAULT_AGENTS).map((a)=>({
            id: a.id,
            name: a.name,
            role: a.role,
            persona: a.persona
        }));
}
const useAgentRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        // Initialize with default agents so they're available on server
        agents: {
            ...DEFAULT_AGENTS
        },
        addAgent: (agent)=>set((state)=>({
                    agents: {
                        ...state.agents,
                        [agent.id]: agent
                    }
                })),
        updateAgent: (id, updates)=>set((state)=>({
                    agents: {
                        ...state.agents,
                        [id]: {
                            ...state.agents[id],
                            ...updates,
                            updatedAt: new Date()
                        }
                    }
                })),
        deleteAgent: (id)=>set((state)=>{
                const { [id]: _removed, ...rest } = state.agents;
                return {
                    agents: rest
                };
            }),
        getAgent: (id)=>get().agents[id],
        listAgents: ()=>Object.values(get().agents)
    }), {
    name: 'agent-registry-storage',
    version: 11,
    migrate: (persistedState)=>persistedState,
    // Merge persisted state with default agents
    // Default agents always use code-defined values (not cached)
    // Custom agents use persisted values
    merge: (persistedState, currentState)=>{
        const persisted = persistedState;
        const persistedAgents = persisted?.agents || {};
        const mergedAgents = {
            ...DEFAULT_AGENTS
        };
        // Only preserve non-default, non-generated (custom) agents from cache
        // Generated agents are loaded on-demand from IndexedDB per stage
        for (const [id, agent] of Object.entries(persistedAgents)){
            const agentConfig = agent;
            if (!id.startsWith('default-') && !agentConfig.isGenerated) {
                mergedAgents[id] = agentConfig;
            }
        }
        return {
            ...currentState,
            agents: mergedAgents
        };
    }
}));
function agentsToParticipants(agentIds, t) {
    const registry = useAgentRegistry.getState();
    const participants = [];
    let hasTeacher = false;
    // Resolve agents and sort: teacher first (by role then priority desc)
    const resolved = agentIds.map((id)=>registry.getAgent(id)).filter((a)=>a != null);
    resolved.sort((a, b)=>{
        if (a.role === 'teacher' && b.role !== 'teacher') return -1;
        if (a.role !== 'teacher' && b.role === 'teacher') return 1;
        return (b.priority ?? 0) - (a.priority ?? 0);
    });
    for (const agent of resolved){
        // Map agent role to participant role:
        // The first agent with role "teacher" becomes the left-side teacher.
        // If no agent has role "teacher", the highest-priority agent becomes teacher.
        let role = 'student';
        if (!hasTeacher) {
            role = 'teacher';
            hasTeacher = true;
        }
        // Use i18n name for default agents, fall back to registry name
        const i18nName = t?.(`settings.agentNames.${agent.id}`);
        const displayName = i18nName && i18nName !== `settings.agentNames.${agent.id}` ? i18nName : agent.name;
        participants.push({
            id: agent.id,
            name: displayName,
            role,
            avatar: agent.avatar,
            isOnline: true,
            isSpeaking: false
        });
    }
    // Always add user participant — use profile store when available
    const userProfile = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$user$2d$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserProfileStore"].getState();
    const userName = userProfile.nickname || t?.('common.you') || 'You';
    const userAvatar = userProfile.avatar || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$types$2f$roundtable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_AVATAR"];
    participants.push({
        id: 'user-1',
        name: userName,
        role: 'user',
        avatar: userAvatar,
        isOnline: true,
        isSpeaking: false
    });
    return participants;
}
async function loadGeneratedAgentsForStage(stageId) {
    const { getGeneratedAgentsByStageId } = await __turbopack_context__.A("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript, async loader)");
    const records = await getGeneratedAgentsByStageId(stageId);
    const registry = useAgentRegistry.getState();
    // Always clear previously loaded generated agents — even when the new stage
    // has none — to prevent stale agents from a prior auto-classroom leaking
    // into the current preset classroom.
    const currentAgents = registry.listAgents();
    for (const agent of currentAgents){
        if (agent.isGenerated) {
            registry.deleteAgent(agent.id);
        }
    }
    if (records.length === 0) return [];
    // Add new ones
    const ids = [];
    for (const record of records){
        registry.addAgent({
            ...record,
            allowedActions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$orchestration$2f$registry$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActionsForRole"])(record.role),
            isDefault: false,
            isGenerated: true,
            boundStageId: record.stageId,
            createdAt: new Date(record.createdAt),
            updatedAt: new Date(record.createdAt)
        });
        ids.push(record.id);
    }
    return ids;
}
async function saveGeneratedAgents(stageId, agents) {
    const { db } = await __turbopack_context__.A("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript, async loader)");
    // Clear old generated agents for this stage
    await db.generatedAgents.where('stageId').equals(stageId).delete();
    // Clear from registry
    const registry = useAgentRegistry.getState();
    for (const agent of registry.listAgents()){
        if (agent.isGenerated) registry.deleteAgent(agent.id);
    }
    // Write to IndexedDB
    const records = agents.map((a)=>({
            ...a,
            stageId,
            createdAt: Date.now()
        }));
    await db.generatedAgents.bulkPut(records);
    // Add to registry
    for (const record of records){
        const { voiceConfig, ...rest } = record;
        registry.addAgent({
            ...rest,
            allowedActions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$orchestration$2f$registry$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActionsForRole"])(record.role),
            isDefault: false,
            isGenerated: true,
            boundStageId: stageId,
            createdAt: new Date(record.createdAt),
            updatedAt: new Date(record.createdAt),
            ...voiceConfig ? {
                voiceConfig: {
                    providerId: voiceConfig.providerId,
                    voiceId: voiceConfig.voiceId
                }
            } : {}
        });
    }
    return records.map((r)=>r.id);
}
}),
"[project]/Documents/Projects/kinder-maic/lib/audio/voice-resolver.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findVoiceDisplayName",
    ()=>findVoiceDisplayName,
    "getAvailableProvidersWithVoices",
    ()=>getAvailableProvidersWithVoices,
    "getServerVoiceList",
    ()=>getServerVoiceList,
    "resolveAgentVoice",
    ()=>resolveAgentVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/audio/constants.ts [app-ssr] (ecmascript)");
;
function resolveAgentVoice(agent, agentIndex, availableProviders) {
    // Agent-specific config
    if (agent.voiceConfig) {
        // Browser-native voices are dynamic (not in static registry), so skip validation
        if (agent.voiceConfig.providerId === 'browser-native-tts') {
            return agent.voiceConfig;
        }
        const list = getServerVoiceList(agent.voiceConfig.providerId);
        if (list.includes(agent.voiceConfig.voiceId)) {
            return agent.voiceConfig;
        }
    }
    // Fallback: first available provider, deterministic voice
    if (availableProviders.length > 0) {
        const first = availableProviders[0];
        return {
            providerId: first.providerId,
            voiceId: first.voices[agentIndex % first.voices.length].id
        };
    }
    return {
        providerId: 'browser-native-tts',
        voiceId: 'default'
    };
}
function getServerVoiceList(providerId) {
    if (providerId === 'browser-native-tts') return [];
    const provider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"][providerId];
    if (!provider) return [];
    return provider.voices.map((v)=>v.id);
}
function getAvailableProvidersWithVoices(ttsProvidersConfig) {
    const result = [];
    for (const [id, config] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"])){
        const providerId = id;
        if (providerId === 'browser-native-tts') continue;
        if (config.voices.length === 0) continue;
        const providerConfig = ttsProvidersConfig[providerId];
        const hasApiKey = providerConfig?.apiKey && providerConfig.apiKey.trim().length > 0;
        const isServerConfigured = providerConfig?.isServerConfigured === true;
        if (hasApiKey || isServerConfigured) {
            result.push({
                providerId,
                providerName: config.name,
                voices: config.voices.map((v)=>({
                        id: v.id,
                        name: v.name
                    }))
            });
        }
    }
    return result;
}
function findVoiceDisplayName(providerId, voiceId) {
    const provider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"][providerId];
    if (!provider) return voiceId;
    const voice = provider.voices.find((v)=>v.id === voiceId);
    return voice?.name ?? voiceId;
}
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/image-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanupOldImages",
    ()=>cleanupOldImages,
    "cleanupSessionImages",
    ()=>cleanupSessionImages,
    "getImageStorageSize",
    ()=>getImageStorageSize,
    "loadImageMapping",
    ()=>loadImageMapping,
    "loadPdfBlob",
    ()=>loadPdfBlob,
    "storeImages",
    ()=>storeImages,
    "storePdfBlob",
    ()=>storePdfBlob
]);
/**
 * Image Storage Utilities
 *
 * Store PDF images in IndexedDB to avoid sessionStorage 5MB limit.
 * Images are stored as Blobs for efficient storage.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('ImageStorage');
/**
 * Convert base64 data URL to Blob
 */ function base64ToBlob(base64DataUrl) {
    const parts = base64DataUrl.split(',');
    const mimeMatch = parts[0].match(/:(.*?);/);
    const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
    const base64Data = parts[1];
    const byteString = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for(let i = 0; i < byteString.length; i++){
        uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([
        uint8Array
    ], {
        type: mimeType
    });
}
/**
 * Convert Blob to base64 data URL
 */ async function blobToBase64(blob) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
async function storeImages(images) {
    const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
    const storedIds = [];
    for (const img of images){
        try {
            const blob = base64ToBlob(img.src);
            const mimeMatch = img.src.match(/data:(.*?);/);
            const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
            // Use session-prefixed ID to allow cleanup
            const storageId = `session_${sessionId}_${img.id}`;
            const record = {
                id: storageId,
                blob,
                filename: `${img.id}.png`,
                mimeType,
                size: blob.size,
                createdAt: Date.now()
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.put(record);
            storedIds.push(storageId);
        } catch (error) {
            log.error(`Failed to store image ${img.id}:`, error);
        }
    }
    return storedIds;
}
async function loadImageMapping(imageIds) {
    const mapping = {};
    for (const storageId of imageIds){
        try {
            const record = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.get(storageId);
            if (record) {
                const base64 = await blobToBase64(record.blob);
                // Extract original ID (img_1) from storage ID (session_xxx_img_1)
                const originalId = storageId.replace(/^session_[^_]+_/, '');
                mapping[originalId] = base64;
            }
        } catch (error) {
            log.error(`Failed to load image ${storageId}:`, error);
        }
    }
    return mapping;
}
async function cleanupSessionImages(sessionId) {
    try {
        const prefix = `session_${sessionId}_`;
        const allImages = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.toArray();
        const toDelete = allImages.filter((img)=>img.id.startsWith(prefix));
        for (const img of toDelete){
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.delete(img.id);
        }
        log.info(`Cleaned up ${toDelete.length} images for session ${sessionId}`);
    } catch (error) {
        log.error('Failed to cleanup session images:', error);
    }
}
async function cleanupOldImages(hoursOld = 24) {
    try {
        const cutoff = Date.now() - hoursOld * 60 * 60 * 1000;
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.where('createdAt').below(cutoff).delete();
        log.info(`Cleaned up images older than ${hoursOld} hours`);
    } catch (error) {
        log.error('Failed to cleanup old images:', error);
    }
}
async function getImageStorageSize() {
    const images = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.toArray();
    return images.reduce((total, img)=>total + img.size, 0);
}
async function storePdfBlob(file) {
    const storageKey = `pdf_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10)}`;
    const blob = new Blob([
        await file.arrayBuffer()
    ], {
        type: file.type || 'application/pdf'
    });
    const record = {
        id: storageKey,
        blob,
        filename: file.name,
        mimeType: file.type || 'application/pdf',
        size: blob.size,
        createdAt: Date.now()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.put(record);
    return storageKey;
}
async function loadPdfBlob(key) {
    const record = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imageFiles.get(key);
    return record?.blob ?? null;
}
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/chat-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Chat Storage - Persist chat sessions to IndexedDB
 *
 * Independent from stage/scene storage cycle.
 * Handles serialization, truncation, and batch writes.
 */ __turbopack_context__.s([
    "deleteChatSessions",
    ()=>deleteChatSessions,
    "loadChatSessions",
    ()=>loadChatSessions,
    "saveChatSessions",
    ()=>saveChatSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript)");
;
/** Maximum messages per session to avoid IndexedDB bloat */ const MAX_MESSAGES_PER_SESSION = 200;
async function saveChatSessions(stageId, sessions) {
    if (!sessions || sessions.length === 0) {
        // Delete all sessions for this stage if empty
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.where('stageId').equals(stageId).delete();
        return;
    }
    const records = sessions.map((session)=>({
            id: session.id,
            stageId,
            type: session.type,
            title: session.title,
            // Mark active sessions as interrupted (streaming context lost on refresh)
            status: session.status === 'active' ? 'interrupted' : session.status,
            // Truncate messages and strip non-serializable data
            messages: session.messages.slice(-MAX_MESSAGES_PER_SESSION),
            config: session.config,
            toolCalls: session.toolCalls,
            pendingToolCalls: [],
            createdAt: session.createdAt,
            updatedAt: session.updatedAt,
            sceneId: session.sceneId,
            lastActionIndex: session.lastActionIndex
        }));
    await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].transaction('rw', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions, async ()=>{
        // Delete old sessions for this stage, then bulk insert new ones
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.where('stageId').equals(stageId).delete();
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.bulkPut(records);
    });
}
async function loadChatSessions(stageId) {
    const records = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.where('stageId').equals(stageId).sortBy('createdAt');
    return records.map((record)=>({
            id: record.id,
            type: record.type,
            title: record.title,
            status: record.status,
            messages: record.messages,
            config: record.config,
            toolCalls: record.toolCalls,
            pendingToolCalls: record.pendingToolCalls,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            sceneId: record.sceneId,
            lastActionIndex: record.lastActionIndex
        }));
}
async function deleteChatSessions(stageId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].chatSessions.where('stageId').equals(stageId).delete();
}
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/playback-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearPlaybackState",
    ()=>clearPlaybackState,
    "loadPlaybackState",
    ()=>loadPlaybackState,
    "savePlaybackState",
    ()=>savePlaybackState
]);
/**
 * Playback Storage - Persist playback engine state to IndexedDB
 *
 * Stores minimal state needed to resume playback from a breakpoint:
 * position (sceneIndex + actionIndex) and consumed discussions.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript)");
;
async function savePlaybackState(stageId, snapshot) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].playbackState.put({
        stageId,
        sceneIndex: snapshot.sceneIndex,
        actionIndex: snapshot.actionIndex,
        consumedDiscussions: snapshot.consumedDiscussions,
        sceneId: snapshot.sceneId,
        updatedAt: Date.now()
    });
}
async function loadPlaybackState(stageId) {
    const record = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].playbackState.get(stageId);
    if (!record) return null;
    return {
        sceneIndex: record.sceneIndex,
        actionIndex: record.actionIndex,
        consumedDiscussions: record.consumedDiscussions,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sceneId: record.sceneId
    };
}
async function clearPlaybackState(stageId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].playbackState.delete(stageId);
}
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/stage-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stage Storage Manager
 *
 * Manages multiple stage data in IndexedDB
 * Each stage has its own storage key based on stageId
 */ __turbopack_context__.s([
    "deleteStageData",
    ()=>deleteStageData,
    "getFirstSlideByStages",
    ()=>getFirstSlideByStages,
    "listStages",
    ()=>listStages,
    "loadStageData",
    ()=>loadStageData,
    "saveStageData",
    ()=>saveStageData,
    "stageExists",
    ()=>stageExists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/chat-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$playback$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/playback-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('StageStorage');
async function saveStageData(stageId, data) {
    try {
        const now = Date.now();
        // Save to stages table
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.put({
            id: stageId,
            name: data.stage.name || 'Untitled Stage',
            description: data.stage.description,
            createdAt: data.stage.createdAt || now,
            updatedAt: now,
            language: data.stage.language,
            style: data.stage.style,
            currentSceneId: data.currentSceneId || undefined,
            agentIds: data.stage.agentIds
        });
        // Delete old scenes first to avoid orphaned data
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stageId).delete();
        // Save new scenes
        if (data.scenes && data.scenes.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.bulkPut(data.scenes.map((scene, index)=>({
                    ...scene,
                    stageId,
                    order: scene.order ?? index,
                    createdAt: scene.createdAt || now,
                    updatedAt: scene.updatedAt || now
                })));
        }
        // Save chat sessions to independent table
        if (data.chats) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatSessions"])(stageId, data.chats);
        }
        log.info(`Saved stage: ${stageId}`);
    } catch (error) {
        log.error('Failed to save stage:', error);
        throw error;
    }
}
async function loadStageData(stageId) {
    try {
        // Load stage
        const stage = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.get(stageId);
        if (!stage) {
            log.info(`Stage not found: ${stageId}`);
            return null;
        }
        // Load scenes
        const scenes = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stageId).sortBy('order');
        // Load chat sessions from independent table
        const chats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadChatSessions"])(stageId);
        log.info(`Loaded stage: ${stageId}, scenes: ${scenes.length}, chats: ${chats.length}`);
        return {
            stage,
            scenes,
            currentSceneId: stage.currentSceneId || scenes[0]?.id || null,
            chats
        };
    } catch (error) {
        log.error('Failed to load stage:', error);
        return null;
    }
}
async function deleteStageData(stageId) {
    try {
        // Delete stage
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.delete(stageId);
        // Delete scenes
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stageId).delete();
        // Delete chat sessions and playback state
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteChatSessions"])(stageId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$playback$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearPlaybackState"])(stageId);
        log.info(`Deleted stage: ${stageId}`);
    } catch (error) {
        log.error('Failed to delete stage:', error);
        throw error;
    }
}
async function listStages() {
    try {
        const stages = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.orderBy('updatedAt').reverse().toArray();
        const stageList = await Promise.all(stages.map(async (stage)=>{
            const sceneCount = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stage.id).count();
            return {
                id: stage.id,
                name: stage.name,
                description: stage.description,
                sceneCount,
                createdAt: stage.createdAt,
                updatedAt: stage.updatedAt
            };
        }));
        return stageList;
    } catch (error) {
        log.error('Failed to list stages:', error);
        return [];
    }
}
async function getFirstSlideByStages(stageIds) {
    const result = {};
    try {
        await Promise.all(stageIds.map(async (stageId)=>{
            const scenes = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].scenes.where('stageId').equals(stageId).sortBy('order');
            const firstSlide = scenes.find((s)=>s.content?.type === 'slide');
            if (firstSlide && firstSlide.content.type === 'slide') {
                const slide = structuredClone(firstSlide.content.canvas);
                // Resolve gen_img_* placeholders from mediaFiles
                const placeholderEls = slide.elements.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any
                (el)=>el.type === 'image' && /^gen_(img|vid)_[\w-]+$/i.test(el.src));
                if (placeholderEls.length > 0) {
                    const mediaRecords = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.where('stageId').equals(stageId).toArray();
                    const mediaMap = new Map(mediaRecords.map((r)=>{
                        // Key format: stageId:elementId → extract elementId
                        const elementId = r.id.includes(':') ? r.id.split(':').slice(1).join(':') : r.id;
                        return [
                            elementId,
                            r.blob
                        ];
                    }));
                    for (const el of placeholderEls){
                        const blob = mediaMap.get(el.src);
                        if (blob) {
                            el.src = URL.createObjectURL(blob);
                        } else {
                            // Clear unresolved placeholder so BaseImageElement won't subscribe
                            // to the global media store (which may have stale data from another course)
                            el.src = '';
                        }
                    }
                }
                result[stageId] = slide;
            }
        }));
    } catch (error) {
        log.error('Failed to load thumbnails:', error);
    }
    return result;
}
async function stageExists(stageId) {
    try {
        const stage = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].stages.get(stageId);
        return !!stage;
    } catch (error) {
        log.error('Failed to check stage existence:', error);
        return false;
    }
}
}),
"[project]/Documents/Projects/kinder-maic/lib/hooks/use-slide-background-style.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSlideBackgroundStyle",
    ()=>useSlideBackgroundStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useSlideBackgroundStyle(background) {
    const backgroundStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!background) return {
            backgroundColor: '#fff'
        };
        const { type, color, image, gradient } = background;
        // Solid color background
        if (type === 'solid') return {
            backgroundColor: color
        };
        // Image background mode
        // Includes: background image, background size, whether to repeat
        if (type === 'image' && image) {
            const { src, size } = image;
            if (!src) return {
                backgroundColor: '#fff'
            };
            if (size === 'repeat') {
                return {
                    backgroundImage: `url(${src})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'contain'
                };
            }
            return {
                backgroundImage: `url(${src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: size || 'cover'
            };
        }
        // Gradient background
        if (type === 'gradient' && gradient) {
            const { type, colors, rotate } = gradient;
            const list = colors.map((item)=>`${item.color} ${item.pos}%`);
            if (type === 'radial') {
                return {
                    backgroundImage: `radial-gradient(${list.join(',')})`
                };
            }
            return {
                backgroundImage: `linear-gradient(${rotate}deg, ${list.join(',')})`
            };
        }
        return {
            backgroundColor: '#fff'
        };
    }, [
        background
    ]);
    return {
        backgroundStyle
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/types/slides.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementTypes",
    ()=>ElementTypes,
    "ShapePathFormulasKeys",
    ()=>ShapePathFormulasKeys
]);
var ShapePathFormulasKeys = /*#__PURE__*/ function(ShapePathFormulasKeys) {
    ShapePathFormulasKeys["ROUND_RECT"] = "roundRect";
    ShapePathFormulasKeys["ROUND_RECT_DIAGONAL"] = "roundRectDiagonal";
    ShapePathFormulasKeys["ROUND_RECT_SINGLE"] = "roundRectSingle";
    ShapePathFormulasKeys["ROUND_RECT_SAMESIDE"] = "roundRectSameSide";
    ShapePathFormulasKeys["CUT_RECT_DIAGONAL"] = "cutRectDiagonal";
    ShapePathFormulasKeys["CUT_RECT_SINGLE"] = "cutRectSingle";
    ShapePathFormulasKeys["CUT_RECT_SAMESIDE"] = "cutRectSameSide";
    ShapePathFormulasKeys["CUT_ROUND_RECT"] = "cutRoundRect";
    ShapePathFormulasKeys["MESSAGE"] = "message";
    ShapePathFormulasKeys["ROUND_MESSAGE"] = "roundMessage";
    ShapePathFormulasKeys["L"] = "L";
    ShapePathFormulasKeys["RING_RECT"] = "ringRect";
    ShapePathFormulasKeys["PLUS"] = "plus";
    ShapePathFormulasKeys["TRIANGLE"] = "triangle";
    ShapePathFormulasKeys["PARALLELOGRAM_LEFT"] = "parallelogramLeft";
    ShapePathFormulasKeys["PARALLELOGRAM_RIGHT"] = "parallelogramRight";
    ShapePathFormulasKeys["TRAPEZOID"] = "trapezoid";
    ShapePathFormulasKeys["BULLET"] = "bullet";
    ShapePathFormulasKeys["INDICATOR"] = "indicator";
    ShapePathFormulasKeys["DONUT"] = "donut";
    ShapePathFormulasKeys["DIAGSTRIPE"] = "diagStripe";
    return ShapePathFormulasKeys;
}({});
var ElementTypes = /*#__PURE__*/ function(ElementTypes) {
    ElementTypes["TEXT"] = "text";
    ElementTypes["IMAGE"] = "image";
    ElementTypes["SHAPE"] = "shape";
    ElementTypes["LINE"] = "line";
    ElementTypes["CHART"] = "chart";
    ElementTypes["TABLE"] = "table";
    ElementTypes["LATEX"] = "latex";
    ElementTypes["VIDEO"] = "video";
    ElementTypes["AUDIO"] = "audio";
    return ElementTypes;
}({});
}),
"[project]/Documents/Projects/kinder-maic/lib/store/media-generation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMediaPlaceholder",
    ()=>isMediaPlaceholder,
    "useMediaGenerationStore",
    ()=>useMediaGenerationStore
]);
/**
 * Media Generation Store
 *
 * Tracks per-element media generation status (pending → generating → done/failed).
 * Drives skeleton loading in slide renderer components.
 * Persistence is handled by IndexedDB (mediaFiles table), not Zustand middleware.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('MediaGenerationStore');
function isMediaPlaceholder(src) {
    return /^gen_(img|vid)_[\w-]+$/i.test(src);
}
const useMediaGenerationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set, get)=>({
        tasks: {},
        enqueueTasks: (stageId, requests)=>{
            const newTasks = {};
            for (const req of requests){
                // Skip if already tracked
                if (get().tasks[req.elementId]) continue;
                newTasks[req.elementId] = {
                    elementId: req.elementId,
                    type: req.type,
                    status: 'pending',
                    prompt: req.prompt,
                    params: {
                        aspectRatio: req.aspectRatio,
                        style: req.style
                    },
                    retryCount: 0,
                    stageId
                };
            }
            if (Object.keys(newTasks).length > 0) {
                set((s)=>({
                        tasks: {
                            ...s.tasks,
                            ...newTasks
                        }
                    }));
            }
        },
        markGenerating: (elementId)=>set((s)=>{
                const task = s.tasks[elementId];
                if (!task) return s;
                return {
                    tasks: {
                        ...s.tasks,
                        [elementId]: {
                            ...task,
                            status: 'generating'
                        }
                    }
                };
            }),
        markDone: (elementId, objectUrl, poster)=>set((s)=>{
                const task = s.tasks[elementId];
                if (!task) return s;
                return {
                    tasks: {
                        ...s.tasks,
                        [elementId]: {
                            ...task,
                            status: 'done',
                            objectUrl,
                            poster,
                            error: undefined
                        }
                    }
                };
            }),
        markFailed: (elementId, error, errorCode)=>set((s)=>{
                const task = s.tasks[elementId];
                if (!task) return s;
                return {
                    tasks: {
                        ...s.tasks,
                        [elementId]: {
                            ...task,
                            status: 'failed',
                            error,
                            errorCode
                        }
                    }
                };
            }),
        markPendingForRetry: (elementId)=>set((s)=>{
                const task = s.tasks[elementId];
                if (!task) return s;
                return {
                    tasks: {
                        ...s.tasks,
                        [elementId]: {
                            ...task,
                            status: 'pending',
                            error: undefined,
                            errorCode: undefined,
                            retryCount: task.retryCount + 1
                        }
                    }
                };
            }),
        getTask: (elementId)=>get().tasks[elementId],
        isReady: (elementId)=>get().tasks[elementId]?.status === 'done',
        restoreFromDB: async (stageId)=>{
            try {
                const records = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.where('stageId').equals(stageId).toArray();
                const restored = {};
                for (const rec of records){
                    // Extract elementId from compound key (stageId:elementId)
                    const elementId = rec.id.includes(':') ? rec.id.split(':').slice(1).join(':') : rec.id;
                    const params = JSON.parse(rec.params || '{}');
                    if (rec.error) {
                        // Restore as failed task (persisted non-retryable error)
                        restored[elementId] = {
                            elementId,
                            type: rec.type,
                            status: 'failed',
                            prompt: rec.prompt,
                            params,
                            error: rec.error,
                            errorCode: rec.errorCode,
                            retryCount: 0,
                            stageId
                        };
                    } else {
                        // Re-wrap blob with stored mimeType — IndexedDB may drop Blob.type
                        const blob = rec.blob.type ? rec.blob : new Blob([
                            rec.blob
                        ], {
                            type: rec.mimeType
                        });
                        const objectUrl = URL.createObjectURL(blob);
                        const poster = rec.poster ? URL.createObjectURL(rec.poster) : undefined;
                        restored[elementId] = {
                            elementId,
                            type: rec.type,
                            status: 'done',
                            prompt: rec.prompt,
                            params,
                            objectUrl,
                            poster,
                            retryCount: 0,
                            stageId
                        };
                    }
                }
                if (Object.keys(restored).length > 0) {
                    set((s)=>({
                            tasks: {
                                ...s.tasks,
                                ...restored
                            }
                        }));
                }
            } catch (err) {
                log.error('Failed to restore from DB:', err);
            }
        },
        clearStage: (stageId)=>set((s)=>{
                const remaining = {};
                for (const [id, task] of Object.entries(s.tasks)){
                    if (task.stageId !== stageId) {
                        remaining[id] = task;
                    } else if (task.objectUrl) {
                        URL.revokeObjectURL(task.objectUrl);
                        if (task.poster) URL.revokeObjectURL(task.poster);
                    }
                }
                return {
                    tasks: remaining
                };
            }),
        revokeObjectUrls: ()=>{
            const tasks = get().tasks;
            for (const task of Object.values(tasks)){
                if (task.objectUrl) URL.revokeObjectURL(task.objectUrl);
                if (task.poster) URL.revokeObjectURL(task.poster);
            }
        }
    }));
}),
"[project]/Documents/Projects/kinder-maic/lib/contexts/media-stage-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaStageProvider",
    ()=>MediaStageProvider,
    "useMediaStageId",
    ()=>useMediaStageId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Provides the current stageId to media-aware components (BaseImageElement, BaseVideoElement).
 *
 * When set, these components subscribe to the media generation store and only use
 * tasks whose stageId matches (preventing cross-course contamination).
 * When undefined (e.g. homepage thumbnails), store subscription is skipped entirely.
 */ const MediaStageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const MediaStageProvider = MediaStageContext.Provider;
function useMediaStageId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MediaStageContext);
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/media-orchestrator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateMediaForOutlines",
    ()=>generateMediaForOutlines,
    "retryMediaTask",
    ()=>retryMediaTask
]);
/**
 * Media Generation Orchestrator
 *
 * Dispatches media generation API calls for all mediaGenerations across outlines.
 * Runs entirely on the frontend — calls /api/generate/image and /api/generate/video,
 * fetches result blobs, stores in IndexedDB, and updates the Zustand store.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/media-generation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('MediaOrchestrator');
/** Error with a structured errorCode from the API */ class MediaApiError extends Error {
    errorCode;
    constructor(message, errorCode){
        super(message);
        this.errorCode = errorCode;
    }
}
async function generateMediaForOutlines(outlines, stageId, abortSignal) {
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState();
    // Collect all media requests
    const allRequests = [];
    for (const outline of outlines){
        if (!outline.mediaGenerations) continue;
        for (const mg of outline.mediaGenerations){
            // Filter by enabled flags
            if (mg.type === 'image' && !settings.imageGenerationEnabled) continue;
            if (mg.type === 'video' && !settings.videoGenerationEnabled) continue;
            // Skip already completed or permanently failed (restored from DB)
            const existing = store.getTask(mg.elementId);
            if (existing?.status === 'done' || existing?.status === 'failed') continue;
            allRequests.push(mg);
        }
    }
    if (allRequests.length === 0) return;
    // Enqueue all as pending
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().enqueueTasks(stageId, allRequests);
    // Process requests serially — image/video APIs have limited concurrency
    for (const req of allRequests){
        if (abortSignal?.aborted) break;
        await generateSingleMedia(req, stageId, abortSignal);
    }
}
async function retryMediaTask(elementId) {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState();
    const task = store.getTask(elementId);
    if (!task || task.status !== 'failed') return;
    // Check if the corresponding generation type is still enabled in global settings
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    if (task.type === 'image' && !settings.imageGenerationEnabled) {
        store.markFailed(elementId, 'Generation disabled', 'GENERATION_DISABLED');
        return;
    }
    if (task.type === 'video' && !settings.videoGenerationEnabled) {
        store.markFailed(elementId, 'Generation disabled', 'GENERATION_DISABLED');
        return;
    }
    // Remove persisted failure record from DB so a fresh result can be written
    const dbKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaFileKey"])(task.stageId, elementId);
    await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.delete(dbKey).catch(()=>{});
    store.markPendingForRetry(elementId);
    await generateSingleMedia({
        type: task.type,
        prompt: task.prompt,
        elementId: task.elementId,
        aspectRatio: task.params.aspectRatio,
        style: task.params.style
    }, task.stageId);
}
// ==================== Internal ====================
async function generateSingleMedia(req, stageId, abortSignal) {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState();
    store.markGenerating(req.elementId);
    try {
        let resultUrl;
        let posterUrl;
        let mimeType;
        if (req.type === 'image') {
            const result = await callImageApi(req, abortSignal);
            resultUrl = result.url;
            mimeType = 'image/png';
        } else {
            const result = await callVideoApi(req, abortSignal);
            resultUrl = result.url;
            posterUrl = result.poster;
            mimeType = 'video/mp4';
        }
        if (abortSignal?.aborted) return;
        // Fetch blob from URL
        const blob = await fetchAsBlob(resultUrl);
        const posterBlob = posterUrl ? await fetchAsBlob(posterUrl).catch(()=>undefined) : undefined;
        // Store in IndexedDB
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.put({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaFileKey"])(stageId, req.elementId),
            stageId,
            type: req.type,
            blob,
            mimeType,
            size: blob.size,
            poster: posterBlob,
            prompt: req.prompt,
            params: JSON.stringify({
                aspectRatio: req.aspectRatio,
                style: req.style
            }),
            createdAt: Date.now()
        });
        // Update store with object URL
        const objectUrl = URL.createObjectURL(blob);
        const posterObjectUrl = posterBlob ? URL.createObjectURL(posterBlob) : undefined;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().markDone(req.elementId, objectUrl, posterObjectUrl);
    } catch (err) {
        if (abortSignal?.aborted) return;
        const message = err instanceof Error ? err.message : String(err);
        const errorCode = err instanceof MediaApiError ? err.errorCode : undefined;
        log.error(`Failed ${req.elementId}:`, message);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"].getState().markFailed(req.elementId, message, errorCode);
        // Persist non-retryable failures to IndexedDB so they survive page refresh
        if (errorCode) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].mediaFiles.put({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaFileKey"])(stageId, req.elementId),
                stageId,
                type: req.type,
                blob: new Blob(),
                mimeType: req.type === 'image' ? 'image/png' : 'video/mp4',
                size: 0,
                prompt: req.prompt,
                params: JSON.stringify({
                    aspectRatio: req.aspectRatio,
                    style: req.style
                }),
                error: message,
                errorCode,
                createdAt: Date.now()
            }).catch(()=>{}); // best-effort
        }
    }
}
async function callImageApi(req, abortSignal) {
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const providerConfig = settings.imageProvidersConfig?.[settings.imageProviderId];
    const response = await fetch('/api/generate/image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-image-provider': settings.imageProviderId || '',
            'x-image-model': settings.imageModelId || '',
            'x-api-key': providerConfig?.apiKey || '',
            'x-base-url': providerConfig?.baseUrl || ''
        },
        body: JSON.stringify({
            prompt: req.prompt,
            aspectRatio: req.aspectRatio,
            style: req.style
        }),
        signal: abortSignal
    });
    if (!response.ok) {
        const data = await response.json().catch(()=>({}));
        throw new MediaApiError(data.error || `Image API returned ${response.status}`, data.errorCode);
    }
    const data = await response.json();
    if (!data.success) throw new MediaApiError(data.error || 'Image generation failed', data.errorCode);
    // Result may have url or base64
    const url = data.result?.url || (data.result?.base64 ? `data:image/png;base64,${data.result.base64}` : '');
    if (!url) throw new Error('No image URL in response');
    return {
        url
    };
}
async function callVideoApi(req, abortSignal) {
    const settings = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const providerConfig = settings.videoProvidersConfig?.[settings.videoProviderId];
    const response = await fetch('/api/generate/video', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-video-provider': settings.videoProviderId || '',
            'x-video-model': settings.videoModelId || '',
            'x-api-key': providerConfig?.apiKey || '',
            'x-base-url': providerConfig?.baseUrl || ''
        },
        body: JSON.stringify({
            prompt: req.prompt,
            aspectRatio: req.aspectRatio
        }),
        signal: abortSignal
    });
    if (!response.ok) {
        const data = await response.json().catch(()=>({}));
        throw new MediaApiError(data.error || `Video API returned ${response.status}`, data.errorCode);
    }
    const data = await response.json();
    if (!data.success) throw new MediaApiError(data.error || 'Video generation failed', data.errorCode);
    const url = data.result?.url;
    if (!url) throw new Error('No video URL in response');
    return {
        url,
        poster: data.result?.poster
    };
}
async function fetchAsBlob(url) {
    // For data URLs, convert directly
    if (url.startsWith('data:')) {
        const res = await fetch(url);
        return res.blob();
    }
    // For remote URLs, proxy through our server to bypass CORS restrictions
    if (url.startsWith('http://') || url.startsWith('https://')) {
        const res = await fetch('/api/proxy-media', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url
            })
        });
        if (!res.ok) {
            const data = await res.json().catch(()=>({}));
            throw new Error(data.error || `Proxy fetch failed: ${res.status}`);
        }
        return res.blob();
    }
    // Relative URLs (shouldn't happen, but handle gracefully)
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch blob: ${res.status}`);
    return res.blob();
}
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/element.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createElementIdMap",
    ()=>createElementIdMap,
    "createSlideIdMap",
    ()=>createSlideIdMap,
    "getElementListRange",
    ()=>getElementListRange,
    "getElementRange",
    ()=>getElementRange,
    "getLineElementLength",
    ()=>getLineElementLength,
    "getLineElementPath",
    ()=>getLineElementPath,
    "getRectRotatedOffset",
    ()=>getRectRotatedOffset,
    "getRectRotatedRange",
    ()=>getRectRotatedRange,
    "getTableSubThemeColor",
    ()=>getTableSubThemeColor,
    "isElementInViewport",
    ()=>isElementInViewport,
    "uniqAlignLines",
    ()=>uniqAlignLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.js [app-ssr] (ecmascript) <locals>");
;
;
const getRectRotatedRange = (element)=>{
    const { left, top, width, height, rotate = 0 } = element;
    const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
    const auxiliaryAngle = Math.atan(height / width) * 180 / Math.PI;
    const tlbraRadian = (180 - rotate - auxiliaryAngle) * Math.PI / 180;
    const trblaRadian = (auxiliaryAngle - rotate) * Math.PI / 180;
    const middleLeft = left + width / 2;
    const middleTop = top + height / 2;
    const xAxis = [
        middleLeft + radius * Math.cos(tlbraRadian),
        middleLeft + radius * Math.cos(trblaRadian),
        middleLeft - radius * Math.cos(tlbraRadian),
        middleLeft - radius * Math.cos(trblaRadian)
    ];
    const yAxis = [
        middleTop - radius * Math.sin(tlbraRadian),
        middleTop - radius * Math.sin(trblaRadian),
        middleTop + radius * Math.sin(tlbraRadian),
        middleTop + radius * Math.sin(trblaRadian)
    ];
    return {
        xRange: [
            Math.min(...xAxis),
            Math.max(...xAxis)
        ],
        yRange: [
            Math.min(...yAxis),
            Math.max(...yAxis)
        ]
    };
};
const getRectRotatedOffset = (element)=>{
    const { xRange: originXRange, yRange: originYRange } = getRectRotatedRange({
        left: element.left,
        top: element.top,
        width: element.width,
        height: element.height,
        rotate: 0
    });
    const { xRange: rotatedXRange, yRange: rotatedYRange } = getRectRotatedRange({
        left: element.left,
        top: element.top,
        width: element.width,
        height: element.height,
        rotate: element.rotate
    });
    return {
        offsetX: rotatedXRange[0] - originXRange[0],
        offsetY: rotatedYRange[0] - originYRange[0]
    };
};
const getElementRange = (element)=>{
    let minX, maxX, minY, maxY;
    if (element.type === 'line') {
        minX = element.left;
        maxX = element.left + Math.max(element.start[0], element.end[0]);
        minY = element.top;
        maxY = element.top + Math.max(element.start[1], element.end[1]);
    } else if ('rotate' in element && element.rotate) {
        const { left, top, width, height, rotate } = element;
        const { xRange, yRange } = getRectRotatedRange({
            left,
            top,
            width,
            height,
            rotate
        });
        minX = xRange[0];
        maxX = xRange[1];
        minY = yRange[0];
        maxY = yRange[1];
    } else {
        minX = element.left;
        maxX = element.left + element.width;
        minY = element.top;
        maxY = element.top + element.height;
    }
    return {
        minX,
        maxX,
        minY,
        maxY
    };
};
const getElementListRange = (elementList)=>{
    const leftValues = [];
    const topValues = [];
    const rightValues = [];
    const bottomValues = [];
    elementList.forEach((element)=>{
        const { minX, maxX, minY, maxY } = getElementRange(element);
        leftValues.push(minX);
        topValues.push(minY);
        rightValues.push(maxX);
        bottomValues.push(maxY);
    });
    const minX = Math.min(...leftValues);
    const maxX = Math.max(...rightValues);
    const minY = Math.min(...topValues);
    const maxY = Math.max(...bottomValues);
    return {
        minX,
        maxX,
        minY,
        maxY
    };
};
const getLineElementLength = (element)=>{
    const deltaX = element.end[0] - element.start[0];
    const deltaY = element.end[1] - element.start[1];
    const len = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return len;
};
const uniqAlignLines = (lines)=>{
    const uniqLines = [];
    lines.forEach((line)=>{
        const index = uniqLines.findIndex((_line)=>_line.value === line.value);
        if (index === -1) uniqLines.push(line);
        else {
            const uniqLine = uniqLines[index];
            const rangeMin = Math.min(uniqLine.range[0], line.range[0]);
            const rangeMax = Math.max(uniqLine.range[1], line.range[1]);
            const range = [
                rangeMin,
                rangeMax
            ];
            const _line = {
                value: line.value,
                range
            };
            uniqLines[index] = _line;
        }
    });
    return uniqLines;
};
const createSlideIdMap = (slides)=>{
    const slideIdMap = {};
    for (const slide of slides){
        slideIdMap[slide.id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
    }
    return slideIdMap;
};
const createElementIdMap = (elements)=>{
    const groupIdMap = {};
    const elIdMap = {};
    for (const element of elements){
        const groupId = element.groupId;
        if (groupId && !groupIdMap[groupId]) {
            groupIdMap[groupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
        }
        elIdMap[element.id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$6$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(10);
    }
    return {
        groupIdMap,
        elIdMap
    };
};
const getTableSubThemeColor = (themeColor)=>{
    const rgba = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(themeColor);
    return [
        rgba.setAlpha(0.3).toRgbString(),
        rgba.setAlpha(0.1).toRgbString()
    ];
};
const getLineElementPath = (element)=>{
    // Defensive: ensure start and end are arrays
    const startArr = Array.isArray(element.start) ? element.start : [
        0,
        0
    ];
    const endArr = Array.isArray(element.end) ? element.end : [
        100,
        100
    ];
    const start = startArr.join(',');
    const end = endArr.join(',');
    if (element.broken) {
        const mid = element.broken.join(',');
        return `M${start} L${mid} L${end}`;
    } else if (element.broken2) {
        const { minX, maxX, minY, maxY } = getElementRange(element);
        if (maxX - minX >= maxY - minY) return `M${start} L${element.broken2[0]},${startArr[1]} L${element.broken2[0]},${endArr[1]} ${end}`;
        return `M${start} L${startArr[0]},${element.broken2[1]} L${endArr[0]},${element.broken2[1]} ${end}`;
    } else if (element.curve) {
        const mid = element.curve.join(',');
        return `M${start} Q${mid} ${end}`;
    } else if (element.cubic) {
        const [c1, c2] = element.cubic;
        const p1 = c1.join(',');
        const p2 = c2.join(',');
        return `M${start} C${p1} ${p2} ${end}`;
    }
    return `M${start} L${end}`;
};
const isElementInViewport = (element, parent)=>{
    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    return elementRect.top >= parentRect.top && elementRect.bottom <= parentRect.bottom;
};
}),
"[project]/Documents/Projects/kinder-maic/lib/utils/create-selectors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSelectors",
    ()=>createSelectors
]);
const createSelectors = (_store)=>{
    const store = _store;
    store.use = {};
    for (const k of Object.keys(store.getState())){
        store.use[k] = ()=>store((s)=>s[k]);
    }
    return store;
};
}),
"[project]/Documents/Projects/kinder-maic/lib/prosemirror/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMark",
    ()=>addMark,
    "autoSelectAll",
    ()=>autoSelectAll,
    "defaultRichTextAttrs",
    ()=>defaultRichTextAttrs,
    "findNodesWithSameMark",
    ()=>findNodesWithSameMark,
    "findParentNode",
    ()=>findParentNode,
    "findParentNodeOfType",
    ()=>findParentNodeOfType,
    "getAttrValue",
    ()=>getAttrValue,
    "getAttrValueInSelection",
    ()=>getAttrValueInSelection,
    "getFontsize",
    ()=>getFontsize,
    "getLastTextNode",
    ()=>getLastTextNode,
    "getMarkAttrs",
    ()=>getMarkAttrs,
    "getTextAttrs",
    ()=>getTextAttrs,
    "isActiveMark",
    ()=>isActiveMark,
    "isActiveOfParentNodeType",
    ()=>isActiveOfParentNodeType,
    "isList",
    ()=>isList,
    "markActive",
    ()=>markActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/prosemirror-commands@1.7.1/node_modules/prosemirror-commands/dist/index.js [app-ssr] (ecmascript)");
;
const isList = (node, schema)=>{
    return node.type === schema.nodes.bullet_list || node.type === schema.nodes.ordered_list;
};
const autoSelectAll = (view)=>{
    const { empty } = view.state.selection;
    if (empty) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectAll"])(view.state, view.dispatch);
};
const addMark = (editorView, mark, selection)=>{
    if (selection) {
        editorView.dispatch(editorView.state.tr.addMark(selection.from, selection.to, mark));
    } else {
        const { $from, $to } = editorView.state.selection;
        editorView.dispatch(editorView.state.tr.addMark($from.pos, $to.pos, mark));
    }
};
const findNodesWithSameMark = (doc, from, to, markType)=>{
    let ii = from;
    const finder = (mark)=>mark.type === markType;
    let firstMark = null;
    let fromNode = null;
    let toNode = null;
    while(ii <= to){
        const node = doc.nodeAt(ii);
        if (!node || !node.marks) return null;
        const mark = node.marks.find(finder);
        if (!mark) return null;
        if (firstMark && mark !== firstMark) return null;
        fromNode = fromNode || node;
        firstMark = firstMark || mark;
        toNode = node;
        ii++;
    }
    let fromPos = from;
    let toPos = to;
    let jj = 0;
    ii = from - 1;
    while(ii > jj){
        const node = doc.nodeAt(ii);
        const mark = node && node.marks.find(finder);
        if (!mark || mark !== firstMark) break;
        fromPos = ii;
        fromNode = node;
        ii--;
    }
    ii = to + 1;
    jj = doc.nodeSize - 2;
    while(ii < jj){
        const node = doc.nodeAt(ii);
        const mark = node && node.marks.find(finder);
        if (!mark || mark !== firstMark) break;
        toPos = ii;
        toNode = node;
        ii++;
    }
    return {
        mark: firstMark,
        from: {
            node: fromNode,
            pos: fromPos
        },
        to: {
            node: toNode,
            pos: toPos
        }
    };
};
const equalNodeType = (nodeType, node)=>{
    return Array.isArray(nodeType) && nodeType.indexOf(node.type) > -1 || node.type === nodeType;
};
const findParentNodeClosestToPos = ($pos, predicate)=>{
    for(let i = $pos.depth; i > 0; i--){
        const node = $pos.node(i);
        if (predicate(node)) {
            return {
                pos: i > 0 ? $pos.before(i) : 0,
                start: $pos.start(i),
                depth: i,
                node
            };
        }
    }
};
const findParentNode = (predicate)=>{
    return (_ref)=>findParentNodeClosestToPos(_ref.$from, predicate);
};
const findParentNodeOfType = (nodeType)=>{
    return (selection)=>{
        return findParentNode((node)=>{
            return equalNodeType(nodeType, node);
        })(selection);
    };
};
const isActiveOfParentNodeType = (nodeType, state)=>{
    const node = state.schema.nodes[nodeType];
    return !!findParentNodeOfType(node)(state.selection);
};
const getLastTextNode = (node)=>{
    if (!node) return null;
    if (node.type.name === 'text') return node;
    if (!node.lastChild) return null;
    return getLastTextNode(node.lastChild);
};
const getMarkAttrs = (view)=>{
    const { selection, doc } = view.state;
    const { from } = selection;
    let node = doc.nodeAt(from) || doc.nodeAt(from - 1);
    node = getLastTextNode(node);
    return node?.marks || [];
};
const getAttrValue = (marks, markType, attr)=>{
    for (const mark of marks){
        if (mark.type.name === markType && mark.attrs[attr]) return mark.attrs[attr];
    }
    return null;
};
const isActiveMark = (marks, markType)=>{
    for (const mark of marks){
        if (mark.type.name === markType) return true;
    }
    return false;
};
const markActive = (state, type)=>{
    const { from, $from, to, empty } = state.selection;
    if (empty) return type.isInSet(state.storedMarks || $from.marks());
    return state.doc.rangeHasMark(from, to, type);
};
const getAttrValueInSelection = (view, attr)=>{
    const { selection, doc } = view.state;
    const { from, to } = selection;
    let keepChecking = true;
    let value = '';
    doc.nodesBetween(from, to, (node)=>{
        if (keepChecking && node.attrs[attr]) {
            keepChecking = false;
            value = node.attrs[attr];
        }
        return keepChecking;
    });
    return value;
};
const _defaultAttrs = {
    color: '#000000',
    backcolor: '',
    fontsize: '16px',
    fontname: '',
    align: 'left'
};
const getTextAttrs = (view, attrs = {})=>{
    const defaultAttrs = {
        ..._defaultAttrs,
        ...attrs
    };
    const marks = getMarkAttrs(view);
    const isBold = isActiveMark(marks, 'strong');
    const isEm = isActiveMark(marks, 'em');
    const isUnderline = isActiveMark(marks, 'underline');
    const isStrikethrough = isActiveMark(marks, 'strikethrough');
    const isSuperscript = isActiveMark(marks, 'superscript');
    const isSubscript = isActiveMark(marks, 'subscript');
    const isCode = isActiveMark(marks, 'code');
    const color = getAttrValue(marks, 'forecolor', 'color') || defaultAttrs.color;
    const backcolor = getAttrValue(marks, 'backcolor', 'backcolor') || defaultAttrs.backcolor;
    const fontsize = getAttrValue(marks, 'fontsize', 'fontsize') || defaultAttrs.fontsize;
    const fontname = getAttrValue(marks, 'fontname', 'fontname') || defaultAttrs.fontname;
    const link = getAttrValue(marks, 'link', 'href') || '';
    const align = getAttrValueInSelection(view, 'align') || defaultAttrs.align;
    const isBulletList = isActiveOfParentNodeType('bullet_list', view.state);
    const isOrderedList = isActiveOfParentNodeType('ordered_list', view.state);
    const isBlockquote = isActiveOfParentNodeType('blockquote', view.state);
    return {
        bold: isBold,
        em: isEm,
        underline: isUnderline,
        strikethrough: isStrikethrough,
        superscript: isSuperscript,
        subscript: isSubscript,
        code: isCode,
        color: color,
        backcolor: backcolor,
        fontsize: fontsize,
        fontname: fontname,
        link: link,
        align: align,
        bulletList: isBulletList,
        orderedList: isOrderedList,
        blockquote: isBlockquote
    };
};
const getFontsize = (view)=>{
    const marks = getMarkAttrs(view);
    const fontsize = getAttrValue(marks, 'fontsize', 'fontsize') || _defaultAttrs.fontsize;
    return parseInt(fontsize);
};
const defaultRichTextAttrs = {
    bold: false,
    em: false,
    underline: false,
    strikethrough: false,
    superscript: false,
    subscript: false,
    code: false,
    color: '#000000',
    backcolor: '',
    fontsize: '16px',
    fontname: '',
    link: '',
    align: 'left',
    bulletList: false,
    orderedList: false,
    blockquote: false
};
}),
"[project]/Documents/Projects/kinder-maic/lib/store/canvas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasStore",
    ()=>useCanvasStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$create$2d$selectors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/create-selectors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/prosemirror/utils.ts [app-ssr] (ecmascript)");
;
;
;
// ==================== Initial State ====================
const initialState = {
    // Element selection
    activeElementIdList: [],
    handleElementId: '',
    activeGroupElementId: '',
    editingElementId: '',
    hiddenElementIdList: [],
    // Canvas viewport
    canvasScale: 1,
    canvasPercentage: 90,
    viewportSize: 1000,
    viewportRatio: 0.5625,
    canvasDragged: false,
    // Display aids
    showRuler: false,
    gridLineSize: 0,
    // Toolbar and panels
    toolbarState: 'ai',
    showSelectPanel: false,
    showSearchPanel: false,
    // Element creation
    creatingElement: null,
    creatingCustomShape: false,
    // Editing state
    isScaling: false,
    clipingImageElementId: '',
    richTextAttrs: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultRichTextAttrs"],
    // Format painter
    textFormatPainter: null,
    shapeFormatPainter: null,
    // Video playback
    playingVideoElementId: '',
    // Whiteboard
    whiteboardOpen: false,
    whiteboardClearing: false,
    // Other: false,
    editorAreaFocus: false,
    thumbnailsFocus: false,
    disableHotkeys: false,
    selectedTableCells: [],
    // Teaching features
    spotlightElementId: '',
    spotlightOptions: null,
    spotlightMode: 'pixel',
    spotlightPercentageGeometry: null,
    highlightedElementIds: [],
    highlightOptions: null,
    laserElementId: '',
    laserOptions: null,
    zoomTarget: null
};
// ==================== Store Implementation ====================
const useCanvasStoreBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        ...initialState,
        // ===== Element Selection Actions =====
        setActiveElementIdList: (ids)=>{
            set({
                activeElementIdList: ids
            });
            // Auto-set handleElementId: set to that element for single select, empty for multi-select or none
            if (ids.length === 1) {
                set({
                    handleElementId: ids[0]
                });
            } else if (ids.length === 0) {
                set({
                    handleElementId: ''
                });
            }
            // Auto-switch to design panel when elements are selected
            if (ids.length > 0) {
                set({
                    toolbarState: 'design'
                });
            }
        },
        setHandleElementId: (id)=>set({
                handleElementId: id
            }),
        setActiveGroupElementId: (id)=>set({
                activeGroupElementId: id
            }),
        setEditingElementId: (id)=>set({
                editingElementId: id
            }),
        setHiddenElementIdList: (ids)=>set({
                hiddenElementIdList: ids
            }),
        clearSelection: ()=>{
            set({
                activeElementIdList: [],
                handleElementId: '',
                activeGroupElementId: '',
                editingElementId: ''
            });
        },
        // ===== Canvas Viewport Actions =====
        setCanvasScale: (scale)=>set({
                canvasScale: scale
            }),
        setCanvasPercentage: (percentage)=>set({
                canvasPercentage: percentage
            }),
        setViewportSize: (size)=>set({
                viewportSize: size
            }),
        setViewportRatio: (ratio)=>set({
                viewportRatio: ratio
            }),
        setCanvasDragged: (dragged)=>set({
                canvasDragged: dragged
            }),
        // ===== Display Aids Actions =====
        setRulerState: (show)=>set({
                showRuler: show
            }),
        setGridLineSize: (size)=>set({
                gridLineSize: size
            }),
        // ===== Toolbar and Panel Actions =====
        setToolbarState: (toolbarState)=>set({
                toolbarState
            }),
        setSelectPanelState: (show)=>set({
                showSelectPanel: show
            }),
        setSearchPanelState: (show)=>set({
                showSearchPanel: show
            }),
        // ===== Element Creation Actions =====
        setCreatingElement: (element)=>set({
                creatingElement: element
            }),
        setCreatingCustomShapeState: (creating)=>set({
                creatingCustomShape: creating
            }),
        // ===== Editing State Actions =====
        setScalingState: (isScaling)=>set({
                isScaling
            }),
        setClipingImageElementId: (id)=>set({
                clipingImageElementId: id
            }),
        setRichtextAttrs: (attrs)=>set({
                richTextAttrs: attrs
            }),
        // ===== Format Painter Actions =====
        setTextFormatPainter: (painter)=>set({
                textFormatPainter: painter
            }),
        setShapeFormatPainter: (painter)=>set({
                shapeFormatPainter: painter
            }),
        // ===== Video Playback Actions =====
        playVideo: (elementId)=>set({
                playingVideoElementId: elementId
            }),
        pauseVideo: ()=>set({
                playingVideoElementId: ''
            }),
        // ===== Whiteboard Actions =====
        setWhiteboardOpen: (open)=>set({
                whiteboardOpen: open
            }),
        setWhiteboardClearing: (clearing)=>set({
                whiteboardClearing: clearing
            }),
        // ===== Other Actions =====
        setThumbnailsFocus: (focus)=>set({
                thumbnailsFocus: focus
            }),
        setEditorAreaFocus: (focus)=>set({
                editorAreaFocus: focus
            }),
        setDisableHotkeysState: (disable)=>set({
                disableHotkeys: disable
            }),
        setSelectedTableCells: (cells)=>set({
                selectedTableCells: cells
            }),
        // ===== Teaching Feature Actions =====
        setSpotlight: (elementId, options = {})=>{
            set({
                spotlightElementId: elementId,
                spotlightMode: 'pixel',
                spotlightOptions: {
                    radius: 200,
                    dimness: 0.7,
                    transition: 300,
                    ...options
                },
                spotlightPercentageGeometry: null
            });
        },
        setSpotlightPercentage: (elementId, geometry, options = {})=>{
            set({
                spotlightElementId: elementId,
                spotlightMode: 'percentage',
                spotlightPercentageGeometry: geometry,
                spotlightOptions: {
                    dimness: 0.7,
                    transition: 300,
                    ...options
                }
            });
        },
        clearSpotlight: ()=>{
            set({
                spotlightElementId: '',
                spotlightOptions: null,
                spotlightMode: 'pixel',
                spotlightPercentageGeometry: null
            });
        },
        setHighlight: (elementIds, options = {})=>{
            set({
                highlightedElementIds: elementIds,
                highlightOptions: {
                    color: '#ff6b6b',
                    opacity: 0.3,
                    borderWidth: 3,
                    animated: true,
                    ...options
                }
            });
        },
        clearHighlight: ()=>{
            set({
                highlightedElementIds: [],
                highlightOptions: null
            });
        },
        setLaser: (elementId, options = {})=>{
            set({
                laserElementId: elementId,
                laserOptions: {
                    color: '#ff0000',
                    duration: 3000,
                    ...options
                }
            });
        },
        clearLaser: ()=>{
            set({
                laserElementId: '',
                laserOptions: null
            });
        },
        setZoom: (elementId, scale)=>{
            set({
                zoomTarget: {
                    elementId,
                    scale
                }
            });
        },
        clearZoom: ()=>{
            set({
                zoomTarget: null
            });
        },
        clearAllEffects: ()=>{
            set({
                spotlightElementId: '',
                spotlightOptions: null,
                spotlightMode: 'pixel',
                spotlightPercentageGeometry: null,
                highlightedElementIds: [],
                highlightOptions: null,
                laserElementId: '',
                laserOptions: null,
                zoomTarget: null
            });
        },
        // ===== Batch Operations =====
        resetCanvasState: ()=>{
            set({
                ...initialState,
                // Preserve viewport settings
                viewportSize: get().viewportSize,
                viewportRatio: get().viewportRatio
            });
        }
    }));
const useCanvasStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$create$2d$selectors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelectors"])(useCanvasStoreBase);
}),
"[project]/Documents/Projects/kinder-maic/lib/hooks/use-draft-cache.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDraftCache",
    ()=>useDraftCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useDraftCache({ key, debounceMs = 500 }) {
    const [cachedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return undefined;
        //TURBOPACK unreachable
        ;
    });
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(key);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        keyRef.current = key;
    }, [
        key
    ]);
    const flushPending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (pendingValueRef.current !== undefined) {
            try {
                localStorage.setItem(keyRef.current, JSON.stringify(pendingValueRef.current));
            } catch  {
            /* ignore quota errors */ }
            pendingValueRef.current = undefined;
        }
    }, []);
    const updateCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        pendingValueRef.current = value;
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
            timerRef.current = null;
            try {
                localStorage.setItem(keyRef.current, JSON.stringify(value));
            } catch  {
            /* ignore quota errors */ }
            pendingValueRef.current = undefined;
        }, debounceMs);
    }, [
        debounceMs
    ]);
    const clearCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        pendingValueRef.current = undefined;
        try {
            localStorage.removeItem(keyRef.current);
        } catch  {
        /* ignore */ }
    }, []);
    // Flush pending write on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            flushPending();
        };
    }, [
        flushPending
    ]);
    return {
        cachedValue,
        updateCache,
        clearCache
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/hooks/use-audio-recorder.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudioRecorder",
    ()=>useAudioRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('AudioRecorder');
function useAudioRecorder(options = {}) {
    const { onTranscription, onError } = options;
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordingTime, setRecordingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Web Speech API not typed
    const speechRecognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Synchronous lock to prevent rapid re-entry (React state updates are async)
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Send audio to server for transcription
    const transcribeAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (audioBlob)=>{
        setIsProcessing(true);
        try {
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.webm');
            // Get current ASR configuration from settings store
            // Note: This requires importing useSettingsStore in browser context
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const response = await fetch('/api/transcription', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Transcription failed');
            }
            const result = await response.json();
            onTranscription?.(result.text);
        } catch (error) {
            log.error('Transcription error:', error);
            onError?.(error instanceof Error ? error.message : '语音识别失败，请重试');
        } finally{
            setIsProcessing(false);
            setRecordingTime(0);
        }
    }, [
        onTranscription,
        onError
    ]);
    // Start recording
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Synchronous lock — React state is async so isRecording may be stale
        if (busyRef.current) return;
        busyRef.current = true;
        try {
            // Get current ASR configuration
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Use MediaRecorder for server-side ASR
            // Request microphone permission
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            // Create MediaRecorder
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm'
            });
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            mediaRecorder.ondataavailable = (event)=>{
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            mediaRecorder.onstop = async ()=>{
                // Stop all audio tracks
                stream.getTracks().forEach((track)=>track.stop());
                // Merge audio chunks
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: 'audio/webm'
                });
                // Send to server for transcription
                await transcribeAudio(audioBlob);
                busyRef.current = false;
            };
            // Start recording
            mediaRecorder.start();
            setIsRecording(true);
            setRecordingTime(0);
            // Start timer
            timerRef.current = setInterval(()=>{
                setRecordingTime((prev)=>prev + 1);
            }, 1000);
        } catch (error) {
            busyRef.current = false;
            log.error('Failed to start recording:', error);
            onError?.('无法访问麦克风，请检查权限设置');
        }
    }, [
        onTranscription,
        onError,
        transcribeAudio
    ]);
    // Stop recording
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Stop Speech Recognition if active
        if (speechRecognitionRef.current) {
            speechRecognitionRef.current.stop();
            speechRecognitionRef.current = null;
            busyRef.current = false;
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            return;
        }
        // Stop MediaRecorder if active
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            busyRef.current = false;
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    }, [
        isRecording
    ]);
    // Cancel recording
    const cancelRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Cancel Speech Recognition if active
        if (speechRecognitionRef.current) {
            speechRecognitionRef.current.onresult = null; // Prevent transcription callback
            speechRecognitionRef.current.onerror = null; // Suppress browser abort error events
            speechRecognitionRef.current.stop();
            speechRecognitionRef.current = null;
            busyRef.current = false;
            setIsRecording(false);
            setRecordingTime(0);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            return;
        }
        // Cancel MediaRecorder if active
        if (mediaRecorderRef.current && isRecording) {
            // Stop recording without transcription
            mediaRecorderRef.current.ondataavailable = null;
            mediaRecorderRef.current.onstop = null;
            mediaRecorderRef.current.stop();
            // Stop all audio tracks
            if (mediaRecorderRef.current.stream) {
                mediaRecorderRef.current.stream.getTracks().forEach((track)=>track.stop());
            }
            busyRef.current = false;
            setIsRecording(false);
            setRecordingTime(0);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            audioChunksRef.current = [];
        }
    }, [
        isRecording
    ]);
    return {
        isRecording,
        isProcessing,
        recordingTime,
        startRecording,
        stopRecording,
        cancelRecording
    };
}
}),
];

//# sourceMappingURL=Documents_Projects_kinder-maic_lib_0434aada._.js.map