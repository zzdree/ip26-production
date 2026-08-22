/* ==========================================================================
   IP26 SIARAN MISSION CONTROL — RUNTIME (v15.0)
   ========================================================================== */

const SUPABASE_CONFIG = {
  url: 'https://ssbkhhnnzwuykyeznpwd.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYmtoaG5uend1eWt5ZXpucHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDQ1NzcsImV4cCI6MjEwMjk4MDU3N30.-zGe_xWDTBmo604VS39jl8o7YvhEQYb3fZvCV-fcEbk'
};
let supabaseClient = null;
if (typeof window.supabase !== 'undefined') {
  try { supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey); } catch (e) { console.warn(e); }
}

// MASTER INVENTORY (119 items, 13 lenders) — from ip26_pro2.txt
const MASTER_INVENTORY = [
  { id:'owl-1', lender:'OWL', name:'Sony A6000', qty:'2 Unit', status:'used', usage:'CAM 3 & 4' },
  { id:'owl-2', lender:'OWL', name:'Sony A6400', qty:'1 Unit', status:'used', usage:'CAM PHO' },
  { id:'owl-3', lender:'OWL', name:'Sony ZV-E10', qty:'1 Unit', status:'used', usage:'CAM 2' },
  { id:'owl-4', lender:'OWL', name:'Lens 18-105MM', qty:'3 Unit', status:'used', usage:'CAM 1,2,3' },
  { id:'owl-5', lender:'OWL', name:'Lens 50MM', qty:'1 Unit', status:'used', usage:'CAM PHO' },
  { id:'owl-6', lender:'OWL', name:'Battery', qty:'8 Unit', status:'used', usage:'CAM 2,3,4,PHO' },
  { id:'owl-7', lender:'OWL', name:'Charger', qty:'1 Pack', status:'used', usage:'Charging' },
  { id:'owl-8', lender:'OWL', name:'Memory Card 32GB', qty:'4 Unit', status:'used', usage:'CAM 2,3,4,PHO' },
  { id:'owl-9', lender:'OWL', name:'Cinetreak Cinelive V1', qty:'1 Pack', status:'used', usage:'Switcher' },
  { id:'owl-10', lender:'OWL', name:'Power Adaptor MIX', qty:'1 Unit', status:'used', usage:'Power Cinetreak' },
  { id:'owl-11', lender:'OWL', name:'Hollyland Pyro H', qty:'1 Pack', status:'used', usage:'CAM 2 TX/RX' },
  { id:'owl-12', lender:'OWL', name:'Hollyland Pyro S', qty:'1 Pack', status:'used', usage:'CAM 1 TX/RX' },
  { id:'owl-13', lender:'OWL', name:'Battery WIR', qty:'4 Unit', status:'used', usage:'Pyro TX/RX' },
  { id:'owl-14', lender:'OWL', name:'Tripod Camera Big', qty:'1 Unit', status:'used', usage:'CAM 1' },
  { id:'owl-15', lender:'OWL', name:'HDMI to Micro HDMI Converter', qty:'2 Unit', status:'used', usage:'CAM 3 & 4' },
  { id:'owl-16', lender:'OWL', name:'HDMI to Micro HDMI Cable 30CM', qty:'2 Unit', status:'used', usage:'CAM 1 & 2' },
  { id:'owl-17', lender:'OWL', name:'HDMI Capture', qty:'2 Unit', status:'used', usage:'PRO1 & PRO2' },
  { id:'abon-1', lender:'ABON', name:'HDMI Capture', qty:'2 Unit', status:'partial', usage:'1/2 Aktif RES Center' },
  { id:'and-1', lender:'Andreas', name:'Fan Cooler', qty:'1 Unit', status:'standby', usage:'Cooling' },
  { id:'and-2', lender:'Andreas', name:'Mouse Pad', qty:'1 Unit', status:'standby', usage:'FOH' },
  { id:'and-3', lender:'Andreas', name:'Keyboard Ext', qty:'1 Unit', status:'standby', usage:'FOH' },
  { id:'and-4', lender:'Andreas', name:'Mouse Ext', qty:'1 Unit', status:'standby', usage:'FOH' },
  { id:'and-5', lender:'Andreas', name:'Powerbank', qty:'1 Unit', status:'standby', usage:'Emergency' },
  { id:'and-6', lender:'Andreas', name:'Power Adaptor USB A', qty:'9 Unit', status:'standby', usage:'Peripheral' },
  { id:'and-7', lender:'Andreas', name:'Power Adaptor USB A x C', qty:'1 Unit', status:'standby', usage:'Multi-charger' },
  { id:'and-8', lender:'Andreas', name:'Power Adaptor USB C', qty:'1 Unit', status:'standby', usage:'PD' },
  { id:'and-9', lender:'Andreas', name:'USB A to USB B Data', qty:'1 Unit', status:'standby', usage:'Aux' },
  { id:'and-10', lender:'Andreas', name:'USB A to USB Micro B', qty:'2 Unit', status:'standby', usage:'Aux' },
  { id:'and-11', lender:'Andreas', name:'USB A to USB C Data', qty:'1 Unit', status:'used', usage:'Cinetreak to OBS' },
  { id:'and-12', lender:'Andreas', name:'USB A to USB C Charge', qty:'1 Unit', status:'standby', usage:'Charge' },
  { id:'and-13', lender:'Andreas', name:'USB C to USB C Charge', qty:'1 Unit', status:'standby', usage:'Charge' },
  { id:'and-14', lender:'Andreas', name:'USB A to USB A 30CM', qty:'2 Unit', status:'standby', usage:'Extender' },
  { id:'and-15', lender:'Andreas', name:'USB A to USB A 2M', qty:'1 Unit', status:'used', usage:'CT80S to OBS' },
  { id:'and-16', lender:'Andreas', name:'USB A to USB C Male Conv', qty:'4 Unit', status:'standby', usage:'Adaptor' },
  { id:'and-17', lender:'Andreas', name:'USB A to USB C Female Conv', qty:'2 Unit', status:'standby', usage:'Adaptor' },
  { id:'and-18', lender:'Andreas', name:'USB A to Mini USB', qty:'1 Unit', status:'standby', usage:'Legacy' },
  { id:'and-19', lender:'Andreas', name:'USB A Splitter 3CH', qty:'1 Unit', status:'standby', usage:'Hub' },
  { id:'and-20', lender:'Andreas', name:'USB A Splitter 4CH', qty:'1 Unit', status:'standby', usage:'Hub' },
  { id:'and-21', lender:'Andreas', name:'USB C DAC Hanason AB17X', qty:'1 Unit', status:'used', usage:'RES Audio' },
  { id:'and-22', lender:'Andreas', name:'USB C DAC Oraimo OAA310', qty:'1 Unit', status:'standby', usage:'Backup DAC' },
  { id:'and-23', lender:'Andreas', name:'In Ear QKZ Hi7T', qty:'1 Pack', status:'standby', usage:'Monitor' },
  { id:'and-24', lender:'Andreas', name:'In Ear KZ EDX Pro', qty:'1 Pack', status:'standby', usage:'Monitor' },
  { id:'and-25', lender:'Andreas', name:'SSD Vgen 128GB', qty:'1 Pack', status:'standby', usage:'Media' },
  { id:'and-26', lender:'Andreas', name:'HDD Toshiba 1TB', qty:'1 Pack', status:'standby', usage:'Backup' },
  { id:'and-27', lender:'Andreas', name:'Flash 8GB', qty:'1 Unit', status:'standby', usage:'Transfer' },
  { id:'and-28', lender:'Andreas', name:'Flash 16GB', qty:'1 Unit', status:'standby', usage:'Transfer' },
  { id:'and-29', lender:'Andreas', name:'Flash 32GB', qty:'1 Unit', status:'standby', usage:'Transfer' },
  { id:'and-30', lender:'Andreas', name:'Flash 64GB', qty:'1 Unit', status:'standby', usage:'Transfer' },
  { id:'and-31', lender:'Andreas', name:'HDMI to Mini HDMI Conv', qty:'1 Unit', status:'standby', usage:'Conv' },
  { id:'and-32', lender:'Andreas', name:'Mini HDMI to Mini HDMI 1.5M', qty:'1 Unit', status:'standby', usage:'Cable' },
  { id:'and-33', lender:'Andreas', name:'HDMI to HDMI 1.5M', qty:'3 Unit', status:'used', usage:'Splitter to Capture' },
  { id:'and-34', lender:'Andreas', name:'VGA to HDMI Conv', qty:'3 Unit', status:'standby', usage:'Conv' },
  { id:'and-35', lender:'Andreas', name:'VGA to VGA 1.5M', qty:'1 Unit', status:'standby', usage:'Legacy' },
  { id:'and-36', lender:'Andreas', name:'Power Cable 3PIN', qty:'3 Unit', status:'partial', usage:'Extension' },
  { id:'and-37', lender:'Andreas', name:'Power Cable 2PIN', qty:'1 Unit', status:'partial', usage:'Extension' },
  { id:'and-38', lender:'Andreas', name:'Terminal 4CH', qty:'3 Unit', status:'partial', usage:'Distrib' },
  { id:'and-39', lender:'Andreas', name:'Terminal 3CH', qty:'2 Unit', status:'partial', usage:'Distrib' },
  { id:'and-40', lender:'Andreas', name:'Terminal 2CH', qty:'1 Unit', status:'partial', usage:'Distrib' },
  { id:'and-41', lender:'Andreas', name:'Terminal XCH', qty:'X Unit', status:'used', usage:'Master Line' },
  { id:'and-42', lender:'Andreas', name:'Terminal T', qty:'8 Unit', status:'partial', usage:'T-Plugs' },
  { id:'and-43', lender:'Andreas', name:'Addon Box', qty:'1 Pack', status:'standby', usage:'Toolkit' },
  { id:'and-44', lender:'Andreas', name:'Jack Box', qty:'1 Pack', status:'standby', usage:'Audio' },
  { id:'and-45', lender:'Andreas', name:'Screw Box', qty:'1 Pack', status:'standby', usage:'Rigging' },
  { id:'and-46', lender:'Andreas', name:'Ties Box', qty:'1 Pack', status:'standby', usage:'Cable Mgmt' },
  { id:'and-47', lender:'Andreas', name:'Tool Box', qty:'2 Pack', status:'standby', usage:'Tools' },
  { id:'and-48', lender:'Andreas', name:'Cable Pack', qty:'1 Pack', status:'standby', usage:'Spare' },
  { id:'and-49', lender:'Andreas', name:'Tape Pack', qty:'1 Pack', status:'standby', usage:'Gaffer' },
  { id:'gia-1', lender:'GIA Deliksari', name:'Mixer NewBaxs CT80S', qty:'1 Unit', status:'used', usage:'Mixer 2' },
  { id:'gia-2', lender:'GIA Deliksari', name:'XLR 3M 2X', qty:'2 Unit', status:'used', usage:'FOH to CT80S' },
  { id:'gia-3', lender:'GIA Deliksari', name:'USB A to USB C Data', qty:'1 Unit', status:'used', usage:'CT80S Out' },
  { id:'gia-4', lender:'GIA Deliksari', name:'Tripod Camera Big', qty:'1 Unit', status:'used', usage:'CAM 3' },
  { id:'gia-5', lender:'GIA Deliksari', name:'HDMI Splitter 2CH', qty:'1 Unit', status:'standby', usage:'Backup' },
  { id:'gia-6', lender:'GIA Deliksari', name:'Power Adaptor SPL', qty:'1 Pack', status:'standby', usage:'Splitter' },
  { id:'gia-7', lender:'GIA Deliksari', name:'HDMI to HDMI 1M', qty:'2 Unit', status:'used', usage:'Cinetreak to Splitter' },
  { id:'gkj-1', lender:'GKJ Ngaliyan', name:'Stand Lighting Small', qty:'1 Unit', status:'standby', usage:'Aux' },
  { id:'gkj-2', lender:'GKJ Ngaliyan', name:'HDMI 15M', qty:'1 Unit', status:'used', usage:'RES to Novastar' },
  { id:'gkj-3', lender:'GKJ Ngaliyan', name:'HDMI 10M', qty:'1 Unit', status:'used', usage:'CAM 3 Wired' },
  { id:'gkj-4', lender:'GKJ Ngaliyan', name:'HDMI 5M', qty:'1 Unit', status:'standby', usage:'Spare' },
  { id:'gkj-5', lender:'GKJ Ngaliyan', name:'HDMI 1.5M', qty:'1 Unit', status:'standby', usage:'Patch' },
  { id:'gkj-6', lender:'GKJ Ngaliyan', name:'HDMI Capture', qty:'1 Unit', status:'used', usage:'Novastar Capture' },
  { id:'gkj-7', lender:'GKJ Ngaliyan', name:'HDMI Splitter 4CH', qty:'1 Unit', status:'standby', usage:'Backup Master' },
  { id:'gkj-8', lender:'GKJ Ngaliyan', name:'Power Adaptor SPL', qty:'1 Pack', status:'standby', usage:'Splitter' },
  { id:'ukk-1', lender:'UKK UNNES', name:'XLR 10M 3X', qty:'3 Unit', status:'partial', usage:'2/3 FOH to CT80S' },
  { id:'ukk-2', lender:'UKK UNNES', name:'Stand Lighting 4X', qty:'4 Unit', status:'partial', usage:'2/4 Wireless Mount' },
  { id:'ukk-3', lender:'UKK UNNES', name:'Tripod Camera Big', qty:'1 Unit', status:'used', usage:'CAM 4' },
  { id:'ukk-4', lender:'UKK UNNES', name:'HDMI to Mini HDMI 2.5M', qty:'1 Unit', status:'standby', usage:'Patch' },
  { id:'ukk-5', lender:'UKK UNNES', name:'HDMI 15M', qty:'1 Unit', status:'standby', usage:'Long Run' },
  { id:'ukk-6', lender:'UKK UNNES', name:'HDMI 10M', qty:'1 Unit', status:'used', usage:'CAM 4 Wired' },
  { id:'ukk-7', lender:'UKK UNNES', name:'HDMI 1.5M 4X', qty:'4 Unit', status:'partial', usage:'2/4 Wireless Rig' },
  { id:'ukk-8', lender:'UKK UNNES', name:'HDMI Splitter 4CH', qty:'1 Unit', status:'used', usage:'Video Dist' },
  { id:'ukk-9', lender:'UKK UNNES', name:'Power Adaptor SPL', qty:'1 Pack', status:'used', usage:'Splitter Power' },
  { id:'ukk-10', lender:'UKK UNNES', name:'VGA to VGA 1.5M', qty:'1 Unit', status:'standby', usage:'Legacy' },
  { id:'ukk-11', lender:'UKK UNNES', name:'VGA to VGA 2.5M', qty:'1 Unit', status:'standby', usage:'Legacy' },
  { id:'ukk-12', lender:'UKK UNNES', name:'VGA to HDMI Conv', qty:'2 Unit', status:'standby', usage:'Conv' },
  { id:'ukk-13', lender:'UKK UNNES', name:'Power Cable XPIN', qty:'X Unit', status:'standby', usage:'Extension' },
  { id:'ukk-14', lender:'UKK UNNES', name:'Terminal XCH', qty:'X Unit', status:'used', usage:'Distrib' },
  { id:'lio-1', lender:'Lio', name:'HDMI 1.5M', qty:'1 Unit', status:'used', usage:'Timekeeper to TV' },
  { id:'dar-1', lender:'Darrel', name:'Television', qty:'1 Unit', status:'used', usage:'Timekeeper' },
  { id:'dar-2', lender:'Darrel', name:'Power Adaptor TV', qty:'1 Pack', status:'used', usage:'TV Power' },
  { id:'dar-3', lender:'Darrel', name:'Memory Card 8GB', qty:'1 Unit', status:'standby', usage:'Spare' },
  { id:'kiel-1', lender:'Kiel 1', name:'Sony ZVE10', qty:'1 Unit', status:'used', usage:'CAM 1' },
  { id:'kiel-2', lender:'Kiel 1', name:'Lens 16-50MM Kit', qty:'1 Unit', status:'used', usage:'CAM 4' },
  { id:'kiel-3', lender:'Kiel 1', name:'Lens 50MM Fix', qty:'1 Unit', status:'standby', usage:'Spare' },
  { id:'kiel-4', lender:'Kiel 1', name:'Battery', qty:'2 Unit', status:'used', usage:'CAM 1' },
  { id:'kiel-5', lender:'Kiel 1', name:'Charger', qty:'1 Pack', status:'used', usage:'Charging' },
  { id:'kiel-6', lender:'Kiel 1', name:'Memory Card 64GB', qty:'1 Unit', status:'used', usage:'CAM 1' },
  { id:'kiel-7', lender:'Kiel 1', name:'Memory Card 128GB', qty:'1 Unit', status:'standby', usage:'Backup' },
  { id:'joel-1', lender:'Joel', name:'Sony A6600', qty:'1 Unit', status:'used', usage:'CAM VID' },
  { id:'joel-2', lender:'Joel', name:'Lens 24-70MM Zeiss', qty:'1 Unit', status:'used', usage:'CAM VID' },
  { id:'joel-3', lender:'Joel', name:'Battery', qty:'2 Unit', status:'used', usage:'CAM VID' },
  { id:'joel-4', lender:'Joel', name:'Charger', qty:'1 Pack', status:'used', usage:'Charging' },
  { id:'joel-5', lender:'Joel', name:'Memory Card 64GB', qty:'1 Unit', status:'used', usage:'CAM VID' },
  { id:'joel-6', lender:'Joel', name:'Gimbal DJI Ronin RS3', qty:'1 Unit', status:'used', usage:'Stabilizer' },
  { id:'kez-1', lender:'Kezia', name:'Television', qty:'1 Unit', status:'used', usage:'Multiview' },
  { id:'kez-2', lender:'Kezia', name:'Power Adaptor TV', qty:'1 Pack', status:'used', usage:'TV Power' },
  { id:'jen-1', lender:'Jennifer', name:'HP iPhone 15', qty:'1 Unit', status:'used', usage:'Social' },
  { id:'jen-2', lender:'Jennifer', name:'TAB iPad', qty:'1 Unit', status:'used', usage:'VM2' },
  { id:'pan-1', lender:'Panitia', name:'HDMI to Micro HDMI Conv', qty:'2 Unit', status:'used', usage:'Backup' },
  { id:'pan-2', lender:'Panitia', name:'Terminal XCH', qty:'X Unit', status:'used', usage:'Master Line' }
];

let checklistState = {};
let activeLenderFilter = 'All';
let activeSearchQuery = '';
let filterUnreturnedOnly = false;

document.addEventListener('DOMContentLoaded', () => {
  initTimers();
  initChecklistState();
  renderLenderPills();
  renderManifestCards();
  updateProgressUI();
  initSupabaseRealtime();
  setupScrollSpy();
  setupKeyboardShortcuts();
});

function initTimers() {
  updateMasterClock(); updateCountdown();
  setInterval(updateMasterClock, 1000); setInterval(updateCountdown, 1000);
}
function updateMasterClock() {
  const now = new Date();
  const o = { timeZone:'Asia/Jakarta', hour12:false, hour:'2-digit', minute:'2-digit', second:'2-digit' };
  const el = document.getElementById('masterClockWIB');
  if (el) el.textContent = new Intl.DateTimeFormat('id-ID', o).format(now) + ' WIB';
}
function updateCountdown() {
  const eventDate = new Date('2026-09-17T00:00:00+07:00').getTime();
  const diff = eventDate - new Date().getTime();
  const el = document.getElementById('liveCountdownText');
  if (!el) return;
  if (diff <= 0) { el.textContent = 'EVENT LIVE'; return; }
  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff%(1000*60*60))/(1000*60));
  const s = Math.floor((diff%(1000*60))/1000);
  el.textContent = d + 'd ' + h + 'h ' + m + 'm ' + s + 's';
}

function toggleSection(id) { const el = document.getElementById(id); if (el) el.classList.toggle('collapsed'); }
function navJumpTo(id) {
  const el = document.getElementById(id); if (!el) return;
  if (el.classList.contains('collapsed')) el.classList.remove('collapsed');
  el.scrollIntoView({ behavior:'smooth', block:'start' });
  updateActiveNavState(id);
}
function updateActiveNavState(activeId) {
  const map = {
    'secHero':{t:'navLinkHero',d:'dockHero'}, 'secTeam':{t:'navLinkTeam',d:'dockTeam'},
    'secCam':{t:'navLinkCam',d:'dockCam'}, 'secEngine':{t:'navLinkEngine',d:'dockEngine'},
    'secWork':{t:'navLinkWork',d:'dockWork'}, 'secInv':{t:'navLinkInv',d:'dockInv'},
    'secStage':{t:'navLinkStage',d:'dockStage'}, 'secRun':{t:'navLinkRun',d:'dockRun'}
  };
  document.querySelectorAll('.nav-link-item').forEach(e=>e.classList.remove('active'));
  document.querySelectorAll('.dock-item').forEach(e=>e.classList.remove('active'));
  if (map[activeId]) {
    const t=document.getElementById(map[activeId].t), d=document.getElementById(map[activeId].d);
    if(t)t.classList.add('active'); if(d)d.classList.add('active');
  }
}
function setupScrollSpy() {
  const secs = document.querySelectorAll('section');
  const obs = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) updateActiveNavState(e.target.id); }),
    { rootMargin:'-20% 0px -60% 0px', threshold:0.1 });
  secs.forEach(s=>obs.observe(s));
}

function initChecklistState() {
  const saved = localStorage.getItem('ip26_checklist_v15');
  if (saved) { try { checklistState = JSON.parse(saved); } catch(e){ checklistState={}; } }
  if (!checklistState || Object.keys(checklistState).length === 0) {
    MASTER_INVENTORY.forEach(i=>checklistState[i.id]=false);
  }
}
function saveLocalState(){ localStorage.setItem('ip26_checklist_v15', JSON.stringify(checklistState)); }

async function initSupabaseRealtime() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient.from('inventory_checklist').select('item_id, is_checked');
    if (!error && Array.isArray(data)) {
      data.forEach(r=>checklistState[r.item_id]=Boolean(r.is_checked));
      saveLocalState(); renderManifestCards(); updateProgressUI();
    }
    supabaseClient.channel('public:inventory_checklist')
      .on('postgres_changes',{event:'*',schema:'public',table:'inventory_checklist'},p=>{
        if(p.new&&p.new.item_id){ checklistState[p.new.item_id]=Boolean(p.new.is_checked); saveLocalState(); renderManifestCards(); updateProgressUI(); }
      }).subscribe();
  } catch(e){ console.warn(e); }
}
async function toggleItem(id, checked) {
  checklistState[id]=checked; saveLocalState(); updateProgressUI();
  const row=document.getElementById('row-'+id);
  if(row) row.classList.toggle('checked', checked);
  if(supabaseClient){
    try { await supabaseClient.from('inventory_checklist').upsert({ item_id:id, is_checked:checked, updated_at:new Date().toISOString() },{onConflict:'item_id'}); } catch(e){ console.warn(e); }
  }
}
function batchSetChecklist(v){
  MASTER_INVENTORY.forEach(i=>checklistState[i.id]=v);
  saveLocalState(); renderManifestCards(); updateProgressUI();
  if(supabaseClient){
    const payload=MASTER_INVENTORY.map(i=>({item_id:i.id,is_checked:v,updated_at:new Date().toISOString()}));
    supabaseClient.from('inventory_checklist').upsert(payload,{onConflict:'item_id'}).catch(console.warn);
  }
}

function renderLenderPills() {
  const rack=document.getElementById('lenderPillsRack'); if(!rack) return;
  const lenders=['All',...new Set(MASTER_INVENTORY.map(i=>i.lender))];
  rack.innerHTML = lenders.map(l=>{
    const c = l==='All'?MASTER_INVENTORY.length:MASTER_INVENTORY.filter(i=>i.lender===l).length;
    return `<button class="lender-tab-pill ${l===activeLenderFilter?'active':''}" onclick="setLenderFilter('${l}')">${l} (${c})</button>`;
  }).join('');
}
function setLenderFilter(l){ activeLenderFilter=l; renderLenderPills(); renderManifestCards(); }
function handleSearch(v){
  activeSearchQuery=(v||'').toLowerCase().trim();
  const cb=document.getElementById('clearSearchBtn');
  if(cb) cb.style.display=activeSearchQuery.length>0?'block':'none';
  renderManifestCards();
}
function clearSearch(){ const i=document.getElementById('inventorySearchInput'); if(i)i.value=''; activeSearchQuery=''; const cb=document.getElementById('clearSearchBtn'); if(cb)cb.style.display='none'; renderManifestCards(); }
function toggleUnreturnedFilter(){
  filterUnreturnedOnly=!filterUnreturnedOnly;
  const b=document.getElementById('btnFilterUnreturned');
  if(b){ if(filterUnreturnedOnly){ b.classList.add('btn-coral'); b.textContent='✕ Tampilkan Semua'; } else { b.classList.remove('btn-coral'); b.textContent='⚠️ Belum Selesai'; } }
  renderManifestCards();
}
function renderManifestCards() {
  const grid=document.getElementById('manifestCardsGrid'); if(!grid) return;
  let filtered=MASTER_INVENTORY.filter(i=>{
    if(activeLenderFilter!=='All'&&i.lender!==activeLenderFilter) return false;
    if(activeSearchQuery.length>0){
      const m=i.name.toLowerCase().includes(activeSearchQuery)||i.lender.toLowerCase().includes(activeSearchQuery)||i.usage.toLowerCase().includes(activeSearchQuery);
      if(!m) return false;
    }
    if(filterUnreturnedOnly&&checklistState[i.id]) return false;
    return true;
  });
  if(filtered.length===0){ grid.innerHTML='<div style="grid-column:1/-1;padding:24px;text-align:center;color:var(--text-dim)">Tidak ada barang yang cocok.</div>'; return; }
  const grouped={};
  filtered.forEach(i=>{ if(!grouped[i.lender])grouped[i.lender]=[]; grouped[i.lender].push(i); });
  grid.innerHTML=Object.keys(grouped).map(l=>{
    const items=grouped[l];
    const cc=items.filter(i=>checklistState[i.id]).length;
    const rows=items.map(i=>{
      const isC=Boolean(checklistState[i.id]);
      const cls=i.status==='used'?'used':(i.status==='partial'?'partial':'standby');
      const lbl=i.status==='used'?'✅ Aktif':(i.status==='partial'?'⚠️ Sebagian':'☑️ Standby');
      return '<div class="checklist-item-row '+(isC?'checked':'')+'" id="row-'+i.id+'" onclick="triggerRowToggle(\''+i.id+'\')">'
        +'<div class="custom-checkbox-wrap" onclick="event.stopPropagation()"><input type="checkbox" id="chk-'+i.id+'" '+(isC?'checked':'')+' onchange="toggleItem(\''+i.id+'\',this.checked)"></div>'
        +'<div class="item-details-body"><span class="item-name-headline">'+i.name+' ('+i.qty+')</span>'
        +'<div class="item-meta-sub"><span class="status-badge '+cls+'">'+lbl+'</span><span>'+i.usage+'</span></div></div></div>';
    }).join('');
    return '<div class="lender-group-card"><div class="lender-group-header"><span class="lender-name-text">'+l+'</span><span class="lender-count-tag">'+cc+'/'+items.length+'</span></div><div class="items-list-container">'+rows+'</div></div>';
  }).join('');
}
function triggerRowToggle(id){
  const c=document.getElementById('chk-'+id);
  if(c){ c.checked=!c.checked; toggleItem(id,c.checked); }
}
function updateProgressUI() {
  const total=MASTER_INVENTORY.length;
  const checked=MASTER_INVENTORY.filter(i=>checklistState[i.id]).length;
  const pct=Math.round((checked/total)*100);
  const r=document.getElementById('progressRatioText'), p=document.getElementById('progressPctText'), f=document.getElementById('progressFillBar'), h=document.getElementById('manifestHeaderStatus');
  if(r)r.textContent=checked+' / '+total+' Ter-packing';
  if(p)p.textContent=pct+'%';
  if(f)f.style.width=pct+'%';
  if(h)h.textContent=checked+'/'+total+' Selesai';
}
function copyBriefWA(unit, gear) {
  const msg='*BRIEFING KAMERA IP26*\n\n📍 Unit: '+unit+'\n📦 Gear: '+gear+'\n📅 17 September 2026\n🏛️ Auditorium UNNES\n\nCek kelengkapan sebelum gladi.';
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(msg).then(showToast).catch(()=>fallbackCopy(msg)); }
  else fallbackCopy(msg);
}
function fallbackCopy(t){
  const ta=document.createElement('textarea'); ta.value=t; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.focus(); ta.select();
  try{ document.execCommand('copy'); showToast(); }catch(e){ alert('Gagal menyalin.'); }
  document.body.removeChild(ta);
}
function showToast(){
  const t=document.getElementById('fluidToast'); if(!t)return; t.style.display='block';
  setTimeout(()=>{ t.style.display='none'; },2200);
}
function setBusPgm(ch){
  document.querySelectorAll('.bus-label.pgm ~ .bus-buttons .btn-bus').forEach((b,i)=>{ b.classList.toggle('active-pgm', i+1===ch); });
  const l=document.getElementById('pgmLabel'); if(l)l.textContent='CAM '+ch;
}
function setBusPvw(ch){
  document.querySelectorAll('.bus-label.pvw ~ .bus-buttons .btn-bus').forEach((b,i)=>{ b.classList.toggle('active-pvw', i+1===ch); });
  const l=document.getElementById('pvwLabel'); if(l)l.textContent='CAM '+ch;
}
function setupKeyboardShortcuts(){
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){ e.preventDefault(); navJumpTo('secInv'); const s=document.getElementById('inventorySearchInput'); if(s)s.focus(); }
  });
}
