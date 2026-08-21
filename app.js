/**
 * IP26 PRODUCTION SYSTEM — BROADCAST COMMAND LOGIC
 * Architecture: Industrial Hardware Simulation & Master Run-Sheet
 */

// Master Inventory Database
const masterInventory = [
  // OWL Studio
  { id: 'owl-1', name: 'Sony A6000 Mirrorless Body', qty: '2 Units', src: 'OWL', type: 'CAM-BODY' },
  { id: 'owl-2', name: 'Sony A6400 4K Body', qty: '1 Unit', src: 'OWL', type: 'CAM-BODY' },
  { id: 'owl-3', name: 'Sony ZV-E10 Live Body', qty: '1 Unit', src: 'OWL', type: 'CAM-BODY' },
  { id: 'owl-4', name: 'Sony E PZ 18-105mm F4 G OSS', qty: '3 Units', src: 'OWL', type: 'OPTICS' },
  { id: 'owl-5', name: 'Sony E 50mm F1.8 OSS Prime', qty: '1 Unit', src: 'OWL', type: 'OPTICS' },
  { id: 'owl-6', name: 'NP-FW50 / NP-FZ100 Battery Pack', qty: '8 Units', src: 'OWL', type: 'POWER' },
  { id: 'owl-7', name: 'Multi-Bay Fast Charger Station', qty: '1 Set', src: 'OWL', type: 'POWER' },
  { id: 'owl-8', name: 'SanDisk Extreme 32GB SDHC Cards', qty: '4 Units', src: 'OWL', type: 'MEDIA' },
  { id: 'owl-9', name: 'Cinetreak Cinelive V1 Switcher Console', qty: '1 Set', src: 'OWL', type: 'VIDEO-MIX' },
  { id: 'owl-10', name: 'Hollyland Pyro H 4K Wireless TX/RX', qty: '1 Set', src: 'OWL', type: 'WIRELESS' },
  { id: 'owl-11', name: 'Heavy Duty Video Tripod Big', qty: '1 Unit', src: 'OWL', type: 'SUPPORT' },
  { id: 'owl-12', name: 'Micro-HDMI to Full HDMI Solid Adapter', qty: '2 Units', src: 'OWL', type: 'ADAPTER' },
  { id: 'owl-13', name: 'Micro-HDMI to Full HDMI 30cm Cable', qty: '1 Unit', src: 'OWL', type: 'CABLE' },
  { id: 'owl-14', name: 'HDMI Pro High-Speed Reel 30M', qty: '1 Reel', src: 'OWL', type: 'CABLE' },
  { id: 'owl-15', name: 'HDMI Pro High-Speed 20M', qty: '1 Unit', src: 'OWL', type: 'CABLE' },
  { id: 'owl-16', name: 'USB 3.0 UVC HDMI Capture Cards', qty: '2 Units', src: 'OWL', type: 'INGEST' },

  // UKK UNNES
  { id: 'ukk-1', name: 'Balanced XLR Mic/Line Cable 10M', qty: '3 Units', src: 'UKK', type: 'AUDIO' },
  { id: 'ukk-2', name: 'Lighting / Stand Rig Small', qty: '4 Units', src: 'UKK', type: 'SUPPORT' },
  { id: 'ukk-3', name: 'Camera Tripod Big', qty: '1 Unit', src: 'UKK', type: 'SUPPORT' },
  { id: 'ukk-4', name: 'Mini-HDMI to Full HDMI Cable 2.5M', qty: '1 Unit', src: 'UKK', type: 'CABLE' },
  { id: 'ukk-5', name: 'HDMI Cable Assorted (15M / 10M / 1.5M)', qty: '6 Units', src: 'UKK', type: 'CABLE' },
  { id: 'ukk-6', name: 'HDMI 4-Way Distribution Amp (Splitter)', qty: '1 Set', src: 'UKK', type: 'DISTRO' },
  { id: 'ukk-7', name: 'VGA to VGA + Active Converter Kit', qty: '3 Units', src: 'UKK', type: 'ADAPTER' },
  { id: 'ukk-8', name: 'Heavy Duty Main AC Terminal XCH', qty: 'Multi', src: 'UKK', type: 'POWER' },

  // GIA Deliksari
  { id: 'gia-1', name: 'NewBaxs CT80S USB Audio Console', qty: '1 Unit', src: 'GIA', type: 'AUDIO-MIX' },
  { id: 'gia-2', name: 'Balanced XLR Male-Female 3M', qty: '2 Units', src: 'GIA', type: 'AUDIO' },
  { id: 'gia-3', name: 'USB-A to USB-C Shielded Data Cable', qty: '1 Unit', src: 'GIA', type: 'DATA' },
  { id: 'gia-4', name: 'Camera Tripod Big Heavy', qty: '1 Unit', src: 'GIA', type: 'SUPPORT' },
  { id: 'gia-5', name: 'HDMI High-Speed Cable 1M', qty: '2 Units', src: 'GIA', type: 'CABLE' },

  // GKJ Ngaliyan
  { id: 'gkj-1', name: 'Lighting Stand Small Rig', qty: '1 Unit', src: 'GKJ', type: 'SUPPORT' },
  { id: 'gkj-2', name: 'HDMI Long Cable 15M & 10M', qty: '2 Units', src: 'GKJ', type: 'CABLE' },
  { id: 'gkj-3', name: 'HDMI Video Capture Card', qty: '1 Unit', src: 'GKJ', type: 'INGEST' },
  { id: 'gkj-4', name: 'HDMI Splitter 4CH + PSU', qty: '1 Set', src: 'GKJ', type: 'DISTRO' },

  // Andreas Master Box
  { id: 'and-1', name: 'Hanason AB17X USB-C Hi-Fi DAC', qty: '1 Unit', src: 'Andreas', type: 'DAC-AUDIO' },
  { id: 'and-2', name: 'Oraimo OAA310 Lossless USB-C DAC', qty: '1 Unit', src: 'Andreas', type: 'DAC-AUDIO' },
  { id: 'and-3', name: 'QKZ Hi7T & KZ EDX Pro In-Ear Monitors', qty: '2 Sets', src: 'Andreas', type: 'MONITOR' },
  { id: 'and-4', name: 'Vgen 128GB SSD + Toshiba 1TB Storage', qty: '2 Sets', src: 'Andreas', type: 'STORAGE' },
  { id: 'and-5', name: 'High-Speed USB Thumbdrive Depot (8G-64G)', qty: '4 Units', src: 'Andreas', type: 'STORAGE' },
  { id: 'and-6', name: 'Terminal Power Extensions (2C/3C/4C/XC)', qty: '6 Units', src: 'Andreas', type: 'POWER' },
  { id: 'and-7', name: 'Multi-Tap AC Terminal T Adapters', qty: '8 Units', src: 'Andreas', type: 'POWER' },
  { id: 'and-8', name: 'Field Maintenance Toolkit & Cable Ties', qty: '4 Sets', src: 'Andreas', type: 'TOOLKIT' },

  // Team & Individual Units
  { id: 'ind-1', name: 'Dual HDMI Capture Cards (ABON)', qty: '2 Units', src: 'Team', type: 'INGEST' },
  { id: 'ind-2', name: 'Sony A6600 + 24-70 Zeiss + DJI RS3 (Joel)', qty: '1 Rig', src: 'Team', type: 'GIMBAL-CAM' },
  { id: 'ind-3', name: 'Sony ZV-E10 + 16-50mm Kit (Kiel)', qty: '1 Unit', src: 'Team', type: 'CAM-BODY' },
  { id: 'ind-4', name: 'Production TV Multiview Monitor (Darrel)', qty: '1 Unit', src: 'Team', type: 'DISPLAY' },
  { id: 'ind-5', name: 'Production TV Multiview Monitor (Kezia)', qty: '1 Unit', src: 'Team', type: 'DISPLAY' },
  { id: 'ind-6', name: 'Production TV Multiview Monitor (Jennifer)', qty: '1 Unit', src: 'Team', type: 'DISPLAY' },
  { id: 'ind-7', name: 'iPhone 15 Mobile Rig (Jennifer)', qty: '1 Unit', src: 'Team', type: 'MOBILE-DOC' }
];

// Master Crew Matrix
const masterCrew = [
  { name: 'Alex', role: 'CAM 1 Lead (Center Wide & Tight)', div: 'broadcast', gear: 'Sony ZV-E10 · 18-105mm F4 G · HDMI 30M · Big Tripod' },
  { name: 'Kiel 1', role: 'CAM 2 Roaming (Stage Wireless)', div: 'broadcast', gear: 'Sony ZV-E10 · 18-105mm F4 G · Pyro H Wireless 5.8GHz' },
  { name: 'Dewi', role: 'CAM 3 Angle (Stage Left Wing)', div: 'broadcast', gear: 'Sony A6000 · 18-105mm F4 G · HDMI 10M · Big Tripod' },
  { name: 'Nathania', role: 'CAM 4 Angle (Stage Right Wing)', div: 'broadcast', gear: 'Sony A6000 · 16-50mm Kit · HDMI 10M · Big Tripod' },
  { name: 'Wilfred', role: 'Vision Director & Switcher Op', div: 'engine', gear: 'Cinetreak Cinelive V1 Console · Multiview TV' },
  { name: 'Andreas', role: 'Broadcast Stream & Resolume Lead', div: 'engine', gear: 'OBS Studio Station · Resolume Arena · Hi-Fi DAC' },
  { name: 'Rania', role: 'ProPresenter 1 (Lyrics & Side LEDs)', div: 'media', gear: 'ProPresenter 1 Laptop · HDMI 4CH Splitter' },
  { name: 'Filia', role: 'ProPresenter 2 (Sermon PPT & Center)', div: 'media', gear: 'ProPresenter 2 Laptop · Ingest Capture Card' },
  { name: 'Darrel', role: 'Stage Timekeeper Director', div: 'media', gear: 'ProPresenter 3 Laptop · Stage TV Display' },
  { name: 'Jordan / Yosua', role: 'FOH Virtual Sound Engineers', div: 'audio', gear: 'iPad & Laptop Remote VM · UNNES-ID Network' },
  { name: 'Nico', role: 'Lead Still Photographer', div: 'doc', gear: 'Sony A6400 · 50mm Prime · OWL Unit' },
  { name: 'Joel', role: 'Cinematic Aftermovie Op', div: 'doc', gear: 'Sony A6600 · Zeiss 24-70mm · DJI Ronin RS3' },
  { name: 'Jennifer', role: 'Social Media & Live Reels', div: 'doc', gear: 'iPhone 15 Mobile Video Rig' },
  { name: 'Kiel (Standby)', role: 'Technical Redundancy & Spares', div: 'engine', gear: 'Secondary Backup Laptop & Diagnostic Kit' }
];

// Signal Patchbay Nodes
const patchbayRoutes = [
  {
    title: 'PATCH 01: CAM 1 CENTER (Alex)',
    pic: 'Alex',
    type: 'video-patch',
    nodes: ['Sony ZV-E10 (Clean HDMI Out)', 'Micro-HDMI to HDMI Converter', '30M HDMI Studio Reel', 'Cinetreak V1 (Channel 1 In)']
  },
  {
    title: 'PATCH 02: CAM 2 WIRELESS (Kiel 1)',
    pic: 'Kiel 1',
    type: 'video-patch',
    nodes: ['Sony ZV-E10', 'Hollyland Pyro H TX', 'Zero-Latency 5.8GHz RF', 'Pyro H RX + 1.5M HDMI', 'Cinetreak V1 (Channel 2 In)']
  },
  {
    title: 'PATCH 03: CAM 3 LEFT WING (Dewi)',
    pic: 'Dewi',
    type: 'video-patch',
    nodes: ['Sony A6000', 'Micro-HDMI Converter', '10M HDMI Cable', 'Cinetreak V1 (Channel 3 In)']
  },
  {
    title: 'PATCH 04: CAM 4 RIGHT WING (Nathania)',
    pic: 'Nathania',
    type: 'video-patch',
    nodes: ['Sony A6000', 'Micro-HDMI Converter', '10M HDMI Cable', 'Cinetreak V1 (Channel 4 In)']
  },
  {
    title: 'PATCH 05: SWITCHER PGM TO OBS STREAM',
    pic: 'Wilfred / Andreas',
    type: 'video-patch',
    nodes: ['Cinetreak Cinelive V1 PGM', 'USB-C UVC 1080p60 Data Feed', 'OBS Studio Ingest', 'Live RTMP Broadcast Feed']
  },
  {
    title: 'PATCH 06: FOH AUDIO TO BROADCAST MIX',
    pic: 'UNNES / Andreas',
    type: 'audio-patch',
    nodes: ['Yamaha QL5 FOH Master Output', 'Dual Balanced XLR 10M + 3M', 'NewBaxs CT80S Submixer', 'USB-Audio Feed to OBS']
  },
  {
    title: 'PATCH 07: RESOLUME ARENA TO MAIN LED',
    pic: 'Andreas',
    type: 'media-patch',
    nodes: ['Resolume Arena Laptop', 'HDMI 15M Cable', 'NovaStar Video Processor', 'Center Main LED Wall']
  },
  {
    title: 'PATCH 08: PROPRESENTER 1 TO SIDE/REAR LEDS',
    pic: 'Rania',
    type: 'media-patch',
    nodes: ['ProPresenter 1 Laptop', 'HDMI 4CH Splitter Distro', 'Capture Card', 'LED Left, Right & Rear Walls']
  }
];

// Production Rundown Cue Sheet
const productionRundown = [
  { step: '01', time: 'PRE-SHOW', name: 'Open Gate & Background Music', media: 'UKK Profile Loop + Aftermovie IP25/IN25', out: 'LED Center', audio: 'Praise Playlist (FOH)', pic: 'Andreas / Audio' },
  { step: '02', time: '00:00', name: 'Opening Countdown & Welcome Video', media: 'Video Opening Countdown + Sambutan Bu Grave', out: 'LED Center + Sides', audio: 'Video Audio Track', pic: 'Filia / Rania' },
  { step: '03', time: '+00:08', name: 'Praise & Worship Session', media: 'Motion Background + Song Lyrics Live', out: 'LED Center + Sides + Rear', audio: 'Live Band (Yamaha QL5)', pic: 'Rania / Andreas' },
  { step: '04', time: '+00:45', name: 'Sermon & Word of God', media: 'Speaker PPT Slides + Bible Verses + Quotes', out: 'LED Center + Sides + TV Timer', audio: 'Preacher Mic (QL5 Ch 1)', pic: 'Filia / Darrel' },
  { step: '05', time: '+01:30', name: 'Offering & UKK Announcements', media: 'QRIS Barcode + UKK News + Prayer Points', out: 'LED All Screens', audio: 'Acoustic / Backsound', pic: 'Rania / Filia' },
  { step: '06', time: '+01:50', name: 'Benediction & Close Gate', media: 'Outro Motion + Sponsor / Credit Loop', out: 'LED All Screens', audio: 'Outro Music Track', pic: 'Wilfred / Andreas' },
  { step: '07', time: 'POST-SHOW', name: 'SOP Usung-Usung (Teardown & Packing)', media: 'Inventory Verification Checklist', out: 'N/A', audio: 'Mute Master All', pic: 'All Crew' }
];

// State
let pgmChannel = 1;
let pvwChannel = 2;
let selectedCatFilter = 'all';
let selectedCrewFilter = 'all';
let inventorySearchQuery = '';
let inventoryCheckedState = JSON.parse(localStorage.getItem('ip26_checked_items') || '{}');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavTabs();
  initLiveClock();
  initSwitcherEngine();
  initAudioDeskEngine();
  renderPatchbay();
  renderRundown();
  renderCrewDeck();
  renderDepotTable();
  updateDepotProgress();
  initActionControls();
});

// Real-time Clock
function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  function updateClock() {
    const d = new Date();
    if (clockEl) {
      clockEl.textContent = d.toLocaleTimeString('id-ID', { hour12: false }) + ' WIB';
    }
  }
  updateClock();
  setInterval(updateClock, 1000);
}

// Navigation Tabs
function initNavTabs() {
  const buttons = document.querySelectorAll('.deck-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');
      document.querySelectorAll('.deck-panel').forEach(p => p.classList.remove('active'));
      const activeP = document.getElementById(`panel-${target}`);
      if (activeP) activeP.classList.add('active');
    });
  });
}

// Switcher Engine (CUT, AUTO, PGM/PVW Selection)
function initSwitcherEngine() {
  // Multiview Quad Cells Click
  document.querySelectorAll('.cam-feed-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const cam = parseInt(cell.getAttribute('data-cam'), 10);
      selectPVW(cam);
    });
  });

  // Physical Push Buttons
  document.querySelectorAll('[data-pgm-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cam = parseInt(btn.getAttribute('data-pgm-btn'), 10);
      selectPGM(cam);
    });
  });

  document.querySelectorAll('[data-pvw-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cam = parseInt(btn.getAttribute('data-pvw-btn'), 10);
      selectPVW(cam);
    });
  });

  // Cut Button
  const cutBtn = document.getElementById('btn-switcher-cut');
  if (cutBtn) {
    cutBtn.addEventListener('click', executeCut);
  }

  // Auto Transition Button
  const autoBtn = document.getElementById('btn-switcher-auto');
  if (autoBtn) {
    autoBtn.addEventListener('click', executeAuto);
  }

  refreshSwitcherState();
}

function selectPGM(cam) {
  if (cam === pgmChannel) return;
  pgmChannel = cam;
  refreshSwitcherState();
}

function selectPVW(cam) {
  pvwChannel = cam;
  refreshSwitcherState();
}

function executeCut() {
  const temp = pgmChannel;
  pgmChannel = pvwChannel;
  pvwChannel = temp;
  refreshSwitcherState();
}

function executeAuto() {
  const pgmBox = document.getElementById('screen-pgm-master');
  if (pgmBox) {
    pgmBox.style.transition = 'opacity 0.25s ease';
    pgmBox.style.opacity = '0.4';
    setTimeout(() => {
      executeCut();
      pgmBox.style.opacity = '1';
    }, 250);
  } else {
    executeCut();
  }
}

function refreshSwitcherState() {
  // Update Multiview Master Screens
  const pgmText = document.getElementById('pgm-master-source');
  const pvwText = document.getElementById('pvw-master-source');
  const pgmHw = document.getElementById('current-pgm-text');

  if (pgmText) pgmText.textContent = `CAM ${pgmChannel}`;
  if (pvwText) pvwText.textContent = `CAM ${pvwChannel}`;
  if (pgmHw) pgmHw.textContent = `CAM ${pgmChannel}`;

  // Update Quad Cells
  document.querySelectorAll('.cam-feed-cell').forEach(cell => {
    const cam = parseInt(cell.getAttribute('data-cam'), 10);
    cell.classList.remove('active-pgm', 'active-pvw');
    const badge = cell.querySelector('.feed-tally-pill');
    if (cam === pgmChannel) {
      cell.classList.add('active-pgm');
      if (badge) { badge.textContent = '● PGM'; badge.style.color = 'var(--tally-pgm)'; }
    } else if (cam === pvwChannel) {
      cell.classList.add('active-pvw');
      if (badge) { badge.textContent = 'PVW'; badge.style.color = 'var(--tally-pvw)'; }
    } else {
      if (badge) { badge.textContent = 'STBY'; badge.style.color = 'var(--text-dim)'; }
    }
  });

  // Update Physical Push Buttons
  document.querySelectorAll('[data-pgm-btn]').forEach(btn => {
    const cam = parseInt(btn.getAttribute('data-pgm-btn'), 10);
    if (cam === pgmChannel) btn.classList.add('active-pgm-btn');
    else btn.classList.remove('active-pgm-btn');
  });

  document.querySelectorAll('[data-pvw-btn]').forEach(btn => {
    const cam = parseInt(btn.getAttribute('data-pvw-btn'), 10);
    if (cam === pvwChannel) btn.classList.add('active-pvw-btn');
    else btn.classList.remove('active-pvw-btn');
  });
}

// Audio Console VU Meter Engine
function initAudioDeskEngine() {
  const faders = document.querySelectorAll('.fader-range');
  
  setInterval(() => {
    document.querySelectorAll('.channel-strip').forEach(strip => {
      const fader = strip.querySelector('.fader-range');
      const isMuted = strip.getAttribute('data-muted') === 'true';
      const faderVal = isMuted ? 0 : (fader ? parseInt(fader.value, 10) : 75);
      
      const cells = strip.querySelectorAll('.vu-cell');
      const totalCells = cells.length;
      const targetActive = Math.round((faderVal / 100) * totalCells);
      // Random micro-jitter
      const jitter = isMuted ? 0 : Math.floor(Math.random() * 3) - 1;
      const activeCount = Math.max(0, Math.min(totalCells, targetActive + jitter));

      cells.forEach((cell, idx) => {
        cell.className = 'vu-cell';
        if (idx < activeCount) {
          if (idx >= totalCells - 2) cell.classList.add('red');
          else if (idx >= totalCells - 4) cell.classList.add('amber');
          else cell.classList.add('green');
        }
      });
    });
  }, 120);

  // Mute & Solo Buttons
  document.querySelectorAll('.btn-mute').forEach(btn => {
    btn.addEventListener('click', () => {
      const strip = btn.closest('.channel-strip');
      const muted = strip.getAttribute('data-muted') === 'true';
      strip.setAttribute('data-muted', !muted);
      btn.style.background = !muted ? 'var(--tally-pgm)' : '';
      btn.style.color = !muted ? '#ffffff' : '';
    });
  });
}

// Render Patchbay
function renderPatchbay() {
  const container = document.getElementById('patchbay-container');
  if (!container) return;

  container.innerHTML = patchbayRoutes.map(patch => `
    <div class="patch-strip-card ${patch.type}">
      <div class="patch-head">
        <h4 class="patch-title">${patch.title}</h4>
        <span class="patch-pic-pill">PIC: ${patch.pic}</span>
      </div>
      <div class="patch-flow-track">
        ${patch.nodes.map((node, i) => `
          <div class="patch-node-step">
            <span style="color: var(--signal-cyan); font-weight: 700;">[0${i+1}]</span>
            <span>${node}</span>
          </div>
          ${i < patch.nodes.length - 1 ? '<div class="patch-arrow">▼</div>' : ''}
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render Production Rundown Run-Sheet
function renderRundown() {
  const tbody = document.getElementById('rundown-tbody');
  if (!tbody) return;

  tbody.innerHTML = productionRundown.map(cue => `
    <tr class="${cue.step === '02' ? 'active-rundown-row' : ''}">
      <td style="font-family: var(--font-mono); font-weight: 700; color: var(--signal-cyan);">${cue.step}</td>
      <td style="font-family: var(--font-mono);">${cue.time}</td>
      <td><b>${cue.name}</b></td>
      <td><span class="cue-tag">${cue.media}</span></td>
      <td style="color: var(--text-main);">${cue.out}</td>
      <td style="color: var(--signal-amber); font-family: var(--font-mono);">${cue.audio}</td>
      <td style="font-family: var(--font-mono); font-size: 0.78rem;">${cue.pic}</td>
    </tr>
  `).join('');
}

// Render Crew Deck
function renderCrewDeck() {
  const container = document.getElementById('crew-deck-container');
  if (!container) return;

  const filtered = selectedCrewFilter === 'all'
    ? masterCrew
    : masterCrew.filter(c => c.div === selectedCrewFilter);

  container.innerHTML = filtered.map(crew => {
    const initials = crew.name.substring(0, 2).toUpperCase();
    return `
      <div class="crew-id-card">
        <div class="crew-id-top">
          <div class="crew-id-avatar">${initials}</div>
          <div>
            <div class="crew-id-name">${crew.name}</div>
            <div class="crew-id-role">${crew.role}</div>
          </div>
        </div>
        <div class="crew-id-gear">
          <b>ASSIGNED GEAR:</b><br/>${crew.gear}
        </div>
      </div>
    `;
  }).join('');
}

// Render Inventory Depot
function renderDepotTable() {
  const tbody = document.getElementById('inventory-tbody');
  if (!tbody) return;

  const filtered = masterInventory.filter(item => {
    const matchCat = selectedCatFilter === 'all' || item.src === selectedCatFilter;
    const matchSearch = item.name.toLowerCase().includes(inventorySearchQuery.toLowerCase()) ||
                        item.type.toLowerCase().includes(inventorySearchQuery.toLowerCase()) ||
                        item.src.toLowerCase().includes(inventorySearchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-dim);">TIDAK ADA ITEM INVENTARIS YANG COCOK.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const checked = !!inventoryCheckedState[item.id];
    return `
      <tr style="${checked ? 'opacity: 0.45; text-decoration: line-through;' : ''}">
        <td style="text-align: center; width: 40px;">
          <input type="checkbox" class="hw-check-input" data-id="${item.id}" ${checked ? 'checked' : ''} />
        </td>
        <td><b>${item.name}</b></td>
        <td><span class="cue-tag">${item.qty}</span></td>
        <td><span class="patch-pic-pill">${item.src}</span></td>
        <td><span style="color: var(--signal-cyan);">${item.type}</span></td>
      </tr>
    `;
  }).join('');

  tbody.querySelectorAll('.hw-check-input').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      inventoryCheckedState[id] = e.target.checked;
      localStorage.setItem('ip26_checked_items', JSON.stringify(inventoryCheckedState));
      renderDepotTable();
      updateDepotProgress();
    });
  });
}

function updateDepotProgress() {
  const total = masterInventory.length;
  const checkedCount = Object.keys(inventoryCheckedState).filter(k => inventoryCheckedState[k]).length;
  const pct = Math.round((checkedCount / total) * 100);

  const bar = document.getElementById('depot-bar-fill');
  const txt = document.getElementById('depot-progress-text');
  if (bar) bar.style.width = `${pct}%`;
  if (txt) txt.textContent = `${checkedCount} / ${total} (${pct}%) SIAP`;
}

// Action Controls (Filter, Search, Reset, Print)
function initActionControls() {
  // Category Filter Chips
  document.querySelectorAll('[data-cat-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-cat-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedCatFilter = chip.getAttribute('data-cat-filter');
      renderDepotTable();
    });
  });

  // Crew Filter Chips
  document.querySelectorAll('[data-crew-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-crew-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedCrewFilter = chip.getAttribute('data-crew-filter');
      renderCrewDeck();
    });
  });

  // Search
  const searchInput = document.getElementById('depot-search-field');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      inventorySearchQuery = e.target.value;
      renderDepotTable();
    });
  }

  // Reset Checklist
  const resetBtn = document.getElementById('btn-reset-depot');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset checklist inventaris pada sesi ini?')) {
        inventoryCheckedState = {};
        localStorage.removeItem('ip26_checked_items');
        renderDepotTable();
        updateDepotProgress();
      }
    });
  }

  // Print PDF
  const printBtn = document.getElementById('btn-print-depot');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
}
