/**
 * IP26 BROADCAST COMMAND SUITE — LOGIC & AUTO CLOUD SYNC ENGINE
 * Zero Setup & Zero Login Multi-Device Realtime Synchronization via Open Cloud Relay + SSE Stream
 */

// Master Inventory Dataset (119 Items across 13 Lenders)
const INVENTORY_DATA = [
  {
    lender: "OWL",
    items: [
      { id: "owl_1", name: "Sony A6000", qty: "2 Unit", status: "active", symbol: "✅" },
      { id: "owl_2", name: "Sony A6400", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "owl_3", name: "Sony ZV-E10", qty: "1 Unit", status: "active", symbol: "✅" },
      { id: "owl_4", name: "Lens 18-105MM", qty: "3 Unit", status: "active", symbol: "✅" },
      { id: "owl_5", name: "Lens 50MM", qty: "1 Unit", status: "active", symbol: "✅" },
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

// Global Checklist State
let checklistState = {}; // { [id]: boolean }
let onlyUnpackedFilter = false;
let currentStatusFilter = 'all';
let currentLenderFilter = 'ALL';
let currentSearchQuery = '';

// Dedicated Cloud Database & Realtime Sync Engine (Supabase Postgres + Fallback Open Relay)
const SUPABASE_URL = 'https://ssbkhhnnzwuykyeznpwd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYmtoaG5uend1eWt5ZXpucHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDQ1NzcsImV4cCI6MjEwMjk4MDU3N30.-zGe_xWDTBmo604VS39jl8o7YvhEQYb3fZvCV-fcEbk';

let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
  try {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("⚡ Supabase JS Client initialized successfully");
  } catch (err) {
    console.warn("Supabase client init note:", err);
  }
}

// Fallback Relay Channel
const CLOUD_SYNC_TOPIC = "ip26_checklist_sync_2026";
const CLOUD_RELAY_PUB = `https://ntfy.sh/${CLOUD_SYNC_TOPIC}`;
const CLOUD_RELAY_SSE = `https://ntfy.sh/${CLOUD_SYNC_TOPIC}/sse`;
const CLOUD_RELAY_POLL = `https://ntfy.sh/${CLOUD_SYNC_TOPIC}/json?poll=1&since=24h`;

let eventSource = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initNavScroll();
  loadLocalState();
  initCloudSync();
  initKeepAlivePing();
});

// Load local cache immediately
function loadLocalState() {
  try {
    const saved = localStorage.getItem('ip26_checklist_state');
    if (saved) {
      checklistState = JSON.parse(saved);
    }
  } catch (e) {}
  renderInventory();
  updatePackingProgress();
}

// Save local cache
function saveLocalState() {
  try {
    localStorage.setItem('ip26_checklist_state', JSON.stringify(checklistState));
  } catch (e) {}
}

// Initialize Supabase & Realtime Cloud Sync
async function initCloudSync() {
  const statusPill = document.getElementById('cloudStatusPill');
  const statusText = document.getElementById('cloudStatusText');

  // 1. If Supabase is available, sync directly from Postgres
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('inventory_checklist')
        .select('id, is_packed');

      if (!error && Array.isArray(data)) {
        console.log(`⚡ Synced ${data.length} items from Supabase Postgres`);
        data.forEach(row => {
          if (row.id) {
            checklistState[row.id] = row.is_packed;
          }
        });
        saveLocalState();
        renderInventory();
        updatePackingProgress();

        if (statusPill && statusText) {
          statusPill.className = 'cloud-status-pill connected';
          statusText.textContent = '🟢 Supabase DB (Live Sync)';
        }
      }
    } catch (e) {
      console.warn("Supabase fetch note:", e);
    }

    // Subscribe to Realtime Postgres Changes
    try {
      const realtimeChannel = supabaseClient.channel('realtime_inventory_checklist')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'inventory_checklist' },
          (payload) => {
            if (payload.new && payload.new.id) {
              checklistState[payload.new.id] = payload.new.is_packed;
              saveLocalState();
              const chkInput = document.getElementById(`chk_${payload.new.id}`);
              const rowEl = document.getElementById(`row_${payload.new.id}`);
              if (chkInput) chkInput.checked = payload.new.is_packed;
              if (rowEl) rowEl.classList.toggle('is-packed', payload.new.is_packed);
              updatePackingProgress();
            }
          }
        )
        .subscribe((status) => {
          if (status === 'SUBSCRIBED' && statusPill && statusText) {
            statusPill.className = 'cloud-status-pill connected';
            statusText.textContent = '🟢 Supabase DB (Live Sync)';
          }
        });
    } catch (err) {
      console.warn("Supabase realtime subscription note:", err);
    }
  }

  // 2. Auxiliary Fallback Relay SSE stream
  try {
    if (eventSource) eventSource.close();
    eventSource = new EventSource(CLOUD_RELAY_SSE);

    eventSource.onopen = () => {
      if (statusPill && statusText && !statusText.textContent.includes('Supabase')) {
        statusPill.className = 'cloud-status-pill connected';
        statusText.textContent = '🟢 Cloud Live (Auto-Sync)';
      }
    };

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data && data.message) {
          const payload = JSON.parse(data.message);
          processIncomingSyncEvent(payload, true);
        }
      } catch (err) {}
    };
  } catch (err) {
    console.warn("Auxiliary SSE note:", err);
  }
}

// Keep-Alive Ping (Runs in background every 10 minutes to prevent auto-pause)
function initKeepAlivePing() {
  setInterval(async () => {
    if (supabaseClient) {
      try {
        await supabaseClient.from('inventory_checklist').select('id').limit(1);
        console.log('⚡ Supabase keep-alive ping sent successfully');
      } catch (e) {}
    }
  }, 10 * 60 * 1000);
}

// Process incoming sync events from other crew smartphones
function processIncomingSyncEvent(payload, triggerUIUpdate) {
  if (!payload || !payload.type) return;

  if (payload.type === 'toggle') {
    checklistState[payload.id] = payload.val;
    if (triggerUIUpdate) {
      saveLocalState();
      const chkInput = document.getElementById(`chk_${payload.id}`);
      const rowEl = document.getElementById(`row_${payload.id}`);
      if (chkInput) chkInput.checked = payload.val;
      if (rowEl) rowEl.classList.toggle('is-packed', payload.val);
      updatePackingProgress();
    }
  } else if (payload.type === 'batch') {
    INVENTORY_DATA.forEach(group => {
      group.items.forEach(it => {
        checklistState[it.id] = payload.val;
      });
    });
    if (triggerUIUpdate) {
      saveLocalState();
      renderInventory();
      updatePackingProgress();
    }
  }
}

// Publish event to Cloud Relay
function broadcastCloudEvent(payload) {
  fetch(CLOUD_RELAY_PUB, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  }).catch(() => {});
}

// User toggles an item checkbox
async function toggleItemCheck(itemId, isChecked) {
  checklistState[itemId] = isChecked;
  saveLocalState();
  updatePackingProgress();

  const rowEl = document.getElementById(`row_${itemId}`);
  if (rowEl) {
    rowEl.classList.toggle('is-packed', isChecked);
  }

  // 1. Upsert to Supabase PostgreSQL Database
  if (supabaseClient) {
    try {
      await supabaseClient
        .from('inventory_checklist')
        .upsert({
          id: itemId,
          is_packed: isChecked,
          updated_at: new Date().toISOString()
        });
    } catch (e) {
      console.warn("Supabase update note:", e);
    }
  }

  // 2. Broadcast auxiliary payload
  broadcastCloudEvent({
    type: 'toggle',
    id: itemId,
    val: isChecked,
    ts: Date.now()
  });
}

// Batch Actions: Pack All (true) or Unload All (false)
async function batchCheckAll(checkValue) {
  INVENTORY_DATA.forEach(group => {
    group.items.forEach(it => {
      checklistState[it.id] = checkValue;
    });
  });

  saveLocalState();
  renderInventory();
  updatePackingProgress();

  // 1. Batch upsert to Supabase PostgreSQL
  if (supabaseClient) {
    try {
      const upsertRows = [];
      INVENTORY_DATA.forEach(group => {
        group.items.forEach(it => {
          upsertRows.push({
            id: it.id,
            is_packed: checkValue,
            updated_at: new Date().toISOString()
          });
        });
      });
      await supabaseClient
        .from('inventory_checklist')
        .upsert(upsertRows);
    } catch (e) {
      console.warn("Supabase batch update note:", e);
    }
  }

  // 2. Broadcast auxiliary batch payload
  broadcastCloudEvent({
    type: 'batch',
    val: checkValue,
    ts: Date.now()
  });
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

// Live Search Filter (Debounced for Instant 144Hz Responsiveness)
let searchDebounceTimer = null;
function filterInventory() {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    const input = document.getElementById('inventorySearch');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (input) {
      currentSearchQuery = input.value.toLowerCase().trim();
    }
    if (clearBtn) {
      clearBtn.style.display = currentSearchQuery ? 'block' : 'none';
    }
    renderInventory();
  }, 35);
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

// Render Inventory Catalog Cards with Live Checkboxes (Single-Pass String Injection)
function renderInventory() {
  const container = document.getElementById('inventoryGrid');
  const countBadge = document.getElementById('invCountBadge');
  if (!container) return;

  let matchCount = 0;
  let html = '';

  for (let i = 0; i < INVENTORY_DATA.length; i++) {
    const group = INVENTORY_DATA[i];
    if (currentLenderFilter !== 'ALL' && group.lender !== currentLenderFilter) {
      continue;
    }

    const matchedItems = [];
    for (let j = 0; j < group.items.length; j++) {
      const item = group.items[j];

      if (onlyUnpackedFilter && checklistState[item.id] === true) {
        continue;
      }
      if (currentStatusFilter !== 'all' && item.status !== currentStatusFilter) {
        continue;
      }
      if (currentSearchQuery) {
        const q = currentSearchQuery;
        if (!item.name.toLowerCase().includes(q) && !group.lender.toLowerCase().includes(q) && !item.qty.toLowerCase().includes(q)) {
          continue;
        }
      }
      matchedItems.push(item);
    }

    if (matchedItems.length > 0) {
      matchCount += matchedItems.length;

      let itemsHtml = '';
      for (let k = 0; k < matchedItems.length; k++) {
        const it = matchedItems[k];
        const isPacked = checklistState[it.id] === true;
        const badgeClass = it.status === 'active' ? 'badge-success' : (it.status === 'partial' ? 'badge-warning' : 'badge-standby');
        
        itemsHtml += `
          <li class="inv-item-row ${isPacked ? 'is-packed' : ''}" id="row_${it.id}">
            <label class="custom-chk-label" for="chk_${it.id}">
              <input type="checkbox" id="chk_${it.id}" class="custom-chk-input" ${isPacked ? 'checked' : ''} onchange="toggleItemCheck('${it.id}', this.checked)">
              <span class="custom-chk-box">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <span class="item-name-text">${it.name} <strong style="color:var(--text-dim);font-weight:normal;">(${it.qty})</strong></span>
            </label>
            <span class="badge ${badgeClass}">${it.symbol}</span>
          </li>
        `;
      }

      html += `
        <div class="inv-group-card">
          <div class="inv-group-header">
            <span>${group.lender}</span>
            <span class="badge badge-tech font-mono">${matchedItems.length} Item</span>
          </div>
          <ul class="inv-item-list">${itemsHtml}</ul>
        </div>
      `;
    }
  }

  if (matchCount === 0) {
    container.innerHTML = `
      <div class="callout-banner" style="grid-column: 1 / -1; justify-content: center; text-align: center; padding: 32px;">
        <div>
          <strong style="color:#fff; font-size:15px;">Semua Barang Selesai Di-Packing / Tidak Ada Hasil</strong>
          <p class="text-muted mt-1">Tidak ada item inventaris yang cocok dengan filter atau kata kunci saat ini.</p>
          <button class="btn-copy-rig mt-3" style="padding: 7px 14px;" onclick="clearSearch(); onlyUnpackedFilter = false; setFilterStatus('all', document.querySelector('.status-chip')); setLenderFilter('ALL', document.querySelector('.lender-pill'));">Reset Semua Filter</button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = html;
  }

  if (countBadge) {
    countBadge.textContent = `Menampilkan ${matchCount} dari ${TOTAL_ITEMS_COUNT} Barang`;
  }
}

// Ultra-Fast IntersectionObserver Scroll Spy (0ms main-thread scroll overhead)
function initNavScroll() {
  const sections = document.querySelectorAll('.content-section');
  const desktopLinks = document.querySelectorAll('.desktop-nav-tabs .tab-link');
  const dockLinks = document.querySelectorAll('.mobile-dock-bottom .dock-btn');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) {
          desktopLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
          dockLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}
