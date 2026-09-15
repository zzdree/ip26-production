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
    timecode: { h: 1, m: 24, s: 50, f: 0 },
    camConfigs: {
      1: { name: 'CAM 1', desc: 'Sony A6000 Wired (Tengah FOH ➔ Stage Depan)', resolution: '1080p60' },
      2: { name: 'CAM 2', desc: 'Sony ZV-E10 Wireless Pyro S (Stage Mobile ➔ 2 WL & 3 Singer)', resolution: '1080p60' },
      3: { name: 'CAM 3', desc: 'Sony A6000 Wireless Pyro H (Kiri Stage ➔ Jemaat Auditorium UNNES)', resolution: '1080p60' },
      4: { name: 'CAM 4', desc: 'Sony A6000 Wired (Kanan Stage ➔ 7 Pemain Musik / Band)', resolution: '1080p60' }
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
    pgm: document.getElementById('canvas-pgm')
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

  // --- 3D PERSPECTIVE PROJECTION ENGINE FOR AUDITORIUM UNNES ---
  // Coordinate System: X: Lateral (-left / +right), Y: Vertical (0=hall floor, 1.0=stage floor), Z: Depth (0=stage lip, +10=back wall, -14=FOH)
  function project3D(p, cam, w, h) {
    const dx = p[0] - cam.x;
    const dy = p[1] - cam.y;
    const dz = p[2] - cam.z;

    const cosY = Math.cos(cam.yaw);
    const sinY = Math.sin(cam.yaw);
    const x1 = dx * cosY - dz * sinY;
    const z1 = dx * sinY + dz * cosY;

    const cosP = Math.cos(cam.pitch);
    const sinP = Math.sin(cam.pitch);
    const y2 = dy * cosP - z1 * sinP;
    const z2 = dy * sinP + z1 * cosP;

    if (z2 <= 0.12) return null; // Behind near-clipping plane

    const fov = cam.fov || 460;
    const scale = fov / z2;
    return {
      sx: (w * 0.5) + x1 * scale,
      sy: (h * 0.5) - y2 * scale,
      depth: z2,
      scale: scale
    };
  }

  function drawPoly3D(ctx, cam, w, h, pts, fill, stroke, lineWidth = 1) {
    const projs = [];
    for (let i = 0; i < pts.length; i++) {
      const pr = project3D(pts[i], cam, w, h);
      if (!pr) return null;
      projs.push(pr);
    }
    ctx.beginPath();
    ctx.moveTo(projs[0].sx, projs[0].sy);
    for (let i = 1; i < projs.length; i++) {
      ctx.lineTo(projs[i].sx, projs[i].sy);
    }
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
    return projs;
  }

  function drawBox3D(ctx, cam, w, h, pos, size, fillTop, fillFront, fillSide, stroke) {
    const x = pos[0], y = pos[1], z = pos[2];
    const sx = size[0] * 0.5, sy = size[1], sz = size[2] * 0.5;

    // Top face (y + sy)
    drawPoly3D(ctx, cam, w, h, [
      [x - sx, y + sy, z - sz],
      [x + sx, y + sy, z - sz],
      [x + sx, y + sy, z + sz],
      [x - sx, y + sy, z + sz]
    ], fillTop, stroke);

    // Front face
    drawPoly3D(ctx, cam, w, h, [
      [x - sx, y, z - sz],
      [x + sx, y, z - sz],
      [x + sx, y + sy, z - sz],
      [x - sx, y + sy, z - sz]
    ], fillFront, stroke);

    // Side face
    drawPoly3D(ctx, cam, w, h, [
      [x + sx, y, z - sz],
      [x + sx, y, z + sz],
      [x + sx, y + sy, z + sz],
      [x + sx, y + sy, z - sz]
    ], fillSide, stroke);
  }

  function draw3DBeam(ctx, cam, w, h, origin, target, color, radius = 0.55) {
    const o = project3D(origin, cam, w, h);
    const t = project3D(target, cam, w, h);
    if (!o || !t) return;

    const r = Math.max(8, radius * t.scale);
    const grad = ctx.createRadialGradient(t.sx, t.sy, 2, t.sx, t.sy, r * 2.2);
    grad.addColorStop(0, color.replace(')', ', 0.38)').replace('rgb', 'rgba'));
    grad.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(o.sx - 2, o.sy);
    ctx.lineTo(o.sx + 2, o.sy);
    ctx.lineTo(t.sx + r, t.sy);
    ctx.lineTo(t.sx - r, t.sy);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }

  // Common Auditorium UNNES 3D Environment (Stage, Proscenium, LED Wall, Trusses, 2 WL, 3 Singer, 7 Musisi, Jemaat)
  function renderAuditoriumUNNES3D(ctx, cam, w, h, t, opts = {}) {
    // 1. Auditorium Background Gradient & Hall Ambiance
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#04060d');
    bg.addColorStop(0.5, '#0a0e1c');
    bg.addColorStop(1, '#020306');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // 2. Auditorium Hall Floor (Y = 0)
    drawPoly3D(ctx, cam, w, h, [
      [-14, 0, -22],
      [14, 0, -22],
      [14, 0, 0],
      [-14, 0, 0]
    ], '#070a14', '#111827', 1);

    // 3. Auditorium Seating Rows & Jemaat Silhouettes
    if (!opts.skipAudience) {
      for (let r = 0; r < 6; r++) {
        const rowZ = -3.0 - r * 2.6;
        const rowY = 0.0 + r * 0.28; // Tiered raked seating
        // Row bench
        drawPoly3D(ctx, cam, w, h, [
          [-11, rowY, rowZ],
          [11, rowY, rowZ],
          [11, rowY + 0.35, rowZ - 0.4],
          [-11, rowY + 0.35, rowZ - 0.4]
        ], '#1e1b2e', '#0f172a', 1);

        // Jemaat heads & worship arms
        for (let col = -9; col <= 9; col += 1.8) {
          const personPos = [col + (r % 2) * 0.5, rowY + 0.35, rowZ - 0.2];
          const pr = project3D(personPos, cam, w, h);
          if (pr) {
            const headR = Math.max(2, 0.18 * pr.scale);
            ctx.fillStyle = '#05070d';
            ctx.beginPath();
            ctx.arc(pr.sx, pr.sy - headR * 1.5, headR, 0, Math.PI * 2);
            ctx.fill();

            // Raised hands in worship for some congregation members
            if ((Math.abs(col * 3 + r) % 3) === 0) {
              const armL = headR * 2.8;
              const sway = Math.sin(t * 1.4 + col) * 4;
              ctx.strokeStyle = '#05070d';
              ctx.lineWidth = Math.max(1, headR * 0.35);
              ctx.beginPath();
              ctx.moveTo(pr.sx - headR * 0.8, pr.sy);
              ctx.lineTo(pr.sx - headR * 1.6 + sway, pr.sy - armL);
              ctx.moveTo(pr.sx + headR * 0.8, pr.sy);
              ctx.lineTo(pr.sx + headR * 1.6 + sway, pr.sy - armL);
              ctx.stroke();
            }
          }
        }
      }
    }

    // 4. Elevated Stage Structure (Height Y = 1.0, Width X: -9.5 to +9.5, Depth Z: 0 to 10.5)
    // Stage Front Fascia (Y: 0 to 1.0)
    drawPoly3D(ctx, cam, w, h, [
      [-9.5, 0, 0],
      [9.5, 0, 0],
      [9.5, 1.0, 0],
      [-9.5, 1.0, 0]
    ], '#050811', '#1f293d', 1);

    // Stage Front Lip Glowing Safety LED Strip
    const lipL = project3D([-9.5, 1.0, 0], cam, w, h);
    const lipR = project3D([9.5, 1.0, 0], cam, w, h);
    if (lipL && lipR) {
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.65)';
      ctx.lineWidth = Math.max(1.5, 0.04 * lipL.scale);
      ctx.beginPath();
      ctx.moveTo(lipL.sx, lipL.sy);
      ctx.lineTo(lipR.sx, lipR.sy);
      ctx.stroke();
    }

    // Main Stage Floor Surface (Glossy concert dark finish with reflections)
    drawPoly3D(ctx, cam, w, h, [
      [-9.5, 1.0, 0],
      [9.5, 1.0, 0],
      [9.5, 1.0, 10.5],
      [-9.5, 1.0, 10.5]
    ], '#0a0e18', '#1e293b', 1);

    // 5. Proscenium Arch & Acoustic Side Panels of Auditorium UNNES
    // Left Proscenium Wall
    drawPoly3D(ctx, cam, w, h, [
      [-9.5, 0, 0],
      [-9.5, 1.0, 10.5],
      [-9.5, 7.5, 10.5],
      [-9.5, 7.0, 0]
    ], '#0c101d', '#1e293b', 1);

    // Right Proscenium Wall
    drawPoly3D(ctx, cam, w, h, [
      [9.5, 0, 0],
      [9.5, 1.0, 10.5],
      [9.5, 7.5, 10.5],
      [9.5, 7.0, 0]
    ], '#0c101d', '#1e293b', 1);

    // 6. Giant Center LED Wall (10m x 5m at Z = 10.2, X: -5.0 to +5.0, Y: 1.2 to 6.2)
    const ledTL = project3D([-5.0, 6.2, 10.2], cam, w, h);
    const ledTR = project3D([5.0, 6.2, 10.2], cam, w, h);
    const ledBR = project3D([5.0, 1.2, 10.2], cam, w, h);
    const ledBL = project3D([-5.0, 1.2, 10.2], cam, w, h);

    if (ledTL && ledTR && ledBR && ledBL) {
      // Dynamic LED Motion Graphics
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(ledTL.sx, ledTL.sy);
      ctx.lineTo(ledTR.sx, ledTR.sy);
      ctx.lineTo(ledBR.sx, ledBR.sy);
      ctx.lineTo(ledBL.sx, ledBL.sy);
      ctx.closePath();
      ctx.clip();

      // Cosmic Praise & Worship Visual Background
      const ledGrad = ctx.createLinearGradient(
        ledTL.sx + Math.sin(t * 0.4) * 60, ledTL.sy,
        ledBR.sx, ledBR.sy
      );
      ledGrad.addColorStop(0, '#1e1b4b');
      ledGrad.addColorStop(0.4, '#312e81');
      ledGrad.addColorStop(0.7, '#4338ca');
      ledGrad.addColorStop(1, '#065f46');
      ctx.fillStyle = ledGrad;
      ctx.fill();

      // Flowing dynamic particles & ambient worship cross/rays
      ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
      for (let p = 0; p < 8; p++) {
        const px = ledBL.sx + ((p * 45 + t * 50) % (ledTR.sx - ledTL.sx || 100));
        const py = ledTL.sy + (Math.sin(t * 1.2 + p) * 0.35 + 0.5) * (ledBR.sy - ledTR.sy);
        ctx.beginPath();
        ctx.arc(px, py, 2.5 + Math.sin(t * 2 + p) * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Elegant Center Title / Lyrics on LED Wall
      const centerLEDX = (ledTL.sx + ledTR.sx) * 0.5;
      const centerLEDY = (ledTL.sy + ledBL.sy) * 0.5;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = `700 ${Math.max(8, Math.round(0.4 * ledTL.scale))}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('AUDITORIUM UNNES • PRAISE & WORSHIP', centerLEDX, centerLEDY - 4);
      ctx.restore();

      // LED Wall Bezel Frame
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = Math.max(1, 0.02 * ledTL.scale);
      ctx.beginPath();
      ctx.moveTo(ledTL.sx, ledTL.sy);
      ctx.lineTo(ledTR.sx, ledTR.sy);
      ctx.lineTo(ledBR.sx, ledBR.sy);
      ctx.lineTo(ledBL.sx, ledBL.sy);
      ctx.closePath();
      ctx.stroke();
    }

    // 7. Side LED Screens (IMAG Left & Right)
    // Left IMAG: X: -8.5 to -5.8, Y: 1.8 to 5.6, Z: 9.6
    drawPoly3D(ctx, cam, w, h, [
      [-8.5, 5.6, 9.6],
      [-5.8, 5.6, 9.6],
      [-5.8, 1.8, 9.6],
      [-8.5, 1.8, 9.6]
    ], '#1e1b4b', '#0284c7', 1);

    // Right IMAG: X: 5.8 to 8.5, Y: 1.8 to 5.6, Z: 9.6
    drawPoly3D(ctx, cam, w, h, [
      [5.8, 5.6, 9.6],
      [8.5, 5.6, 9.6],
      [8.5, 1.8, 9.6],
      [5.8, 1.8, 9.6]
    ], '#1e1b4b', '#0284c7', 1);

    // 8. Overhead Aluminum Lighting Trusses & Moving Beams
    // Front Truss: Z = 2.2, Y = 7.0
    const tr1L = project3D([-9.5, 7.0, 2.2], cam, w, h);
    const tr1R = project3D([9.5, 7.0, 2.2], cam, w, h);
    if (tr1L && tr1R) {
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = Math.max(2, 0.05 * tr1L.scale);
      ctx.beginPath();
      ctx.moveTo(tr1L.sx, tr1L.sy);
      ctx.lineTo(tr1R.sx, tr1R.sy);
      ctx.stroke();
    }

    // 6 Sweeping Intelligent Beam Lights
    const beamSpots = [-6.5, -3.5, -1.0, 1.0, 3.5, 6.5];
    for (let b = 0; b < beamSpots.length; b++) {
      const bx = beamSpots[b];
      const origin = [bx, 7.0, 2.2];
      const sweepX = bx + Math.sin(t * 1.5 + b * 1.1) * 3.2;
      const sweepZ = 2.5 + Math.cos(t * 1.2 + b * 0.9) * 2.0;
      const target = [sweepX, 1.0, sweepZ];
      const col = b % 2 === 0 ? 'rgb(0, 210, 255)' : 'rgb(245, 158, 11)';
      draw3DBeam(ctx, cam, w, h, origin, target, col, 0.7);
    }

    // 9. Stage Monitor Wedges (Floor in front of 2 WLs)
    drawBox3D(ctx, cam, w, h, [-0.9, 1.0, 0.9], [0.5, 0.28, 0.4], '#111827', '#030712', '#0f172a', '#374151');
    drawBox3D(ctx, cam, w, h, [0.9, 1.0, 0.9], [0.5, 0.28, 0.4], '#111827', '#030712', '#0f172a', '#374151');

    // 10. STAGE PERSONNEL & 7 BAND MUSICIANS
    // A. 2 WL (Worship Leaders) at Front Center (X = -0.9 and +0.9, Z = 2.0)
    // WL 1 (Left Leader, holding wireless mic, right arm raised)
    drawPerson3D(ctx, cam, w, h, [-0.9, 1.0, 2.0], {
      height: 1.72,
      clothesColor: '#1e293b',
      skinColor: '#d97706',
      posture: 'wl1',
      label: opts.showLabels ? 'WL 1' : null,
      t: t
    });

    // WL 2 (Right Leader, holding wireless mic)
    drawPerson3D(ctx, cam, w, h, [0.9, 1.0, 2.0], {
      height: 1.68,
      clothesColor: '#334155',
      skinColor: '#d97706',
      posture: 'wl2',
      label: opts.showLabels ? 'WL 2' : null,
      t: t
    });

    // B. 3 Singers Behind the 2 WLs (X = -2.0, 0.0, +2.0, Z = 4.2)
    // Singer 1 (Sopran)
    drawPerson3D(ctx, cam, w, h, [-2.0, 1.0, 4.2], {
      height: 1.65,
      clothesColor: '#475569',
      skinColor: '#f59e0b',
      posture: 'singer',
      label: opts.showLabels ? 'SINGER 1' : null,
      t: t
    });

    // Singer 2 (Alto)
    drawPerson3D(ctx, cam, w, h, [0.0, 1.0, 4.2], {
      height: 1.70,
      clothesColor: '#475569',
      skinColor: '#f59e0b',
      posture: 'singer',
      label: opts.showLabels ? 'SINGER 2' : null,
      t: t
    });

    // Singer 3 (Tenor)
    drawPerson3D(ctx, cam, w, h, [2.0, 1.0, 4.2], {
      height: 1.72,
      clothesColor: '#475569',
      skinColor: '#f59e0b',
      posture: 'singer',
      label: opts.showLabels ? 'SINGER 3' : null,
      t: t
    });

    // C. 7 Pemain Musik (Stage Right: X = +3.5 to +8.5)
    // 1. Drummer on elevated riser with Acrylic Drum Shield
    // Drum Riser Box at X = +7.0, Y = 1.0 to 1.3, Z = 6.8
    drawBox3D(ctx, cam, w, h, [7.0, 1.0, 6.8], [2.2, 0.3, 2.0], '#1e293b', '#0f172a', '#111827', '#38bdf8');
    
    // Drum Kit (Bass drum, snare, cymbals)
    const drumPr = project3D([7.0, 1.45, 6.8], cam, w, h);
    if (drumPr) {
      const sc = drumPr.scale;
      // Kick drum
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(drumPr.sx, drumPr.sy + 0.15 * sc, 0.35 * sc, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#64748b';
      ctx.stroke();

      // Golden Cymbals
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.ellipse(drumPr.sx - 0.45 * sc, drumPr.sy - 0.2 * sc, 0.25 * sc, 0.08 * sc, -0.2, 0, Math.PI * 2);
      ctx.ellipse(drumPr.sx + 0.45 * sc, drumPr.sy - 0.25 * sc, 0.28 * sc, 0.09 * sc, 0.15, 0, Math.PI * 2);
      ctx.fill();
    }

    // Drummer Figure
    drawPerson3D(ctx, cam, w, h, [7.0, 1.3, 7.1], {
      height: 1.4,
      clothesColor: '#1e293b',
      skinColor: '#d97706',
      posture: 'drummer',
      label: opts.showLabels ? 'DRUMMER' : null,
      t: t
    });

    // Acrylic Drum Shield (Transparent glass panels around drum kit)
    drawPoly3D(ctx, cam, w, h, [
      [5.8, 1.3, 5.8],
      [8.2, 1.3, 5.8],
      [8.2, 2.8, 5.8],
      [5.8, 2.8, 5.8]
    ], 'rgba(56, 189, 248, 0.16)', 'rgba(56, 189, 248, 0.75)', 1.5);

    // 2. Bassist & Ampeg Bass Stack
    drawBox3D(ctx, cam, w, h, [4.8, 1.0, 7.0], [0.75, 1.2, 0.5], '#0f172a', '#020617', '#111827', '#475569');
    drawPerson3D(ctx, cam, w, h, [4.8, 1.0, 6.2], {
      height: 1.74,
      clothesColor: '#0f172a',
      skinColor: '#d97706',
      posture: 'bassist',
      label: opts.showLabels ? 'BASSIST' : null,
      t: t
    });

    // 3. Lead Electric Guitarist & Marshall Amp Stack
    drawBox3D(ctx, cam, w, h, [3.8, 1.0, 4.4], [0.7, 0.9, 0.45], '#1e1b4b', '#0f172a', '#111827', '#f59e0b');
    drawPerson3D(ctx, cam, w, h, [3.8, 1.0, 3.6], {
      height: 1.75,
      clothesColor: '#1e293b',
      skinColor: '#d97706',
      posture: 'guitar',
      label: opts.showLabels ? 'LEAD GUITAR' : null,
      t: t
    });

    // 4. Acoustic Guitarist
    drawPerson3D(ctx, cam, w, h, [5.2, 1.0, 3.4], {
      height: 1.70,
      clothesColor: '#334155',
      skinColor: '#d97706',
      posture: 'acoustic',
      label: opts.showLabels ? 'ACOUSTIC' : null,
      t: t
    });

    // 5. Keyboardist 1 (Grand Piano)
    drawBox3D(ctx, cam, w, h, [6.8, 1.0, 4.5], [1.3, 0.75, 0.55], '#020617', '#0f172a', '#1e293b', '#64748b');
    drawPerson3D(ctx, cam, w, h, [6.8, 1.0, 4.8], {
      height: 1.68,
      clothesColor: '#1e293b',
      skinColor: '#d97706',
      posture: 'keyboard',
      label: opts.showLabels ? 'KEYS 1' : null,
      t: t
    });

    // 6. Keyboardist 2 (Synth / Pad)
    drawBox3D(ctx, cam, w, h, [7.9, 1.0, 4.5], [1.1, 0.85, 0.5], '#0f172a', '#1e1b4b', '#312e81', '#a855f7');
    drawPerson3D(ctx, cam, w, h, [7.9, 1.0, 4.8], {
      height: 1.70,
      clothesColor: '#334155',
      skinColor: '#d97706',
      posture: 'keyboard',
      label: opts.showLabels ? 'KEYS 2 (SYNTH)' : null,
      t: t
    });

    // 7. Saxophone Soloist (Front-Right of Stage)
    drawPerson3D(ctx, cam, w, h, [3.4, 1.0, 2.2], {
      height: 1.76,
      clothesColor: '#090d16',
      skinColor: '#d97706',
      posture: 'sax',
      label: opts.showLabels ? 'SAXOPHONE' : null,
      t: t
    });
  }

  // 3D Person & Instrument Figure Renderer
  function drawPerson3D(ctx, cam, w, h, pos, opts = {}) {
    const x = pos[0], y = pos[1], z = pos[2];
    const ht = opts.height || 1.7;
    const t = opts.t || 0;

    const basePr = project3D([x, y, z], cam, w, h);
    const headPr = project3D([x, y + ht, z], cam, w, h);
    if (!basePr || !headPr) return;

    const scale = headPr.scale;
    const pxHeight = Math.abs(basePr.sy - headPr.sy);
    const headR = Math.max(3, 0.12 * scale);
    const torsoW = Math.max(6, 0.24 * scale);

    // Head
    ctx.fillStyle = opts.skinColor || '#f59e0b';
    ctx.beginPath();
    ctx.arc(headPr.sx, headPr.sy + headR, headR, 0, Math.PI * 2);
    ctx.fill();

    // Body / Torso
    ctx.fillStyle = opts.clothesColor || '#1e293b';
    const shoulderY = headPr.sy + headR * 2.2;
    ctx.beginPath();
    ctx.roundRect(headPr.sx - torsoW * 0.5, shoulderY, torsoW, pxHeight * 0.48, 2);
    ctx.fill();

    // Legs
    const hipY = shoulderY + pxHeight * 0.48;
    const legH = basePr.sy - hipY;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(headPr.sx - torsoW * 0.42, hipY, torsoW * 0.35, legH);
    ctx.fillRect(headPr.sx + torsoW * 0.07, hipY, torsoW * 0.35, legH);

    // Instrument / Mic specifics based on posture
    if (opts.posture === 'wl1' || opts.posture === 'wl2') {
      // Wireless Mic in Hand
      const micX = headPr.sx + torsoW * 0.3;
      const micY = headPr.sy + headR * 1.8;
      ctx.fillStyle = '#64748b';
      ctx.fillRect(micX, micY, 3, 10);
      ctx.fillStyle = '#94a3b8';
      ctx.beginPath();
      ctx.arc(micX + 1.5, micY, 3, 0, Math.PI * 2);
      ctx.fill();

      // Raised arm in praise (WL 1)
      if (opts.posture === 'wl1') {
        const armWave = Math.sin(t * 1.5) * 4;
        ctx.strokeStyle = opts.clothesColor || '#1e293b';
        ctx.lineWidth = Math.max(2, 0.06 * scale);
        ctx.beginPath();
        ctx.moveTo(headPr.sx - torsoW * 0.45, shoulderY + 4);
        ctx.lineTo(headPr.sx - torsoW * 0.9 + armWave, headPr.sy - headR * 0.8);
        ctx.stroke();
      }
    } else if (opts.posture === 'singer') {
      // Straight Mic Stand
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(headPr.sx + 6, headPr.sy + headR * 1.5);
      ctx.lineTo(headPr.sx + 6, basePr.sy);
      ctx.stroke();
      // Round Base
      ctx.beginPath();
      ctx.ellipse(headPr.sx + 6, basePr.sy, 6, 2, 0, 0, Math.PI * 2);
      ctx.stroke();
    } else if (opts.posture === 'guitar' || opts.posture === 'acoustic') {
      // Guitar Body & Neck
      const gX = headPr.sx - 2;
      const gY = shoulderY + pxHeight * 0.25;
      ctx.fillStyle = opts.posture === 'guitar' ? '#ef4444' : '#b45309';
      ctx.beginPath();
      ctx.ellipse(gX, gY, torsoW * 0.55, torsoW * 0.32, -0.4, 0, Math.PI * 2);
      ctx.fill();
      // Guitar Neck
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(gX, gY);
      ctx.lineTo(gX - torsoW * 0.8, gY - torsoW * 0.6);
      ctx.stroke();
    } else if (opts.posture === 'bassist') {
      // Long Bass Neck
      const bX = headPr.sx - 2;
      const bY = shoulderY + pxHeight * 0.28;
      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.ellipse(bX, bY, torsoW * 0.5, torsoW * 0.28, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(bX, bY);
      ctx.lineTo(bX - torsoW * 1.0, bY - torsoW * 0.8);
      ctx.stroke();
    } else if (opts.posture === 'sax') {
      // Golden Saxophone
      const sX = headPr.sx + 4;
      const sY = headPr.sy + headR * 1.6;
      ctx.strokeStyle = '#eab308';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(sX, sY);
      ctx.lineTo(sX + 8, sY + 12);
      ctx.lineTo(sX + 14, sY + 10);
      ctx.stroke();
      // Sax Bell
      ctx.fillStyle = '#facc15';
      ctx.beginPath();
      ctx.arc(sX + 14, sY + 10, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Optional 3D Tag
    if (opts.label) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(headPr.sx - 24, headPr.sy - headR * 3 - 6, 48, 12);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(opts.label, headPr.sx, headPr.sy - headR * 3 + 3);
    }
  }

  // --- 4 AUDITORIUM UNNES CAMERA PERSPECTIVES ---
  // CAM 1: Tengah FOH ➔ Sorot Stage Depan (Wide Stage Master Shot)
  function drawCam1(ctx, w, h, t) {
    const cam = {
      x: 0,
      y: 1.9,
      z: -12.5,
      yaw: 0,
      pitch: -0.04,
      fov: 460
    };
    renderAuditoriumUNNES3D(ctx, cam, w, h, t);

    // Foreground FOH Console Lip Silhouette & Status Glow
    ctx.fillStyle = '#03050a';
    ctx.fillRect(w * 0.3, h * 0.86, w * 0.4, h * 0.14);
    ctx.fillStyle = '#00d2ff';
    ctx.fillRect(w * 0.38, h * 0.90, 16, 8);
    ctx.fillStyle = '#10b981';
    ctx.fillRect(w * 0.44, h * 0.89, 22, 10);
    ctx.fillStyle = '#ff3344';
    ctx.fillRect(w * 0.52, h * 0.90, 18, 8);
  }

  // CAM 2: Stage Mobile ➔ Sorot 2 WL & 3 Singer (Gimbal Wireless Pyro S)
  function drawCam2(ctx, w, h, t) {
    // Dynamic roving camera on stage floating with gimbal
    const mobX = -1.4 + Math.sin(t * 0.7) * 0.9;
    const mobY = 1.55 + Math.sin(t * 1.2) * 0.03;
    const mobZ = 0.6 + Math.cos(t * 0.5) * 0.4;
    const mobYaw = 0.22 + Math.sin(t * 0.5) * 0.08;

    const cam = {
      x: mobX,
      y: mobY,
      z: mobZ,
      yaw: mobYaw,
      pitch: 0.04,
      fov: 590 // Telephoto portrait compression
    };

    renderAuditoriumUNNES3D(ctx, cam, w, h, t, { skipAudience: true });

    // Golden Concert Rim Light & Bokeh Glare
    const rimGrad = ctx.createRadialGradient(w * 0.55, h * 0.25, 10, w * 0.55, h * 0.25, w * 0.45);
    rimGrad.addColorStop(0, 'rgba(251, 191, 36, 0.28)');
    rimGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rimGrad;
    ctx.fillRect(0, 0, w, h);
  }

  // CAM 3: Kiri Stage ➔ Sorot Jemaat Auditorium UNNES (Wireless Pyro H)
  function drawCam3(ctx, w, h, t) {
    // Stage Left Camera rotated ~150° looking out across the vast congregation hall
    const cam = {
      x: -7.5,
      y: 1.8,
      z: 2.2,
      yaw: 2.62, // Angled back into audience
      pitch: 0.08, // Looking slightly downward across seating
      fov: 430
    };
    renderAuditoriumUNNES3D(ctx, cam, w, h, t);

    // Warm stage side-fill wash spill on left edge
    const sideWash = ctx.createLinearGradient(0, 0, w * 0.35, h);
    sideWash.addColorStop(0, 'rgba(0, 210, 255, 0.25)');
    sideWash.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = sideWash;
    ctx.fillRect(0, 0, w * 0.4, h);
  }

  // CAM 4: Kanan Stage ➔ Sorot 7 Pemain Musik / Band (Wired A6000)
  function drawCam4(ctx, w, h, t) {
    // Stage Right Camera angled directly into the band setup (drums, bass, guitars, keys, sax)
    const cam = {
      x: 3.0,
      y: 1.7,
      z: 1.5,
      yaw: -0.74, // Angled into Stage Right band area
      pitch: -0.02,
      fov: 490
    };
    renderAuditoriumUNNES3D(ctx, cam, w, h, t, { skipAudience: true });

    // Spotlights highlighting instruments
    const bandSpot = ctx.createRadialGradient(w * 0.65, h * 0.4, 20, w * 0.65, h * 0.4, w * 0.6);
    bandSpot.addColorStop(0, 'rgba(245, 158, 11, 0.22)');
    bandSpot.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = bandSpot;
    ctx.fillRect(0, 0, w, h);
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
          state.pip = false;
        } else if (preset === 'band') {
          state.pgm = 4;
          state.pvw = 2;
          state.transEffect = 'MIX';
          state.transRate = 1.0;
          state.pip = false;
        } else if (preset === 'congregation') {
          state.pgm = 3;
          state.pvw = 1;
          state.transEffect = 'WIPE_H';
          state.pip = false;
        } else if (preset === 'sermon') {
          state.pgm = 2;
          state.pvw = 3;
          state.transEffect = 'MIX';
          state.pip = true;
          state.pipSrc = 3;
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

    // Mobile / Universal Navigation Drawer Controller
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerNavLinks = document.querySelectorAll('.drawer-nav-link');

    function openMobileDrawer() {
      if (mobileNavDrawer && mobileDrawerBackdrop) {
        mobileNavDrawer.classList.add('active');
        mobileDrawerBackdrop.classList.add('active');
        mobileNavDrawer.setAttribute('aria-hidden', 'false');
        mobileDrawerBackdrop.setAttribute('aria-hidden', 'false');
        if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMobileDrawer() {
      if (mobileNavDrawer && mobileDrawerBackdrop) {
        mobileNavDrawer.classList.remove('active');
        mobileDrawerBackdrop.classList.remove('active');
        mobileNavDrawer.setAttribute('aria-hidden', 'true');
        mobileDrawerBackdrop.setAttribute('aria-hidden', 'true');
        if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);
    drawerNavLinks.forEach((link) => {
      link.addEventListener('click', closeMobileDrawer);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNavDrawer && mobileNavDrawer.classList.contains('active')) {
        closeMobileDrawer();
        if (mobileMenuToggle) mobileMenuToggle.focus();
      }
    });

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
