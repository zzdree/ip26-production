/**
 * IP26 LIVE BROADCAST & MULTIMEDIA PRODUCTION PORTAL
 * Client Application Logic:
 * 1. Dual Theme Engine (Dark Slate / Warm Linen)
 * 2. Realtime Cloud Database Sync Engine (Supabase Realtime WebSockets + Offline Cache)
 * 3. Interactive Inventory Checklist (Loading In & Packing Out)
 * 4. Search & Filter Engine
 * 5. Dynamic ScrollSpy Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. THEME ENGINE
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeBtn = document.getElementById('mobile-theme-btn');
  const root = document.documentElement;

  const storedTheme = localStorage.getItem('ip26_theme') || 'dark';
  setTheme(storedTheme);

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('ip26_theme', theme);
    updateThemeButtons(theme);
  }

  function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }

  function updateThemeButtons(theme) {
    const isDark = theme === 'dark';
    if (themeToggleBtn) {
      const label = themeToggleBtn.querySelector('.theme-label');
      if (label) label.textContent = isDark ? 'Mode Gelap' : 'Mode Terang';
    }
    if (mobileThemeBtn) {
      const icon = mobileThemeBtn.querySelector('.theme-dock-icon');
      if (icon) icon.textContent = isDark ? '🌙' : '☀️';
    }
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

  // =========================================================================
  // 2. REALTIME CLOUD DATABASE & INVENTORY SYNC ENGINE (Supabase)
  // =========================================================================
  let supabaseClient = null;
  let realtimeChannel = null;
  const syncStatusDot = document.getElementById('sync-status-dot');
  const syncStatusText = document.getElementById('sync-status-text');
  const crewNameInput = document.getElementById('crew-name-input');
  const crewSavedBadge = document.getElementById('crew-saved-badge');
  const loadingCounterDisplay = document.getElementById('loading-counter-display');
  const packingCounterDisplay = document.getElementById('packing-counter-display');
  const loadingProgressBar = document.getElementById('loading-progress-bar');
  const packingProgressBar = document.getElementById('packing-progress-bar');

  // Modal elements
  const cloudConfigModal = document.getElementById('cloud-config-modal');
  const btnOpenCloudConfig = document.getElementById('btn-open-cloud-config');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnSaveCloudConfig = document.getElementById('btn-save-cloud-config');
  const btnDisconnectCloud = document.getElementById('btn-disconnect-cloud');
  const supabaseUrlInput = document.getElementById('supabase-url-input');
  const supabaseKeyInput = document.getElementById('supabase-key-input');

  // In-memory state cache
  const inventoryState = {}; // { itemId: { loaded, loaded_by, loaded_at, packed, packed_by, packed_at } }
  let totalInventoryCount = 0;

  // Load Crew Name
  let crewName = localStorage.getItem('ip26_crew_name') || '';
  if (crewNameInput) {
    crewNameInput.value = crewName;
    crewNameInput.addEventListener('input', (e) => {
      crewName = e.target.value.trim();
      localStorage.setItem('ip26_crew_name', crewName);
      if (crewSavedBadge) {
        crewSavedBadge.style.opacity = '1';
        setTimeout(() => { crewSavedBadge.style.opacity = '0.7'; }, 1500);
      }
    });
  }

  function getEffectiveCrewName() {
    return crewName || 'Crew';
  }

  // Generate deterministic ID
  function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  // Augment Inventory Tables with Checklist Columns
  const vendorBlocks = document.querySelectorAll('.vendor-block');
  vendorBlocks.forEach((block) => {
    const vendor = block.getAttribute('data-vendor') || 'Unknown';
    const table = block.querySelector('.inv-table');
    if (!table) return;

    // 1. Augment Header
    const headerRow = table.querySelector('thead tr');
    if (headerRow && !headerRow.querySelector('.th-sync')) {
      const thCols = headerRow.children;
      // Target: Nama Barang (0), Jumlah (1), Status (2), [Loading, Packing], Keterangan (3)
      const thLoading = document.createElement('th');
      thLoading.className = 'th-sync';
      thLoading.innerHTML = '📦 Loading In';

      const thPacking = document.createElement('th');
      thPacking.className = 'th-sync';
      thPacking.innerHTML = '🧳 Packing Out';

      if (thCols.length >= 4) {
        headerRow.insertBefore(thLoading, thCols[3]);
        headerRow.insertBefore(thPacking, thCols[4]);
      } else {
        headerRow.appendChild(thLoading);
        headerRow.appendChild(thPacking);
      }
    }

    // 2. Augment Rows
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach((row, idx) => {
      totalInventoryCount++;
      const itemName = row.getAttribute('data-name') || row.children[0]?.textContent.trim() || `Item-${idx}`;
      const itemId = `${slugify(vendor)}_${idx}_${slugify(itemName)}`;
      row.setAttribute('data-item-id', itemId);
      row.setAttribute('data-vendor-name', vendor);
      row.setAttribute('data-item-title', itemName);

      // Load cached local state
      const localCached = localStorage.getItem(`ip26_inv_${itemId}`);
      if (localCached) {
        try {
          inventoryState[itemId] = JSON.parse(localCached);
        } catch (e) {
          inventoryState[itemId] = { loaded: false, packed: false };
        }
      } else {
        inventoryState[itemId] = { loaded: false, packed: false };
      }

      // Check if already injected
      if (row.querySelector('.sync-td')) return;

      const tdLoading = document.createElement('td');
      tdLoading.className = 'sync-td';
      tdLoading.innerHTML = `
        <button type="button" class="check-toggle-btn btn-loading" data-item="${itemId}" data-type="loading">
          <span class="check-label">📦 Belum</span>
          <span class="check-meta-tag">-</span>
        </button>
      `;

      const tdPacking = document.createElement('td');
      tdPacking.className = 'sync-td';
      tdPacking.innerHTML = `
        <button type="button" class="check-toggle-btn btn-packing" data-item="${itemId}" data-type="packing">
          <span class="check-label">🧳 Belum</span>
          <span class="check-meta-tag">-</span>
        </button>
      `;

      const rowCols = row.children;
      if (rowCols.length >= 4) {
        row.insertBefore(tdLoading, rowCols[3]);
        row.insertBefore(tdPacking, rowCols[4]);
      } else {
        row.appendChild(tdLoading);
        row.appendChild(tdPacking);
      }

      // Attach Click Listeners
      const loadBtn = tdLoading.querySelector('.btn-loading');
      const packBtn = tdPacking.querySelector('.btn-packing');

      loadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleItemCheck(itemId, 'loading', vendor, itemName);
      });

      packBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleItemCheck(itemId, 'packing', vendor, itemName);
      });

      // Render initial button state
      renderRowUI(itemId, inventoryState[itemId]);
    });
  });

  // Render Row Buttons UI
  function renderRowUI(itemId, state, isRemote = false) {
    if (!state) return;
    const row = document.querySelector(`tr[data-item-id="${itemId}"]`);
    if (!row) return;

    const loadBtn = row.querySelector('.btn-loading');
    const packBtn = row.querySelector('.btn-packing');

    if (loadBtn) {
      const label = loadBtn.querySelector('.check-label');
      const meta = loadBtn.querySelector('.check-meta-tag');
      if (state.loaded) {
        loadBtn.classList.add('active-loading');
        if (label) label.textContent = '📦 Siap';
        if (meta) {
          const time = state.loaded_at ? new Date(state.loaded_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
          meta.textContent = `${state.loaded_by || 'Crew'} ${time}`.trim();
        }
      } else {
        loadBtn.classList.remove('active-loading');
        if (label) label.textContent = '📦 Belum';
        if (meta) meta.textContent = '-';
      }
    }

    if (packBtn) {
      const label = packBtn.querySelector('.check-label');
      const meta = packBtn.querySelector('.check-meta-tag');
      if (state.packed) {
        packBtn.classList.add('active-packing');
        if (label) label.textContent = '🧳 Kemas';
        if (meta) {
          const time = state.packed_at ? new Date(state.packed_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
          meta.textContent = `${state.packed_by || 'Crew'} ${time}`.trim();
        }
      } else {
        packBtn.classList.remove('active-packing');
        if (label) label.textContent = '🧳 Belum';
        if (meta) meta.textContent = '-';
      }
    }

    if (isRemote) {
      row.classList.remove('remote-updated');
      void row.offsetWidth; // trigger reflow
      row.classList.add('remote-updated');
      setTimeout(() => { row.classList.remove('remote-updated'); }, 1400);
    }
  }

  // Recalculate Progress Meters
  function updateProgressMeters() {
    let loadedCount = 0;
    let packedCount = 0;
    const total = totalInventoryCount || 65;

    Object.keys(inventoryState).forEach((id) => {
      if (inventoryState[id]?.loaded) loadedCount++;
      if (inventoryState[id]?.packed) packedCount++;
    });

    const loadPct = Math.round((loadedCount / total) * 100);
    const packPct = Math.round((packedCount / total) * 100);

    if (loadingCounterDisplay) loadingCounterDisplay.textContent = `${loadedCount} / ${total} (${loadPct}%)`;
    if (packingCounterDisplay) packingCounterDisplay.textContent = `${packedCount} / ${total} (${packPct}%)`;
    if (loadingProgressBar) loadingProgressBar.style.width = `${loadPct}%`;
    if (packingProgressBar) packingProgressBar.style.width = `${packPct}%`;
  }

  updateProgressMeters();

  // Toggle Item Check
  async function toggleItemCheck(itemId, type, vendor, itemName) {
    const currentState = inventoryState[itemId] || { loaded: false, packed: false };
    const by = getEffectiveCrewName();
    const now = new Date().toISOString();

    if (type === 'loading') {
      currentState.loaded = !currentState.loaded;
      currentState.loaded_by = currentState.loaded ? by : '';
      currentState.loaded_at = currentState.loaded ? now : null;
    } else if (type === 'packing') {
      currentState.packed = !currentState.packed;
      currentState.packed_by = currentState.packed ? by : '';
      currentState.packed_at = currentState.packed ? now : null;
    }

    inventoryState[itemId] = currentState;
    localStorage.setItem(`ip26_inv_${itemId}`, JSON.stringify(currentState));

    // Optimistic UI update
    renderRowUI(itemId, currentState, false);
    updateProgressMeters();

    // Push to Supabase if connected
    if (supabaseClient) {
      setSyncStatus('syncing', '🔵 Menyinkronkan ke Cloud...');
      try {
        const { error } = await supabaseClient
          .from('inventory_items')
          .upsert({
            item_id: itemId,
            vendor: vendor,
            item_name: itemName,
            loaded: currentState.loaded,
            loaded_by: currentState.loaded_by,
            loaded_at: currentState.loaded_at,
            packed: currentState.packed,
            packed_by: currentState.packed_by,
            packed_at: currentState.packed_at,
            updated_at: now
          }, { onConflict: 'item_id' });

        if (error) {
          console.warn('Supabase upsert warning:', error.message);
          setSyncStatus('connected', '🟢 Terhubung Cloud (Live)');
        } else {
          setSyncStatus('connected', '🟢 Terhubung Cloud (Live)');
        }
      } catch (err) {
        console.error('Supabase sync error:', err);
        setSyncStatus('connected', '🟢 Terhubung Cloud (Live)');
      }
    }
  }

  // Initialize Supabase Client & Realtime WebSocket
  function initSupabase(url, key) {
    if (!url || !key || typeof window.supabase === 'undefined') {
      setSyncStatus('offline', '🟡 Mode Offline (Penyimpanan Lokal)');
      return;
    }

    try {
      setSyncStatus('syncing', '🔵 Menghubungkan ke Supabase...');
      supabaseClient = window.supabase.createClient(url, key);

      // 1. Initial Fetch all existing items from database
      supabaseClient
        .from('inventory_items')
        .select('*')
        .then(({ data, error }) => {
          if (!error && data && Array.isArray(data)) {
            data.forEach((row) => {
              if (row.item_id) {
                inventoryState[row.item_id] = {
                  loaded: Boolean(row.loaded),
                  loaded_by: row.loaded_by || '',
                  loaded_at: row.loaded_at,
                  packed: Boolean(row.packed),
                  packed_by: row.packed_by || '',
                  packed_at: row.packed_at
                };
                localStorage.setItem(`ip26_inv_${row.item_id}`, JSON.stringify(inventoryState[row.item_id]));
                renderRowUI(row.item_id, inventoryState[row.item_id]);
              }
            });
            updateProgressMeters();
          }
          setSyncStatus('connected', '🟢 Terhubung Cloud (Realtime Multi-HP)');
        })
        .catch(() => {
          setSyncStatus('connected', '🟢 Terhubung Cloud (Realtime Multi-HP)');
        });

      // 2. Subscribe to Realtime PostgreSQL CDC Changes
      if (realtimeChannel) {
        supabaseClient.removeChannel(realtimeChannel);
      }

      realtimeChannel = supabaseClient
        .channel('ip26_realtime_inventory')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'inventory_items' },
          (payload) => {
            const row = payload.new;
            if (row && row.item_id) {
              const updatedState = {
                loaded: Boolean(row.loaded),
                loaded_by: row.loaded_by || '',
                loaded_at: row.loaded_at,
                packed: Boolean(row.packed),
                packed_by: row.packed_by || '',
                packed_at: row.packed_at
              };
              inventoryState[row.item_id] = updatedState;
              localStorage.setItem(`ip26_inv_${row.item_id}`, JSON.stringify(updatedState));
              renderRowUI(row.item_id, updatedState, true);
              updateProgressMeters();
            }
          }
        )
        .subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            setSyncStatus('connected', '🟢 Terhubung Cloud (Realtime Multi-HP)');
          } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
            setSyncStatus('offline', '🟡 Gangguan Koneksi (Mode Offline Lokal)');
          }
        });

    } catch (e) {
      console.error('Failed to init Supabase:', e);
      setSyncStatus('offline', '🟡 Mode Offline (Penyimpanan Lokal)');
    }
  }

  function setSyncStatus(state, message) {
    if (!syncStatusDot || !syncStatusText) return;
    syncStatusDot.className = 'status-pulse-dot';
    if (state === 'connected') syncStatusDot.classList.add('connected');
    if (state === 'syncing') syncStatusDot.classList.add('syncing');
    syncStatusText.textContent = message;
  }

  // Load Saved Supabase Credentials
  const savedUrl = localStorage.getItem('ip26_sb_url') || '';
  const savedKey = localStorage.getItem('ip26_sb_key') || '';
  if (supabaseUrlInput) supabaseUrlInput.value = savedUrl;
  if (supabaseKeyInput) supabaseKeyInput.value = savedKey;

  if (savedUrl && savedKey) {
    initSupabase(savedUrl, savedKey);
  } else {
    setSyncStatus('offline', '🟡 Mode Offline (Klik Setup Cloud untuk Sinkron Multi-HP)');
  }

  // Modal Handlers
  if (btnOpenCloudConfig) {
    btnOpenCloudConfig.addEventListener('click', () => {
      if (cloudConfigModal) cloudConfigModal.style.display = 'flex';
    });
  }

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
      if (cloudConfigModal) cloudConfigModal.style.display = 'none';
    });
  }

  if (btnSaveCloudConfig) {
    btnSaveCloudConfig.addEventListener('click', () => {
      const url = (supabaseUrlInput?.value || '').trim();
      const key = (supabaseKeyInput?.value || '').trim();

      if (url && key) {
        localStorage.setItem('ip26_sb_url', url);
        localStorage.setItem('ip26_sb_key', key);
        initSupabase(url, key);
      }
      if (cloudConfigModal) cloudConfigModal.style.display = 'none';
    });
  }

  if (btnDisconnectCloud) {
    btnDisconnectCloud.addEventListener('click', () => {
      localStorage.removeItem('ip26_sb_url');
      localStorage.removeItem('ip26_sb_key');
      if (supabaseUrlInput) supabaseUrlInput.value = '';
      if (supabaseKeyInput) supabaseKeyInput.value = '';
      if (supabaseClient && realtimeChannel) {
        supabaseClient.removeChannel(realtimeChannel);
      }
      supabaseClient = null;
      setSyncStatus('offline', '🟡 Mode Offline (Penyimpanan Lokal)');
      if (cloudConfigModal) cloudConfigModal.style.display = 'none';
    });
  }

  // =========================================================================
  // 3. LIVE SEARCH & FILTER ENGINE
  // =========================================================================
  const searchInput = document.getElementById('inv-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const countDisplay = document.getElementById('inv-count-display');

  let currentFilter = 'all';
  let searchQuery = '';

  function filterInventory() {
    let visibleCount = 0;
    const query = searchQuery.toLowerCase().trim();

    vendorBlocks.forEach((block) => {
      const vendorName = block.getAttribute('data-vendor') || '';
      const matchesVendor = currentFilter === 'all' || vendorName.toLowerCase() === currentFilter.toLowerCase();
      
      const rows = block.querySelectorAll('tbody tr');
      let blockVisibleRows = 0;

      rows.forEach((row) => {
        const rowText = row.innerText.toLowerCase();
        const matchesSearch = query === '' || rowText.includes(query);

        if (matchesVendor && matchesSearch) {
          row.style.display = '';
          blockVisibleRows++;
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      if (blockVisibleRows > 0) {
        block.style.display = '';
      } else {
        block.style.display = 'none';
      }
    });

    if (countDisplay) countDisplay.textContent = visibleCount;

    if (clearSearchBtn) {
      if (query.length > 0) clearSearchBtn.classList.add('visible');
      else clearSearchBtn.classList.remove('visible');
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterInventory();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchInput.focus();
        filterInventory();
      }
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter') || 'all';
      filterInventory();
    });
  });

  // Initial filter run
  filterInventory();

  // =========================================================================
  // 4. SCROLLSPY NAVIGATION
  // =========================================================================
  const sections = document.querySelectorAll('section[id], header[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileDockItems = document.querySelectorAll('.mobile-bottom-dock .dock-item[data-nav]');

  function onScroll() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileDockItems.forEach((dock) => {
          if (dock.getAttribute('data-nav') === id || (id === 'hero' && dock.getAttribute('data-nav') === 'hero')) {
            dock.classList.add('active');
          } else {
            dock.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
});
