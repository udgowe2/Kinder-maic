module.exports = [
"[project]/Documents/Projects/kinder-maic/components/settings/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatContextWindow",
    ()=>formatContextWindow,
    "getProviderTypeLabel",
    ()=>getProviderTypeLabel
]);
function formatContextWindow(size) {
    if (!size) return '-';
    // For M: prefer decimal (use decimal for exact thousands)
    if (size >= 1000000) {
        if (size % 1000000 === 0) {
            return `${size / 1000000}M`;
        }
        return `${(size / 1000000).toFixed(1)}M`;
    }
    // For K: prefer decimal if divisible by 1000, otherwise use binary
    if (size >= 1000) {
        if (size % 1000 === 0) {
            return `${size / 1000}K`;
        }
        return `${Math.floor(size / 1024)}K`;
    }
    return size.toString();
}
function getProviderTypeLabel(type, t) {
    const translationKey = `settings.providerTypes.${type}`;
    const translated = t(translationKey);
    // If translation exists (not equal to key), use it; otherwise fallback to type
    return translated !== translationKey ? translated : type;
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProviderList",
    ()=>ProviderList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ProviderList({ providers, selectedProviderId, onSelect, onAddProvider, width }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    // Helper function to get translated provider name
    const getProviderDisplayName = (provider)=>{
        const translationKey = `settings.providerNames.${provider.id}`;
        const translated = t(translationKey);
        // If translation exists (not equal to key), use it; otherwise fallback to provider.name
        return translated !== translationKey ? translated : provider.name;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 bg-background flex flex-col",
        style: {
            width: width ?? 192
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3 space-y-1.5",
                children: providers.map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelect(provider.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all border text-left', selectedProviderId === provider.id ? 'bg-primary/5 border-primary/50 shadow-sm' : 'border-transparent hover:bg-muted/50'),
                        children: [
                            provider.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: provider.icon,
                                alt: getProviderDisplayName(provider),
                                className: "w-5 h-5 rounded",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "h-5 w-5 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-sm flex-1 truncate",
                                children: getProviderDisplayName(provider)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            provider.isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] px-1 py-0 h-4 leading-4 rounded shrink-0 bg-muted text-muted-foreground",
                                children: t('settings.serverConfigured')
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, provider.id, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: "w-full gap-1.5",
                    onClick: onAddProvider,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        t('settings.addProviderButton')
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProviderConfigPanel",
    ()=>ProviderConfigPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-ssr] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
'use client';
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
;
function ProviderConfigPanel({ provider, initialApiKey, initialBaseUrl, initialRequiresApiKey, providersConfig, onConfigChange, onSave, onEditModel, onDeleteModel, onAddModel, onResetToDefault, isBuiltIn }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    // Local state for this provider
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialApiKey);
    const [baseUrl, setBaseUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialBaseUrl);
    const [requiresApiKey, setRequiresApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialRequiresApiKey);
    const [showApiKey, setShowApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showResetDialog, setShowResetDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update local state when provider changes or initial values change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Sync local state from props on provider change
        setApiKey(initialApiKey);
        setBaseUrl(initialBaseUrl);
        setRequiresApiKey(initialRequiresApiKey);
        setTestStatus('idle');
        setTestMessage('');
    }, [
        provider.id,
        initialApiKey,
        initialBaseUrl,
        initialRequiresApiKey
    ]);
    // Notify parent of changes
    const handleApiKeyChange = (key)=>{
        setApiKey(key);
        onConfigChange(key, baseUrl, requiresApiKey);
    };
    const handleBaseUrlChange = (url)=>{
        setBaseUrl(url);
        onConfigChange(apiKey, url, requiresApiKey);
    };
    const handleRequiresApiKeyChange = (requires)=>{
        setRequiresApiKey(requires);
        onConfigChange(apiKey, baseUrl, requires);
    };
    const handleTestApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setTestStatus('testing');
        setTestMessage('');
        const availableModels = providersConfig[provider.id]?.models || [];
        if (availableModels.length === 0) {
            setTestStatus('error');
            setTestMessage(t('settings.noModelsAvailable') || 'No models available for testing');
            return;
        }
        const testModelId = availableModels[0].id;
        try {
            const response = await fetch('/api/verify-model', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    apiKey,
                    baseUrl,
                    model: `${provider.id}:${testModelId}`,
                    providerType: provider.type,
                    requiresApiKey: requiresApiKey
                })
            });
            const data = await response.json();
            if (data.success) {
                setTestStatus('success');
                setTestMessage(t('settings.connectionSuccess'));
            } else {
                setTestStatus('error');
                setTestMessage(data.error || t('settings.connectionFailed'));
            }
        } catch (_error) {
            setTestStatus('error');
            setTestMessage(t('settings.connectionFailed'));
        }
    }, [
        apiKey,
        baseUrl,
        provider.id,
        provider.type,
        requiresApiKey,
        providersConfig,
        t
    ]);
    const models = providersConfig[provider.id]?.models || [];
    const isServerConfigured = providersConfig[provider.id]?.isServerConfigured;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-3xl",
        children: [
            isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-3 text-sm text-blue-700 dark:text-blue-300",
                children: t('settings.serverConfiguredNotice')
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('settings.apiSecret')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        name: `llm-api-key-${provider.id}`,
                                        type: showApiKey ? 'text' : 'password',
                                        autoComplete: "new-password",
                                        autoCapitalize: "none",
                                        autoCorrect: "off",
                                        spellCheck: false,
                                        placeholder: isServerConfigured ? t('settings.optionalOverride') : 'sk-...',
                                        value: apiKey,
                                        onChange: (e)=>handleApiKeyChange(e.target.value),
                                        onBlur: onSave,
                                        disabled: !requiresApiKey && !isServerConfigured,
                                        className: "h-8 pr-8"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowApiKey(!showApiKey),
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                        disabled: !requiresApiKey,
                                        children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                            lineNumber: 189,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                            lineNumber: 189,
                                            columnNumber: 62
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleTestApi,
                                disabled: testStatus === 'testing' || requiresApiKey && !apiKey && !isServerConfigured,
                                className: "gap-1.5",
                                children: testStatus === 'testing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        t('settings.testConnection')
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    testMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-3 text-sm overflow-hidden', testStatus === 'success' && 'bg-green-50 text-green-700 border border-green-200', testStatus === 'error' && 'bg-red-50 text-red-700 border border-red-200'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2 min-w-0",
                            children: [
                                testStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-4 w-4 mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                    lineNumber: 220,
                                    columnNumber: 44
                                }, this),
                                testStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "h-4 w-4 mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                    lineNumber: 221,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex-1 min-w-0 break-all",
                                    children: testMessage
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                id: `requires-api-key-${provider.id}`,
                                checked: requiresApiKey,
                                onCheckedChange: (checked)=>{
                                    handleRequiresApiKeyChange(checked);
                                    onSave();
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `requires-api-key-${provider.id}`,
                                className: "text-sm cursor-pointer text-muted-foreground",
                                children: t('settings.requiresApiKey')
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('settings.apiHost')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        name: `llm-base-url-${provider.id}`,
                        type: "url",
                        autoComplete: "off",
                        autoCapitalize: "none",
                        autoCorrect: "off",
                        spellCheck: false,
                        placeholder: provider.defaultBaseUrl || 'https://api.example.com/v1',
                        value: baseUrl,
                        onChange: (e)=>handleBaseUrlChange(e.target.value),
                        onBlur: onSave,
                        className: "h-8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    (()=>{
                        const effectiveBaseUrl = baseUrl || provider.defaultBaseUrl || '';
                        if (!effectiveBaseUrl) return null;
                        // Generate endpoint path based on provider type
                        let endpointPath = '';
                        switch(provider.type){
                            case 'openai':
                                endpointPath = '/chat/completions';
                                break;
                            case 'anthropic':
                                endpointPath = '/messages';
                                break;
                            case 'google':
                                endpointPath = '/models/[model]';
                                break;
                            default:
                                endpointPath = '';
                        }
                        const fullUrl = effectiveBaseUrl + endpointPath;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground break-all",
                            children: [
                                t('settings.requestUrl'),
                                ": ",
                                fullUrl
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, this);
                    })()
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-base",
                                children: t('settings.models')
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    isBuiltIn && onResetToDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>setShowResetDialog(true),
                                        className: "gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this),
                                            t('settings.reset')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: onAddModel,
                                        className: "gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this),
                                            t('settings.addNewModel')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: t('settings.modelsManagementDescription')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: models.map((model, index)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-mono text-sm font-medium mb-1.5",
                                                children: model.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            model.capabilities?.vision && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                title: t('settings.capabilities.vision'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 25
                                                            }, this),
                                                            model.capabilities?.tools && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                title: t('settings.capabilities.tools'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 25
                                                            }, this),
                                                            model.capabilities?.streaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                title: t('settings.capabilities.streaming'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                    lineNumber: 338,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 21
                                                    }, this),
                                                    model.contextWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px]",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatContextWindow"])(model.contextWindow)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 23
                                                    }, this),
                                                    model.outputWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px]",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatContextWindow"])(model.outputWindow)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                className: "h-8 px-2",
                                                onClick: ()=>onEditModel(index),
                                                title: t('settings.editModel'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                className: "h-8 px-2 text-destructive hover:text-destructive hover:bg-destructive/10",
                                                onClick: ()=>onDeleteModel(index),
                                                title: t('settings.deleteModel'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, model.id, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                lineNumber: 317,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: showResetDialog,
                onOpenChange: setShowResetDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    children: t('settings.resetToDefault')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    children: t('settings.resetConfirmDescription')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    children: t('settings.cancelEdit')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: ()=>{
                                        setShowResetDialog(false);
                                        onResetToDefault?.();
                                    },
                                    children: t('settings.confirmReset')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFSettings",
    ()=>PDFSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$pdf$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/pdf/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
'use client';
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
;
/**
 * Get display label for feature
 */ function getFeatureLabel(feature, t) {
    const labels = {
        text: t('settings.featureText'),
        images: t('settings.featureImages'),
        tables: t('settings.featureTables'),
        formulas: t('settings.featureFormulas'),
        'layout-analysis': t('settings.featureLayoutAnalysis'),
        metadata: t('settings.featureMetadata')
    };
    return labels[feature] || feature;
}
function PDFSettings({ selectedProviderId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const [showApiKey, setShowApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const pdfProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.pdfProvidersConfig);
    const setPDFProviderConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setPDFProviderConfig);
    const pdfProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$pdf$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDF_PROVIDERS"][selectedProviderId];
    const isServerConfigured = !!pdfProvidersConfig[selectedProviderId]?.isServerConfigured;
    const providerConfig = pdfProvidersConfig[selectedProviderId];
    const hasBaseUrl = !!providerConfig?.baseUrl;
    const needsRemoteConfig = selectedProviderId === 'mineru';
    // Reset state when provider changes
    const [prevSelectedProviderId, setPrevSelectedProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedProviderId);
    if (selectedProviderId !== prevSelectedProviderId) {
        setPrevSelectedProviderId(selectedProviderId);
        setShowApiKey(false);
        setTestStatus('idle');
        setTestMessage('');
    }
    const handleTestConnection = async ()=>{
        const baseUrl = providerConfig?.baseUrl;
        if (!baseUrl) return;
        setTestStatus('testing');
        setTestMessage('');
        try {
            const response = await fetch('/api/verify-pdf-provider', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    providerId: selectedProviderId,
                    apiKey: providerConfig?.apiKey || '',
                    baseUrl
                })
            });
            const data = await response.json();
            if (data.success) {
                setTestStatus('success');
                setTestMessage(t('settings.connectionSuccess'));
            } else {
                setTestStatus('error');
                setTestMessage(`${t('settings.connectionFailed')}: ${data.error}`);
            }
        } catch (err) {
            setTestStatus('error');
            const message = err instanceof Error ? err.message : String(err);
            setTestMessage(`${t('settings.connectionFailed')}: ${message}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-3xl",
        children: [
            isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-3 text-sm text-blue-700 dark:text-blue-300",
                children: t('settings.serverConfiguredNotice')
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            (needsRemoteConfig || isServerConfigured) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm",
                                        children: t('settings.pdfBaseUrl')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                name: `pdf-base-url-${selectedProviderId}`,
                                                autoComplete: "off",
                                                autoCapitalize: "none",
                                                autoCorrect: "off",
                                                spellCheck: false,
                                                placeholder: "http://localhost:8080",
                                                value: providerConfig?.baseUrl || '',
                                                onChange: (e)=>setPDFProviderConfig(selectedProviderId, {
                                                        baseUrl: e.target.value
                                                    }),
                                                className: "text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: handleTestConnection,
                                                disabled: testStatus === 'testing' || !hasBaseUrl,
                                                className: "gap-1.5 shrink-0",
                                                children: testStatus === 'testing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-3.5 w-3.5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this),
                                                        t('settings.testConnection')
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm",
                                        children: [
                                            t('settings.pdfApiKey'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground ml-1 font-normal",
                                                children: [
                                                    "(",
                                                    t('settings.optional'),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                name: `pdf-api-key-${selectedProviderId}`,
                                                type: showApiKey ? 'text' : 'password',
                                                autoComplete: "new-password",
                                                autoCapitalize: "none",
                                                autoCorrect: "off",
                                                spellCheck: false,
                                                placeholder: isServerConfigured ? t('settings.optionalOverride') : t('settings.enterApiKey'),
                                                value: providerConfig?.apiKey || '',
                                                onChange: (e)=>setPDFProviderConfig(selectedProviderId, {
                                                        apiKey: e.target.value
                                                    }),
                                                className: "font-mono text-sm pr-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowApiKey(!showApiKey),
                                                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                                children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 33
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 66
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    testMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-3 text-sm', testStatus === 'success' && 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-800', testStatus === 'error' && 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-800'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                testStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-4 w-4 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                    lineNumber: 189,
                                    columnNumber: 46
                                }, this),
                                testStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "h-4 w-4 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                    lineNumber: 190,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "break-all",
                                    children: testMessage
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                            lineNumber: 188,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                        lineNumber: 179,
                        columnNumber: 13
                    }, this),
                    (()=>{
                        const effectiveBaseUrl = providerConfig?.baseUrl || '';
                        if (!effectiveBaseUrl) return null;
                        const fullUrl = effectiveBaseUrl + '/file_parse';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground break-all",
                            children: [
                                t('settings.requestUrl'),
                                ": ",
                                fullUrl
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                            lineNumber: 202,
                            columnNumber: 15
                        }, this);
                    })()
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm",
                        children: t('settings.pdfFeatures')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: pdfProvider.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "secondary",
                                className: "font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    getFeatureLabel(feature, t)
                                ]
                            }, feature, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageSettings",
    ()=>ImageSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/image-providers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-ssr] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
'use client';
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
;
function ImageSettings({ selectedProviderId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const imageModelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.imageModelId);
    const imageProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.imageProvidersConfig);
    const _setImageModelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setImageModelId);
    const setImageProviderConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setImageProviderConfig);
    const [showApiKey, setShowApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testLoading, setTestLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Model dialog state
    const [showModelDialog, setShowModelDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingModelIndex, setEditingModelIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelForm, setModelForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        name: ''
    });
    // Reset test state when provider changes (derived state pattern)
    const [prevSelectedProviderId, setPrevSelectedProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedProviderId);
    if (selectedProviderId !== prevSelectedProviderId) {
        setPrevSelectedProviderId(selectedProviderId);
        setTestStatus('idle');
        setTestMessage('');
    }
    const currentConfig = imageProvidersConfig[selectedProviderId];
    const currentProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_PROVIDERS"][selectedProviderId];
    const builtInModels = currentProvider?.models || [];
    const customModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>currentConfig?.customModels || [], [
        currentConfig?.customModels
    ]);
    const isServerConfigured = !!currentConfig?.isServerConfigured;
    const handleApiKeyChange = (apiKey)=>{
        setImageProviderConfig(selectedProviderId, {
            apiKey
        });
    };
    const handleBaseUrlChange = (baseUrl)=>{
        setImageProviderConfig(selectedProviderId, {
            baseUrl
        });
    };
    const handleTest = async ()=>{
        setTestLoading(true);
        setTestStatus('idle');
        setTestMessage('');
        try {
            const response = await fetch('/api/verify-image-provider', {
                method: 'POST',
                headers: {
                    'x-image-provider': selectedProviderId,
                    'x-image-model': imageModelId || '',
                    'x-api-key': currentConfig?.apiKey || '',
                    'x-base-url': currentConfig?.baseUrl || ''
                }
            });
            const data = await response.json();
            if (data.success) {
                setTestStatus('success');
                setTestMessage(t('settings.imageConnectivitySuccess'));
            } else {
                setTestStatus('error');
                setTestMessage(`${t('settings.imageConnectivityFailed')}: ${data.message}`);
            }
        } catch (err) {
            setTestStatus('error');
            setTestMessage(`${t('settings.imageConnectivityFailed')}: ${err}`);
        } finally{
            setTestLoading(false);
        }
    };
    // Model CRUD
    const handleOpenAddModel = ()=>{
        setEditingModelIndex(null);
        setModelForm({
            id: '',
            name: ''
        });
        setShowModelDialog(true);
    };
    const handleOpenEditModel = (index)=>{
        setEditingModelIndex(index);
        setModelForm({
            ...customModels[index]
        });
        setShowModelDialog(true);
    };
    const handleSaveModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!modelForm.id.trim()) return;
        const newCustomModels = [
            ...customModels
        ];
        if (editingModelIndex !== null) {
            newCustomModels[editingModelIndex] = {
                id: modelForm.id.trim(),
                name: modelForm.name.trim() || modelForm.id.trim()
            };
        } else {
            newCustomModels.push({
                id: modelForm.id.trim(),
                name: modelForm.name.trim() || modelForm.id.trim()
            });
        }
        setImageProviderConfig(selectedProviderId, {
            customModels: newCustomModels
        });
        setShowModelDialog(false);
    }, [
        modelForm,
        editingModelIndex,
        customModels,
        selectedProviderId,
        setImageProviderConfig
    ]);
    const handleDeleteModel = (index)=>{
        const newCustomModels = customModels.filter((_, i)=>i !== index);
        setImageProviderConfig(selectedProviderId, {
            customModels: newCustomModels
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-3xl",
        children: [
            isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-3 text-sm text-blue-700 dark:text-blue-300",
                children: t('settings.serverConfiguredNotice')
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "API Key"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        name: `image-api-key-${selectedProviderId}`,
                                        type: showApiKey ? 'text' : 'password',
                                        autoComplete: "new-password",
                                        autoCapitalize: "none",
                                        autoCorrect: "off",
                                        spellCheck: false,
                                        placeholder: isServerConfigured ? t('settings.optionalOverride') : t('settings.enterApiKey'),
                                        value: currentConfig?.apiKey || '',
                                        onChange: (e)=>handleApiKeyChange(e.target.value),
                                        className: "h-8 pr-8"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowApiKey(!showApiKey),
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                        children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 175,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 175,
                                            columnNumber: 62
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleTest,
                                disabled: testLoading || !currentConfig?.apiKey && !isServerConfigured,
                                className: "gap-1.5",
                                children: testLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        t('settings.testConnection')
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    testMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-3 text-sm overflow-hidden', testStatus === 'success' && 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-950/50 dark:text-green-400 dark:border-green-800', testStatus === 'error' && 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2 min-w-0",
                            children: [
                                testStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-4 w-4 mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 206,
                                    columnNumber: 44
                                }, this),
                                testStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "h-4 w-4 mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 207,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex-1 min-w-0 break-all",
                                    children: testMessage
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Base URL"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        name: `image-base-url-${selectedProviderId}`,
                        type: "url",
                        autoComplete: "off",
                        autoCapitalize: "none",
                        autoCorrect: "off",
                        spellCheck: false,
                        value: currentConfig?.baseUrl || '',
                        onChange: (e)=>handleBaseUrlChange(e.target.value),
                        placeholder: currentConfig?.serverBaseUrl || currentProvider?.defaultBaseUrl || t('settings.enterCustomBaseUrl'),
                        className: "h-8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    (()=>{
                        const effectiveBaseUrl = currentConfig?.baseUrl || currentConfig?.serverBaseUrl || currentProvider?.defaultBaseUrl || '';
                        if (!effectiveBaseUrl) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground break-all",
                            children: [
                                t('settings.requestUrl'),
                                ": ",
                                effectiveBaseUrl
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, this);
                    })()
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-base",
                                children: t('settings.models')
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleOpenAddModel,
                                className: "gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    t('settings.addNewModel')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            builtInModels.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-mono text-sm font-medium",
                                                children: model.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-muted-foreground font-mono mt-0.5",
                                                children: model.id
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                }, model.id, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)),
                            customModels.map((model, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-sm font-medium",
                                                    children: model.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground font-mono mt-0.5",
                                                    children: model.id
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "h-8 px-2",
                                                    onClick: ()=>handleOpenEditModel(index),
                                                    title: t('settings.editModel'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "h-8 px-2 text-destructive hover:text-destructive hover:bg-destructive/10",
                                                    onClick: ()=>handleDeleteModel(index),
                                                    title: t('settings.deleteModel'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, `custom-${index}`, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showModelDialog,
                onOpenChange: setShowModelDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: editingModelIndex !== null ? t('settings.editModel') : t('settings.addNewModel')
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "sr-only",
                            children: editingModelIndex !== null ? t('settings.editModel') : t('settings.addNewModel')
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            children: t('settings.modelId')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            value: modelForm.id,
                                            onChange: (e)=>setModelForm((prev)=>({
                                                        ...prev,
                                                        id: e.target.value
                                                    })),
                                            placeholder: "e.g. my-custom-model-v1",
                                            className: "h-8 font-mono text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            children: t('settings.modelName')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            value: modelForm.name,
                                            onChange: (e)=>setModelForm((prev)=>({
                                                        ...prev,
                                                        name: e.target.value
                                                    })),
                                            placeholder: "e.g. My Custom Model",
                                            className: "h-8 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>setShowModelDialog(false),
                                            children: t('common.cancel')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            onClick: handleSaveModel,
                                            disabled: !modelForm.id.trim(),
                                            children: t('common.save')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoSettings",
    ()=>VideoSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/video-providers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-ssr] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
'use client';
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
;
function VideoSettings({ selectedProviderId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const videoModelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.videoModelId);
    const videoProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.videoProvidersConfig);
    const setVideoProviderConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setVideoProviderConfig);
    const [showApiKey, setShowApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testLoading, setTestLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Model dialog state
    const [showModelDialog, setShowModelDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingModelIndex, setEditingModelIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelForm, setModelForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        name: ''
    });
    // Reset test state when provider changes (derived state pattern)
    const [prevSelectedProviderId, setPrevSelectedProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedProviderId);
    if (selectedProviderId !== prevSelectedProviderId) {
        setPrevSelectedProviderId(selectedProviderId);
        setTestStatus('idle');
        setTestMessage('');
    }
    const currentConfig = videoProvidersConfig[selectedProviderId];
    const currentProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIDEO_PROVIDERS"][selectedProviderId];
    const builtInModels = currentProvider?.models || [];
    const customModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>currentConfig?.customModels || [], [
        currentConfig?.customModels
    ]);
    const isServerConfigured = !!currentConfig?.isServerConfigured;
    const handleApiKeyChange = (apiKey)=>{
        setVideoProviderConfig(selectedProviderId, {
            apiKey
        });
    };
    const handleBaseUrlChange = (baseUrl)=>{
        setVideoProviderConfig(selectedProviderId, {
            baseUrl
        });
    };
    const handleTest = async ()=>{
        setTestLoading(true);
        setTestStatus('idle');
        setTestMessage('');
        try {
            const response = await fetch('/api/verify-video-provider', {
                method: 'POST',
                headers: {
                    'x-video-provider': selectedProviderId,
                    'x-video-model': videoModelId || '',
                    'x-api-key': currentConfig?.apiKey || '',
                    'x-base-url': currentConfig?.baseUrl || ''
                }
            });
            const data = await response.json();
            if (data.success) {
                setTestStatus('success');
                setTestMessage(t('settings.videoConnectivitySuccess'));
            } else {
                setTestStatus('error');
                setTestMessage(`${t('settings.videoConnectivityFailed')}: ${data.message}`);
            }
        } catch (err) {
            setTestStatus('error');
            setTestMessage(`${t('settings.videoConnectivityFailed')}: ${err}`);
        } finally{
            setTestLoading(false);
        }
    };
    // Model CRUD
    const handleOpenAddModel = ()=>{
        setEditingModelIndex(null);
        setModelForm({
            id: '',
            name: ''
        });
        setShowModelDialog(true);
    };
    const handleOpenEditModel = (index)=>{
        setEditingModelIndex(index);
        setModelForm({
            ...customModels[index]
        });
        setShowModelDialog(true);
    };
    const handleSaveModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!modelForm.id.trim()) return;
        const newCustomModels = [
            ...customModels
        ];
        if (editingModelIndex !== null) {
            newCustomModels[editingModelIndex] = {
                id: modelForm.id.trim(),
                name: modelForm.name.trim() || modelForm.id.trim()
            };
        } else {
            newCustomModels.push({
                id: modelForm.id.trim(),
                name: modelForm.name.trim() || modelForm.id.trim()
            });
        }
        setVideoProviderConfig(selectedProviderId, {
            customModels: newCustomModels
        });
        setShowModelDialog(false);
    }, [
        modelForm,
        editingModelIndex,
        customModels,
        selectedProviderId,
        setVideoProviderConfig
    ]);
    const handleDeleteModel = (index)=>{
        const newCustomModels = customModels.filter((_, i)=>i !== index);
        setVideoProviderConfig(selectedProviderId, {
            customModels: newCustomModels
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-3xl",
        children: [
            isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-3 text-sm text-blue-700 dark:text-blue-300",
                children: t('settings.serverConfiguredNotice')
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "API Key"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        name: `video-api-key-${selectedProviderId}`,
                                        type: showApiKey ? 'text' : 'password',
                                        autoComplete: "new-password",
                                        autoCapitalize: "none",
                                        autoCorrect: "off",
                                        spellCheck: false,
                                        placeholder: isServerConfigured ? t('settings.optionalOverride') : selectedProviderId === 'kling' ? 'accessKey:secretKey' : t('settings.enterApiKey'),
                                        value: currentConfig?.apiKey || '',
                                        onChange: (e)=>handleApiKeyChange(e.target.value),
                                        className: "h-8 pr-8"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowApiKey(!showApiKey),
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                        children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 178,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 178,
                                            columnNumber: 62
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleTest,
                                disabled: testLoading || !currentConfig?.apiKey && !isServerConfigured,
                                className: "gap-1.5",
                                children: testLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        t('settings.testConnection')
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    testMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-3 text-sm overflow-hidden', testStatus === 'success' && 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-950/50 dark:text-green-400 dark:border-green-800', testStatus === 'error' && 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2 min-w-0",
                            children: [
                                testStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-4 w-4 mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 209,
                                    columnNumber: 44
                                }, this),
                                testStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "h-4 w-4 mt-0.5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 210,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex-1 min-w-0 break-all",
                                    children: testMessage
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Base URL"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        name: `video-base-url-${selectedProviderId}`,
                        type: "url",
                        autoComplete: "off",
                        autoCapitalize: "none",
                        autoCorrect: "off",
                        spellCheck: false,
                        value: currentConfig?.baseUrl || '',
                        onChange: (e)=>handleBaseUrlChange(e.target.value),
                        placeholder: currentConfig?.serverBaseUrl || currentProvider?.defaultBaseUrl || t('settings.enterCustomBaseUrl'),
                        className: "h-8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    (()=>{
                        const effectiveBaseUrl = currentConfig?.baseUrl || currentConfig?.serverBaseUrl || currentProvider?.defaultBaseUrl || '';
                        if (!effectiveBaseUrl) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground break-all",
                            children: [
                                t('settings.requestUrl'),
                                ": ",
                                effectiveBaseUrl
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this);
                    })()
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-base",
                                children: t('settings.models')
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleOpenAddModel,
                                className: "gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    t('settings.addNewModel')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            builtInModels.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-mono text-sm font-medium",
                                                children: model.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-muted-foreground font-mono mt-0.5",
                                                children: model.id
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                }, model.id, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)),
                            customModels.map((model, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-sm font-medium",
                                                    children: model.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground font-mono mt-0.5",
                                                    children: model.id
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "h-8 px-2",
                                                    onClick: ()=>handleOpenEditModel(index),
                                                    title: t('settings.editModel'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "h-8 px-2 text-destructive hover:text-destructive hover:bg-destructive/10",
                                                    onClick: ()=>handleDeleteModel(index),
                                                    title: t('settings.deleteModel'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, `custom-${index}`, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showModelDialog,
                onOpenChange: setShowModelDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: editingModelIndex !== null ? t('settings.editModel') : t('settings.addNewModel')
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "sr-only",
                            children: editingModelIndex !== null ? t('settings.editModel') : t('settings.addNewModel')
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            children: t('settings.modelId')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            value: modelForm.id,
                                            onChange: (e)=>setModelForm((prev)=>({
                                                        ...prev,
                                                        id: e.target.value
                                                    })),
                                            placeholder: "e.g. my-custom-model-v1",
                                            className: "h-8 font-mono text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            children: t('settings.modelName')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            value: modelForm.name,
                                            onChange: (e)=>setModelForm((prev)=>({
                                                        ...prev,
                                                        name: e.target.value
                                                    })),
                                            placeholder: "e.g. My Custom Model",
                                            className: "h-8 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>setShowModelDialog(false),
                                            children: t('common.cancel')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            onClick: handleSaveModel,
                                            disabled: !modelForm.id.trim(),
                                            children: t('common.save')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TTSSettings",
    ()=>TTSSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/audio/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$use$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/audio/use-tts-preview.ts [app-ssr] (ecmascript)");
'use client';
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
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('TTSSettings');
function TTSSettings({ selectedProviderId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const ttsVoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.ttsVoice);
    const ttsSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.ttsSpeed);
    const ttsProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.ttsProvidersConfig);
    const setTTSProviderConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setTTSProviderConfig);
    const activeProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.ttsProviderId);
    // When testing a non-active provider, use that provider's default voice
    // instead of the active provider's voice (which may be incompatible)
    const effectiveVoice = selectedProviderId === activeProviderId ? ttsVoice : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TTS_VOICES"][selectedProviderId] || 'default';
    const ttsProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"][selectedProviderId] ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"]['openai-tts'];
    const isServerConfigured = !!ttsProvidersConfig[selectedProviderId]?.isServerConfigured;
    const [showApiKey, setShowApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testText, setTestText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(t('settings.ttsTestTextDefault'));
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const { previewing: testingTTS, startPreview, stopPreview } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$use$2d$tts$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTTSPreview"])();
    // Doubao TTS uses compound "appId:accessKey" — split for separate UI fields
    const isDoubao = selectedProviderId === 'doubao-tts';
    const rawApiKey = ttsProvidersConfig[selectedProviderId]?.apiKey || '';
    const doubaoColonIdx = rawApiKey.indexOf(':');
    const doubaoAppId = isDoubao && doubaoColonIdx > 0 ? rawApiKey.slice(0, doubaoColonIdx) : '';
    const doubaoAccessKey = isDoubao && doubaoColonIdx > 0 ? rawApiKey.slice(doubaoColonIdx + 1) : isDoubao ? rawApiKey : '';
    const setDoubaoCompoundKey = (appId, accessKey)=>{
        const combined = appId && accessKey ? `${appId}:${accessKey}` : appId || accessKey;
        setTTSProviderConfig(selectedProviderId, {
            apiKey: combined
        });
    };
    // Update test text when language changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTestText(t('settings.ttsTestTextDefault'));
    }, [
        t
    ]);
    // Reset state when provider changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        stopPreview();
        setShowApiKey(false);
        setTestStatus('idle');
        setTestMessage('');
    }, [
        selectedProviderId,
        stopPreview
    ]);
    const handleTestTTS = async ()=>{
        if (!testText.trim()) return;
        setTestStatus('testing');
        setTestMessage('');
        try {
            await startPreview({
                text: testText,
                providerId: selectedProviderId,
                voice: effectiveVoice,
                speed: ttsSpeed,
                apiKey: ttsProvidersConfig[selectedProviderId]?.apiKey,
                baseUrl: ttsProvidersConfig[selectedProviderId]?.baseUrl
            });
            setTestStatus('success');
            setTestMessage(t('settings.ttsTestSuccess'));
        } catch (error) {
            log.error('TTS test failed:', error);
            setTestStatus('error');
            setTestMessage(error instanceof Error && error.message ? `${t('settings.ttsTestFailed')}: ${error.message}` : t('settings.ttsTestFailed'));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-3xl",
        children: [
            isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-3 text-sm text-blue-700 dark:text-blue-300",
                children: t('settings.serverConfiguredNotice')
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            (ttsProvider.requiresApiKey || isServerConfigured) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('grid gap-4', isDoubao ? 'grid-cols-3' : 'grid-cols-2'),
                        children: [
                            isDoubao ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm",
                                                children: t('settings.doubaoAppId')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        name: `tts-app-id-${selectedProviderId}`,
                                                        type: showApiKey ? 'text' : 'password',
                                                        autoComplete: "new-password",
                                                        autoCapitalize: "none",
                                                        autoCorrect: "off",
                                                        spellCheck: false,
                                                        placeholder: isServerConfigured ? t('settings.optionalOverride') : t('settings.enterApiKey'),
                                                        value: doubaoAppId,
                                                        onChange: (e)=>setDoubaoCompoundKey(e.target.value, doubaoAccessKey),
                                                        className: "font-mono text-sm pr-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowApiKey(!showApiKey),
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                                        children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 37
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 70
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm",
                                                children: t('settings.doubaoAccessKey')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        name: `tts-access-key-${selectedProviderId}`,
                                                        type: showApiKey ? 'text' : 'password',
                                                        autoComplete: "new-password",
                                                        autoCapitalize: "none",
                                                        autoCorrect: "off",
                                                        spellCheck: false,
                                                        placeholder: isServerConfigured ? t('settings.optionalOverride') : t('settings.enterApiKey'),
                                                        value: doubaoAccessKey,
                                                        onChange: (e)=>setDoubaoCompoundKey(doubaoAppId, e.target.value),
                                                        className: "font-mono text-sm pr-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowApiKey(!showApiKey),
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                                        children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 37
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 70
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm",
                                        children: t('settings.ttsApiKey')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                name: `tts-api-key-${selectedProviderId}`,
                                                type: showApiKey ? 'text' : 'password',
                                                autoComplete: "new-password",
                                                autoCapitalize: "none",
                                                autoCorrect: "off",
                                                spellCheck: false,
                                                placeholder: isServerConfigured ? t('settings.optionalOverride') : t('settings.enterApiKey'),
                                                value: ttsProvidersConfig[selectedProviderId]?.apiKey || '',
                                                onChange: (e)=>setTTSProviderConfig(selectedProviderId, {
                                                        apiKey: e.target.value
                                                    }),
                                                className: "font-mono text-sm pr-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowApiKey(!showApiKey),
                                                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                                children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 35
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 68
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm",
                                        children: t('settings.ttsBaseUrl')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        name: `tts-base-url-${selectedProviderId}`,
                                        autoComplete: "off",
                                        autoCapitalize: "none",
                                        autoCorrect: "off",
                                        spellCheck: false,
                                        placeholder: ttsProvider.defaultBaseUrl || t('settings.enterCustomBaseUrl'),
                                        value: ttsProvidersConfig[selectedProviderId]?.baseUrl || '',
                                        onChange: (e)=>setTTSProviderConfig(selectedProviderId, {
                                                baseUrl: e.target.value
                                            }),
                                        className: "text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    (()=>{
                        const effectiveBaseUrl = ttsProvidersConfig[selectedProviderId]?.baseUrl || ttsProvider.defaultBaseUrl || '';
                        if (!effectiveBaseUrl) return null;
                        let endpointPath = '';
                        switch(selectedProviderId){
                            case 'openai-tts':
                            case 'glm-tts':
                                endpointPath = '/audio/speech';
                                break;
                            case 'azure-tts':
                                endpointPath = '/cognitiveservices/v1';
                                break;
                            case 'qwen-tts':
                                endpointPath = '/services/aigc/multimodal-generation/generation';
                                break;
                            case 'elevenlabs-tts':
                                endpointPath = '/text-to-speech';
                                break;
                            case 'doubao-tts':
                                endpointPath = '/unidirectional';
                                break;
                        }
                        if (!endpointPath) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground break-all",
                            children: [
                                t('settings.requestUrl'),
                                ": ",
                                effectiveBaseUrl + endpointPath
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                            lineNumber: 256,
                            columnNumber: 15
                        }, this);
                    })()
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm",
                        children: t('settings.testTTS')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: t('settings.ttsTestTextPlaceholder'),
                                value: testText,
                                onChange: (e)=>setTestText(e.target.value),
                                className: "flex-1"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleTestTTS,
                                disabled: testingTTS || !testText.trim() || ttsProvider.requiresApiKey && !ttsProvidersConfig[selectedProviderId]?.apiKey?.trim() && !isServerConfigured,
                                size: "default",
                                className: "gap-2 w-32",
                                children: [
                                    testingTTS ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    t('settings.testTTS')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            testMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-3 text-sm overflow-hidden', testStatus === 'success' && 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-950/50 dark:text-green-400 dark:border-green-800', testStatus === 'error' && 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2 min-w-0",
                    children: [
                        testStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-4 w-4 mt-0.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                            lineNumber: 307,
                            columnNumber: 42
                        }, this),
                        testStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            className: "h-4 w-4 mt-0.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                            lineNumber: 308,
                            columnNumber: 40
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex-1 min-w-0 break-all",
                            children: testMessage
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                    lineNumber: 306,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ASRSettings",
    ()=>ASRSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/audio/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
'use client';
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
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('ASRSettings');
function ASRSettings({ selectedProviderId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const asrLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.asrLanguage);
    const asrProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.asrProvidersConfig);
    const setASRProviderConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setASRProviderConfig);
    const asrProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ASR_PROVIDERS"][selectedProviderId] ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ASR_PROVIDERS"]['openai-whisper'];
    const isServerConfigured = !!asrProvidersConfig[selectedProviderId]?.isServerConfigured;
    const [showApiKey, setShowApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [asrResult, setASRResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reset state when provider changes (derived state pattern)
    const [prevProviderId, setPrevProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedProviderId);
    if (selectedProviderId !== prevProviderId) {
        setPrevProviderId(selectedProviderId);
        setShowApiKey(false);
        setTestStatus('idle');
        setTestMessage('');
        setASRResult('');
    }
    const handleToggleASRRecording = async ()=>{
        if (isRecording) {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
                mediaRecorderRef.current.stop();
            }
            setIsRecording(false);
        } else {
            setASRResult('');
            setTestStatus('testing');
            setTestMessage('');
            if (selectedProviderId === 'browser-native') {
                const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
                if (!SpeechRecognitionCtor) {
                    setTestStatus('error');
                    setTestMessage(t('settings.asrNotSupported'));
                    return;
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Vendor-prefixed API without standard typings
                const recognition = new SpeechRecognitionCtor();
                recognition.lang = asrLanguage || 'zh-CN';
                recognition.onresult = (event)=>{
                    const transcript = event.results[0][0].transcript;
                    setASRResult(transcript);
                    setTestStatus('success');
                    setTestMessage(t('settings.asrTestSuccess'));
                };
                recognition.onerror = (event)=>{
                    setTestStatus('error');
                    setTestMessage(t('settings.asrTestFailed') + ': ' + event.error);
                };
                recognition.onend = ()=>{
                    setIsRecording(false);
                };
                recognition.start();
                setIsRecording(true);
            } else {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        audio: true
                    });
                    const mediaRecorder = new MediaRecorder(stream);
                    mediaRecorderRef.current = mediaRecorder;
                    const audioChunks = [];
                    mediaRecorder.ondataavailable = (event)=>{
                        audioChunks.push(event.data);
                    };
                    mediaRecorder.onstop = async ()=>{
                        stream.getTracks().forEach((track)=>track.stop());
                        const audioBlob = new Blob(audioChunks, {
                            type: 'audio/webm'
                        });
                        const formData = new FormData();
                        formData.append('audio', audioBlob, 'recording.webm');
                        formData.append('providerId', selectedProviderId);
                        formData.append('language', asrLanguage);
                        const apiKeyValue = asrProvidersConfig[selectedProviderId]?.apiKey;
                        if (apiKeyValue?.trim()) formData.append('apiKey', apiKeyValue);
                        const baseUrlValue = asrProvidersConfig[selectedProviderId]?.baseUrl;
                        if (baseUrlValue?.trim()) formData.append('baseUrl', baseUrlValue);
                        try {
                            const response = await fetch('/api/transcription', {
                                method: 'POST',
                                body: formData
                            });
                            if (response.ok) {
                                const data = await response.json();
                                setASRResult(data.text);
                                setTestStatus('success');
                                setTestMessage(t('settings.asrTestSuccess'));
                            } else {
                                setTestStatus('error');
                                const errorData = await response.json().catch(()=>({
                                        error: response.statusText
                                    }));
                                setTestMessage(errorData.details || errorData.error || t('settings.asrTestFailed'));
                            }
                        } catch (error) {
                            log.error('ASR test failed:', error);
                            setTestStatus('error');
                            setTestMessage(t('settings.asrTestFailed'));
                        }
                    };
                    mediaRecorder.start();
                    setIsRecording(true);
                } catch (error) {
                    log.error('Failed to access microphone:', error);
                    setTestStatus('error');
                    setTestMessage(t('settings.microphoneAccessFailed'));
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-3xl",
        children: [
            isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-3 text-sm text-blue-700 dark:text-blue-300",
                children: t('settings.serverConfiguredNotice')
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            (asrProvider.requiresApiKey || isServerConfigured) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm",
                                        children: t('settings.asrApiKey')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                name: `asr-api-key-${selectedProviderId}`,
                                                type: showApiKey ? 'text' : 'password',
                                                autoComplete: "new-password",
                                                autoCapitalize: "none",
                                                autoCorrect: "off",
                                                spellCheck: false,
                                                placeholder: isServerConfigured ? t('settings.optionalOverride') : t('settings.enterApiKey'),
                                                value: asrProvidersConfig[selectedProviderId]?.apiKey || '',
                                                onChange: (e)=>setASRProviderConfig(selectedProviderId, {
                                                        apiKey: e.target.value
                                                    }),
                                                className: "font-mono text-sm pr-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowApiKey(!showApiKey),
                                                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                                children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 33
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 66
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm",
                                        children: t('settings.asrBaseUrl')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        name: `asr-base-url-${selectedProviderId}`,
                                        autoComplete: "off",
                                        autoCapitalize: "none",
                                        autoCorrect: "off",
                                        spellCheck: false,
                                        placeholder: asrProvider.defaultBaseUrl || t('settings.enterCustomBaseUrl'),
                                        value: asrProvidersConfig[selectedProviderId]?.baseUrl || '',
                                        onChange: (e)=>setASRProviderConfig(selectedProviderId, {
                                                baseUrl: e.target.value
                                            }),
                                        className: "text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    (()=>{
                        const effectiveBaseUrl = asrProvidersConfig[selectedProviderId]?.baseUrl || asrProvider.defaultBaseUrl || '';
                        if (!effectiveBaseUrl) return null;
                        let endpointPath = '';
                        switch(selectedProviderId){
                            case 'openai-whisper':
                                endpointPath = '/audio/transcriptions';
                                break;
                            case 'qwen-asr':
                                endpointPath = '/services/aigc/multimodal-generation/generation';
                                break;
                        }
                        if (!endpointPath) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground break-all",
                            children: [
                                t('settings.requestUrl'),
                                ": ",
                                effectiveBaseUrl + endpointPath
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                            lineNumber: 225,
                            columnNumber: 15
                        }, this);
                    })()
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm",
                        children: t('settings.testASR')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: asrResult,
                                readOnly: true,
                                placeholder: t('settings.asrResultPlaceholder'),
                                className: "flex-1 bg-muted/50"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleToggleASRRecording,
                                disabled: asrProvider.requiresApiKey && !asrProvidersConfig[selectedProviderId]?.apiKey?.trim() && !isServerConfigured,
                                className: "gap-2 w-[140px]",
                                children: isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        t('settings.stopRecording')
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        t('settings.startRecording')
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            testMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-3 text-sm overflow-hidden', testStatus === 'success' && 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-950/50 dark:text-green-400 dark:border-green-800', testStatus === 'error' && 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2 min-w-0",
                    children: [
                        testStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-4 w-4 mt-0.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                            lineNumber: 278,
                            columnNumber: 42
                        }, this),
                        testStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            className: "h-4 w-4 mt-0.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                            lineNumber: 279,
                            columnNumber: 40
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex-1 min-w-0 break-all",
                            children: testMessage
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                    lineNumber: 277,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSearchSettings",
    ()=>WebSearchSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$web$2d$search$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/web-search/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
'use client';
;
;
;
;
;
;
;
;
function WebSearchSettings({ selectedProviderId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const [showApiKey, setShowApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const webSearchProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.webSearchProvidersConfig);
    const setWebSearchProviderConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setWebSearchProviderConfig);
    const provider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$web$2d$search$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_SEARCH_PROVIDERS"][selectedProviderId];
    const isServerConfigured = !!webSearchProvidersConfig[selectedProviderId]?.isServerConfigured;
    // Reset showApiKey when provider changes (derived state pattern)
    const [prevSelectedProviderId, setPrevSelectedProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedProviderId);
    if (selectedProviderId !== prevSelectedProviderId) {
        setPrevSelectedProviderId(selectedProviderId);
        setShowApiKey(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-3xl",
        children: [
            isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-3 text-sm text-blue-700 dark:text-blue-300",
                children: t('settings.serverConfiguredNotice')
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            (provider.requiresApiKey || isServerConfigured) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm",
                                        children: t('settings.webSearchApiKey')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                name: `web-search-api-key-${selectedProviderId}`,
                                                type: showApiKey ? 'text' : 'password',
                                                autoComplete: "new-password",
                                                autoCapitalize: "none",
                                                autoCorrect: "off",
                                                spellCheck: false,
                                                placeholder: isServerConfigured ? t('settings.optionalOverride') : t('settings.enterApiKey'),
                                                value: webSearchProvidersConfig[selectedProviderId]?.apiKey || '',
                                                onChange: (e)=>setWebSearchProviderConfig(selectedProviderId, {
                                                        apiKey: e.target.value
                                                    }),
                                                className: "font-mono text-sm pr-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowApiKey(!showApiKey),
                                                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                                                children: showApiKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 33
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 66
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: t('settings.webSearchApiKeyHint')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm",
                                        children: t('settings.webSearchBaseUrl')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        name: `web-search-base-url-${selectedProviderId}`,
                                        autoComplete: "off",
                                        autoCapitalize: "none",
                                        autoCorrect: "off",
                                        spellCheck: false,
                                        placeholder: provider.defaultBaseUrl || 'https://api.tavily.com',
                                        value: webSearchProvidersConfig[selectedProviderId]?.baseUrl || '',
                                        onChange: (e)=>setWebSearchProviderConfig(selectedProviderId, {
                                                baseUrl: e.target.value
                                            }),
                                        className: "text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    (()=>{
                        const effectiveBaseUrl = webSearchProvidersConfig[selectedProviderId]?.baseUrl || provider.defaultBaseUrl || '';
                        if (!effectiveBaseUrl) return null;
                        const fullUrl = effectiveBaseUrl + '/search';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground break-all",
                            children: [
                                t('settings.requestUrl'),
                                ": ",
                                fullUrl
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this);
                    })()
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeneralSettings",
    ()=>GeneralSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/database.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-ssr] (ecmascript)");
'use client';
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
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('GeneralSettings');
function GeneralSettings() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    // Clear cache state
    const [showClearDialog, setShowClearDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmInput, setConfirmInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [clearing, setClearing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const confirmPhrase = t('settings.clearCacheConfirmPhrase');
    const isConfirmValid = confirmInput === confirmPhrase;
    const handleClearCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!isConfirmValid) return;
        setClearing(true);
        try {
            // 1. Clear IndexedDB
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$database$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearDatabase"])();
            // 2. Clear localStorage
            localStorage.clear();
            // 3. Clear sessionStorage
            sessionStorage.clear();
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t('settings.clearCacheSuccess'));
            // Reload page after a short delay
            setTimeout(()=>{
                window.location.reload();
            }, 1000);
        } catch (error) {
            log.error('Failed to clear cache:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t('settings.clearCacheFailed'));
            setClearing(false);
        }
    }, [
        isConfirmValid,
        t
    ]);
    const clearCacheItems = t('settings.clearCacheConfirmItems').split('、').length > 1 ? t('settings.clearCacheConfirmItems').split('、') : t('settings.clearCacheConfirmItems').split(', ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-xl border border-destructive/30 bg-destructive/[0.03] dark:bg-destructive/[0.06] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none",
                        style: {
                            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 10px,
              currentColor 10px,
              currentColor 11px
            )`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative p-4 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 rounded-md bg-destructive/10 text-destructive",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-destructive",
                                        children: t('settings.dangerZone')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: t('settings.clearCache')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-0.5 leading-relaxed",
                                                children: t('settings.clearCacheDescription')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "destructive",
                                        size: "sm",
                                        className: "shrink-0",
                                        onClick: ()=>{
                                            setConfirmInput('');
                                            setShowClearDialog(true);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-3.5 h-3.5 mr-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            t('settings.clearCache')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: showClearDialog,
                onOpenChange: (open)=>{
                    if (!clearing) {
                        setShowClearDialog(open);
                        if (!open) setConfirmInput('');
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    className: "flex items-center gap-2 text-destructive",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        t('settings.clearCacheConfirmTitle')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: t('settings.clearCacheConfirmDescription')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1.5 ml-1",
                                                children: clearCacheItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-destructive/60 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this),
                                                            item.trim()
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-medium text-foreground",
                                                        children: t('settings.clearCacheConfirmInput')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        className: "mt-1.5 h-9 text-sm",
                                                        placeholder: confirmPhrase,
                                                        value: confirmInput,
                                                        onChange: (e)=>setConfirmInput(e.target.value),
                                                        onKeyDown: (e)=>{
                                                            if (e.key === 'Enter' && isConfirmValid) {
                                                                handleClearCache();
                                                            }
                                                        },
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    disabled: clearing,
                                    children: t('common.cancel')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    disabled: !isConfirmValid || clearing,
                                    onClick: handleClearCache,
                                    children: [
                                        clearing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 mr-1.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4 mr-1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        t('settings.clearCacheButton')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModelEditDialog",
    ()=>ModelEditDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
'use client';
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
function ModelEditDialog({ open, onOpenChange, editingModel, setEditingModel, onSave, onAutoSave, providerId, apiKey, baseUrl, providerType, requiresApiKey }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Reset test status when dialog closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- Reset state when dialog closes
            setTestStatus('idle');
            setTestMessage('');
        }
    }, [
        open
    ]);
    const handleClose = ()=>{
        onOpenChange(false);
        setEditingModel(null);
    };
    const handleTestModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!editingModel || !apiKey) {
            setTestStatus('error');
            setTestMessage(t('settings.apiKeyRequired') || 'API Key is required');
            return;
        }
        setTestStatus('testing');
        setTestMessage('');
        try {
            const response = await fetch('/api/verify-model', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    apiKey,
                    baseUrl,
                    model: `${providerId}:${editingModel.model.id}`,
                    providerType,
                    requiresApiKey
                })
            });
            const data = await response.json();
            if (data.success) {
                setTestStatus('success');
                setTestMessage(t('settings.connectionSuccess'));
            } else {
                setTestStatus('error');
                setTestMessage(data.error || t('settings.connectionFailed'));
            }
        } catch (_error) {
            setTestStatus('error');
            setTestMessage(t('settings.connectionFailed'));
        }
    }, [
        editingModel,
        apiKey,
        baseUrl,
        providerId,
        providerType,
        requiresApiKey,
        t
    ]);
    if (!editingModel) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[500px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                    className: "sr-only",
                    children: editingModel.modelIndex === null ? t('settings.addNewModel') : t('settings.editModel')
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                    className: "sr-only",
                    children: editingModel.modelIndex === null ? t('settings.addNewModelDescription') : t('settings.editModelDescription')
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-3 border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: editingModel.modelIndex === null ? t('settings.addNewModel') : t('settings.editModel')
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: t('settings.modelId')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: t('settings.modelIdPlaceholder'),
                                    value: editingModel.model.id,
                                    onChange: (e)=>{
                                        const newId = e.target.value;
                                        const currentName = editingModel.model.name;
                                        const currentId = editingModel.model.id;
                                        // Auto-sync name if it's empty or matches the old ID
                                        const shouldSyncName = !currentName || currentName === currentId;
                                        setEditingModel({
                                            ...editingModel,
                                            model: {
                                                ...editingModel.model,
                                                id: newId,
                                                name: shouldSyncName ? newId : currentName
                                            }
                                        });
                                        // Reset test status when model ID changes
                                        setTestStatus('idle');
                                        setTestMessage('');
                                    },
                                    onBlur: ()=>onAutoSave?.()
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: t('settings.modelName')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: t('settings.modelNamePlaceholder'),
                                    value: editingModel.model.name,
                                    onChange: (e)=>setEditingModel({
                                            ...editingModel,
                                            model: {
                                                ...editingModel.model,
                                                name: e.target.value
                                            }
                                        }),
                                    onBlur: ()=>onAutoSave?.()
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: t('settings.modelCapabilities')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                    id: "cap-vision",
                                                    checked: editingModel.model.capabilities?.vision || false,
                                                    onCheckedChange: (checked)=>{
                                                        setEditingModel({
                                                            ...editingModel,
                                                            model: {
                                                                ...editingModel.model,
                                                                capabilities: {
                                                                    ...editingModel.model.capabilities,
                                                                    vision: checked
                                                                }
                                                            }
                                                        });
                                                        onAutoSave?.();
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "cap-vision",
                                                    className: "text-sm flex items-center gap-1.5 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        t('settings.capabilities.vision')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                    id: "cap-tools",
                                                    checked: editingModel.model.capabilities?.tools || false,
                                                    onCheckedChange: (checked)=>{
                                                        setEditingModel({
                                                            ...editingModel,
                                                            model: {
                                                                ...editingModel.model,
                                                                capabilities: {
                                                                    ...editingModel.model.capabilities,
                                                                    tools: checked
                                                                }
                                                            }
                                                        });
                                                        onAutoSave?.();
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "cap-tools",
                                                    className: "text-sm flex items-center gap-1.5 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 19
                                                        }, this),
                                                        t('settings.capabilities.tools')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                    id: "cap-streaming",
                                                    checked: editingModel.model.capabilities?.streaming || false,
                                                    onCheckedChange: (checked)=>{
                                                        setEditingModel({
                                                            ...editingModel,
                                                            model: {
                                                                ...editingModel.model,
                                                                capabilities: {
                                                                    ...editingModel.model.capabilities,
                                                                    streaming: checked
                                                                }
                                                            }
                                                        });
                                                        onAutoSave?.();
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "cap-streaming",
                                                    className: "text-sm flex items-center gap-1.5 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 19
                                                        }, this),
                                                        t('settings.capabilities.streaming')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-3 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-base",
                                    children: t('settings.advancedSettings')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-sm",
                                                    children: t('settings.contextWindowLabel')
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "number",
                                                    placeholder: t('settings.contextWindowPlaceholder'),
                                                    value: editingModel.model.contextWindow || '',
                                                    onChange: (e)=>setEditingModel({
                                                            ...editingModel,
                                                            model: {
                                                                ...editingModel.model,
                                                                contextWindow: e.target.value ? parseInt(e.target.value) : undefined
                                                            }
                                                        }),
                                                    onBlur: ()=>onAutoSave?.()
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-sm",
                                                    children: t('settings.outputWindowLabel')
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "number",
                                                    placeholder: t('settings.outputWindowPlaceholder'),
                                                    value: editingModel.model.outputWindow || '',
                                                    onChange: (e)=>setEditingModel({
                                                            ...editingModel,
                                                            model: {
                                                                ...editingModel.model,
                                                                outputWindow: e.target.value ? parseInt(e.target.value) : undefined
                                                            }
                                                        }),
                                                    onBlur: ()=>onAutoSave?.()
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-3 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-base",
                                            children: t('settings.testModel')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: handleTestModel,
                                            disabled: !editingModel.model.id || testStatus === 'testing',
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(testStatus === 'success' && 'border-green-600 text-green-600 hover:bg-green-50', testStatus === 'error' && 'border-red-600 text-red-600 hover:bg-red-50'),
                                            children: [
                                                testStatus === 'testing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 46
                                                }, this),
                                                testStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 46
                                                }, this),
                                                testStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 44
                                                }, this),
                                                testStatus === 'testing' ? t('settings.testing') : t('settings.testConnection')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                testMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-3 text-sm', testStatus === 'success' && 'bg-green-50 text-green-700 border border-green-200', testStatus === 'error' && 'bg-red-50 text-red-700 border border-red-200'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2 flex-wrap",
                                        children: [
                                            testStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "h-4 w-4 mt-0.5 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                lineNumber: 329,
                                                columnNumber: 48
                                            }, this),
                                            testStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "h-4 w-4 mt-0.5 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                lineNumber: 330,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex-1 break-words",
                                                children: testMessage
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                                lineNumber: 331,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2 pt-3 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handleClose,
                                    children: t('settings.cancelEdit')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    onClick: onSave,
                                    children: t('settings.saveModel')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddProviderDialog",
    ()=>AddProviderDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
'use client';
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
function AddProviderDialog({ open, onOpenChange, onAdd }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    // Internal state
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('openai');
    const [baseUrl, setBaseUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [icon, setIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [requiresApiKey, setRequiresApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Reset form when dialog closes (derived state pattern)
    const [prevOpen, setPrevOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(open);
    if (open !== prevOpen) {
        setPrevOpen(open);
        if (!open) {
            setName('');
            setType('openai');
            setBaseUrl('');
            setIcon('');
            setRequiresApiKey(true);
        }
    }
    const handleClose = ()=>{
        onOpenChange(false);
    };
    const handleAdd = ()=>{
        onAdd({
            name,
            type,
            baseUrl,
            icon,
            requiresApiKey
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[450px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                    className: "sr-only",
                    children: t('settings.addProviderDialog')
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                    className: "sr-only",
                    children: t('settings.addProviderDescription')
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-3 border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: t('settings.addProviderDialog')
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: t('settings.providerName')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: t('settings.providerNamePlaceholder'),
                                    value: name,
                                    onChange: (e)=>setName(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: t('settings.providerApiMode')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setType('openai'),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-2 rounded-lg border text-left text-sm transition-colors', type === 'openai' ? 'bg-primary/5 border-primary/50' : 'hover:bg-muted/50 border-transparent'),
                                            children: t('settings.apiModeOpenAI')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setType('anthropic'),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-2 rounded-lg border text-left text-sm transition-colors', type === 'anthropic' ? 'bg-primary/5 border-primary/50' : 'hover:bg-muted/50 border-transparent'),
                                            children: t('settings.apiModeAnthropic')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setType('google'),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-2 rounded-lg border text-left text-sm transition-colors', type === 'google' ? 'bg-primary/5 border-primary/50' : 'hover:bg-muted/50 border-transparent'),
                                            children: t('settings.apiModeGoogle')
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: t('settings.defaultBaseUrl')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "url",
                                    placeholder: "https://api.example.com/v1",
                                    value: baseUrl,
                                    onChange: (e)=>setBaseUrl(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: t('settings.providerIcon')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "url",
                                    placeholder: "https://example.com/icon.svg",
                                    value: icon,
                                    onChange: (e)=>setIcon(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                    id: "requires-api-key",
                                    checked: requiresApiKey,
                                    onCheckedChange: (checked)=>setRequiresApiKey(checked)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "requires-api-key",
                                    className: "text-sm cursor-pointer",
                                    children: t('settings.requiresApiKey')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2 pt-3 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handleClose,
                                    children: t('settings.cancelEdit')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    onClick: handleAdd,
                                    className: "gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        t('settings.addProviderButton')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Projects/kinder-maic/components/settings/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsDialog",
    ()=>SettingsDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/film.js [app-ssr] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/ai/providers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/utils/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$provider$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/provider-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$provider$2d$config$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/provider-config-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$pdf$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/pdf-settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$pdf$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/pdf/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$image$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/image-settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/image-providers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$video$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/video-settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/media/video-providers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$tts$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/tts-settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/audio/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$asr$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/asr-settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$web$2d$search$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/web-search-settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$web$2d$search$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/web-search/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$general$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/general-settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$model$2d$edit$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/model-edit-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$add$2d$provider$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/components/settings/add-provider-dialog.tsx [app-ssr] (ecmascript)");
'use client';
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
;
;
;
;
;
;
;
;
;
// ─── Provider List Column (reusable) ───
function ProviderListColumn({ providers, configs, selectedId, onSelect, width, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 bg-background flex flex-col",
        style: {
            width
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-3 space-y-1.5",
            children: providers.map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSelect(provider.id),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all border text-left', selectedId === provider.id ? 'bg-primary/5 border-primary/50 shadow-sm' : 'border-transparent hover:bg-muted/50'),
                    children: [
                        provider.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: provider.icon,
                            alt: provider.name,
                            className: "w-5 h-5 rounded",
                            onError: (e)=>{
                                e.target.style.display = 'none';
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            className: "h-5 w-5 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-sm flex-1 truncate",
                            children: provider.name
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        configs[provider.id]?.isServerConfigured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] px-1 py-0 h-4 leading-4 rounded shrink-0 bg-muted text-muted-foreground",
                            children: t('settings.serverConfigured')
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, this)
                    ]
                }, provider.id, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
// ─── Helper: get TTS/ASR provider display name ───
function getTTSProviderName(providerId, t) {
    const names = {
        'openai-tts': t('settings.providerOpenAITTS'),
        'azure-tts': t('settings.providerAzureTTS'),
        'glm-tts': t('settings.providerGLMTTS'),
        'qwen-tts': t('settings.providerQwenTTS'),
        'doubao-tts': t('settings.providerDoubaoTTS'),
        'google-tts': t('settings.providerGoogleTTS'),
        'elevenlabs-tts': t('settings.providerElevenLabsTTS'),
        'browser-native-tts': t('settings.providerBrowserNativeTTS')
    };
    return names[providerId];
}
function getASRProviderName(providerId, t) {
    const names = {
        'openai-whisper': t('settings.providerOpenAIWhisper'),
        'browser-native': t('settings.providerBrowserNative'),
        'qwen-asr': t('settings.providerQwenASR')
    };
    return names[providerId];
}
// ─── Image/Video provider name helpers ───
const IMAGE_PROVIDER_NAMES = {
    seedream: 'providerSeedream',
    'qwen-image': 'providerQwenImage',
    'nano-banana': 'providerNanoBanana',
    'grok-image': 'providerGrokImage'
};
const IMAGE_PROVIDER_ICONS = {
    seedream: '/logos/doubao.svg',
    'qwen-image': '/logos/bailian.svg',
    'nano-banana': '/logos/gemini.svg',
    'grok-image': '/logos/grok.svg'
};
const VIDEO_PROVIDER_NAMES = {
    seedance: 'providerSeedance',
    kling: 'providerKling',
    veo: 'providerVeo',
    sora: 'providerSora',
    'grok-video': 'providerGrokVideo'
};
const VIDEO_PROVIDER_ICONS = {
    seedance: '/logos/doubao.svg',
    kling: '/logos/kling.svg',
    veo: '/logos/gemini.svg',
    sora: '/logos/openai.svg',
    'grok-video': '/logos/grok.svg'
};
function SettingsDialog({ open, onOpenChange, initialSection }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    // Get settings from store
    const providerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.providerId);
    const _modelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.modelId);
    const providersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.providersConfig);
    const pdfProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.pdfProviderId);
    const pdfProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.pdfProvidersConfig);
    const webSearchProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.webSearchProviderId);
    const webSearchProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.webSearchProvidersConfig);
    const imageProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.imageProviderId);
    const imageProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.imageProvidersConfig);
    const videoProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.videoProviderId);
    const videoProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.videoProvidersConfig);
    const ttsProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.ttsProviderId);
    const ttsProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.ttsProvidersConfig);
    const asrProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.asrProviderId);
    const asrProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.asrProvidersConfig);
    // Store actions
    const setModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setModel);
    const setProviderConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setProviderConfig);
    const setProvidersConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setProvidersConfig);
    const setTTSProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setTTSProvider);
    const setASRProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((state)=>state.setASRProvider);
    // Navigation
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('providers');
    const [selectedProviderId, setSelectedProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(providerId);
    const [selectedPdfProviderId, setSelectedPdfProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(pdfProviderId);
    const [selectedWebSearchProviderId, setSelectedWebSearchProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(webSearchProviderId);
    const [selectedImageProviderId, setSelectedImageProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(imageProviderId);
    const [selectedVideoProviderId, setSelectedVideoProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(videoProviderId);
    // Navigate to initialSection when dialog opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open && initialSection) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- Sync section from prop when dialog opens
            setActiveSection(initialSection);
        }
    }, [
        open,
        initialSection
    ]);
    // Model editing state
    const [editingModel, setEditingModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showModelDialog, setShowModelDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Provider deletion confirmation
    const [providerToDelete, setProviderToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add provider dialog
    const [showAddProviderDialog, setShowAddProviderDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Save status indicator
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    // Resizable column widths
    const [sidebarWidth, setSidebarWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(192);
    const [providerListWidth, setProviderListWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(192);
    const [isResizing, setIsResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const resizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleResizeStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, target)=>{
        e.preventDefault();
        const startWidth = target === 'sidebar' ? sidebarWidth : providerListWidth;
        resizeRef.current = {
            target,
            startX: e.clientX,
            startWidth
        };
        setIsResizing(true);
    }, [
        sidebarWidth,
        providerListWidth
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isResizing) return;
        const handleMouseMove = (e)=>{
            if (!resizeRef.current) return;
            const { target, startX, startWidth } = resizeRef.current;
            const delta = e.clientX - startX;
            const newWidth = Math.max(120, Math.min(360, startWidth + delta));
            if (target === 'sidebar') {
                setSidebarWidth(newWidth);
            } else {
                setProviderListWidth(newWidth);
            }
        };
        const handleMouseUp = ()=>{
            resizeRef.current = null;
            setIsResizing(false);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        };
    }, [
        isResizing
    ]);
    const handleSave = ()=>{
        onOpenChange(false);
    };
    const handleProviderSelect = (pid)=>{
        setSelectedProviderId(pid);
    };
    const handleProviderConfigChange = (pid, apiKey, baseUrl, requiresApiKey)=>{
        setProviderConfig(pid, {
            apiKey,
            baseUrl,
            requiresApiKey
        });
    };
    const handleProviderConfigSave = ()=>{
        setSaveStatus('saved');
        setTimeout(()=>setSaveStatus('idle'), 2000);
    };
    const selectedProvider = providersConfig[selectedProviderId] ? {
        id: selectedProviderId,
        name: providersConfig[selectedProviderId].name,
        type: providersConfig[selectedProviderId].type,
        defaultBaseUrl: providersConfig[selectedProviderId].defaultBaseUrl,
        icon: providersConfig[selectedProviderId].icon,
        requiresApiKey: providersConfig[selectedProviderId].requiresApiKey,
        models: providersConfig[selectedProviderId].models
    } : undefined;
    // Handle model editing
    const handleEditModel = (pid, modelIndex)=>{
        const allModels = providersConfig[pid]?.models || [];
        setEditingModel({
            providerId: pid,
            modelIndex,
            model: {
                ...allModels[modelIndex]
            }
        });
        setShowModelDialog(true);
    };
    const handleAddModel = ()=>{
        setEditingModel({
            providerId: selectedProviderId,
            modelIndex: null,
            model: {
                id: '',
                name: '',
                capabilities: {
                    streaming: true,
                    tools: true,
                    vision: false
                }
            }
        });
        setShowModelDialog(true);
    };
    const handleDeleteModel = (pid, modelIndex)=>{
        const currentModels = providersConfig[pid]?.models || [];
        const newModels = currentModels.filter((_, i)=>i !== modelIndex);
        setProviderConfig(pid, {
            models: newModels
        });
    };
    const handleAutoSaveModel = ()=>{
        if (!editingModel) return;
        const { providerId: pid, modelIndex, model } = editingModel;
        if (!model.id.trim()) return;
        const currentModels = providersConfig[pid]?.models || [];
        let newModels;
        let newModelIndex = modelIndex;
        if (modelIndex === null) {
            const existingIndex = currentModels.findIndex((m)=>m.id === model.id);
            if (existingIndex >= 0) {
                newModels = [
                    ...currentModels
                ];
                newModels[existingIndex] = model;
                newModelIndex = existingIndex;
            } else {
                newModels = [
                    ...currentModels,
                    model
                ];
                newModelIndex = newModels.length - 1;
            }
            setProviderConfig(pid, {
                models: newModels
            });
            setEditingModel({
                ...editingModel,
                modelIndex: newModelIndex
            });
        } else {
            newModels = [
                ...currentModels
            ];
            newModels[modelIndex] = model;
            setProviderConfig(pid, {
                models: newModels
            });
        }
    };
    const handleSaveModel = ()=>{
        if (!editingModel) return;
        const { providerId: pid, modelIndex, model } = editingModel;
        if (!model.id.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t('settings.modelIdRequired'));
            return;
        }
        const currentModels = providersConfig[pid]?.models || [];
        let newModels;
        if (modelIndex === null) {
            newModels = [
                ...currentModels,
                model
            ];
        } else {
            newModels = [
                ...currentModels
            ];
            newModels[modelIndex] = model;
        }
        setProviderConfig(pid, {
            models: newModels
        });
        setShowModelDialog(false);
        setEditingModel(null);
    };
    // Handle provider management
    const handleAddProvider = (providerData)=>{
        if (!providerData.name.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t('settings.providerNameRequired'));
            return;
        }
        const newProviderId = `custom-${Date.now()}`;
        const updatedConfig = {
            ...providersConfig,
            [newProviderId]: {
                apiKey: '',
                baseUrl: '',
                models: [],
                name: providerData.name,
                type: providerData.type,
                defaultBaseUrl: providerData.baseUrl || undefined,
                icon: providerData.icon || undefined,
                requiresApiKey: providerData.requiresApiKey,
                isBuiltIn: false
            }
        };
        setProvidersConfig(updatedConfig);
        setShowAddProviderDialog(false);
        setSelectedProviderId(newProviderId);
    };
    const handleDeleteProvider = (pid)=>{
        if (providersConfig[pid]?.isBuiltIn) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t('settings.cannotDeleteBuiltIn'));
            return;
        }
        setProviderToDelete(pid);
    };
    const confirmDeleteProvider = ()=>{
        if (!providerToDelete) return;
        const pid = providerToDelete;
        const updatedConfig = {
            ...providersConfig
        };
        delete updatedConfig[pid];
        setProvidersConfig(updatedConfig);
        if (selectedProviderId === pid) {
            const firstRemainingPid = Object.keys(updatedConfig)[0];
            setSelectedProviderId(firstRemainingPid || 'openai');
        }
        if (providerId === pid) {
            const firstRemainingPid = Object.keys(updatedConfig)[0];
            const firstModel = firstRemainingPid ? updatedConfig[firstRemainingPid]?.serverModels?.[0] || updatedConfig[firstRemainingPid]?.models?.[0]?.id : undefined;
            if (firstRemainingPid && firstModel) {
                setModel(firstRemainingPid, firstModel);
            } else {
                setModel('openai', 'gpt-4o-mini');
            }
        }
        setProviderToDelete(null);
    };
    const handleResetProvider = (pid)=>{
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROVIDERS"][pid];
        if (!provider) return;
        setProviderConfig(pid, {
            models: [
                ...provider.models
            ]
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t('settings.resetSuccess'));
    };
    // Get all providers from providersConfig
    const allProviders = Object.entries(providersConfig).map(([id, config])=>({
            id: id,
            name: config.name,
            type: config.type,
            defaultBaseUrl: config.defaultBaseUrl,
            icon: config.icon,
            requiresApiKey: config.requiresApiKey,
            models: config.models,
            isServerConfigured: config.isServerConfigured
        }));
    // Sections that show a provider list column
    const _hasProviderList = [
        'providers',
        'pdf',
        'web-search',
        'image',
        'video',
        'tts',
        'asr'
    ].includes(activeSection);
    // Get header content based on section
    const getHeaderContent = ()=>{
        switch(activeSection){
            case 'general':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: t('settings.systemSettings')
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                    lineNumber: 501,
                    columnNumber: 16
                }, this);
            case 'providers':
                if (selectedProvider) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            selectedProvider.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: selectedProvider.icon,
                                alt: selectedProvider.name,
                                className: "w-8 h-8 rounded",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 507,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "h-8 w-8 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 516,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: selectedProvider.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 519,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProviderTypeLabel"])(selectedProvider.type, t)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 518,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true);
                }
                return null;
            case 'pdf':
                {
                    const pdfProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$pdf$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDF_PROVIDERS"][selectedPdfProviderId];
                    if (!pdfProvider) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            pdfProvider.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: pdfProvider.icon,
                                alt: pdfProvider.name,
                                className: "w-8 h-8 rounded",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 534,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "h-8 w-8 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 543,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: pdfProvider.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                }
            case 'web-search':
                {
                    const wsProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$web$2d$search$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_SEARCH_PROVIDERS"][selectedWebSearchProviderId];
                    if (!wsProvider) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            wsProvider.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: wsProvider.icon,
                                alt: wsProvider.name,
                                className: "w-8 h-8 rounded",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 555,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "h-8 w-8 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 564,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: wsProvider.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                }
            case 'image':
                {
                    const imgProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_PROVIDERS"][selectedImageProviderId];
                    const imgIcon = IMAGE_PROVIDER_ICONS[selectedImageProviderId];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            imgIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imgIcon,
                                alt: imgProvider?.name,
                                className: "w-8 h-8 rounded",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 576,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "h-8 w-8 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 585,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: t(`settings.${IMAGE_PROVIDER_NAMES[selectedImageProviderId]}`) || imgProvider?.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 587,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                }
            case 'video':
                {
                    const vidProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIDEO_PROVIDERS"][selectedVideoProviderId];
                    const vidIcon = VIDEO_PROVIDER_ICONS[selectedVideoProviderId];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            vidIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: vidIcon,
                                alt: vidProvider?.name,
                                className: "w-8 h-8 rounded",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 599,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "h-8 w-8 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 608,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: t(`settings.${VIDEO_PROVIDER_NAMES[selectedVideoProviderId]}`) || vidProvider?.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                }
            case 'tts':
                {
                    const ttsIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"][ttsProviderId]?.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            ttsIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: ttsIcon,
                                alt: "",
                                className: "w-8 h-8 rounded",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 621,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                className: "h-6 w-6 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 630,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: getTTSProviderName(ttsProviderId, t)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 632,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                }
            case 'asr':
                {
                    const asrIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ASR_PROVIDERS"][asrProviderId]?.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            asrIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: asrIcon,
                                alt: "",
                                className: "w-8 h-8 rounded",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 641,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                className: "h-6 w-6 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 650,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: getASRProviderName(asrProviderId, t)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 652,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                }
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "h-[85vh] p-0 gap-0 block",
                showCloseButton: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "sr-only",
                        children: t('settings.title')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        className: "sr-only",
                        children: t('settings.description')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 bg-muted/30 p-3 space-y-1",
                                style: {
                                    width: sidebarWidth
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSection('providers'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left min-w-0', activeSection === 'providers' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 678,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: t('settings.providers')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 679,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 669,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSection('image'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left min-w-0', activeSection === 'image' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 691,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: t('settings.imageSettings')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 692,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 682,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSection('video'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left min-w-0', activeSection === 'video' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 704,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: t('settings.videoSettings')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 705,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 695,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSection('tts'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left min-w-0', activeSection === 'tts' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 717,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: t('settings.ttsSettings')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 718,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 708,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSection('asr'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left min-w-0', activeSection === 'asr' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 730,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: t('settings.asrSettings')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 731,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 721,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSection('pdf'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left min-w-0', activeSection === 'pdf' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 743,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: t('settings.pdfSettings')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 744,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 734,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSection('web-search'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left min-w-0', activeSection === 'web-search' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 756,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: t('settings.webSearchSettings')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 757,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 747,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSection('general'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left min-w-0', activeSection === 'general' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 769,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: t('settings.systemSettings')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 770,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 760,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onMouseDown: (e)=>handleResizeStart(e, 'sidebar'),
                                className: "flex-shrink-0 w-[5px] cursor-col-resize group flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-full bg-border group-hover:bg-primary/50 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                    lineNumber: 779,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 775,
                                columnNumber: 11
                            }, this),
                            activeSection === 'providers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$provider$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderList"], {
                                        providers: allProviders,
                                        selectedProviderId: selectedProviderId,
                                        onSelect: handleProviderSelect,
                                        onAddProvider: ()=>setShowAddProviderDialog(true),
                                        width: providerListWidth
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 785,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseDown: (e)=>handleResizeStart(e, 'providerList'),
                                        className: "flex-shrink-0 w-[5px] cursor-col-resize group flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-full bg-border group-hover:bg-primary/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                            lineNumber: 796,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 792,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            activeSection === 'pdf' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderListColumn, {
                                        providers: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$pdf$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDF_PROVIDERS"]),
                                        configs: pdfProvidersConfig,
                                        selectedId: selectedPdfProviderId,
                                        onSelect: setSelectedPdfProviderId,
                                        width: providerListWidth,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseDown: (e)=>handleResizeStart(e, 'providerList'),
                                        className: "flex-shrink-0 w-[5px] cursor-col-resize group flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-full bg-border group-hover:bg-primary/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                            lineNumber: 815,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 811,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            activeSection === 'web-search' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderListColumn, {
                                        providers: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$web$2d$search$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_SEARCH_PROVIDERS"]),
                                        configs: webSearchProvidersConfig,
                                        selectedId: selectedWebSearchProviderId,
                                        onSelect: setSelectedWebSearchProviderId,
                                        width: providerListWidth,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 822,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseDown: (e)=>handleResizeStart(e, 'providerList'),
                                        className: "flex-shrink-0 w-[5px] cursor-col-resize group flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-full bg-border group-hover:bg-primary/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                            lineNumber: 834,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 830,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            activeSection === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderListColumn, {
                                        providers: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$image$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_PROVIDERS"]).map((p)=>({
                                                id: p.id,
                                                name: t(`settings.${IMAGE_PROVIDER_NAMES[p.id]}`) || p.name,
                                                icon: IMAGE_PROVIDER_ICONS[p.id]
                                            })),
                                        configs: imageProvidersConfig,
                                        selectedId: selectedImageProviderId,
                                        onSelect: setSelectedImageProviderId,
                                        width: providerListWidth,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 841,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseDown: (e)=>handleResizeStart(e, 'providerList'),
                                        className: "flex-shrink-0 w-[5px] cursor-col-resize group flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-full bg-border group-hover:bg-primary/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                            lineNumber: 857,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 853,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            activeSection === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderListColumn, {
                                        providers: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$media$2f$video$2d$providers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIDEO_PROVIDERS"]).map((p)=>({
                                                id: p.id,
                                                name: t(`settings.${VIDEO_PROVIDER_NAMES[p.id]}`) || p.name,
                                                icon: VIDEO_PROVIDER_ICONS[p.id]
                                            })),
                                        configs: videoProvidersConfig,
                                        selectedId: selectedVideoProviderId,
                                        onSelect: setSelectedVideoProviderId,
                                        width: providerListWidth,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 864,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseDown: (e)=>handleResizeStart(e, 'providerList'),
                                        className: "flex-shrink-0 w-[5px] cursor-col-resize group flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-full bg-border group-hover:bg-primary/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                            lineNumber: 880,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 876,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            activeSection === 'tts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderListColumn, {
                                        providers: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTS_PROVIDERS"]).map((p)=>({
                                                id: p.id,
                                                name: getTTSProviderName(p.id, t),
                                                icon: p.icon
                                            })),
                                        configs: ttsProvidersConfig,
                                        selectedId: ttsProviderId,
                                        onSelect: setTTSProvider,
                                        width: providerListWidth,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 887,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseDown: (e)=>handleResizeStart(e, 'providerList'),
                                        className: "flex-shrink-0 w-[5px] cursor-col-resize group flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-full bg-border group-hover:bg-primary/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                            lineNumber: 903,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 899,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            activeSection === 'asr' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderListColumn, {
                                        providers: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$audio$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ASR_PROVIDERS"]).map((p)=>({
                                                id: p.id,
                                                name: getASRProviderName(p.id, t),
                                                icon: p.icon
                                            })),
                                        configs: asrProvidersConfig,
                                        selectedId: asrProviderId,
                                        onSelect: setASRProvider,
                                        width: providerListWidth,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 910,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseDown: (e)=>handleResizeStart(e, 'providerList'),
                                        className: "flex-shrink-0 w-[5px] cursor-col-resize group flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-full bg-border group-hover:bg-primary/50 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                            lineNumber: 926,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 922,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col overflow-hidden min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-5 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: getHeaderContent()
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 935,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    activeSection === 'providers' && !providersConfig[selectedProviderId]?.isBuiltIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        className: "h-7 px-2 text-destructive hover:text-destructive",
                                                        onClick: ()=>handleDeleteProvider(selectedProviderId),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                            lineNumber: 945,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                        lineNumber: 939,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>onOpenChange(false),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                            lineNumber: 949,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                        lineNumber: 948,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 936,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 934,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto p-5",
                                        children: [
                                            activeSection === 'general' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$general$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeneralSettings"], {}, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 956,
                                                columnNumber: 47
                                            }, this),
                                            activeSection === 'providers' && selectedProvider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$provider$2d$config$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderConfigPanel"], {
                                                provider: selectedProvider,
                                                initialApiKey: providersConfig[selectedProviderId]?.apiKey || '',
                                                initialBaseUrl: providersConfig[selectedProviderId]?.baseUrl || '',
                                                initialRequiresApiKey: providersConfig[selectedProviderId]?.requiresApiKey ?? true,
                                                providersConfig: providersConfig,
                                                onConfigChange: (apiKey, baseUrl, requiresApiKey)=>handleProviderConfigChange(selectedProviderId, apiKey, baseUrl, requiresApiKey),
                                                onSave: handleProviderConfigSave,
                                                onEditModel: (index)=>handleEditModel(selectedProviderId, index),
                                                onDeleteModel: (index)=>handleDeleteModel(selectedProviderId, index),
                                                onAddModel: handleAddModel,
                                                onResetToDefault: ()=>handleResetProvider(selectedProviderId),
                                                isBuiltIn: providersConfig[selectedProviderId]?.isBuiltIn ?? true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 959,
                                                columnNumber: 17
                                            }, this),
                                            activeSection === 'pdf' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$pdf$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDFSettings"], {
                                                selectedProviderId: selectedPdfProviderId
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 980,
                                                columnNumber: 17
                                            }, this),
                                            activeSection === 'web-search' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$web$2d$search$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebSearchSettings"], {
                                                selectedProviderId: selectedWebSearchProviderId
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 983,
                                                columnNumber: 17
                                            }, this),
                                            activeSection === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$image$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageSettings"], {
                                                selectedProviderId: selectedImageProviderId
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 986,
                                                columnNumber: 17
                                            }, this),
                                            activeSection === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$video$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoSettings"], {
                                                selectedProviderId: selectedVideoProviderId
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 989,
                                                columnNumber: 17
                                            }, this),
                                            activeSection === 'tts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$tts$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TTSSettings"], {
                                                selectedProviderId: ttsProviderId
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 991,
                                                columnNumber: 43
                                            }, this),
                                            activeSection === 'asr' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$asr$2d$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ASRSettings"], {
                                                selectedProviderId: asrProviderId
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 992,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 955,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-end gap-3 px-5 py-3 border-t bg-muted/30",
                                        children: [
                                            saveStatus === 'saved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                        lineNumber: 999,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('settings.saveSuccess')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                        lineNumber: 1000,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 998,
                                                columnNumber: 17
                                            }, this),
                                            saveStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                        lineNumber: 1005,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('settings.saveFailed')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 1004,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>onOpenChange(false),
                                                children: t('settings.close')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                onClick: handleSave,
                                                children: t('settings.save')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                        lineNumber: 996,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                lineNumber: 932,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                lineNumber: 663,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$model$2d$edit$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModelEditDialog"], {
                open: showModelDialog,
                onOpenChange: setShowModelDialog,
                editingModel: editingModel,
                setEditingModel: setEditingModel,
                onSave: handleSaveModel,
                onAutoSave: handleAutoSaveModel,
                providerId: selectedProviderId,
                apiKey: providersConfig[selectedProviderId]?.apiKey || '',
                baseUrl: providersConfig[selectedProviderId]?.baseUrl,
                providerType: providersConfig[selectedProviderId]?.type,
                requiresApiKey: providersConfig[selectedProviderId]?.requiresApiKey
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                lineNumber: 1021,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$settings$2f$add$2d$provider$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddProviderDialog"], {
                open: showAddProviderDialog,
                onOpenChange: setShowAddProviderDialog,
                onAdd: handleAddProvider
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                lineNumber: 1036,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: providerToDelete !== null,
                onOpenChange: (open)=>!open && setProviderToDelete(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    children: t('settings.deleteProvider')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    children: t('settings.deleteProviderConfirm')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                    lineNumber: 1050,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                            lineNumber: 1048,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    children: t('settings.cancelEdit')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                    lineNumber: 1053,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: confirmDeleteProvider,
                                    children: t('settings.deleteProvider')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                                    lineNumber: 1054,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                            lineNumber: 1052,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                    lineNumber: 1047,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
                lineNumber: 1043,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Projects/kinder-maic/components/settings/index.tsx",
        lineNumber: 662,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Projects_kinder-maic_components_settings_901bdf6c._.js.map