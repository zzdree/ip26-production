/**
 * ==========================================================================
 * IP26 BROADCAST COMMAND SUITE — CLEAN ENGINE RUNTIME (v13.0)
 * Linear / Vercel Compact • Collapsible Accordions • Supabase Realtime Sync
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
    console.warn('[Supabase] Init fallback:', err);
  }
}

// 2. MASTER INVENTORY DATA (119 ITEMS ACROSS 13 LENDERS)
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

// 3. INITIALIZATION
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

// 4. TIMERS (MASTER WIB CLOCK & EVENT COUNTDOWN)
function initTimers() {
  updateMasterClock();
  updateCountdown();
  setInterval(updateMasterClock, 1000);
  setInterval(updateCountdown, 1000);
}

function updateMasterClock() {
  const now = new Date();
  const options = { timeZone: 'Asia/Jakarta', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const wibStr = new Intl.DateTimeFormat('id-ID', options).format(now);
  const el = document.getElementById('masterClockWIB');
  if (el) el.textContent = `${wibStr} WIB`;
}

function updateCountdown() {
  const eventDate = new Date('2026-09-17T00:00:00+07:00').getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;

  const el = document.getElementById('liveCountdownText');
  if (!el) return;

  if (diff <= 0) {
    el.textContent = 'EVENT LIVE! 🚀';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  el.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 5. ACCORDION TOGGLE & JUMP-TO LOGIC
function toggleSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.classList.toggle('collapsed');
  }
}

function navJumpTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  // Auto expand if collapsed
  if (el.classList.contains('collapsed')) {
    el.classList.remove('collapsed');
  }

  // Scroll smoothly
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Update active state in navs
  updateActiveNavState(sectionId);
}

function updateActiveNavState(activeId) {
  const idMap = {
    'modInventory': { top: 'navLinkInventory', dock: 'dockInventory' },
    'modCameras': { top: 'navLinkCameras', dock: 'dockCameras' },
    'modRouting': { top: 'navLinkRouting', dock: 'dockRouting' },
    'modStage': { top: 'navLinkStage', dock: 'dockStage' },
    'modRundown': { top: 'navLinkRundown', dock: 'dockRundown' }
  };

  document.querySelectorAll('.nav-link-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.dock-item').forEach(el => el.classList.remove('active'));

  if (idMap[activeId]) {
    const topEl = document.getElementById(idMap[activeId].top);
    const dockEl = document.getElementById(idMap[activeId].dock);
    if (topEl) topEl.classList.add('active');
    if (dockEl) dockEl.classList.add('active');
  }
}

// 6. SCROLL SPY
function setupScrollSpy() {
  const sections = document.querySelectorAll('.accordion-module');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateActiveNavState(entry.target.id);
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0.1
  });

  sections.forEach(sec => observer.observe(sec));
}

// 7. CHECKLIST STATE & SUPABASE SYNC
function initChecklistState() {
  const localSaved = localStorage.getItem('ip26_checklist_state_v13');
  if (localSaved) {
    try {
      checklistState = JSON.parse(localSaved);
    } catch (e) {
      checklistState = {};
    }
  } else {
    // Default initial
    MASTER_INVENTORY.forEach(item => {
      checklistState[item.id] = false;
    });
  }
}

function saveLocalState() {
  localStorage.setItem('ip26_checklist_state_v13', JSON.stringify(checklistState));
}

async function initSupabaseRealtime() {
  if (!supabaseClient) return;

  try {
    // 1. Fetch current remote state
    const { data, error } = await supabaseClient
      .from('inventory_checklist')
      .select('item_id, is_checked');

    if (!error && Array.isArray(data)) {
      data.forEach(row => {
        checklistState[row.item_id] = Boolean(row.is_checked);
      });
      saveLocalState();
      renderManifestCards();
      updateProgressUI();
    }

    // 2. Subscribe to realtime changes
    supabaseClient
      .channel('public:inventory_checklist')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'inventory_checklist' }, (payload) => {
        if (payload.new && payload.new.item_id) {
          checklistState[payload.new.item_id] = Boolean(payload.new.is_checked);
          saveLocalState();
          renderManifestCards();
          updateProgressUI();
        }
      })
      .subscribe();

  } catch (err) {
    console.warn('[Supabase Realtime] Fallback to local storage:', err);
  }
}

async function toggleItem(itemId, isChecked) {
  checklistState[itemId] = isChecked;
  saveLocalState();
  updateProgressUI();

  // Optimistic UI update on target row
  const row = document.getElementById(`row-${itemId}`);
  if (row) {
    if (isChecked) {
      row.classList.add('checked');
    } else {
      row.classList.remove('checked');
    }
  }

  // Push to Supabase
  if (supabaseClient) {
    try {
      await supabaseClient
        .from('inventory_checklist')
        .upsert({
          item_id: itemId,
          is_checked: isChecked,
          updated_at: new Date().toISOString()
        }, { onConflict: 'item_id' });
    } catch (e) {
      console.warn('[Supabase] Update failed, cached locally:', e);
    }
  }
}

function batchSetChecklist(setAllTo) {
  MASTER_INVENTORY.forEach(item => {
    checklistState[item.id] = setAllTo;
  });
  saveLocalState();
  renderManifestCards();
  updateProgressUI();

  if (supabaseClient) {
    const payload = MASTER_INVENTORY.map(item => ({
      item_id: item.id,
      is_checked: setAllTo,
      updated_at: new Date().toISOString()
    }));
    supabaseClient.from('inventory_checklist').upsert(payload, { onConflict: 'item_id' }).catch(console.warn);
  }
}

// 8. RENDER LENDER PILLS & MANIFEST CARDS
function renderLenderPills() {
  const rack = document.getElementById('lenderPillsRack');
  if (!rack) return;

  const lenders = ['All', ...new Set(MASTER_INVENTORY.map(i => i.lender))];
  rack.innerHTML = lenders.map(lender => {
    const count = lender === 'All' ? MASTER_INVENTORY.length : MASTER_INVENTORY.filter(i => i.lender === lender).length;
    const activeCls = lender === activeLenderFilter ? 'active' : '';
    return `<button class="lender-tab-pill ${activeCls}" onclick="setLenderFilter('${lender}')">${lender} (${count})</button>`;
  }).join('');
}

function setLenderFilter(lender) {
  activeLenderFilter = lender;
  renderLenderPills();
  renderManifestCards();
}

function handleSearch(val) {
  activeSearchQuery = (val || '').toLowerCase().trim();
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    clearBtn.style.display = activeSearchQuery.length > 0 ? 'block' : 'none';
  }
  renderManifestCards();
}

function clearSearch() {
  const input = document.getElementById('inventorySearchInput');
  if (input) input.value = '';
  activeSearchQuery = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderManifestCards();
}

function toggleUnreturnedFilter() {
  filterUnreturnedOnly = !filterUnreturnedOnly;
  const btn = document.getElementById('btnFilterUnreturned');
  if (btn) {
    if (filterUnreturnedOnly) {
      btn.classList.add('btn-coral');
      btn.textContent = '✕ Tampilkan Semua';
    } else {
      btn.classList.remove('btn-coral');
      btn.textContent = '⚠️ Belum Selesai';
    }
  }
  renderManifestCards();
}

function renderManifestCards() {
  const grid = document.getElementById('manifestCardsGrid');
  if (!grid) return;

  // Filter items
  let filtered = MASTER_INVENTORY.filter(item => {
    // Lender filter
    if (activeLenderFilter !== 'All' && item.lender !== activeLenderFilter) {
      return false;
    }
    // Search query
    if (activeSearchQuery.length > 0) {
      const matchName = item.name.toLowerCase().includes(activeSearchQuery);
      const matchLender = item.lender.toLowerCase().includes(activeSearchQuery);
      const matchUsage = item.usage.toLowerCase().includes(activeSearchQuery);
      if (!matchName && !matchLender && !matchUsage) return false;
    }
    // Unreturned only filter
    if (filterUnreturnedOnly && checklistState[item.id]) {
      return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; padding: 24px; text-align: center; color: var(--text-dim);">Tidak ada barang yang cocok dengan pencarian / filter.</div>`;
    return;
  }

  // Group by lender
  const grouped = {};
  filtered.forEach(item => {
    if (!grouped[item.lender]) grouped[item.lender] = [];
    grouped[item.lender].push(item);
  });

  grid.innerHTML = Object.keys(grouped).map(lenderName => {
    const items = grouped[lenderName];
    const checkedCount = items.filter(i => checklistState[i.id]).length;

    const rowsHtml = items.map(item => {
      const isChecked = Boolean(checklistState[item.id]);
      const checkedCls = isChecked ? 'checked' : '';
      const badgeCls = item.status === 'used' ? 'used' : (item.status === 'partial' ? 'partial' : 'standby');
      const badgeLabel = item.status === 'used' ? '✅ Terpasang' : (item.status === 'partial' ? '⚠️ Sebagian' : '☑️ Standby');

      return `
        <div class="checklist-item-row ${checkedCls}" id="row-${item.id}" onclick="triggerRowToggle('${item.id}')">
          <div class="custom-checkbox-wrap" onclick="event.stopPropagation();">
            <input type="checkbox" id="chk-${item.id}" ${isChecked ? 'checked' : ''} onchange="toggleItem('${item.id}', this.checked)">
          </div>
          <div class="item-details-body">
            <span class="item-name-headline">${item.name} (${item.qty})</span>
            <div class="item-meta-sub">
              <span class="status-badge ${badgeCls}">${badgeLabel}</span>
              <span>${item.usage}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="lender-group-card">
        <div class="lender-group-header">
          <span class="lender-name-text">${lenderName}</span>
          <span class="lender-count-tag">${checkedCount}/${items.length} Selesai</span>
        </div>
        <div class="items-list-container">
          ${rowsHtml}
        </div>
      </div>
    `;
  }).join('');
}

function triggerRowToggle(itemId) {
  const chk = document.getElementById(`chk-${itemId}`);
  if (chk) {
    chk.checked = !chk.checked;
    toggleItem(itemId, chk.checked);
  }
}

// 9. PROGRESS UI UPDATE
function updateProgressUI() {
  const total = MASTER_INVENTORY.length;
  const checked = MASTER_INVENTORY.filter(i => checklistState[i.id]).length;
  const pct = Math.round((checked / total) * 100);

  const ratioEl = document.getElementById('progressRatioText');
  const pctEl = document.getElementById('progressPctText');
  const fillEl = document.getElementById('progressFillBar');
  const headerBadge = document.getElementById('manifestHeaderStatus');

  if (ratioEl) ratioEl.textContent = `${checked} / ${total} Item Ter-packing`;
  if (pctEl) pctEl.textContent = `${pct}% Selesai`;
  if (fillEl) fillEl.style.width = `${pct}%`;
  if (headerBadge) headerBadge.textContent = `${checked}/${total} Selesai`;
}

// 10. 1-CLICK WHATSAPP BRIEFING COPY
function copyBriefWA(unitName, gearDetails) {
  const message = `*BRIEFING KAMERA & GEAR — IBADAH PERDANA 2026*\n\n` +
    `📍 *Unit:* ${unitName}\n` +
    `📦 *Alat & Rigging:* ${gearDetails}\n` +
    `📅 *Jadwal:* 17 September 2026\n` +
    `🏛️ *Lokasi:* Gedung Auditorium UNNES\n\n` +
    `_Harap cek kelengkapan baterai, kabel, dan memory card sebelum gladi resik._`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message).then(showToast).catch(() => fallbackCopy(message));
  } else {
    fallbackCopy(message);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast();
  } catch (err) {
    alert('Gagal menyalin teks briefing.');
  }
  document.body.removeChild(ta);
}

function showToast() {
  const toast = document.getElementById('fluidToast');
  if (!toast) return;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2200);
}

// 11. SWITCHER BUS HANDLERS
function setBusPgm(ch) {
  document.querySelectorAll('.bus-label.pgm ~ .bus-buttons .btn-bus').forEach((btn, idx) => {
    if (idx + 1 === ch) {
      btn.classList.add('active-pgm');
    } else {
      btn.classList.remove('active-pgm');
    }
  });
  const lbl = document.getElementById('pgmLabel');
  if (lbl) lbl.textContent = `CAM ${ch}`;
}

function setBusPvw(ch) {
  document.querySelectorAll('.bus-label.pvw ~ .bus-buttons .btn-bus').forEach((btn, idx) => {
    if (idx + 1 === ch) {
      btn.classList.add('active-pvw');
    } else {
      btn.classList.remove('active-pvw');
    }
  });
  const lbl = document.getElementById('pvwLabel');
  if (lbl) lbl.textContent = `CAM ${ch}`;
}

// 12. KEYBOARD SHORTCUTS
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      navJumpTo('modInventory');
      const search = document.getElementById('inventorySearchInput');
      if (search) search.focus();
    }
  });
}
