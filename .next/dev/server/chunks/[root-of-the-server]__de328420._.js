module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/Projects/kinder-maic/lib/server/provider-config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServerASRProviders",
    ()=>getServerASRProviders,
    "getServerImageProviders",
    ()=>getServerImageProviders,
    "getServerPDFProviders",
    ()=>getServerPDFProviders,
    "getServerProviders",
    ()=>getServerProviders,
    "getServerTTSProviders",
    ()=>getServerTTSProviders,
    "getServerVideoProviders",
    ()=>getServerVideoProviders,
    "getServerWebSearchProviders",
    ()=>getServerWebSearchProviders,
    "resolveASRApiKey",
    ()=>resolveASRApiKey,
    "resolveASRBaseUrl",
    ()=>resolveASRBaseUrl,
    "resolveApiKey",
    ()=>resolveApiKey,
    "resolveBaseUrl",
    ()=>resolveBaseUrl,
    "resolveImageApiKey",
    ()=>resolveImageApiKey,
    "resolveImageBaseUrl",
    ()=>resolveImageBaseUrl,
    "resolvePDFApiKey",
    ()=>resolvePDFApiKey,
    "resolvePDFBaseUrl",
    ()=>resolvePDFBaseUrl,
    "resolveProxy",
    ()=>resolveProxy,
    "resolveTTSApiKey",
    ()=>resolveTTSApiKey,
    "resolveTTSBaseUrl",
    ()=>resolveTTSBaseUrl,
    "resolveVideoApiKey",
    ()=>resolveVideoApiKey,
    "resolveVideoBaseUrl",
    ()=>resolveVideoBaseUrl,
    "resolveWebSearchApiKey",
    ()=>resolveWebSearchApiKey
]);
/**
 * Server-side Provider Configuration
 *
 * Loads provider configs from YAML (primary) + environment variables (fallback).
 * Keys never leave the server — only provider IDs and metadata are exposed via API.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$js$2d$yaml$40$4$2e$1$2e$1$2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/js-yaml@4.1.1/node_modules/js-yaml/dist/js-yaml.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-route] (ecmascript)");
;
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('ServerProviderConfig');
// ---------------------------------------------------------------------------
// Env-var prefix mappings
// ---------------------------------------------------------------------------
const LLM_ENV_MAP = {
    OPENAI: 'openai',
    ANTHROPIC: 'anthropic',
    GOOGLE: 'google',
    DEEPSEEK: 'deepseek',
    QWEN: 'qwen',
    KIMI: 'kimi',
    MINIMAX: 'minimax',
    GLM: 'glm',
    SILICONFLOW: 'siliconflow',
    DOUBAO: 'doubao',
    GROK: 'grok'
};
const TTS_ENV_MAP = {
    GOOGLE_TTS: 'google-tts',
    TTS_OPENAI: 'openai-tts',
    TTS_AZURE: 'azure-tts',
    TTS_GLM: 'glm-tts',
    TTS_QWEN: 'qwen-tts',
    TTS_DOUBAO: 'doubao-tts',
    TTS_ELEVENLABS: 'elevenlabs-tts'
};
const ASR_ENV_MAP = {
    ASR_OPENAI: 'openai-whisper',
    ASR_QWEN: 'qwen-asr'
};
const PDF_ENV_MAP = {
    PDF_UNPDF: 'unpdf',
    PDF_MINERU: 'mineru'
};
const IMAGE_ENV_MAP = {
    IMAGE_SEEDREAM: 'seedream',
    IMAGE_QWEN_IMAGE: 'qwen-image',
    IMAGE_NANO_BANANA: 'nano-banana',
    IMAGE_GROK: 'grok-image'
};
const VIDEO_ENV_MAP = {
    VIDEO_SEEDANCE: 'seedance',
    VIDEO_KLING: 'kling',
    VIDEO_VEO: 'veo',
    VIDEO_SORA: 'sora',
    VIDEO_GROK: 'grok-video'
};
const WEB_SEARCH_ENV_MAP = {
    TAVILY: 'tavily'
};
function loadYamlFile(filename) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), filename);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) return {};
        const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf-8');
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$js$2d$yaml$40$4$2e$1$2e$1$2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].load(raw);
        if (!parsed || typeof parsed !== 'object') return {};
        return parsed;
    } catch (e) {
        log.warn(`[ServerProviderConfig] Failed to load ${filename}:`, e);
        return {};
    }
}
// ---------------------------------------------------------------------------
// Env-var helpers
// ---------------------------------------------------------------------------
function loadEnvSection(envMap, yamlSection, { requiresBaseUrl = false } = {}) {
    const result = {};
    // First, add everything from YAML as defaults
    if (yamlSection) {
        for (const [id, entry] of Object.entries(yamlSection)){
            const hasKey = !!entry?.apiKey;
            const hasUrl = !!entry?.baseUrl;
            if (requiresBaseUrl ? hasUrl : hasKey) {
                result[id] = {
                    apiKey: entry.apiKey || '',
                    baseUrl: entry.baseUrl,
                    models: entry.models,
                    proxy: entry.proxy
                };
            }
        }
    }
    // Then, apply env vars (env takes priority over YAML)
    for (const [prefix, providerId] of Object.entries(envMap)){
        const envApiKey = process.env[`${prefix}_API_KEY`] || undefined;
        const envBaseUrl = process.env[`${prefix}_BASE_URL`] || undefined;
        const envModelsStr = process.env[`${prefix}_MODELS`];
        const envModels = envModelsStr ? envModelsStr.split(',').map((m)=>m.trim()).filter(Boolean) : undefined;
        if (result[providerId]) {
            // YAML entry exists — env vars override individual fields
            if (envApiKey) result[providerId].apiKey = envApiKey;
            if (envBaseUrl) result[providerId].baseUrl = envBaseUrl;
            if (envModels) result[providerId].models = envModels;
            continue;
        }
        if (requiresBaseUrl ? !envBaseUrl : !envApiKey) continue;
        result[providerId] = {
            apiKey: envApiKey || '',
            baseUrl: envBaseUrl,
            models: envModels
        };
    }
    return result;
}
// ---------------------------------------------------------------------------
// Module-level cache (process singleton)
// ---------------------------------------------------------------------------
const DEFAULT_FILENAME = 'server-providers.yml';
/** Cache keyed by YAML filename (empty string = default file). */ const _configs = new Map();
function buildConfig(yamlData) {
    return {
        providers: loadEnvSection(LLM_ENV_MAP, yamlData.providers),
        tts: loadEnvSection(TTS_ENV_MAP, yamlData.tts),
        asr: loadEnvSection(ASR_ENV_MAP, yamlData.asr),
        pdf: loadEnvSection(PDF_ENV_MAP, yamlData.pdf, {
            requiresBaseUrl: true
        }),
        image: loadEnvSection(IMAGE_ENV_MAP, yamlData.image),
        video: loadEnvSection(VIDEO_ENV_MAP, yamlData.video),
        webSearch: loadEnvSection(WEB_SEARCH_ENV_MAP, yamlData['web-search'])
    };
}
function logConfig(config, label) {
    const counts = [
        Object.keys(config.providers).length,
        Object.keys(config.tts).length,
        Object.keys(config.asr).length,
        Object.keys(config.pdf).length,
        Object.keys(config.image).length,
        Object.keys(config.video).length,
        Object.keys(config.webSearch).length
    ];
    if (counts.some((c)=>c > 0)) {
        log.info(`[ServerProviderConfig] Loaded (${label}): ${counts[0]} LLM, ${counts[1]} TTS, ${counts[2]} ASR, ${counts[3]} PDF, ${counts[4]} Image, ${counts[5]} Video, ${counts[6]} WebSearch providers`);
    }
}
function getConfig() {
    const cached = _configs.get('');
    if (cached) return cached;
    const yamlData = loadYamlFile(DEFAULT_FILENAME);
    const config = buildConfig(yamlData);
    logConfig(config, DEFAULT_FILENAME);
    _configs.set('', config);
    return config;
}
function getServerProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.providers)){
        result[id] = {};
        if (entry.models && entry.models.length > 0) result[id].models = entry.models;
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolveApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().providers[providerId]?.apiKey || '';
}
function resolveBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().providers[providerId]?.baseUrl;
}
function resolveProxy(providerId) {
    return getConfig().providers[providerId]?.proxy;
}
function getServerTTSProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.tts)){
        result[id] = {};
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolveTTSApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().tts[providerId]?.apiKey || '';
}
function resolveTTSBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().tts[providerId]?.baseUrl;
}
function getServerASRProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.asr)){
        result[id] = {};
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolveASRApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().asr[providerId]?.apiKey || '';
}
function resolveASRBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().asr[providerId]?.baseUrl;
}
function getServerPDFProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.pdf)){
        result[id] = {};
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolvePDFApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().pdf[providerId]?.apiKey || '';
}
function resolvePDFBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().pdf[providerId]?.baseUrl;
}
function getServerImageProviders() {
    const cfg = getConfig();
    const result = {};
    for (const id of Object.keys(cfg.image)){
        result[id] = {};
    }
    return result;
}
function resolveImageApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().image[providerId]?.apiKey || '';
}
function resolveImageBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().image[providerId]?.baseUrl;
}
function getServerVideoProviders() {
    const cfg = getConfig();
    const result = {};
    for (const id of Object.keys(cfg.video)){
        result[id] = {};
    }
    return result;
}
function resolveVideoApiKey(providerId, clientKey) {
    if (clientKey) return clientKey;
    return getConfig().video[providerId]?.apiKey || '';
}
function resolveVideoBaseUrl(providerId, clientBaseUrl) {
    if (clientBaseUrl) return clientBaseUrl;
    return getConfig().video[providerId]?.baseUrl;
}
function getServerWebSearchProviders() {
    const cfg = getConfig();
    const result = {};
    for (const [id, entry] of Object.entries(cfg.webSearch)){
        result[id] = {};
        if (entry.baseUrl) result[id].baseUrl = entry.baseUrl;
    }
    return result;
}
function resolveWebSearchApiKey(clientKey) {
    if (clientKey) return clientKey;
    const serverKey = getConfig().webSearch.tavily?.apiKey;
    if (serverKey) return serverKey;
    return process.env.TAVILY_API_KEY || '';
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Projects/kinder-maic/lib/server/api-response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_ERROR_CODES",
    ()=>API_ERROR_CODES,
    "apiError",
    ()=>apiError,
    "apiSuccess",
    ()=>apiSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/server.js [app-route] (ecmascript)");
;
const API_ERROR_CODES = {
    MISSING_REQUIRED_FIELD: 'MISSING_REQUIRED_FIELD',
    MISSING_API_KEY: 'MISSING_API_KEY',
    INVALID_REQUEST: 'INVALID_REQUEST',
    INVALID_URL: 'INVALID_URL',
    REDIRECT_NOT_ALLOWED: 'REDIRECT_NOT_ALLOWED',
    CONTENT_SENSITIVE: 'CONTENT_SENSITIVE',
    UPSTREAM_ERROR: 'UPSTREAM_ERROR',
    GENERATION_FAILED: 'GENERATION_FAILED',
    TRANSCRIPTION_FAILED: 'TRANSCRIPTION_FAILED',
    PARSE_FAILED: 'PARSE_FAILED',
    INTERNAL_ERROR: 'INTERNAL_ERROR'
};
function apiError(code, status, error, details) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        errorCode: code,
        error,
        ...details ? {
            details
        } : {}
    }, {
        status
    });
}
function apiSuccess(data, status = 200) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        ...data
    }, {
        status
    });
}
}),
"[project]/Documents/Projects/kinder-maic/app/api/server-providers/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/server/provider-config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/server/api-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/lib/logger.ts [app-route] (ecmascript)");
;
;
;
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('ServerProviders');
async function GET() {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])({
            providers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerProviders"])(),
            tts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerTTSProviders"])(),
            asr: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerASRProviders"])(),
            pdf: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerPDFProviders"])(),
            image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerImageProviders"])(),
            video: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerVideoProviders"])(),
            webSearch: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$provider$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerWebSearchProviders"])()
        });
    } catch (error) {
        log.error('Error fetching server providers:', error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$lib$2f$server$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('INTERNAL_ERROR', 500, error instanceof Error ? error.message : 'Unknown error');
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__de328420._.js.map