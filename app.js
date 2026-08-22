/**
 * IP26 PRODUCTION COMMAND DASHBOARD — JAVASCRIPT LOGIC
 * Features: Live Telemetry Clock, Copy-to-Clipboard, Inventory Search & Filtering, Responsive Tabs
 */

// Master Inventory Data Store (100% extracted from ip26_pro2.txt)
const INVENTORY_DATA = [
  {
    lender: "OWL",
    items: [
      { name: "Sony A6000", qty: "2 Unit", status: "active", symbol: "✅" },
      { name: "Sony A6400", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Sony ZV-E10", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Lens 18-105MM", qty: "3 Unit", status: "active", symbol: "✅" },
      { name: "Lens 50MM Fix", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Battery", qty: "8 Unit", status: "active", symbol: "✅" },
      { name: "Charger", qty: "1 Pack", status: "active", symbol: "✅" },
      { name: "Memory Card 32GB", qty: "4 Unit", status: "active", symbol: "✅" },
      { name: "Cinetreak Cinelive V1", qty: "1 Pack", status: "active", symbol: "✅" },
      { name: "Power Adaptor MIX", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Hollyland Pyro H", qty: "1 Pack", status: "active", symbol: "✅" },
      { name: "Hollyland Pyro S", qty: "1 Pack", status: "active", symbol: "✅" },
      { name: "Battery WIR", qty: "4 Unit", status: "active", symbol: "✅" },
      { name: "Tripod Camera Big", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "HDMI to Micro HDMI Converter", qty: "2 Unit", status: "active", symbol: "✅" },
      { name: "HDMI to Micro HDMI Cable 30CM", qty: "2 Unit", status: "active", symbol: "✅" },
      { name: "HDMI Capture", qty: "2 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "ABON",
    items: [
      { name: "HDMI Capture", qty: "2 Unit", status: "partial", symbol: "⚠️ 1/2" }
    ]
  },
  {
    lender: "Andreas",
    items: [
      { name: "Fan Cooler", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Mouse Pad", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Keyboard Ext", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Mouse Ext", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Powerbank", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Power Adaptor USB A", qty: "9 Unit", status: "standby", symbol: "☑️" },
      { name: "Power Adaptor USB A x C", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Power Adaptor USB C", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A to USB B Data Cable", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A to USB Micro B Data Cable", qty: "2 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A to USB C Data Cable", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "USB A to USB C Charge Cable", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "USB C to USB C Charge Cable", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A to USB A Extender 30CM", qty: "2 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A to USB A Extender 2M", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "USB A to USB C Male Converter", qty: "4 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A to USB C Female Converter", qty: "2 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A to Mini USB Cable", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A Splitter 3CH", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "USB A Splitter 4CH", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "USB C DAC Hanason AB17X", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "USB C DAC Oraimo OAA310", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "In Ear Monitor QKZ Hi7T", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "In Ear Monitor KZ EDX Pro", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "Fastdrive Vgen SSD 128GB", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "Fastdrive Toshiba HDD 1TB", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "Flashdrive Toshiba 8GB", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Flashdrive Sandisk 16GB", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Flashdrive Toshiba 32GB", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Flashdrive Toshiba 64GB", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "HDMI to Mini HDMI Converter", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Mini HDMI to Mini HDMI Cable 1,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "HDMI to HDMI Cable 1,5M", qty: "3 Unit", status: "active", symbol: "✅" },
      { name: "VGA to HDMI Converter", qty: "3 Unit", status: "standby", symbol: "☑️" },
      { name: "VGA to VGA Cable 1,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Power Cable 3PIN", qty: "3 Unit", status: "partial", symbol: "⚠️" },
      { name: "Power Cable 2PIN", qty: "1 Unit", status: "partial", symbol: "⚠️" },
      { name: "Terminal Cable 4CH", qty: "3 Unit", status: "partial", symbol: "⚠️" },
      { name: "Terminal Cable 3CH", qty: "2 Unit", status: "partial", symbol: "⚠️" },
      { name: "Terminal Cable 2CH", qty: "1 Unit", status: "partial", symbol: "⚠️" },
      { name: "Terminal Cable XCH", qty: "X Unit", status: "active", symbol: "✅" },
      { name: "Terminal T", qty: "8 Unit", status: "partial", symbol: "⚠️" },
      { name: "Addon Box", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "Jack Box", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "Screw Box", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "Ties Box", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "Tool Box", qty: "2 Pack", status: "standby", symbol: "☑️" },
      { name: "Cable", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "Tape", qty: "1 Pack", status: "standby", symbol: "☑️" }
    ]
  },
  {
    lender: "GIA Deliksari",
    items: [
      { name: "Mixer NewBaxs CT80S", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "XLR Female to Male Cable 3M", qty: "2 Unit", status: "active", symbol: "✅" },
      { name: "USB A to USB C Data Cable", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Tripod Camera Big", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "HDMI Splitter 2CH", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Power Adaptor SPL", qty: "1 Pack", status: "standby", symbol: "☑️" },
      { name: "HDMI to HDMI Cable 1M", qty: "2 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "GKJ Ngaliyan",
    items: [
      { name: "Stand Lighting Small", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "HDMI Cable 15M", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "HDMI Cable 10M", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "HDMI Cable 5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "HDMI Cable 1,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "HDMI Capture", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "HDMI Splitter 4CH", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Power Adaptor SPL", qty: "1 Pack", status: "standby", symbol: "☑️" }
    ]
  },
  {
    lender: "UKK UNNES",
    items: [
      { name: "XLR Female to Male Cable 10M", qty: "3 Unit", status: "partial", symbol: "⚠️ 2/3" },
      { name: "Stand Lighting Small", qty: "4 Unit", status: "partial", symbol: "⚠️ 2/4" },
      { name: "Tripod Camera Big", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "HDMI to Mini HDMI Cable 2,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "HDMI Cable 15M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "HDMI Cable 10M", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "HDMI Cable 1,5M", qty: "4 Unit", status: "partial", symbol: "⚠️ 2/4" },
      { name: "HDMI Splitter 4CH", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Power Adaptor SPL", qty: "1 Pack", status: "active", symbol: "✅" },
      { name: "VGA to VGA Cable 1,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "VGA to VGA Cable 2,5M", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "VGA to HDMI Converter", qty: "2 Unit", status: "standby", symbol: "☑️" },
      { name: "Power Cable XPIN", qty: "X Unit", status: "standby", symbol: "☑️" },
      { name: "Terminal Cable XCH", qty: "X Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Lio",
    items: [
      { name: "HDMI Cable 1,5M", qty: "1 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Darrel",
    items: [
      { name: "Television", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Power Adaptor TV", qty: "1 Pack", status: "active", symbol: "✅" },
      { name: "Memory Card 8GB", qty: "1 Unit", status: "standby", symbol: "☑️" }
    ]
  },
  {
    lender: "Kiel 1",
    items: [
      { name: "Sony ZVE10", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Lens 16-50MM Kit", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Lens 50MM Fix", qty: "1 Unit", status: "standby", symbol: "☑️" },
      { name: "Battery", qty: "2 Unit", status: "active", symbol: "✅" },
      { name: "Charger", qty: "1 Pack", status: "active", symbol: "✅" },
      { name: "Memory Card 64GB", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Memory Card 128GB", qty: "1 Unit", status: "standby", symbol: "☑️" }
    ]
  },
  {
    lender: "Joel",
    items: [
      { name: "Sony A6600", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Lens 24-70MM Zeiss", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Battery", qty: "2 Unit", status: "active", symbol: "✅" },
      { name: "Charger", qty: "1 Pack", status: "active", symbol: "✅" },
      { name: "Memory Card 64GB", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Gimbal DJI Ronin RS3", qty: "1 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Kezia",
    items: [
      { name: "Television", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "Power Adaptor TV", qty: "1 Pack", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Jennifer",
    items: [
      { name: "HP iPhone 15", qty: "1 Unit", status: "active", symbol: "✅" },
      { name: "TAB iPad", qty: "1 Unit", status: "active", symbol: "✅" }
    ]
  },
  {
    lender: "Panitia",
    items: [
      { name: "HDMI to Micro HDMI Converter", qty: "2 Unit", status: "active", symbol: "✅" },
      { name: "Terminal Cable XCH", qty: "X Unit", status: "active", symbol: "✅" }
    ]
  }
];

// Calculate Total Items
const TOTAL_ITEMS_COUNT = INVENTORY_DATA.reduce((acc, g) => acc + g.items.length, 0);

// Current Filtering State
let currentStatusFilter = 'all';
let currentLenderFilter = 'ALL';
let currentSearchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderInventory();
  initLiveClock();
  initNavScroll();
});

// Live WIB Clock
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

// Copy-to-Clipboard Utility
function copyText(text, btnElement) {
  if (!navigator.clipboard) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {}
    document.body.removeChild(textArea);
  } else {
    navigator.clipboard.writeText(text);
  }

  if (btnElement) {
    const originalHTML = btnElement.innerHTML;
    btnElement.innerHTML = `<span>Tersalin! ✅</span>`;
    btnElement.style.borderColor = 'var(--accent-emerald)';
    btnElement.style.color = 'var(--accent-emerald)';
    setTimeout(() => {
      btnElement.innerHTML = originalHTML;
      btnElement.style.borderColor = '';
      btnElement.style.color = '';
    }, 2000);
  }
}

// Switch Camera Tabs
function switchCameraTab(tabName) {
  document.getElementById('tabBtnBroadcast').classList.toggle('active', tabName === 'broadcast');
  document.getElementById('tabBtnDoc').classList.toggle('active', tabName === 'documentation');
  
  document.getElementById('tabBroadcast').classList.toggle('active', tabName === 'broadcast');
  document.getElementById('tabDoc').classList.toggle('active', tabName === 'documentation');
}

// Switch Routing Tabs
function switchRoutingTab(tabName) {
  const tabs = ['video', 'audio', 'timekeeper', 'electric'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const panel = document.getElementById(`tab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (panel) panel.classList.toggle('active', t === tabName);
  });
}

// Filter Status
function setFilterStatus(status, element) {
  currentStatusFilter = status;
  
  const chips = document.querySelectorAll('.status-chips-row .status-chip');
  chips.forEach(c => c.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }

  renderInventory();
}

// Filter Lender
function setLenderFilter(lender, element) {
  currentLenderFilter = lender;

  const pills = document.querySelectorAll('.lender-pill-group .pill-btn');
  pills.forEach(p => p.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }

  renderInventory();
}

// Live Search Input Handler
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

// Render Filtered Inventory Grid
function renderInventory() {
  const container = document.getElementById('inventoryGrid');
  const countBadge = document.getElementById('invCountBadge');
  if (!container) return;

  container.innerHTML = '';
  let matchCount = 0;

  INVENTORY_DATA.forEach(group => {
    // Lender filter
    if (currentLenderFilter !== 'ALL' && group.lender !== currentLenderFilter) {
      return;
    }

    // Filter individual items
    const matchedItems = group.items.filter(item => {
      // Status filter
      if (currentStatusFilter !== 'all' && item.status !== currentStatusFilter) {
        return false;
      }

      // Search query
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
        const li = document.createElement('li');
        li.className = 'inv-item-row';
        
        let badgeClass = 'badge-success';
        if (it.status === 'partial') badgeClass = 'badge-warning';
        if (it.status === 'standby') badgeClass = 'badge-standby';

        li.innerHTML = `
          <span class="inv-item-name">${it.name} (${it.qty})</span>
          <span class="badge ${badgeClass}">${it.symbol}</span>
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
      <div class="callout-box" style="grid-column: 1 / -1; justify-content: center; text-align: center; padding: 36px;">
        <div>
          <strong>Pencarian Tidak Ditemukan</strong>
          <p class="text-muted mt-1">Tidak ada item inventaris yang sesuai dengan filter atau kata kunci "${currentSearchQuery}".</p>
          <button class="btn-console mt-2" onclick="clearSearch(); setFilterStatus('all', document.querySelector('.status-chip')); setLenderFilter('ALL', document.querySelector('.pill-btn'));">Reset Semua Filter</button>
        </div>
      </div>
    `;
  }
}

// Smooth Navigation Scroll Spy
function initNavScroll() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
