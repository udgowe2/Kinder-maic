(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,512530,(e,t,a)=>{t.exports=e.r(823258)},918617,e=>{"use strict";let t=(0,e.i(166785).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>t],918617)},514021,12140,385578,e=>{"use strict";var t=e.i(959018),a=e.i(787082);let r=["wb_open","wb_close","wb_draw_text","wb_draw_shape","wb_draw_chart","wb_draw_latex","wb_draw_table","wb_draw_line","wb_clear","wb_delete"],n={teacher:["spotlight","laser","play_video",...r],assistant:[...r],student:[...r]};function i(e){return n[e]||[...r]}let s="/avatars/user.png";e.s(["USER_AVATAR",0,s],12140);let l=(0,t.create)()((0,a.persist)(e=>({avatar:"/avatars/user.png",nickname:"",bio:"",setAvatar:t=>e({avatar:t}),setNickname:t=>e({nickname:t}),setBio:t=>e({bio:t})}),{name:"user-profile-storage"}));e.s(["useUserProfileStore",0,l],385578);let d={"default-1":{id:"default-1",name:"Professor Eule",role:"teacher",persona:`Du bist Professor Eule 🦉 — der Hauptlehrer in diesem Unterricht.
Du unterrichtest Kinder in Z\xfcrich im Alter von 9–14 Jahren, basierend auf dem Lehrplan 21.

Dein Unterrichtsstil:
- Erkl\xe4re alles auf Deutsch, klar, freundlich und kindgerecht
- Baue Erkl\xe4rungen Schritt f\xfcr Schritt auf — vom Einfachen zum Schwierigen
- Benutze Beispiele aus dem Alltag Schweizer Kinder (Berge, Z\xfcrich, Schule, Tiere, Sport)
- Stelle Fragen um zu pr\xfcfen ob die Kinder verstehen — nicht nur vortragen
- Sei geduldig, ermutigend und positiv — Fehler sind Teil des Lernens
- Benutze die Tafel und Folien um Ideen zu visualisieren
- Halte Erkl\xe4rungen kurz und spannend — Kinder verlieren schnell die Aufmerksamkeit

Ton: Warm, geduldig, begeistert. Du liebst es zu unterrichten und das sp\xfcren die Kinder.`},"default-2":{id:"default-2",name:"Lena",role:"student",persona:`Du bist Lena 👧 — eine neugierige Mitsch\xfclerin, 11 Jahre alt, aus Z\xfcrich.

Deine Pers\xf6nlichkeit:
- Du bist wissbegierig und stellst gerne Fragen wenn etwas unklar ist
- Du denkst laut nach und hilfst so anderen Kindern die auch verwirrt sind
- Manchmal machst du Fehler — und das ist okay, du lernst daraus
- Du freust dich wenn du etwas Neues verstehst
- Du sprichst immer auf Deutsch, nat\xfcrlich und kindgerecht
- Du beziehst dich auf Beispiele aus deinem Alltag in Z\xfcrich`},"default-3":{id:"default-3",name:"Max",role:"student",persona:`Du bist Max 👦 — ein lustiger und motivierter Mitsch\xfcler, 12 Jahre alt, aus Z\xfcrich.

Deine Pers\xf6nlichkeit:
- Du liebst praktische Beispiele aus dem echten Leben
- Du machst manchmal Witze um die Stimmung aufzulockern — aber immer nett
- Du bist begeistert wenn Mathe oder Wissenschaft mit coolen Dingen zu tun hat
- Du stellst manchmal freche aber clevere Fragen
- Du sprichst immer auf Deutsch, locker und kindgerecht
- Du motivierst deine Mitsch\xfcler wenn es schwierig wird: "Das schaffen wir!"`}};function u(){return Object.values(d).map(e=>({id:e.id,name:e.name,role:e.role,persona:e.persona}))}let c=(0,t.create)()((0,a.persist)((e,t)=>({agents:{...d},addAgent:t=>e(e=>({agents:{...e.agents,[t.id]:t}})),updateAgent:(t,a)=>e(e=>({agents:{...e.agents,[t]:{...e.agents[t],...a,updatedAt:new Date}}})),deleteAgent:t=>e(e=>{let{[t]:a,...r}=e.agents;return{agents:r}}),getAgent:e=>t().agents[e],listAgents:()=>Object.values(t().agents)}),{name:"agent-registry-storage",version:11,migrate:e=>e,merge:(e,t)=>{let a=e?.agents||{},r={...d};for(let[e,t]of Object.entries(a))e.startsWith("default-")||t.isGenerated||(r[e]=t);return{...t,agents:r}}}));function o(e,t){let a=c.getState(),r=[],n=!1,i=e.map(e=>a.getAgent(e)).filter(e=>null!=e);for(let e of(i.sort((e,t)=>"teacher"===e.role&&"teacher"!==t.role?-1:"teacher"!==e.role&&"teacher"===t.role?1:(t.priority??0)-(e.priority??0)),i)){let a="student";n||(a="teacher",n=!0);let i=t?.(`settings.agentNames.${e.id}`),s=i&&i!==`settings.agentNames.${e.id}`?i:e.name;r.push({id:e.id,name:s,role:a,avatar:e.avatar,isOnline:!0,isSpeaking:!1})}let d=l.getState(),u=d.nickname||t?.("common.you")||"You",o=d.avatar||s;return r.push({id:"user-1",name:u,role:"user",avatar:o,isOnline:!0,isSpeaking:!1}),r}async function g(t){let{getGeneratedAgentsByStageId:a}=await e.A(632692),r=await a(t),n=c.getState();for(let e of n.listAgents())e.isGenerated&&n.deleteAgent(e.id);if(0===r.length)return[];let s=[];for(let e of r)n.addAgent({...e,allowedActions:i(e.role),isDefault:!1,isGenerated:!0,boundStageId:e.stageId,createdAt:new Date(e.createdAt),updatedAt:new Date(e.createdAt)}),s.push(e.id);return s}async function h(t,a){let{db:r}=await e.A(632692);await r.generatedAgents.where("stageId").equals(t).delete();let n=c.getState();for(let e of n.listAgents())e.isGenerated&&n.deleteAgent(e.id);let s=a.map(e=>({...e,stageId:t,createdAt:Date.now()}));for(let e of(await r.generatedAgents.bulkPut(s),s)){let{voiceConfig:a,...r}=e;n.addAgent({...r,allowedActions:i(e.role),isDefault:!1,isGenerated:!0,boundStageId:t,createdAt:new Date(e.createdAt),updatedAt:new Date(e.createdAt),...a?{voiceConfig:{providerId:a.providerId,voiceId:a.voiceId}}:{}})}return s.map(e=>e.id)}e.s(["agentsToParticipants",()=>o,"getDefaultAgents",()=>u,"loadGeneratedAgentsForStage",()=>g,"saveGeneratedAgents",()=>h,"useAgentRegistry",0,c],514021)},632692,e=>{e.v(e=>Promise.resolve().then(()=>e(389645)))},302787,e=>{e.v(t=>Promise.all(["static/chunks/43bd8638ba98cb62.js"].map(t=>e.l(t))).then(()=>t(496014)))},300940,e=>{e.v(e=>Promise.resolve().then(()=>e(514021)))}]);