/**
 * IP26 Production - Calibration Tools (Test Pattern, Web Audio 1kHz Tone & Field Notes)
 */

export class ProductionTools {
  constructor() {
    this.audioCtx = null;
    this.oscillator = null;
    this.gainNode = null;
    this.isAudioPlaying = false;
    this.currentPattern = 'smpte';
    this.notesKey = 'ip26_crew_field_notes_v1';
  }

  init() {
    this.initPatternGenerator();
    this.initAudioToneGenerator();
    this.initFieldNotes();
  }

  initPatternGenerator() {
    const canvas = document.getElementById('test-pattern-canvas');
    if (!canvas) return;

    this.drawPattern(canvas, this.currentPattern);

    // Pattern select buttons
    document.querySelectorAll('[data-pattern]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-pattern]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentPattern = btn.dataset.pattern;
        this.drawPattern(canvas, this.currentPattern);
      });
    });

    // Fullscreen test pattern
    const fsBtn = document.getElementById('btn-pattern-fullscreen');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        if (canvas.requestFullscreen) {
          canvas.requestFullscreen();
        }
      });
    }
  }

  drawPattern(canvas, pattern) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    if (pattern === 'smpte') {
      // Standard SMPTE Color Bars
      const colors = ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0'];
      const barW = w / colors.length;
      const topH = h * 0.67;

      colors.forEach((col, i) => {
        ctx.fillStyle = col;
        ctx.fillRect(i * barW, 0, barW, topH);
      });

      // Bottom Cast Bar
      const btmColors = ['#0000c0', '#131313', '#c000c0', '#131313', '#00c0c0', '#131313', '#c0c0c0'];
      btmColors.forEach((col, i) => {
        ctx.fillStyle = col;
        ctx.fillRect(i * barW, topH, barW, h - topH);
      });

      // Pluge pulses & labels
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SMPTE COLOR BARS — 1080p60 TEST PATTERN', w / 2, h - 15);
    } else if (pattern === 'grid') {
      // Grid & Safe Areas
      ctx.fillStyle = '#05070d';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= w; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y <= h; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // 90% Safe Action Area (Green)
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.05, h * 0.05, w * 0.9, h * 0.9);

      // 80% Safe Title Area (Amber)
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.1, h * 0.1, w * 0.8, h * 0.8);

      // Center Crosshair (Cyan)
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(w / 2 - 30, h / 2); ctx.lineTo(w / 2 + 30, h / 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(w / 2, h / 2 - 30); ctx.lineTo(w / 2, h / 2 + 30); ctx.stroke();
      ctx.beginPath(); ctx.arc(w / 2, h / 2, 20, 0, Math.PI * 2); ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('STAGE LED ALIGNMENT & SAFE AREA GRID (16:9)', w / 2, 25);
    } else if (pattern === 'white') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
    } else if (pattern === 'black') {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);
    }
  }

  initAudioToneGenerator() {
    const playBtn = document.getElementById('btn-play-tone');
    const freqSelect = document.getElementById('tone-freq-select');
    const volSlider = document.getElementById('tone-vol-slider');

    if (!playBtn) return;

    playBtn.addEventListener('click', () => {
      if (this.isAudioPlaying) {
        this.stopAudio();
        playBtn.textContent = '🔊 Nyalakan Test Tone';
        playBtn.classList.remove('btn-tally-red');
        playBtn.classList.add('btn-primary');
      } else {
        const freq = freqSelect ? parseFloat(freqSelect.value) : 1000;
        const vol = volSlider ? parseFloat(volSlider.value) : 0.2;
        this.playTone(freq, vol);
        playBtn.textContent = '⏹️ Hentikan Test Tone';
        playBtn.classList.remove('btn-primary');
        playBtn.classList.add('btn-tally-red');
      }
    });

    if (volSlider) {
      volSlider.addEventListener('input', (e) => {
        if (this.gainNode) {
          this.gainNode.gain.setValueAtTime(parseFloat(e.target.value), this.audioCtx.currentTime);
        }
      });
    }

    if (freqSelect) {
      freqSelect.addEventListener('change', (e) => {
        if (this.oscillator && this.audioCtx) {
          this.oscillator.frequency.setValueAtTime(parseFloat(e.target.value), this.audioCtx.currentTime);
        }
      });
    }
  }

  playTone(freq, volume) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.oscillator = this.audioCtx.createOscillator();
      this.gainNode = this.audioCtx.createGain();

      this.oscillator.type = 'sine';
      this.oscillator.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      this.gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);

      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      this.oscillator.start();
      this.isAudioPlaying = true;
    } catch (e) {
      console.error('Audio Tone error', e);
    }
  }

  stopAudio() {
    if (this.oscillator) {
      try {
        this.oscillator.stop();
        this.oscillator.disconnect();
      } catch (e) {}
      this.oscillator = null;
    }
    this.isAudioPlaying = false;
  }

  initFieldNotes() {
    const textarea = document.getElementById('field-notes-textarea');
    if (!textarea) return;

    // Load saved notes
    const saved = localStorage.getItem(this.notesKey);
    if (saved) textarea.value = saved;

    textarea.addEventListener('input', (e) => {
      localStorage.setItem(this.notesKey, e.target.value);
    });

    const clearBtn = document.getElementById('btn-clear-notes');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Kosongkan catatan lapangan?')) {
          textarea.value = '';
          localStorage.removeItem(this.notesKey);
        }
      });
    }
  }
}
