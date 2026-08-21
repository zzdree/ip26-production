/**
 * IP26 Production - Signal Routing & Live Switcher Simulator Engine
 */

import { BROADCAST_CAMERAS, ROUTING_PIPELINES } from './app-data.js';

export class RoutingSimulator {
  constructor() {
    this.pgmChannel = 1;
    this.pvwChannel = 2;
    this.isTransitioning = false;
    this.transitionProgress = 0;
    this.pipEnabled = false;
    this.animationFrameId = null;
    this.vuIntervalId = null;
    
    // Canvas contexts for simulated camera feeds
    this.camCanvases = {};
  }

  init() {
    this.renderPipelines('all');
    this.initSwitcherControls();
    this.initCameraVisualFeeds();
    this.startVuMeters();
    this.initFilterButtons();
  }

  initFilterButtons() {
    const filterButtons = document.querySelectorAll('.route-filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        this.renderPipelines(filter);
      });
    });
  }

  renderPipelines(filter = 'all') {
    const container = document.getElementById('pipeline-list-container');
    if (!container) return;

    const filtered = filter === 'all' 
      ? ROUTING_PIPELINES 
      : ROUTING_PIPELINES.filter(p => p.category === filter);

    container.innerHTML = filtered.map(pipe => `
      <div class="pipeline-item" data-category="${pipe.category}">
        <div class="pipeline-header">
          <div class="pipeline-title-group">
            <span class="pill-badge ${this.getBadgeClass(pipe.category)}">${pipe.category.toUpperCase()}</span>
            <span class="pipeline-title">${pipe.title}</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <span class="pipeline-tag">${pipe.tag}</span>
            <span style="color:var(--accent-green); font-size:0.85rem; font-weight:700;">${pipe.status}</span>
          </div>
        </div>
        <div class="pipeline-chain-visual">
          ${pipe.chain.map((node, idx) => `
            <span class="chain-node">
              <span style="color:var(--accent-cyan); font-weight:bold;">${idx + 1}.</span> ${node}
            </span>
            ${idx < pipe.chain.length - 1 ? '<span class="chain-arrow">➔</span>' : ''}
          `).join('')}
        </div>
        <div class="pipeline-details">
          <strong>Rincian Teknis:</strong> ${pipe.details}
        </div>
      </div>
    `).join('');
  }

  getBadgeClass(category) {
    switch (category) {
      case 'video': return 'cyan';
      case 'audio': return 'violet';
      case 'media': return 'amber';
      case 'power': return 'green';
      default: return 'cyan';
    }
  }

  initSwitcherControls() {
    // PGM Buttons
    const pgmButtons = document.querySelectorAll('[data-pgm-btn]');
    pgmButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const ch = parseInt(btn.dataset.pgmBtn);
        this.setPGM(ch);
      });
    });

    // PVW Buttons
    const pvwButtons = document.querySelectorAll('[data-pvw-btn]');
    pvwButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const ch = parseInt(btn.dataset.pvwBtn);
        this.setPVW(ch);
      });
    });

    // CUT Button
    const cutBtn = document.getElementById('btn-switcher-cut');
    if (cutBtn) {
      cutBtn.addEventListener('click', () => this.performCut());
    }

    // AUTO Button
    const autoBtn = document.getElementById('btn-switcher-auto');
    if (autoBtn) {
      autoBtn.addEventListener('click', () => this.performAuto());
    }

    // PiP Button
    const pipBtn = document.getElementById('btn-switcher-pip');
    if (pipBtn) {
      pipBtn.addEventListener('click', () => {
        this.pipEnabled = !this.pipEnabled;
        pipBtn.classList.toggle('active', this.pipEnabled);
        this.updateSwitcherUI();
      });
    }

    this.updateSwitcherUI();
  }

  setPGM(ch) {
    if (this.isTransitioning) return;
    this.pgmChannel = ch;
    this.updateSwitcherUI();
  }

  setPVW(ch) {
    if (this.isTransitioning) return;
    this.pvwChannel = ch;
    this.updateSwitcherUI();
  }

  performCut() {
    if (this.isTransitioning) return;
    const temp = this.pgmChannel;
    this.pgmChannel = this.pvwChannel;
    this.pvwChannel = temp;
    this.updateSwitcherUI();
  }

  performAuto() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    let progress = 0;
    const autoBtn = document.getElementById('btn-switcher-auto');
    if (autoBtn) autoBtn.style.opacity = '0.5';

    const transitionStep = () => {
      progress += 0.05;
      this.transitionProgress = progress;
      
      if (progress >= 1) {
        this.isTransitioning = false;
        this.transitionProgress = 0;
        const temp = this.pgmChannel;
        this.pgmChannel = this.pvwChannel;
        this.pvwChannel = temp;
        if (autoBtn) autoBtn.style.opacity = '1';
        this.updateSwitcherUI();
      } else {
        requestAnimationFrame(transitionStep);
      }
    };

    requestAnimationFrame(transitionStep);
  }

  updateSwitcherUI() {
    // Update button active styles
    document.querySelectorAll('[data-pgm-btn]').forEach(btn => {
      const ch = parseInt(btn.dataset.pgmBtn);
      btn.classList.toggle('pgm-selected', ch === this.pgmChannel);
    });

    document.querySelectorAll('[data-pvw-btn]').forEach(btn => {
      const ch = parseInt(btn.dataset.pvwBtn);
      btn.classList.toggle('pvw-selected', ch === this.pvwChannel);
    });

    // Update Multiview borders & tally indicators
    for (let i = 1; i <= 4; i++) {
      const slot = document.getElementById(`mv-slot-${i}`);
      const tally = document.getElementById(`mv-tally-${i}`);
      if (slot && tally) {
        slot.classList.remove('active-pgm', 'active-pvw');
        tally.classList.remove('pgm', 'pvw');

        if (i === this.pgmChannel) {
          slot.classList.add('active-pgm');
          tally.classList.add('pgm');
        } else if (i === this.pvwChannel) {
          slot.classList.add('active-pvw');
          tally.classList.add('pvw');
        }
      }
    }

    // Update Monitor text badges
    const pgmLabel = document.getElementById('pgm-channel-label');
    if (pgmLabel) {
      const cam = BROADCAST_CAMERAS[this.pgmChannel - 1];
      pgmLabel.textContent = `PGM: CAM ${this.pgmChannel} (${cam ? cam.operator : ''})`;
    }

    const pvwLabel = document.getElementById('pvw-channel-label');
    if (pvwLabel) {
      const cam = BROADCAST_CAMERAS[this.pvwChannel - 1];
      pvwLabel.textContent = `PVW: CAM ${this.pvwChannel} (${cam ? cam.operator : ''})`;
    }
  }

  initCameraVisualFeeds() {
    // We animate synthetic live camera feeds onto canvases
    const canvases = [
      document.getElementById('canvas-cam-1'),
      document.getElementById('canvas-cam-2'),
      document.getElementById('canvas-cam-3'),
      document.getElementById('canvas-cam-4'),
      document.getElementById('canvas-pvw-master'),
      document.getElementById('canvas-pgm-master')
    ];

    let t = 0;
    const drawFrames = () => {
      t += 0.03;

      // Draw individual camera synthetic visuals
      for (let i = 1; i <= 4; i++) {
        const canvas = document.getElementById(`canvas-cam-${i}`);
        if (canvas) {
          this.renderSyntheticFeed(canvas, i, t);
        }
      }

      // Draw PVW Master
      const pvwCanvas = document.getElementById('canvas-pvw-master');
      if (pvwCanvas) {
        this.renderSyntheticFeed(pvwCanvas, this.pvwChannel, t);
      }

      // Draw PGM Master (handles cut / auto crossfade)
      const pgmCanvas = document.getElementById('canvas-pgm-master');
      if (pgmCanvas) {
        this.renderPgmFeed(pgmCanvas, t);
      }

      this.animationFrameId = requestAnimationFrame(drawFrames);
    };

    drawFrames();
  }

  renderSyntheticFeed(canvas, channel, t) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = '#0a0f1d';
    ctx.fillRect(0, 0, w, h);

    // Background grid & subtle stage lights
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Dynamic stage light sweep
    const gradient = ctx.createRadialGradient(
      w / 2 + Math.sin(t + channel) * (w / 4),
      h / 2 + Math.cos(t * 0.7 + channel) * 20,
      10,
      w / 2, h / 2, w / 1.5
    );
    
    if (channel === 1) {
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
      gradient.addColorStop(1, 'transparent');
    } else if (channel === 2) {
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
      gradient.addColorStop(1, 'transparent');
    } else if (channel === 3) {
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.35)');
      gradient.addColorStop(1, 'transparent');
    } else {
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
      gradient.addColorStop(1, 'transparent');
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    // Camera simulated objects / stage representation
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    
    const camInfo = BROADCAST_CAMERAS[channel - 1];
    ctx.fillText(`CAM ${channel} • ${camInfo.model}`, w / 2, h / 2 - 10);
    
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText(`${camInfo.position} (${camInfo.operator})`, w / 2, h / 2 + 10);

    // Simulated frame corners
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    const len = 12;
    // Top-left
    ctx.beginPath(); ctx.moveTo(10, 10 + len); ctx.lineTo(10, 10); ctx.lineTo(10 + len, 10); ctx.stroke();
    // Top-right
    ctx.beginPath(); ctx.moveTo(w - 10 - len, 10); ctx.lineTo(w - 10, 10); ctx.lineTo(w - 10, 10 + len); ctx.stroke();
    // Bottom-left
    ctx.beginPath(); ctx.moveTo(10, h - 10 - len); ctx.lineTo(10, h - 10); ctx.lineTo(10 + len, h - 10); ctx.stroke();
    // Bottom-right
    ctx.beginPath(); ctx.moveTo(w - 10 - len, h - 10); ctx.lineTo(w - 10, h - 10); ctx.lineTo(w - 10, h - 10 - len); ctx.stroke();
  }

  renderPgmFeed(canvas, t) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;

    if (!this.isTransitioning) {
      this.renderSyntheticFeed(canvas, this.pgmChannel, t);
    } else {
      // Crossfade simulation
      this.renderSyntheticFeed(canvas, this.pgmChannel, t);
      ctx.save();
      ctx.globalAlpha = this.transitionProgress;
      // We overlay PVW feed
      this.renderSyntheticFeed(canvas, this.pvwChannel, t);
      ctx.restore();
    }

    // PiP Overlay if active
    if (this.pipEnabled) {
      const pipW = w * 0.32;
      const pipH = h * 0.32;
      const pipX = w - pipW - 12;
      const pipY = 12;

      ctx.save();
      ctx.fillStyle = '#000000';
      ctx.strokeStyle = 'var(--accent-amber)';
      ctx.lineWidth = 2;
      ctx.fillRect(pipX, pipY, pipW, pipH);
      ctx.strokeRect(pipX, pipY, pipW, pipH);

      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`PiP: CAM ${this.pvwChannel}`, pipX + 6, pipY + 14);
      ctx.restore();
    }
  }

  startVuMeters() {
    this.vuIntervalId = setInterval(() => {
      const fader1 = document.getElementById('vu-ql5-l');
      const fader2 = document.getElementById('vu-ql5-r');
      const fader3 = document.getElementById('vu-obs-l');
      const fader4 = document.getElementById('vu-obs-r');

      if (fader1 && fader2) {
        const baseLevel = 60 + Math.random() * 25;
        fader1.style.height = `${Math.min(95, baseLevel + Math.sin(Date.now() / 100) * 8)}%`;
        fader2.style.height = `${Math.min(95, baseLevel + Math.cos(Date.now() / 120) * 8)}%`;
      }

      if (fader3 && fader4) {
        const obsLevel = 65 + Math.random() * 20;
        fader3.style.height = `${Math.min(92, obsLevel + Math.sin(Date.now() / 90) * 6)}%`;
        fader4.style.height = `${Math.min(92, obsLevel + Math.cos(Date.now() / 110) * 6)}%`;
      }
    }, 100);
  }

  destroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    if (this.vuIntervalId) clearInterval(this.vuIntervalId);
  }
}
