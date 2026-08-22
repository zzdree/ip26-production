/**
 * IP26 BROADCAST COMMAND SUITE — LOGIC & REALTIME CLOUD SYNC ENGINE
 * Features: Google Firebase Cloud Realtime Database, Live Checkbox Sync, Batch Loading/Packing Actions
 */

// Master Inventory Dataset (84 Items across 13 Lenders)
const INVENTORY_DATA = [
  {
    lender: "OWL",
    items: [
      { id: "owl_1", name: "Sony A6000", qty: "2 Unit", status: "active", symbol: "✅" },
      { id: "owl_2", name: "Sony A6400", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "owl_3", name: "Sony ZV-E10", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "owl_4", name: "Lens 18-105MM", qty: "3 Unit", status: "active", symbol: "✅" },
      { id: "owl_5", name: "Lens 50MM Fix", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "owl_6", name: "Battery", qty: "8 Unit", status: "active", symbol: "✅" },
      { id: "owl_7", name: "Charger", qty: "1 Pack", status: "active", symbol: "✅" },
      { id: "owl_8", name: "Memory Card 32GB", qty: "4 Unit", status: "active", symbol: "✅" },
      { id: "owl_9", name: "Cinetreak Cinelive V1", qty: "1 Pack", status: "active", symbol: "✅" },
      { id: "owl_10", name: "Power Adaptor MIX", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "owl_11", name: "Hollyland Pyro H", qty: "1 Pack", status: "active", symbol: "✅" },
      { id: "owl_12", name: "Hollyland Pyro S", qty: "1 Pack", status: "active", symbol: "✅" },
      { id: "owl_13", name: "Battery WIR", qty: "4 Unit", status: "active", symbol: "✅" },
      { id: "owl_14", name: "Tripod Camera Big", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "owl_15", name: "HDMI to Micro HDMI Converter", qty: "2 Unit", status: "active", symbol: "✅" },
      { id: "owl_16", name: "HDMI to Micro HDMI Cable 30CM", qty: "2 Unit", status: "active", symbol: "✅" },
      { id: "owl_17", name: "HDMI Capture", qty: "2 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "ABON",
    items: [
      { id: "abon_1", name: "HDMI Capture", qty: "2 Unit", status: "partial", symbol: "⚠️ 1/2" }
    ]
  },
  {
    lender: "Andreas",
    items: [
      { id: "andreas_1", name: "Fan Cooler", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_2", name: "Mouse Pad", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_3", name: "Keyboard Ext", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_4", name: "Mouse Ext", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_5", name: "Powerbank", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_6", name: "Power Adaptor USB A", qty: "9 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_7", name: "Power Adaptor USB A x C", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_8", name: "Power Adaptor USB C", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_9", name: "USB A to USB B Data Cable", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_10", name: "USB A to USB Micro B Data Cable", qty: "2 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_11", name: "USB A to USB C Data Cable", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "andreas_12", name: "USB A to USB C Charge Cable", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_13", name: "USB C to USB C Charge Cable", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_14", name: "USB A to USB A Extender 30CM", qty: "2 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_15", name: "USB A to USB A Extender 2M", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "andreas_16", name: "USB A to USB C Male Converter", qty: "4 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_17", name: "USB A to USB C Female Converter", qty: "2 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_18", name: "USB A to Mini USB Cable", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_19", name: "USB A Splitter 3CH", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_20", name: "USB A Splitter 4CH", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_21", name: "USB C DAC Hanason AB17X", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "andreas_22", name: "USB C DAC Oraimo OAA310", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_23", name: "In Ear Monitor QKZ Hi7T", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_24", name: "In Ear Monitor KZ EDX Pro", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_25", name: "Fastdrive Vgen SSD 128GB", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_26", name: "Fastdrive Toshiba HDD 1TB", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_27", name: "Flashdrive Toshiba 8GB", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_28", name: "Flashdrive Sandisk 16GB", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_29", name: "Flashdrive Toshiba 32GB", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_30", name: "Flashdrive Toshiba 64GB", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_31", name: "HDMI to Mini HDMI Converter", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_32", name: "Mini HDMI to Mini HDMI Cable 1,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_33", name: "HDMI to HDMI Cable 1,5M", qty: "3 Unit", status: "active", symbol: "✅" },
      { id: "andreas_34", name: "VGA to HDMI Converter", qty: "3 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_35", name: "VGA to VGA Cable 1,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "andreas_36", name: "Power Cable 3PIN", qty: "3 Unit", status: "partial", symbol: "⚠️" },
      { id: "andreas_37", name: "Power Cable 2PIN", qty: "1 Unit", status: "partial", symbol: "⚠️" },
      { id: "andreas_38", name: "Terminal Cable 4CH", qty: "3 Unit", status: "partial", symbol: "⚠️" },
      { id: "andreas_39", name: "Terminal Cable 3CH", qty: "2 Unit", status: "partial", symbol: "⚠️" },
      { id: "andreas_40", name: "Terminal Cable 2CH", qty: "1 Unit", status: "partial", symbol: "⚠️" },
      { id: "andreas_41", name: "Terminal Cable XCH", qty: "X Unit", status: "active", symbol: "✅" },
      { id: "andreas_42", name: "Terminal T", qty: "8 Unit", status: "partial", symbol: "⚠️" },
      { id: "andreas_43", name: "Addon Box", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_44", name: "Jack Box", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_45", name: "Screw Box", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_46", name: "Ties Box", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_47", name: "Tool Box", qty: "2 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_48", name: "Cable", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "andreas_49", name: "Tape", qty: "1 Pack", status: "standby", symbol: "☑️" }
    ]
  },
  {
    lender: "GIA Deliksari",
    items: [
      { id: "gia_1", name: "Mixer NewBaxs CT80S", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "gia_2", name: "XLR Female to Male Cable 3M", qty: "2 Unit", status: "active", symbol: "✅" },
      { id: "gia_3", name: "USB A to USB C Data Cable", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "gia_4", name: "Tripod Camera Big", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "gia_5", name: "HDMI Splitter 2CH", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "gia_6", name: "Power Adaptor SPL", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { id: "gia_7", name: "HDMI to HDMI Cable 1M", qty: "2 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "GKJ Ngaliyan",
    items: [
      { id: "gkj_1", name: "Stand Lighting Small", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "gkj_2", name: "HDMI Cable 15M", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "gkj_3", name: "HDMI Cable 10M", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "gkj_4", name: "HDMI Cable 5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "gkj_5", name: "HDMI Cable 1,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "gkj_6", name: "HDMI Capture", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "gkj_7", name: "HDMI Splitter 4CH", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "gkj_8", name: "Power Adaptor SPL", qty: "1 Pack", status: "standby", symbol: "☑️" }
    ]
  },
  {
    lender: "UKK UNNES",
    items: [
      { id: "ukk_1", name: "XLR Female to Male Cable 10M", qty: "3 Unit", status: "partial", symbol: "⚠️ 2/3" },
      { id: "ukk_2", name: "Stand Lighting Small", qty: "4 Unit", status: "partial", symbol: "⚠️ 2/4" },
      { id: "ukk_3", name: "Tripod Camera Big", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "ukk_4", name: "HDMI to Mini HDMI Cable 2,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "ukk_5", name: "HDMI Cable 15M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "ukk_6", name: "HDMI Cable 10M", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "ukk_7", name: "HDMI Cable 1,5M", qty: "4 Unit", status: "partial", symbol: "⚠️ 2/4" },
      { id: "ukk_8", name: "HDMI Splitter 4CH", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "ukk_9", name: "Power Adaptor SPL", qty: "1 Pack", status: "active", symbol: "✅" },
      { id: "ukk_10", name: "VGA to VGA Cable 1,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "ukk_11", name: "VGA to VGA Cable 2,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "ukk_12", name: "VGA to HDMI Converter", qty: "2 Unit", status: "standby", symbol: "☑️" },
      { id: "ukk_13", name: "Power Cable XPIN", qty: "X Unit", status: "standby", symbol: "☑️" },
      { id: "ukk_14", name: "Terminal Cable XCH", qty: "X Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Lio",
    items: [
      { id: "lio_1", name: "HDMI Cable 1,5M", qty: "1 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Darrel",
    items: [
      { id: "darrel_1", name: "Television", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "darrel_2", name: "Power Adaptor TV", qty: "1 Pack", status: "active", symbol: "✅" },
      { id: "darrel_3", name: "Memory Card 8GB", qty: "1 Unit", status: "standby", symbol: "☑️" }
    ]
  },
  {
    lender: "Kiel 1",
    items: [
      { id: "kiel_1", name: "Sony ZVE10", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "kiel_2", name: "Lens 16-50MM Kit", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "kiel_3", name: "Lens 50MM Fix", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { id: "kiel_4", name: "Battery", qty: "2 Unit", status: "active", symbol: "✅" },
      { id: "kiel_5", name: "Charger", qty: "1 Pack", status: "active", symbol: "✅" },
      { id: "kiel_6", name: "Memory Card 64GB", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "kiel_7", name: "Memory Card 128GB", qty: "1 Unit", status: "standby", symbol: "☑️" }
    ]
  },
  {
    lender: "Joel",
    items: [
      { id: "joel_1", name: "Sony A6600", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "joel_2", name: "Lens 24-70MM Zeiss", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "joel_3", name: "Battery", qty: "2 Unit", status: "active", symbol: "✅" },
      { id: "joel_4", name: "Charger", qty: "1 Pack", status: "active", symbol: "✅" },
      { id: "joel_5", name: "Memory Card 64GB", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "joel_6", name: "Gimbal DJI Ronin RS3", qty: "1 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Kezia",
    items: [
      { id: "kezia_1", name: "Television", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "kezia_2", name: "Power Adaptor TV", qty: "1 Pack", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Jennifer",
    items: [
      { id: "jennifer_1", name: "HP Iphone 15", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "jennifer_2", name: "TAB iPad", qty: "1 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Panitia",
    items: [
      { id: "panitia_1", name: "HDMI to Micro HDMI Converter", qty: "2 Unit", status: "active", symbol: "✅" },
      { id: "panitia_2", name: "Terminal Cable XCH", qty: "X Unit", status: "active", symbol: "✅" }
    ]
  }
];

const TOTAL_ITEMS_COUNT = INVENTORY_DATA.reduce((acc, g) => acc + g.items.length, 0);

// Global Checklist States
let checklistState = {}; // { [id]: boolean }
let onlyUnpackedFilter = false;
let currentStatusFilter = 'all';
let currentLenderFilter = 'ALL';
let currentSearchQuery = '';

// Cloud Sync Connection
const CLOUD_PROJECT_URL = "https://ip26-production-default-rtdb.asia-southeast1.firebasedatabase.app";
let isFirebaseConnected = false;
let firebaseDbRef = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initNavScroll();
  initCloudDatabase();
});

// Initialize Cloud Database Connection
function initCloudDatabase() {
  const statusPill = document.getElementById('cloudStatusPill');
  const statusText = document.getElementById('cloudStatusText');

  try {
    if (typeof firebase !== 'undefined') {
      const firebaseConfig = {
        databaseURL: CLOUD_PROJECT_URL
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      firebaseDbRef = firebase.database().ref('ip26_checklist');

      // Realtime listener for live sync across all crew smartphones
      firebaseDbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data && typeof data === 'object') {
          checklistState = data;
        }
        setCloudStatus(true);
        renderInventory();
        updatePackingProgress();
      }, (error) => {
        console.warn("Cloud DB sync notice (using cloud REST / local fallback):", error);
        loadFallbackState();
      });

      // Connection state listener
      firebase.database().ref('.info/connected').on('value', (snap) => {
        if (snap.val() === true) {
          setCloudStatus(true);
        }
      });
    } else {
      loadFallbackState();
    }
  } catch (err) {
    console.warn("Cloud DB init note:", err);
    loadFallbackState();
  }
}

function setCloudStatus(connected) {
  isFirebaseConnected = connected;
  const statusPill = document.getElementById('cloudStatusPill');
  const statusText = document.getElementById('cloudStatusText');
  if (statusPill && statusText) {
    if (connected) {
      statusPill.className = 'cloud-status-pill connected';
      statusText.textContent = '🟢 Cloud DB Live';
    } else {
      statusPill.className = 'cloud-status-pill';
      statusText.textContent = '🟡 Cloud Syncing';
    }
  }
}

function loadFallbackState() {
  try {
    const saved = localStorage.getItem('ip26_checklist_state');
    if (saved) {
      checklistState = JSON.parse(saved);
    }
  } catch (e) {}
  renderInventory();
  updatePackingProgress();
}

// Toggle individual item checklist and sync to Cloud DB
function toggleItemCheck(itemId, isChecked) {
  checklistState[itemId] = isChecked;

  // 1. Sync to Firebase Cloud Database (Instant Multi-Device Broadcast)
  if (firebaseDbRef) {
    firebaseDbRef.child(itemId).set(isChecked).catch(err => console.warn(err));
  }

  // 2. Persist local cache
  try {
    localStorage.setItem('ip26_checklist_state', JSON.stringify(checklistState));
  } catch (e) {}

  updatePackingProgress();
  
  // Highlight row immediately
  const rowEl = document.getElementById(`row_${itemId}`);
  if (rowEl) {
    rowEl.classList.toggle('is-packed', isChecked);
  }
}

// Batch Actions: Pack All (true) or Unload All (false)
function batchCheckAll(checkValue) {
  INVENTORY_DATA.forEach(group => {
    group.items.forEach(it => {
      checklistState[it.id] = checkValue;
    });
  });

  // Sync whole state to Cloud DB
  if (firebaseDbRef) {
    firebaseDbRef.set(checklistState).catch(err => console.warn(err));
  }

  try {
    localStorage.setItem('ip26_checklist_state', JSON.stringify(checklistState));
  } catch (e) {}

  renderInventory();
  updatePackingProgress();
}

// Toggle "Only Unpacked" Filter
function toggleOnlyUnpackedFilter(btnElement) {
  onlyUnpackedFilter = !onlyUnpackedFilter;
  if (btnElement) {
    btnElement.classList.toggle('active', onlyUnpackedFilter);
    btnElement.innerHTML = onlyUnpackedFilter 
      ? `<span>⚠️ Menampilkan Hanya Belum Kembali</span>` 
      : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><span>Tampilkan Hanya Belum Kembali</span>`;
  }
  renderInventory();
}

// Update Packing Progress Bar and Badges
function updatePackingProgress() {
  let packedCount = 0;
  INVENTORY_DATA.forEach(group => {
    group.items.forEach(it => {
      if (checklistState[it.id] === true) {
        packedCount++;
      }
    });
  });

  const percentage = Math.round((packedCount / TOTAL_ITEMS_COUNT) * 100);
  const counterText = document.getElementById('packingCounterText');
  const progressFill = document.getElementById('packingProgressFill');
  const packedBadge = document.getElementById('packedCountBadge');
  const unpackedBadge = document.getElementById('unpackedCountBadge');

  if (counterText) {
    counterText.textContent = `${packedCount} / ${TOTAL_ITEMS_COUNT} Barang Terpacking (${percentage}%)`;
  }
  if (progressFill) {
    progressFill.style.width = `${percentage}%`;
  }
  if (packedBadge) {
    packedBadge.textContent = `${packedCount} Packed ✅`;
  }
  if (unpackedBadge) {
    const remaining = TOTAL_ITEMS_COUNT - packedCount;
    unpackedBadge.textContent = `${remaining} Belum Kembali ⚠️`;
  }
}

// Live Digital Clock
function initLiveClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hrs}:${mins}:${secs} WIB`;
  }
  update();
  setInterval(update, 1000);
}

// Copy Text Helper
function copyText(text, btnElement) {
  if (!navigator.clipboard) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try { document.execCommand('copy'); } catch (err) {}
    document.body.removeChild(textArea);
  } else {
    navigator.clipboard.writeText(text);
  }

  if (btnElement) {
    const originalHTML = btnElement.innerHTML;
    btnElement.innerHTML = `<span>Tersalin! ✅</span>`;
    btnElement.style.borderColor = 'var(--neon-emerald)';
    btnElement.style.color = 'var(--neon-emerald)';
    setTimeout(() => {
      btnElement.innerHTML = originalHTML;
      btnElement.style.borderColor = '';
      btnElement.style.color = '';
    }, 2000);
  }
}

// Camera Tab Switcher
function switchCameraTab(tabName) {
  document.getElementById('tabBtnBroadcast').classList.toggle('active', tabName === 'broadcast');
  document.getElementById('tabBtnDoc').classList.toggle('active', tabName === 'documentation');
  
  document.getElementById('tabBroadcast').classList.toggle('active', tabName === 'broadcast');
  document.getElementById('tabDoc').classList.toggle('active', tabName === 'documentation');
}

// Routing Tab Switcher
function switchRoutingTab(tabName) {
  const tabs = ['video', 'audio', 'timekeeper', 'electric'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const panel = document.getElementById(`tab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (panel) panel.classList.toggle('active', t === tabName);
  });
}

// Status filter
function setFilterStatus(status, element) {
  currentStatusFilter = status;
  const chips = document.querySelectorAll('.status-chips-bar .status-chip');
  chips.forEach(c => c.classList.remove('active'));
  if (element) element.classList.add('active');
  renderInventory();
}

// Lender filter
function setLenderFilter(lender, element) {
  currentLenderFilter = lender;
  const pills = document.querySelectorAll('.lender-chips-wrap .lender-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (element) element.classList.add('active');
  renderInventory();
}

// Live Search Filter
function filterInventory() {
  const input = document.getElementById('inventorySearch');
  const clearBtn = document.getElementById('clearSearchBtn');
  currentSearchQuery = input.value.toLowerCase().trim();
  if (clearBtn) {
    clearBtn.style.display = currentSearchQuery ? 'block' : 'none';
  }
  renderInventory();
}

// Clear Search
function clearSearch() {
  const input = document.getElementById('inventorySearch');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  currentSearchQuery = '';
  renderInventory();
}

// Render Inventory Catalog Cards with Live Checkboxes
function renderInventory() {
  const container = document.getElementById('inventoryGrid');
  const countBadge = document.getElementById('invCountBadge');
  if (!container) return;

  container.innerHTML = '';
  let matchCount = 0;

  INVENTORY_DATA.forEach(group => {
    if (currentLenderFilter !== 'ALL' && group.lender !== currentLenderFilter) {
      return;
    }

    const matchedItems = group.items.filter(item => {
      // Filter only unpacked if enabled
      if (onlyUnpackedFilter && checklistState[item.id] === true) {
        return false;
      }

      if (currentStatusFilter !== 'all' && item.status !== currentStatusFilter) {
        return false;
      }

      if (currentSearchQuery) {
        const matchName = item.name.toLowerCase().includes(currentSearchQuery);
        const matchLender = group.lender.toLowerCase().includes(currentSearchQuery);
        const matchQty = item.qty.toLowerCase().includes(currentSearchQuery);
        return matchName || matchLender || matchQty;
      }

      return true;
    });

    if (matchedItems.length > 0) {
      matchCount += matchedItems.length;

      const groupCard = document.createElement('div');
      groupCard.className = 'inv-group-card';

      const header = document.createElement('div');
      header.className = 'inv-group-header';
      header.innerHTML = `
        <span>${group.lender}</span>
        <span class="badge badge-tech font-mono">${matchedItems.length} Item</span>
      `;

      const ul = document.createElement('ul');
      ul.className = 'inv-item-list';

      matchedItems.forEach(it => {
        const isPacked = checklistState[it.id] === true;
        const li = document.createElement('li');
        li.className = `inv-item-row ${isPacked ? 'is-packed' : ''}`;
        li.id = `row_${it.id}`;

        li.innerHTML = `
          <label class="custom-chk-label" for="chk_${it.id}">
            <input type="checkbox" id="chk_${it.id}" class="custom-chk-input" ${isPacked ? 'checked' : ''} onchange="toggleItemCheck('${it.id}', this.checked)">
            <span class="custom-chk-box">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <span class="item-name-text">${it.name} <strong style="color:var(--text-dim);font-weight:normal;">(${it.qty})</strong></span>
          </label>
          <span class="badge ${it.status === 'active' ? 'badge-success' : (it.status === 'partial' ? 'badge-warning' : 'badge-standby')}">${it.symbol}</span>
        `;
        ul.appendChild(li);
      });

      groupCard.appendChild(header);
      groupCard.appendChild(ul);
      container.appendChild(groupCard);
    }
  });

  if (countBadge) {
    countBadge.textContent = `Menampilkan ${matchCount} dari ${TOTAL_ITEMS_COUNT} Barang`;
  }

  if (matchCount === 0) {
    container.innerHTML = `
      <div class="callout-banner" style="grid-column: 1 / -1; justify-content: center; text-align: center; padding: 40px;">
        <div>
          <strong style="color:#fff; font-size:16px;">Semua Barang Selesai Di-Packing / Tidak Ada Hasil</strong>
          <p class="text-muted mt-1">Tidak ada item inventaris yang cocok dengan filter atau kata kunci saat ini.</p>
          <button class="btn-copy-rig mt-3" style="padding: 8px 16px;" onclick="clearSearch(); onlyUnpackedFilter = false; setFilterStatus('all', document.querySelector('.status-chip')); setLenderFilter('ALL', document.querySelector('.lender-pill'));">Reset Semua Filter</button>
        </div>
      </div>
    `;
  }
}

// Scroll Spy for Top Desktop Navbar Tabs & Mobile Dock
function initNavScroll() {
  const sections = document.querySelectorAll('.content-section');
  const desktopLinks = document.querySelectorAll('.desktop-nav-tabs .tab-link');
  const dockLinks = document.querySelectorAll('.mobile-dock-bottom .dock-btn');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      desktopLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
      dockLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }
  });
}
