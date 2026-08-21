/**
 * IP26 Production - Master Inventory & Equipment Loan Log Manager
 * Storage: LocalStorage persistence with JSON Export/Import
 */

import { MASTER_INVENTORY } from './app-data.js';

export class InventoryManager {
  constructor() {
    this.storageKey = 'ip26_inventory_checked_state_v1';
    this.checkedItems = this.loadState();
    this.currentSearch = '';
    this.currentProvider = 'all';
    this.currentCategory = 'all';
    this.currentStatus = 'all';
  }

  init() {
    this.renderToolbarProviders();
    this.renderToolbarCategories();
    this.attachEventListeners();
    this.renderTable();
    this.updateStats();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to load inventory state from localStorage', e);
      return {};
    }
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.checkedItems));
    } catch (e) {
      console.error('Failed to save inventory state to localStorage', e);
    }
  }

  getProviders() {
    const set = new Set();
    MASTER_INVENTORY.forEach(item => set.add(item.provider));
    return Array.from(set).sort();
  }

  getCategories() {
    const set = new Set();
    MASTER_INVENTORY.forEach(item => set.add(item.category));
    return Array.from(set).sort();
  }

  renderToolbarProviders() {
    const container = document.getElementById('provider-filter-chips');
    if (!container) return;

    const providers = ['all', ...this.getProviders()];
    container.innerHTML = providers.map(p => `
      <button class="chip ${p === this.currentProvider ? 'active' : ''}" data-provider="${p}">
        ${p === 'all' ? 'Semua Pemilik / Provider' : p}
      </button>
    `).join('');

    container.querySelectorAll('[data-provider]').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        this.currentProvider = btn.dataset.provider;
        this.renderTable();
      });
    });
  }

  renderToolbarCategories() {
    const select = document.getElementById('category-filter-select');
    if (!select) return;

    const categories = ['all', ...this.getCategories()];
    select.innerHTML = categories.map(c => `
      <option value="${c}">${c === 'all' ? 'Semua Kategori Alat' : c.toUpperCase()}</option>
    `).join('');

    select.addEventListener('change', (e) => {
      this.currentCategory = e.target.value;
      this.renderTable();
    });
  }

  attachEventListeners() {
    // Search input
    const searchInput = document.getElementById('inventory-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentSearch = e.target.value.toLowerCase().trim();
        this.renderTable();
      });
    }

    // Status filter
    const statusSelect = document.getElementById('status-filter-select');
    if (statusSelect) {
      statusSelect.addEventListener('change', (e) => {
        this.currentStatus = e.target.value;
        this.renderTable();
      });
    }

    // Check all / Uncheck all
    const checkAllBtn = document.getElementById('btn-check-all-inv');
    if (checkAllBtn) {
      checkAllBtn.addEventListener('click', () => {
        MASTER_INVENTORY.forEach(item => {
          this.checkedItems[item.id] = true;
        });
        this.saveState();
        this.renderTable();
        this.updateStats();
      });
    }

    const resetCheckBtn = document.getElementById('btn-reset-check-inv');
    if (resetCheckBtn) {
      resetCheckBtn.addEventListener('click', () => {
        if (confirm('Reset seluruh checklist verifikasi inventaris?')) {
          this.checkedItems = {};
          this.saveState();
          this.renderTable();
          this.updateStats();
        }
      });
    }

    // Export JSON
    const exportBtn = document.getElementById('btn-export-inv-json');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportJson());
    }

    // Print Manifest
    const printBtn = document.getElementById('btn-print-inv');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }
  }

  getFilteredItems() {
    return MASTER_INVENTORY.filter(item => {
      // Provider filter
      if (this.currentProvider !== 'all' && item.provider !== this.currentProvider) {
        return false;
      }
      // Category filter
      if (this.currentCategory !== 'all' && item.category !== this.currentCategory) {
        return false;
      }
      // Status filter
      if (this.currentStatus !== 'all' && item.status !== this.currentStatus) {
        return false;
      }
      // Search term
      if (this.currentSearch) {
        const str = `${item.name} ${item.provider} ${item.category} ${item.note}`.toLowerCase();
        if (!str.includes(this.currentSearch)) return false;
      }
      return true;
    });
  }

  renderTable() {
    const tbody = document.getElementById('inventory-table-body');
    if (!tbody) return;

    const items = this.getFilteredItems();

    if (items.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding:3rem; color:var(--text-muted);">
            Tidak ada perlengkapan yang cocok dengan filter pencarian saat ini.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = items.map((item, index) => {
      const isChecked = !!this.checkedItems[item.id];
      return `
        <tr class="${isChecked ? 'row-verified' : ''}">
          <td style="text-align:center; width:45px;">
            <input type="checkbox" 
                   class="checkbox-custom inv-item-checkbox" 
                   data-id="${item.id}" 
                   ${isChecked ? 'checked' : ''} />
          </td>
          <td style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-muted); width:40px;">
            ${index + 1}
          </td>
          <td>
            <div style="font-weight:600; color:var(--text-primary); font-size:0.92rem;">${item.name}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${item.note || '-'}</div>
          </td>
          <td style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan);">
            ${item.qty}
          </td>
          <td>
            <span class="pill-badge amber">${item.provider}</span>
          </td>
          <td>
            <span class="pill-badge ${this.getCategoryBadgeClass(item.category)}">${item.category.toUpperCase()}</span>
          </td>
          <td>
            <span class="pill-badge ${this.getStatusBadgeClass(item.status)}">${this.getStatusIcon(item.status)} ${item.status}</span>
          </td>
        </tr>
      `;
    }).join('');

    // Attach checkbox toggle events
    tbody.querySelectorAll('.inv-item-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        this.checkedItems[id] = e.target.checked;
        this.saveState();
        this.updateStats();
        // Update row styling
        const tr = e.target.closest('tr');
        if (tr) tr.classList.toggle('row-verified', e.target.checked);
      });
    });
  }

  getCategoryBadgeClass(cat) {
    switch (cat) {
      case 'camera': return 'cyan';
      case 'lens': return 'violet';
      case 'audio': return 'violet';
      case 'switcher': return 'red';
      case 'cable': return 'green';
      case 'power': return 'amber';
      case 'storage': return 'cyan';
      default: return 'amber';
    }
  }

  getStatusBadgeClass(status) {
    switch (status) {
      case 'Verified': return 'green';
      case 'Checked': return 'cyan';
      case 'Warning': return 'amber';
      default: return 'green';
    }
  }

  getStatusIcon(status) {
    switch (status) {
      case 'Verified': return '✅';
      case 'Checked': return '☑️';
      case 'Warning': return '⚠️';
      default: return '✅';
    }
  }

  updateStats() {
    const total = MASTER_INVENTORY.length;
    let checkedCount = 0;
    
    MASTER_INVENTORY.forEach(item => {
      if (this.checkedItems[item.id]) checkedCount++;
    });

    const percent = Math.round((checkedCount / total) * 100);

    const totalEl = document.getElementById('inv-stat-total');
    const checkedEl = document.getElementById('inv-stat-checked');
    const remainingEl = document.getElementById('inv-stat-remaining');
    const progressEl = document.getElementById('inv-stat-progress-bar');
    const percentEl = document.getElementById('inv-stat-percent');

    if (totalEl) totalEl.textContent = total;
    if (checkedEl) checkedEl.textContent = checkedCount;
    if (remainingEl) remainingEl.textContent = total - checkedCount;
    if (progressEl) progressEl.style.width = `${percent}%`;
    if (percentEl) percentEl.textContent = `${percent}% Ready`;
  }

  exportJson() {
    const exportData = {
      event: "Ibadah Perdana UKK UNNES 2026",
      exportTimestamp: new Date().toISOString(),
      verifiedCount: Object.keys(this.checkedItems).filter(k => this.checkedItems[k]).length,
      totalCount: MASTER_INVENTORY.length,
      items: MASTER_INVENTORY.map(item => ({
        ...item,
        isCheckedOnSite: !!this.checkedItems[item.id]
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IP26_Master_Inventory_Log_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
