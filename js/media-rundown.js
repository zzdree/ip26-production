/**
 * IP26 Production - Media Asset Checklist, Event Rundown & Crew Intercom Hub
 */

import { MEDIA_ASSET_CHECKLIST, CREW_ROLES, BROADCAST_CAMERAS } from './app-data.js';

export class MediaRundownHub {
  constructor() {
    this.storageKey = 'ip26_media_checklist_state_v1';
    this.checkedMedia = this.loadMediaState();
    this.timerInterval = null;
    this.stopwatchSeconds = 0;
    this.isStopwatchRunning = false;
    this.stopwatchInterval = null;
  }

  init() {
    this.renderMediaChecklist();
    this.renderCrewDirectory('all');
    this.initCrewFilterButtons();
    this.initTimerAndStopwatch();
  }

  loadMediaState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  saveMediaState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.checkedMedia));
    } catch (e) {
      console.error('Failed to save media state', e);
    }
  }

  renderMediaChecklist() {
    const container = document.getElementById('media-rundown-container');
    if (!container) return;

    container.innerHTML = MEDIA_ASSET_CHECKLIST.map((phaseGroup, phaseIdx) => `
      <div class="phase-section">
        <div class="phase-header">
          <span class="pill-badge cyan">FASE ${phaseIdx + 1}</span>
          <h3 class="phase-title">${phaseGroup.phase}</h3>
        </div>
        <div class="media-cards-grid">
          ${phaseGroup.items.map(item => {
            const isDone = !!this.checkedMedia[item.id];
            return `
              <div class="media-cue-card ${isDone ? 'card-verified' : ''}">
                <div>
                  <div class="cue-top">
                    <span class="pill-badge violet">${item.type}</span>
                    <input type="checkbox" 
                           class="checkbox-custom media-item-checkbox" 
                           data-id="${item.id}" 
                           ${isDone ? 'checked' : ''} />
                  </div>
                  <div class="cue-title">${item.title}</div>
                  <div class="cue-dest">🎯 Destinasi: ${item.dest}</div>
                  <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.6rem;">
                    👤 PIC: <strong style="color:var(--text-primary);">${item.pic}</strong>
                  </div>
                </div>
                <div class="cue-notes">
                  💡 ${item.notes}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.media-item-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        this.checkedMedia[id] = e.target.checked;
        this.saveMediaState();
        const card = e.target.closest('.media-cue-card');
        if (card) card.classList.toggle('card-verified', e.target.checked);
      });
    });
  }

  initCrewFilterButtons() {
    const filterButtons = document.querySelectorAll('.crew-filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const division = btn.dataset.division;
        this.renderCrewDirectory(division);
      });
    });
  }

  renderCrewDirectory(division = 'all') {
    const container = document.getElementById('crew-directory-grid');
    if (!container) return;

    const filtered = division === 'all' 
      ? CREW_ROLES 
      : CREW_ROLES.filter(c => c.division === division);

    container.innerHTML = filtered.map(crew => `
      <div class="crew-card" data-division="${crew.division}">
        <div>
          <div class="crew-card-top">
            <span class="crew-name">${crew.name}</span>
            <span class="pill-badge ${this.getDivisionBadgeClass(crew.division)}">${crew.badge}</span>
          </div>
          <div class="crew-role">${crew.role}</div>
          <div class="crew-device">⚡ ${crew.device}</div>
          <div class="crew-task">${crew.taskDescription}</div>
        </div>
        <div class="crew-card-footer">
          <span>📻 ${crew.contact}</span>
          <span style="color:var(--accent-green);">ONLINE / READY</span>
        </div>
      </div>
    `).join('');
  }

  getDivisionBadgeClass(div) {
    switch (div) {
      case 'broadcast': return 'cyan';
      case 'docs': return 'violet';
      case 'engine': return 'red';
      case 'media': return 'amber';
      case 'audio': return 'green';
      default: return 'cyan';
    }
  }

  initTimerAndStopwatch() {
    // Event live countdown clock
    const clockEl = document.getElementById('live-event-clock');
    if (clockEl) {
      setInterval(() => {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString('id-ID', { hour12: false });
      }, 1000);
    }

    // Stage Timekeeper Stopwatch
    const swDisplay = document.getElementById('stopwatch-display');
    const startBtn = document.getElementById('btn-sw-start');
    const pauseBtn = document.getElementById('btn-sw-pause');
    const resetBtn = document.getElementById('btn-sw-reset');

    const updateDisplay = () => {
      if (!swDisplay) return;
      const m = Math.floor(this.stopwatchSeconds / 60).toString().padStart(2, '0');
      const s = (this.stopwatchSeconds % 60).toString().padStart(2, '0');
      swDisplay.textContent = `${m}:${s}`;
    };

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        if (!this.isStopwatchRunning) {
          this.isStopwatchRunning = true;
          this.stopwatchInterval = setInterval(() => {
            this.stopwatchSeconds++;
            updateDisplay();
          }, 1000);
        }
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        this.isStopwatchRunning = false;
        clearInterval(this.stopwatchInterval);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.isStopwatchRunning = false;
        clearInterval(this.stopwatchInterval);
        this.stopwatchSeconds = 0;
        updateDisplay();
      });
    }
  }
}
