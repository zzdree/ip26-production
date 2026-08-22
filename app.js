/**
 * IP26 LIVE BROADCAST & MULTIMEDIA PRODUCTION PORTAL
 * Client Application Logic (Theme Engine, Inventory Search/Filter, ScrollSpy)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. THEME TOGGLE ENGINE (Dark Slate <-> Warm White)
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeBtn = document.getElementById('mobile-theme-btn');
  const root = document.documentElement;

  // Retrieve stored theme or default to dark
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
  // 2. LIVE INVENTORY SEARCH & VENDOR FILTERING
  // =========================================================================
  const searchInput = document.getElementById('inv-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const vendorBlocks = document.querySelectorAll('.vendor-block');
  const countDisplay = document.getElementById('inv-count-display');

  let currentFilter = 'all';
  let searchQuery = '';

  function filterInventory() {
    let visibleCount = 0;
    const query = searchQuery.toLowerCase().trim();

    vendorBlocks.forEach((block) => {
      const vendorName = block.getAttribute('data-vendor');
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

      // Show/Hide vendor block card if all rows inside are hidden
      if (blockVisibleRows > 0) {
        block.style.display = '';
      } else {
        block.style.display = 'none';
      }
    });

    if (countDisplay) {
      countDisplay.textContent = visibleCount;
    }

    if (clearSearchBtn) {
      if (query.length > 0) {
        clearSearchBtn.classList.add('visible');
      } else {
        clearSearchBtn.classList.remove('visible');
      }
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

  // Initial tally
  filterInventory();

  // =========================================================================
  // 3. SCROLLSPY FOR NAVIGATION
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
        // Desktop nav update
        desktopLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Mobile dock update
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
