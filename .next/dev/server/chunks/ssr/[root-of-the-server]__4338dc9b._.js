module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Projects/kinder-maic/lib/hooks/use-theme.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ThemeProvider({ children }) {
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('system');
    const [systemTheme, setSystemTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const resolvedTheme = theme === 'system' ? systemTheme : theme;
    // Hydrate from localStorage after mount (avoids SSR mismatch)
    /* eslint-disable react-hooks/set-state-in-effect -- Hydration from localStorage must happen in effect */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem('theme');
        if (stored && [
            'light',
            'dark',
            'system'
        ].includes(stored)) {
            setThemeState(stored);
        }
        setSystemTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }, []);
    /* eslint-enable react-hooks/set-state-in-effect */ // Apply theme to document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.documentElement;
        if (resolvedTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [
        resolvedTheme
    ]);
    // Listen to system theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = ()=>{
            setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', handleChange);
        return ()=>mediaQuery.removeEventListener('change', handleChange);
    }, []);
    // Save theme to localStorage
    const handleSetTheme = (newTheme)=>{
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            setTheme: handleSetTheme,
            resolvedTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/kinder-maic/lib/hooks/use-theme.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function useTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
}),
"[project]/Documents/Projects/kinder-maic/lib/i18n/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "localeNames",
    ()=>localeNames
]);
const defaultLocale = 'de-DE';
const localeNames = {
    'zh-CN': '中文',
    'en-US': 'English',
    'de-DE': 'Deutsch'
};
}),
"[project]/Documents/Projects/kinder-maic/lib/i18n/common.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commonDeDE",
    ()=>commonDeDE,
    "commonEnUS",
    ()=>commonEnUS,
    "commonZhCN",
    ()=>commonZhCN
]);
const commonZhCN = {
    common: {
        you: '你',
        confirm: '确定',
        cancel: '取消',
        loading: '加载中...'
    },
    home: {
        slogan: 'Generative Learning in Multi-Agent Interactive Classroom',
        greeting: '嗨，'
    },
    toolbar: {
        languageHint: '课程将以此语言生成',
        pdfParser: '解析器',
        pdfUpload: '上传 PDF',
        removePdf: '移除文件',
        webSearchOn: '已开启',
        webSearchOff: '点击开启',
        webSearchDesc: '生成前搜索网络获取最新资料，让内容更丰富准确',
        webSearchProvider: '搜索引擎',
        webSearchNoProvider: '请在设置中配置搜索引擎 API Key',
        selectProvider: '选择模型服务商',
        configureProvider: '配置模型',
        configureProviderHint: '请先配置至少一个模型服务商才能生成课程',
        enterClassroom: '进入课堂',
        advancedSettings: '高级设置',
        ttsTitle: '语音合成',
        ttsHint: '选择 AI 教师的朗读音色',
        ttsPreview: '试听',
        ttsPreviewing: '播放中...'
    },
    export: {
        pptx: '导出 PPTX',
        resourcePack: '导出教学资源包',
        resourcePackDesc: 'PPTX + 交互式页面',
        exporting: '正在导出...',
        exportSuccess: '导出成功',
        exportFailed: '导出失败'
    }
};
const commonEnUS = {
    common: {
        you: 'You',
        confirm: 'Confirm',
        cancel: 'Cancel',
        loading: 'Loading...'
    },
    home: {
        slogan: 'Generative Learning in Multi-Agent Interactive Classroom',
        greeting: 'Hi, '
    },
    toolbar: {
        languageHint: 'Course will be generated in this language',
        pdfParser: 'Parser',
        pdfUpload: 'Upload PDF',
        removePdf: 'Remove file',
        webSearchOn: 'Enabled',
        webSearchOff: 'Click to enable',
        webSearchDesc: 'Search the web for up-to-date information before generation',
        webSearchProvider: 'Search engine',
        webSearchNoProvider: 'Configure search API key in Settings',
        selectProvider: 'Select provider',
        configureProvider: 'Set up model',
        configureProviderHint: 'Configure at least one model provider to generate courses',
        enterClassroom: 'Enter Classroom',
        advancedSettings: 'Advanced Settings',
        ttsTitle: 'Text-to-Speech',
        ttsHint: 'Choose a voice for the AI teacher',
        ttsPreview: 'Preview',
        ttsPreviewing: 'Playing...'
    },
    export: {
        pptx: 'Export PPTX',
        resourcePack: 'Export Resource Pack',
        resourcePackDesc: 'PPTX + interactive pages',
        exporting: 'Exporting...',
        exportSuccess: 'Export successful',
        exportFailed: 'Export failed'
    }
};
const commonDeDE = {
    common: {
        you: 'Du',
        confirm: 'Bestätigen',
        cancel: 'Abbrechen',
        loading: 'Wird geladen...'
    },
    home: {
        slogan: 'Interaktiver KI-Unterricht basierend auf dem Lehrplan 21',
        greeting: 'Hallo, '
    },
    toolbar: {
        languageHint: 'Der Kurs wird in dieser Sprache erstellt',
        pdfParser: 'Parser',
        pdfUpload: 'PDF hochladen',
        removePdf: 'Datei entfernen',
        webSearchOn: 'Aktiviert',
        webSearchOff: 'Zum Aktivieren klicken',
        webSearchDesc: 'Sucht vor der Erstellung im Internet nach aktuellen Informationen',
        webSearchProvider: 'Suchmaschine',
        webSearchNoProvider: 'Bitte Such-API-Schlüssel in den Einstellungen konfigurieren',
        selectProvider: 'Anbieter auswählen',
        configureProvider: 'Modell einrichten',
        configureProviderHint: 'Bitte mindestens einen Modellanbieter konfigurieren',
        enterClassroom: 'Unterricht beginnen',
        advancedSettings: 'Erweiterte Einstellungen',
        ttsTitle: 'Sprachausgabe',
        ttsHint: 'Stimme für den KI-Lehrer auswählen',
        ttsPreview: 'Vorschau',
        ttsPreviewing: 'Wird abgespielt...'
    },
    export: {
        pptx: 'Als PPTX exportieren',
        resourcePack: 'Lernpaket exportieren',
        resourcePackDesc: 'PPTX + interaktive Seiten',
        exporting: 'Wird exportiert...',
        exportSuccess: 'Export erfolgreich',
        exportFailed: 'Export fehlgeschlagen'
    }
};
}),
"[project]/Documents/Projects/kinder-maic/lib/i18n/stage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stageDeDE",
    ()=>stageDeDE,
    "stageEnUS",
    ()=>stageEnUS,
    "stageZhCN",
    ()=>stageZhCN
]);
const stageZhCN = {
    stage: {
        currentScene: '当前场景',
        generating: '生成中...',
        paused: '已暂停',
        generationFailed: '生成失败',
        confirmSwitchTitle: '切换页面',
        confirmSwitchMessage: '当前话题正在进行中，切换页面将结束当前话题。确定要切换吗？',
        generatingNextPage: '场景正在生成，请稍候...',
        fullscreen: '全屏',
        exitFullscreen: '退出全屏'
    },
    whiteboard: {
        title: '互动白板',
        open: '打开白板',
        clear: '清空白板',
        minimize: '最小化白板',
        ready: '白板已就绪',
        readyHint: 'AI 添加元素后将在此显示',
        clearSuccess: '白板已清空',
        clearError: '清空白板失败：',
        resetView: '重置视图',
        restoreError: '恢复白板失败：',
        history: '历史记录',
        restore: '恢复',
        noHistory: '暂无历史记录',
        restored: '已恢复白板内容',
        elementCount: '{count} 个元素'
    },
    quiz: {
        title: '随堂测验',
        subtitle: '检测你的学习成果',
        questionsCount: '道题',
        totalPrefix: '共',
        pointsSuffix: '分',
        startQuiz: '开始答题',
        multipleChoiceHint: '（多选题，请选择所有正确答案）',
        inputPlaceholder: '请在此输入你的回答...',
        charCount: '字',
        yourAnswer: '你的回答：',
        notAnswered: '未作答',
        aiComment: 'AI 点评',
        singleChoice: '单选',
        multipleChoice: '多选',
        shortAnswer: '简答',
        analysis: '解析：',
        excellent: '优秀！',
        keepGoing: '继续加油！',
        needsReview: '需要复习',
        correct: '正确',
        incorrect: '错误',
        answering: '答题中',
        submitAnswers: '提交答案',
        aiGrading: 'AI 正在批改中...',
        aiGradingWait: '请稍候，正在分析你的答案',
        quizReport: '答题报告',
        retry: '重新答题'
    },
    roundtable: {
        teacher: '教师',
        you: '你',
        inputPlaceholder: '输入你的消息...',
        listening: '录音中...',
        processing: '处理中...',
        noSpeechDetected: '未检测到语音，请重试',
        discussionEnded: '讨论已结束',
        qaEnded: '问答已结束',
        thinking: '思考中',
        yourTurn: '轮到你发言了',
        stopDiscussion: '结束讨论',
        autoPlay: '自动播放',
        autoPlayOff: '关闭自动播放',
        speed: '倍速',
        voiceInput: '语音输入',
        voiceInputDisabled: '语音输入已禁用',
        textInput: '文字输入',
        stopRecording: '停止录音',
        startRecording: '开始录音'
    },
    pbl: {
        legacyFormat: '此PBL场景使用旧格式，请重新生成课程',
        emptyProject: 'PBL项目尚未生成，请通过课程生成创建',
        roleSelection: {
            title: '选择你的角色',
            description: '选择一个角色开始项目协作'
        },
        workspace: {
            restart: '重新开始',
            confirmRestart: '确定重置进度？',
            confirm: '确定',
            cancel: '取消'
        },
        issueboard: {
            title: '任务看板',
            noIssues: '暂无任务',
            statusDone: '已完成',
            statusActive: '进行中',
            statusPending: '待处理'
        },
        chat: {
            title: '项目讨论',
            currentIssue: '当前任务',
            mentionHint: '使用 @question 提问，@judge 提交评审',
            placeholder: '输入消息...',
            send: '发送',
            welcomeMessage: '你好！我是本任务的提问助手，当前任务：「{title}」\n\n为了帮助你开展工作，我准备了一些引导问题：\n\n{questions}\n\n随时可以 @question 向我提问！',
            issueCompleteMessage: '任务「{completed}」已完成！进入下一个任务：「{next}」',
            allCompleteMessage: '🎉 所有任务都已完成！项目做得很棒！'
        },
        guide: {
            howItWorks: '如何参与项目',
            help: '使用帮助',
            title: '使用帮助',
            step1: {
                title: '第一步：选择角色',
                desc: '项目生成后，从角色列表中选择一个角色（标记为🟢的非系统角色）'
            },
            step2: {
                title: '第二步：完成任务',
                desc: '每个任务代表一个学习目标：',
                s1: {
                    title: '查看当前任务',
                    desc: '查看任务的标题、描述、负责人'
                },
                s2: {
                    title: '获取指导',
                    example: '@question 我应该从哪里开始？\n@question 如何实现这个功能？',
                    desc: '提问助手会提供引导性问题和提示（不直接给答案）'
                },
                s3: {
                    title: '提交作品',
                    example: '@judge 我已经完成了，请检查',
                    desc: '评审助手会评估你的工作并给出反馈：',
                    complete: '自动进入下一个任务',
                    revision: '根据反馈改进'
                }
            },
            step3: {
                title: '第三步：完成项目',
                desc: '所有任务完成后，系统会显示「🎉 项目已完成！」'
            }
        }
    },
    share: {
        notReady: '生成完成后可分享'
    }
};
const stageEnUS = {
    stage: {
        currentScene: 'Current Scene',
        generating: 'Generating...',
        paused: 'Paused',
        generationFailed: 'Generation failed',
        confirmSwitchTitle: 'Switch Scene',
        confirmSwitchMessage: 'A topic is currently in progress. Switching scenes will end the current topic. Are you sure?',
        generatingNextPage: 'Scene is being generated, please wait...',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Exit Fullscreen'
    },
    whiteboard: {
        title: 'Interactive Whiteboard',
        open: 'Open Whiteboard',
        clear: 'Clear Whiteboard',
        minimize: 'Minimize Whiteboard',
        ready: 'Whiteboard is ready',
        readyHint: 'Elements will appear here when added by AI',
        clearSuccess: 'Whiteboard cleared successfully',
        clearError: 'Failed to clear whiteboard: ',
        resetView: 'Reset View',
        restoreError: 'Failed to restore whiteboard: ',
        history: 'History',
        restore: 'Restore',
        noHistory: 'No history yet',
        restored: 'Whiteboard restored',
        elementCount: '{count} elements'
    },
    quiz: {
        title: 'Quiz',
        subtitle: 'Test your knowledge',
        questionsCount: 'questions',
        totalPrefix: '',
        pointsSuffix: 'pts',
        startQuiz: 'Start Quiz',
        multipleChoiceHint: '(Multiple choice — select all correct answers)',
        inputPlaceholder: 'Type your answer here...',
        charCount: 'chars',
        yourAnswer: 'Your answer:',
        notAnswered: 'Not answered',
        aiComment: 'AI Feedback',
        singleChoice: 'Single',
        multipleChoice: 'Multiple',
        shortAnswer: 'Short answer',
        analysis: 'Analysis: ',
        excellent: 'Excellent!',
        keepGoing: 'Keep going!',
        needsReview: 'Needs review',
        correct: 'correct',
        incorrect: 'incorrect',
        answering: 'In Progress',
        submitAnswers: 'Submit Answers',
        aiGrading: 'AI is grading...',
        aiGradingWait: 'Please wait, analyzing your answers',
        quizReport: 'Quiz Report',
        retry: 'Retry'
    },
    roundtable: {
        teacher: 'TEACHER',
        you: 'YOU',
        inputPlaceholder: 'Type your message...',
        listening: 'Listening...',
        processing: 'Processing...',
        noSpeechDetected: 'No speech detected, please try again',
        discussionEnded: 'Discussion ended',
        qaEnded: 'Q&A ended',
        thinking: 'Thinking',
        yourTurn: 'Your turn',
        stopDiscussion: 'Stop Discussion',
        autoPlay: 'Auto-play',
        autoPlayOff: 'Stop auto-play',
        speed: 'Speed',
        voiceInput: 'Voice input',
        voiceInputDisabled: 'Voice input disabled',
        textInput: 'Text input',
        stopRecording: 'Stop recording',
        startRecording: 'Start recording'
    },
    pbl: {
        legacyFormat: 'This PBL scene uses a legacy format. Please regenerate the course.',
        emptyProject: 'PBL project has not been generated yet. Please create via course generation.',
        roleSelection: {
            title: 'Choose Your Role',
            description: 'Select a role to start collaborating on the project'
        },
        workspace: {
            restart: 'Restart',
            confirmRestart: 'Reset all progress?',
            confirm: 'Confirm',
            cancel: 'Cancel'
        },
        issueboard: {
            title: 'Issue Board',
            noIssues: 'No issues yet',
            statusDone: 'Done',
            statusActive: 'Active',
            statusPending: 'Pending'
        },
        chat: {
            title: 'Project Discussion',
            currentIssue: 'Current Issue',
            mentionHint: 'Use @question to ask, @judge to submit for review',
            placeholder: 'Type a message...',
            send: 'Send',
            welcomeMessage: 'Hello! I\'m your Question Agent for this issue: "{title}"\n\nTo help guide your work, I\'ve prepared some questions for you:\n\n{questions}\n\nFeel free to @question me anytime if you need help or clarification!',
            issueCompleteMessage: 'Issue "{completed}" completed! Moving to next issue: "{next}"',
            allCompleteMessage: '🎉 All issues completed! Great work on the project!'
        },
        guide: {
            howItWorks: 'How it works',
            help: 'Help',
            title: 'Help',
            step1: {
                title: 'Step 1: Choose a Role',
                desc: 'After the project is generated, select a role from the list (non-system roles marked with 🟢)'
            },
            step2: {
                title: 'Step 2: Complete Issues',
                desc: 'Each issue represents a learning task:',
                s1: {
                    title: 'View current Issue',
                    desc: "Check the issue's title, description, and assignee"
                },
                s2: {
                    title: 'Get guidance',
                    example: '@question Where should I start?\n@question How do I implement this feature?',
                    desc: 'The Question Agent provides guiding questions and hints (no direct answers)'
                },
                s3: {
                    title: 'Submit your work',
                    example: "@judge I'm done, please check my Notes",
                    desc: 'The Judge Agent evaluates your work and gives feedback:',
                    complete: 'Automatically moves to the next issue',
                    revision: 'Improve based on feedback'
                }
            },
            step3: {
                title: 'Step 3: Complete the Project',
                desc: 'When all issues are done, the system displays "🎉 Project Complete!"'
            }
        }
    },
    share: {
        notReady: 'Available after generation completes'
    }
};
const stageDeDE = {
    stage: {
        title: 'Unterrichtsstunde',
        loading: 'Unterricht wird vorbereitet...',
        generating: 'KI-Lehrer bereitet die Stunde vor...',
        error: 'Fehler beim Laden der Stunde',
        retry: 'Erneut versuchen',
        next: 'Weiter',
        prev: 'Zurück',
        finish: 'Beenden',
        replay: 'Nochmal abspielen',
        pause: 'Pause',
        resume: 'Fortsetzen',
        speed: 'Geschwindigkeit',
        volume: 'Lautstärke',
        fullscreen: 'Vollbild',
        exitFullscreen: 'Vollbild beenden',
        subtitles: 'Untertitel',
        subtitlesOn: 'Untertitel ein',
        subtitlesOff: 'Untertitel aus',
        teacher: 'Lehrer',
        student: 'Schüler',
        assistant: 'Assistent',
        whiteboard: 'Tafel',
        quiz: 'Quiz',
        quizSubmit: 'Antwort abschicken',
        quizCorrect: 'Richtig! Super gemacht! 🎉',
        quizWrong: 'Leider falsch. Versuch es nochmal! 💪',
        quizExplanation: 'Erklärung',
        discussion: 'Diskussion',
        summary: 'Zusammenfassung',
        completed: 'Stunde abgeschlossen! 🌟',
        nextLesson: 'Nächste Stunde',
        backToHome: 'Zurück zur Übersicht'
    }
};
}),
"[project]/Documents/Projects/kinder-maic/lib/i18n/chat.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chatDeDE",
    ()=>chatDeDE,
    "chatEnUS",
    ()=>chatEnUS,
    "chatZhCN",
    ()=>chatZhCN
]);
const chatZhCN = {
    chat: {
        lecture: '授课',
        noConversations: '暂无对话',
        startConversation: '输入消息开始对话',
        noMessages: '暂无消息',
        ended: '已结束',
        unknown: '未知',
        stopDiscussion: '结束讨论',
        endQA: '结束问答',
        tabs: {
            lecture: '笔记',
            chat: '对话'
        },
        lectureNotes: {
            empty: '播放课程后，笔记将在此显示',
            emptyHint: '点击播放按钮开始授课',
            pageLabel: '第 {n} 页',
            currentPage: '当前页'
        },
        badge: {
            qa: 'Q&A',
            discussion: '讨论',
            lecture: '授课'
        }
    },
    actions: {
        names: {
            spotlight: '聚光灯',
            laser: '激光笔',
            wb_open: '打开白板',
            wb_draw_text: '白板文本',
            wb_draw_shape: '白板形状',
            wb_draw_chart: '白板图表',
            wb_draw_latex: '白板公式',
            wb_draw_table: '白板表格',
            wb_draw_line: '白板线条',
            wb_clear: '清空白板',
            wb_delete: '删除元素',
            wb_close: '关闭白板',
            discussion: '课堂讨论'
        },
        status: {
            inputStreaming: '等待中',
            inputAvailable: '执行中',
            outputAvailable: '已完成',
            outputError: '错误',
            outputDenied: '已拒绝',
            running: '执行中',
            result: '已完成',
            error: '错误'
        }
    },
    agentBar: {
        readyToLearn: '准备好一起学习了吗？',
        expandedTitle: '课堂角色配置',
        configTooltip: '点击配置课堂角色',
        voiceLabel: '音色',
        voiceLoading: '加载中...',
        voiceAutoAssign: '音色将自动分配'
    },
    proactiveCard: {
        discussion: '讨论',
        join: '加入讨论',
        skip: '跳过',
        pause: '暂停',
        resume: '继续'
    },
    voice: {
        startListening: '语音输入',
        stopListening: '停止录音'
    }
};
const chatEnUS = {
    chat: {
        lecture: 'Lecture',
        noConversations: 'No conversations',
        startConversation: 'Type a message below to begin chatting',
        noMessages: 'No messages yet',
        ended: 'ended',
        unknown: 'Unknown',
        stopDiscussion: 'Stop Discussion',
        endQA: 'End Q&A',
        tabs: {
            lecture: 'Notes',
            chat: 'Chat'
        },
        lectureNotes: {
            empty: 'Notes will appear here after lecture playback',
            emptyHint: 'Press play to start the lecture',
            pageLabel: 'Page {n}',
            currentPage: 'Current'
        },
        badge: {
            qa: 'Q&A',
            discussion: 'DISC',
            lecture: 'LEC'
        }
    },
    actions: {
        names: {
            spotlight: 'Spotlight',
            laser: 'Laser',
            wb_open: 'Open Whiteboard',
            wb_draw_text: 'Whiteboard Text',
            wb_draw_shape: 'Whiteboard Shape',
            wb_draw_chart: 'Whiteboard Chart',
            wb_draw_latex: 'Whiteboard Formula',
            wb_draw_table: 'Whiteboard Table',
            wb_draw_line: 'Whiteboard Line',
            wb_clear: 'Clear Whiteboard',
            wb_delete: 'Delete Element',
            wb_close: 'Close Whiteboard',
            discussion: 'Discussion'
        },
        status: {
            inputStreaming: 'Waiting',
            inputAvailable: 'Executing',
            outputAvailable: 'Completed',
            outputError: 'Error',
            outputDenied: 'Denied',
            running: 'Executing',
            result: 'Completed',
            error: 'Error'
        }
    },
    agentBar: {
        readyToLearn: 'Ready to learn together?',
        expandedTitle: 'Classroom Role Config',
        configTooltip: 'Click to configure classroom roles',
        voiceLabel: 'Voice',
        voiceLoading: 'Loading...',
        voiceAutoAssign: 'Voices will be auto-assigned'
    },
    proactiveCard: {
        discussion: 'Discussion',
        join: 'Join',
        skip: 'Skip',
        pause: 'Pause',
        resume: 'Resume'
    },
    voice: {
        startListening: 'Voice input',
        stopListening: 'Stop recording'
    }
};
const chatDeDE = {
    chat: {
        placeholder: 'Stelle eine Frage oder gib ein Thema ein...',
        send: 'Senden',
        thinking: 'Denkt nach...',
        error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
        retry: 'Erneut versuchen',
        copy: 'Kopieren',
        copied: 'Kopiert!',
        regenerate: 'Neu generieren',
        stopGeneration: 'Generierung stoppen',
        newChat: 'Neues Gespräch',
        clearHistory: 'Verlauf löschen',
        clearHistoryConfirm: 'Möchtest du den gesamten Gesprächsverlauf löschen?',
        inputHint: 'Was möchtest du heute lernen?',
        topicSuggestion: 'Themenvorschläge',
        uploadPdf: 'PDF hochladen',
        pdfUploaded: 'PDF hochgeladen',
        generateLesson: 'Unterricht erstellen',
        generatingLesson: 'Unterricht wird erstellt...',
        lessonReady: 'Dein Unterricht ist bereit!'
    }
};
}),
"[project]/Documents/Projects/kinder-maic/lib/i18n/generation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generationDeDE",
    ()=>generationDeDE,
    "generationEnUS",
    ()=>generationEnUS,
    "generationZhCN",
    ()=>generationZhCN
]);
const generationZhCN = {
    classroom: {
        recentClassrooms: '最近学习',
        today: '今天',
        yesterday: '昨天',
        daysAgo: '天前',
        slides: '页',
        nameCopied: '课堂名称已复制',
        deleteConfirmTitle: '删除课堂',
        delete: '删除'
    },
    upload: {
        pdfSizeLimit: '支持最大50MB的PDF文件',
        generateFailed: '生成课堂失败，请重试',
        requirementPlaceholder: '输入你想学的任何内容，例如：\n「从零学 Python，30 分钟写出第一个程序」\n「用白板给我讲解傅里叶变换」\n「阿瓦隆桌游怎么玩」',
        requirementRequired: '请输入课程需求',
        fileTooLarge: '文件过大，请选择小于50MB的PDF文件'
    },
    generation: {
        // Progress steps (used dynamically via activeStep)
        analyzingPdf: '解析 PDF 文档',
        analyzingPdfDesc: '正在提取文档结构和内容...',
        pdfLoadFailed: '无法加载 PDF 文件，请重试',
        pdfParseFailed: 'PDF 解析失败',
        streamNotReadable: '无法读取生成数据流',
        generatingOutlines: '生成课程大纲',
        generatingOutlinesDesc: '正在构建学习路径...',
        generatingSlideContent: '生成页面内容',
        generatingSlideContentDesc: '正在创建幻灯片、测验和互动内容...',
        generatingActions: '生成教学动作',
        generatingActionsDesc: '正在编排讲解、聚焦和互动流程...',
        generationComplete: '生成完成！',
        generationFailed: '生成失败',
        generatingCourse: '正在生成课程',
        openingClassroom: '即将打开课堂...',
        outlineReady: '课程大纲已生成',
        generatingFirstPage: '首页内容生成中...',
        firstPageReady: '首页已就绪！正在打开课堂...',
        speechFailed: '语音合成失败',
        retryScene: '重试生成',
        retryingScene: '正在重新生成...',
        backToHome: '返回首页',
        sessionNotFound: '未找到生成会话',
        sessionNotFoundDesc: '请先填写课程需求开始生成流程。',
        goBackAndRetry: '返回重试',
        classroomReady: '你的个性化AI学习环境已成功生成。',
        aiWorking: 'AI智能体工作中...',
        textTruncated: '文档文本较长，已截取前 {n} 字符用于生成',
        imageTruncated: '文档含 {total} 张图片，超出上限 {max} 张，多余图片将仅以文字描述传递',
        // Agent generation
        agentGeneration: '生成课堂角色',
        agentGenerationDesc: '正在根据课程内容生成角色...',
        agentRevealTitle: '你的课堂角色',
        viewAgents: '查看角色',
        continue: '继续',
        // Outline errors
        outlineRetrying: '大纲生成异常，正在重试...',
        outlineEmptyResponse: '模型未返回有效的大纲内容，请检查模型配置后重试',
        outlineGenerateFailed: '大纲生成失败，请稍后重试',
        // Web Search
        webSearching: '网络搜索',
        webSearchingDesc: '正在搜索网络获取最新资料',
        webSearchFailed: '网络搜索失败'
    }
};
const generationEnUS = {
    classroom: {
        recentClassrooms: 'Recent',
        today: 'Today',
        yesterday: 'Yesterday',
        daysAgo: 'days ago',
        slides: 'slides',
        nameCopied: 'Name copied',
        deleteConfirmTitle: 'Delete',
        delete: 'Delete'
    },
    upload: {
        pdfSizeLimit: 'Supports PDF files up to 50MB',
        generateFailed: 'Failed to generate classroom, please try again',
        requirementPlaceholder: 'Tell me anything you want to learn, e.g.\n"Teach me Python from scratch in 30 minutes"\n"Explain Fourier Transform on the whiteboard"\n"How to play the board game Avalon"',
        requirementRequired: 'Please enter course requirements',
        fileTooLarge: 'File too large. Please select a PDF file smaller than 50MB'
    },
    generation: {
        // Progress steps (used dynamically via activeStep)
        analyzingPdf: 'Analyzing PDF Document',
        analyzingPdfDesc: 'Extracting document structure and content...',
        pdfLoadFailed: 'Failed to load PDF file, please try again',
        pdfParseFailed: 'PDF parsing failed',
        streamNotReadable: 'Unable to read generation stream',
        generatingOutlines: 'Drafting Course Outline',
        generatingOutlinesDesc: 'Structuring the learning path...',
        generatingSlideContent: 'Generating Page Content',
        generatingSlideContentDesc: 'Creating slides, quizzes, and interactive content...',
        generatingActions: 'Generating Teaching Actions',
        generatingActionsDesc: 'Orchestrating narration, spotlights, and interactions...',
        generationComplete: 'Generation complete!',
        generationFailed: 'Generation failed',
        generatingCourse: 'Generating course',
        openingClassroom: 'Opening classroom...',
        outlineReady: 'Course outline generated',
        generatingFirstPage: 'Generating first page...',
        firstPageReady: 'First page ready! Opening classroom...',
        speechFailed: 'Speech generation failed',
        retryScene: 'Retry',
        retryingScene: 'Regenerating...',
        backToHome: 'Back to Home',
        sessionNotFound: 'Session Not Found',
        sessionNotFoundDesc: 'Please fill in course requirements to start the generation process.',
        goBackAndRetry: 'Go Back and Retry',
        classroomReady: 'Your personalized AI learning environment has been generated successfully.',
        aiWorking: 'AI Agents Working...',
        textTruncated: 'Document text is long, using first {n} characters for generation',
        imageTruncated: '{total} images found, exceeding the {max} image limit. Extra images will use text descriptions only',
        // Agent generation
        agentGeneration: 'Generating Classroom Roles',
        agentGenerationDesc: 'Generating roles based on course content...',
        agentRevealTitle: 'Your Classroom Roles',
        viewAgents: 'View Roles',
        continue: 'Continue',
        // Outline errors
        outlineRetrying: 'Outline generation issue, retrying...',
        outlineEmptyResponse: 'Model returned no valid outlines. Please check model configuration and try again',
        outlineGenerateFailed: 'Outline generation failed, please try again later',
        // Web Search
        webSearching: 'Web Search',
        webSearchingDesc: 'Searching the web for up-to-date information',
        webSearchFailed: 'Web search failed'
    }
};
const generationDeDE = {
    generation: {
        title: 'Unterricht erstellen',
        topicLabel: 'Thema oder Frage',
        topicPlaceholder: 'z.B. Wie funktioniert Multiplikation? oder Vulkane in der Schweiz',
        topicHint: 'Gib ein Thema ein oder lade ein PDF aus dem Lehrplan 21 hoch',
        generate: 'Unterricht starten',
        generating: 'Wird erstellt...',
        generatingHint: 'Das dauert etwa 1–2 Minuten. Dein KI-Lehrer bereitet alles vor!',
        error: 'Fehler beim Erstellen des Unterrichts',
        errorHint: 'Bitte versuche es erneut oder wähle ein anderes Thema',
        retry: 'Erneut versuchen',
        language: 'Unterrichtssprache',
        level: 'Klassenstufe',
        level3: '3. Klasse',
        level4: '4. Klasse',
        level5: '5. Klasse',
        level6: '6. Klasse',
        level7: '1. Sek',
        level8: '2. Sek',
        level9: '3. Sek',
        subject: 'Fach',
        subjectMath: 'Mathematik',
        subjectGerman: 'Deutsch',
        subjectEnglish: 'Englisch',
        subjectFrench: 'Französisch',
        subjectNMG: 'Natur, Mensch, Gesellschaft',
        subjectMI: 'Medien & Informatik',
        pdfSourceHint: 'Unterricht basiert auf dem Zürcher Lehrplan 21'
    }
};
}),
"[project]/Documents/Projects/kinder-maic/lib/i18n/settings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "settingsDeDE",
    ()=>settingsDeDE,
    "settingsEnUS",
    ()=>settingsEnUS,
    "settingsZhCN",
    ()=>settingsZhCN
]);
const settingsZhCN = {
    settings: {
        title: '设置',
        description: '配置应用程序设置',
        language: '语言',
        languageDesc: '选择界面语言',
        theme: '主题',
        themeDesc: '选择主题模式（浅色/深色/跟随系统）',
        themeOptions: {
            light: '浅色',
            dark: '深色',
            system: '跟随系统'
        },
        apiKey: 'API密钥',
        apiKeyDesc: '配置你的API密钥',
        apiBaseUrl: 'API端点地址',
        apiBaseUrlDesc: '配置你的API端点地址',
        apiKeyRequired: 'API密钥不能为空',
        model: '模型配置',
        modelDesc: '配置AI模型',
        modelPlaceholder: '输入或选择模型名称',
        ttsModel: 'TTS模型',
        ttsModelDesc: '配置TTS模型',
        ttsModelPlaceholder: '输入或选择TTS模型名称',
        ttsModelOptions: {
            openaiTts: 'OpenAI TTS',
            azureTts: 'Azure TTS'
        },
        testConnection: '测试连接',
        testConnectionDesc: '测试当前API配置是否可用',
        testing: '测试中...',
        agentSettings: '智能体设置',
        agentSettingsDesc: '选择参与对话的智能体。选择1个为单智能体模式，选择多个为多智能体协作模式。',
        agentMode: '智能体模式',
        agentModePreset: '预设模式',
        agentModeAuto: '自动生成',
        agentModeAutoDesc: 'AI 将根据课程内容自动生成适合的课堂角色',
        autoAgentCount: '生成数量',
        autoAgentCountDesc: '自动生成的角色数量（包含教师）',
        atLeastOneAgent: '请至少选择1个智能体',
        singleAgentMode: '单智能体模式',
        directAnswer: '直接回答',
        multiAgentMode: '多智能体模式',
        agentsCollaborating: '协作讨论',
        agentsCollaboratingCount: '已选择 {count} 个智能体协作讨论',
        maxTurns: '最大讨论轮数',
        maxTurnsDesc: '智能体之间最多讨论多少轮（每个智能体完成动作并回复算一轮）',
        priority: '优先级',
        actions: '动作',
        actionCount: '{count} 个动作',
        selectedAgent: '选中的智能体',
        selectedAgents: '选中的智能体',
        required: '必选',
        agentNames: {
            'default-1': 'AI教师',
            'default-2': 'AI助教',
            'default-3': '显眼包',
            'default-4': '好奇宝宝',
            'default-5': '笔记员',
            'default-6': '思考者'
        },
        agentRoles: {
            teacher: '教师',
            assistant: '助教',
            student: '学生'
        },
        agentDescriptions: {
            'default-1': '主讲教师，清晰有条理地讲解知识',
            'default-2': '辅助讲解，帮助同学理解重点',
            'default-3': '活跃气氛，用幽默让课堂更有趣',
            'default-4': '充满好奇心，总爱追问为什么',
            'default-5': '认真记录，整理课堂重点笔记',
            'default-6': '深入思考，喜欢探讨问题本质'
        },
        close: '关闭',
        save: '保存',
        // Provider settings
        providers: '语言模型',
        addProviderDescription: '添加自定义模型提供方以扩展可用的AI模型',
        providerNames: {
            openai: 'OpenAI',
            anthropic: 'Claude',
            google: 'Gemini',
            deepseek: 'DeepSeek',
            qwen: '通义千问',
            kimi: 'Kimi',
            minimax: 'MiniMax',
            glm: 'GLM',
            siliconflow: '硅基流动'
        },
        providerTypes: {
            openai: 'OpenAI 协议',
            anthropic: 'Claude 协议',
            google: 'Gemini 协议'
        },
        modelCount: '个模型',
        modelSingular: '个模型',
        defaultModel: '默认模型',
        webSearch: '联网搜索',
        mcp: 'MCP',
        knowledgeBase: '知识库',
        documentParser: '文档解析器',
        conversationSettings: '对话设置',
        keyboardShortcuts: '键盘快捷键',
        generalSettings: '常规设置',
        systemSettings: '系统设置',
        addProvider: '添加',
        importFromClipboard: '从剪贴板导入',
        apiSecret: 'API 密钥',
        apiHost: 'Base URL',
        requestUrl: '请求地址',
        models: '模型',
        addModel: '新建',
        reset: '重置',
        fetch: '获取',
        connectionSuccess: '连接成功',
        connectionFailed: '连接失败',
        // Model capabilities
        capabilities: {
            vision: '视觉',
            tools: '工具',
            streaming: '流式'
        },
        contextWindow: '上下文',
        contextShort: '上下文',
        outputWindow: '输出',
        // Provider management
        addProviderButton: '添加',
        addProviderDialog: '添加模型提供方',
        providerName: '名称',
        providerNamePlaceholder: '例如：我的OpenAI代理',
        providerNameRequired: '请输入提供方名称',
        providerApiMode: 'API 模式',
        apiModeOpenAI: 'OpenAI 协议',
        apiModeAnthropic: 'Claude 协议',
        apiModeGoogle: 'Gemini 协议',
        defaultBaseUrl: '默认 Base URL',
        providerIcon: 'Provider 图标 URL',
        requiresApiKey: '需要 API 密钥',
        deleteProvider: '删除提供方',
        deleteProviderConfirm: '确定要删除此提供方吗？',
        cannotDeleteBuiltIn: '无法删除内置提供方',
        resetToDefault: '重置为默认配置',
        resetToDefaultDescription: '将模型列表恢复到默认状态（保留 API 密钥和 Base URL）',
        resetConfirmDescription: '此操作将清除所有自定义模型，恢复到内置的默认模型列表。API 密钥和 Base URL 将被保留。',
        confirmReset: '确认重置',
        resetSuccess: '已成功重置为默认配置',
        saveSuccess: '配置已保存',
        saveFailed: '保存失败，请重试',
        cannotDeleteBuiltInModel: '无法删除内置模型',
        cannotEditBuiltInModel: '无法编辑内置模型',
        modelIdRequired: '请输入模型 ID',
        noModelsAvailable: '没有可用于测试的模型',
        providerMetadata: 'Provider 元数据',
        // Model editing
        editModel: '编辑模型',
        editModelDescription: '编辑模型配置和能力',
        addNewModel: '新建模型',
        addNewModelDescription: '添加新的模型配置',
        modelId: '模型ID',
        modelIdPlaceholder: '例如：gpt-4o',
        modelName: '显示名称',
        modelNamePlaceholder: '可选',
        modelCapabilities: '能力',
        advancedSettings: '高级设置',
        contextWindowLabel: '上下文窗口',
        contextWindowPlaceholder: '例如 128000',
        outputWindowLabel: '最大输出Token数',
        outputWindowPlaceholder: '例如 4096',
        testModel: '测试模型',
        deleteModel: '删除',
        cancelEdit: '取消',
        saveModel: '保存',
        modelsManagementDescription: '在此管理该提供方的模型列表。若需选择使用的模型，请前往"常规设置"。',
        // General settings
        howToUse: '使用说明',
        step1ConfigureProvider: '前往"模型提供方"页面，选择或添加一个提供方，配置连接信息（API 密钥、Base URL 等）',
        step2SelectModel: '在下方"使用模型"中选择要使用的模型',
        step3StartUsing: '保存设置后，系统将使用您选择的模型',
        activeModel: '使用模型',
        activeModelDescription: '选择当前用于 AI 对话和内容生成的模型',
        selectModel: '选择模型',
        searchModels: '搜索模型',
        noModelsFound: '未找到匹配的模型',
        noConfiguredProviders: '暂无已配置的提供方',
        configureProvidersFirst: '请先在左侧"模型提供方"中配置提供方连接信息',
        currentlyUsing: '当前使用',
        // TTS settings
        ttsSettings: '语音合成',
        // ASR settings
        asrSettings: '语音识别',
        // Audio settings (legacy)
        audioSettings: '音频设置',
        ttsSection: '文字转语音 (TTS)',
        asrSection: '语音识别 (ASR)',
        ttsDescription: 'TTS (Text-to-Speech) - 将文字转换为语音',
        asrDescription: 'ASR (Automatic Speech Recognition) - 将语音转换为文字',
        enableTTS: '启用语音合成',
        ttsEnabledDescription: '开启后，课程生成时将自动合成语音',
        ttsVoiceConfigHint: '每个 Agent 的音色可在首页「课堂角色配置」中设置',
        enableASR: '启用语音识别',
        asrEnabledDescription: '开启后，学生可使用麦克风进行语音输入',
        ttsProvider: 'TTS 提供商',
        ttsLanguageFilter: '语言筛选',
        allLanguages: '全部语言',
        ttsVoice: '音色',
        ttsSpeed: '语速',
        ttsBaseUrl: 'Base URL',
        ttsApiKey: 'API 密钥',
        doubaoAppId: 'App ID',
        doubaoAccessKey: 'Access Key',
        asrProvider: 'ASR 提供商',
        asrLanguage: '识别语言',
        asrBaseUrl: 'Base URL',
        asrApiKey: 'API 密钥',
        enterApiKey: '输入 API Key',
        enterCustomBaseUrl: '输入自定义 Base URL',
        browserNativeNote: '浏览器原生 ASR 无需配置，完全免费',
        // Audio provider names
        providerOpenAITTS: 'OpenAI TTS (gpt-4o-mini-tts)',
        providerAzureTTS: 'Azure TTS',
        providerGLMTTS: 'GLM TTS',
        providerQwenTTS: 'Qwen TTS（阿里云百炼）',
        providerDoubaoTTS: '豆包 TTS 2.0（火山引擎）',
        providerElevenLabsTTS: 'ElevenLabs TTS',
        providerBrowserNativeTTS: '浏览器原生 TTS',
        providerOpenAIWhisper: 'OpenAI ASR (gpt-4o-mini-transcribe)',
        providerBrowserNative: '浏览器原生 ASR',
        providerQwenASR: 'Qwen ASR（阿里云百炼）',
        providerUnpdf: 'unpdf（内置）',
        providerMinerU: 'MinerU',
        browserNativeTTSNote: '浏览器原生 TTS 无需配置，完全免费，使用系统内置语音',
        testTTS: '测试 TTS',
        testASR: '测试 ASR',
        testSuccess: '测试成功',
        testFailed: '测试失败',
        ttsTestText: 'TTS 测试文本',
        ttsTestSuccess: 'TTS 测试成功，音频已播放',
        ttsTestFailed: 'TTS 测试失败',
        asrTestSuccess: '语音识别成功',
        asrTestFailed: '语音识别失败',
        asrResult: '识别结果',
        asrNotSupported: '浏览器不支持语音识别 API',
        browserTTSNotSupported: '浏览器不支持语音合成 API',
        browserTTSNoVoices: '当前浏览器没有可用的 TTS voice',
        microphoneAccessDenied: '麦克风访问被拒绝',
        microphoneAccessFailed: '无法访问麦克风',
        asrResultPlaceholder: '录音后将显示识别结果',
        useThisProvider: '使用此提供商',
        fetchVoices: '获取音色列表',
        fetchingVoices: '获取中...',
        voicesFetched: '已获取音色',
        fetchVoicesFailed: '获取音色失败',
        voiceApiKeyRequired: '需要 API 密钥',
        voiceBaseUrlRequired: '需要 Base URL',
        ttsTestTextPlaceholder: '输入要转换的文本',
        ttsTestTextDefault: '你好，这是一段测试语音。',
        startRecording: '开始录音',
        stopRecording: '停止录音',
        recording: '录音中...',
        transcribing: '识别中...',
        transcriptionResult: '识别结果',
        noTranscriptionResult: '无识别结果',
        baseUrlOptional: 'Base URL（可选）',
        defaultValue: '默认',
        // TTS Voice descriptions (OpenAI)
        voiceMarin: '推荐 - 最佳质量',
        voiceCedar: '推荐 - 最佳质量',
        voiceAlloy: '中性、平衡',
        voiceAsh: '沉稳、专业',
        voiceBallad: '优雅、抒情',
        voiceCoral: '温暖、友好',
        voiceEcho: '男性、清晰',
        voiceFable: '叙事、生动',
        voiceNova: '女性、明亮',
        voiceOnyx: '男性、深沉',
        voiceSage: '智慧、沉着',
        voiceShimmer: '女性、柔和',
        voiceVerse: '自然、流畅',
        // TTS Voice descriptions (GLM)
        glmVoiceTongtong: '默认音色',
        glmVoiceChuichui: '锤锤音色',
        glmVoiceXiaochen: '小陈音色',
        glmVoiceJam: '动动动物圈jam音色',
        glmVoiceKazi: '动动动物圈kazi音色',
        glmVoiceDouji: '动动动物圈douji音色',
        glmVoiceLuodo: '动动动物圈luodo音色',
        // TTS Voice descriptions (Qwen)
        qwenVoiceCherry: '阳光积极、亲切自然小姐姐',
        qwenVoiceSerena: '温柔小姐姐',
        qwenVoiceEthan: '阳光、温暖、活力、朝气',
        qwenVoiceChelsie: '二次元虚拟女友',
        qwenVoiceMomo: '撒娇搞怪，逗你开心',
        qwenVoiceVivian: '拽拽的、可爱的小暴躁',
        qwenVoiceMoon: '率性帅气',
        qwenVoiceMaia: '知性与温柔的碰撞',
        qwenVoiceKai: '耳朵的一场SPA',
        qwenVoiceNofish: '不会翘舌音的设计师',
        qwenVoiceBella: '喝酒不打醉拳的小萝莉',
        qwenVoiceJennifer: '品牌级、电影质感般美语女声',
        qwenVoiceRyan: '节奏拉满，戏感炸裂，真实与张力共舞',
        qwenVoiceKaterina: '御姐音色，韵律回味十足',
        qwenVoiceAiden: '精通厨艺的美语大男孩',
        qwenVoiceEldricSage: '沉稳睿智的老者，沧桑如松却心明如镜',
        qwenVoiceMia: '温顺如春水，乖巧如初雪',
        qwenVoiceMochi: '聪明伶俐的小大人，童真未泯却早慧如禅',
        qwenVoiceBellona: '声音洪亮，吐字清晰，人物鲜活，听得人热血沸腾',
        qwenVoiceVincent: '一口独特的沙哑烟嗓，一开口便道尽了千军万马与江湖豪情',
        qwenVoiceBunny: '"萌属性"爆棚的小萝莉',
        qwenVoiceNeil: '专业新闻主持人',
        qwenVoiceElias: '专业讲师音色',
        qwenVoiceArthur: '被岁月和旱烟浸泡过的质朴嗓音',
        qwenVoiceNini: '糯米糍一样又软又黏的嗓音，那一声声拉长了的"哥哥"',
        qwenVoiceEbona: '她的低语像一把生锈的钥匙，缓慢转动你内心最深处的幽暗角落',
        qwenVoiceSeren: '温和舒缓的声线，助你更快地进入睡眠',
        qwenVoicePip: '调皮捣蛋却充满童真的他来了',
        qwenVoiceStella: '平时是甜到发腻的迷糊少女音，但在喊出"代表月亮消灭你"时，瞬间充满不容置疑的爱与正义',
        qwenVoiceBodega: '热情的西班牙大叔',
        qwenVoiceSonrisa: '热情开朗的拉美大姐',
        qwenVoiceAlek: '一开口，是战斗民族的冷，也是毛呢大衣下的暖',
        qwenVoiceDolce: '慵懒的意大利大叔',
        qwenVoiceSohee: '温柔开朗，情绪丰富的韩国欧尼',
        qwenVoiceOnoAnna: '鬼灵精怪的青梅竹马',
        qwenVoiceLenn: '理性是底色，叛逆藏在细节里——穿西装也听后朋克的德国青年',
        qwenVoiceEmilien: '浪漫的法国大哥哥',
        qwenVoiceAndre: '声音磁性，自然舒服、沉稳男生',
        qwenVoiceRadioGol: '足球诗人Rádio Gol！今天我要用名字为你们解说足球',
        qwenVoiceJada: '风风火火的沪上阿姐',
        qwenVoiceDylan: '北京胡同里长大的少年',
        qwenVoiceLi: '耐心的瑜伽老师',
        qwenVoiceMarcus: '面宽话短，心实声沉——老陕的味道',
        qwenVoiceRoy: '诙谐直爽、市井活泼的台湾哥仔形象',
        qwenVoicePeter: '天津相声，专业捧哏',
        qwenVoiceSunny: '甜到你心里的川妹子',
        qwenVoiceEric: '跳脱市井的成都男子',
        qwenVoiceRocky: '幽默风趣的阿强',
        qwenVoiceKiki: '甜美的港妹闺蜜',
        // ASR Language names (native forms - autoglossonyms)
        lang_auto: '自动检测',
        lang_zh: '中文',
        lang_yue: '粤語',
        lang_en: 'English',
        lang_ja: '日本語',
        lang_ko: '한국어',
        lang_es: 'Español',
        lang_fr: 'Français',
        lang_de: 'Deutsch',
        lang_ru: 'Русский',
        lang_ar: 'العربية',
        lang_pt: 'Português',
        lang_it: 'Italiano',
        lang_af: 'Afrikaans',
        lang_hy: 'Հայերեն',
        lang_az: 'Azərbaycan',
        lang_be: 'Беларуская',
        lang_bs: 'Bosanski',
        lang_bg: 'Български',
        lang_ca: 'Català',
        lang_hr: 'Hrvatski',
        lang_cs: 'Čeština',
        lang_da: 'Dansk',
        lang_nl: 'Nederlands',
        lang_et: 'Eesti',
        lang_fi: 'Suomi',
        lang_gl: 'Galego',
        lang_el: 'Ελληνικά',
        lang_he: 'עברית',
        lang_hi: 'हिन्दी',
        lang_hu: 'Magyar',
        lang_is: 'Íslenska',
        lang_id: 'Bahasa Indonesia',
        lang_kn: 'ಕನ್ನಡ',
        lang_kk: 'Қазақша',
        lang_lv: 'Latviešu',
        lang_lt: 'Lietuvių',
        lang_mk: 'Македонски',
        lang_ms: 'Bahasa Melayu',
        lang_mr: 'मराठी',
        lang_mi: 'Te Reo Māori',
        lang_ne: 'नेपाली',
        lang_no: 'Norsk',
        lang_fa: 'فارسی',
        lang_pl: 'Polski',
        lang_ro: 'Română',
        lang_sr: 'Српски',
        lang_sk: 'Slovenčina',
        lang_sl: 'Slovenščina',
        lang_sw: 'Kiswahili',
        lang_sv: 'Svenska',
        lang_tl: 'Tagalog',
        lang_fil: 'Filipino',
        lang_ta: 'தமிழ்',
        lang_th: 'ไทย',
        lang_tr: 'Türkçe',
        lang_uk: 'Українська',
        lang_ur: 'اردو',
        lang_vi: 'Tiếng Việt',
        lang_cy: 'Cymraeg',
        // BCP-47 format language codes (for Web Speech API)
        'lang_zh-CN': '中文（简体，中国）',
        'lang_zh-TW': '中文（繁體，台灣）',
        'lang_zh-HK': '粵語（香港）',
        'lang_yue-Hant-HK': '粵語（繁體）',
        'lang_en-US': 'English (United States)',
        'lang_en-GB': 'English (United Kingdom)',
        'lang_en-AU': 'English (Australia)',
        'lang_en-CA': 'English (Canada)',
        'lang_en-IN': 'English (India)',
        'lang_en-NZ': 'English (New Zealand)',
        'lang_en-ZA': 'English (South Africa)',
        'lang_ja-JP': '日本語（日本）',
        'lang_ko-KR': '한국어（대한민국）',
        'lang_de-DE': 'Deutsch (Deutschland)',
        'lang_fr-FR': 'Français (France)',
        'lang_es-ES': 'Español (España)',
        'lang_es-MX': 'Español (México)',
        'lang_es-AR': 'Español (Argentina)',
        'lang_es-CO': 'Español (Colombia)',
        'lang_it-IT': 'Italiano (Italia)',
        'lang_pt-BR': 'Português (Brasil)',
        'lang_pt-PT': 'Português (Portugal)',
        'lang_ru-RU': 'Русский (Россия)',
        'lang_nl-NL': 'Nederlands (Nederland)',
        'lang_pl-PL': 'Polski (Polska)',
        'lang_cs-CZ': 'Čeština (Česko)',
        'lang_da-DK': 'Dansk (Danmark)',
        'lang_fi-FI': 'Suomi (Suomi)',
        'lang_sv-SE': 'Svenska (Sverige)',
        'lang_no-NO': 'Norsk (Norge)',
        'lang_tr-TR': 'Türkçe (Türkiye)',
        'lang_el-GR': 'Ελληνικά (Ελλάδα)',
        'lang_hu-HU': 'Magyar (Magyarország)',
        'lang_ro-RO': 'Română (România)',
        'lang_sk-SK': 'Slovenčina (Slovensko)',
        'lang_bg-BG': 'Български (България)',
        'lang_hr-HR': 'Hrvatski (Hrvatska)',
        'lang_ca-ES': 'Català (Espanya)',
        'lang_ar-SA': 'العربية (السعودية)',
        'lang_ar-EG': 'العربية (مصر)',
        'lang_he-IL': 'עברית (ישראל)',
        'lang_hi-IN': 'हिन्दी (भारत)',
        'lang_th-TH': 'ไทย (ประเทศไทย)',
        'lang_vi-VN': 'Tiếng Việt (Việt Nam)',
        'lang_id-ID': 'Bahasa Indonesia (Indonesia)',
        'lang_ms-MY': 'Bahasa Melayu (Malaysia)',
        'lang_fil-PH': 'Filipino (Pilipinas)',
        'lang_af-ZA': 'Afrikaans (Suid-Afrika)',
        'lang_uk-UA': 'Українська (Україна)',
        // PDF settings
        pdfSettings: 'PDF 解析',
        pdfParsingSettings: 'PDF 解析设置',
        pdfDescription: '选择 PDF 解析引擎，支持文本提取、图片处理和表格识别',
        pdfProvider: 'PDF 解析器',
        pdfFeatures: '支持功能',
        pdfApiKey: 'API Key',
        pdfBaseUrl: 'Base URL',
        mineruDescription: 'MinerU 是一个商用 PDF 解析服务，支持高级功能如表格提取、公式识别和布局分析。',
        mineruApiKeyRequired: '使用前需要在 MinerU 官网申请 API Key。',
        mineruWarning: '注意',
        mineruCostWarning: 'MinerU 为商用服务，使用可能产生费用。请查看 MinerU 官网了解定价详情。',
        enterMinerUApiKey: '输入 MinerU API Key',
        mineruLocalDescription: 'MinerU 支持本地部署，提供高级 PDF 解析功能（表格、公式、布局分析）。需要先部署 MinerU 服务。',
        mineruServerAddress: '本地 MinerU 服务器地址（如：http://localhost:8080）',
        mineruApiKeyOptional: '仅在服务器启用认证时需要',
        optionalApiKey: '可选的 API Key',
        featureText: '文本提取',
        featureImages: '图片提取',
        featureTables: '表格提取',
        featureFormulas: '公式识别',
        featureLayoutAnalysis: '布局分析',
        featureMetadata: '元数据',
        // Image Generation settings
        enableImageGeneration: '启用 AI 图片生成',
        imageGenerationDisabledHint: '启用后，课程生成时将自动生成配图',
        imageSettings: '图像生成',
        imageSection: '文生图',
        imageProvider: '图像生成提供商',
        imageModel: '图像生成模型',
        providerSeedream: 'Seedream（字节豆包）',
        providerQwenImage: 'Qwen Image（阿里通义）',
        providerNanoBanana: 'Nano Banana（Gemini）',
        providerGrokImage: 'Grok Image（xAI）',
        testImageGeneration: '测试图像生成',
        testImageConnectivity: '测试连接',
        imageConnectivitySuccess: '图像服务连接成功',
        imageConnectivityFailed: '图像服务连接失败',
        imageTestSuccess: '图像生成测试成功',
        imageTestFailed: '图像生成测试失败',
        imageTestPromptPlaceholder: '输入图像描述进行测试',
        imageTestPromptDefault: '一只可爱的猫咪坐在书桌上',
        imageGenerating: '正在生成图像...',
        imageGenerationFailed: '图像生成失败',
        // Video Generation settings
        enableVideoGeneration: '启用 AI 视频生成',
        videoGenerationDisabledHint: '启用后，课程生成时将自动生成视频',
        videoSettings: '视频生成',
        videoSection: '文生视频',
        videoProvider: '视频生成提供商',
        videoModel: '视频生成模型',
        providerSeedance: 'Seedance（字节跳动）',
        providerKling: '可灵（快手）',
        providerVeo: 'Veo（Google）',
        providerSora: 'Sora（OpenAI）',
        providerGrokVideo: 'Grok Video（xAI）',
        testVideoGeneration: '测试视频生成',
        testVideoConnectivity: '测试连接',
        videoConnectivitySuccess: '视频服务连接成功',
        videoConnectivityFailed: '视频服务连接失败',
        testingConnection: '正在测试...',
        videoTestSuccess: '视频生成测试成功',
        videoTestFailed: '视频生成测试失败',
        videoTestPromptDefault: '一只可爱的猫咪在书桌上行走',
        videoGenerating: '正在生成视频（预计1-2分钟）...',
        videoGenerationWarning: '视频生成通常需要1-2分钟，请耐心等待',
        mediaRetry: '重试',
        mediaContentSensitive: '抱歉，该内容触发了安全检查',
        mediaGenerationDisabled: '已在设置中关闭生成',
        // Agent settings (kept with main settings block above)
        singleAgent: '单智能体模式',
        multiAgent: '多智能体模式',
        selectAgents: '选择智能体',
        noVisionWarning: '当前模型不支持视觉能力，图片仍可放入幻灯片，但模型无法理解图片内容来优化选择和布局',
        // Server provider configuration
        serverConfigured: '服务端',
        serverConfiguredNotice: '管理员已在服务端配置了此提供方的 API Key，可直接使用。也可输入自己的 Key 覆盖。',
        optionalOverride: '可选，留空则使用服务端配置',
        // Access code
        setupNeeded: '请先完成配置',
        modelNotConfigured: '请选择一个模型以开始使用',
        // Clear cache
        dangerZone: '危险区域',
        clearCache: '清空本地缓存',
        clearCacheDescription: '删除所有本地存储的数据，包括课堂记录、对话历史、音频缓存和应用配置。此操作不可撤销。',
        clearCacheConfirmTitle: '确定要清空所有缓存吗？',
        clearCacheConfirmDescription: '此操作将永久删除以下所有数据，且无法恢复：',
        clearCacheConfirmItems: '课堂和场景数据、对话历史记录、音频和图片缓存、应用设置和偏好',
        clearCacheConfirmInput: '请输入「确认删除」以继续',
        clearCacheConfirmPhrase: '确认删除',
        clearCacheButton: '永久删除所有数据',
        clearCacheSuccess: '缓存已清空，页面即将刷新',
        clearCacheFailed: '清空缓存失败，请重试',
        // Web Search settings
        webSearchSettings: '网络搜索',
        webSearchApiKey: 'Tavily API Key',
        webSearchApiKeyPlaceholder: '输入你的 Tavily API Key',
        webSearchApiKeyPlaceholderServer: '已配置服务端密钥，可选填覆盖',
        webSearchApiKeyHint: '从 tavily.com 获取 API Key，用于网络搜索',
        webSearchBaseUrl: 'Base URL',
        webSearchServerConfigured: '服务端已配置 Tavily API Key',
        optional: '可选'
    },
    profile: {
        title: '个人资料',
        defaultNickname: '同学',
        chooseAvatar: '选择头像',
        uploadAvatar: '上传',
        bioPlaceholder: '介绍一下自己，AI老师会根据你的背景个性化教学...',
        avatarHint: '你的头像将显示在课堂讨论和对话中',
        fileTooLarge: '图片过大，请选择小于 5MB 的图片',
        invalidFileType: '请选择图片文件',
        editTooltip: '点击编辑个人资料'
    },
    media: {
        imageCapability: '图像生成',
        imageHint: '课件中生成配图',
        videoCapability: '视频生成',
        videoHint: '课件中生成视频',
        ttsCapability: '语音合成',
        ttsHint: 'AI 老师语音讲解',
        asrCapability: '语音识别',
        asrHint: '语音输入参与讨论',
        provider: '服务商',
        model: '模型',
        voice: '音色',
        speed: '语速',
        language: '语言'
    }
};
const settingsEnUS = {
    settings: {
        title: 'Settings',
        description: 'Configure application settings',
        language: 'Language',
        languageDesc: 'Select interface language',
        theme: 'Theme',
        themeDesc: 'Select theme mode (Light/Dark/System)',
        themeOptions: {
            light: 'Light',
            dark: 'Dark',
            system: 'System'
        },
        apiKey: 'API Key',
        apiKeyDesc: 'Configure your API key',
        apiBaseUrl: 'API Endpoint URL',
        apiBaseUrlDesc: 'Configure your API endpoint URL',
        apiKeyRequired: 'API key cannot be empty',
        model: 'Model Configuration',
        modelDesc: 'Configure AI models',
        modelPlaceholder: 'Enter or select model name',
        ttsModel: 'TTS Model',
        ttsModelDesc: 'Configure TTS models',
        ttsModelPlaceholder: 'Enter or select TTS model name',
        ttsModelOptions: {
            openaiTts: 'OpenAI TTS',
            azureTts: 'Azure TTS'
        },
        testConnection: 'Test Connection',
        testConnectionDesc: 'Test current API configuration is available',
        testing: 'Testing...',
        agentSettings: 'Agent Settings',
        agentSettingsDesc: 'Select the agents to participate in the conversation. Select 1 for single agent mode, select multiple for multi-agent collaborative mode.',
        agentMode: 'Agent Mode',
        agentModePreset: 'Preset',
        agentModeAuto: 'Auto-generate',
        agentModeAutoDesc: 'AI will automatically generate appropriate roles',
        autoAgentCount: 'Agent Count',
        autoAgentCountDesc: 'Number of agents to auto-generate (including teacher)',
        atLeastOneAgent: 'Please select at least 1 agent',
        singleAgentMode: 'Single Agent Mode',
        directAnswer: 'Direct Answer',
        multiAgentMode: 'Multi-Agent Mode',
        agentsCollaborating: 'Collaborative Discussion',
        agentsCollaboratingCount: '{count} agents selected for collaborative discussion',
        maxTurns: 'Max Discussion Turns',
        maxTurnsDesc: 'The maximum number of discussion turns between agents (each agent completes actions and reply counts as one turn)',
        priority: 'Priority',
        actions: 'Actions',
        actionCount: '{count} actions',
        selectedAgent: 'Selected Agent',
        selectedAgents: 'Selected Agents',
        required: 'Required',
        agentNames: {
            'default-1': 'AI Teacher',
            'default-2': 'AI Assistant',
            'default-3': 'Class Clown',
            'default-4': 'Curious Mind',
            'default-5': 'Note Taker',
            'default-6': 'Deep Thinker'
        },
        agentRoles: {
            teacher: 'Teacher',
            assistant: 'Assistant',
            student: 'Student'
        },
        agentDescriptions: {
            'default-1': 'Lead teacher with clear and structured explanations',
            'default-2': 'Supports learning and helps clarify key points',
            'default-3': 'Brings humor and energy to the classroom',
            'default-4': 'Always curious, loves asking why and how',
            'default-5': 'Diligently records and organizes class notes',
            'default-6': 'Thinks deeply and explores the essence of topics'
        },
        close: 'Close',
        save: 'Save',
        // Provider settings
        providers: 'LLM',
        addProviderDescription: 'Add custom model providers to extend available AI models',
        providerNames: {
            openai: 'OpenAI',
            anthropic: 'Claude',
            google: 'Gemini',
            deepseek: 'DeepSeek',
            qwen: 'Qwen',
            kimi: 'Kimi',
            minimax: 'MiniMax',
            glm: 'GLM',
            siliconflow: 'SiliconFlow'
        },
        providerTypes: {
            openai: 'OpenAI Protocol',
            anthropic: 'Claude Protocol',
            google: 'Gemini Protocol'
        },
        modelCount: 'models',
        modelSingular: 'model',
        defaultModel: 'Default Model',
        webSearch: 'Web Search',
        mcp: 'MCP',
        knowledgeBase: 'Knowledge Base',
        documentParser: 'Document Parser',
        conversationSettings: 'Conversation',
        keyboardShortcuts: 'Shortcuts',
        generalSettings: 'General',
        systemSettings: 'System',
        addProvider: 'Add',
        importFromClipboard: 'Import from Clipboard',
        apiSecret: 'API Key',
        apiHost: 'Base URL',
        requestUrl: 'Request URL',
        models: 'Models',
        addModel: 'New',
        reset: 'Reset',
        fetch: 'Fetch',
        connectionSuccess: 'Connection successful',
        connectionFailed: 'Connection failed',
        // Model capabilities
        capabilities: {
            vision: 'Vision',
            tools: 'Tools',
            streaming: 'Streaming'
        },
        contextWindow: 'Context',
        contextShort: 'ctx',
        outputWindow: 'Output',
        // Provider management
        addProviderButton: 'Add',
        addProviderDialog: 'Add Model Provider',
        providerName: 'Name',
        providerNamePlaceholder: 'e.g., My OpenAI Proxy',
        providerNameRequired: 'Please enter provider name',
        providerApiMode: 'API Mode',
        apiModeOpenAI: 'OpenAI Protocol',
        apiModeAnthropic: 'Claude Protocol',
        apiModeGoogle: 'Gemini Protocol',
        defaultBaseUrl: 'Default Base URL',
        providerIcon: 'Provider Icon URL',
        requiresApiKey: 'Requires API Key',
        deleteProvider: 'Delete Provider',
        deleteProviderConfirm: 'Are you sure you want to delete this provider?',
        cannotDeleteBuiltIn: 'Cannot delete built-in provider',
        resetToDefault: 'Reset to Default',
        resetToDefaultDescription: 'Restore model list to default configuration (API key and Base URL will be preserved)',
        resetConfirmDescription: 'This will remove all custom models and restore the built-in default model list. API key and Base URL will be preserved.',
        confirmReset: 'Confirm Reset',
        resetSuccess: 'Successfully reset to default configuration',
        saveSuccess: 'Settings saved',
        saveFailed: 'Failed to save settings, please try again',
        cannotDeleteBuiltInModel: 'Cannot delete built-in model',
        cannotEditBuiltInModel: 'Cannot edit built-in model',
        modelIdRequired: 'Please enter model ID',
        noModelsAvailable: 'No models available for testing',
        providerMetadata: 'Provider Metadata',
        // Model editing
        editModel: 'Edit Model',
        editModelDescription: 'Edit model configuration and capabilities',
        addNewModel: 'New Model',
        addNewModelDescription: 'Add a new model configuration',
        modelId: 'Model ID',
        modelIdPlaceholder: 'e.g., gpt-4o',
        modelName: 'Display Name',
        modelNamePlaceholder: 'Optional',
        modelCapabilities: 'Capabilities',
        advancedSettings: 'Advanced Settings',
        contextWindowLabel: 'Context Window',
        contextWindowPlaceholder: 'e.g., 128000',
        outputWindowLabel: 'Max Output Tokens',
        outputWindowPlaceholder: 'e.g., 4096',
        testModel: 'Test Model',
        deleteModel: 'Delete',
        cancelEdit: 'Cancel',
        saveModel: 'Save',
        modelsManagementDescription: 'Manage models for this provider. To select the active model, go to "General".',
        // General settings
        howToUse: 'How to Use',
        step1ConfigureProvider: 'Go to "Model Providers", select or add a provider, and configure connection settings (API key, Base URL, etc.)',
        step2SelectModel: 'Select the model you want to use in "Active Model" below',
        step3StartUsing: 'After saving, the system will use your selected model',
        activeModel: 'Active Model',
        activeModelDescription: 'Select the model for AI conversations and content generation',
        selectModel: 'Select Model',
        searchModels: 'Search models',
        noModelsFound: 'No matching models found',
        noConfiguredProviders: 'No configured providers',
        configureProvidersFirst: 'Please configure provider connection settings in "Model Providers" on the left',
        currentlyUsing: 'Currently using',
        // TTS settings
        ttsSettings: 'Text-to-Speech',
        // ASR settings
        asrSettings: 'Speech Recognition',
        // Audio settings (legacy)
        audioSettings: 'Audio Settings',
        ttsSection: 'Text-to-Speech (TTS)',
        asrSection: 'Automatic Speech Recognition (ASR)',
        ttsDescription: 'TTS (Text-to-Speech) - Convert text to speech',
        asrDescription: 'ASR (Automatic Speech Recognition) - Convert speech to text',
        enableTTS: 'Enable Text-to-Speech',
        ttsEnabledDescription: 'When enabled, speech audio will be generated during course creation',
        ttsVoiceConfigHint: 'Per-agent voice can be configured in "Classroom Role Config" on the homepage',
        enableASR: 'Enable Speech Recognition',
        asrEnabledDescription: 'When enabled, students can use microphone for voice input',
        ttsProvider: 'TTS Provider',
        ttsLanguageFilter: 'Language Filter',
        allLanguages: 'All Languages',
        ttsVoice: 'Voice',
        ttsSpeed: 'Speed',
        ttsBaseUrl: 'Base URL',
        ttsApiKey: 'API Key',
        doubaoAppId: 'App ID',
        doubaoAccessKey: 'Access Key',
        asrProvider: 'ASR Provider',
        asrLanguage: 'Recognition Language',
        asrBaseUrl: 'Base URL',
        asrApiKey: 'API Key',
        enterApiKey: 'Enter API Key',
        enterCustomBaseUrl: 'Enter custom Base URL',
        browserNativeNote: 'Browser Native ASR requires no configuration and is completely free',
        // Audio provider names
        providerOpenAITTS: 'OpenAI TTS (gpt-4o-mini-tts)',
        providerAzureTTS: 'Azure TTS',
        providerGLMTTS: 'GLM TTS',
        providerQwenTTS: 'Qwen TTS (Alibaba Cloud Bailian)',
        providerDoubaoTTS: 'Doubao TTS 2.0 (Volcengine)',
        providerElevenLabsTTS: 'ElevenLabs TTS',
        providerBrowserNativeTTS: 'Browser Native TTS',
        providerOpenAIWhisper: 'OpenAI ASR (gpt-4o-mini-transcribe)',
        providerBrowserNative: 'Browser Native ASR',
        providerQwenASR: 'Qwen ASR (Alibaba Cloud Bailian)',
        providerUnpdf: 'unpdf (Built-in)',
        providerMinerU: 'MinerU',
        browserNativeTTSNote: 'Browser Native TTS requires no configuration and is completely free, using system built-in voices',
        testTTS: 'Test TTS',
        testASR: 'Test ASR',
        testSuccess: 'Test Successful',
        testFailed: 'Test Failed',
        ttsTestText: 'TTS Test Text',
        ttsTestSuccess: 'TTS test successful, audio played',
        ttsTestFailed: 'TTS test failed',
        asrTestSuccess: 'Speech recognition successful',
        asrTestFailed: 'Speech recognition failed',
        asrResult: 'Recognition Result',
        asrNotSupported: 'Browser does not support Speech Recognition API',
        browserTTSNotSupported: 'Browser does not support Speech Synthesis API',
        browserTTSNoVoices: 'Current browser has no available TTS voices',
        microphoneAccessDenied: 'Microphone access denied',
        microphoneAccessFailed: 'Failed to access microphone',
        asrResultPlaceholder: 'Recognition result will be displayed after recording',
        useThisProvider: 'Use This Provider',
        fetchVoices: 'Fetch Voice List',
        fetchingVoices: 'Fetching...',
        voicesFetched: 'Voices fetched',
        fetchVoicesFailed: 'Failed to fetch voices',
        voiceApiKeyRequired: 'API Key required',
        voiceBaseUrlRequired: 'Base URL required',
        ttsTestTextPlaceholder: 'Enter text to convert',
        ttsTestTextDefault: 'Hello, this is a test speech.',
        startRecording: 'Start Recording',
        stopRecording: 'Stop Recording',
        recording: 'Recording...',
        transcribing: 'Transcribing...',
        transcriptionResult: 'Transcription Result',
        noTranscriptionResult: 'No transcription result',
        baseUrlOptional: 'Base URL (Optional)',
        defaultValue: 'Default',
        // TTS Voice descriptions (OpenAI)
        voiceMarin: 'Recommended - Best Quality',
        voiceCedar: 'Recommended - Best Quality',
        voiceAlloy: 'Neutral, Balanced',
        voiceAsh: 'Steady, Professional',
        voiceBallad: 'Elegant, Lyrical',
        voiceCoral: 'Warm, Friendly',
        voiceEcho: 'Male, Clear',
        voiceFable: 'Narrative, Vivid',
        voiceNova: 'Female, Bright',
        voiceOnyx: 'Male, Deep',
        voiceSage: 'Wise, Composed',
        voiceShimmer: 'Female, Soft',
        voiceVerse: 'Natural, Smooth',
        // TTS Voice descriptions (GLM)
        glmVoiceTongtong: 'Default voice',
        glmVoiceChuichui: 'Chuichui voice',
        glmVoiceXiaochen: 'Xiaochen voice',
        glmVoiceJam: 'Jam voice',
        glmVoiceKazi: 'Kazi voice',
        glmVoiceDouji: 'Douji voice',
        glmVoiceLuodo: 'Luodo voice',
        // TTS Voice descriptions (Qwen)
        qwenVoiceCherry: 'Sunny, warm and natural',
        qwenVoiceSerena: 'Gentle and soft',
        qwenVoiceEthan: 'Energetic and vibrant',
        qwenVoiceChelsie: 'Anime virtual girlfriend',
        qwenVoiceMomo: 'Playful and cheerful',
        qwenVoiceVivian: 'Cute and sassy',
        qwenVoiceMoon: 'Cool and handsome',
        qwenVoiceMaia: 'Intellectual and gentle',
        qwenVoiceKai: 'A SPA for your ears',
        qwenVoiceNofish: "Designer who can't pronounce retroflex sounds",
        qwenVoiceBella: "Little loli who doesn't get drunk",
        qwenVoiceJennifer: 'Brand-level, cinematic American female voice',
        qwenVoiceRyan: 'Fast-paced, dramatic performance',
        qwenVoiceKaterina: 'Mature lady with memorable rhythm',
        qwenVoiceAiden: 'American boy who masters cooking',
        qwenVoiceEldricSage: 'Steady and wise elder',
        qwenVoiceMia: 'Gentle as spring water, well-behaved as snow',
        qwenVoiceMochi: 'Smart little adult with childlike innocence',
        qwenVoiceBellona: 'Loud voice, clear pronunciation, vivid characters',
        qwenVoiceVincent: 'Unique hoarse voice telling tales of war and honor',
        qwenVoiceBunny: 'Super cute loli',
        qwenVoiceNeil: 'Professional news anchor',
        qwenVoiceElias: 'Professional instructor',
        qwenVoiceArthur: 'Simple voice soaked by years and dry tobacco',
        qwenVoiceNini: 'Soft and sticky voice like glutinous rice cake',
        qwenVoiceEbona: 'Her whisper is like a rusty key',
        qwenVoiceSeren: 'Gentle and soothing voice to help you sleep',
        qwenVoicePip: 'Naughty but full of childlike innocence',
        qwenVoiceStella: 'Sweet confused girl voice that becomes just when shouting',
        qwenVoiceBodega: 'Enthusiastic Spanish uncle',
        qwenVoiceSonrisa: 'Enthusiastic Latin American lady',
        qwenVoiceAlek: 'Cold of battle nation, warm under woolen coat',
        qwenVoiceDolce: 'Lazy Italian uncle',
        qwenVoiceSohee: 'Gentle, cheerful Korean unnie',
        qwenVoiceOnoAnna: 'Mischievous childhood friend',
        qwenVoiceLenn: 'Rational German youth who wears suit and listens to post-punk',
        qwenVoiceEmilien: 'Romantic French big brother',
        qwenVoiceAndre: 'Magnetic, natural and calm male voice',
        qwenVoiceRadioGol: 'Football poet Rádio Gol!',
        qwenVoiceJada: 'Lively Shanghai lady',
        qwenVoiceDylan: 'Beijing boy',
        qwenVoiceLi: 'Patient yoga teacher',
        qwenVoiceMarcus: 'Broad face, short words, solid heart - old Shaanxi taste',
        qwenVoiceRoy: 'Humorous and straightforward Taiwanese boy',
        qwenVoicePeter: 'Tianjin cross-talk professional supporter',
        qwenVoiceSunny: 'Sweet Sichuan girl',
        qwenVoiceEric: 'Chengdu gentleman',
        qwenVoiceRocky: 'Humorous Hong Kong guy',
        qwenVoiceKiki: 'Sweet Hong Kong girl',
        // ASR Language names (native forms - autoglossonyms)
        lang_auto: 'Auto Detect',
        lang_zh: '中文',
        lang_yue: '粤語',
        lang_en: 'English',
        lang_ja: '日本語',
        lang_ko: '한국어',
        lang_es: 'Español',
        lang_fr: 'Français',
        lang_de: 'Deutsch',
        lang_ru: 'Русский',
        lang_ar: 'العربية',
        lang_pt: 'Português',
        lang_it: 'Italiano',
        lang_af: 'Afrikaans',
        lang_hy: 'Հայերեն',
        lang_az: 'Azərbaycan',
        lang_be: 'Беларуская',
        lang_bs: 'Bosanski',
        lang_bg: 'Български',
        lang_ca: 'Català',
        lang_hr: 'Hrvatski',
        lang_cs: 'Čeština',
        lang_da: 'Dansk',
        lang_nl: 'Nederlands',
        lang_et: 'Eesti',
        lang_fi: 'Suomi',
        lang_gl: 'Galego',
        lang_el: 'Ελληνικά',
        lang_he: 'עברית',
        lang_hi: 'हिन्दी',
        lang_hu: 'Magyar',
        lang_is: 'Íslenska',
        lang_id: 'Bahasa Indonesia',
        lang_kn: 'ಕನ್ನಡ',
        lang_kk: 'Қазақша',
        lang_lv: 'Latviešu',
        lang_lt: 'Lietuvių',
        lang_mk: 'Македонски',
        lang_ms: 'Bahasa Melayu',
        lang_mr: 'मराठी',
        lang_mi: 'Te Reo Māori',
        lang_ne: 'नेपाली',
        lang_no: 'Norsk',
        lang_fa: 'فارسی',
        lang_pl: 'Polski',
        lang_ro: 'Română',
        lang_sr: 'Српски',
        lang_sk: 'Slovenčina',
        lang_sl: 'Slovenščina',
        lang_sw: 'Kiswahili',
        lang_sv: 'Svenska',
        lang_tl: 'Tagalog',
        lang_fil: 'Filipino',
        lang_ta: 'தமிழ்',
        lang_th: 'ไทย',
        lang_tr: 'Türkçe',
        lang_uk: 'Українська',
        lang_ur: 'اردو',
        lang_vi: 'Tiếng Việt',
        lang_cy: 'Cymraeg',
        // BCP-47 format language codes (for Web Speech API)
        'lang_zh-CN': '中文（简体，中国）',
        'lang_zh-TW': '中文（繁體，台灣）',
        'lang_zh-HK': '粵語（香港）',
        'lang_yue-Hant-HK': '粵語（繁體）',
        'lang_en-US': 'English (United States)',
        'lang_en-GB': 'English (United Kingdom)',
        'lang_en-AU': 'English (Australia)',
        'lang_en-CA': 'English (Canada)',
        'lang_en-IN': 'English (India)',
        'lang_en-NZ': 'English (New Zealand)',
        'lang_en-ZA': 'English (South Africa)',
        'lang_ja-JP': '日本語（日本）',
        'lang_ko-KR': '한국어（대한민국）',
        'lang_de-DE': 'Deutsch (Deutschland)',
        'lang_fr-FR': 'Français (France)',
        'lang_es-ES': 'Español (España)',
        'lang_es-MX': 'Español (México)',
        'lang_es-AR': 'Español (Argentina)',
        'lang_es-CO': 'Español (Colombia)',
        'lang_it-IT': 'Italiano (Italia)',
        'lang_pt-BR': 'Português (Brasil)',
        'lang_pt-PT': 'Português (Portugal)',
        'lang_ru-RU': 'Русский (Россия)',
        'lang_nl-NL': 'Nederlands (Nederland)',
        'lang_pl-PL': 'Polski (Polska)',
        'lang_cs-CZ': 'Čeština (Česko)',
        'lang_da-DK': 'Dansk (Danmark)',
        'lang_fi-FI': 'Suomi (Suomi)',
        'lang_sv-SE': 'Svenska (Sverige)',
        'lang_no-NO': 'Norsk (Norge)',
        'lang_tr-TR': 'Türkçe (Türkiye)',
        'lang_el-GR': 'Ελληνικά (Ελλάδα)',
        'lang_hu-HU': 'Magyar (Magyarország)',
        'lang_ro-RO': 'Română (România)',
        'lang_sk-SK': 'Slovenčina (Slovensko)',
        'lang_bg-BG': 'Български (България)',
        'lang_hr-HR': 'Hrvatski (Hrvatska)',
        'lang_ca-ES': 'Català (Espanya)',
        'lang_ar-SA': 'العربية (السعودية)',
        'lang_ar-EG': 'العربية (مصر)',
        'lang_he-IL': 'עברית (ישראל)',
        'lang_hi-IN': 'हिन्दी (भारत)',
        'lang_th-TH': 'ไทย (ประเทศไทย)',
        'lang_vi-VN': 'Tiếng Việt (Việt Nam)',
        'lang_id-ID': 'Bahasa Indonesia (Indonesia)',
        'lang_ms-MY': 'Bahasa Melayu (Malaysia)',
        'lang_fil-PH': 'Filipino (Pilipinas)',
        'lang_af-ZA': 'Afrikaans (Suid-Afrika)',
        'lang_uk-UA': 'Українська (Україна)',
        // PDF settings
        pdfSettings: 'PDF Parsing',
        pdfParsingSettings: 'PDF Parsing Settings',
        pdfDescription: 'Choose PDF parsing engine with support for text extraction, image processing, and table recognition',
        pdfProvider: 'PDF Parser',
        pdfFeatures: 'Supported Features',
        pdfApiKey: 'API Key',
        pdfBaseUrl: 'Base URL',
        mineruDescription: 'MinerU is a commercial PDF parsing service that supports advanced features such as table extraction, formula recognition, and layout analysis.',
        mineruApiKeyRequired: 'You need to apply for an API Key on the MinerU website before use.',
        mineruWarning: 'Warning',
        mineruCostWarning: 'MinerU is a commercial service and may incur fees. Please check the MinerU website for pricing details.',
        enterMinerUApiKey: 'Enter MinerU API Key',
        mineruLocalDescription: 'MinerU supports local deployment with advanced PDF parsing (tables, formulas, layout analysis). Requires deploying MinerU service first.',
        mineruServerAddress: 'Local MinerU server address (e.g., http://localhost:8080)',
        mineruApiKeyOptional: 'Only required if server has authentication enabled',
        optionalApiKey: 'Optional API Key',
        featureText: 'Text Extraction',
        featureImages: 'Image Extraction',
        featureTables: 'Table Extraction',
        featureFormulas: 'Formula Recognition',
        featureLayoutAnalysis: 'Layout Analysis',
        featureMetadata: 'Metadata',
        // Image Generation settings
        enableImageGeneration: 'Enable AI Image Generation',
        imageGenerationDisabledHint: 'When enabled, images will be auto-generated during course creation',
        imageSettings: 'Image Generation',
        imageSection: 'Text to Image',
        imageProvider: 'Image Generation Provider',
        imageModel: 'Image Generation Model',
        providerSeedream: 'Seedream (ByteDance)',
        providerQwenImage: 'Qwen Image (Alibaba)',
        providerNanoBanana: 'Nano Banana (Gemini)',
        providerGrokImage: 'Grok Image (xAI)',
        testImageGeneration: 'Test Image Generation',
        testImageConnectivity: 'Test Connection',
        imageConnectivitySuccess: 'Image service connected successfully',
        imageConnectivityFailed: 'Image service connection failed',
        imageTestSuccess: 'Image generation test succeeded',
        imageTestFailed: 'Image generation test failed',
        imageTestPromptPlaceholder: 'Enter image description to test',
        imageTestPromptDefault: 'A cute cat sitting on a desk',
        imageGenerating: 'Generating image...',
        imageGenerationFailed: 'Image generation failed',
        // Video Generation settings
        enableVideoGeneration: 'Enable AI Video Generation',
        videoGenerationDisabledHint: 'When enabled, videos will be auto-generated during course creation',
        videoSettings: 'Video Generation',
        videoSection: 'Text to Video',
        videoProvider: 'Video Generation Provider',
        videoModel: 'Video Generation Model',
        providerSeedance: 'Seedance (ByteDance)',
        providerKling: 'Kling (Kuaishou)',
        providerVeo: 'Veo (Google)',
        providerSora: 'Sora (OpenAI)',
        providerGrokVideo: 'Grok Video (xAI)',
        testVideoGeneration: 'Test Video Generation',
        testVideoConnectivity: 'Test Connection',
        videoConnectivitySuccess: 'Video service connected successfully',
        videoConnectivityFailed: 'Video service connection failed',
        testingConnection: 'Testing...',
        videoTestSuccess: 'Video generation test succeeded',
        videoTestFailed: 'Video generation test failed',
        videoTestPromptDefault: 'A cute cat walking on a desk',
        videoGenerating: 'Generating video (est. 1-2 min)...',
        videoGenerationWarning: 'Video generation usually takes 1-2 minutes, please be patient',
        mediaRetry: 'Retry',
        mediaContentSensitive: 'Sorry, this content triggered a safety check.',
        mediaGenerationDisabled: 'Generation disabled in settings',
        // Agent settings (kept with main settings block above)
        singleAgent: 'Single Agent',
        multiAgent: 'Multi-Agent',
        selectAgents: 'Select Agents',
        noVisionWarning: 'Current model does not support vision. Images can still be placed in slides, but the model cannot understand image content to optimize selection and layout',
        // Server provider configuration
        serverConfigured: 'Server',
        serverConfiguredNotice: 'Admin has configured an API key for this provider on the server. You can use it directly or enter your own key to override.',
        optionalOverride: 'Optional — leave empty to use server config',
        // Access code
        setupNeeded: 'Setup required',
        modelNotConfigured: 'Please select a model to get started',
        // Clear cache
        dangerZone: 'Danger Zone',
        clearCache: 'Clear Local Cache',
        clearCacheDescription: 'Delete all locally stored data, including classroom records, chat history, audio cache, and app settings. This action cannot be undone.',
        clearCacheConfirmTitle: 'Are you sure you want to clear all cache?',
        clearCacheConfirmDescription: 'This will permanently delete all of the following data and cannot be recovered:',
        clearCacheConfirmItems: 'Classrooms & scenes, Chat history, Audio & image cache, App settings & preferences',
        clearCacheConfirmInput: 'Type "DELETE" to continue',
        clearCacheConfirmPhrase: 'DELETE',
        clearCacheButton: 'Permanently Delete All Data',
        clearCacheSuccess: 'Cache cleared, page will refresh shortly',
        clearCacheFailed: 'Failed to clear cache, please try again',
        // Web Search settings
        webSearchSettings: 'Web Search',
        webSearchApiKey: 'Tavily API Key',
        webSearchApiKeyPlaceholder: 'Enter your Tavily API Key',
        webSearchApiKeyPlaceholderServer: 'Server key configured, optionally override',
        webSearchApiKeyHint: 'Get an API key from tavily.com for web search',
        webSearchBaseUrl: 'Base URL',
        webSearchServerConfigured: 'Server-side Tavily API key is configured',
        optional: 'Optional'
    },
    profile: {
        title: 'Profile',
        defaultNickname: 'Student',
        chooseAvatar: 'Choose Avatar',
        uploadAvatar: 'Upload',
        bioPlaceholder: 'Tell us about yourself — the AI teacher will personalize lessons for you...',
        avatarHint: 'Your avatar will appear in classroom discussions and chats',
        fileTooLarge: 'Image too large — please choose one under 5 MB',
        invalidFileType: 'Please select an image file',
        editTooltip: 'Click to edit profile'
    },
    media: {
        imageCapability: 'Image Generation',
        imageHint: 'Generate images in slides',
        videoCapability: 'Video Generation',
        videoHint: 'Generate videos in slides',
        ttsCapability: 'Text-to-Speech',
        ttsHint: 'AI teacher speaks aloud',
        asrCapability: 'Speech Recognition',
        asrHint: 'Voice input for discussion',
        provider: 'Provider',
        model: 'Model',
        voice: 'Voice',
        speed: 'Speed',
        language: 'Language'
    }
};
const settingsDeDE = {
    settings: {
        title: 'Einstellungen',
        save: 'Speichern',
        saved: 'Gespeichert!',
        cancel: 'Abbrechen',
        language: 'Sprache',
        theme: 'Design',
        themeLight: 'Hell',
        themeDark: 'Dunkel',
        themeSystem: 'Systemstandard',
        model: 'KI-Modell',
        apiKey: 'API-Schlüssel',
        apiKeyPlaceholder: 'API-Schlüssel eingeben...',
        apiKeySaved: 'API-Schlüssel gespeichert',
        tts: 'Sprachausgabe',
        ttsProvider: 'Sprachausgabe-Anbieter',
        ttsVoice: 'Stimme',
        ttsSpeed: 'Sprechgeschwindigkeit',
        ttsTest: 'Stimme testen',
        pdfParser: 'PDF-Parser',
        webSearch: 'Internetsuche',
        webSearchProvider: 'Suchanbieter',
        reset: 'Einstellungen zurücksetzen',
        resetConfirm: 'Möchtest du alle Einstellungen zurücksetzen?',
        about: 'Über diese App',
        aboutText: 'Kinder-MAIC – Interaktiver KI-Unterricht für Kinder in Zürich, basierend auf dem Lehrplan 21.'
    }
};
}),
"[project]/Documents/Projects/kinder-maic/lib/i18n/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientTranslation",
    ()=>getClientTranslation,
    "translate",
    ()=>translate,
    "translations",
    ()=>translations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/i18n/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$common$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/i18n/common.ts [app-ssr] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/i18n/stage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/i18n/chat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/i18n/generation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/i18n/settings.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const translations = {
    'zh-CN': {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$common$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonZhCN"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stageZhCN"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatZhCN"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generationZhCN"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["settingsZhCN"]
    },
    'en-US': {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$common$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonEnUS"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stageEnUS"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatEnUS"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generationEnUS"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["settingsEnUS"]
    },
    'de-DE': {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$common$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonDeDE"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$stage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stageDeDE"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatDeDE"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generationDeDE"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["settingsDeDE"]
    }
};
function translate(locale, key) {
    const keys = key.split('.');
    let value = translations[locale];
    for (const k of keys){
        value = value?.[k];
    }
    return (typeof value === 'string' ? value : undefined) ?? key;
}
function getClientTranslation(key) {
    let locale = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"];
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return translate(locale, key);
}
}),
"[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/i18n/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/i18n/types.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const LOCALE_STORAGE_KEY = 'locale';
const VALID_LOCALES = [
    'zh-CN',
    'en-US'
];
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function I18nProvider({ children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"]);
    // Hydrate from localStorage after mount (avoids SSR mismatch)
    /* eslint-disable react-hooks/set-state-in-effect -- Hydration from localStorage must happen in effect */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
            if (stored && VALID_LOCALES.includes(stored)) {
                setLocaleState(stored);
                return;
            }
            const detected = navigator.language?.startsWith('zh') ? 'zh-CN' : 'en-US';
            localStorage.setItem(LOCALE_STORAGE_KEY, detected);
            setLocaleState(detected);
        } catch  {
        // localStorage unavailable, keep default
        }
    }, []);
    /* eslint-enable react-hooks/set-state-in-effect */ const setLocale = (newLocale)=>{
        setLocaleState(newLocale);
        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    };
    const t = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["translate"])(locale, key);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: {
            locale,
            setLocale,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
function useI18n() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }
    return context;
}
}),
"[project]/Documents/Projects/kinder-maic/components/ui/sonner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CircleCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as InfoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlertIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as TriangleAlertIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OctagonXIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/octagon-x.js [app-ssr] (ecmascript) <export default as OctagonXIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2Icon>");
'use client';
;
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = 'system' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        icons: {
            success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckIcon$3e$__["CircleCheckIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/ui/sonner.tsx",
                lineNumber: 21,
                columnNumber: 18
            }, void 0),
            info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoIcon$3e$__["InfoIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/ui/sonner.tsx",
                lineNumber: 22,
                columnNumber: 15
            }, void 0),
            warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlertIcon$3e$__["TriangleAlertIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/ui/sonner.tsx",
                lineNumber: 23,
                columnNumber: 18
            }, void 0),
            error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OctagonXIcon$3e$__["OctagonXIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/ui/sonner.tsx",
                lineNumber: 24,
                columnNumber: 16
            }, void 0),
            loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
                className: "size-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/ui/sonner.tsx",
                lineNumber: 25,
                columnNumber: 18
            }, void 0)
        },
        style: {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)',
            '--border-radius': 'var(--radius)'
        },
        toastOptions: {
            classNames: {
                toast: 'cn-toast'
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/ui/sonner.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLogger",
    ()=>createLogger
]);
const LOG_LEVELS = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};
function getMinLevel() {
    const env = (process.env.LOG_LEVEL ?? 'info').toLowerCase();
    return env in LOG_LEVELS ? env : 'info';
}
function isJsonFormat() {
    return process.env.LOG_FORMAT === 'json';
}
function formatLine(level, tag, args) {
    const timestamp = new Date().toISOString();
    const upperLevel = level.toUpperCase();
    const msg = args.map((a)=>a instanceof Error ? a.stack ?? a.message : typeof a === 'string' ? a : JSON.stringify(a)).join(' ');
    if (isJsonFormat()) {
        return JSON.stringify({
            timestamp,
            level: upperLevel,
            tag,
            message: msg
        });
    }
    return `[${timestamp}] [${upperLevel}] [${tag}] ${msg}`;
}
function createLogger(tag) {
    const emit = (level, args)=>{
        if (LOG_LEVELS[level] < LOG_LEVELS[getMinLevel()]) return;
        const line = formatLine(level, tag, args);
        // Console output
        const fn = level === 'debug' ? console.debug : level === 'warn' ? console.warn : level === 'error' ? console.error : console.log;
        fn(line);
    };
    return {
        debug: (...args)=>emit('debug', args),
        info: (...args)=>emit('info', args),
        warn: (...args)=>emit('warn', args),
        error: (...args)=>emit('error', args)
    };
}
}),
"[externals]/node:assert [external] (node:assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[externals]/node:http [external] (node:http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:querystring [external] (node:querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:querystring", () => require("node:querystring"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:tls [external] (node:tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:zlib [external] (node:zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:zlib", () => require("node:zlib"));

module.exports = mod;
}),
"[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:perf_hooks", () => require("node:perf_hooks"));

module.exports = mod;
}),
"[externals]/node:util/types [external] (node:util/types, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util/types", () => require("node:util/types"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:worker_threads [external] (node:worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:worker_threads", () => require("node:worker_threads"));

module.exports = mod;
}),
"[externals]/node:http2 [external] (node:http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http2", () => require("node:http2"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:console [external] (node:console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:console", () => require("node:console"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:timers [external] (node:timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:timers", () => require("node:timers"));

module.exports = mod;
}),
"[externals]/node:dns [external] (node:dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:dns", () => require("node:dns"));

module.exports = mod;
}),
"[project]/Documents/Projects/kinder-maic/lib/ai/providers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROVIDERS",
    ()=>PROVIDERS,
    "getAllModels",
    ()=>getAllModels,
    "getModel",
    ()=>getModel,
    "getModelInfo",
    ()=>getModelInfo,
    "getProvider",
    ()=>getProvider,
    "parseModelString",
    ()=>parseModelString
]);
/**
 * Unified AI Provider Configuration
 *
 * Supports multiple AI providers through Vercel AI SDK:
 * - OpenAI (native)
 * - Anthropic Claude (native)
 * - Google Gemini (native)
 * - MiniMax (Anthropic-compatible, recommended by official)
 * - OpenAI-compatible providers (DeepSeek, Kimi, GLM, SiliconFlow, Doubao, etc.)
 *
 * Sources:
 * - https://platform.openai.com/docs/models
 * - https://platform.claude.com/docs/en/about-claude/models/overview
 * - https://ai.google.dev/gemini-api/docs/models
 * - https://api-docs.deepseek.com/quick_start/pricing
 * - https://platform.moonshot.cn/docs/pricing/chat
 * - https://platform.minimaxi.com/docs/guides/text-generation
 * - https://platform.minimax.io/docs/api-reference/text-anthropic-api
 * - https://docs.bigmodel.cn/cn/guide/start/model-overview
 * - https://help.aliyun.com/zh/model-studio/models (Qwen/DashScope)
 * - https://siliconflow.cn/models
 * - https://siliconflow.cn/pricing
 * - https://www.volcengine.com/docs/82379/1330310
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$41_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/@ai-sdk+openai@3.0.41_zod@4.3.6/node_modules/@ai-sdk/openai/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$anthropic$40$3$2e$0$2e$58_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/@ai-sdk+anthropic@3.0.58_zod@4.3.6/node_modules/@ai-sdk/anthropic/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$43_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/@ai-sdk+google@3.0.43_zod@4.3.6/node_modules/@ai-sdk/google/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
;
;
;
;
// NOTE: Do NOT import thinking-context.ts here — it uses node:async_hooks
// which is server-only, and this file is also used on the client via
// settings.ts. The thinking context is read from globalThis instead
// (set by thinking-context.ts at module load time on the server).
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('AIProviders');
const PROVIDERS = {
    openai: {
        id: 'openai',
        name: 'OpenAI',
        type: 'openai',
        defaultBaseUrl: 'https://api.openai.com/v1',
        requiresApiKey: true,
        icon: '/logos/openai.svg',
        models: [
            {
                id: 'gpt-5.2',
                name: 'GPT-5.2',
                contextWindow: 400000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'gpt-5.1',
                name: 'GPT-5.1',
                contextWindow: 400000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'gpt-5',
                name: 'GPT-5',
                contextWindow: 400000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gpt-5-mini',
                name: 'GPT-5-mini',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gpt-5-nano',
                name: 'GPT-5-nano',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gpt-4o',
                name: 'GPT-4o',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'gpt-4o-mini',
                name: 'GPT-4o-mini',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'gpt-4-turbo',
                name: 'GPT-4-turbo',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'o4-mini',
                name: 'o4-mini',
                contextWindow: 200000,
                outputWindow: 100000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'o3',
                name: 'o3',
                contextWindow: 200000,
                outputWindow: 100000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'o3-mini',
                name: 'o3-mini',
                contextWindow: 200000,
                outputWindow: 100000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'o1',
                name: 'o1',
                contextWindow: 200000,
                outputWindow: 100000,
                capabilities: {
                    streaming: true,
                    tools: false,
                    vision: false,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            }
        ]
    },
    anthropic: {
        id: 'anthropic',
        name: 'Claude',
        type: 'anthropic',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api.anthropic.com/v1',
        icon: '/logos/claude.svg',
        models: [
            {
                id: 'claude-opus-4-6',
                name: 'Claude Opus 4.6',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'claude-sonnet-4-6',
                name: 'Claude Sonnet 4.6',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'claude-sonnet-4-5',
                name: 'Claude Sonnet 4.5',
                contextWindow: 200000,
                outputWindow: 64000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'claude-haiku-4-5',
                name: 'Claude Haiku 4.5',
                contextWindow: 200000,
                outputWindow: 64000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            }
        ]
    },
    google: {
        id: 'google',
        name: 'Gemini',
        type: 'google',
        requiresApiKey: true,
        defaultBaseUrl: 'https://generativelanguage.googleapis.com/v1beta',
        icon: '/logos/gemini.svg',
        models: [
            {
                id: 'gemini-3.1-pro-preview',
                name: 'Gemini 3.1 Pro Preview',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gemini-3-pro-preview',
                name: 'Gemini 3 Pro Preview',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gemini-3-flash-preview',
                name: 'Gemini 3 Flash Preview',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gemini-2.5-flash',
                name: 'Gemini 2.5 Flash',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'gemini-2.5-flash-lite',
                name: 'Gemini 2.5 Flash Lite',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: true,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'gemini-2.5-pro',
                name: 'Gemini 2.5 Pro',
                contextWindow: 1048576,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: true,
                        defaultEnabled: true
                    }
                }
            }
        ]
    },
    glm: {
        id: 'glm',
        name: 'GLM',
        type: 'openai',
        defaultBaseUrl: 'https://open.bigmodel.cn/api/paas/v4',
        requiresApiKey: true,
        icon: '/logos/glm.svg',
        models: [
            // GLM-5 Series - Latest flagship model
            {
                id: 'glm-5',
                name: 'GLM-5',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // GLM-4.7 Series
            {
                id: 'glm-4.7',
                name: 'GLM-4.7',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.7-flashx',
                name: 'GLM-4.7-FlashX',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.7-flash',
                name: 'GLM-4.7-Flash',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // GLM-4.6 Series - Advanced coding & reasoning
            {
                id: 'glm-4.6',
                name: 'GLM-4.6',
                contextWindow: 200000,
                outputWindow: 128000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.6v',
                name: 'GLM-4.6V',
                contextWindow: 128000,
                outputWindow: 32000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'glm-4.6v-flash',
                name: 'GLM-4.6V-Flash',
                contextWindow: 128000,
                outputWindow: 32000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            // GLM-4.5 Series - Cost-effective models
            {
                id: 'glm-4.5-air',
                name: 'GLM-4.5-Air',
                contextWindow: 128000,
                outputWindow: 96000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.5-airx',
                name: 'GLM-4.5-AirX',
                contextWindow: 128000,
                outputWindow: 96000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4.5-flash',
                name: 'GLM-4.5-Flash',
                contextWindow: 128000,
                outputWindow: 96000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'glm-4-long',
                name: 'GLM-4-Long',
                contextWindow: 1000000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        ]
    },
    qwen: {
        id: 'qwen',
        name: 'Qwen',
        type: 'openai',
        defaultBaseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
        requiresApiKey: true,
        icon: '/logos/qwen.svg',
        models: [
            {
                id: 'qwen3.5-flash',
                name: 'Qwen3.5 Flash',
                contextWindow: 1000000,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'qwen3.5-plus',
                name: 'Qwen3.5 Plus',
                contextWindow: 1000000,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'qwen3-max',
                name: 'Qwen3 Max',
                contextWindow: 262144,
                outputWindow: 65536,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'qwen3-vl-plus',
                name: 'Qwen3 VL Plus',
                contextWindow: 262144,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            }
        ]
    },
    deepseek: {
        id: 'deepseek',
        name: 'DeepSeek',
        type: 'openai',
        defaultBaseUrl: 'https://api.deepseek.com/v1',
        requiresApiKey: true,
        icon: '/logos/deepseek.svg',
        models: [
            {
                id: 'deepseek-chat',
                name: 'DeepSeek-Chat',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: false,
                        defaultEnabled: false
                    }
                }
            },
            {
                id: 'deepseek-reasoner',
                name: 'DeepSeek-Reasoner',
                contextWindow: 128000,
                outputWindow: 32000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            }
        ]
    },
    kimi: {
        id: 'kimi',
        name: 'Kimi',
        type: 'openai',
        defaultBaseUrl: 'https://api.moonshot.cn/v1',
        requiresApiKey: true,
        icon: '/logos/kimi.png',
        models: [
            // K2.5 Series (2026) - 1T MoE, 32B active parameters
            {
                id: 'kimi-k2.5',
                name: 'Kimi K2.5',
                contextWindow: 256000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'kimi-k2-0905-preview',
                name: 'Kimi K2 0905 Preview',
                contextWindow: 256000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'kimi-k2-thinking',
                name: 'Kimi K2 Thinking',
                contextWindow: 256000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false,
                    thinking: {
                        toggleable: true,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'kimi-k2-turbo-preview',
                name: 'Kimi K2 Turbo Preview',
                contextWindow: 256000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'moonshot-v1-128k',
                name: 'Moonshot V1 128K',
                contextWindow: 128000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'moonshot-v1-32k',
                name: 'Moonshot V1 32K',
                contextWindow: 32000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'moonshot-v1-8k',
                name: 'Moonshot V1 8K',
                contextWindow: 8000,
                outputWindow: 4096,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        ]
    },
    minimax: {
        id: 'minimax',
        name: 'MiniMax',
        type: 'anthropic',
        defaultBaseUrl: 'https://api.minimaxi.com/anthropic/v1',
        requiresApiKey: true,
        icon: '/logos/minimax.svg',
        models: [
            {
                id: 'MiniMax-M2.5',
                name: 'MiniMax M2.5',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2.1',
                name: 'MiniMax M2.1',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2.1-lightning',
                name: 'MiniMax M2.1 Lightning',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'MiniMax-M2',
                name: 'MiniMax M2',
                contextWindow: 204800,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        ]
    },
    siliconflow: {
        id: 'siliconflow',
        name: '硅基流动',
        type: 'openai',
        defaultBaseUrl: 'https://api.siliconflow.cn/v1',
        requiresApiKey: true,
        icon: '/logos/siliconflow.svg',
        models: [
            // DeepSeek Series
            {
                id: 'deepseek-ai/DeepSeek-V3.2',
                name: 'DeepSeek-V3.2',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'deepseek-ai/DeepSeek-V3',
                name: 'DeepSeek-V3',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'deepseek-ai/DeepSeek-R1',
                name: 'DeepSeek-R1',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
                name: 'DeepSeek-R1-Distill-Qwen-7B',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // Qwen Series
            {
                id: 'Qwen/Qwen2.5-72B-Instruct',
                name: 'Qwen2.5-72B-Instruct',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'Qwen/Qwen2.5-Coder-7B-Instruct',
                name: 'Qwen2.5-Coder-7B-Instruct',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'Qwen/Qwen2.5-7B-Instruct',
                name: 'Qwen2.5-7B-Instruct',
                contextWindow: 128000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'Qwen/Qwen3-VL-32B-Instruct',
                name: 'Qwen3-VL-32B-Instruct',
                contextWindow: 256000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            // MiniMax Series
            {
                id: 'MiniMaxAI/MiniMax-M2',
                name: 'MiniMax-M2',
                contextWindow: 204800,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // Kimi Series
            {
                id: 'Pro/moonshotai/Kimi-K2.5',
                name: 'Kimi-K2.5',
                contextWindow: 256000,
                outputWindow: 96000,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            // GLM Series
            {
                id: 'THUDM/GLM-Z1-Rumination-32B-0414',
                name: 'GLM-Z1-Rumination-32B',
                contextWindow: 32000,
                outputWindow: 16384,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'THUDM/GLM-4.1V-9B-Thinking',
                name: 'GLM-4.1V-9B-Thinking',
                contextWindow: 64000,
                outputWindow: 8192,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            }
        ]
    },
    doubao: {
        id: 'doubao',
        name: '豆包',
        type: 'openai',
        defaultBaseUrl: 'https://ark.cn-beijing.volces.com/api/v3',
        requiresApiKey: true,
        icon: '/logos/doubao.svg',
        models: [
            {
                id: 'doubao-seed-2-0-pro-260215',
                name: 'Doubao Seed 2.0 Pro',
                contextWindow: 128000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'doubao-seed-2-0-lite-260215',
                name: 'Doubao Seed 2.0 Lite',
                contextWindow: 128000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'doubao-seed-2-0-mini-260215',
                name: 'Doubao Seed 2.0 Mini',
                contextWindow: 128000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'doubao-seed-1-8-251228',
                name: 'Doubao Seed 1.8',
                contextWindow: 128000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            }
        ]
    },
    grok: {
        id: 'grok',
        name: 'Grok',
        type: 'openai',
        defaultBaseUrl: 'https://api.x.ai/v1',
        requiresApiKey: true,
        icon: '/logos/grok.svg',
        models: [
            {
                id: 'grok-4.20-beta-0309-reasoning',
                name: 'Grok 4.20 Reasoning',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'grok-4.20-beta-0309-non-reasoning',
                name: 'Grok 4.20',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'grok-code-fast-1',
                name: 'Grok Code Fast',
                contextWindow: 256000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'grok-4-fast-reasoning',
                name: 'Grok 4 Fast Reasoning',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'grok-4-fast-non-reasoning',
                name: 'Grok 4 Fast',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'grok-4-1-fast-reasoning',
                name: 'Grok 4.1 Fast Reasoning',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true,
                    thinking: {
                        toggleable: false,
                        budgetAdjustable: false,
                        defaultEnabled: true
                    }
                }
            },
            {
                id: 'grok-4-1-fast-non-reasoning',
                name: 'Grok 4.1 Fast',
                contextWindow: 2000000,
                outputWindow: 131072,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'grok-4-0709',
                name: 'Grok 4',
                contextWindow: 256000,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: true
                }
            },
            {
                id: 'grok-3',
                name: 'Grok 3',
                contextWindow: 131072,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            },
            {
                id: 'grok-3-mini',
                name: 'Grok 3 Mini',
                contextWindow: 131072,
                outputWindow: 32768,
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        ]
    }
};
/**
 * Get provider config (from built-in or unified config in localStorage)
 */ function getProviderConfig(providerId) {
    // Check built-in providers first
    if (PROVIDERS[providerId]) {
        return PROVIDERS[providerId];
    }
    // Check unified providersConfig in localStorage (browser only)
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
}
/**
 * Return vendor-specific body params to inject for OpenAI-compatible providers.
 * Called from the custom fetch wrapper inside getModel().
 */ function getCompatThinkingBodyParams(providerId, config) {
    if (config.enabled === false) {
        switch(providerId){
            // Kimi / DeepSeek / GLM use { thinking: { type: "disabled" } }
            case 'kimi':
            case 'deepseek':
            case 'glm':
                return {
                    thinking: {
                        type: 'disabled'
                    }
                };
            // Qwen / SiliconFlow use { enable_thinking: false }
            case 'qwen':
            case 'siliconflow':
                return {
                    enable_thinking: false
                };
            default:
                return undefined;
        }
    }
    if (config.enabled === true) {
        switch(providerId){
            case 'kimi':
            case 'deepseek':
            case 'glm':
                return {
                    thinking: {
                        type: 'enabled'
                    }
                };
            case 'qwen':
            case 'siliconflow':
                return {
                    enable_thinking: true
                };
            default:
                return undefined;
        }
    }
    return undefined;
}
function getModel(config) {
    // Get provider type and requiresApiKey, with fallback to registry
    let providerType = config.providerType;
    let requiresApiKey = config.requiresApiKey ?? true;
    if (!providerType) {
        const provider = getProviderConfig(config.providerId);
        if (provider) {
            providerType = provider.type;
            requiresApiKey = provider.requiresApiKey;
        } else {
            throw new Error(`Unknown provider: ${config.providerId}. Please provide providerType.`);
        }
    }
    // Validate API key if required
    if (requiresApiKey && !config.apiKey) {
        throw new Error(`API key required for provider: ${config.providerId}`);
    }
    // Use provided API key, or empty string for providers that don't require one
    const effectiveApiKey = config.apiKey || '';
    // Resolve base URL: explicit > provider default > SDK default
    const provider = getProviderConfig(config.providerId);
    const effectiveBaseUrl = config.baseUrl || provider?.defaultBaseUrl || undefined;
    let model;
    switch(providerType){
        case 'openai':
            {
                const openaiOptions = {
                    apiKey: effectiveApiKey,
                    baseURL: effectiveBaseUrl
                };
                // For OpenAI-compatible providers (not native OpenAI), add a fetch
                // wrapper that injects vendor-specific thinking params into the HTTP
                // body. The thinking config is read from AsyncLocalStorage, set by
                // callLLM / streamLLM at call time.
                if (config.providerId !== 'openai') {
                    const providerId = config.providerId;
                    openaiOptions.fetch = async (url, init)=>{
                        // Read thinking config from globalThis (set by thinking-context.ts)
                        const thinkingCtx = globalThis.__thinkingContext;
                        const thinking = thinkingCtx?.getStore?.();
                        if (thinking && init?.body && typeof init.body === 'string') {
                            const extra = getCompatThinkingBodyParams(providerId, thinking);
                            if (extra) {
                                try {
                                    const body = JSON.parse(init.body);
                                    Object.assign(body, extra);
                                    init = {
                                        ...init,
                                        body: JSON.stringify(body)
                                    };
                                } catch  {
                                /* leave body as-is */ }
                            }
                        }
                        return globalThis.fetch(url, init);
                    };
                }
                const openai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$41_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOpenAI"])(openaiOptions);
                model = openai.chat(config.modelId);
                break;
            }
        case 'anthropic':
            {
                const anthropic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$anthropic$40$3$2e$0$2e$58_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnthropic"])({
                    apiKey: effectiveApiKey,
                    baseURL: effectiveBaseUrl
                });
                model = anthropic.chat(config.modelId);
                break;
            }
        case 'google':
            {
                const googleOptions = {
                    apiKey: effectiveApiKey,
                    baseURL: effectiveBaseUrl
                };
                if (config.proxy) {
                    // Dynamic require to avoid bundling undici on the client side
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    const { ProxyAgent, fetch: undiciFetch } = __turbopack_context__.r("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/undici@7.22.0/node_modules/undici/index.js [app-ssr] (ecmascript)");
                    const agent = new ProxyAgent(config.proxy);
                    googleOptions.fetch = (input, init)=>undiciFetch(input, {
                            ...init,
                            dispatcher: agent
                        }).then((r)=>r);
                }
                const google = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$43_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGoogleGenerativeAI"])(googleOptions);
                model = google.chat(config.modelId);
                break;
            }
        default:
            throw new Error(`Unsupported provider type: ${providerType}`);
    }
    // Look up model info from the provider registry
    const modelInfo = provider?.models.find((m)=>m.id === config.modelId) || null;
    return {
        model,
        modelInfo
    };
}
function parseModelString(modelString) {
    // Split only on the first colon to handle model IDs that contain colons
    const colonIndex = modelString.indexOf(':');
    if (colonIndex > 0) {
        return {
            providerId: modelString.slice(0, colonIndex),
            modelId: modelString.slice(colonIndex + 1)
        };
    }
    // Default to OpenAI for backward compatibility
    return {
        providerId: 'openai',
        modelId: modelString
    };
}
function getAllModels() {
    return Object.values(PROVIDERS).map((provider)=>({
            provider,
            models: provider.models
        }));
}
function getProvider(providerId) {
    return PROVIDERS[providerId];
}
function getModelInfo(providerId, modelId) {
    const provider = PROVIDERS[providerId];
    return provider?.models.find((m)=>m.id === modelId);
}
}),
"[project]/Documents/Projects/kinder-maic/lib/audio/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Audio Provider Constants
 *
 * Registry of all TTS and ASR providers with their metadata.
 * Separated from tts-providers.ts and asr-providers.ts to avoid importing
 * Node.js libraries (like sharp, buffer) in client components.
 *
 * This file is client-safe and can be imported in both client and server components.
 *
 * To add a new provider:
 * 1. Add the provider ID to TTSProviderId or ASRProviderId in types.ts
 * 2. Add provider configuration to TTS_PROVIDERS or ASR_PROVIDERS below
 * 3. Implement provider logic in tts-providers.ts or asr-providers.ts
 * 4. Add i18n translations in lib/i18n.ts
 *
 * Provider configuration should include:
 * - id: Unique identifier matching the type definition
 * - name: Display name for the provider
 * - requiresApiKey: Whether the provider needs an API key
 * - defaultBaseUrl: Default API endpoint (optional)
 * - icon: Path to provider icon (optional)
 * - voices: Array of available voices (TTS only)
 * - supportedFormats: Audio formats supported by the provider
 * - speedRange: Min/max/default speed settings (TTS only)
 * - supportedLanguages: Languages supported by the provider (ASR only)
 */ __turbopack_context__.s([
    "ASR_PROVIDERS",
    ()=>ASR_PROVIDERS,
    "DEFAULT_TTS_VOICES",
    ()=>DEFAULT_TTS_VOICES,
    "TTS_PROVIDERS",
    ()=>TTS_PROVIDERS,
    "getASRProvider",
    ()=>getASRProvider,
    "getASRSupportedLanguages",
    ()=>getASRSupportedLanguages,
    "getAllASRProviders",
    ()=>getAllASRProviders,
    "getAllTTSProviders",
    ()=>getAllTTSProviders,
    "getTTSProvider",
    ()=>getTTSProvider,
    "getTTSVoices",
    ()=>getTTSVoices
]);
const TTS_PROVIDERS = {
    'openai-tts': {
        id: 'openai-tts',
        name: 'OpenAI TTS',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api.openai.com/v1',
        icon: '/logos/openai.svg',
        voices: [
            // Recommended voices (best quality)
            {
                id: 'marin',
                name: 'Marin',
                language: 'en',
                gender: 'neutral',
                description: 'voiceMarin'
            },
            {
                id: 'cedar',
                name: 'Cedar',
                language: 'en',
                gender: 'neutral',
                description: 'voiceCedar'
            },
            // Standard voices (alphabetical)
            {
                id: 'alloy',
                name: 'Alloy',
                language: 'en',
                gender: 'neutral',
                description: 'voiceAlloy'
            },
            {
                id: 'ash',
                name: 'Ash',
                language: 'en',
                gender: 'neutral',
                description: 'voiceAsh'
            },
            {
                id: 'ballad',
                name: 'Ballad',
                language: 'en',
                gender: 'neutral',
                description: 'voiceBallad'
            },
            {
                id: 'coral',
                name: 'Coral',
                language: 'en',
                gender: 'neutral',
                description: 'voiceCoral'
            },
            {
                id: 'echo',
                name: 'Echo',
                language: 'en',
                gender: 'male',
                description: 'voiceEcho'
            },
            {
                id: 'fable',
                name: 'Fable',
                language: 'en',
                gender: 'neutral',
                description: 'voiceFable'
            },
            {
                id: 'nova',
                name: 'Nova',
                language: 'en',
                gender: 'female',
                description: 'voiceNova'
            },
            {
                id: 'onyx',
                name: 'Onyx',
                language: 'en',
                gender: 'male',
                description: 'voiceOnyx'
            },
            {
                id: 'sage',
                name: 'Sage',
                language: 'en',
                gender: 'neutral',
                description: 'voiceSage'
            },
            {
                id: 'shimmer',
                name: 'Shimmer',
                language: 'en',
                gender: 'female',
                description: 'voiceShimmer'
            },
            {
                id: 'verse',
                name: 'Verse',
                language: 'en',
                gender: 'neutral',
                description: 'voiceVerse'
            }
        ],
        supportedFormats: [
            'mp3',
            'opus',
            'aac',
            'flac'
        ],
        speedRange: {
            min: 0.25,
            max: 4.0,
            default: 1.0
        }
    },
    'azure-tts': {
        id: 'azure-tts',
        name: 'Azure TTS',
        requiresApiKey: true,
        defaultBaseUrl: 'https://{region}.tts.speech.microsoft.com',
        icon: '/logos/azure.svg',
        voices: [
            {
                id: 'zh-CN-XiaoxiaoNeural',
                name: '晓晓 (女)',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh-CN-YunxiNeural',
                name: '云希 (男)',
                language: 'zh-CN',
                gender: 'male'
            },
            {
                id: 'zh-CN-XiaoyiNeural',
                name: '晓伊 (女)',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh-CN-YunjianNeural',
                name: '云健 (男)',
                language: 'zh-CN',
                gender: 'male'
            },
            {
                id: 'en-US-JennyNeural',
                name: 'Jenny',
                language: 'en-US',
                gender: 'female'
            },
            {
                id: 'en-US-GuyNeural',
                name: 'Guy',
                language: 'en-US',
                gender: 'male'
            }
        ],
        supportedFormats: [
            'mp3',
            'wav',
            'ogg'
        ],
        speedRange: {
            min: 0.5,
            max: 2.0,
            default: 1.0
        }
    },
    'glm-tts': {
        id: 'glm-tts',
        name: 'GLM TTS',
        requiresApiKey: true,
        defaultBaseUrl: 'https://open.bigmodel.cn/api/paas/v4',
        icon: '/logos/glm.svg',
        voices: [
            {
                id: 'tongtong',
                name: '彤彤',
                language: 'zh',
                gender: 'neutral',
                description: 'glmVoiceTongtong'
            },
            {
                id: 'chuichui',
                name: '锤锤',
                language: 'zh',
                gender: 'neutral',
                description: 'glmVoiceChuichui'
            },
            {
                id: 'xiaochen',
                name: '小陈',
                language: 'zh',
                gender: 'neutral',
                description: 'glmVoiceXiaochen'
            },
            {
                id: 'jam',
                name: 'Jam',
                language: 'zh',
                gender: 'neutral',
                description: 'glmVoiceJam'
            },
            {
                id: 'kazi',
                name: 'Kazi',
                language: 'zh',
                gender: 'neutral',
                description: 'glmVoiceKazi'
            },
            {
                id: 'douji',
                name: '豆几',
                language: 'zh',
                gender: 'neutral',
                description: 'glmVoiceDouji'
            },
            {
                id: 'luodo',
                name: '罗多',
                language: 'zh',
                gender: 'neutral',
                description: 'glmVoiceLuodo'
            }
        ],
        supportedFormats: [
            'wav'
        ],
        speedRange: {
            min: 0.5,
            max: 2.0,
            default: 1.0
        }
    },
    'qwen-tts': {
        id: 'qwen-tts',
        name: 'Qwen TTS (阿里云百炼)',
        requiresApiKey: true,
        defaultBaseUrl: 'https://dashscope.aliyuncs.com/api/v1',
        icon: '/logos/bailian.svg',
        voices: [
            // Standard Mandarin voices
            {
                id: 'Cherry',
                name: '芊悦 (Cherry)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceCherry'
            },
            {
                id: 'Serena',
                name: '苏瑶 (Serena)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceSerena'
            },
            {
                id: 'Ethan',
                name: '晨煦 (Ethan)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceEthan'
            },
            {
                id: 'Chelsie',
                name: '千雪 (Chelsie)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceChelsie'
            },
            {
                id: 'Momo',
                name: '茉兔 (Momo)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceMomo'
            },
            {
                id: 'Vivian',
                name: '十三 (Vivian)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceVivian'
            },
            {
                id: 'Moon',
                name: '月白 (Moon)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceMoon'
            },
            {
                id: 'Maia',
                name: '四月 (Maia)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceMaia'
            },
            {
                id: 'Kai',
                name: '凯 (Kai)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceKai'
            },
            {
                id: 'Nofish',
                name: '不吃鱼 (Nofish)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceNofish'
            },
            {
                id: 'Bella',
                name: '萌宝 (Bella)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceBella'
            },
            {
                id: 'Jennifer',
                name: '詹妮弗 (Jennifer)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceJennifer'
            },
            {
                id: 'Ryan',
                name: '甜茶 (Ryan)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceRyan'
            },
            {
                id: 'Katerina',
                name: '卡捷琳娜 (Katerina)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceKaterina'
            },
            {
                id: 'Aiden',
                name: '艾登 (Aiden)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceAiden'
            },
            {
                id: 'Eldric Sage',
                name: '沧明子 (Eldric Sage)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceEldricSage'
            },
            {
                id: 'Mia',
                name: '乖小妹 (Mia)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceMia'
            },
            {
                id: 'Mochi',
                name: '沙小弥 (Mochi)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceMochi'
            },
            {
                id: 'Bellona',
                name: '燕铮莺 (Bellona)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceBellona'
            },
            {
                id: 'Vincent',
                name: '田叔 (Vincent)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceVincent'
            },
            {
                id: 'Bunny',
                name: '萌小姬 (Bunny)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceBunny'
            },
            {
                id: 'Neil',
                name: '阿闻 (Neil)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceNeil'
            },
            {
                id: 'Elias',
                name: '墨讲师 (Elias)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceElias'
            },
            {
                id: 'Arthur',
                name: '徐大爷 (Arthur)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceArthur'
            },
            {
                id: 'Nini',
                name: '邻家妹妹 (Nini)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceNini'
            },
            {
                id: 'Ebona',
                name: '诡婆婆 (Ebona)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceEbona'
            },
            {
                id: 'Seren',
                name: '小婉 (Seren)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceSeren'
            },
            {
                id: 'Pip',
                name: '顽屁小孩 (Pip)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoicePip'
            },
            {
                id: 'Stella',
                name: '少女阿月 (Stella)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceStella'
            },
            // International voices
            {
                id: 'Bodega',
                name: '博德加 (Bodega)',
                language: 'es',
                gender: 'male',
                description: 'qwenVoiceBodega'
            },
            {
                id: 'Sonrisa',
                name: '索尼莎 (Sonrisa)',
                language: 'es',
                gender: 'female',
                description: 'qwenVoiceSonrisa'
            },
            {
                id: 'Alek',
                name: '阿列克 (Alek)',
                language: 'ru',
                gender: 'male',
                description: 'qwenVoiceAlek'
            },
            {
                id: 'Dolce',
                name: '多尔切 (Dolce)',
                language: 'it',
                gender: 'male',
                description: 'qwenVoiceDolce'
            },
            {
                id: 'Sohee',
                name: '素熙 (Sohee)',
                language: 'ko',
                gender: 'female',
                description: 'qwenVoiceSohee'
            },
            {
                id: 'Ono Anna',
                name: '小野杏 (Ono Anna)',
                language: 'ja',
                gender: 'female',
                description: 'qwenVoiceOnoAnna'
            },
            {
                id: 'Lenn',
                name: '莱恩 (Lenn)',
                language: 'de',
                gender: 'male',
                description: 'qwenVoiceLenn'
            },
            {
                id: 'Emilien',
                name: '埃米尔安 (Emilien)',
                language: 'fr',
                gender: 'male',
                description: 'qwenVoiceEmilien'
            },
            {
                id: 'Andre',
                name: '安德雷 (Andre)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceAndre'
            },
            {
                id: 'Radio Gol',
                name: '拉迪奥·戈尔 (Radio Gol)',
                language: 'pt',
                gender: 'male',
                description: 'qwenVoiceRadioGol'
            },
            // Dialect voices
            {
                id: 'Jada',
                name: '上海-阿珍 (Jada)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceJada'
            },
            {
                id: 'Dylan',
                name: '北京-晓东 (Dylan)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceDylan'
            },
            {
                id: 'Li',
                name: '南京-老李 (Li)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceLi'
            },
            {
                id: 'Marcus',
                name: '陕西-秦川 (Marcus)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceMarcus'
            },
            {
                id: 'Roy',
                name: '闽南-阿杰 (Roy)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceRoy'
            },
            {
                id: 'Peter',
                name: '天津-李彼得 (Peter)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoicePeter'
            },
            {
                id: 'Sunny',
                name: '四川-晴儿 (Sunny)',
                language: 'zh-CN',
                gender: 'female',
                description: 'qwenVoiceSunny'
            },
            {
                id: 'Eric',
                name: '四川-程川 (Eric)',
                language: 'zh-CN',
                gender: 'male',
                description: 'qwenVoiceEric'
            },
            {
                id: 'Rocky',
                name: '粤语-阿强 (Rocky)',
                language: 'zh-HK',
                gender: 'male',
                description: 'qwenVoiceRocky'
            },
            {
                id: 'Kiki',
                name: '粤语-阿清 (Kiki)',
                language: 'zh-HK',
                gender: 'female',
                description: 'qwenVoiceKiki'
            }
        ],
        supportedFormats: [
            'mp3',
            'wav',
            'pcm'
        ]
    },
    'doubao-tts': {
        id: 'doubao-tts',
        name: '豆包 TTS 2.0（火山引擎）',
        requiresApiKey: true,
        defaultBaseUrl: 'https://openspeech.bytedance.com/api/v3/tts',
        icon: '/logos/doubao.svg',
        voices: [
            {
                id: 'zh_female_vv_uranus_bigtts',
                name: 'Vivi 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh_female_xiaohe_uranus_bigtts',
                name: '小何 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh_male_m191_uranus_bigtts',
                name: '云舟 2.0',
                language: 'zh-CN',
                gender: 'male'
            },
            {
                id: 'zh_male_taocheng_uranus_bigtts',
                name: '小天 2.0',
                language: 'zh-CN',
                gender: 'male'
            },
            {
                id: 'zh_male_liufei_uranus_bigtts',
                name: '刘飞 2.0',
                language: 'zh-CN',
                gender: 'male'
            },
            {
                id: 'zh_female_qingxinnvsheng_uranus_bigtts',
                name: '清新女声 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh_female_cancan_uranus_bigtts',
                name: '知性灿灿 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh_female_shuangkuaisisi_uranus_bigtts',
                name: '爽快思思 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh_female_tianmeixiaoyuan_uranus_bigtts',
                name: '甜美小源 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh_female_linjianvhai_uranus_bigtts',
                name: '邻家女孩 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh_male_shaonianzixin_uranus_bigtts',
                name: '少年梓辛 2.0',
                language: 'zh-CN',
                gender: 'male'
            },
            {
                id: 'zh_male_ruyayichen_uranus_bigtts',
                name: '儒雅逸辰 2.0',
                language: 'zh-CN',
                gender: 'male'
            },
            {
                id: 'zh_female_yingyujiaoxue_uranus_bigtts',
                name: 'Tina老师 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'zh_female_kefunvsheng_uranus_bigtts',
                name: '暖阳女声 2.0',
                language: 'zh-CN',
                gender: 'female'
            },
            {
                id: 'en_male_tim_uranus_bigtts',
                name: 'Tim',
                language: 'en-US',
                gender: 'male'
            },
            {
                id: 'en_female_dacey_uranus_bigtts',
                name: 'Dacey',
                language: 'en-US',
                gender: 'female'
            },
            {
                id: 'en_female_stokie_uranus_bigtts',
                name: 'Stokie',
                language: 'en-US',
                gender: 'female'
            }
        ],
        supportedFormats: [
            'mp3'
        ],
        speedRange: {
            min: 0.5,
            max: 2.0,
            default: 1.0
        }
    },
    'elevenlabs-tts': {
        id: 'elevenlabs-tts',
        name: 'ElevenLabs TTS',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api.elevenlabs.io/v1',
        icon: '/logos/elevenlabs.svg',
        // Free-tier-safe fallback set; account-specific/custom voices should come from /v2/voices dynamically later.
        voices: [
            {
                id: 'EXAVITQu4vr4xnSDxMaL',
                name: 'Sarah',
                language: 'en-US',
                gender: 'female',
                description: 'Confident and warm professional voice for clear narration'
            },
            {
                id: 'Xb7hH8MSUJpSbSDYk0k2',
                name: 'Alice',
                language: 'en-GB',
                gender: 'female',
                description: 'Clear and engaging British educator voice for e-learning'
            },
            {
                id: 'XrExE9yKIg1WjnnlVkGX',
                name: 'Matilda',
                language: 'en-US',
                gender: 'female',
                description: 'Knowledgeable and upbeat voice suited for lectures'
            },
            {
                id: 'CwhRBWXzGAHq8TQ4Fs17',
                name: 'Roger',
                language: 'en-US',
                gender: 'male',
                description: 'Laid-back but resonant male voice for friendly lessons'
            },
            {
                id: 'cjVigY5qzO86Huf0OWal',
                name: 'Eric',
                language: 'en-US',
                gender: 'male',
                description: 'Smooth and trustworthy voice for polished classroom audio'
            },
            {
                id: 'onwK4e9ZLuTAKqWW03F9',
                name: 'Daniel',
                language: 'en-GB',
                gender: 'male',
                description: 'Steady British broadcaster voice for formal explanations'
            },
            {
                id: 'SAz9YHcvj6GT2YYXdXww',
                name: 'River',
                language: 'en-US',
                gender: 'neutral',
                description: 'Relaxed and informative neutral voice for general narration'
            }
        ],
        supportedFormats: [
            'mp3',
            'opus',
            'pcm',
            'wav',
            'ulaw',
            'alaw'
        ],
        speedRange: {
            min: 0.7,
            max: 1.2,
            default: 1.0
        }
    },
    'browser-native-tts': {
        id: 'browser-native-tts',
        name: '浏览器原生 (Web Speech API)',
        requiresApiKey: false,
        icon: '/logos/browser.svg',
        voices: [
            // Note: Actual voices are determined by the browser and OS
            // These are placeholder - real voices are fetched dynamically via speechSynthesis.getVoices()
            {
                id: 'default',
                name: '默认',
                language: 'zh-CN',
                gender: 'neutral'
            }
        ],
        supportedFormats: [
            'browser'
        ],
        speedRange: {
            min: 0.1,
            max: 10.0,
            default: 1.0
        }
    }
};
const ASR_PROVIDERS = {
    'openai-whisper': {
        id: 'openai-whisper',
        name: 'OpenAI Whisper',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api.openai.com/v1',
        icon: '/logos/openai.svg',
        supportedLanguages: [
            // OpenAI Whisper supports 58 languages (as of official docs)
            // Source: https://platform.openai.com/docs/guides/speech-to-text
            'auto',
            // Hot languages (commonly used)
            'zh',
            'en',
            'ja',
            'ko',
            'es',
            'fr',
            'de',
            'ru',
            'ar',
            'pt',
            'it',
            'hi',
            // Other languages (alphabetical)
            'af',
            'hy',
            'az',
            'be',
            'bs',
            'bg',
            'ca',
            'hr',
            'cs',
            'da',
            'nl',
            'et',
            'fi',
            'gl',
            'el',
            'he',
            'hu',
            'is',
            'id',
            'kn',
            'kk',
            'lv',
            'lt',
            'mk',
            'ms',
            'mr',
            'mi',
            'ne',
            'no',
            'fa',
            'pl',
            'ro',
            'sr',
            'sk',
            'sl',
            'sw',
            'sv',
            'tl',
            'ta',
            'th',
            'tr',
            'uk',
            'ur',
            'vi',
            'cy'
        ],
        supportedFormats: [
            'mp3',
            'mp4',
            'mpeg',
            'mpga',
            'm4a',
            'wav',
            'webm'
        ]
    },
    'qwen-asr': {
        id: 'qwen-asr',
        name: 'Qwen ASR (阿里云百炼)',
        requiresApiKey: true,
        defaultBaseUrl: 'https://dashscope.aliyuncs.com/api/v1',
        icon: '/logos/bailian.svg',
        supportedLanguages: [
            // Qwen ASR supports 27 languages + auto-detect
            // If language is uncertain or mixed (e.g. Chinese-English-Japanese-Korean), use "auto" (do not specify language parameter)
            'auto',
            // Hot languages (commonly used)
            'zh',
            'yue',
            'en',
            'ja',
            'ko',
            'de',
            'fr',
            'ru',
            'es',
            'pt',
            'ar',
            'it',
            'hi',
            // Other languages (alphabetical)
            'cs',
            'da',
            'fi',
            'fil',
            'id',
            'is',
            'ms',
            'no',
            'pl',
            'sv',
            'th',
            'tr',
            'uk',
            'vi'
        ],
        supportedFormats: [
            'mp3',
            'wav',
            'webm',
            'm4a',
            'flac'
        ]
    },
    'browser-native': {
        id: 'browser-native',
        name: '浏览器原生 ASR (Web Speech API)',
        requiresApiKey: false,
        icon: '/logos/browser.svg',
        supportedLanguages: [
            // Chinese variants
            'zh-CN',
            'zh-TW',
            'zh-HK',
            'yue-Hant-HK',
            // English variants
            'en-US',
            'en-GB',
            'en-AU',
            'en-CA',
            'en-IN',
            'en-NZ',
            'en-ZA',
            // Japanese & Korean
            'ja-JP',
            'ko-KR',
            // European languages
            'de-DE',
            'fr-FR',
            'es-ES',
            'es-MX',
            'es-AR',
            'es-CO',
            'it-IT',
            'pt-BR',
            'pt-PT',
            'ru-RU',
            'nl-NL',
            'pl-PL',
            'cs-CZ',
            'da-DK',
            'fi-FI',
            'sv-SE',
            'no-NO',
            'tr-TR',
            'el-GR',
            'hu-HU',
            'ro-RO',
            'sk-SK',
            'bg-BG',
            'hr-HR',
            'ca-ES',
            // Middle East & Asia
            'ar-SA',
            'ar-EG',
            'he-IL',
            'hi-IN',
            'th-TH',
            'vi-VN',
            'id-ID',
            'ms-MY',
            'fil-PH',
            // Other
            'af-ZA',
            'uk-UA'
        ],
        supportedFormats: [
            'webm'
        ]
    }
};
function getAllTTSProviders() {
    return Object.values(TTS_PROVIDERS);
}
function getTTSProvider(providerId) {
    return TTS_PROVIDERS[providerId];
}
const DEFAULT_TTS_VOICES = {
    'openai-tts': 'alloy',
    'azure-tts': 'zh-CN-XiaoxiaoNeural',
    'glm-tts': 'tongtong',
    'qwen-tts': 'Cherry',
    'doubao-tts': 'zh_female_vv_uranus_bigtts',
    'elevenlabs-tts': 'EXAVITQu4vr4xnSDxMaL',
    'browser-native-tts': 'default'
};
function getTTSVoices(providerId) {
    return TTS_PROVIDERS[providerId]?.voices || [];
}
function getAllASRProviders() {
    return Object.values(ASR_PROVIDERS);
}
function getASRProvider(providerId) {
    return ASR_PROVIDERS[providerId];
}
function getASRSupportedLanguages(providerId) {
    return ASR_PROVIDERS[providerId]?.supportedLanguages || [];
}
}),
"[project]/Documents/Projects/kinder-maic/lib/pdf/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PDF Provider Constants
 * Separated from pdf-providers.ts to avoid importing sharp in client components
 */ __turbopack_context__.s([
    "PDF_PROVIDERS",
    ()=>PDF_PROVIDERS,
    "getAllPDFProviders",
    ()=>getAllPDFProviders,
    "getPDFProvider",
    ()=>getPDFProvider
]);
const PDF_PROVIDERS = {
    unpdf: {
        id: 'unpdf',
        name: 'unpdf',
        requiresApiKey: false,
        icon: '/logos/unpdf.svg',
        features: [
            'text',
            'images',
            'metadata'
        ]
    },
    mineru: {
        id: 'mineru',
        name: 'MinerU',
        requiresApiKey: false,
        icon: '/logos/mineru.png',
        features: [
            'text',
            'images',
            'tables',
            'formulas',
            'layout-analysis'
        ]
    }
};
function getAllPDFProviders() {
    return Object.values(PDF_PROVIDERS);
}
function getPDFProvider(providerId) {
    return PDF_PROVIDERS[providerId];
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/adapters/seedream-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Seedream (ByteDance / Doubao / Ark) Image Generation Adapter
 *
 * Uses OpenAI-compatible synchronous API format.
 * Endpoint: https://ark.cn-beijing.volces.com/api/v3/images/generations
 *
 * Supported models:
 * - doubao-seedream-5-0-260128  (latest / Lite, text2img + img2img + multi-ref + group)
 * - doubao-seedream-4-5-251128
 * - doubao-seedream-4-0-250828
 * - doubao-seedream-3-0-t2i-250415
 *
 * API docs: https://www.volcengine.com/docs/6791/1399028
 */ __turbopack_context__.s([
    "generateWithSeedream",
    ()=>generateWithSeedream,
    "testSeedreamConnectivity",
    ()=>testSeedreamConnectivity
]);
const DEFAULT_MODEL = 'doubao-seedream-5-0-260128';
const DEFAULT_BASE_URL = 'https://ark.cn-beijing.volces.com';
/**
 * Map our aspect ratio + size to Seedream size format "WxH".
 * Seedream requires minimum 3,686,400 pixels total.
 * Common sizes: 2048x2048 (2K), 2560x1440 (16:9), 1920x1920.
 */ function resolveSeedreamSize(options) {
    if (options.width && options.height) {
        // Ensure minimum pixel count (3,686,400)
        const pixels = options.width * options.height;
        if (pixels < 3_686_400) {
            // Scale up proportionally
            const scale = Math.ceil(Math.sqrt(3_686_400 / pixels));
            return `${options.width * scale}x${options.height * scale}`;
        }
        return `${options.width}x${options.height}`;
    }
    // Default to 2K for quality
    return '2K';
}
async function testSeedreamConnectivity(config) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    try {
        // Send a request with empty prompt — auth failure (401/403) means bad key,
        // any other error (400) means key is valid but request is intentionally bad
        const response = await fetch(`${baseUrl}/api/v3/images/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model || DEFAULT_MODEL,
                prompt: '',
                size: '1x1'
            })
        });
        if (response.status === 401 || response.status === 403) {
            const text = await response.text();
            return {
                success: false,
                message: `Seedream auth failed (${response.status}): ${text}`
            };
        }
        return {
            success: true,
            message: 'Connected to Seedream'
        };
    } catch (err) {
        return {
            success: false,
            message: `Seedream connectivity error: ${err}`
        };
    }
}
async function generateWithSeedream(config, options) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const response = await fetch(`${baseUrl}/api/v3/images/generations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            model: config.model || DEFAULT_MODEL,
            prompt: options.prompt,
            size: resolveSeedreamSize(options),
            watermark: false
        })
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Seedream generation failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    // OpenAI-compatible response format: { data: [{ url, b64_json, ... }] }
    const imageData = data.data?.[0];
    if (!imageData) {
        throw new Error('Seedream returned empty response');
    }
    return {
        url: imageData.url,
        base64: imageData.b64_json,
        width: options.width || 1024,
        height: options.height || 1024
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/adapters/qwen-image-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Qwen Image (Alibaba Cloud / DashScope) Image Generation Adapter
 *
 * Uses DashScope multimodal generation API (synchronous, no polling needed).
 * Endpoint: https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
 *
 * Supported models:
 * - qwen-image-max     (highest quality)
 * - z-image-turbo      (fast, good quality)
 *
 * API docs: https://help.aliyun.com/zh/model-studio/developer-reference/text-to-image
 */ __turbopack_context__.s([
    "generateWithQwenImage",
    ()=>generateWithQwenImage,
    "testQwenImageConnectivity",
    ()=>testQwenImageConnectivity
]);
const DEFAULT_MODEL = 'qwen-image-max';
const DEFAULT_BASE_URL = 'https://dashscope.aliyuncs.com';
/**
 * Map our width x height to DashScope size format "WxH".
 * Common sizes: 1024*1024, 1280*720, 1664*928, 1120*1440, etc.
 */ function resolveDashScopeSize(options) {
    const w = options.width || 1024;
    const h = options.height || 576;
    return `${w}*${h}`;
}
async function testQwenImageConnectivity(config) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/api/v1/services/aigc/multimodal-generation/generation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model || DEFAULT_MODEL,
                input: {
                    messages: [
                        {
                            role: 'user',
                            content: [
                                {
                                    text: ''
                                }
                            ]
                        }
                    ]
                },
                parameters: {
                    size: '1*1'
                }
            })
        });
        if (response.status === 401 || response.status === 403) {
            const text = await response.text();
            return {
                success: false,
                message: `Qwen Image auth failed (${response.status}): ${text}`
            };
        }
        return {
            success: true,
            message: 'Connected to Qwen Image'
        };
    } catch (err) {
        return {
            success: false,
            message: `Qwen Image connectivity error: ${err}`
        };
    }
}
async function generateWithQwenImage(config, options) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const response = await fetch(`${baseUrl}/api/v1/services/aigc/multimodal-generation/generation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            model: config.model || DEFAULT_MODEL,
            input: {
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                text: options.prompt
                            }
                        ]
                    }
                ]
            },
            parameters: {
                negative_prompt: options.negativePrompt || undefined,
                prompt_extend: true,
                watermark: false,
                size: resolveDashScopeSize(options)
            }
        })
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Qwen Image generation failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    // DashScope multimodal generation response format:
    // { output: { choices: [{ message: { content: [{ image: "url" }] } }] } }
    const choices = data.output?.choices;
    if (!choices || choices.length === 0) {
        // Check for error in response
        if (data.code || data.message) {
            throw new Error(`Qwen Image error: ${data.code} - ${data.message}`);
        }
        throw new Error('Qwen Image returned empty response');
    }
    const content = choices[0]?.message?.content;
    const imageContent = content?.find((c)=>c.image);
    if (!imageContent?.image) {
        throw new Error('Qwen Image response missing image URL');
    }
    return {
        url: imageContent.image,
        width: options.width || 1024,
        height: options.height || 576
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/adapters/nano-banana-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Nano Banana / Gemini Native Image Generation Adapter
 *
 * Uses Google Gemini's native image generation capability.
 * Endpoint: https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent
 *
 * Supported models:
 * - gemini-3.1-flash-image-preview  (Nano Banana 2 — latest, fastest)
 * - gemini-3-pro-image-preview      (Nano Banana Pro — highest quality)
 * - gemini-2.5-flash-image          (Nano Banana — original)
 *
 * Authentication: x-goog-api-key header
 *
 * API docs: https://ai.google.dev/gemini-api/docs/image-generation
 */ __turbopack_context__.s([
    "generateWithNanoBanana",
    ()=>generateWithNanoBanana,
    "testNanoBananaConnectivity",
    ()=>testNanoBananaConnectivity
]);
const DEFAULT_MODEL = 'gemini-2.5-flash-image';
const DEFAULT_BASE_URL = 'https://generativelanguage.googleapis.com';
async function testNanoBananaConnectivity(config) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const model = config.model || DEFAULT_MODEL;
    const url = `${baseUrl}/v1beta/models`;
    // Try ?key= query param first (direct Google API), fall back to x-goog-api-key header (proxy)
    let response = null;
    try {
        response = await fetch(`${url}?key=${config.apiKey}`, {
            method: 'GET'
        });
    } catch  {
    // Direct API unreachable, try header auth
    }
    if (!response || !response.ok) {
        try {
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-goog-api-key': config.apiKey
                }
            });
        } catch (_err) {
            return {
                success: false,
                message: `Network error: unable to reach ${baseUrl}. Check your Base URL and network connection.`
            };
        }
    }
    if (response.ok) {
        return {
            success: true,
            message: `Connected to Nano Banana (${model})`
        };
    }
    // Parse error body for user-friendly message
    const text = await response.text().catch(()=>'');
    if (response.status === 400 || response.status === 401 || response.status === 403) {
        return {
            success: false,
            message: `Invalid API key or unauthorized (${response.status}). Check your API Key and Base URL match the same provider.`
        };
    }
    return {
        success: false,
        message: `Nano Banana connectivity failed (${response.status}): ${text}`
    };
}
async function generateWithNanoBanana(config, options) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const model = config.model || DEFAULT_MODEL;
    const response = await fetch(`${baseUrl}/v1beta/models/${model}:generateContent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': config.apiKey
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: options.prompt
                        }
                    ]
                }
            ],
            generationConfig: {
                responseModalities: [
                    'IMAGE'
                ]
            }
        })
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Gemini image generation failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    if (data.error) {
        throw new Error(`Gemini error: ${data.error.code} - ${data.error.message}`);
    }
    const parts = data.candidates?.[0]?.content?.parts;
    if (!parts || parts.length === 0) {
        throw new Error('Gemini returned empty response');
    }
    // Find the image part (inlineData with base64)
    const imagePart = parts.find((p)=>p.inlineData);
    if (!imagePart?.inlineData) {
        // Might have returned text only (e.g. if prompt was rejected)
        const textPart = parts.find((p)=>p.text);
        throw new Error(`Gemini did not return an image. Response text: ${textPart?.text || 'none'}`);
    }
    return {
        base64: imagePart.inlineData.data,
        width: options.width || 1024,
        height: options.height || 1024
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/adapters/grok-image-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Grok (xAI) Image Generation Adapter
 *
 * Uses OpenAI-compatible synchronous API format.
 * Endpoint: https://api.x.ai/v1/images/generations
 *
 * Supported models:
 * - grok-imagine-image      (standard, $0.02/image)
 * - grok-imagine-image-pro  (pro quality, $0.07/image)
 *
 * Authentication: Bearer token via Authorization header
 *
 * API docs: https://docs.x.ai/developers/rest-api-reference/inference/images
 */ __turbopack_context__.s([
    "generateWithGrokImage",
    ()=>generateWithGrokImage,
    "testGrokImageConnectivity",
    ()=>testGrokImageConnectivity
]);
const DEFAULT_MODEL = 'grok-imagine-image';
const DEFAULT_BASE_URL = 'https://api.x.ai/v1';
async function testGrokImageConnectivity(config) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/images/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model || DEFAULT_MODEL,
                prompt: '',
                n: 1
            })
        });
        if (response.status === 401 || response.status === 403) {
            const text = await response.text();
            return {
                success: false,
                message: `Grok Image auth failed (${response.status}): ${text}`
            };
        }
        return {
            success: true,
            message: 'Connected to Grok Image'
        };
    } catch (err) {
        return {
            success: false,
            message: `Grok Image connectivity error: ${err}`
        };
    }
}
async function generateWithGrokImage(config, options) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const response = await fetch(`${baseUrl}/images/generations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            model: config.model || DEFAULT_MODEL,
            prompt: options.prompt,
            n: 1,
            response_format: 'url'
        })
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Grok image generation failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    // OpenAI-compatible response format: { data: [{ url, revised_prompt }] }
    const imageData = data.data?.[0];
    if (!imageData) {
        throw new Error('Grok returned empty image response');
    }
    return {
        url: imageData.url,
        base64: imageData.b64_json,
        width: options.width || 1024,
        height: options.height || 1024
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/image-providers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Image Generation Service -- routes to provider adapters
 */ __turbopack_context__.s([
    "IMAGE_PROVIDERS",
    ()=>IMAGE_PROVIDERS,
    "aspectRatioToDimensions",
    ()=>aspectRatioToDimensions,
    "generateImage",
    ()=>generateImage,
    "testImageConnectivity",
    ()=>testImageConnectivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$seedream$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/adapters/seedream-adapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$qwen$2d$image$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/adapters/qwen-image-adapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$nano$2d$banana$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/adapters/nano-banana-adapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$grok$2d$image$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/adapters/grok-image-adapter.ts [app-ssr] (ecmascript)");
;
;
;
;
const IMAGE_PROVIDERS = {
    seedream: {
        id: 'seedream',
        name: 'Seedream',
        requiresApiKey: true,
        defaultBaseUrl: 'https://ark.cn-beijing.volces.com',
        models: [
            {
                id: 'doubao-seedream-5-0-260128',
                name: 'Seedream 5.0 Lite'
            },
            {
                id: 'doubao-seedream-4-5-251128',
                name: 'Seedream 4.5'
            },
            {
                id: 'doubao-seedream-4-0-250828',
                name: 'Seedream 4.0'
            },
            {
                id: 'doubao-seedream-3-0-t2i-250415',
                name: 'Seedream 3.0'
            }
        ],
        supportedAspectRatios: [
            '16:9',
            '4:3',
            '1:1',
            '9:16'
        ]
    },
    'qwen-image': {
        id: 'qwen-image',
        name: 'Qwen Image',
        requiresApiKey: true,
        defaultBaseUrl: 'https://dashscope.aliyuncs.com',
        models: [
            {
                id: 'qwen-image-max',
                name: 'Qwen Image Max'
            },
            {
                id: 'qwen-image-max-2025-12-30',
                name: 'Qwen Image Max (2025-12-30)'
            },
            {
                id: 'qwen-image-plus',
                name: 'Qwen Image Plus'
            },
            {
                id: 'qwen-image-plus-2026-01-09',
                name: 'Qwen Image Plus (2026-01-09)'
            },
            {
                id: 'qwen-image',
                name: 'Qwen Image'
            },
            {
                id: 'z-image-turbo',
                name: 'Z-Image Turbo'
            }
        ],
        supportedAspectRatios: [
            '16:9',
            '4:3',
            '1:1',
            '9:16'
        ]
    },
    'nano-banana': {
        id: 'nano-banana',
        name: 'Nano Banana (Gemini)',
        requiresApiKey: true,
        defaultBaseUrl: 'https://generativelanguage.googleapis.com',
        models: [
            {
                id: 'gemini-3.1-flash-image-preview',
                name: 'Gemini 3.1 Flash Image (Nano Banana 2)'
            },
            {
                id: 'gemini-3-pro-image-preview',
                name: 'Gemini 3 Pro Image (Nano Banana Pro)'
            },
            {
                id: 'gemini-2.5-flash-image',
                name: 'Gemini 2.5 Flash Image (Nano Banana)'
            }
        ],
        supportedAspectRatios: [
            '16:9',
            '4:3',
            '1:1'
        ]
    },
    'grok-image': {
        id: 'grok-image',
        name: 'Grok Image (xAI)',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api.x.ai/v1',
        models: [
            {
                id: 'grok-imagine-image',
                name: 'Grok Imagine Image'
            },
            {
                id: 'grok-imagine-image-pro',
                name: 'Grok Imagine Image Pro'
            }
        ],
        supportedAspectRatios: [
            '16:9',
            '4:3',
            '1:1',
            '9:16'
        ]
    }
};
async function testImageConnectivity(config) {
    switch(config.providerId){
        case 'seedream':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$seedream$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testSeedreamConnectivity"])(config);
        case 'qwen-image':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$qwen$2d$image$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testQwenImageConnectivity"])(config);
        case 'nano-banana':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$nano$2d$banana$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testNanoBananaConnectivity"])(config);
        case 'grok-image':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$grok$2d$image$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testGrokImageConnectivity"])(config);
        default:
            return {
                success: false,
                message: `Unsupported image provider: ${config.providerId}`
            };
    }
}
async function generateImage(config, options) {
    switch(config.providerId){
        case 'seedream':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$seedream$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWithSeedream"])(config, options);
        case 'qwen-image':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$qwen$2d$image$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWithQwenImage"])(config, options);
        case 'nano-banana':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$nano$2d$banana$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWithNanoBanana"])(config, options);
        case 'grok-image':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$grok$2d$image$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWithGrokImage"])(config, options);
        default:
            throw new Error(`Unsupported image provider: ${config.providerId}`);
    }
}
function aspectRatioToDimensions(ratio, maxWidth = 1024) {
    const [w, h] = ratio.split(':').map(Number);
    if (!w || !h) return {
        width: maxWidth,
        height: Math.round(maxWidth * 9 / 16)
    };
    return {
        width: maxWidth,
        height: Math.round(maxWidth * h / w)
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/adapters/seedance-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Seedance (ByteDance / Doubao / Ark) Video Generation Adapter
 *
 * Uses async task pattern: submit task → poll until succeeded → get video URL.
 * Endpoint: https://ark.cn-beijing.volces.com/api/v3/contents/generations/tasks
 *
 * Request format (text-to-video):
 *   POST /api/v3/contents/generations/tasks
 *   {
 *     "model": "doubao-seedance-1-5-pro-251215",
 *     "content": [{ "type": "text", "text": "prompt here" }],
 *     "ratio": "16:9",
 *     "duration": 5,
 *     "resolution": "1080p",
 *     "watermark": false
 *   }
 *
 * Supported models:
 * - doubao-seedance-1-5-pro-251215     (latest, 4~12s)
 * - doubao-seedance-1-0-pro-250528     (stable, 2~12s)
 * - doubao-seedance-1-0-pro-fast-251015 (faster, 2~12s)
 * - doubao-seedance-1-0-lite-t2v-250428 (lightweight, 2~12s)
 *
 * API docs: https://www.volcengine.com/docs/6492/2165104
 */ __turbopack_context__.s([
    "generateWithSeedance",
    ()=>generateWithSeedance,
    "pollSeedanceTask",
    ()=>pollSeedanceTask,
    "submitSeedanceTask",
    ()=>submitSeedanceTask,
    "testSeedanceConnectivity",
    ()=>testSeedanceConnectivity
]);
const DEFAULT_MODEL = 'doubao-seedance-1-5-pro-251215';
const DEFAULT_BASE_URL = 'https://ark.cn-beijing.volces.com';
const POLL_INTERVAL_MS = 5000;
const MAX_POLL_ATTEMPTS = 60; // 5 minutes max
/**
 * Map aspect ratio to Seedance ratio format.
 * Seedance uses the same "W:H" format we already have.
 */ function toSeedanceRatio(aspectRatio) {
    if (!aspectRatio) return undefined;
    return aspectRatio; // Already in "16:9" format
}
/**
 * Map resolution to Seedance format.
 * Seedance expects "480p", "720p", "1080p".
 */ function toSeedanceResolution(resolution) {
    if (!resolution) return undefined;
    return resolution; // Already in "720p" format
}
/**
 * Estimate video dimensions from ratio and resolution for the result.
 */ function estimateDimensions(ratio, resolution) {
    const resMap = {
        '480p': 480,
        '720p': 720,
        '1080p': 1080
    };
    const h = resMap[resolution || '720p'] || 720;
    if (!ratio) return {
        width: Math.round(h * 16 / 9),
        height: h
    };
    const [w, hRatio] = ratio.split(':').map(Number);
    if (!w || !hRatio) return {
        width: Math.round(h * 16 / 9),
        height: h
    };
    return {
        width: Math.round(h * w / hRatio),
        height: h
    };
}
async function testSeedanceConnectivity(config) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/api/v3/contents/generations/tasks/connectivity-test-nonexistent`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${config.apiKey}`
            }
        });
        // 401/403 means key invalid; anything else (404, 400, 200) means key works
        if (response.status === 401 || response.status === 403) {
            const text = await response.text();
            return {
                success: false,
                message: `Seedance auth failed (${response.status}): ${text}`
            };
        }
        return {
            success: true,
            message: 'Connected to Seedance'
        };
    } catch (err) {
        return {
            success: false,
            message: `Seedance connectivity error: ${err}`
        };
    }
}
async function submitSeedanceTask(config, options) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const body = {
        model: config.model || DEFAULT_MODEL,
        content: [
            {
                type: 'text',
                text: options.prompt
            }
        ],
        watermark: false
    };
    const ratio = toSeedanceRatio(options.aspectRatio);
    if (ratio) body.ratio = ratio;
    if (options.duration) body.duration = options.duration;
    const resolution = toSeedanceResolution(options.resolution);
    if (resolution) body.resolution = resolution;
    const response = await fetch(`${baseUrl}/api/v3/contents/generations/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.apiKey}`
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Seedance task submission failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    if (!data.id) {
        throw new Error('Seedance returned empty task ID');
    }
    return data.id;
}
async function pollSeedanceTask(config, taskId) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const response = await fetch(`${baseUrl}/api/v3/contents/generations/tasks/${taskId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${config.apiKey}`
        }
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Seedance poll failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    if (data.status === 'succeeded') {
        if (!data.content?.video_url) {
            throw new Error('Seedance task succeeded but no video URL returned');
        }
        const dims = estimateDimensions(data.ratio, data.resolution);
        return {
            url: data.content.video_url,
            duration: data.duration || 5,
            width: dims.width,
            height: dims.height
        };
    }
    if (data.status === 'failed') {
        throw new Error(`Seedance video generation failed: ${data.error?.message || 'Unknown error'}`);
    }
    // queued or running
    return null;
}
async function generateWithSeedance(config, options) {
    const taskId = await submitSeedanceTask(config, options);
    for(let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt++){
        await new Promise((resolve)=>setTimeout(resolve, POLL_INTERVAL_MS));
        const result = await pollSeedanceTask(config, taskId);
        if (result) return result;
    }
    throw new Error(`Seedance video generation timed out after ${MAX_POLL_ATTEMPTS * POLL_INTERVAL_MS / 1000}s (task: ${taskId})`);
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Documents/Projects/kinder-maic/lib/media/adapters/kling-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateWithKling",
    ()=>generateWithKling,
    "testKlingConnectivity",
    ()=>testKlingConnectivity
]);
/**
 * Kling (Kuaishou) Video Generation Adapter
 *
 * Async task pattern: submit → poll → return video URL.
 *
 * REST endpoints:
 * - Submit: POST /v1/videos/text2video
 * - Poll:   GET  /v1/videos/text2video/{task_id}
 *
 * Authentication: JWT Bearer token generated from Access Key + Secret Key.
 * The apiKey field should be formatted as "accessKey:secretKey".
 *
 * Supported models:
 * - kling-v2-6     (latest)
 * - kling-v1-6     (v1)
 *
 * API docs: https://docs.klingai.com/api
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const DEFAULT_MODEL = 'kling-v2-6';
const DEFAULT_BASE_URL = 'https://api-beijing.klingai.com';
const POLL_INTERVAL_MS = 5_000;
const MAX_POLL_ATTEMPTS = 120; // 10 minutes max
const JWT_EXPIRY_SECS = 1800; // 30 minutes
// ---------------------------------------------------------------------------
// JWT helper (HS256, no external deps)
// ---------------------------------------------------------------------------
function base64url(data) {
    const buf = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf-8');
    return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function generateJWT(accessKey, secretKey) {
    const now = Math.floor(Date.now() / 1000);
    const header = base64url(JSON.stringify({
        alg: 'HS256',
        typ: 'JWT'
    }));
    const payload = base64url(JSON.stringify({
        iss: accessKey,
        exp: now + JWT_EXPIRY_SECS,
        nbf: now - 5,
        iat: now
    }));
    const signature = base64url(__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', secretKey).update(`${header}.${payload}`).digest());
    return `${header}.${payload}.${signature}`;
}
function parseApiKey(apiKey) {
    const sep = apiKey.indexOf(':');
    if (sep <= 0) {
        throw new Error('Kling apiKey must be "accessKey:secretKey" format');
    }
    return {
        accessKey: apiKey.slice(0, sep),
        secretKey: apiKey.slice(sep + 1)
    };
}
// ---------------------------------------------------------------------------
// Dimension helpers
// ---------------------------------------------------------------------------
function getDimensions(aspectRatio) {
    switch(aspectRatio){
        case '9:16':
            return {
                width: 720,
                height: 1280
            };
        case '1:1':
            return {
                width: 1080,
                height: 1080
            };
        case '4:3':
            return {
                width: 1024,
                height: 768
            };
        default:
            return {
                width: 1280,
                height: 720
            }; // 16:9
    }
}
async function testKlingConnectivity(config) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    try {
        const { accessKey, secretKey } = parseApiKey(config.apiKey);
        const token = generateJWT(accessKey, secretKey);
        // Use a GET to a non-existent task to validate auth
        const response = await fetch(`${baseUrl}/v1/videos/text2video/connectivity-test`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 401 || response.status === 403) {
            const text = await response.text();
            return {
                success: false,
                message: `Kling auth failed (${response.status}): ${text}`
            };
        }
        return {
            success: true,
            message: 'Connected to Kling'
        };
    } catch (err) {
        return {
            success: false,
            message: `Kling connectivity error: ${err}`
        };
    }
}
// ---------------------------------------------------------------------------
// Submit
// ---------------------------------------------------------------------------
async function submitTask(baseUrl, token, model, options) {
    const body = {
        model_name: model,
        prompt: options.prompt,
        negative_prompt: '',
        mode: 'pro'
    };
    if (options.duration) body.duration = String(options.duration);
    if (options.aspectRatio) body.aspect_ratio = options.aspectRatio;
    const response = await fetch(`${baseUrl}/v1/videos/text2video`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Kling submit failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    if (data.code !== 0) {
        throw new Error(`Kling submit error ${data.code}: ${data.message}`);
    }
    if (!data.data?.task_id) {
        throw new Error('Kling returned empty task_id');
    }
    return data.data.task_id;
}
// ---------------------------------------------------------------------------
// Poll
// ---------------------------------------------------------------------------
async function pollTask(baseUrl, token, taskId) {
    const response = await fetch(`${baseUrl}/v1/videos/text2video/${taskId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Kling poll failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    if (data.code !== 0) {
        throw new Error(`Kling poll error ${data.code}: ${data.message}`);
    }
    return data.data;
}
async function generateWithKling(config, options) {
    const model = config.model || DEFAULT_MODEL;
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const { accessKey, secretKey } = parseApiKey(config.apiKey);
    const token = generateJWT(accessKey, secretKey);
    // 1. Submit
    const taskId = await submitTask(baseUrl, token, model, options);
    // 2. Poll until done
    for(let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt++){
        await new Promise((resolve)=>setTimeout(resolve, POLL_INTERVAL_MS));
        const result = await pollTask(baseUrl, token, taskId);
        if (result.task_status === 'succeed') {
            const video = result.task_result?.videos?.[0];
            if (!video?.url) {
                throw new Error('Kling task succeeded but no video URL returned');
            }
            const { width, height } = getDimensions(options.aspectRatio);
            return {
                url: video.url,
                duration: Number(video.duration) || options.duration || 5,
                width,
                height
            };
        }
        if (result.task_status === 'failed') {
            throw new Error(`Kling video generation failed: ${result.task_status_msg || 'Unknown error'}`);
        }
    }
    throw new Error(`Kling video generation timed out after ${MAX_POLL_ATTEMPTS * POLL_INTERVAL_MS / 1000}s (task: ${taskId})`);
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/adapters/veo-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Veo (Google) Video Generation Adapter
 *
 * Direct REST API calls for video generation with Google's Veo models.
 * Async task pattern: submit → poll → return inline base64 video.
 *
 * REST endpoints (Gemini API):
 * - Submit:   POST /v1beta/models/{model}:predictLongRunning
 * - Poll:     POST /v1beta/models/{model}:fetchPredictOperation  { operationName }
 *   Returns inline base64 video data in response.videos[]
 *
 * Supported models:
 * - veo-3.1-fast-generate-001  (fast, $0.15/sec)
 * - veo-3.1-generate-001       (quality, $0.40/sec)
 * - veo-3.0-fast-generate-001  (fast, $0.15/sec)
 * - veo-3.0-generate-001       (quality, $0.40/sec)
 * - veo-2.0-generate-001       (legacy, $0.50/sec)
 *
 * Authentication: x-goog-api-key header
 *
 * Stateless: video content is returned as a base64 data URL.
 * No files are saved on the server.
 */ __turbopack_context__.s([
    "generateWithVeo",
    ()=>generateWithVeo,
    "testVeoConnectivity",
    ()=>testVeoConnectivity
]);
const DEFAULT_MODEL = 'veo-3.0-generate-001';
const DEFAULT_BASE_URL = 'https://generativelanguage.googleapis.com';
const POLL_INTERVAL_MS = 10_000; // 10 seconds
const MAX_POLL_ATTEMPTS = 60; // 10 minutes max
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
/** Dimension defaults per aspect ratio */ function getDimensions(aspectRatio) {
    switch(aspectRatio){
        case '9:16':
            return {
                width: 720,
                height: 1280
            };
        case '1:1':
            return {
                width: 1080,
                height: 1080
            };
        case '4:3':
            return {
                width: 1024,
                height: 768
            };
        default:
            return {
                width: 1280,
                height: 720
            }; // 16:9
    }
}
/** Common headers for all Veo API calls */ function apiHeaders(apiKey) {
    return {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
    };
}
// ---------------------------------------------------------------------------
// Submit
// ---------------------------------------------------------------------------
async function submitVideoGeneration(baseUrl, apiKey, model, options) {
    const url = `${baseUrl}/v1beta/models/${model}:predictLongRunning`;
    const body = {
        instances: [
            {
                prompt: options.prompt
            }
        ]
    };
    // Parameters are optional — only include if we have values
    const parameters = {};
    if (options.aspectRatio) parameters.aspectRatio = options.aspectRatio;
    if (options.duration) parameters.durationSeconds = options.duration;
    if (Object.keys(parameters).length > 0) {
        body.parameters = parameters;
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: apiHeaders(apiKey),
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Veo submit failed (${response.status}): ${text}`);
    }
    return response.json();
}
// ---------------------------------------------------------------------------
// Poll
// ---------------------------------------------------------------------------
async function pollOperation(baseUrl, apiKey, model, operationName) {
    const url = `${baseUrl}/v1beta/models/${model}:fetchPredictOperation`;
    const response = await fetch(url, {
        method: 'POST',
        headers: apiHeaders(apiKey),
        body: JSON.stringify({
            operationName
        })
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Veo poll failed (${response.status}): ${text}`);
    }
    return response.json();
}
async function testVeoConnectivity(config) {
    const model = config.model || DEFAULT_MODEL;
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    const url = `${baseUrl}/v1beta/models`;
    // Try ?key= query param first (direct Google API), fall back to x-goog-api-key header (proxy)
    let response = null;
    try {
        response = await fetch(`${url}?key=${config.apiKey}`, {
            method: 'GET'
        });
    } catch  {
    // Direct API unreachable, try header auth
    }
    if (!response || !response.ok) {
        try {
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-goog-api-key': config.apiKey
                }
            });
        } catch (_err) {
            return {
                success: false,
                message: `Network error: unable to reach ${baseUrl}. Check your Base URL and network connection.`
            };
        }
    }
    if (response.ok) {
        return {
            success: true,
            message: `Connected to Veo (${model})`
        };
    }
    // Parse error body for user-friendly message
    const text = await response.text().catch(()=>'');
    if (response.status === 400 || response.status === 401 || response.status === 403) {
        return {
            success: false,
            message: `Invalid API key or unauthorized (${response.status}). Check your API Key and Base URL match the same provider.`
        };
    }
    return {
        success: false,
        message: `Veo connectivity failed (${response.status}): ${text}`
    };
}
async function generateWithVeo(config, options) {
    const model = config.model || DEFAULT_MODEL;
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    // 1. Submit
    const operation = await submitVideoGeneration(baseUrl, config.apiKey, model, options);
    if (!operation.name) {
        throw new Error('Veo returned operation without name');
    }
    // 2. Poll until done
    let current = operation;
    let pollCount = 0;
    while(!current.done){
        if (pollCount >= MAX_POLL_ATTEMPTS) {
            throw new Error('Veo video generation timed out after 10 minutes');
        }
        await delay(POLL_INTERVAL_MS);
        current = await pollOperation(baseUrl, config.apiKey, model, current.name);
        pollCount++;
    }
    // 3. Check for errors
    if (current.error) {
        throw new Error(`Veo generation failed: ${current.error.code} - ${current.error.message}`);
    }
    // 4. Extract inline base64 video from response.videos[]
    const videos = current.response?.videos;
    if (!videos || videos.length === 0) {
        throw new Error('Veo returned no generated videos');
    }
    const first = videos[0];
    if (!first.bytesBase64Encoded) {
        throw new Error('Veo returned video entry without data');
    }
    const base64 = first.bytesBase64Encoded;
    const mimeType = first.mimeType || 'video/mp4';
    const { width, height } = getDimensions(options.aspectRatio);
    return {
        url: `data:${mimeType};base64,${base64}`,
        duration: options.duration || 8,
        width,
        height
    };
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/adapters/grok-video-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Grok (xAI) Video Generation Adapter
 *
 * Async task pattern: submit → poll → return video URL.
 *
 * REST endpoints:
 * - Submit: POST /v1/videos/generations
 * - Poll:   GET  /v1/videos/{request_id}
 *
 * Supported models:
 * - grok-imagine-video  ($0.05/sec)
 *
 * Authentication: Bearer token via Authorization header
 *
 * API docs: https://docs.x.ai/developers/rest-api-reference/inference/videos
 */ __turbopack_context__.s([
    "generateWithGrokVideo",
    ()=>generateWithGrokVideo,
    "testGrokVideoConnectivity",
    ()=>testGrokVideoConnectivity
]);
const DEFAULT_MODEL = 'grok-imagine-video';
const DEFAULT_BASE_URL = 'https://api.x.ai/v1';
const POLL_INTERVAL_MS = 10_000; // 10 seconds
const MAX_POLL_ATTEMPTS = 60; // 10 minutes max
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
/** Dimension defaults per aspect ratio */ function getDimensions(aspectRatio) {
    switch(aspectRatio){
        case '9:16':
            return {
                width: 720,
                height: 1280
            };
        case '1:1':
            return {
                width: 1080,
                height: 1080
            };
        case '4:3':
            return {
                width: 1024,
                height: 768
            };
        default:
            return {
                width: 1280,
                height: 720
            }; // 16:9
    }
}
/** Common headers for all Grok Video API calls */ function apiHeaders(apiKey) {
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
    };
}
async function testGrokVideoConnectivity(config) {
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/videos/generations`, {
            method: 'POST',
            headers: apiHeaders(config.apiKey),
            body: JSON.stringify({
                model: config.model || DEFAULT_MODEL,
                prompt: ''
            })
        });
        if (response.status === 401 || response.status === 403) {
            const text = await response.text();
            return {
                success: false,
                message: `Grok Video auth failed (${response.status}): ${text}`
            };
        }
        return {
            success: true,
            message: 'Connected to Grok Video'
        };
    } catch (err) {
        return {
            success: false,
            message: `Grok Video connectivity error: ${err}`
        };
    }
}
// ---------------------------------------------------------------------------
// Submit
// ---------------------------------------------------------------------------
async function submitVideoGeneration(baseUrl, apiKey, model, options) {
    const body = {
        model,
        prompt: options.prompt
    };
    if (options.duration) body.duration = options.duration;
    const response = await fetch(`${baseUrl}/videos/generations`, {
        method: 'POST',
        headers: apiHeaders(apiKey),
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Grok video submit failed (${response.status}): ${text}`);
    }
    const data = await response.json();
    if (!data.request_id) {
        throw new Error('Grok video returned empty request_id');
    }
    return data.request_id;
}
// ---------------------------------------------------------------------------
// Poll
// ---------------------------------------------------------------------------
async function pollVideoStatus(baseUrl, apiKey, requestId) {
    const response = await fetch(`${baseUrl}/videos/${requestId}`, {
        method: 'GET',
        headers: apiHeaders(apiKey)
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Grok video poll failed (${response.status}): ${text}`);
    }
    return response.json();
}
async function generateWithGrokVideo(config, options) {
    const model = config.model || DEFAULT_MODEL;
    const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    // 1. Submit
    const requestId = await submitVideoGeneration(baseUrl, config.apiKey, model, options);
    // 2. Poll until done
    for(let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt++){
        await delay(POLL_INTERVAL_MS);
        const result = await pollVideoStatus(baseUrl, config.apiKey, requestId);
        if (result.status === 'done') {
            if (!result.video?.url) {
                throw new Error('Grok video task completed but no video URL returned');
            }
            const { width, height } = getDimensions(options.aspectRatio);
            return {
                url: result.video.url,
                duration: result.video.duration || options.duration || 6,
                width,
                height
            };
        }
        if (result.status === 'failed') {
            throw new Error(`Grok video generation failed: ${JSON.stringify(result)}`);
        }
    }
    throw new Error(`Grok video generation timed out after ${MAX_POLL_ATTEMPTS * POLL_INTERVAL_MS / 1000}s (request: ${requestId})`);
}
}),
"[project]/Documents/Projects/kinder-maic/lib/media/video-providers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Video Generation Service -- routes to provider adapters
 */ __turbopack_context__.s([
    "VIDEO_PROVIDERS",
    ()=>VIDEO_PROVIDERS,
    "generateVideo",
    ()=>generateVideo,
    "normalizeVideoOptions",
    ()=>normalizeVideoOptions,
    "testVideoConnectivity",
    ()=>testVideoConnectivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$seedance$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/adapters/seedance-adapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$kling$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/adapters/kling-adapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$veo$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/adapters/veo-adapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$grok$2d$video$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/adapters/grok-video-adapter.ts [app-ssr] (ecmascript)");
;
;
;
;
const VIDEO_PROVIDERS = {
    seedance: {
        id: 'seedance',
        name: 'Seedance',
        requiresApiKey: true,
        defaultBaseUrl: 'https://ark.cn-beijing.volces.com',
        models: [
            {
                id: 'doubao-seedance-1-5-pro-251215',
                name: 'Seedance 1.5 Pro'
            },
            {
                id: 'doubao-seedance-1-0-pro-250528',
                name: 'Seedance 1.0 Pro'
            },
            {
                id: 'doubao-seedance-1-0-pro-fast-251015',
                name: 'Seedance 1.0 Pro Fast'
            },
            {
                id: 'doubao-seedance-1-0-lite-t2v-250428',
                name: 'Seedance 1.0 Lite T2V'
            }
        ],
        supportedAspectRatios: [
            '16:9',
            '4:3',
            '1:1',
            '9:16',
            '3:4',
            '21:9'
        ],
        supportedDurations: [
            5,
            10
        ],
        supportedResolutions: [
            '480p',
            '720p',
            '1080p'
        ],
        maxDuration: 10
    },
    kling: {
        id: 'kling',
        name: 'Kling',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api-beijing.klingai.com',
        models: [
            {
                id: 'kling-v2-6',
                name: 'Kling V2.6'
            },
            {
                id: 'kling-v1-6',
                name: 'Kling V1.6'
            }
        ],
        supportedAspectRatios: [
            '16:9',
            '1:1',
            '9:16'
        ],
        supportedDurations: [
            5,
            10
        ],
        maxDuration: 10
    },
    veo: {
        id: 'veo',
        name: 'Veo',
        requiresApiKey: true,
        defaultBaseUrl: 'https://generativelanguage.googleapis.com',
        models: [
            {
                id: 'veo-3.1-fast-generate-001',
                name: 'Veo 3.1 Fast'
            },
            {
                id: 'veo-3.1-generate-001',
                name: 'Veo 3.1'
            },
            {
                id: 'veo-3.0-fast-generate-001',
                name: 'Veo 3.0 Fast'
            },
            {
                id: 'veo-3.0-generate-001',
                name: 'Veo 3.0'
            },
            {
                id: 'veo-2.0-generate-001',
                name: 'Veo 2.0'
            }
        ],
        supportedAspectRatios: [
            '16:9',
            '1:1',
            '9:16'
        ],
        supportedDurations: [
            8
        ],
        supportedResolutions: [
            '720p'
        ],
        maxDuration: 8
    },
    sora: {
        id: 'sora',
        name: 'Sora',
        requiresApiKey: true,
        models: [],
        supportedAspectRatios: [
            '16:9',
            '1:1',
            '9:16'
        ],
        maxDuration: 20
    },
    'grok-video': {
        id: 'grok-video',
        name: 'Grok Video (xAI)',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api.x.ai/v1',
        models: [
            {
                id: 'grok-imagine-video',
                name: 'Grok Imagine Video'
            }
        ],
        supportedAspectRatios: [
            '16:9',
            '1:1',
            '9:16'
        ],
        supportedDurations: [
            6
        ],
        maxDuration: 6
    }
};
async function testVideoConnectivity(config) {
    switch(config.providerId){
        case 'seedance':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$seedance$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testSeedanceConnectivity"])(config);
        case 'kling':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$kling$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testKlingConnectivity"])(config);
        case 'veo':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$veo$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testVeoConnectivity"])(config);
        case 'grok-video':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$grok$2d$video$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testGrokVideoConnectivity"])(config);
        default:
            return {
                success: false,
                message: `Unsupported video provider: ${config.providerId}`
            };
    }
}
function normalizeVideoOptions(providerId, options) {
    const provider = VIDEO_PROVIDERS[providerId];
    if (!provider) return options;
    const normalized = {
        ...options
    };
    // Duration: use first supported value if unset or unsupported
    if (provider.supportedDurations && provider.supportedDurations.length > 0) {
        if (!normalized.duration || !provider.supportedDurations.includes(normalized.duration)) {
            normalized.duration = provider.supportedDurations[0];
        }
    }
    // Aspect ratio: use first supported value if unset or unsupported
    if (provider.supportedAspectRatios && provider.supportedAspectRatios.length > 0) {
        if (!normalized.aspectRatio || !provider.supportedAspectRatios.includes(normalized.aspectRatio)) {
            normalized.aspectRatio = normalized.aspectRatio && provider.supportedAspectRatios.includes(normalized.aspectRatio) ? normalized.aspectRatio : provider.supportedAspectRatios[0];
        }
    }
    // Resolution: use first supported value if unset or unsupported
    if (provider.supportedResolutions && provider.supportedResolutions.length > 0) {
        if (!normalized.resolution || !provider.supportedResolutions.includes(normalized.resolution)) {
            normalized.resolution = provider.supportedResolutions[0];
        }
    }
    return normalized;
}
async function generateVideo(config, options) {
    switch(config.providerId){
        case 'seedance':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$seedance$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWithSeedance"])(config, options);
        case 'kling':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$kling$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWithKling"])(config, options);
        case 'veo':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$veo$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWithVeo"])(config, options);
        case 'grok-video':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$adapters$2f$grok$2d$video$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWithGrokVideo"])(config, options);
        default:
            throw new Error(`Unsupported video provider: ${config.providerId}`);
    }
}
}),
"[project]/Documents/Projects/kinder-maic/lib/web-search/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web Search Provider Constants
 */ __turbopack_context__.s([
    "WEB_SEARCH_PROVIDERS",
    ()=>WEB_SEARCH_PROVIDERS,
    "getAllWebSearchProviders",
    ()=>getAllWebSearchProviders
]);
const WEB_SEARCH_PROVIDERS = {
    tavily: {
        id: 'tavily',
        name: 'Tavily',
        requiresApiKey: true,
        defaultBaseUrl: 'https://api.tavily.com'
    }
};
function getAllWebSearchProviders() {
    return Object.values(WEB_SEARCH_PROVIDERS);
}
}),
"[project]/Documents/Projects/kinder-maic/lib/store/settings-validation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Provider selection validation utilities.
 *
 * Pure functions used by fetchServerProviders() to detect and fix
 * stale provider/model selections after server config changes.
 */ __turbopack_context__.s([
    "isProviderUsable",
    ()=>isProviderUsable,
    "validateModel",
    ()=>validateModel,
    "validateProvider",
    ()=>validateProvider
]);
function isProviderUsable(cfg) {
    if (!cfg) return false;
    return !!cfg.isServerConfigured || !!cfg.apiKey;
}
function validateProvider(currentId, configMap, fallbackOrder, defaultId) {
    if (!currentId) return currentId;
    if (isProviderUsable(configMap[currentId])) return currentId;
    for (const id of fallbackOrder){
        if (isProviderUsable(configMap[id])) return id;
    }
    return defaultId ?? '';
}
function validateModel(currentModelId, availableModels) {
    if (!currentModelId) return currentModelId;
    if (availableModels.some((m)=>m.id === currentModelId)) return currentModelId;
    return availableModels[0]?.id ?? '';
}
}),
"[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAYBACK_SPEEDS",
    ()=>PLAYBACK_SPEEDS,
    "useSettingsStore",
    ()=>useSettingsStore
]);
/**
 * Settings Store
 * Global settings state synchronized with localStorage
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.14_immer@11.1.4_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/ai/providers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/audio/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$pdf$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/pdf/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/image-providers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/video-providers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$web$2d$search$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/web-search/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings-validation.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('Settings');
const PLAYBACK_SPEEDS = [
    1,
    1.25,
    1.5,
    2
];
// Initialize default providers config
const getDefaultProvidersConfig = ()=>{
    const config = {};
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROVIDERS"]).forEach((pid)=>{
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROVIDERS"][pid];
        config[pid] = {
            apiKey: '',
            baseUrl: '',
            models: provider.models,
            name: provider.name,
            type: provider.type,
            defaultBaseUrl: provider.defaultBaseUrl,
            icon: provider.icon,
            requiresApiKey: provider.requiresApiKey,
            isBuiltIn: true
        };
    });
    return config;
};
// Initialize default audio config
const getDefaultAudioConfig = ()=>({
        ttsProviderId: 'browser-native-tts',
        ttsVoice: 'default',
        ttsSpeed: 1.0,
        asrProviderId: 'browser-native',
        asrLanguage: 'zh',
        ttsProvidersConfig: {
            'openai-tts': {
                apiKey: '',
                baseUrl: '',
                enabled: true
            },
            'azure-tts': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'glm-tts': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'qwen-tts': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'doubao-tts': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'elevenlabs-tts': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'browser-native-tts': {
                apiKey: '',
                baseUrl: '',
                enabled: true
            }
        },
        asrProvidersConfig: {
            'openai-whisper': {
                apiKey: '',
                baseUrl: '',
                enabled: true
            },
            'browser-native': {
                apiKey: '',
                baseUrl: '',
                enabled: true
            },
            'qwen-asr': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            }
        }
    });
// Initialize default PDF config
const getDefaultPDFConfig = ()=>({
        pdfProviderId: 'unpdf',
        pdfProvidersConfig: {
            unpdf: {
                apiKey: '',
                baseUrl: '',
                enabled: true
            },
            mineru: {
                apiKey: '',
                baseUrl: '',
                enabled: false
            }
        }
    });
// Initialize default Image config
const getDefaultImageConfig = ()=>({
        imageProviderId: 'seedream',
        imageModelId: 'doubao-seedream-5-0-260128',
        imageProvidersConfig: {
            seedream: {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'qwen-image': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'nano-banana': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'grok-image': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            }
        }
    });
// Initialize default Video config
const getDefaultVideoConfig = ()=>({
        videoProviderId: 'seedance',
        videoModelId: 'doubao-seedance-1-5-pro-251215',
        videoProvidersConfig: {
            seedance: {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            kling: {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            veo: {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            sora: {
                apiKey: '',
                baseUrl: '',
                enabled: false
            },
            'grok-video': {
                apiKey: '',
                baseUrl: '',
                enabled: false
            }
        }
    });
// Initialize default Web Search config
const getDefaultWebSearchConfig = ()=>({
        webSearchProviderId: 'tavily',
        webSearchProvidersConfig: {
            tavily: {
                apiKey: '',
                baseUrl: '',
                enabled: true
            }
        }
    });
/**
 * Check whether a provider ID exists in the given provider registry.
 */ function hasProviderId(providerMap, providerId) {
    return typeof providerId === 'string' && providerId in providerMap;
}
/**
 * Validate all persisted provider IDs against their registries.
 * Reset any stale / removed ID back to its default value.
 * Called during both migrate and merge to cover all rehydration paths.
 */ function ensureValidProviderSelections(state) {
    const defaultAudioConfig = getDefaultAudioConfig();
    const defaultPdfConfig = getDefaultPDFConfig();
    const defaultImageConfig = getDefaultImageConfig();
    const defaultVideoConfig = getDefaultVideoConfig();
    const defaultWebSearchConfig = getDefaultWebSearchConfig();
    if (!hasProviderId(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$pdf$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDF_PROVIDERS"], state.pdfProviderId)) {
        state.pdfProviderId = defaultPdfConfig.pdfProviderId;
    }
    if (!hasProviderId(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$web$2d$search$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_SEARCH_PROVIDERS"], state.webSearchProviderId)) {
        state.webSearchProviderId = defaultWebSearchConfig.webSearchProviderId;
    }
    if (!hasProviderId(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_PROVIDERS"], state.imageProviderId)) {
        state.imageProviderId = defaultImageConfig.imageProviderId;
    }
    if (!hasProviderId(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIDEO_PROVIDERS"], state.videoProviderId)) {
        state.videoProviderId = defaultVideoConfig.videoProviderId;
    }
    if (!hasProviderId(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"], state.ttsProviderId)) {
        state.ttsProviderId = defaultAudioConfig.ttsProviderId;
    }
    if (!hasProviderId(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ASR_PROVIDERS"], state.asrProviderId)) {
        state.asrProviderId = defaultAudioConfig.asrProviderId;
    }
}
/**
 * Ensure providersConfig includes all built-in providers and their latest models.
 * Called on every rehydrate (not just version migrations) so new providers
 * added in code are always picked up without clearing cache.
 */ function ensureBuiltInProviders(state) {
    if (!state.providersConfig) return;
    const defaultConfig = getDefaultProvidersConfig();
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROVIDERS"]).forEach((pid)=>{
        const providerId = pid;
        if (!state.providersConfig[providerId]) {
            // New provider: add with defaults
            state.providersConfig[providerId] = defaultConfig[providerId];
        } else {
            // Existing provider: merge new models & metadata
            const provider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROVIDERS"][providerId];
            const existing = state.providersConfig[providerId];
            const existingModelIds = new Set(existing.models?.map((m)=>m.id) || []);
            const newModels = provider.models.filter((m)=>!existingModelIds.has(m.id));
            const mergedModels = newModels.length > 0 ? [
                ...newModels,
                ...existing.models || []
            ] : existing.models;
            state.providersConfig[providerId] = {
                ...existing,
                models: mergedModels,
                name: existing.name || provider.name,
                type: existing.type || provider.type,
                defaultBaseUrl: existing.defaultBaseUrl || provider.defaultBaseUrl,
                icon: provider.icon || existing.icon,
                requiresApiKey: existing.requiresApiKey ?? provider.requiresApiKey,
                isBuiltIn: existing.isBuiltIn ?? true
            };
        }
    });
}
/**
 * Ensure imageProvidersConfig includes all built-in image providers.
 * Called on every rehydrate so newly added image providers appear automatically.
 */ function ensureBuiltInImageProviders(state) {
    if (!state.imageProvidersConfig) return;
    const defaultConfig = getDefaultImageConfig().imageProvidersConfig;
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_PROVIDERS"]).forEach((pid)=>{
        const providerId = pid;
        if (!state.imageProvidersConfig[providerId]) {
            state.imageProvidersConfig[providerId] = defaultConfig[providerId];
        }
    });
}
/**
 * Ensure videoProvidersConfig includes all built-in video providers.
 * Called on every rehydrate so newly added video providers appear automatically.
 */ function ensureBuiltInVideoProviders(state) {
    if (!state.videoProvidersConfig) return;
    const defaultConfig = getDefaultVideoConfig().videoProvidersConfig;
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIDEO_PROVIDERS"]).forEach((pid)=>{
        const providerId = pid;
        if (!state.videoProvidersConfig[providerId]) {
            state.videoProvidersConfig[providerId] = defaultConfig[providerId];
        }
    });
}
// Migrate from old localStorage format
const migrateFromOldStorage = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    // Check if new storage already exists
    const newStorage = undefined;
    // Read old localStorage keys
    const oldLlmModel = undefined;
    const oldProvidersConfig = undefined;
    const oldTtsModel = undefined;
    const oldSelectedAgents = undefined;
    const oldMaxTurns = undefined;
    // Parse model selection
    let providerId;
    let modelId;
    // Parse providers config
    let providersConfig;
    // Parse other settings
    let ttsModel;
    let selectedAgentIds;
    let maxTurns;
};
const useSettingsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$14_immer$40$11$2e$1$2e$4_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>{
    // Try to migrate from old storage
    const migratedData = migrateFromOldStorage();
    const defaultAudioConfig = getDefaultAudioConfig();
    const defaultPDFConfig = getDefaultPDFConfig();
    const defaultImageConfig = getDefaultImageConfig();
    const defaultVideoConfig = getDefaultVideoConfig();
    const defaultWebSearchConfig = getDefaultWebSearchConfig();
    return {
        // Initial state (use migrated data if available)
        providerId: migratedData?.providerId || 'openai',
        modelId: migratedData?.modelId || '',
        providersConfig: migratedData?.providersConfig || getDefaultProvidersConfig(),
        ttsModel: migratedData?.ttsModel || 'openai-tts',
        selectedAgentIds: migratedData?.selectedAgentIds || [
            'default-1',
            'default-2',
            'default-3'
        ],
        maxTurns: migratedData?.maxTurns?.toString() || '10',
        agentMode: 'auto',
        autoAgentCount: 3,
        // Playback controls
        ttsMuted: false,
        ttsVolume: 1,
        autoPlayLecture: false,
        playbackSpeed: 1,
        // Layout preferences
        sidebarCollapsed: true,
        chatAreaCollapsed: true,
        chatAreaWidth: 320,
        // Audio settings (use defaults)
        ...defaultAudioConfig,
        // PDF settings (use defaults)
        ...defaultPDFConfig,
        // Image settings (use defaults)
        ...defaultImageConfig,
        // Video settings (use defaults)
        ...defaultVideoConfig,
        // Media generation toggles (off by default)
        imageGenerationEnabled: false,
        videoGenerationEnabled: false,
        // Audio feature toggles (on by default)
        ttsEnabled: true,
        asrEnabled: true,
        autoConfigApplied: false,
        // Web Search settings (use defaults)
        ...defaultWebSearchConfig,
        // Actions
        setModel: (providerId, modelId)=>set({
                providerId,
                modelId
            }),
        setProviderConfig: (providerId, config)=>set((state)=>({
                    providersConfig: {
                        ...state.providersConfig,
                        [providerId]: {
                            ...state.providersConfig[providerId],
                            ...config
                        }
                    }
                })),
        setProvidersConfig: (config)=>set({
                providersConfig: config
            }),
        setTtsModel: (model)=>set({
                ttsModel: model
            }),
        setTTSMuted: (muted)=>set({
                ttsMuted: muted
            }),
        setTTSVolume: (volume)=>set({
                ttsVolume: Math.max(0, Math.min(1, volume))
            }),
        setAutoPlayLecture: (autoPlay)=>set({
                autoPlayLecture: autoPlay
            }),
        setPlaybackSpeed: (speed)=>set({
                playbackSpeed: speed
            }),
        setSelectedAgentIds: (ids)=>set({
                selectedAgentIds: ids
            }),
        setMaxTurns: (turns)=>set({
                maxTurns: turns
            }),
        setAgentMode: (mode)=>set({
                agentMode: mode
            }),
        setAutoAgentCount: (count)=>set({
                autoAgentCount: count
            }),
        // Layout actions
        setSidebarCollapsed: (collapsed)=>set({
                sidebarCollapsed: collapsed
            }),
        setChatAreaCollapsed: (collapsed)=>set({
                chatAreaCollapsed: collapsed
            }),
        setChatAreaWidth: (width)=>set({
                chatAreaWidth: width
            }),
        // Audio actions
        setTTSProvider: (providerId)=>set((state)=>{
                // If switching provider, set default voice for that provider
                const shouldUpdateVoice = state.ttsProviderId !== providerId;
                return {
                    ttsProviderId: providerId,
                    ...shouldUpdateVoice && {
                        ttsVoice: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TTS_VOICES"][providerId]
                    }
                };
            }),
        setTTSVoice: (voice)=>set({
                ttsVoice: voice
            }),
        setTTSSpeed: (speed)=>set({
                ttsSpeed: speed
            }),
        // Reset language when switching providers, since language code formats differ
        // (e.g. browser-native uses BCP-47 "en-US", OpenAI Whisper uses ISO 639-1 "en")
        setASRProvider: (providerId)=>set((state)=>{
                const supportedLanguages = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ASR_PROVIDERS"][providerId]?.supportedLanguages || [];
                const isLanguageValid = supportedLanguages.includes(state.asrLanguage);
                return {
                    asrProviderId: providerId,
                    ...isLanguageValid ? {} : {
                        asrLanguage: supportedLanguages[0] || 'auto'
                    }
                };
            }),
        setASRLanguage: (language)=>set({
                asrLanguage: language
            }),
        setTTSProviderConfig: (providerId, config)=>set((state)=>({
                    ttsProvidersConfig: {
                        ...state.ttsProvidersConfig,
                        [providerId]: {
                            ...state.ttsProvidersConfig[providerId],
                            ...config
                        }
                    }
                })),
        setASRProviderConfig: (providerId, config)=>set((state)=>({
                    asrProvidersConfig: {
                        ...state.asrProvidersConfig,
                        [providerId]: {
                            ...state.asrProvidersConfig[providerId],
                            ...config
                        }
                    }
                })),
        // PDF actions
        setPDFProvider: (providerId)=>set({
                pdfProviderId: providerId
            }),
        setPDFProviderConfig: (providerId, config)=>set((state)=>({
                    pdfProvidersConfig: {
                        ...state.pdfProvidersConfig,
                        [providerId]: {
                            ...state.pdfProvidersConfig[providerId],
                            ...config
                        }
                    }
                })),
        // Image Generation actions
        setImageProvider: (providerId)=>set({
                imageProviderId: providerId
            }),
        setImageModelId: (modelId)=>set({
                imageModelId: modelId
            }),
        setImageProviderConfig: (providerId, config)=>set((state)=>({
                    imageProvidersConfig: {
                        ...state.imageProvidersConfig,
                        [providerId]: {
                            ...state.imageProvidersConfig[providerId],
                            ...config
                        }
                    }
                })),
        // Video Generation actions
        setVideoProvider: (providerId)=>set({
                videoProviderId: providerId
            }),
        setVideoModelId: (modelId)=>set({
                videoModelId: modelId
            }),
        setVideoProviderConfig: (providerId, config)=>set((state)=>({
                    videoProvidersConfig: {
                        ...state.videoProvidersConfig,
                        [providerId]: {
                            ...state.videoProvidersConfig[providerId],
                            ...config
                        }
                    }
                })),
        // Media generation toggle actions
        setImageGenerationEnabled: (enabled)=>{
            if (enabled) {
                const cfg = get().imageProvidersConfig;
                const hasUsable = Object.values(cfg).some((c)=>c.isServerConfigured || c.apiKey);
                if (!hasUsable) return;
            }
            set({
                imageGenerationEnabled: enabled
            });
        },
        setVideoGenerationEnabled: (enabled)=>{
            if (enabled) {
                const cfg = get().videoProvidersConfig;
                const hasUsable = Object.values(cfg).some((c)=>c.isServerConfigured || c.apiKey);
                if (!hasUsable) return;
            }
            set({
                videoGenerationEnabled: enabled
            });
        },
        setTTSEnabled: (enabled)=>set({
                ttsEnabled: enabled
            }),
        setASREnabled: (enabled)=>set({
                asrEnabled: enabled
            }),
        // Web Search actions
        setWebSearchProvider: (providerId)=>set({
                webSearchProviderId: providerId
            }),
        setWebSearchProviderConfig: (providerId, config)=>set((state)=>({
                    webSearchProvidersConfig: {
                        ...state.webSearchProvidersConfig,
                        [providerId]: {
                            ...state.webSearchProvidersConfig[providerId],
                            ...config
                        }
                    }
                })),
        // Fetch server-configured providers and merge into local state
        fetchServerProviders: async ()=>{
            try {
                const res = await fetch('/api/server-providers');
                if (!res.ok) return;
                const data = await res.json();
                set((state)=>{
                    // Merge LLM providers
                    const newProvidersConfig = {
                        ...state.providersConfig
                    };
                    // First reset all server flags
                    for (const pid of Object.keys(newProvidersConfig)){
                        const key = pid;
                        if (newProvidersConfig[key]) {
                            newProvidersConfig[key] = {
                                ...newProvidersConfig[key],
                                isServerConfigured: false,
                                serverModels: undefined,
                                serverBaseUrl: undefined
                            };
                        }
                    }
                    // Set flags for server-configured providers
                    for (const [pid, info] of Object.entries(data.providers)){
                        const key = pid;
                        if (newProvidersConfig[key]) {
                            const currentModels = newProvidersConfig[key].models;
                            // When server specifies allowed models, filter the models list
                            const filteredModels = info.models?.length ? currentModels.filter((m)=>info.models.includes(m.id)) : currentModels;
                            newProvidersConfig[key] = {
                                ...newProvidersConfig[key],
                                isServerConfigured: true,
                                serverModels: info.models,
                                serverBaseUrl: info.baseUrl,
                                models: filteredModels
                            };
                        }
                    }
                    // Merge TTS providers
                    const newTTSConfig = {
                        ...state.ttsProvidersConfig
                    };
                    for (const pid of Object.keys(newTTSConfig)){
                        const key = pid;
                        if (newTTSConfig[key]) {
                            newTTSConfig[key] = {
                                ...newTTSConfig[key],
                                isServerConfigured: false,
                                serverBaseUrl: undefined
                            };
                        }
                    }
                    for (const [pid, info] of Object.entries(data.tts)){
                        const key = pid;
                        if (newTTSConfig[key]) {
                            newTTSConfig[key] = {
                                ...newTTSConfig[key],
                                isServerConfigured: true,
                                serverBaseUrl: info.baseUrl
                            };
                        }
                    }
                    // Merge ASR providers
                    const newASRConfig = {
                        ...state.asrProvidersConfig
                    };
                    for (const pid of Object.keys(newASRConfig)){
                        const key = pid;
                        if (newASRConfig[key]) {
                            newASRConfig[key] = {
                                ...newASRConfig[key],
                                isServerConfigured: false,
                                serverBaseUrl: undefined
                            };
                        }
                    }
                    for (const [pid, info] of Object.entries(data.asr)){
                        const key = pid;
                        if (newASRConfig[key]) {
                            newASRConfig[key] = {
                                ...newASRConfig[key],
                                isServerConfigured: true,
                                serverBaseUrl: info.baseUrl
                            };
                        }
                    }
                    // Merge PDF providers
                    const newPDFConfig = {
                        ...state.pdfProvidersConfig
                    };
                    for (const pid of Object.keys(newPDFConfig)){
                        const key = pid;
                        if (newPDFConfig[key]) {
                            newPDFConfig[key] = {
                                ...newPDFConfig[key],
                                isServerConfigured: false,
                                serverBaseUrl: undefined
                            };
                        }
                    }
                    for (const [pid, info] of Object.entries(data.pdf)){
                        const key = pid;
                        if (newPDFConfig[key]) {
                            newPDFConfig[key] = {
                                ...newPDFConfig[key],
                                isServerConfigured: true,
                                serverBaseUrl: info.baseUrl
                            };
                        }
                    }
                    // Merge Image providers
                    const newImageConfig = {
                        ...state.imageProvidersConfig
                    };
                    for (const pid of Object.keys(newImageConfig)){
                        const key = pid;
                        if (newImageConfig[key]) {
                            newImageConfig[key] = {
                                ...newImageConfig[key],
                                isServerConfigured: false,
                                serverBaseUrl: undefined
                            };
                        }
                    }
                    for (const [pid, info] of Object.entries(data.image)){
                        const key = pid;
                        if (newImageConfig[key]) {
                            newImageConfig[key] = {
                                ...newImageConfig[key],
                                isServerConfigured: true,
                                serverBaseUrl: info.baseUrl
                            };
                        }
                    }
                    // Merge Video providers
                    const newVideoConfig = {
                        ...state.videoProvidersConfig
                    };
                    for (const pid of Object.keys(newVideoConfig)){
                        const key = pid;
                        if (newVideoConfig[key]) {
                            newVideoConfig[key] = {
                                ...newVideoConfig[key],
                                isServerConfigured: false,
                                serverBaseUrl: undefined
                            };
                        }
                    }
                    if (data.video) {
                        for (const [pid, info] of Object.entries(data.video)){
                            const key = pid;
                            if (newVideoConfig[key]) {
                                newVideoConfig[key] = {
                                    ...newVideoConfig[key],
                                    isServerConfigured: true,
                                    serverBaseUrl: info.baseUrl
                                };
                            }
                        }
                    }
                    // Merge Web Search config — reset all first, then mark server-configured
                    const newWebSearchConfig = {
                        ...state.webSearchProvidersConfig
                    };
                    for (const key of Object.keys(newWebSearchConfig)){
                        newWebSearchConfig[key] = {
                            ...newWebSearchConfig[key],
                            isServerConfigured: false,
                            serverBaseUrl: undefined
                        };
                    }
                    if (data.webSearch) {
                        for (const [pid, info] of Object.entries(data.webSearch)){
                            const key = pid;
                            if (newWebSearchConfig[key]) {
                                newWebSearchConfig[key] = {
                                    ...newWebSearchConfig[key],
                                    isServerConfigured: true,
                                    serverBaseUrl: info.baseUrl
                                };
                            }
                        }
                    }
                    // === Validate current selections against updated configs ===
                    // Build fallback: server-configured first, then client-key-only
                    const buildFallback = (config)=>[
                            ...Object.entries(config).filter(([, c])=>c.isServerConfigured).map(([id])=>id),
                            ...Object.entries(config).filter(([, c])=>!c.isServerConfigured && !!c.apiKey).map(([id])=>id)
                        ];
                    const llmFallback = buildFallback(newProvidersConfig);
                    const ttsFallback = buildFallback(newTTSConfig);
                    const asrFallback = buildFallback(newASRConfig);
                    const pdfFallback = buildFallback(newPDFConfig);
                    const imageFallback = buildFallback(newImageConfig);
                    const videoFallback = buildFallback(newVideoConfig);
                    const validLLMProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateProvider"])(state.providerId, newProvidersConfig, llmFallback);
                    const validTTSProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateProvider"])(state.ttsProviderId, newTTSConfig, ttsFallback, 'browser-native-tts');
                    const validASRProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateProvider"])(state.asrProviderId, newASRConfig, asrFallback, 'browser-native');
                    const validPDFProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateProvider"])(state.pdfProviderId, newPDFConfig, pdfFallback, 'unpdf');
                    let validImageProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateProvider"])(state.imageProviderId, newImageConfig, imageFallback);
                    let validVideoProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateProvider"])(state.videoProviderId, newVideoConfig, videoFallback);
                    // Auto-recover: when provider is empty but server has available ones
                    let recoveredImageModel = '';
                    if (!validImageProvider && imageFallback.length > 0) {
                        validImageProvider = imageFallback[0];
                        const models = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_PROVIDERS"][validImageProvider]?.models;
                        if (models?.length) recoveredImageModel = models[0].id;
                    }
                    let recoveredVideoModel = '';
                    if (!validVideoProvider && videoFallback.length > 0) {
                        validVideoProvider = videoFallback[0];
                        const models = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIDEO_PROVIDERS"][validVideoProvider]?.models;
                        if (models?.length) recoveredVideoModel = models[0].id;
                    }
                    const validLLMModel = validLLMProvider ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateModel"])(state.modelId, newProvidersConfig[validLLMProvider]?.models ?? []) : '';
                    const imageModels = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_PROVIDERS"][validImageProvider]?.models ?? [];
                    const validImageModel = validImageProvider ? recoveredImageModel || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateModel"])(state.imageModelId, imageModels) || // validateModel('', ...) returns '' — fallback to first model when modelId is empty
                    imageModels[0]?.id || '' : '';
                    const videoModels = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIDEO_PROVIDERS"][validVideoProvider]?.models ?? [];
                    const validVideoModel = validVideoProvider ? recoveredVideoModel || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateModel"])(state.videoModelId, videoModels) || videoModels[0]?.id || '' : '';
                    const validTTSVoice = validTTSProvider !== state.ttsProviderId ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TTS_VOICES"][validTTSProvider] || 'default' : state.ttsVoice;
                    // Auto-disable image/video generation when no provider is usable
                    const shouldDisableImage = !validImageProvider && state.imageGenerationEnabled;
                    const shouldDisableVideo = !validVideoProvider && state.videoGenerationEnabled;
                    // === Auto-select / auto-enable (only on first run) ===
                    let autoTtsProvider;
                    let autoTtsVoice;
                    let autoAsrProvider;
                    let autoPdfProvider;
                    let autoImageProvider;
                    let autoImageModel;
                    let autoVideoProvider;
                    let autoVideoModel;
                    let autoImageEnabled;
                    let autoVideoEnabled;
                    if (!state.autoConfigApplied) {
                        // PDF: unpdf → mineru if server has it
                        if (newPDFConfig.mineru?.isServerConfigured && state.pdfProviderId === 'unpdf') {
                            autoPdfProvider = 'mineru';
                        }
                        // TTS: select first server provider if current is not server-configured
                        const serverTtsIds = Object.keys(data.tts);
                        if (serverTtsIds.length > 0 && !newTTSConfig[state.ttsProviderId]?.isServerConfigured) {
                            autoTtsProvider = serverTtsIds[0];
                            autoTtsVoice = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TTS_VOICES"][autoTtsProvider] || 'default';
                        }
                        // ASR: select first server provider if current is not server-configured
                        const serverAsrIds = Object.keys(data.asr);
                        if (serverAsrIds.length > 0 && !newASRConfig[state.asrProviderId]?.isServerConfigured) {
                            autoAsrProvider = serverAsrIds[0];
                        }
                        // Image: first server provider
                        const serverImageIds = Object.keys(data.image);
                        if (serverImageIds.length > 0 && !newImageConfig[state.imageProviderId]?.isServerConfigured) {
                            autoImageProvider = serverImageIds[0];
                            const models = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_PROVIDERS"][autoImageProvider]?.models;
                            if (models?.length) autoImageModel = models[0].id;
                        }
                        if (serverImageIds.length > 0 && !state.imageGenerationEnabled) {
                            autoImageEnabled = true;
                        }
                        // Video: first server provider
                        const serverVideoIds = Object.keys(data.video || {});
                        if (serverVideoIds.length > 0 && !newVideoConfig[state.videoProviderId]?.isServerConfigured) {
                            autoVideoProvider = serverVideoIds[0];
                            const models = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIDEO_PROVIDERS"][autoVideoProvider]?.models;
                            if (models?.length) autoVideoModel = models[0].id;
                        }
                        if (serverVideoIds.length > 0 && !state.videoGenerationEnabled) {
                            autoVideoEnabled = true;
                        }
                    }
                    // LLM auto-select: fire when no usable provider is currently active
                    // (covers first visit where providerId defaults to 'openai' with no key)
                    const PREFERRED_MODEL = 'gemini-2.5-flash';
                    const currentProviderIsUsable = newProvidersConfig[state.providerId]?.isServerConfigured || !!newProvidersConfig[state.providerId]?.apiKey;
                    let autoProviderId;
                    let autoModelId;
                    if (!currentProviderIsUsable || !state.modelId) {
                        // First preference: google (Gemini) if server-configured
                        const googleCfg = newProvidersConfig['google'];
                        if (googleCfg?.isServerConfigured) {
                            autoProviderId = 'google';
                            // Pick preferred model if available, otherwise first model
                            const available = googleCfg.models.map((m)=>m.id);
                            autoModelId = available.includes(PREFERRED_MODEL) ? PREFERRED_MODEL : googleCfg.serverModels?.[0] ?? googleCfg.models[0]?.id;
                        } else {
                            // Fall back to first server-configured provider
                            for (const [pid, cfg] of Object.entries(newProvidersConfig)){
                                if (cfg.isServerConfigured) {
                                    const serverModels = cfg.serverModels;
                                    const modelId = serverModels?.length ? serverModels[0] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROVIDERS"][pid]?.models[0]?.id;
                                    if (modelId) {
                                        autoProviderId = pid;
                                        autoModelId = modelId;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    return {
                        providersConfig: newProvidersConfig,
                        ttsProvidersConfig: newTTSConfig,
                        asrProvidersConfig: newASRConfig,
                        pdfProvidersConfig: newPDFConfig,
                        imageProvidersConfig: newImageConfig,
                        videoProvidersConfig: newVideoConfig,
                        webSearchProvidersConfig: newWebSearchConfig,
                        autoConfigApplied: true,
                        // Validated selections
                        ...validLLMProvider !== state.providerId && {
                            providerId: validLLMProvider
                        },
                        ...validLLMModel !== state.modelId && {
                            modelId: validLLMModel
                        },
                        ...validTTSProvider !== state.ttsProviderId && {
                            ttsProviderId: validTTSProvider,
                            ttsVoice: validTTSVoice
                        },
                        ...validASRProvider !== state.asrProviderId && {
                            asrProviderId: validASRProvider
                        },
                        ...validPDFProvider !== state.pdfProviderId && {
                            pdfProviderId: validPDFProvider
                        },
                        ...validImageProvider !== state.imageProviderId && {
                            imageProviderId: validImageProvider
                        },
                        ...validImageModel !== state.imageModelId && {
                            imageModelId: validImageModel
                        },
                        ...validVideoProvider !== state.videoProviderId && {
                            videoProviderId: validVideoProvider
                        },
                        ...validVideoModel !== state.videoModelId && {
                            videoModelId: validVideoModel
                        },
                        ...shouldDisableImage && {
                            imageGenerationEnabled: false
                        },
                        ...shouldDisableVideo && {
                            videoGenerationEnabled: false
                        },
                        // First-run auto-select overrides validation (autoConfigApplied guard).
                        // On first sync, auto-select picks the best provider. On subsequent syncs,
                        // auto* variables stay undefined so only validation spreads take effect.
                        ...autoPdfProvider && {
                            pdfProviderId: autoPdfProvider
                        },
                        ...autoTtsProvider && {
                            ttsProviderId: autoTtsProvider,
                            ttsVoice: autoTtsVoice
                        },
                        ...autoAsrProvider && {
                            asrProviderId: autoAsrProvider
                        },
                        ...autoImageProvider && {
                            imageProviderId: autoImageProvider
                        },
                        ...autoImageModel && {
                            imageModelId: autoImageModel
                        },
                        ...autoVideoProvider && {
                            videoProviderId: autoVideoProvider
                        },
                        ...autoVideoModel && {
                            videoModelId: autoVideoModel
                        },
                        ...autoImageEnabled !== undefined && {
                            imageGenerationEnabled: autoImageEnabled
                        },
                        ...autoVideoEnabled !== undefined && {
                            videoGenerationEnabled: autoVideoEnabled
                        },
                        ...autoProviderId && {
                            providerId: autoProviderId
                        },
                        ...autoModelId && {
                            modelId: autoModelId
                        }
                    };
                });
            } catch (e) {
                // Silently fail — server providers are optional
                log.warn('Failed to fetch server providers:', e);
            }
        }
    };
}, {
    name: 'settings-storage',
    version: 2,
    // Migrate persisted state
    migrate: (persistedState, version)=>{
        const state = persistedState;
        // v0 → v1: clear hardcoded default model so user must actively select
        if (version === 0) {
            if (state.providerId === 'openai' && state.modelId === 'gpt-4o-mini') {
                state.modelId = '';
            }
        }
        // Ensure providersConfig has all built-in providers (also in merge below)
        ensureBuiltInProviders(state);
        // Ensure image/video configs have all built-in providers
        ensureBuiltInImageProviders(state);
        ensureBuiltInVideoProviders(state);
        // Migrate from old ttsModel to new ttsProviderId
        if (state.ttsModel && !state.ttsProviderId) {
            // Map old ttsModel values to new ttsProviderId
            if (state.ttsModel === 'openai-tts') {
                state.ttsProviderId = 'openai-tts';
            } else if (state.ttsModel === 'azure-tts') {
                state.ttsProviderId = 'azure-tts';
            } else {
                // Default to OpenAI
                state.ttsProviderId = 'openai-tts';
            }
        }
        // Add default audio config if missing
        if (!state.ttsProvidersConfig || !state.asrProvidersConfig) {
            const defaultAudioConfig = getDefaultAudioConfig();
            Object.assign(state, defaultAudioConfig);
        }
        // Add default PDF config if missing
        if (!state.pdfProvidersConfig) {
            const defaultPDFConfig = getDefaultPDFConfig();
            Object.assign(state, defaultPDFConfig);
        }
        // Add default Image config if missing
        if (!state.imageProvidersConfig) {
            const defaultImageConfig = getDefaultImageConfig();
            Object.assign(state, defaultImageConfig);
        }
        // Add default Video config if missing
        if (!state.videoProvidersConfig) {
            const defaultVideoConfig = getDefaultVideoConfig();
            Object.assign(state, defaultVideoConfig);
        }
        // v1 → v2: Replace deep research with web search
        if (version < 2) {
            delete state.deepResearchProviderId;
            delete state.deepResearchProvidersConfig;
        }
        // Add default media generation toggles if missing
        if (state.imageGenerationEnabled === undefined) {
            state.imageGenerationEnabled = false;
        }
        if (state.videoGenerationEnabled === undefined) {
            state.videoGenerationEnabled = false;
        }
        // Add default audio toggles if missing
        if (state.ttsEnabled === undefined) {
            state.ttsEnabled = true;
        }
        if (state.asrEnabled === undefined) {
            state.asrEnabled = true;
        }
        // Existing users already have their config set up — mark auto-config as done
        if (state.autoConfigApplied === undefined) {
            state.autoConfigApplied = true;
        }
        if (state.agentMode === undefined) {
            state.agentMode = 'preset';
        }
        if (state.autoAgentCount === undefined) {
            state.autoAgentCount = 3;
        }
        // Migrate Web Search: old flat fields → new provider-based config
        if (!state.webSearchProvidersConfig) {
            const stateRecord = state;
            const oldApiKey = stateRecord.webSearchApiKey || '';
            const oldIsServerConfigured = stateRecord.webSearchIsServerConfigured || false;
            state.webSearchProviderId = 'tavily';
            state.webSearchProvidersConfig = {
                tavily: {
                    apiKey: oldApiKey,
                    baseUrl: '',
                    enabled: true,
                    isServerConfigured: oldIsServerConfigured
                }
            };
            delete stateRecord.webSearchApiKey;
            delete stateRecord.webSearchIsServerConfigured;
        }
        ensureValidProviderSelections(state);
        return state;
    },
    // Custom merge: always sync built-in providers on every rehydrate,
    // so newly added providers/models appear without clearing cache.
    merge: (persistedState, currentState)=>{
        const merged = {
            ...currentState,
            ...persistedState
        };
        ensureBuiltInProviders(merged);
        ensureBuiltInImageProviders(merged);
        ensureBuiltInVideoProviders(merged);
        ensureValidProviderSelections(merged);
        return merged;
    }
}));
}),
"[project]/Documents/Projects/kinder-maic/components/server-providers-init.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServerProvidersInit",
    ()=>ServerProvidersInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
'use client';
;
;
function ServerProvidersInit() {
    const fetchServerProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.fetchServerProviders);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Reset the guard so fetchServerProviders always re-evaluates auto-select
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].setState({
            autoConfigApplied: false
        });
        fetchServerProviders();
    }, [
        fetchServerProviders
    ]);
    return null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4338dc9b._.js.map