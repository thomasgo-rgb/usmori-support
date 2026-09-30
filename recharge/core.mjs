export const TYPES=['solve','listen','hug','quiet'];
export const CONVERSATION_TYPES=['talk','pause','write','walk'];
export const catalog=[
{id:'recharge-01',slug:'recharge',category:'comfort',image:'hug',questions:8,date:'2026-09-28',title:{ko:'나는 어떤 위로에\n충전될까?',ja:'わたしの心は、\n何で充電される？',en:'What recharges\nmy heart?'},description:{ko:'마음 배터리가 깜빡일 때,\n나에게 꼭 맞는 다정함을 찾아요.',ja:'心の電池が切れそうなとき。\n自分に合うやさしさを見つけよう。',en:'When your heart is running low,\nfind the kindness that feels right for you.'}},
{id:'conversation-02',slug:'conversation',category:'conversation',image:'listen',questions:8,date:'2026-09-30',title:{ko:'우리의 대화\n속도는?',ja:'ふたりの会話の\nペースは？',en:'What’s our\nconversation pace?'},description:{ko:'바로 말하기, 잠깐 쉬기, 글로 쓰기.\n내 마음이 편하게 열리는 방식을 찾아요.',ja:'すぐ話す、ひと息つく、書いてみる。\n心を開きやすい方法を見つけよう。',en:'Talk now, take a pause, or write it down.\nFind a comfortable way to open up.'}}
];
export function quizId(value){return catalog.find(q=>q.id===value||q.slug===value)?.id||'recharge-01'}
export function typesFor(id='recharge-01'){return quizId(id)==='conversation-02'?CONVERSATION_TYPES:TYPES}
export function score(answers,id='recharge-01'){const types=typesFor(id);if(!Array.isArray(answers)||answers.length!==8||[...answers].some(a=>!types.includes(a)))throw new Error('Complete eight answers first');const counts=Object.fromEntries(types.map(k=>[k,answers.filter(x=>x===k).length]));const max=Math.max(...Object.values(counts));return {counts,types:types.filter(k=>counts[k]===max)}}
export function safeTypes(value,id='recharge-01'){const types=typesFor(id);return [...new Set(String(value||'').split(','))].filter(x=>types.includes(x)).slice(0,4)}
export function resultLink(base,lang,types,id='recharge-01'){const u=new URL(base);u.search='';u.hash='';u.searchParams.set('lang',['ko','ja','en'].includes(lang)?lang:'ko');if(quizId(id)==='conversation-02')u.searchParams.set('test','conversation');u.searchParams.set('result',safeTypes(types.join(','),id).join(','));return u.href}
export function savedResult(types,lang,date=new Date().toISOString(),id='recharge-01'){const t=safeTypes(types.join(','),id);if(!t.length)throw new Error('No result');return {quiz:quizId(id),types:t,lang:['ko','ja','en'].includes(lang)?lang:'ko',date}}
export function normalizeSaved(value){if(!Array.isArray(value))return [];return value.slice(0,20).filter(x=>x&&catalog.some(q=>q.id===x.quiz)&&Array.isArray(x.types)&&safeTypes(x.types.join(','),x.quiz).length&&typeof x.date==='string'&&!Number.isNaN(Date.parse(x.date))).map(x=>savedResult(x.types,x.lang,x.date,x.quiz))}
