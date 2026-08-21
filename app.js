/**
 * IP26 PRODUCTION COMMAND CENTER — APPLICATION CORE
 * Specification: Evreghen Command Center & Airwave Telemetry Standards
 */

// Master Inventory Data Model
const inventoryData = [
  // OWL Studio
  { id: 'owl-1', name: 'Sony A6000 Mirrorless Camera', qty: '2 Unit', category: 'OWL', type: 'Camera' },
  { id: 'owl-2', name: 'Sony A6400 4K Camera', qty: '1 Unit', category: 'OWL', type: 'Camera' },
  { id: 'owl-3', name: 'Sony ZV-E10 Live Camera', qty: '1 Unit', category: 'OWL', type: 'Camera' },
  { id: 'owl-4', name: 'Sony E PZ 18-105mm F4 G OSS', qty: '3 Unit', category: 'OWL', type: 'Lens' },
  { id: 'owl-5', name: 'Sony E 50mm F1.8 OSS Prime', qty: '1 Unit', category: 'OWL', type: 'Lens' },
  { id: 'owl-6', name: 'Battery NP-FW50 / NP-FZ100 Pack', qty: '8 Unit', category: 'OWL', type: 'Power' },
  { id: 'owl-7', name: 'Fast Multi-Charger Station', qty: '1 Pack', category: 'OWL', type: 'Power' },
  { id: 'owl-8', name: 'SanDisk Extreme 32GB High Speed', qty: '4 Unit', category: 'OWL', type: 'Storage' },
  { id: 'owl-9', name: 'Cinetreak Cinelive V1 Switcher + PSU', qty: '1 Pack', category: 'OWL', type: 'Switcher' },
  { id: 'owl-10', name: 'Hollyland Pyro H 4K Wireless TX/RX Kit', qty: '1 Pack', category: 'OWL', type: 'Wireless' },
  { id: 'owl-11', name: 'Heavy Duty Video Tripod Big', qty: '1 Unit', category: 'OWL', type: 'Rig' },
  { id: 'owl-12', name: 'HDMI to Micro-HDMI Solid Converter', qty: '2 Unit', category: 'OWL', type: 'Cable' },
  { id: 'owl-13', name: 'HDMI to Micro-HDMI Cable 30CM', qty: '1 Unit', category: 'OWL', type: 'Cable' },
  { id: 'owl-14', name: 'HDMI Pro Cable 30M Reel', qty: '1 Unit', category: 'OWL', type: 'Cable' },
  { id: 'owl-15', name: 'HDMI Pro Cable 20M', qty: '1 Unit', category: 'OWL', type: 'Cable' },
  { id: 'owl-16', name: 'Full HD USB 3.0 HDMI Capture Card', qty: '2 Unit', category: 'OWL', type: 'Ingest' },

  // UKK UNNES
  { id: 'ukk-1', name: 'Balanced XLR Female to Male Cable 10M', qty: '3 Unit', category: 'UKK', type: 'Audio' },
  { id: 'ukk-2', name: 'Stand Lighting Small Rig', qty: '4 Unit', category: 'UKK', type: 'Rig' },
  { id: 'ukk-3', name: 'Tripod Camera Big', qty: '1 Unit', category: 'UKK', type: 'Rig' },
  { id: 'ukk-4', name: 'HDMI to Mini-HDMI Cable 2.5M', qty: '1 Unit', category: 'UKK', type: 'Cable' },
  { id: 'ukk-5', name: 'HDMI Cable 15M / 10M / 1.5M Assorted', qty: '6 Unit', category: 'UKK', type: 'Cable' },
  { id: 'ukk-6', name: 'HDMI Splitter 4-Channel + Power Adaptor', qty: '1 Pack', category: 'UKK', type: 'Splitter' },
  { id: 'ukk-7', name: 'VGA to VGA Cables & Active Converters', qty: '3 Unit', category: 'UKK', type: 'Cable' },
  { id: 'ukk-8', name: 'Heavy Duty Terminal Power Cable XCH', qty: 'Multi', category: 'UKK', type: 'Power' },

  // GIA Deliksari
  { id: 'gia-1', name: 'Mixer Console NewBaxs CT80S USB', qty: '1 Unit', category: 'GIA', type: 'Audio' },
  { id: 'gia-2', name: 'XLR Female to Male Cable 3M', qty: '2 Unit', category: 'GIA', type: 'Audio' },
  { id: 'gia-3', name: 'USB-A to USB-C Shielded Data Cable', qty: '1 Unit', category: 'GIA', type: 'Cable' },
  { id: 'gia-4', name: 'Tripod Camera Big', qty: '1 Unit', category: 'GIA', type: 'Rig' },
  { id: 'gia-5', name: 'HDMI to HDMI Cable 1M High Speed', qty: '2 Unit', category: 'GIA', type: 'Cable' },

  // GKJ Ngaliyan
  { id: 'gkj-1', name: 'Stand Lighting Small', qty: '1 Unit', category: 'GKJ', type: 'Rig' },
  { id: 'gkj-2', name: 'HDMI Cable 15M & 10M', qty: '2 Unit', category: 'GKJ', type: 'Cable' },
  { id: 'gkj-3', name: 'HDMI Video Capture Card', qty: '1 Unit', category: 'GKJ', type: 'Ingest' },
  { id: 'gkj-4', name: 'HDMI Splitter 4CH + Adaptor', qty: '1 Pack', category: 'GKJ', type: 'Splitter' },

  // Andreas Master Box
  { id: 'and-1', name: 'USB-C DAC Hanason AB17X Hi-Fi', qty: '1 Unit', category: 'Andreas', type: 'Audio' },
  { id: 'and-2', name: 'USB-C DAC Oraimo OAA310 Lossless', qty: '1 Unit', category: 'Andreas', type: 'Audio' },
  { id: 'and-3', name: 'In-Ear Monitor QKZ Hi7T & KZ EDX Pro', qty: '2 Pack', category: 'Andreas', type: 'Monitoring' },
  { id: 'and-4', name: 'Fastdrive SSD Vgen 128GB + HDD 1TB', qty: '2 Pack', category: 'Andreas', type: 'Storage' },
  { id: 'and-5', name: 'Flashdrives Toolkit (8GB, 16GB, 32GB, 64GB)', qty: '4 Unit', category: 'Andreas', type: 'Storage' },
  { id: 'and-6', name: 'Terminal Power Cables (2CH, 3CH, 4CH, XCH)', qty: '6 Unit', category: 'Andreas', type: 'Power' },
  { id: 'and-7', name: 'Terminal T Multi-Plug Extenders', qty: '8 Unit', category: 'Andreas', type: 'Power' },
  { id: 'and-8', name: 'Master Tool Box, Screws, Ties & Tapes', qty: '4 Pack', category: 'Andreas', type: 'Toolkit' },

  // Team & Individual
  { id: 'ind-1', name: 'HDMI Capture Cards (ABON)', qty: '2 Unit', category: 'Team', type: 'Ingest' },
  { id: 'ind-2', name: 'Sony A6600 + Zeiss 24-70mm + DJI RS3 (Joel)', qty: '1 Rig', category: 'Team', type: 'Camera' },
  { id: 'ind-3', name: 'Sony ZV-E10 + Kit 16-50mm (Kiel)', qty: '1 Unit', category: 'Team', type: 'Camera' },
  { id: 'ind-4', name: 'Television Multiview Monitor (Darrel)', qty: '1 Unit', category: 'Team', type: 'Display' },
  { id: 'ind-5', name: 'Television Multiview Monitor (Kezia)', qty: '1 Unit', category: 'Team', type: 'Display' },
  { id: 'ind-6', name: 'Television Multiview Monitor (Jennifer)', qty: '1 Unit', category: 'Team', type: 'Display' },
  { id: 'ind-7', name: 'iPhone 15 Mobile Social Media (Jennifer)', qty: '1 Unit', category: 'Team', type: 'Mobile' }
];

// Crew Roster Model
const crewMembers = [
  { name: 'Alex', role: 'CAM 1 Operator (Main Broadcast Center)', division: 'broadcast', gear: 'Sony ZV-E10 + 18-105mm G + HDMI 30M + Big Tripod' },
  { name: 'Kiel 1', role: 'CAM 2 Operator (Wireless Roaming Stage)', division: 'broadcast', gear: 'Sony ZV-E10 + 18-105mm G + Hollyland Pyro H TX/RX' },
  { name: 'Dewi', role: 'CAM 3 Operator (Left Wing Stage Angle)', division: 'broadcast', gear: 'Sony A6000 + 18-105mm G + HDMI 10M + Big Tripod' },
  { name: 'Nathania', role: 'CAM 4 Operator (Right Wing Stage Angle)', division: 'broadcast', gear: 'Sony A6000 + 16-50mm Kit + HDMI 10M + Big Tripod' },
  { name: 'Wilfred', role: 'Video Switcher Master Director', division: 'engine', gear: 'Cinetreak Cinelive V1 + Multiview Monitor TV' },
  { name: 'Andreas', role: 'OBS Live Stream & Resolume Arena Lead', division: 'engine', gear: 'OBS Studio Station + Resolume Arena + Master DAC' },
  { name: 'Rania', role: 'ProPresenter 1 (Lyrics / LED Sides & Back)', division: 'media', gear: 'Laptop ProPresenter 1 + HDMI Splitter 4CH' },
  { name: 'Filia', role: 'ProPresenter 2 (Sermon / Center LED)', division: 'media', gear: 'Laptop ProPresenter 2 + Capture Card to Resolume' },
  { name: 'Darrel', role: 'Timekeeper & Stage Timer Master', division: 'media', gear: 'Laptop ProPresenter 3 + Stage TV Monitor' },
  { name: 'Jordan / Yosua', role: 'Virtual Sound Mixer Engineers', division: 'audio', gear: 'iPad & Laptop VM + UNNES-ID Network Control' },
  { name: 'Nico', role: 'Lead Still Photographer', division: 'doc', gear: 'Sony A6400 + 50mm Prime (OWL)' },
  { name: 'Joel', role: 'Cinematic Aftermovie Videographer', division: 'doc', gear: 'Sony A6600 + Zeiss 24-70mm + DJI RS3 Gimbal' },
  { name: 'Jennifer', role: 'Mobile Reels & Social Media Coverage', division: 'doc', gear: 'iPhone 15 Mobile Rig' },
  { name: 'Kiel (Standby)', role: 'Technical Redundancy & Backup Station', division: 'engine', gear: 'Secondary Backup Station Laptop' }
];

// Signal Routing Data Model
const signalRoutes = [
  {
    title: 'CAM 1 — Main Stage Wide & Tight Feed',
    pic: 'Alex',
    nodes: ['Sony ZV-E10 + 18-105mm G', 'Micro-HDMI Converter', 'HDMI Cable 20M/30M', 'HDMI Splitter 4CH', 'Cinetreak V1 (Input 1)']
  },
  {
    title: 'CAM 2 — Wireless Roaming Stage Angle',
    pic: 'Kiel 1',
    nodes: ['Sony ZV-E10 + 18-105mm G', 'Hollyland Pyro H TX', '5.8GHz Zero-Latency Link', 'Pyro H RX + HDMI 1.5M', 'Cinetreak V1 (Input 2)']
  },
  {
    title: 'CAM 3 — Left Wing Angle',
    pic: 'Dewi',
    nodes: ['Sony A6000 + 18-105mm G', 'Micro-HDMI Converter', 'HDMI Cable 10M', 'Cinetreak V1 (Input 3)']
  },
  {
    title: 'CAM 4 — Right Wing Angle',
    pic: 'Nathania',
    nodes: ['Sony A6000 + 16-50mm Kit', 'Micro-HDMI Converter', 'HDMI Cable 10M', 'Cinetreak V1 (Input 4)']
  },
  {
    title: 'Video Switcher to OBS Live Stream',
    pic: 'Andreas & Wilfred',
    nodes: ['Cinetreak Cinelive V1 (PGM)', 'USB-C UVC 1080p60 Output', 'OBS Studio Laptop (RTMP Stream)', 'YouTube Live Feed']
  },
  {
    title: 'FOH Master Audio to Submixer & Stream',
    pic: 'UNNES & Andreas',
    nodes: ['Yamaha QL5 FOH Console', 'Dual Balanced XLR 10M + 3M', 'NewBaxs CT80S Submixer', 'USB Out to OBS Laptop']
  },
  {
    title: 'Resolume Arena to Main Center LED',
    pic: 'Andreas',
    nodes: ['Resolume Arena Laptop', 'HDMI 15M + HDMI Capture', 'NovaStar Video Processor', 'LED Screen Center Main']
  },
  {
    title: 'ProPresenter 1 to Left, Right & Rear LEDs',
    pic: 'Rania',
    nodes: ['ProPresenter 1 Laptop', 'HDMI Splitter 4CH', 'HDMI Capture Card', 'LED Left, Right & Back Panels']
  }
];

// App State
let activeTab = 'overview';
let activeCategoryFilter = 'all';
let activeCrewFilter = 'all';
let searchQuery = '';
let checkedItems = JSON.parse(localStorage.getItem('ip26_checked_items') || '{}');
let pgmChannel = 1; // Active live channel (1-4)
let pvwChannel = 2; // Preview channel (1-4)

// Bootstrapping
document.addEventListener('DOMContentLoaded', () => {
  setupNavigationTabs();
  setupLiveClock();
  setupMultiviewSimulator();
  setupVUMeterAnimation();
  renderSignalRoutes();
  renderCrewRoster();
  renderInventoryTable();
  updateProgressTracker();
  setupActionListeners();
});

// Real-time Clock Setup
function setupLiveClock() {
  const clockEl = document.getElementById('live-clock');
  function tick() {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString('id-ID', { hour12: false }) + ' WIB';
    }
  }
  tick();
  setInterval(tick, 1000);
}

// Navigation Tabs
function setupNavigationTabs() {
  const tabs = document.querySelectorAll('.nav-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      const activePanel = document.getElementById(`panel-${targetId}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

// Multiview Simulator
function setupMultiviewSimulator() {
  const cams = document.querySelectorAll('.multiview-cam');
  cams.forEach(cam => {
    cam.addEventListener('click', () => {
      const camNum = parseInt(cam.getAttribute('data-cam'), 10);
      if (pgmChannel === camNum) {
        // Toggle PVW
        pvwChannel = (pvwChannel % 4) + 1;
      } else {
        // Switch PGM to clicked, old PGM becomes PVW
        pvwChannel = pgmChannel;
        pgmChannel = camNum;
      }
      updateMultiviewUI();
    });
  });
  updateMultiviewUI();
}

function updateMultiviewUI() {
  const cams = document.querySelectorAll('.multiview-cam');
  cams.forEach(cam => {
    const camNum = parseInt(cam.getAttribute('data-cam'), 10);
    cam.classList.remove('pgm-active', 'pvw-active');
    
    const pill = cam.querySelector('.cam-tally-pill');
    if (camNum === pgmChannel) {
      cam.classList.add('pgm-active');
      if (pill) pill.textContent = '● PGM ON AIR';
    } else if (camNum === pvwChannel) {
      cam.classList.add('pvw-active');
      if (pill) pill.textContent = 'PVW PREVIEW';
    } else {
      if (pill) pill.textContent = 'STANDBY';
    }
  });

  const pgmText = document.getElementById('current-pgm-text');
  if (pgmText) pgmText.textContent = `CAM ${pgmChannel}`;
}

// Simulated VU Meter Micro-animation
function setupVUMeterAnimation() {
  setInterval(() => {
    const tracks = document.querySelectorAll('.vu-bar-track');
    tracks.forEach(track => {
      const segments = track.querySelectorAll('.vu-segment');
      const activeCount = Math.floor(Math.random() * (segments.length - 3)) + 3;
      segments.forEach((seg, idx) => {
        seg.className = 'vu-segment';
        if (idx < activeCount) {
          if (idx >= segments.length - 2) {
            seg.classList.add('active-red');
          } else if (idx >= segments.length - 5) {
            seg.classList.add('active-yellow');
          } else {
            seg.classList.add('active-green');
          }
        }
      });
    });
  }, 180);
}

// Render Routes
function renderSignalRoutes() {
  const container = document.getElementById('routes-masonry');
  if (!container) return;

  container.innerHTML = signalRoutes.map(route => `
    <div class="route-panel">
      <div class="route-top-row">
        <h4 class="route-name">${route.title}</h4>
        <span class="route-pic-tag">PIC: ${route.pic}</span>
      </div>
      <div class="flow-node-list">
        ${route.nodes.map((node, idx) => `
          <div class="flow-node-item">
            <span>${getNodeEmoji(node)}</span>
            <span>${node}</span>
          </div>
          ${idx < route.nodes.length - 1 ? '<div class="flow-node-arrow">▼</div>' : ''}
        `).join('')}
      </div>
    </div>
  `).join('');
}

function getNodeEmoji(text) {
  const t = text.toLowerCase();
  if (t.includes('sony') || t.includes('cam')) return '📷';
  if (t.includes('wireless') || t.includes('pyro') || t.includes('5.8ghz')) return '📡';
  if (t.includes('cinetreak') || t.includes('switcher')) return '🎛️';
  if (t.includes('splitter')) return '🔀';
  if (t.includes('mixer') || t.includes('yamaha') || t.includes('xlr')) return '🔊';
  if (t.includes('led') || t.includes('tv') || t.includes('screen')) return '🖥️';
  if (t.includes('laptop') || t.includes('obs') || t.includes('resolume') || t.includes('propresenter')) return '💻';
  return '🔌';
}

// Render Crew Roster
function renderCrewRoster() {
  const container = document.getElementById('crew-cards-container');
  if (!container) return;

  const filtered = activeCrewFilter === 'all' 
    ? crewMembers 
    : crewMembers.filter(c => c.division === activeCrewFilter);

  container.innerHTML = filtered.map(crew => {
    const initials = crew.name.substring(0, 2).toUpperCase();
    return `
      <div class="crew-member-card">
        <div class="crew-profile-row">
          <div class="crew-avatar-ring">${initials}</div>
          <div>
            <div class="crew-name-text">${crew.name}</div>
            <div class="crew-division-label">${crew.role}</div>
          </div>
        </div>
        <div class="crew-equipment-box">
          <b>Assigned Gear:</b> ${crew.gear}
        </div>
      </div>
    `;
  }).join('');
}

// Render Inventory Table
function renderInventoryTable() {
  const tbody = document.getElementById('inventory-table-body');
  if (!tbody) return;

  const filtered = inventoryData.filter(item => {
    const matchesCategory = activeCategoryFilter === 'all' || item.category === activeCategoryFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 2.5rem; color: var(--text-muted);">Tidak ada item inventaris yang cocok dengan pencarian.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isChecked = !!checkedItems[item.id];
    return `
      <tr style="${isChecked ? 'opacity: 0.55; text-decoration: line-through;' : ''}">
        <td style="width: 44px; text-align: center;">
          <input type="checkbox" class="item-checkbox" data-id="${item.id}" ${isChecked ? 'checked' : ''} />
        </td>
        <td><b>${item.name}</b></td>
        <td><span class="meta-chip">${item.qty}</span></td>
        <td><span class="meta-chip">${item.category}</span></td>
        <td><span class="meta-chip" style="color: var(--brand-orange);">${item.type}</span></td>
      </tr>
    `;
  }).join('');

  tbody.querySelectorAll('.item-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      checkedItems[id] = e.target.checked;
      localStorage.setItem('ip26_checked_items', JSON.stringify(checkedItems));
      renderInventoryTable();
      updateProgressTracker();
    });
  });
}

// Update Checklist Progress Tracker
function updateProgressTracker() {
  const total = inventoryData.length;
  const checkedCount = Object.keys(checkedItems).filter(k => checkedItems[k]).length;
  const percentage = Math.round((checkedCount / total) * 100);

  const fillEl = document.getElementById('progress-bar-fill');
  const countEl = document.getElementById('progress-count-text');

  if (fillEl) fillEl.style.width = `${percentage}%`;
  if (countEl) countEl.textContent = `${checkedCount} / ${total} (${percentage}%) Siap`;
}

// Listeners Setup
function setupActionListeners() {
  // Category Filters
  document.querySelectorAll('[data-cat-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-cat-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.getAttribute('data-cat-filter');
      renderInventoryTable();
    });
  });

  // Crew Division Filters
  document.querySelectorAll('[data-crew-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-crew-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCrewFilter = btn.getAttribute('data-crew-filter');
      renderCrewRoster();
    });
  });

  // Search Field
  const searchInput = document.getElementById('inventory-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderInventoryTable();
    });
  }

  // Reset Button
  const resetBtn = document.getElementById('reset-inventory-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset semua checklist inventaris di perangkat ini?')) {
        checkedItems = {};
        localStorage.removeItem('ip26_checked_items');
        renderInventoryTable();
        updateProgressTracker();
      }
    });
  }

  // Print / Export Button
  const printBtn = document.getElementById('print-checklist-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
