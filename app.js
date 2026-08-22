/* IP26 PRODUCTION CALL SHEET - RUNTIME v16.0 */
const SUPABASE={url:'https://ssbkhhnnzwuykyeznpwd.supabase.co',anonKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYmtoaG5uend1eWt5ZXpucHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDQ1NzcsImV4cCI6MjEwMjk4MDU3N30.-zGe_xWDTBmo604VS39jl8o7YvhEQYb3fZvCV-fcEbk'};
let sb=null;
try{if(window.supabase)sb=window.supabase.createClient(SUPABASE.url,SUPABASE.anonKey);}catch(e){console.warn(e);}

const INV=[
['owl','OWL',[
 ['Sony A6000','2 Unit','used','CAM 3 & 4'],['Sony A6400','1 Unit','used','CAM PHO'],['Sony ZV-E10','1 Unit','used','CAM 2'],
 ['Lens 18-105MM','3 Unit','used','CAM 1,2,3'],['Lens 50MM','1 Unit','used','CAM PHO'],['Battery','8 Unit','used','Semua kamera'],
 ['Charger','1 Pack','used','Charging station'],['Memory Card 32GB','4 Unit','used','CAM 2,3,4,PHO'],
 ['Cinetreak Cinelive V1','1 Pack','used','Video switcher'],['Power Adaptor MIX','1 Unit','used','Power Cinetreak'],
 ['Hollyland Pyro H','1 Pack','used','CAM 2 TX/RX'],['Hollyland Pyro S','1 Pack','used','CAM 1 TX/RX'],
 ['Battery WIR','4 Unit','used','Pyro TX/RX'],['Tripod Camera Big','1 Unit','used','CAM 1'],
 ['HDMI to Micro HDMI Converter','2 Unit','used','CAM 3 & 4'],['HDMI to Micro HDMI Cable 30CM','2 Unit','used','CAM 1 & 2'],
 ['HDMI Capture','2 Unit','used','PRO1 & PRO2 in']]],
['abon','ABON',[['HDMI Capture','2 Unit','partial','1/2 aktif RES Center']]],
['andreas','Andreas',[
 ['Fan Cooler','1 Unit','standby','Cooling'],['Mouse Pad','1 Unit','standby','FOH desk'],['Keyboard Ext','1 Unit','standby','FOH desk'],
 ['Mouse Ext','1 Unit','standby','FOH desk'],['Powerbank','1 Unit','standby','Emergency power'],
 ['Power Adaptor USB A','9 Unit','standby','Peripheral power'],['Power Adaptor USB A x C','1 Unit','standby','Multi charger'],['Power Adaptor USB C','1 Unit','standby','PD charger'],
 ['USB A to USB B Data Cable','1 Unit','standby','Aux'],['USB A to USB Micro B Data Cable','2 Unit','standby','Aux'],
 ['USB A to USB C Data Cable','1 Unit','used','Cinetreak ke OBS'],['USB A to USB C Charge Cable','1 Unit','standby','Charge'],['USB C to USB C Charge Cable','1 Unit','standby','Charge'],
 ['USB A to USB A Extender 30CM','2 Unit','standby','Port extender'],['USB A to USB A Extender 2M','1 Unit','used','CT80S ke OBS audio'],
 ['USB A to USB C Male Converter','4 Unit','standby','Adaptor'],['USB A to USB C Female Converter','2 Unit','standby','Adaptor'],
 ['USB A to Mini USB Cable','1 Unit','standby','Legacy'],['USB A Splitter 3CH','1 Unit','standby','Hub'],['USB A Splitter 4CH','1 Unit','standby','Hub'],
 ['USB C DAC Hanason AB17X','1 Unit','used','RES audio out'],['USB C DAC Oraimo OAA310','1 Unit','standby','Backup DAC'],
 ['In Ear Monitor QKZ Hi7T','1 Pack','standby','Monitor audio'],['In Ear Monitor KZ EDX Pro','1 Pack','standby','Monitor audio'],
 ['Fastdrive Vgen SSD 128GB','1 Pack','standby','Media cepat'],['Fastdrive Toshiba HDD 1TB','1 Pack','standby','Backup master'],
 ['Flashdrive Toshiba 8GB','1 Unit','standby','Transfer PPT'],['Flashdrive Sandisk 16GB','1 Unit','standby','Transfer media'],
 ['Flashdrive Toshiba 32GB','1 Unit','standby','Transfer media'],['Flashdrive Toshiba 64GB','1 Unit','standby','Transfer media'],
 ['HDMI to Mini HDMI Converter','1 Unit','standby','Konverter video'],['Mini HDMI to Mini HDMI Cable 1,5M','1 Unit','standby','Kabel video'],
 ['HDMI to HDMI Cable 1,5M','3 Unit','used','Splitter ke capture'],['VGA to HDMI Converter','3 Unit','standby','Konverter display'],
 ['VGA to VGA Cable 1,5M','1 Unit','standby','Legacy'],
 ['Power Cable 3PIN','3 Unit','partial','Distribusi listrik'],['Power Cable 2PIN','1 Unit','partial','Distribusi listrik'],
 ['Terminal Cable 4CH','3 Unit','partial','Distribusi listrik'],['Terminal Cable 3CH','2 Unit','partial','Distribusi listrik'],['Terminal Cable 2CH','1 Unit','partial','Distribusi listrik'],
 ['Terminal Cable XCH','X Unit','used','Master line listrik'],['Terminal T','8 Unit','partial','Terminal T listrik'],
 ['Addon Box','1 Pack','standby','Toolkit produksi'],['Jack Box','1 Pack','standby','Adaptor audio'],['Screw Box','1 Pack','standby','Hardware rigging'],
 ['Ties Box','1 Pack','standby','Manajemen kabel'],['Tool Box','2 Pack','standby','Peralatan maintenance'],['Cable Pack','1 Pack','standby','Kabel cadangan'],['Tape Pack (Gaffer)','1 Pack','standby','Gaffer stage']]],
['gia','GIA Deliksari',[
 ['Mixer NewBaxs CT80S','1 Unit','used','Mixer 2 streaming sub-mix'],['XLR Female to Male 3M','2 Unit','used','FOH ke CT80S'],
 ['USB A to USB C Data Cable','1 Unit','used','CT80S audio out'],['Tripod Camera Big','1 Unit','used','Mount CAM 3'],
 ['HDMI Splitter 2CH','1 Unit','standby','Backup splitter'],['Power Adaptor SPL','1 Pack','standby','Power splitter'],
 ['HDMI to HDMI Cable 1M','2 Unit','used','Cinetreak ke splitter']]],
['gkj','GKJ Ngaliyan',[
 ['Stand Lighting Small','1 Unit','standby','Aux lighting'],['HDMI Cable 15M','1 Unit','used','RES ke Novastar center'],
 ['HDMI Cable 10M','1 Unit','used','CAM 3 wired'],['HDMI Cable 5M','1 Unit','standby','Spare'],
 ['HDMI Cable 1,5M','1 Unit','standby','Patch'],['HDMI Capture','1 Unit','used','Capture Novastar'],
 ['HDMI Splitter 4CH','1 Unit','standby','Backup master splitter'],['Power Adaptor SPL','1 Pack','standby','Power splitter']]],
['ukk','UKK UNNES',[
 ['XLR Female to Male 10M','3 Unit','partial','2/3 FOH ke CT80S'],['Stand Lighting Small','4 Unit','partial','2/4 mount wireless'],
 ['Tripod Camera Big','1 Unit','used','Mount CAM 4'],['HDMI to Mini HDMI 2,5M','1 Unit','standby','Patch'],
 ['HDMI Cable 15M','1 Unit','standby','Long run backup'],['HDMI Cable 10M','1 Unit','used','CAM 4 wired'],
 ['HDMI Cable 1,5M','4 Unit','partial','2/4 rig wireless'],['HDMI Splitter 4CH','1 Unit','used','Distribusi video utama'],
 ['Power Adaptor SPL','1 Pack','used','Power splitter'],['VGA to VGA 1,5M','1 Unit','standby','Legacy'],
 ['VGA to VGA 2,5M','1 Unit','standby','Legacy'],['VGA to HDMI Converter','2 Unit','standby','Konverter display'],
 ['Power Cable XPIN','X Unit','standby','Ekstensi daya'],['Terminal Cable XCH','X Unit','used','Distribusi listrik']]],
['lio','Lio',[['HDMI Cable 1,5M','1 Unit','used','Timekeeper ke TV Darrel']]],
['darrel','Darrel',[['Television','1 Unit','used','Monitor timekeeper stage'],['Power Adaptor TV','1 Pack','used','Power TV'],['Memory Card 8GB','1 Unit','standby','Spare']]],
['kiel','Kiel 1',[
 ['Sony ZVE10','1 Unit','used','CAM 1 FOH'],['Lens 16-50MM Kit','1 Unit','used','CAM 4 close-up'],
 ['Lens 50MM Fix','1 Unit','standby','Spare prime'],['Battery','2 Unit','used','Power CAM 1'],
 ['Charger','1 Pack','used','Charging station'],['Memory Card 64GB','1 Unit','used','CAM 1 storage'],['Memory Card 128GB','1 Unit','standby','Backup master']]],
['joel','Joel',[
 ['Sony A6600','1 Unit','used','CAM VID'],['Lens 24-70MM Zeiss','1 Unit','used','CAM VID'],
 ['Battery','2 Unit','used','Power CAM VID'],['Charger','1 Pack','used','Charging'],
 ['Memory Card 64GB','1 Unit','used','CAM VID storage'],['Gimbal DJI Ronin RS3','1 Unit','used','Stabilizer CAM VID']]],
['kezia','Kezia',[['Television','1 Unit','used','Multiview switcher'],['Power Adaptor TV','1 Pack','used','Power TV multiview']]],
['jennifer','Jennifer',[['HP iPhone 15 Pro','1 Unit','used','Social media story'],['TAB iPad','1 Unit','used','Virtual Mixer 2 control']]],
['panitia','Panitia',[['HDMI to Micro HDMI Converter','2 Unit','used','Backup konverter video'],['Terminal Cable XCH','X Unit','used','Master line listrik']]]
];
// flatten with ids
const MASTER=[];
INV.forEach(g=>g[2].forEach((it,idx)=>MASTER.push({id:g[0]+'-'+idx,lender:g[1],name:it[0],qty:it[1],status:it[2],usage:it[3]})));

let state={},filterL='All',query='',unretOnly=false;

document.addEventListener('DOMContentLoaded',()=>{
  tick();setInterval(tick,1000);
  loadState();renderTabs();renderGrid();updateProg();
  initSupabase();spy();
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();jump('accInv');document.getElementById('searchInput').focus();}
  });
});

function tick(){
  const o={timeZone:'Asia/Jakarta',hour12:false,hour:'2-digit',minute:'2-digit',second:'2-digit'};
  const c=document.getElementById('clockWIB');if(c)c.textContent=new Intl.DateTimeFormat('id-ID',o).format(new Date())+' WIB';
  const d=document.getElementById('countdown');if(d){
    const diff=new Date('2026-09-17T00:00:00+07:00')-new Date();
    if(diff<=0){d.textContent='EVENT LIVE';return;}
    const D=Math.floor(diff/864e5),H=Math.floor(diff%864e5/36e5),M=Math.floor(diff%36e5/6e4),S=Math.floor(diff%6e4/1e3);
    d.textContent=D+'d '+H+'h '+M+'m '+S+'s';
  }
}

function toggleAcc(id){document.getElementById(id).classList.toggle('collapsed');}
function jump(id){
  const el=document.getElementById(id);if(!el)return;
  el.classList.remove('collapsed');
  setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),50);
  setActive(id);
}
function setActive(id){
  const m={'accCam':'Cam','accEngine':'Engine','accWork':'Work','accInv':'Inv','accStage':'Stage','accRun':'Run'};
  document.querySelectorAll('.nav-link-item').forEach(e=>e.classList.remove('active'));
  document.querySelectorAll('.dock-item').forEach(e=>e.classList.remove('active'));
  if(m[id]){const n=document.getElementById('nav'+m[id]),d=document.getElementById('d'+m[id]);if(n)n.classList.add('active');if(d)d.classList.add('active');}
}
function spy(){
  const obs=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){
      const map={'secCam':'Cam','secEngine':'Engine','secWork':'Work','secInv':'Inv','secStage':'Stage','secRun':'Run'};
      const k=map[e.target.id];if(k){
        document.querySelectorAll('.nav-link-item').forEach(x=>x.classList.remove('active'));
        document.querySelectorAll('.dock-item').forEach(x=>x.classList.remove('active'));
        const n=document.getElementById('nav'+k),d=document.getElementById('d'+k);
        if(n)n.classList.add('active');if(d)d.classList.add('active');
      }
    }
  }),{rootMargin:'-25% 0px -65% 0px'});
  ['secCam','secEngine','secWork','secInv','secStage','secRun'].forEach(i=>{const el=document.getElementById(i);if(el)obs.observe(el);});
}

function setPGM(ch){
  for(let i=1;i<=4;i++)document.getElementById('pgmBtn'+i).classList.toggle('on-pgm',i===ch);
  document.getElementById('pgmLabel').textContent='CAM '+ch;
}
function setPVW(ch){
  for(let i=1;i<=4;i++)document.getElementById('pvwBtn'+i).classList.toggle('on-pvw',i===ch);
  document.getElementById('pvwLabel').textContent='CAM '+ch;
}

/* CHECKLIST */
function loadState(){
  try{state=JSON.parse(localStorage.getItem('ip26_v16')||'{}')}catch(e){state={};}
}
function save(){localStorage.setItem('ip26_v16',JSON.stringify(state));updateProg();}
function initSupabase(){
  if(!sb)return;
  sb.from('inventory_checklist').select('item_id,is_checked').then(({data})=>{
    if(Array.isArray(data)){data.forEach(r=>state[r.item_id]=!!r.is_checked);save();renderGrid();}
  });
  sb.channel('pub:inv').on('postgres_changes',{event:'*',schema:'public',table:'inventory_checklist'},p=>{
    if(p.new&&p.new.item_id){state[p.new.item_id]=!!p.new.is_checked;save();renderGrid();}
  }).subscribe();
}
async function setItem(id,v){
  state[id]=v;save();
  const row=document.getElementById('row-'+id);if(row)row.classList.toggle('done',v);
  if(sb)try{await sb.from('inventory_checklist').upsert({item_id:id,is_checked:v,updated_at:new Date().toISOString()},{onConflict:'item_id'});}catch(e){}
}
function rowClick(id){setItem(id,!state[id]);renderGrid();}
function batchSet(v){MASTER.forEach(i=>state[i.id]=v);save();renderGrid();
  if(sb)sb.from('inventory_checklist').upsert(MASTER.map(i=>({item_id:i.id,is_checked:v,updated_at:new Date().toISOString()})),{onConflict:'item_id'}).catch(()=>{});
}

function renderTabs(){
  const rack=document.getElementById('lenderTabs');
  const ls=['All',...INV.map(g=>g[1])];
  rack.innerHTML=ls.map(l=>{
    const c=l==='All'?MASTER.length:MASTER.filter(i=>i.lender===l).length;
    return '<button class="lender-pill '+(l===filterL?'active':'')+'" onclick="pickLender(\''+l+'\')">'+l+' ('+c+')</button>';
  }).join('');
}
function pickLender(l){filterL=l;renderTabs();renderGrid();}
function onSearch(v){query=(v||'').toLowerCase().trim();document.getElementById('searchClear').style.display=query?'block':'none';renderGrid();}
function clearSearch(){document.getElementById('searchInput').value='';query='';document.getElementById('searchClear').style.display='none';renderGrid();}
function toggleUnret(){
  unretOnly=!unretOnly;const b=document.getElementById('btnUnret');
  b.classList.toggle('r',unretOnly);b.textContent=unretOnly?'✕ Semua':'⚠️ Belum Selesai';renderGrid();
}

function renderGrid(){
  const grid=document.getElementById('manifestGrid');
  const rows=MASTER.filter(i=>{
    if(filterL!=='All'&&i.lender!==filterL)return false;
    if(query&&!(i.name.toLowerCase().includes(query)||i.lender.toLowerCase().includes(query)||i.usage.toLowerCase().includes(query)))return false;
    if(unretOnly&&state[i.id])return false;
    return true;
  });
  if(!rows.length){grid.innerHTML='<div class="empty-note">Tidak ada item yang cocok.</div>';return;}
  const byL={};rows.forEach(i=>{(byL[i.lender]=byL[i.lender]||[]).push(i);});
  grid.innerHTML=Object.keys(byL).map(l=>{
    const items=byL[l],done=items.filter(i=>state[i.id]).length;
    return '<div class="lender-card"><div class="lender-card-head"><span class="lender-name">'+l+'</span><span class="lender-count">'+done+'/'+items.length+'</span></div><div class="items-list">'
      +items.map(i=>{
        const ck=!!state[i.id],cls=i.status,lb=i.status==='used'?'✅ Aktif':(i.status==='partial'?'⚠️ Sebagian':'☑️ Standby');
        return '<div class="item-row '+(ck?'done':'')+'" id="row-'+i.id+'" onclick="rowClick(\''+i.id+'\')">'
          +'<div class="item-check" onclick="event.stopPropagation()"><input type="checkbox" '+(ck?'checked':'')+' onchange="setItem(\''+i.id+'\',this.checked)"></div>'
          +'<div class="item-body"><span class="item-name">'+i.name+' ('+i.qty+')</span>'
          +'<div class="item-meta"><span class="badge '+cls+'">'+lb+'</span><span>'+i.usage+'</span></div></div></div>';
      }).join('')+'</div></div>';
  }).join('');
}
function updateProg(){
  const t=MASTER.length,d=MASTER.filter(i=>state[i.id]).length,p=Math.round(d/t*100);
  document.getElementById('progRatio').textContent=d+' / '+t+' ter-packing';
  document.getElementById('progPct').textContent=p+'%';
  document.getElementById('progFill').style.width=p+'%';
  document.getElementById('invHeadBadge').textContent=d+'/'+t+' selesai';
}

function copyWA(unit,gear){
  const msg='*BRIEFING KAMERA IP26*\n\n📍 Unit: '+unit+'\n📦 Gear: '+gear+'\n📅 17 September 2026\n🏛️ Auditorium UNNES\n\nMohon cek kelengkapan baterai, kabel, dan memory card sebelum gladi resik.';
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(msg).then(toast).catch(()=>fallback(msg));
  else fallback(msg);
}
function fallback(t){
  const ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';
  document.body.appendChild(ta);ta.select();try{document.execCommand('copy');toast();}catch(e){alert('Gagal menyalin.');}
  document.body.removeChild(ta);
}
function toast(){const t=document.getElementById('toast');t.style.display='block';setTimeout(()=>t.style.display='none',2200);}
