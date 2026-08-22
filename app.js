/**
 * ==========================================================================
 * IP26 ATEM PRO BROADCAST COMMAND SUITE — MASTER ENGINE RUNTIME (v10.0)
 * Dual-Engine Theme System • Supabase PostgreSQL Realtime Sync • 119 Items
 * ==========================================================================
 */

// 1. SUPABASE REALTIME CONFIGURATION
const SUPABASE_CONFIG = {
  url: 'https://ssbkhhnnzwuykyeznpwd.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYmtoaG5uend1eWt5ZXpucHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDQ1NzcsImV4cCI6MjEwMjk4MDU3N30.-zGe_xWDTBmo604VS39jl8o7YvhEQYb3fZvCV-fcEbk'
};

let supabaseClient = null;
if (typeof window.supabase !== 'undefined') {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
  } catch (err) {
    console.warn('[Supabase] Initialisation fallback:', err);
  }
}

// 2. MASTER INVENTORY DIRECTORY (119 ITEMS ACROSS 13 LENDERS)
const MASTER_INVENTORY = [
  // OWL (17 Items)
  { id: 'owl-1', lender: 'OWL', name: 'Sony A6000', qty: '2 Unit', status: 'used', usage: 'CAM 3 & 4 (Wired)' },
  { id: 'owl-2', lender: 'OWL', name: 'Sony A6400', qty: '1 Unit', status: 'used', usage: 'CAM PHO (Nico)' },
  { id: 'owl-3', lender: 'OWL', name: 'Sony ZV-E10', qty: '1 Unit', status: 'used', usage: 'CAM 2 (Mobile)' },
  { id: 'owl-4', lender: 'OWL', name: 'Lens 18-105MM', qty: '3 Unit', status: 'used', usage: 'CAM 1, 2, 3' },
  { id: 'owl-5', lender: 'OWL', name: 'Lens 50MM Prime', qty: '1 Unit', status: 'used', usage: 'CAM PHO (Nico)' },
  { id: 'owl-6', lender: 'OWL', name: 'Battery Camera', qty: '8 Unit', status: 'used', usage: 'Power CAM 2, 3, 4, PHO' },
  { id: 'owl-7', lender: 'OWL', name: 'Charger Hub', qty: '1 Pack', status: 'used', usage: 'Charging Station' },
  { id: 'owl-8', lender: 'OWL', name: 'Memory Card 32GB', qty: '4 Unit', status: 'used', usage: 'CAM 2, 3, 4, PHO' },
  { id: 'owl-9', lender: 'OWL', name: 'Cinetreak Cinelive V1', qty: '1 Pack', status: 'used', usage: 'Master Video Switcher' },
  { id: 'owl-10', lender: 'OWL', name: 'Power Adaptor MIX', qty: '1 Unit', status: 'used', usage: 'Power Cinetreak' },
  { id: 'owl-11', lender: 'OWL', name: 'Hollyland Pyro H', qty: '1 Pack', status: 'used', usage: 'CAM 2 Wireless TX/RX' },
  { id: 'owl-12', lender: 'OWL', name: 'Hollyland Pyro S', qty: '1 Pack', status: 'used', usage: 'CAM 1 Wireless TX/RX' },
  { id: 'owl-13', lender: 'OWL', name: 'Battery WIR', qty: '4 Unit', status: 'used', usage: 'Power Pyro TX/RX' },
  { id: 'owl-14', lender: 'OWL', name: 'Tripod Camera Big', qty: '1 Unit', status: 'used', usage: 'Mount CAM 1' },
  { id: 'owl-15', lender: 'OWL', name: 'HDMI to Micro HDMI Converter', qty: '2 Unit', status: 'used', usage: 'Converter CAM 3 & 4' },
  { id: 'owl-16', lender: 'OWL', name: 'HDMI to Micro HDMI Cable 30CM', qty: '2 Unit', status: 'used', usage: 'Rig CAM 1 & 2' },
  { id: 'owl-17', lender: 'OWL', name: 'HDMI Capture Card', qty: '2 Unit', status: 'used', usage: 'ProPresenter 1 & 2 In' },

  // ABON (1 Item)
  { id: 'abon-1', lender: 'ABON', name: 'HDMI Capture Card', qty: '2 Unit', status: 'partial', usage: '1 Unit Active di Resolume Center' },

  // Andreas (49 Items)
  { id: 'and-1', lender: 'Andreas', name: 'Fan Cooler', qty: '1 Unit', status: 'standby', usage: 'Cooling Workstation' },
  { id: 'and-2', lender: 'Andreas', name: 'Mouse Pad', qty: '1 Unit', status: 'standby', usage: 'FOH Desk' },
  { id: 'and-3', lender: 'Andreas', name: 'Keyboard Ext', qty: '1 Unit', status: 'standby', usage: 'FOH Desk' },
  { id: 'and-4', lender: 'Andreas', name: 'Mouse Ext', qty: '1 Unit', status: 'standby', usage: 'FOH Desk' },
  { id: 'and-5', lender: 'Andreas', name: 'Powerbank', qty: '1 Unit', status: 'standby', usage: 'Emergency Power' },
  { id: 'and-6', lender: 'Andreas', name: 'Power Adaptor USB A', qty: '9 Unit', status: 'standby', usage: 'Peripheral Power' },
  { id: 'and-7', lender: 'Andreas', name: 'Power Adaptor USB A x C', qty: '1 Unit', status: 'standby', usage: 'Multi-port Charger' },
  { id: 'and-8', lender: 'Andreas', name: 'Power Adaptor USB C', qty: '1 Unit', status: 'standby', usage: 'PD Charger' },
  { id: 'and-9', lender: 'Andreas', name: 'USB A to USB B Data Cable', qty: '1 Unit', status: 'standby', usage: 'Printer/Audio Cable' },
  { id: 'and-10', lender: 'Andreas', name: 'USB A to USB Micro B Cable', qty: '2 Unit', status: 'standby', usage: 'Aux Power' },
  { id: 'and-11', lender: 'Andreas', name: 'USB A to USB C Data Cable', qty: '1 Unit', status: 'used', usage: 'Cinetreak to OBS' },
  { id: 'and-12', lender: 'Andreas', name: 'USB A to USB C Charge Cable', qty: '1 Unit', status: 'standby', usage: 'Charging' },
  { id: 'and-13', lender: 'Andreas', name: 'USB C to USB C Charge Cable', qty: '1 Unit', status: 'standby', usage: 'Charging' },
  { id: 'and-14', lender: 'Andreas', name: 'USB A to USB A Extender 30CM', qty: '2 Unit', status: 'standby', usage: 'Port Extender' },
  { id: 'and-15', lender: 'Andreas', name: 'USB A to USB A Extender 2M', qty: '1 Unit', status: 'used', usage: 'CT80S to OBS Audio' },
  { id: 'and-16', lender: 'Andreas', name: 'USB A to USB C Male Converter', qty: '4 Unit', status: 'standby', usage: 'Adaptor' },
  { id: 'and-17', lender: 'Andreas', name: 'USB A to USB C Female Converter', qty: '2 Unit', status: 'standby', usage: 'Adaptor' },
  { id: 'and-18', lender: 'Andreas', name: 'USB A to Mini USB Cable', qty: '1 Unit', status: 'standby', usage: 'Legacy Cable' },
  { id: 'and-19', lender: 'Andreas', name: 'USB A Splitter 3CH', qty: '1 Unit', status: 'standby', usage: 'Hub Splitter' },
  { id: 'and-20', lender: 'Andreas', name: 'USB A Splitter 4CH', qty: '1 Unit', status: 'standby', usage: 'Hub Splitter' },
  { id: 'and-21', lender: 'Andreas', name: 'USB C DAC Hanason AB17X', qty: '1 Unit', status: 'used', usage: 'Resolume Arena Audio Out' },
  { id: 'and-22', lender: 'Andreas', name: 'USB C DAC Oraimo OAA310', qty: '1 Unit', status: 'standby', usage: 'Backup DAC Audio' },
  { id: 'and-23', lender: 'Andreas', name: 'In Ear Monitor QKZ Hi7T', qty: '1 Pack', status: 'standby', usage: 'Audio Monitoring' },
  { id: 'and-24', lender: 'Andreas', name: 'In Ear Monitor KZ EDX Pro', qty: '1 Pack', status: 'standby', usage: 'Audio Monitoring' },
  { id: 'and-25', lender: 'Andreas', name: 'Fastdrive Vgen SSD 128GB', qty: '1 Pack', status: 'standby', usage: 'High-speed Media' },
  { id: 'and-26', lender: 'Andreas', name: 'Fastdrive Toshiba HDD 1TB', qty: '1 Pack', status: 'standby', usage: 'Master Backup' },
  { id: 'and-27', lender: 'Andreas', name: 'Flashdrive Toshiba 8GB', qty: '1 Unit', status: 'standby', usage: 'PPT Transfer' },
  { id: 'and-28', lender: 'Andreas', name: 'Flashdrive Sandisk 16GB', qty: '1 Unit', status: 'standby', usage: 'Media Transfer' },
  { id: 'and-29', lender: 'Andreas', name: 'Flashdrive Toshiba 32GB', qty: '1 Unit', status: 'standby', usage: 'Media Transfer' },
  { id: 'and-30', lender: 'Andreas', name: 'Flashdrive Toshiba 64GB', qty: '1 Unit', status: 'standby', usage: 'Media Transfer' },
  { id: 'and-31', lender: 'Andreas', name: 'HDMI to Mini HDMI Converter', qty: '1 Unit', status: 'standby', usage: 'Video Converter' },
  { id: 'and-32', lender: 'Andreas', name: 'Mini HDMI to Mini HDMI Cable 1,5M', qty: '1 Unit', status: 'standby', usage: 'Video Cable' },
  { id: 'and-33', lender: 'Andreas', name: 'HDMI to HDMI Cable 1,5M', qty: '3 Unit', status: 'used', usage: 'Splitter to Capture' },
  { id: 'and-34', lender: 'Andreas', name: 'VGA to HDMI Converter', qty: '3 Unit', status: 'standby', usage: 'Display Converter' },
  { id: 'and-35', lender: 'Andreas', name: 'VGA to VGA Cable 1,5M', qty: '1 Unit', status: 'standby', usage: 'Legacy Cable' },
  { id: 'and-36', lender: 'Andreas', name: 'Power Cable 3PIN', qty: '3 Unit', status: 'partial', usage: 'Power Extension' },
  { id: 'and-37', lender: 'Andreas', name: 'Power Cable 2PIN', qty: '1 Unit', status: 'partial', usage: 'Power Extension' },
  { id: 'and-38', lender: 'Andreas', name: 'Terminal Cable 4CH', qty: '3 Unit', status: 'partial', usage: 'Electrical Distribution' },
  { id: 'and-39', lender: 'Andreas', name: 'Terminal Cable 3CH', qty: '2 Unit', status: 'partial', usage: 'Electrical Distribution' },
  { id: 'and-40', lender: 'Andreas', name: 'Terminal Cable 2CH', qty: '1 Unit', status: 'partial', usage: 'Electrical Distribution' },
  { id: 'and-41', lender: 'Andreas', name: 'Terminal Cable XCH', qty: 'X Unit', status: 'used', usage: 'Master Electrical Line' },
  { id: 'and-42', lender: 'Andreas', name: 'Terminal T', qty: '8 Unit', status: 'partial', usage: 'Electrical T-Plugs' },
  { id: 'and-43', lender: 'Andreas', name: 'Addon Box', qty: '1 Pack', status: 'standby', usage: 'Production Toolkit' },
  { id: 'and-44', lender: 'Andreas', name: 'Jack Box', qty: '1 Pack', status: 'standby', usage: 'Audio Adapters' },
  { id: 'and-45', lender: 'Andreas', name: 'Screw Box', qty: '1 Pack', status: 'standby', usage: 'Rigging Hardware' },
  { id: 'and-46', lender: 'Andreas', name: 'Ties Box', qty: '1 Pack', status: 'standby', usage: 'Cable Management' },
  { id: 'and-47', lender: 'Andreas', name: 'Tool Box', qty: '2 Pack', status: 'standby', usage: 'Maintenance Tools' },
  { id: 'and-48', lender: 'Andreas', name: 'Cable Pack', qty: '1 Pack', status: 'standby', usage: 'Spare Cabling' },
  { id: 'and-49', lender: 'Andreas', name: 'Tape Pack (Gaffer)', qty: '1 Pack', status: 'standby', usage: 'Stage Safety Gaffer' },

  // GIA Deliksari (7 Items)
  { id: 'gia-1', lender: 'GIA Deliksari', name: 'Mixer NewBaxs CT80S', qty: '1 Unit', status: 'used', usage: 'Mixer 2 (Streaming Sub-Mix)' },
  { id: 'gia-2', lender: 'GIA Deliksari', name: 'XLR Female to Male Cable 3M', qty: '2 Unit', status: 'used', usage: 'Audio Routing FOH to CT80S' },
  { id: 'gia-3', lender: 'GIA Deliksari', name: 'USB A to USB C Data Cable', qty: '1 Unit', status: 'used', usage: 'CT80S Audio Interface Out' },
  { id: 'gia-4', lender: 'GIA Deliksari', name: 'Tripod Camera Big', qty: '1 Unit', status: 'used', usage: 'Mount CAM 3' },
  { id: 'gia-5', lender: 'GIA Deliksari', name: 'HDMI Splitter 2CH', qty: '1 Unit', status: 'standby', usage: 'Backup Splitter 2CH' },
  { id: 'gia-6', lender: 'GIA Deliksari', name: 'Power Adaptor SPL', qty: '1 Pack', status: 'standby', usage: 'Splitter Power' },
  { id: 'gia-7', lender: 'GIA Deliksari', name: 'HDMI to HDMI Cable 1M', qty: '2 Unit', status: 'used', usage: 'Cinetreak to Splitter' },

  // GKJ Ngaliyan (8 Items)
  { id: 'gkj-1', lender: 'GKJ Ngaliyan', name: 'Stand Lighting Small', qty: '1 Unit', status: 'standby', usage: 'Aux Lighting' },
  { id: 'gkj-2', lender: 'GKJ Ngaliyan', name: 'HDMI Cable 15M', qty: '1 Unit', status: 'used', usage: 'Resolume to Novastar Center' },
  { id: 'gkj-3', lender: 'GKJ Ngaliyan', name: 'HDMI Cable 10M', qty: '1 Unit', status: 'used', usage: 'CAM 3 Wired Line' },
  { id: 'gkj-4', lender: 'GKJ Ngaliyan', name: 'HDMI Cable 5M', qty: '1 Unit', status: 'standby', usage: 'Spare HDMI Line' },
  { id: 'gkj-5', lender: 'GKJ Ngaliyan', name: 'HDMI Cable 1,5M', qty: '1 Unit', status: 'standby', usage: 'Patch Cable' },
  { id: 'gkj-6', lender: 'GKJ Ngaliyan', name: 'HDMI Capture Card', qty: '1 Unit', status: 'used', usage: 'Novastar Video Capture' },
  { id: 'gkj-7', lender: 'GKJ Ngaliyan', name: 'HDMI Splitter 4CH', qty: '1 Unit', status: 'standby', usage: 'Backup Master Splitter' },
  { id: 'gkj-8', lender: 'GKJ Ngaliyan', name: 'Power Adaptor SPL', qty: '1 Pack', status: 'standby', usage: 'Splitter Power' },

  // UKK UNNES (14 Items)
  { id: 'ukk-1', lender: 'UKK UNNES', name: 'XLR Female to Male Cable 10M', qty: '3 Unit', status: 'partial', usage: '2 Unit Active FOH to CT80S' },
  { id: 'ukk-2', lender: 'UKK UNNES', name: 'Stand Lighting Small', qty: '4 Unit', status: 'partial', usage: '2 Unit Active for Wireless Mount' },
  { id: 'ukk-3', lender: 'UKK UNNES', name: 'Tripod Camera Big', qty: '1 Unit', status: 'used', usage: 'Mount CAM 4' },
  { id: 'ukk-4', lender: 'UKK UNNES', name: 'HDMI to Mini HDMI Cable 2,5M', qty: '1 Unit', status: 'standby', usage: 'Patch Cable' },
  { id: 'ukk-5', lender: 'UKK UNNES', name: 'HDMI Cable 15M', qty: '1 Unit', status: 'standby', usage: 'Long Run Backup' },
  { id: 'ukk-6', lender: 'UKK UNNES', name: 'HDMI Cable 10M', qty: '1 Unit', status: 'used', usage: 'CAM 4 Wired Line' },
  { id: 'ukk-7', lender: 'UKK UNNES', name: 'HDMI Cable 1,5M', qty: '4 Unit', status: 'partial', usage: '2 Unit Active for Wireless Rig' },
  { id: 'ukk-8', lender: 'UKK UNNES', name: 'HDMI Splitter 4CH', qty: '1 Unit', status: 'used', usage: 'Active Video Distribution' },
  { id: 'ukk-9', lender: 'UKK UNNES', name: 'Power Adaptor SPL', qty: '1 Pack', status: 'used', usage: 'Power HDMI Splitter' },
  { id: 'ukk-10', lender: 'UKK UNNES', name: 'VGA to VGA Cable 1,5M', qty: '1 Unit', status: 'standby', usage: 'Legacy Cable' },
  { id: 'ukk-11', lender: 'UKK UNNES', name: 'VGA to VGA Cable 2,5M', qty: '1 Unit', status: 'standby', usage: 'Legacy Cable' },
  { id: 'ukk-12', lender: 'UKK UNNES', name: 'VGA to HDMI Converter', qty: '2 Unit', status: 'standby', usage: 'Display Converter' },
  { id: 'ukk-13', lender: 'UKK UNNES', name: 'Power Cable XPIN', qty: 'X Unit', status: 'standby', usage: 'Power Extension' },
  { id: 'ukk-14', lender: 'UKK UNNES', name: 'Terminal Cable XCH', qty: 'X Unit', status: 'used', usage: 'Electrical Distribution' },

  // Lio (1 Item)
  { id: 'lio-1', lender: 'Lio', name: 'HDMI Cable 1,5M', qty: '1 Unit', status: 'used', usage: 'Timekeeper to TV Darrel' },

  // Darrel (3 Items)
  { id: 'dar-1', lender: 'Darrel', name: 'Television (Stage Monitor)', qty: '1 Unit', status: 'used', usage: 'Timekeeper Display' },
  { id: 'dar-2', lender: 'Darrel', name: 'Power Adaptor TV', qty: '1 Pack', status: 'used', usage: 'Power TV Darrel' },
  { id: 'dar-3', lender: 'Darrel', name: 'Memory Card 8GB', qty: '1 Unit', status: 'standby', usage: 'Spare Storage' },

  // Kiel 1 (7 Items)
  { id: 'kiel-1', lender: 'Kiel 1', name: 'Sony ZVE10', qty: '1 Unit', status: 'used', usage: 'CAM 1 (FOH Center)' },
  { id: 'kiel-2', lender: 'Kiel 1', name: 'Lens 16-50MM Kit', qty: '1 Unit', status: 'used', usage: 'CAM 4 (Close-Up)' },
  { id: 'kiel-3', lender: 'Kiel 1', name: 'Lens 50MM Fix', qty: '1 Unit', status: 'standby', usage: 'Spare Prime Lens' },
  { id: 'kiel-4', lender: 'Kiel 1', name: 'Battery Camera', qty: '2 Unit', status: 'used', usage: 'Power CAM 1' },
  { id: 'kiel-5', lender: 'Kiel 1', name: 'Charger Hub', qty: '1 Pack', status: 'used', usage: 'Charging Station' },
  { id: 'kiel-6', lender: 'Kiel 1', name: 'Memory Card 64GB', qty: '1 Unit', status: 'used', usage: 'CAM 1 Storage' },
  { id: 'kiel-7', lender: 'Kiel 1', name: 'Memory Card 128GB', qty: '1 Unit', status: 'standby', usage: 'Master Backup Storage' },

  // Joel (6 Items)
  { id: 'joel-1', lender: 'Joel', name: 'Sony A6600', qty: '1 Unit', status: 'used', usage: 'CAM VID (Joel)' },
  { id: 'joel-2', lender: 'Joel', name: 'Lens 24-70MM Zeiss', qty: '1 Unit', status: 'used', usage: 'CAM VID (Joel)' },
  { id: 'joel-3', lender: 'Joel', name: 'Battery Camera', qty: '2 Unit', status: 'used', usage: 'Power CAM VID' },
  { id: 'joel-4', lender: 'Joel', name: 'Charger Hub', qty: '1 Pack', status: 'used', usage: 'Charging Station' },
  { id: 'joel-5', lender: 'Joel', name: 'Memory Card 64GB', qty: '1 Unit', status: 'used', usage: 'CAM VID Storage' },
  { id: 'joel-6', lender: 'Joel', name: 'Gimbal DJI Ronin RS3', qty: '1 Unit', status: 'used', usage: 'Stabilizer CAM VID' },

  // Kezia (2 Items)
  { id: 'kez-1', lender: 'Kezia', name: 'Television (Multiview)', qty: '1 Unit', status: 'used', usage: 'Switcher Multiview Display' },
  { id: 'kez-2', lender: 'Kezia', name: 'Power Adaptor TV', qty: '1 Pack', status: 'used', usage: 'Power TV Multiview' },

  // Jennifer (2 Items)
  { id: 'jen-1', lender: 'Jennifer', name: 'HP iPhone 15 Pro', qty: '1 Unit', status: 'used', usage: 'Social Media & Story' },
  { id: 'jen-2', lender: 'Jennifer', name: 'TAB iPad', qty: '1 Unit', status: 'used', usage: 'Virtual Mixer 2 Control' },

  // Panitia (2 Items)
  { id: 'pan-1', lender: 'Panitia', name: 'HDMI to Micro HDMI Converter', qty: '2 Unit', status: 'used', usage: 'Backup Video Converters' },
  { id: 'pan-2', lender: 'Panitia', name: 'Terminal Cable XCH', qty: 'X Unit', status: 'used', usage: 'Master Electrical Line' }
];

// Local State
let checklistState = {};
let activeLenderFilter = 'All';
let activeSearchQuery = '';
let filterUnreturnedOnly = false;
let currentPgmChannel = 1;
let currentPvwChannel = 2;

// 3. INITIALIZATION ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initTimers();
  initManifestState();
  renderLenderPills();
  renderManifestGrid();
  updateManifestTelemetry();
  initSupabaseRealtime();
  setupKeyboardShortcuts();
});

// 4. DUAL-ENGINE THEME TOGGLE
function initThemeEngine() {
  const savedTheme = localStorage.getItem('ip26_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonUI(savedTheme);
}

function toggleConsoleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('ip26_theme', target);
  updateThemeButtonUI(target);
}

function updateThemeButtonUI(theme) {
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (icon && label) {
    if (theme === 'dark') {
      icon.textContent = '☀️';
      label.textContent = 'Light';
    } else {
      icon.textContent = '🌙';
      label.textContent = 'Dark';
    }
  }
}

// 5. TIMERS (MASTER CLOCK & COUNTDOWN TO 17 SEPT 2026)
function initTimers() {
  updateMasterClock();
  updateEventCountdown();
  setInterval(updateMasterClock, 1000);
  setInterval(updateEventCountdown, 1000);
}

function updateMasterClock() {
  const now = new Date();
  const options = { timeZone: 'Asia/Jakarta', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const wibTime = new Intl.DateTimeFormat('id-ID', options).format(now);
  const el = document.getElementById('masterClock');
  if (el) el.textContent = `${wibTime} WIB`;
}

function updateEventCountdown() {
  const eventDate = new Date('2026-09-17T00:00:00+07:00').getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;

  const el = document.getElementById('eventCountdown');
  if (!el) return;

  if (diff <= 0) {
    el.textContent = 'EVENT DAY! 🚀';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  el.textContent = `${days}d ${hours}h ${minutes}m`;
}

// 6. HARDWARE DECK SWITCHER
function switchDeck(deckId) {
  const decks = {
    vision: { btn: 'btnDeckVision', view: 'deckVision' },
    manifest: { btn: 'btnDeckManifest', view: 'deckManifest' },
    rigs: { btn: 'btnDeckRigs', view: 'deckRigs' },
    rundown: { btn: 'btnDeckRundown', view: 'deckRundown' }
  };

  Object.keys(decks).forEach(k => {
    const b = document.getElementById(decks[k].btn);
    const v = document.getElementById(decks[k].view);
    if (b && v) {
      if (k === deckId) {
        b.classList.add('active');
        v.classList.add('active');
      } else {
        b.classList.remove('active');
        v.classList.remove('active');
      }
    }
  });
}

// 7. CAMERA RIG SUB-CATEGORY SWITCHER
function switchCameraCategory(cat) {
  const btnBrd = document.getElementById('btnSubCamBroadcast');
  const btnDoc = document.getElementById('btnSubCamDoc');
  const gridBrd = document.getElementById('camBroadcastGrid');
  const gridDoc = document.getElementById('camDocGrid');

  if (cat === 'broadcast') {
    btnBrd.classList.add('active-pgm');
    btnDoc.classList.remove('active-pgm');
    gridBrd.style.display = 'grid';
    gridDoc.style.display = 'none';
  } else {
    btnDoc.classList.add('active-pgm');
    btnBrd.classList.remove('active-pgm');
    gridDoc.style.display = 'grid';
    gridBrd.style.display = 'none';
  }
}

// 8. INTERACTIVE SWITCHER BUS LOGIC (PGM / PVW)
function setPgmChannel(channelNum) {
  currentPgmChannel = channelNum;
  for (let i = 1; i <= 4; i++) {
    const btn = document.getElementById(`pgmBtn${i}`);
    if (btn) {
      if (i === channelNum) btn.classList.add('active-pgm');
      else btn.classList.remove('active-pgm');
    }
  }
  const textEl = document.getElementById('currentPgmText');
  if (textEl) textEl.textContent = `CAM ${channelNum}`;
}

function setPvwChannel(channelNum) {
  currentPvwChannel = channelNum;
  for (let i = 1; i <= 4; i++) {
    const btn = document.getElementById(`pvwBtn${i}`);
    if (btn) {
      if (i === channelNum) btn.classList.add('active-pvw');
      else btn.classList.remove('active-pvw');
    }
  }
  const textEl = document.getElementById('currentPvwText');
  if (textEl) textEl.textContent = `CAM ${channelNum}`;
}

// 9. MANIFEST & CHECKLIST LOGIC
function initManifestState() {
  MASTER_INVENTORY.forEach(item => {
    checklistState[item.id] = false;
  });

  const localSaved = localStorage.getItem('ip26_checklist_v10');
  if (localSaved) {
    try {
      const parsed = JSON.parse(localSaved);
      Object.assign(checklistState, parsed);
    } catch (e) {
      console.warn('Checklist parse error:', e);
    }
  }
}

function renderLenderPills() {
  const lenders = ['All', ...new Set(MASTER_INVENTORY.map(i => i.lender))];
  const wrap = document.getElementById('lenderPillsWrap');
  if (!wrap) return;

  wrap.innerHTML = lenders.map(l => `
    <button class="filter-pill ${l === activeLenderFilter ? 'active' : ''}" onclick="setLenderFilter('${l}')">
      ${l}
    </button>
  `).join('');
}

function setLenderFilter(lender) {
  activeLenderFilter = lender;
  renderLenderPills();
  renderManifestGrid();
}

function handleManifestSearch(query) {
  activeSearchQuery = (query || '').toLowerCase().trim();
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = activeSearchQuery ? 'block' : 'none';
  renderManifestGrid();
}

function clearManifestSearch() {
  const input = document.getElementById('manifestSearchInput');
  if (input) input.value = '';
  handleManifestSearch('');
}

function toggleFilterUnreturned() {
  filterUnreturnedOnly = !filterUnreturnedOnly;
  const btn = document.getElementById('btnFilterUnreturned');
  if (btn) btn.classList.toggle('active', filterUnreturnedOnly);
  renderManifestGrid();
}

function renderManifestGrid() {
  const grid = document.getElementById('manifestGrid');
  if (!grid) return;

  // Filter items
  let filtered = MASTER_INVENTORY.filter(item => {
    const matchLender = (activeLenderFilter === 'All' || item.lender === activeLenderFilter);
    const matchSearch = (!activeSearchQuery || 
      item.name.toLowerCase().includes(activeSearchQuery) || 
      item.lender.toLowerCase().includes(activeSearchQuery) ||
      (item.usage && item.usage.toLowerCase().includes(activeSearchQuery))
    );
    const matchUnreturned = (!filterUnreturnedOnly || !checklistState[item.id]);
    return matchLender && matchSearch && matchUnreturned;
  });

  // Group by lender
  const grouped = {};
  filtered.forEach(item => {
    if (!grouped[item.lender]) grouped[item.lender] = [];
    grouped[item.lender].push(item);
  });

  const lenderNames = Object.keys(grouped);
  if (lenderNames.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-dim);">
        <p style="font-size: 16px; font-weight: 700;">Tidak ada barang yang cocok dengan filter / pencarian.</p>
        <p style="font-size: 12px; margin-top: 4px;">Coba ubah kata kunci pencarian atau reset filter peminjam.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = lenderNames.map(lender => {
    const items = grouped[lender];
    const packedCount = items.filter(i => checklistState[i.id]).length;

    return `
      <div class="manifest-card">
        <div class="manifest-card-head">
          <span class="manifest-lender-title">${lender}</span>
          <span class="manifest-lender-count">${packedCount} / ${items.length} Selesai</span>
        </div>
        <ul class="manifest-item-list">
          ${items.map(item => {
            const isPacked = !!checklistState[item.id];
            return `
              <li class="manifest-item-row ${isPacked ? 'is-packed' : ''}">
                <label class="tactile-checkbox">
                  <input type="checkbox" ${isPacked ? 'checked' : ''} onchange="toggleManifestItem('${item.id}', this.checked)">
                  <span class="checkbox-box">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="1.5 6 4.5 9 10.5 2"></polyline>
                    </svg>
                  </span>
                  <span class="item-text">${item.name}</span>
                </label>
                <div class="item-badge-group">
                  <span class="unit-tag">${item.qty}</span>
                  ${renderStatusBadge(item.status)}
                </div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

function renderStatusBadge(status) {
  if (status === 'used') return `<span class="badge-tally badge-used" title="Terpakai di routing aktif">✅ Terpakai</span>`;
  if (status === 'partial') return `<span class="badge-tally badge-partial" title="Terpakai sebagian">⚠️ Parsial</span>`;
  return `<span class="badge-tally badge-standby" title="Standby di lokasi">☑️ Standby</span>`;
}

// 10. REALTIME CHECKLIST SYNC (OPTIMISTIC + SUPABASE)
async function toggleManifestItem(itemId, isChecked) {
  checklistState[itemId] = isChecked;
  saveLocalManifest();
  renderManifestGrid();
  updateManifestTelemetry();

  if (supabaseClient) {
    try {
      await supabaseClient
        .from('inventory_checklist')
        .upsert({
          id: itemId,
          is_packed: isChecked,
          updated_by: 'web_crew',
          updated_at: new Date().toISOString()
        });
    } catch (err) {
      console.warn('[Supabase Sync Error]', err);
    }
  }
}

async function markAllManifest(targetState) {
  MASTER_INVENTORY.forEach(item => {
    checklistState[item.id] = targetState;
  });
  saveLocalManifest();
  renderManifestGrid();
  updateManifestTelemetry();

  if (supabaseClient) {
    try {
      const records = MASTER_INVENTORY.map(item => ({
        id: item.id,
        is_packed: targetState,
        updated_by: 'batch_crew',
        updated_at: new Date().toISOString()
      }));
      await supabaseClient.from('inventory_checklist').upsert(records);
    } catch (err) {
      console.warn('[Supabase Batch Sync Error]', err);
    }
  }
}

function saveLocalManifest() {
  localStorage.setItem('ip26_checklist_v10', JSON.stringify(checklistState));
}

function updateManifestTelemetry() {
  const total = MASTER_INVENTORY.length;
  const packed = Object.values(checklistState).filter(Boolean).length;
  const pct = Math.round((packed / total) * 100);

  const ratioEl = document.getElementById('manifestRatio');
  const subEl = document.getElementById('manifestSubText');
  const textGauge = document.getElementById('manifestGaugeText');
  const barGauge = document.getElementById('manifestGaugeBar');
  const badgeEl = document.getElementById('manifestBadge');

  if (ratioEl) ratioEl.textContent = `${packed} / ${total} Item Ter-packing`;
  if (subEl) subEl.textContent = `${total - packed} barang belum kembali &bull; ${pct}% progres`;
  if (textGauge) textGauge.textContent = `${pct}%`;
  if (badgeEl) badgeEl.textContent = `${packed}/${total}`;

  if (barGauge) {
    const circumference = 2 * Math.PI * 28; // r = 28 -> ~176
    const offset = circumference - (pct / 100) * circumference;
    barGauge.style.strokeDashoffset = offset;
  }
}

// 11. SUPABASE REALTIME SUBSCRIPTION
async function initSupabaseRealtime() {
  if (!supabaseClient) return;

  const pill = document.getElementById('supabaseStatusPill');

  try {
    const { data, error } = await supabaseClient.from('inventory_checklist').select('id, is_packed');
    if (!error && data) {
      data.forEach(row => {
        if (checklistState.hasOwnProperty(row.id)) {
          checklistState[row.id] = !!row.is_packed;
        }
      });
      saveLocalManifest();
      renderManifestGrid();
      updateManifestTelemetry();
    }

    supabaseClient
      .channel('realtime_manifest_v10')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'inventory_checklist' }, payload => {
        if (payload.new && payload.new.id) {
          checklistState[payload.new.id] = !!payload.new.is_packed;
          saveLocalManifest();
          renderManifestGrid();
          updateManifestTelemetry();
        }
      })
      .subscribe((status) => {
        if (pill) {
          if (status === 'SUBSCRIBED') {
            pill.innerHTML = `<span class="db-dot"></span><span>Supabase DB (Live)</span>`;
          } else {
            pill.innerHTML = `<span class="db-dot" style="background: var(--tally-stby);"></span><span>Supabase Syncing</span>`;
          }
        }
      });

  } catch (e) {
    console.warn('Realtime subscription error:', e);
  }
}

// 12. 1-CLICK WHATSAPP BRIEF DISPATCHER
function copyRigBrief(rigName, details) {
  const briefText = `🎬 [BRIEFING RIG - IBADAH PERDANA 2026]\nUnit: ${rigName}\nGear: ${details}\nStatus: Siap di Lokasi ✅\nVenue: Auditorium UNNES`;
  navigator.clipboard.writeText(briefText).then(() => {
    showToast(`Briefing ${rigName} berhasil disalin! 📋`);
  }).catch(() => {
    showToast(`Tersalin! ✅`);
  });
}

function showToast(msg) {
  const toast = document.getElementById('atemToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2200);
}

// 13. KEYBOARD SHORTCUTS (Ctrl+K for Search)
function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      switchDeck('manifest');
      const input = document.getElementById('manifestSearchInput');
      if (input) input.focus();
    }
  });
}
