/* Navigation and local learning state. No analytics or external dependencies. */
(()=>{'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const {parts,chapters}=JSON.parse($('#bookMeta').textContent);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storage={get(k,f){try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
let read=storage.get('fcp-guide-read-v1',{}),checks=storage.get('fcp-guide-checks-v1',{}),current='home';
if(!read||typeof read!=='object')read={};if(!checks||typeof checks!=='object')checks={};
const index=chapters.map(c=>({...c,text:(c.title+' '+c.aliases+' '+document.getElementById(c.id).textContent).toLocaleLowerCase().normalize('NFKC')}));
function nav(){const q=$('#search').value.trim().toLocaleLowerCase().normalize('NFKC').split(/\s+/).filter(Boolean),part=$('#part').value;const items=index.filter(c=>(part==='all'||String(c.part)===part)&&q.every(t=>c.text.includes(t)));let result='';for(let i=0;i<parts.length;i++){let group=items.filter(c=>c.part===i);if(!group.length)continue;result+=`<div class="navgroup">${i+1}부 · ${safe(parts[i])}</div>`+group.map(c=>`<a class="navitem${current===c.id?' active':''}${read[c.id]?' done':''}" href="#${c.id}" ${current===c.id?'aria-current="page"':''}><span class="num">${String(c.number).padStart(2,'0')}</span>${safe(c.title)}</a>`).join('');}$('#nav').innerHTML=result||'<p class="empty">일치하는 항목이 없습니다. 짧은 단어나 영문 기능명으로 다시 찾아보세요.</p>';$('#count').textContent=`${items.length} / ${chapters.length}개 항목 · 읽음 ${chapters.filter(c=>read[c.id]).length}`;}
function mount(root){root.querySelectorAll('[data-figure]').forEach(e=>{if(!e.dataset.mounted)window.GuideFigures.mount(e,e.dataset.figure)});}
function drawer(open){$('#sidebar').classList.toggle('open',open);$('#scrim').hidden=!open;$('#menu').setAttribute('aria-expanded',String(open));$('#menu').setAttribute('aria-label',open?'목차 닫기':'목차 열기');}
function route(){let slug;try{slug=decodeURIComponent(location.hash.slice(1))}catch{slug='home'}slug=slug||'home';if(slug==='main'){$('#main').focus();return}const c=chapters.find(c=>c.id===slug),view=document.getElementById(slug);if(!c&&slug!=='all-book'&&(!view||!view.classList.contains('view')))slug='home';current=slug;$$('.entry,.view').forEach(e=>e.classList.add('hidden'));$('#pager').classList.add('hidden');
if(slug==='all-book'){$('#allMode').innerHTML='<span class="eyebrow">COMPLETE TEXT</span><h1>전체 본문</h1><p>목차의 항목을 선택하면 한 항목 보기로 돌아갑니다.</p>';$('#allMode').classList.remove('hidden');$$('.entry').forEach(e=>{e.classList.remove('hidden');mount(e)});document.title='전체 본문 · Final Cut Pro 사전';}
else{const el=document.getElementById(slug);el.classList.remove('hidden');mount(el);document.title=(c?c.title:el.querySelector('h1')?.textContent||'학습 지도')+' · Final Cut Pro 사전';if(c){let i=chapters.findIndex(x=>x.id===slug);$('#pager').classList.remove('hidden');for(const [sel,j,label] of [['#prev',i-1,'← 이전'],['#next',i+1,'다음 →']]){let a=$(sel),v=chapters[j];a.hidden=!v;if(v){a.href='#'+v.id;a.textContent=label+' · '+v.title;}}}}
nav();drawer(false);window.scrollTo({top:0,behavior:'instant'});$('#main').focus({preventScroll:true});}
$$('[data-read]').forEach(e=>{e.checked=!!read[e.dataset.read];e.addEventListener('change',()=>{read[e.dataset.read]=e.checked;storage.set('fcp-guide-read-v1',read);nav()})});
function checkProgress(){$('#checkProgress').textContent=`${$$('[data-check]').filter(e=>e.checked).length} / ${$$('[data-check]').length}개 확인`;}
$$('[data-check]').forEach(e=>{e.checked=!!checks[e.dataset.check];e.addEventListener('change',()=>{checks[e.dataset.check]=e.checked;storage.set('fcp-guide-checks-v1',checks);checkProgress()})});
$('#resetChecks').addEventListener('click',()=>{checks={};storage.set('fcp-guide-checks-v1',checks);$$('[data-check]').forEach(e=>e.checked=false);checkProgress()});
$('#search').addEventListener('input',nav);$('#part').addEventListener('change',nav);$('#all').addEventListener('click',()=>{location.hash='all-book'});$('#menu').addEventListener('click',()=>drawer(!$('#sidebar').classList.contains('open')));$('#scrim').addEventListener('click',()=>drawer(false));window.addEventListener('hashchange',route);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){drawer(false);$('#menu').focus()}if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)&&!e.target.isContentEditable){e.preventDefault();if(matchMedia('(max-width:760px)').matches)drawer(true);$('#search').focus()}});
checkProgress();route();
})();
