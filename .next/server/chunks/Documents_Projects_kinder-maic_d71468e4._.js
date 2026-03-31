module.exports=[909446,e=>{"use strict";let t=e=>r=>{try{let n=e(r);if(n instanceof Promise)return n;return{then:e=>t(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:r=>t(r)(e)}}},r=(e,r)=>(n,i,a)=>{let s,l={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var t;let n=e=>null===e?null:JSON.parse(e,void 0),i=null!=(t=r.getItem(e))?t:null;return i instanceof Promise?i.then(n):n(i)},setItem:(e,t)=>r.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>r.removeItem(e)}}(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...r},u=!1,d=0,c=new Set,o=new Set,h=l.storage;if(!h)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),n(...e)},i,a);let g=()=>{let e=l.partialize({...i()});return h.setItem(l.name,{state:e,version:l.version})},m=a.setState;a.setState=(e,t)=>(m(e,t),g());let f=e((...e)=>(n(...e),g()),i,a);a.getInitialState=()=>f;let v=()=>{var e,r;if(!h)return;let a=++d;u=!1,c.forEach(e=>{var t;return e(null!=(t=i())?t:f)});let m=(null==(r=l.onRehydrateStorage)?void 0:r.call(l,null!=(e=i())?e:f))||void 0;return t(h.getItem.bind(h))(l.name).then(e=>{if(e)if("number"!=typeof e.version||e.version===l.version)return[!1,e.state];else{if(l.migrate){let t=l.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;if(a!==d)return;let[r,u]=e;if(n(s=l.merge(u,null!=(t=i())?t:f),!0),r)return g()}).then(()=>{a===d&&(null==m||m(s,void 0),s=i(),u=!0,o.forEach(e=>e(s)))}).catch(e=>{a===d&&(null==m||m(void 0,e))})};return a.persist={setOptions:e=>{l={...l,...e},e.storage&&(h=e.storage)},clearStorage:()=>{null==h||h.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>v(),hasHydrated:()=>u,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(o.add(e),()=>{o.delete(e)})},l.skipHydration||v(),s||f};e.s(["persist",()=>r])},111903,e=>{"use strict";var t=e.i(168901),r=e.i(909446);let n=["wb_open","wb_close","wb_draw_text","wb_draw_shape","wb_draw_chart","wb_draw_latex","wb_draw_table","wb_draw_line","wb_clear","wb_delete"];[...n],[...n],[...n];(0,t.create)()((0,r.persist)(e=>({avatar:"/avatars/user.png",nickname:"",bio:"",setAvatar:t=>e({avatar:t}),setNickname:t=>e({nickname:t}),setBio:t=>e({bio:t})}),{name:"user-profile-storage"}));let i={"default-1":{id:"default-1",name:"Professor Eule",role:"teacher",persona:`Du bist Professor Eule 🦉 — der Hauptlehrer in diesem Unterricht.
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
- Du motivierst deine Mitsch\xfcler wenn es schwierig wird: "Das schaffen wir!"`}};function a(){return Object.values(i).map(e=>({id:e.id,name:e.name,role:e.role,persona:e.persona}))}let s=(0,t.create)()((0,r.persist)((e,t)=>({agents:{...i},addAgent:t=>e(e=>({agents:{...e.agents,[t.id]:t}})),updateAgent:(t,r)=>e(e=>({agents:{...e.agents,[t]:{...e.agents[t],...r,updatedAt:new Date}}})),deleteAgent:t=>e(e=>{let{[t]:r,...n}=e.agents;return{agents:n}}),getAgent:e=>t().agents[e],listAgents:()=>Object.values(t().agents)}),{name:"agent-registry-storage",version:11,migrate:e=>e,merge:(e,t)=>{let r=e?.agents||{},n={...i};for(let[e,t]of Object.entries(r))e.startsWith("default-")||t.isGenerated||(n[e]=t);return{...t,agents:n}}}));e.s(["getDefaultAgents",()=>a,"useAgentRegistry",0,s],111903)}];

//# sourceMappingURL=Documents_Projects_kinder-maic_d71468e4._.js.map