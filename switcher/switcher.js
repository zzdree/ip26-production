/**
 * Cinetreak Cinelive V1 Switcher Simulator Engine
 * IP26 Live Broadcast & Multimedia Production Portal
 */

(function () {
  'use strict';

  // --- STATE ---
  const state = {
    pgm: 1,
    pvw: 2,
    aux: 'MV',          // 'MV' (Multiview Monitor), '1', '2', '3', '4', 'PVW', 'PGM'
    prevPgm: 1,
    transEffect: 'MIX', // 'MIX', 'WIPE_H', 'WIPE_V', 'DIP'
    transRate: 1.0,     // 0.5, 1.0, 1.5, 2.0
    isTransitioning: false,
    transStartTime: 0,
    transProgress: 0,
    tbarPos: 0,         // 0 to 1
    tbarMoving: false,
    ftb: false,
    ftbProgress: 0,     // 0 = normal, 1 = black
    pip: false,
    pipSrc: 2,
    pipPos: 'TR',       // 'TL', 'TR', 'BL', 'BR'
    pipSize: 0.28,
    soundEnabled: true,
    audioLevelL: 0.65,
    audioLevelR: 0.62,
    audioMuted: false,
    afvMode: true,
    liveStreaming: true,
    recording: true,
    menuIndex: 0,
    timecode: { h: 1, m: 24, s: 50, f: 0 },
    camConfigs: {
      1: { name: 'CAM 1', desc: 'Sony A6000 Wired (Stage Center Wide)', resolution: '1080p60' },
      2: { name: 'CAM 2', desc: 'Sony ZV-E10 Wireless Pyro S (Worship Leader)', resolution: '1080p60' },
      3: { name: 'CAM 3', desc: 'Sony A6000 Wireless Pyro H (Congregation)', resolution: '1080p60' },
      4: { name: 'CAM 4', desc: 'Sony A6000 Wired (Balcony FOH Master)', resolution: '1080p60' }
    }
  };

  // --- WEB AUDIO API SYNTHESIZER FOR TACTILE BUTTON SOUNDS ---
  let audioCtx = null;
  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playClickSound(type = 'click') {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;
      if (type === 'cut') {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'auto') {
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.exponentialRampToValueAtTime(330, now + 0.06);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'ftb') {
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else {
        // Standard tactile click
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.03);
        osc.start(now);
        osc.stop(now + 0.03);
      }
    } catch (e) {
      // Audio context error, ignore safely
    }
  }

  // --- CANVAS REFS ---
  const canvases = {
    1: document.getElementById('canvas-cam1'),
    2: document.getElementById('canvas-cam2'),
    3: document.getElementById('canvas-cam3'),
    4: document.getElementById('canvas-cam4'),
    pvw: document.getElementById('canvas-pvw'),
    pgm: document.getElementById('canvas-pgm'),
    aux: document.getElementById('canvas-aux')
  };

  const contexts = {};
  for (const key in canvases) {
    if (canvases[key]) {
      contexts[key] = canvases[key].getContext('2d');
    }
  }

  // Temporary offscreen buffers for smooth compositing
  const offscreen = {
    srcA: document.createElement('canvas'),
    srcB: document.createElement('canvas')
  };
  offscreen.srcA.width = 640;
  offscreen.srcA.height = 360;
  offscreen.srcB.width = 640;
  offscreen.srcB.height = 360;
  const offCtxA = offscreen.srcA.getContext('2d');
  const offCtxB = offscreen.srcB.getContext('2d');

  // --- PROCEDURAL REAL-TIME VIDEO ENGINES ---
  function drawStageBackground(ctx, w, h, t, energy) {
    // LED Wall Glow
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#050711');
    grad.addColorStop(0.6, '#0f172a');
    grad.addColorStop(1, '#020617');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Large Center LED Wall Displaying Dynamic Worship Visuals
    const ledW = w * 0.7;
    const ledH = h * 0.48;
    const ledX = (w - ledW) / 2;
    const ledY = h * 0.12;

    const ledGrad = ctx.createLinearGradient(
      ledX + Math.sin(t * 0.5) * 50,
      ledY,
      ledX + ledW,
      ledY + ledH
    );
    ledGrad.addColorStop(0, '#1e1b4b');
    ledGrad.addColorStop(0.5, '#4338ca');
    ledGrad.addColorStop(1, '#065f46');
    ctx.fillStyle = ledGrad;
    ctx.fillRect(ledX, ledY, ledW, ledH);

    // LED Content: Particles & Subtle Waves
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    for (let i = 0; i < 6; i++) {
      const px = ledX + ((i * 50 + t * 40) % ledW);
      const py = ledY + (Math.sin(t + i) * 0.5 + 0.5) * ledH;
      ctx.beginPath();
      ctx.arc(px, py, 2 + Math.sin(t * 2 + i) * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Moving stage lights (beamer spots)
    const beamCount = 4;
    for (let b = 0; b < beamCount; b++) {
      const originX = w * (0.2 + b * 0.2);
      const sweep = Math.sin(t * 1.2 + b * 1.3) * (w * 0.25);
      const targetX = originX + sweep;
      
      const beamGrad = ctx.createRadialGradient(originX, 0, 10, targetX, h * 0.75, 90);
      const col = b % 2 === 0 ? 'rgba(0, 210, 255, ' : 'rgba(245, 158, 11, ';
      beamGrad.addColorStop(0, col + '0.35)');
      beamGrad.addColorStop(1, col + '0)');

      ctx.fillStyle = beamGrad;
      ctx.beginPath();
      ctx.moveTo(originX - 15, 0);
      ctx.lineTo(originX + 15, 0);
      ctx.lineTo(targetX + 60, h * 0.85);
      ctx.lineTo(targetX - 60, h * 0.85);
      ctx.closePath();
      ctx.fill();
    }
  }

  // CAM 1: Wide Stage Master View
  function drawCam1(ctx, w, h, t) {
    drawStageBackground(ctx, w, h, t, 1.0);

    // Stage platform
    ctx.fillStyle = '#090d16';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.65);
    ctx.lineTo(w, h * 0.65);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Stage Front Lip Edge Glow
    ctx.strokeStyle = 'rgba(0, 210, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.65);
    ctx.lineTo(w, h * 0.65);
    ctx.stroke();

    // Silhouettes of Band & Singers
    // Worship Leader Center
    const wlX = w * 0.5;
    const wlY = h * 0.65;
    ctx.fillStyle = '#04060a';
    ctx.beginPath();
    ctx.arc(wlX, wlY - 32, 10, 0, Math.PI * 2); // Head
    ctx.fill();
    ctx.fillRect(wlX - 9, wlY - 22, 18, 26);    // Body
    // Mic stand
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(wlX + 10, wlY - 26);
    ctx.lineTo(wlX + 8, wlY + 2);
    ctx.stroke();

    // Backing Singers
    for (let s of [-60, -35, 35, 60]) {
      const sx = w * 0.5 + s;
      const sy = h * 0.66;
      ctx.beginPath();
      ctx.arc(sx, sy - 28, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(sx - 7, sy - 20, 14, 24);
    }

    // Drummer cage / Keyboardist
    ctx.fillRect(w * 0.15, h * 0.60, 36, 26);
    ctx.fillRect(w * 0.80, h * 0.61, 30, 24);
  }

  // CAM 2: Worship Leader Close-Up
  function drawCam2(ctx, w, h, t) {
    // Subtle handheld camera float
    const floatX = Math.sin(t * 0.8) * 4;
    const floatY = Math.cos(t * 0.9) * 3;

    // Atmospheric warm concert backlight
    const bgGrad = ctx.createRadialGradient(
      w * 0.5 + floatX, h * 0.35 + floatY, 20,
      w * 0.5, h * 0.5, w * 0.6
    );
    bgGrad.addColorStop(0, '#4338ca');
    bgGrad.addColorStop(0.4, '#1e1b4b');
    bgGrad.addColorStop(1, '#090b14');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Warm Golden Rim Light from stage backlights
    const rimX = w * 0.65 + Math.sin(t * 1.5) * 30;
    const rimGrad = ctx.createRadialGradient(rimX, h * 0.25, 10, rimX, h * 0.25, 180);
    rimGrad.addColorStop(0, 'rgba(251, 191, 36, 0.45)');
    rimGrad.addColorStop(1, 'rgba(251, 191, 36, 0)');
    ctx.fillStyle = rimGrad;
    ctx.fillRect(0, 0, w, h);

    // Detailed Worship Leader Silhouette
    ctx.save();
    ctx.translate(floatX, floatY);

    const cx = w * 0.5;
    const cy = h * 0.55;

    // Golden halo outline
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.7)';
    ctx.lineWidth = 3;

    // Head
    ctx.fillStyle = '#07090e';
    ctx.beginPath();
    ctx.arc(cx, cy - 65, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Shoulders and Torso
    ctx.beginPath();
    ctx.ellipse(cx, cy + 40, 75, 100, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Wireless Handheld Mic
    const micX = cx - 18 + Math.sin(t * 2) * 2;
    const micY = cy - 50 + Math.cos(t * 2) * 2;
    ctx.fillStyle = '#1e2330';
    ctx.fillRect(micX, micY, 10, 32);
    ctx.fillStyle = '#9ca3af';
    ctx.beginPath();
    ctx.arc(micX + 5, micY, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // CAM 3: Congregation & Roaming Perspective
  function drawCam3(ctx, w, h, t) {
    // Auditorium Dark Atmosphere with warm wash
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#090d1a');
    grad.addColorStop(0.5, '#12182b');
    grad.addColorStop(1, '#020408');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Stage light spill from far front
    const beam = ctx.createLinearGradient(0, 0, w, h * 0.4);
    beam.addColorStop(0, 'rgba(0, 210, 255, 0.25)');
    beam.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = beam;
    ctx.fillRect(0, 0, w, h * 0.6);

    // Congregation Silhouettes in foreground raising hands
    const panOffset = Math.sin(t * 0.4) * 20;

    ctx.fillStyle = '#05070d';
    const handPositions = [
      { x: w * 0.15 + panOffset, h: 60, arm: -0.2 },
      { x: w * 0.32 + panOffset, h: 90, arm: 0.1 },
      { x: w * 0.50 + panOffset, h: 80, arm: -0.15 },
      { x: w * 0.68 + panOffset, h: 100, arm: 0.25 },
      { x: w * 0.85 + panOffset, h: 75, arm: -0.1 }
    ];

    // People heads in lower rows
    for (let p of handPositions) {
      const sway = Math.sin(t * 1.5 + p.x) * 6;
      ctx.beginPath();
      ctx.arc(p.x + sway, h - 35, 18, 0, Math.PI * 2);
      ctx.fill();

      // Raised hand arm
      ctx.save();
      ctx.translate(p.x + sway, h - 35);
      ctx.rotate(p.arm + Math.sin(t * 1.2 + p.x) * 0.08);
      ctx.fillRect(-6, -p.h, 12, p.h);
      // Hand
      ctx.beginPath();
      ctx.arc(0, -p.h, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // CAM 4: Balcony / FOH Master Shot
  function drawCam4(ctx, w, h, t) {
    // Grand Auditorium High Angle
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#05060b');
    bg.addColorStop(0.4, '#0c111f');
    bg.addColorStop(1, '#020306');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Stage in the deep center distance
    const stW = w * 0.4;
    const stH = h * 0.22;
    const stX = (w - stW) / 2;
    const stY = h * 0.18;

    const stGlow = ctx.createRadialGradient(
      w * 0.5, stY + stH * 0.5, 10,
      w * 0.5, stY + stH * 0.5, stW * 0.8
    );
    stGlow.addColorStop(0, '#4f46e5');
    stGlow.addColorStop(0.6, '#0284c7');
    stGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = stGlow;
    ctx.fillRect(stX - 20, stY - 10, stW + 40, stH + 30);

    // Stage surface lit up
    ctx.fillStyle = '#1e1b4b';
    ctx.fillRect(stX, stY + stH * 0.3, stW, stH * 0.7);

    // Stage lights shooting upward towards ceiling truss
    for (let i = 0; i < 5; i++) {
      const lx = stX + (stW / 4) * i;
      const angle = (i - 2) * 0.15 + Math.sin(t + i) * 0.1;
      ctx.save();
      ctx.translate(lx, stY + stH * 0.3);
      ctx.rotate(angle);
      const lg = ctx.createLinearGradient(0, 0, 0, -h * 0.4);
      lg.addColorStop(0, 'rgba(0, 210, 255, 0.4)');
      lg.addColorStop(1, 'rgba(0, 210, 255, 0)');
      ctx.fillStyle = lg;
      ctx.fillRect(-8, -h * 0.4, 16, h * 0.4);
      ctx.restore();
    }

    // Seating rows receding in perspective
    ctx.strokeStyle = '#121827';
    ctx.lineWidth = 1.5;
    for (let r = 0; r < 8; r++) {
      const y = h * (0.45 + r * 0.06);
      ctx.beginPath();
      ctx.arc(w * 0.5, y + 200, 200 + r * 30, Math.PI * 1.25, Math.PI * 1.75);
      ctx.stroke();
    }

    // FOH Desk silhouette in bottom center
    ctx.fillStyle = '#06080d';
    ctx.fillRect(w * 0.35, h * 0.82, w * 0.3, h * 0.18);
    // Monitor screen glows at FOH
    ctx.fillStyle = '#00d2ff';
    ctx.fillRect(w * 0.42, h * 0.86, 20, 12);
    ctx.fillStyle = '#10b981';
    ctx.fillRect(w * 0.48, h * 0.85, 24, 14);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(w * 0.55, h * 0.86, 18, 12);
  }

  // Draw Camera by Index
  function drawCam(idx, ctx, w, h, t) {
    if (idx === 1) drawCam1(ctx, w, h, t);
    else if (idx === 2) drawCam2(ctx, w, h, t);
    else if (idx === 3) drawCam3(ctx, w, h, t);
    else if (idx === 4) drawCam4(ctx, w, h, t);
  }

  // Draw PGM with Transitions, PIP, and FTB
  function drawProgramOutput(ctx, w, h, t) {
    let progress = 0;

    if (state.isTransitioning) {
      const now = performance.now();
      const elapsed = (now - state.transStartTime) / 1000;
      progress = Math.min(1, elapsed / state.transRate);
      state.transProgress = progress;

      if (progress >= 1) {
        // Complete transition
        state.isTransitioning = false;
        state.pgm = state.pvw;
        state.prevPgm = state.pgm;
        state.transProgress = 0;
        updateUIButtons();
      }
    } else if (state.tbarMoving || state.tbarPos > 0) {
      progress = state.tbarPos;
    }

    // Render Source A (Current PGM) to offCtxA
    offCtxA.clearRect(0, 0, 640, 360);
    drawCam(state.prevPgm || state.pgm, offCtxA, 640, 360, t);

    // Render Source B (Incoming PVW) to offCtxB
    offCtxB.clearRect(0, 0, 640, 360);
    drawCam(state.pvw, offCtxB, 640, 360, t);

    ctx.clearRect(0, 0, w, h);

    if (progress <= 0) {
      // Straight source A
      ctx.drawImage(offscreen.srcA, 0, 0, w, h);
    } else if (progress >= 1) {
      // Straight source B
      ctx.drawImage(offscreen.srcB, 0, 0, w, h);
    } else {
      // Execute Transition Effect
      if (state.transEffect === 'MIX') {
        // Cross dissolve
        ctx.drawImage(offscreen.srcA, 0, 0, w, h);
        ctx.save();
        ctx.globalAlpha = progress;
        ctx.drawImage(offscreen.srcB, 0, 0, w, h);
        ctx.restore();
      } else if (state.transEffect === 'WIPE_H') {
        // Horizontal Wipe
        ctx.drawImage(offscreen.srcA, 0, 0, w, h);
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, w * progress, h);
        ctx.clip();
        ctx.drawImage(offscreen.srcB, 0, 0, w, h);
        ctx.restore();
      } else if (state.transEffect === 'WIPE_V') {
        // Vertical Wipe
        ctx.drawImage(offscreen.srcA, 0, 0, w, h);
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, w, h * progress);
        ctx.clip();
        ctx.drawImage(offscreen.srcB, 0, 0, w, h);
        ctx.restore();
      } else if (state.transEffect === 'DIP') {
        // Dip to Black
        if (progress < 0.5) {
          const fadeOut = 1 - progress * 2;
          ctx.drawImage(offscreen.srcA, 0, 0, w, h);
          ctx.fillStyle = `rgba(0, 0, 0, ${1 - fadeOut})`;
          ctx.fillRect(0, 0, w, h);
        } else {
          const fadeIn = (progress - 0.5) * 2;
          ctx.drawImage(offscreen.srcB, 0, 0, w, h);
          ctx.fillStyle = `rgba(0, 0, 0, ${1 - fadeIn})`;
          ctx.fillRect(0, 0, w, h);
        }
      }
    }

    // PIP (Picture-In-Picture) Overlay
    if (state.pip && state.pipSrc) {
      const pipW = w * state.pipSize;
      const pipH = h * state.pipSize;
      let px = w - pipW - 14;
      let py = 14;

      if (state.pipPos === 'TL') { px = 14; py = 14; }
      else if (state.pipPos === 'TR') { px = w - pipW - 14; py = 14; }
      else if (state.pipPos === 'BL') { px = 14; py = h - pipH - 14; }
      else if (state.pipPos === 'BR') { px = w - pipW - 14; py = h - pipH - 14; }

      // Offscreen render PIP cam
      offCtxA.clearRect(0, 0, 640, 360);
      drawCam(state.pipSrc, offCtxA, 640, 360, t);

      ctx.save();
      ctx.strokeStyle = '#00d2ff';
      ctx.lineWidth = 2;
      ctx.strokeRect(px, py, pipW, pipH);
      ctx.drawImage(offscreen.srcA, px, py, pipW, pipH);

      // PIP Tally label
      ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
      ctx.fillRect(px + 4, py + 4, 38, 14);
      ctx.fillStyle = '#00d2ff';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(`PIP C${state.pipSrc}`, px + 6, py + 14);
      ctx.restore();
    }

    // FTB (Fade to Black) Overlay
    if (state.ftb) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);
    }
  }

  // --- ANIMATION LOOP ---
  let lastTime = 0;
  function animate(timestamp) {
    const t = timestamp * 0.001;

    // Draw Cameras 1 to 4
    for (let i = 1; i <= 4; i++) {
      if (canvases[i] && contexts[i]) {
        drawCam(i, contexts[i], canvases[i].width, canvases[i].height, t);
      }
    }

    // Draw Preview (PVW)
    if (canvases.pvw && contexts.pvw) {
      contexts.pvw.clearRect(0, 0, canvases.pvw.width, canvases.pvw.height);
      drawCam(state.pvw, contexts.pvw, canvases.pvw.width, canvases.pvw.height, t);
    }

    // Draw Program (PGM)
    if (canvases.pgm && contexts.pgm) {
      drawProgramOutput(contexts.pgm, canvases.pgm.width, canvases.pgm.height, t);
    }

    // Draw AUX Output Monitor (HDMI 2 / External Monitor)
    if (canvases.aux && contexts.aux) {
      const aw = canvases.aux.width;
      const ah = canvases.aux.height;
      contexts.aux.clearRect(0, 0, aw, ah);

      if (state.aux === 'MV') {
        // Multi-view mode on AUX monitor: Top 4 cams + Bottom PVW/PGM
        const topH = Math.floor(ah * 0.45);
        const btmH = ah - topH;
        const colW = Math.floor(aw / 4);

        // Top 4 cameras
        for (let i = 1; i <= 4; i++) {
          contexts.aux.save();
          contexts.aux.translate((i - 1) * colW, 0);
          drawCam(i, contexts.aux, colW, topH, t);
          contexts.aux.restore();
        }

        // Bottom PVW (left half)
        contexts.aux.save();
        contexts.aux.translate(0, topH);
        drawCam(state.pvw, contexts.aux, Math.floor(aw / 2), btmH, t);
        contexts.aux.restore();

        // Bottom PGM (right half)
        contexts.aux.save();
        contexts.aux.translate(Math.floor(aw / 2), topH);
        drawProgramOutput(contexts.aux, Math.floor(aw / 2), btmH, t);
        contexts.aux.restore();
      } else if (state.aux === 'PGM') {
        drawProgramOutput(contexts.aux, aw, ah, t);
      } else if (state.aux === 'PVW') {
        drawCam(state.pvw, contexts.aux, aw, ah, t);
      } else {
        const camNum = parseInt(state.aux, 10);
        if (camNum >= 1 && camNum <= 4) {
          drawCam(camNum, contexts.aux, aw, ah, t);
        }
      }
    }

    // Animate Audio VU meters
    animateAudioMeters(t);

    // Animate Timecode
    updateTimecode();

    requestAnimationFrame(animate);
  }

  // --- AUDIO VU METERS ---
  function animateAudioMeters(t) {
    const meterFillL = document.getElementById('meter-fill-l');
    const meterFillR = document.getElementById('meter-fill-r');
    const readoutL = document.getElementById('meter-db-l');
    const readoutR = document.getElementById('meter-db-r');

    if (!meterFillL || !meterFillR) return;

    // If Muted or FTB active: shut down meters completely
    if (state.audioMuted || state.ftb) {
      meterFillL.style.width = '0%';
      meterFillR.style.width = '0%';
      const muteText = state.audioMuted ? 'MUTE' : '-∞ dB';
      if (readoutL) {
        readoutL.textContent = muteText;
        readoutL.style.color = '#ef4444';
      }
      if (readoutR) {
        readoutR.textContent = muteText;
        readoutR.style.color = '#ef4444';
      }
      return;
    }

    // Audio follows video (AFV): audio base profile corresponds to live PGM camera
    let camBase = 0.65;
    if (state.afvMode) {
      if (state.pgm === 1) camBase = 0.64; // Stage Wide (full band balance)
      else if (state.pgm === 2) camBase = 0.72; // WL Close-up (lead vocal presence)
      else if (state.pgm === 3) camBase = 0.46; // Congregation (room ambiance)
      else if (state.pgm === 4) camBase = 0.66; // Balcony FOH (hall stereo acoustic)
    }

    // Realistic audio dynamics with musical attack & decay
    const beat = Math.sin(t * 5.2) * 0.16 + Math.cos(t * 10.4) * 0.09 + Math.sin(t * 1.8) * 0.05;
    const lVal = Math.max(0.04, Math.min(0.95, camBase + beat));
    const rVal = Math.max(0.04, Math.min(0.95, camBase + beat * 0.94 + 0.015));

    meterFillL.style.width = (lVal * 100).toFixed(1) + '%';
    meterFillR.style.width = (rVal * 100).toFixed(1) + '%';

    // Broadcast dB calculation: 0.95 = 0.0 dB (clip), 0.65 ≈ -11.4 dB (nominal), 0.10 ≈ -32 dB
    const dbLNum = (lVal - 0.95) * 38;
    const dbRNum = (rVal - 0.95) * 38;

    const dbL = dbLNum.toFixed(1);
    const dbR = dbRNum.toFixed(1);

    function getDbColor(val) {
      if (val >= -3.0) return '#ff3344'; // Red clip zone
      if (val >= -12.0) return '#f59e0b'; // Amber presence
      return '#10b981'; // Green nominal clean
    }

    if (readoutL) {
      readoutL.textContent = `${dbL} dB`;
      readoutL.style.color = getDbColor(dbLNum);
    }
    if (readoutR) {
      readoutR.textContent = `${dbR} dB`;
      readoutR.style.color = getDbColor(dbRNum);
    }
  }

  // --- TIMECODE GENERATOR ---
  let frameCount = 0;
  function updateTimecode() {
    frameCount++;
    if (frameCount % 1 === 0) { // 60 FPS
      state.timecode.f++;
      if (state.timecode.f >= 60) {
        state.timecode.f = 0;
        state.timecode.s++;
        if (state.timecode.s >= 60) {
          state.timecode.s = 0;
          state.timecode.m++;
          if (state.timecode.m >= 60) {
            state.timecode.m = 0;
            state.timecode.h++;
          }
        }
      }
      const el = document.getElementById('timecode-clock');
      if (el) {
        const pad = (n) => String(n).padStart(2, '0');
        el.textContent = `${pad(state.timecode.h)}:${pad(state.timecode.m)}:${pad(state.timecode.s)}:${pad(state.timecode.f)}`;
      }
    }
  }

  // --- UI UPDATERS ---
  function updateUIButtons() {
    // Unified Physical CineLive V1 Camera Buttons (Single row: Red = PGM, Green = PVW)
    document.querySelectorAll('.silicone-btn[data-cam]').forEach((btn) => {
      const cam = parseInt(btn.dataset.cam, 10);
      btn.classList.remove('active-pgm', 'active-pvw');
      const pill = btn.querySelector('.tally-indicator-pill');
      if (cam === state.pgm) {
        btn.classList.add('active-pgm');
        if (pill) pill.textContent = 'PGM';
      } else if (cam === state.pvw) {
        btn.classList.add('active-pvw');
        if (pill) pill.textContent = 'PVW';
      } else {
        if (pill) pill.textContent = '';
      }
    });

    // Backward-compat for PGM / PVW buttons if present
    document.querySelectorAll('.silicone-btn[data-pgm]').forEach((btn) => {
      const cam = parseInt(btn.dataset.pgm, 10);
      if (cam === state.pgm) btn.classList.add('active-pgm');
      else btn.classList.remove('active-pgm');
    });
    document.querySelectorAll('.silicone-btn[data-pvw]').forEach((btn) => {
      const cam = parseInt(btn.dataset.pvw, 10);
      if (cam === state.pvw) btn.classList.add('active-pvw');
      else btn.classList.remove('active-pvw');
    });

    // AUX Bus Buttons
    document.querySelectorAll('.silicone-btn[data-aux]').forEach((btn) => {
      const src = btn.dataset.aux;
      if (src === state.aux) {
        btn.classList.add('active-aux');
      } else {
        btn.classList.remove('active-aux');
      }
    });

    // AUX Readout Label on Monitor Top Bar
    const auxLabel = document.getElementById('label-aux-src');
    const auxDest = document.getElementById('label-aux-dest');
    if (auxLabel) {
      if (state.aux === 'MV') {
        auxLabel.textContent = 'MULTIVIEW (MV)';
        if (auxDest) auxDest.textContent = 'HDMI 2 / MONITOR MEJA';
      } else if (state.aux === 'PGM') {
        auxLabel.textContent = `PGM (C${state.pgm})`;
        if (auxDest) auxDest.textContent = 'HDMI 2 / AUX PROGRAM';
      } else if (state.aux === 'PVW') {
        auxLabel.textContent = `PVW (C${state.pvw})`;
        if (auxDest) auxDest.textContent = 'HDMI 2 / AUX PREVIEW';
      } else {
        auxLabel.textContent = `CAM ${state.aux}`;
        if (auxDest) auxDest.textContent = `HDMI 2 / ISO CAM ${state.aux}`;
      }
    }

    // Multiview Screen Tallies
    for (let i = 1; i <= 4; i++) {
      const cell = document.getElementById(`cell-cam${i}`);
      const tallyTag = document.getElementById(`tally-cam${i}`);
      if (!cell || !tallyTag) continue;

      cell.classList.remove('tally-pgm', 'tally-pvw');

      if (i === state.pgm) {
        cell.classList.add('tally-pgm');
        tallyTag.textContent = `CAM ${i} • PGM`;
      } else if (i === state.pvw) {
        cell.classList.add('tally-pvw');
        tallyTag.textContent = `CAM ${i} • PVW`;
      } else {
        tallyTag.textContent = `CAM ${i}`;
      }
    }

    // PVW & PGM Large Screen Labels
    const pvwLabel = document.getElementById('label-pvw-cam');
    if (pvwLabel) pvwLabel.textContent = `CAM ${state.pvw}`;
    const pgmLabel = document.getElementById('label-pgm-cam');
    if (pgmLabel) pgmLabel.textContent = `CAM ${state.pgm}`;

    // FTB Button
    const ftbBtn = document.getElementById('btn-ftb');
    if (ftbBtn) {
      if (state.ftb) ftbBtn.classList.add('active-ftb');
      else ftbBtn.classList.remove('active-ftb');
    }

    // PIP Button
    const pipBtn = document.getElementById('btn-pip-toggle');
    if (pipBtn) {
      if (state.pip) pipBtn.classList.add('active');
      else pipBtn.classList.remove('active');
    }

    // Audio AFV & Mute Toggles
    const btnAfv = document.getElementById('btn-afv');
    if (btnAfv) {
      btnAfv.classList.toggle('active', state.afvMode);
      btnAfv.innerHTML = `<span>AFV MODE</span> <span style="color:${state.afvMode ? '#10b981' : '#8c97ad'}; font-weight:800;">${state.afvMode ? 'ON' : 'OFF'}</span>`;
    }

    const btnMute = document.getElementById('btn-audio-mute');
    if (btnMute) {
      btnMute.classList.toggle('muted', state.audioMuted);
      btnMute.innerHTML = `<span>MUTE ALL</span> <span style="color:${state.audioMuted ? '#ef4444' : '#8c97ad'}; font-weight:800;">${state.audioMuted ? 'ON' : 'OFF'}</span>`;
    }

    // Auto Transition Button Glow
    const autoBtn = document.getElementById('btn-auto');
    if (autoBtn) {
      if (state.isTransitioning) autoBtn.classList.add('trans-active');
      else autoBtn.classList.remove('trans-active');
    }
  }

  // --- TRANSITION CONTROLLERS ---
  function triggerCut() {
    playClickSound('cut');
    state.isTransitioning = false;
    state.tbarPos = 0;
    updateTBarUI(0);

    const oldPgm = state.pgm;
    state.pgm = state.pvw;
    state.pvw = oldPgm;
    state.prevPgm = state.pgm;

    const cutBtn = document.getElementById('btn-cut');
    if (cutBtn) {
      cutBtn.classList.add('pressed');
      setTimeout(() => cutBtn.classList.remove('pressed'), 120);
    }

    updateUIButtons();
  }

  function triggerAuto() {
    if (state.isTransitioning) return;
    playClickSound('auto');

    state.isTransitioning = true;
    state.transStartTime = performance.now();
    state.prevPgm = state.pgm;
    state.tbarPos = 0;
    updateTBarUI(0);

    updateUIButtons();
  }

  function toggleFTB() {
    playClickSound('ftb');
    state.ftb = !state.ftb;
    updateUIButtons();
  }

  function selectPVW(cam) {
    if (cam === state.pvw) return;
    playClickSound('click');
    state.pvw = cam;
    updateUIButtons();
  }

  function hotPunchPGM(cam) {
    playClickSound('cut');
    state.prevPgm = cam;
    state.pgm = cam;
    state.isTransitioning = false;
    updateUIButtons();
  }

  function selectAUX(source) {
    playClickSound('click');
    state.aux = String(source);
    updateUIButtons();
  }

  // --- T-BAR CONTROLLER ---
  function updateTBarUI(pos) {
    const handle = document.getElementById('tbar-handle');
    const readout = document.getElementById('tbar-readout');
    if (handle) {
      // 0 = top (0px), 1 = bottom (110px)
      const topOffset = pos * 110;
      handle.style.top = `${topOffset}px`;
    }
    if (readout) {
      readout.textContent = `${Math.round(pos * 100)}%`;
    }

    // Dynamic 10-LED Ladder Bar
    const leds = document.querySelectorAll('.tbar-led');
    const activeLeds = Math.round(pos * 10);
    leds.forEach((led) => {
      const step = parseInt(led.dataset.step, 10);
      led.classList.remove('lit-green', 'lit-amber', 'lit-red');
      if (step <= activeLeds) {
        if (step <= 6) led.classList.add('lit-green');
        else if (step <= 8) led.classList.add('lit-amber');
        else led.classList.add('lit-red');
      }
    });
  }

  function initTBar() {
    const track = document.getElementById('tbar-track');
    const handle = document.getElementById('tbar-handle');
    if (!track || !handle) return;

    let isDragging = false;
    let startY = 0;
    let startPos = 0;

    function handleStart(e) {
      isDragging = true;
      state.tbarMoving = true;
      state.prevPgm = state.pgm;
      state.isTransitioning = false;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      startY = clientY;
      startPos = state.tbarPos;
      document.body.style.cursor = 'grabbing';
      playClickSound('click');
    }

    function handleMove(e) {
      if (!isDragging) return;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const deltaY = clientY - startY;
      const trackHeight = 110; // Max displacement in px

      let newPos = startPos + deltaY / trackHeight;
      newPos = Math.max(0, Math.min(1, newPos));

      state.tbarPos = newPos;
      updateTBarUI(newPos);
    }

    function handleEnd() {
      if (!isDragging) return;
      isDragging = false;
      state.tbarMoving = false;
      document.body.style.cursor = '';

      // If pushed past 90%, snap to 100% and swap PGM/PVW
      if (state.tbarPos >= 0.9) {
        state.pgm = state.pvw;
        state.prevPgm = state.pgm;
        state.tbarPos = 0;
        updateTBarUI(0);
        updateUIButtons();
        playClickSound('cut');
      } else if (state.tbarPos <= 0.1) {
        // Snap back to 0
        state.tbarPos = 0;
        updateTBarUI(0);
      }
    }

    handle.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    handle.addEventListener('touchstart', handleStart, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('touchend', handleEnd);
  }

  // --- EVENT LISTENERS & SETUP ---
  function setupEventListeners() {
    // Unified Physical Camera Buttons (CineLive V1 Front Panel: 1-4)
    document.querySelectorAll('.silicone-btn[data-cam]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const cam = parseInt(btn.dataset.cam, 10);
        if (e.shiftKey) {
          // Shift + Click executes instant direct Hot-Punch to PGM
          hotPunchPGM(cam);
        } else {
          // Normal Click:
          // If already cued on PVW (Green), clicking again executes CUT to live PGM
          if (cam === state.pvw) {
            triggerCut();
          } else if (cam !== state.pgm) {
            // Otherwise cue to Preview (turns Green)
            selectPVW(cam);
          }
        }
      });
    });

    // PGM Buttons (backward compatibility)
    document.querySelectorAll('.silicone-btn[data-pgm]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cam = parseInt(btn.dataset.pgm, 10);
        hotPunchPGM(cam);
      });
    });

    // PVW Buttons (backward compatibility)
    document.querySelectorAll('.silicone-btn[data-pvw]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cam = parseInt(btn.dataset.pvw, 10);
        selectPVW(cam);
      });
    });

    // Audio Controls: AFV & Mute
    const btnAfv = document.getElementById('btn-afv');
    if (btnAfv) {
      btnAfv.addEventListener('click', () => {
        playClickSound('click');
        state.afvMode = !state.afvMode;
        updateUIButtons();
      });
    }

    const btnMute = document.getElementById('btn-audio-mute');
    if (btnMute) {
      btnMute.addEventListener('click', () => {
        playClickSound('ftb');
        state.audioMuted = !state.audioMuted;
        updateUIButtons();
      });
    }

    // CUT & AUTO Buttons
    const cutBtn = document.getElementById('btn-cut');
    if (cutBtn) cutBtn.addEventListener('click', triggerCut);

    const autoBtn = document.getElementById('btn-auto');
    if (autoBtn) autoBtn.addEventListener('click', triggerAuto);

    const ftbBtn = document.getElementById('btn-ftb');
    if (ftbBtn) ftbBtn.addEventListener('click', toggleFTB);

    // Transition Effect Buttons
    document.querySelectorAll('.option-btn[data-effect]').forEach((btn) => {
      btn.addEventListener('click', () => {
        playClickSound('click');
        document.querySelectorAll('.option-btn[data-effect]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.transEffect = btn.dataset.effect;
      });
    });

    // Rate Buttons
    document.querySelectorAll('.option-btn[data-rate]').forEach((btn) => {
      btn.addEventListener('click', () => {
        playClickSound('click');
        document.querySelectorAll('.option-btn[data-rate]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.transRate = parseFloat(btn.dataset.rate);
      });
    });

    // PIP Buttons
    const pipToggle = document.getElementById('btn-pip-toggle');
    if (pipToggle) {
      pipToggle.addEventListener('click', () => {
        playClickSound('click');
        state.pip = !state.pip;
        updateUIButtons();
      });
    }

    const pipSrcBtn = document.getElementById('btn-pip-src');
    if (pipSrcBtn) {
      pipSrcBtn.addEventListener('click', () => {
        playClickSound('click');
        state.pipSrc = (state.pipSrc % 4) + 1;
        pipSrcBtn.textContent = `SRC: C${state.pipSrc}`;
      });
    }

    const pipPosBtn = document.getElementById('btn-pip-pos');
    if (pipPosBtn) {
      pipPosBtn.addEventListener('click', () => {
        playClickSound('click');
        const posOrder = ['TR', 'BR', 'BL', 'TL'];
        const nextIdx = (posOrder.indexOf(state.pipPos) + 1) % posOrder.length;
        state.pipPos = posOrder[nextIdx];
        pipPosBtn.textContent = `POS: ${state.pipPos}`;
      });
    }

    // Audio SFX checkbox
    const sfxCheckbox = document.getElementById('audio-sfx-toggle');
    if (sfxCheckbox) {
      sfxCheckbox.addEventListener('change', (e) => {
        state.soundEnabled = e.target.checked;
      });
    }

    // Multiview Fullscreen Toggle
    const mvFullscreenBtn = document.getElementById('btn-mv-fullscreen');
    if (mvFullscreenBtn) {
      mvFullscreenBtn.addEventListener('click', () => {
        document.body.classList.toggle('multiview-fullscreen');
      });
    }

    // Scenario Preset Pills
    document.querySelectorAll('.preset-pill[data-preset]').forEach((pill) => {
      pill.addEventListener('click', () => {
        playClickSound('click');
        const preset = pill.dataset.preset;
        if (preset === 'worship') {
          state.pgm = 1;
          state.pvw = 2;
          state.transEffect = 'MIX';
          state.transRate = 1.0;
        } else if (preset === 'sermon') {
          state.pgm = 2;
          state.pvw = 4;
          state.transEffect = 'MIX';
          state.pip = true;
          state.pipSrc = 4;
        } else if (preset === 'congregation') {
          state.pgm = 3;
          state.pvw = 1;
          state.transEffect = 'WIPE_H';
        } else if (preset === 'reset') {
          state.pgm = 1;
          state.pvw = 2;
          state.transEffect = 'MIX';
          state.transRate = 1.0;
          state.ftb = false;
          state.pip = false;
          state.tbarPos = 0;
          updateTBarUI(0);
        }
        updateUIButtons();
      });
    });

    // AUX Bus Buttons
    document.querySelectorAll('.silicone-btn[data-aux]').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectAUX(btn.dataset.aux);
      });
    });

    // Cinetreak Rotary Encoder Menu Dial & OSD
    const rotaryDial = document.getElementById('rotary-dial');
    const menuStatusText = document.getElementById('menu-status-text');
    const menuOsdList = [
      'HDMI 2 (AUX): MULTIVIEW DISPLAY',
      'OUTPUT 1: 1080P60 PGM LIVE',
      'IN 1: 1080P60 (A6000 WIRED)',
      'IN 2: 1080P60 (ZV-E10 PYRO S)',
      'IN 3: 1080P60 (A6000 PYRO H)',
      'IN 4: 1080P60 (A6000 FOH)',
      'UVC STREAM: READY (USB-C)',
      'AUDIO: AFV ENABLED (ANALOG IN)'
    ];
    if (rotaryDial) {
      let dialAngle = 0;
      rotaryDial.addEventListener('wheel', (e) => {
        e.preventDefault();
        playClickSound('click');
        dialAngle += e.deltaY > 0 ? 30 : -30;
        rotaryDial.style.transform = `rotate(${dialAngle}deg)`;
        state.menuIndex = (state.menuIndex + (e.deltaY > 0 ? 1 : menuOsdList.length - 1)) % menuOsdList.length;
        if (menuStatusText) menuStatusText.textContent = menuOsdList[state.menuIndex];
      });
      rotaryDial.addEventListener('click', () => {
        playClickSound('click');
        state.menuIndex = (state.menuIndex + 1) % menuOsdList.length;
        if (menuStatusText) menuStatusText.textContent = menuOsdList[state.menuIndex];
      });
    }

    // Hardware LIVE & REC buttons
    const btnLive = document.getElementById('btn-live-toggle');
    if (btnLive) {
      btnLive.addEventListener('click', () => {
        playClickSound('click');
        state.liveStreaming = !state.liveStreaming;
        btnLive.style.opacity = state.liveStreaming ? '1' : '0.35';
      });
    }

    const btnRec = document.getElementById('btn-rec-toggle');
    if (btnRec) {
      btnRec.addEventListener('click', () => {
        playClickSound('click');
        state.recording = !state.recording;
        btnRec.style.opacity = state.recording ? '1' : '0.35';
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Prevent shortcut interference if typing in an input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const key = e.key;

      // AUX Bus Routing Shortcuts with Alt
      if (e.altKey) {
        if (key.toLowerCase() === 'm') {
          e.preventDefault();
          selectAUX('MV');
          return;
        } else if (key >= '1' && key <= '4') {
          e.preventDefault();
          selectAUX(key);
          return;
        } else if (key.toLowerCase() === 'p') {
          e.preventDefault();
          selectAUX('PVW');
          return;
        } else if (key.toLowerCase() === 'g') {
          e.preventDefault();
          selectAUX('PGM');
          return;
        }
      }

      if (key >= '1' && key <= '4') {
        const cam = parseInt(key, 10);
        if (e.shiftKey) {
          hotPunchPGM(cam);
        } else {
          if (cam === state.pvw) {
            triggerCut();
          } else if (cam !== state.pgm) {
            selectPVW(cam);
          }
        }
      } else if (key === ' ' || key === 'Spacebar') {
        e.preventDefault();
        triggerCut();
      } else if (key === 'Enter') {
        e.preventDefault();
        triggerAuto();
      } else if (key.toLowerCase() === 'f') {
        toggleFTB();
      } else if (key.toLowerCase() === 'p') {
        state.pip = !state.pip;
        updateUIButtons();
      } else if (key.toLowerCase() === 'm') {
        document.body.classList.toggle('multiview-fullscreen');
      } else if (key === 'ArrowDown') {
        // T-Bar manual down
        state.tbarPos = Math.min(1, state.tbarPos + 0.1);
        updateTBarUI(state.tbarPos);
        if (state.tbarPos >= 0.95) triggerCut();
      } else if (key === 'ArrowUp') {
        // T-Bar manual up
        state.tbarPos = Math.max(0, state.tbarPos - 0.1);
        updateTBarUI(state.tbarPos);
      }
    });

    // Realtime Viewport Resolution Telemetry for Desktop Lockout Screen
    function updateResolutionReadout() {
      const resEl = document.getElementById('current-screen-res');
      if (resEl) {
        resEl.textContent = `${window.innerWidth} × ${window.innerHeight} px`;
      }
    }
    window.addEventListener('resize', updateResolutionReadout);
    updateResolutionReadout();
  }

  // --- INITIALIZE ON DOM READY ---
  window.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    initTBar();
    updateUIButtons();
    requestAnimationFrame(animate);
    console.log('[Cinetreak Cinelive V1 Simulator Initialized]');
  });
})();
