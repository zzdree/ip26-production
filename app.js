// IP26 Production Web Blueprint Application Logic

const inventoryData = [
  // OWL
  { id: 'owl-1', name: 'Sony A6000', qty: '2 Unit', category: 'OWL', type: 'Camera' },
  { id: 'owl-2', name: 'Sony A6400', qty: '1 Unit', category: 'OWL', type: 'Camera' },
  { id: 'owl-3', name: 'Sony ZV-E10', qty: '1 Unit', category: 'OWL', type: 'Camera' },
  { id: 'owl-4', name: 'Sony Lens 18-105mm F4 G', qty: '3 Unit', category: 'OWL', type: 'Lens' },
  { id: 'owl-5', name: 'Sony Lens 50mm Prime', qty: '1 Unit', category: 'OWL', type: 'Lens' },
  { id: 'owl-6', name: 'Battery NP-FW50 / NP-FZ100', qty: '8 Unit', category: 'OWL', type: 'Power' },
  { id: 'owl-7', name: 'Battery Charger Station', qty: '1 Pack', category: 'OWL', type: 'Power' },
  { id: 'owl-8', name: 'Memory Card 32GB High Speed', qty: '4 Unit', category: 'OWL', type: 'Storage' },
  { id: 'owl-9', name: 'Cinetreak Cinelive V1 Switcher + Power', qty: '1 Pack', category: 'OWL', type: 'Switcher' },
  { id: 'owl-10', name: 'Hollyland Pyro H Wireless Kit + Power', qty: '1 Pack', category: 'OWL', type: 'Wireless' },
  { id: 'owl-11', name: 'Tripod Camera Big Heavy Duty', qty: '1 Unit', category: 'OWL', type: 'Rig' },
  { id: 'owl-12', name: 'HDMI to Micro HDMI Converter', qty: '2 Unit', category: 'OWL', type: 'Cable' },
  { id: 'owl-13', name: 'HDMI to Micro HDMI Cable 30CM', qty: '1 Unit', category: 'OWL', type: 'Cable' },
  { id: 'owl-14', name: 'HDMI Cable 30M High Speed', qty: '1 Unit', category: 'OWL', type: 'Cable' },
  { id: 'owl-15', name: 'HDMI Cable 20M High Speed', qty: '1 Unit', category: 'OWL', type: 'Cable' },
  { id: 'owl-16', name: 'HDMI Video Capture Card', qty: '2 Unit', category: 'OWL', type: 'Ingest' },

  // UKK
  { id: 'ukk-1', name: 'XLR Female to Male Cable 10M', qty: '3 Unit', category: 'UKK', type: 'Audio' },
  { id: 'ukk-2', name: 'Stand Lighting Small', qty: '4 Unit', category: 'UKK', type: 'Rig' },
  { id: 'ukk-3', name: 'Tripod Camera Big', qty: '1 Unit', category: 'UKK', type: 'Rig' },
  { id: 'ukk-4', name: 'HDMI to Mini HDMI Cable 2.5M', qty: '1 Unit', category: 'UKK', type: 'Cable' },
  { id: 'ukk-5', name: 'HDMI Cable 15M / 10M / 1.5M', qty: '6 Unit', category: 'UKK', type: 'Cable' },
  { id: 'ukk-6', name: 'HDMI Splitter 4CH + Adaptor', qty: '1 Pack', category: 'UKK', type: 'Splitter' },
  { id: 'ukk-7', name: 'VGA to VGA Cables & Converters', qty: '3 Unit', category: 'UKK', type: 'Cable' },
  { id: 'ukk-8', name: 'Terminal Cable XCH (Heavy Duty)', qty: 'Multi', category: 'UKK', type: 'Power' },

  // GIA Deliksari
  { id: 'gia-1', name: 'Mixer NewBaxs CT80S', qty: '1 Unit', category: 'GIA', type: 'Audio' },
  { id: 'gia-2', name: 'XLR Female to Male Cable 3M', qty: '2 Unit', category: 'GIA', type: 'Audio' },
  { id: 'gia-3', name: 'USB-A to USB-C Data Cable', qty: '1 Unit', category: 'GIA', type: 'Cable' },
  { id: 'gia-4', name: 'Tripod Camera Big', qty: '1 Unit', category: 'GIA', type: 'Rig' },
  { id: 'gia-5', name: 'HDMI to HDMI Cable 1M', qty: '2 Unit', category: 'GIA', type: 'Cable' },

  // GKJ Ngaliyan
  { id: 'gkj-1', name: 'Stand Lighting Small', qty: '1 Unit', category: 'GKJ', type: 'Rig' },
  { id: 'gkj-2', name: 'HDMI Cable 15M & 10M', qty: '2 Unit', category: 'GKJ', type: 'Cable' },
  { id: 'gkj-3', name: 'HDMI Video Capture Card', qty: '1 Unit', category: 'GKJ', type: 'Ingest' },
  { id: 'gkj-4', name: 'HDMI Splitter 4CH + Adaptor', qty: '1 Pack', category: 'GKJ', type: 'Splitter' },

  // Andreas Master Box
  { id: 'and-1', name: 'USB-C DAC Hanason AB17X', qty: '1 Unit', category: 'Andreas', type: 'Audio' },
  { id: 'and-2', name: 'USB-C DAC Oraimo OAA310', qty: '1 Unit', category: 'Andreas', type: 'Audio' },
  { id: 'and-3', name: 'In-Ear Monitor QKZ Hi7T & KZ EDX Pro', qty: '2 Pack', category: 'Andreas', type: 'Monitoring' },
  { id: 'and-4', name: 'Fastdrive SSD Vgen 128GB + HDD 1TB', qty: '2 Pack', category: 'Andreas', type: 'Storage' },
  { id: 'and-5', name: 'Flashdrives Pack (8GB, 16GB, 32GB, 64GB)', qty: '4 Unit', category: 'Andreas', type: 'Storage' },
  { id: 'and-6', name: 'Terminal Cables (2CH, 3CH, 4CH, XCH)', qty: '6 Unit', category: 'Andreas', type: 'Power' },
  { id: 'and-7', name: 'Terminal T Multi-Plug', qty: '8 Unit', category: 'Andreas', type: 'Power' },
  { id: 'and-8', name: 'Master Tool Box, Screws, Ties & Tapes', qty: '4 Pack', category: 'Andreas', type: 'Toolkit' },

  // Individual & Team Loans
  { id: 'ind-1', name: 'HDMI Capture Card (ABON)', qty: '2 Unit', category: 'Team', type: 'Ingest' },
  { id: 'ind-2', name: 'Sony A6600 + Zeiss 24-70mm + RS3 (Joel)', qty: '1 Rig', category: 'Team', type: 'Camera' },
  { id: 'ind-3', name: 'Sony ZV-E10 + Kit 16-50mm (Kiel)', qty: '1 Unit', category: 'Team', type: 'Camera' },
  { id: 'ind-4', name: 'Television Multiview Monitor (Darrel)', qty: '1 Unit', category: 'Team', type: 'Display' },
  { id: 'ind-5', name: 'Television Multiview Monitor (Kezia)', qty: '1 Unit', category: 'Team', type: 'Display' },
  { id: 'ind-6', name: 'Television Multiview Monitor (Jennifer)', qty: '1 Unit', category: 'Team', type: 'Display' },
  { id: 'ind-7', name: 'iPhone 15 Mobile Documentation (Jennifer)', qty: '1 Unit', category: 'Team', type: 'Mobile' }
];

const crewMembers = [
  { name: 'Alex', role: 'CAM 1 Operator (Main Broadcast)', division: 'broadcast', gear: 'Sony ZV-E10 + 18-105mm + HDMI 30M + Big Tripod' },
  { name: 'Kiel 1', role: 'CAM 2 Operator (Wireless Live)', division: 'broadcast', gear: 'Sony ZV-E10 + 18-105mm + Hollyland Pyro H TX/RX' },
  { name: 'Dewi', role: 'CAM 3 Operator (Side Broadcast)', division: 'broadcast', gear: 'Sony A6000 + 18-105mm + HDMI 10M + Big Tripod' },
  { name: 'Nathania', role: 'CAM 4 Operator (Wide Broadcast)', division: 'broadcast', gear: 'Sony A6000 + 16-50mm + HDMI 10M + Big Tripod' },
  { name: 'Wilfred', role: 'Video Switcher Master', division: 'engine', gear: 'Cinetreak Cinelive V1 + Multiview Monitor' },
  { name: 'Andreas', role: 'OBS Stream & Resolume Arena', division: 'engine', gear: 'OBS Laptop + Resolume Arena + Master DAC' },
  { name: 'Rania', role: 'ProPresenter 1 (Lyrics / LED Sides)', division: 'media', gear: 'Laptop ProPresenter 1 + HDMI Splitter 4CH' },
  { name: 'Filia', role: 'ProPresenter 2 (Sermon / Center LED)', division: 'media', gear: 'Laptop ProPresenter 2 + Capture Card to Resolume' },
  { name: 'Darrel', role: 'Timekeeper Master', division: 'media', gear: 'Laptop ProPresenter 3 + Stage TV Monitor' },
  { name: 'Jordan / Yosua', role: 'Virtual Mixer Operator', division: 'audio', gear: 'iPad / Laptop VM + UNNES-ID Network Control' },
  { name: 'Nico', role: 'Lead Photographer', division: 'doc', gear: 'Sony A6400 + 50mm Prime (OWL)' },
  { name: 'Joel', role: 'Cinematic Videographer', division: 'doc', gear: 'Sony A6600 + Zeiss 24-70mm + DJI RS3 Gimbal' },
  { name: 'Jennifer', role: 'Social Media & Mobile Reels', division: 'doc', gear: 'iPhone 15 Mobile Rig' },
  { name: 'Kiel (Backup)', role: 'Technical Standby & Redundancy', division: 'engine', gear: 'Secondary Backup Station Laptop' }
];

const broadcastRoutes = [
  {
    id: 'cam1',
    title: 'CAM 1 — Main Stage Wide/Medium',
    operator: 'Alex',
    type: 'live-cam',
    nodes: ['Sony ZV-E10 + 18-105mm', 'Micro-HDMI Conv', 'HDMI 20M/30M', 'HDMI Splitter 4CH', 'Cinetreak V1 (CH 1)']
  },
  {
    id: 'cam2',
    title: 'CAM 2 — Wireless Roaming Stage',
    operator: 'Kiel 1',
    type: 'live-cam',
    nodes: ['Sony ZV-E10 + 18-105mm', 'Hollyland Pyro H TX', 'Wireless 5GHz Link', 'Pyro H RX + HDMI 1.5M', 'Cinetreak V1 (CH 2)']
  },
  {
    id: 'cam3',
    title: 'CAM 3 — Left Wing Angle',
    operator: 'Dewi',
    type: 'live-cam',
    nodes: ['Sony A6000 + 18-105mm', 'Micro-HDMI Conv', 'HDMI 10M Cable', 'Cinetreak V1 (CH 3)']
  },
  {
    id: 'cam4',
    title: 'CAM 4 — Right Wing Angle',
    operator: 'Nathania',
    type: 'live-cam',
    nodes: ['Sony A6000 + 16-50mm', 'Micro-HDMI Conv', 'HDMI 10M Cable', 'Cinetreak V1 (CH 4)']
  },
  {
    id: 'switcher-obs',
    title: 'Switcher to Live OBS Stream',
    operator: 'Andreas & Wilfred',
    type: 'media-route',
    nodes: ['Cinetreak Cinelive V1', 'USB-C UVC Data Out', 'Laptop OBS Studio', 'YouTube / Live Feed']
  },
  {
    id: 'audio-master',
    title: 'Main Audio & Submix Flow',
    operator: 'UNNES & Andreas',
    type: 'audio-route',
    nodes: ['Yamaha QL5 FOH Mixer', 'XLR Female-Male 10M + 3M', 'NewBaxs CT80S Submixer', 'USB Out to OBS Laptop']
  },
  {
    id: 'resolume-led',
    title: 'Resolume Arena to Center LED',
    operator: 'Andreas',
    type: 'media-route',
    nodes: ['Resolume Arena Laptop', 'HDMI 15M + Capture Card', 'Nova Video Processor', 'LED Screen Center Main']
  },
  {
    id: 'propresenter-sides',
    title: 'ProPresenter 1 to Left/Right LED',
    operator: 'Rania',
    type: 'media-route',
    nodes: ['ProPresenter 1 Laptop', 'HDMI Splitter 4CH', 'HDMI Capture Card', 'LED Left, Right & Back']
  }
];

// Initialize State
let activeTab = 'overview';
let activeCategoryFilter = 'all';
let activeCrewFilter = 'all';
let searchQuery = '';
let checkedItems = JSON.parse(localStorage.getItem('ip26_checked_items') || '{}');

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  setupClock();
  renderRoutes();
  renderCrew();
  renderInventory();
  updateProgress();
  setupEventListeners();
});

// Setup Live Clock
function setupClock() {
  const clockEl = document.getElementById('live-clock');
  function update() {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString('id-ID', { hour12: false }) + ' WIB';
    }
  }
  update();
  setInterval(update, 1000);
}

// Setup Tabs
function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const target = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      const activeContent = document.getElementById(`tab-${target}`);
      if (activeContent) activeContent.classList.add('active');
    });
  });
}

// Render Routing Cards
function renderRoutes() {
  const container = document.getElementById('routes-container');
  if (!container) return;

  container.innerHTML = broadcastRoutes.map(route => `
    <div class="route-card ${route.type}">
      <div class="route-header">
        <h4 class="route-title">${route.title}</h4>
        <span class="operator-tag">PIC: ${route.operator}</span>
      </div>
      <div class="signal-chain">
        ${route.nodes.map((node, idx) => `
          <div class="chain-node">
            <span class="chain-icon">${getIconForNode(node)}</span>
            <span>${node}</span>
          </div>
          ${idx < route.nodes.length - 1 ? '<div class="chain-arrow">▼</div>' : ''}
        `).join('')}
      </div>
    </div>
  `).join('');
}

function getIconForNode(name) {
  const lower = name.toLowerCase();
  if (lower.includes('sony') || lower.includes('cam')) return '📷';
  if (lower.includes('wireless') || lower.includes('pyro')) return '📡';
  if (lower.includes('cinetreak') || lower.includes('switcher')) return '🎛️';
  if (lower.includes('splitter')) return '🔀';
  if (lower.includes('mixer') || lower.includes('yamaha') || lower.includes('xlr')) return '🔊';
  if (lower.includes('led') || lower.includes('tv') || lower.includes('monitor')) return '🖥️';
  if (lower.includes('laptop') || lower.includes('obs') || lower.includes('resolume') || lower.includes('propresenter')) return '💻';
  return '🔌';
}

// Render Crew Grid
function renderCrew() {
  const container = document.getElementById('crew-container');
  if (!container) return;

  const filtered = activeCrewFilter === 'all' 
    ? crewMembers 
    : crewMembers.filter(c => c.division === activeCrewFilter);

  container.innerHTML = filtered.map(crew => {
    const initials = crew.name.substring(0, 2).toUpperCase();
    return `
      <div class="crew-card">
        <div class="crew-top">
          <div class="crew-avatar">${initials}</div>
          <div>
            <div class="crew-name">${crew.name}</div>
            <div class="crew-role">${crew.role}</div>
          </div>
        </div>
        <div class="crew-gear-badge">
          <b>Gear:</b> ${crew.gear}
        </div>
      </div>
    `;
  }).join('');
}

// Render Inventory Table
function renderInventory() {
  const tbody = document.getElementById('inventory-tbody');
  if (!tbody) return;

  const filtered = inventoryData.filter(item => {
    const matchesCategory = activeCategoryFilter === 'all' || item.category === activeCategoryFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 2rem; color: var(--text-muted);">Tidak ada item yang sesuai pencarian.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((item, idx) => {
    const isChecked = !!checkedItems[item.id];
    return `
      <tr style="${isChecked ? 'opacity: 0.6; text-decoration: line-through;' : ''}">
        <td style="width: 40px; text-align: center;">
          <input type="checkbox" class="item-check" data-id="${item.id}" ${isChecked ? 'checked' : ''} />
        </td>
        <td><b>${item.name}</b></td>
        <td><span class="source-badge">${item.qty}</span></td>
        <td><span class="source-badge">${item.category}</span></td>
        <td><span class="source-badge" style="color: var(--color-accent);">${item.type}</span></td>
      </tr>
    `;
  }).join('');

  // Re-attach checkbox events
  tbody.querySelectorAll('.item-check').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      checkedItems[id] = e.target.checked;
      localStorage.setItem('ip26_checked_items', JSON.stringify(checkedItems));
      renderInventory();
      updateProgress();
    });
  });
}

// Update Check Progress
function updateProgress() {
  const total = inventoryData.length;
  const checkedCount = Object.keys(checkedItems).filter(k => checkedItems[k]).length;
  const pct = Math.round((checkedCount / total) * 100);

  const fillEl = document.getElementById('progress-bar-fill');
  const countEl = document.getElementById('progress-count-text');

  if (fillEl) fillEl.style.width = `${pct}%`;
  if (countEl) countEl.textContent = `${checkedCount} / ${total} (${pct}%) Siap`;
}

// Setup Event Listeners for Filters & Search
function setupEventListeners() {
  // Inventory Category Filters
  document.querySelectorAll('[data-cat-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-cat-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.getAttribute('data-cat-filter');
      renderInventory();
    });
  });

  // Crew Filters
  document.querySelectorAll('[data-crew-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-crew-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCrewFilter = btn.getAttribute('data-crew-filter');
      renderCrew();
    });
  });

  // Search Input
  const searchInput = document.getElementById('inventory-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderInventory();
    });
  }

  // Reset Checklist Button
  const resetBtn = document.getElementById('reset-checklist-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin me-reset semua checklist perlengkapan?')) {
        checkedItems = {};
        localStorage.removeItem('ip26_checked_items');
        renderInventory();
        updateProgress();
      }
    });
  }
}
