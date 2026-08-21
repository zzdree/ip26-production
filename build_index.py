# -*- coding: utf-8 -*-
"""
IP26 Master Production & Broadcast Command Blueprint
Generates index.html with all enhanced modules:
1. Executive Telemetry & Intercom Matrix
2. 4 Broadcast CAMs + 3 Documentation Units + Sony Clean HDMI Cheat Sheet
3. 15-person Crew Directory with Division Filters
4. Interactive SVG System Architecture Schematic & Signal Tracer
5. 12-Line Signal Routing Matrix
6. Cinetreak Cinelive V1 Switcher Simulator + Virtual Tally Integration
7. 93+ Item Master Inventory Log + Official Equipment Handover Agreement (Berita Acara)
8. Rundown Media Asset Checklist + Master Stage Timer & Countdown Controller
9. Production Utilities: Display Test Patterns, Web Audio Tone Generator, Real-time Incident Logger
10. SOP & Fail-Safe Contingency Protocols
11. Fullscreen Crew Master Briefing Pitch Deck (8 Slides)
12. Fullscreen Virtual Mobile Stage Tally Light Box Modal
13. Mobile Floating Quick Navigation Dock
"""

import os

def generate_html():
    html_content = """<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
  <title>Ibadah Perdana UKK UNNES 2026 — Production & Broadcast Command</title>
  <meta name="description" content="Master Command Deck, Signal Routing Matrix, Live Switcher Simulator, Master Inventory Log & Crew Briefing App untuk Ibadah Perdana UKK UNNES 2026." />
  <meta name="theme-color" content="#111216" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220%200%20100%20100%22><text y=%22.9em%22 font-size=%2290%22>🎬</text></svg>">
  
  <!-- Premium Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       IP26 PRODUCTION & BROADCAST BLUEPRINT — INDUSTRIAL TACTILE DARK THEME
       ========================================================================== */
    :root {
      --bg-base: #111216;
      --bg-midnight: #15161b;
      --bg-surface: #1a1c22;
      --bg-surface-raised: #21232b;
      --bg-surface-elevated: #2a2c37;
      --bg-glass: rgba(22, 24, 30, 0.94);
      --bg-glass-card: rgba(27, 29, 37, 0.88);
      --bg-glass-hover: rgba(36, 39, 49, 0.95);

      --accent-white: #ffffff;
      --accent-cyan: #06b6d4;
      --accent-cyan-glow: rgba(6, 182, 212, 0.25);
      --accent-emerald: #10b981;
      --accent-emerald-glow: rgba(16, 185, 129, 0.25);
      --accent-amber: #f59e0b;
      --accent-amber-glow: rgba(245, 158, 11, 0.25);
      --accent-red: #ef4444;
      --accent-red-glow: rgba(239, 68, 68, 0.35);
      --accent-purple: #a855f7;

      --text-pure: #ffffff;
      --text-primary: #f3f4f6;
      --text-secondary: #a1a1aa;
      --text-muted: #71717a;
      --text-dark: #3f3f46;

      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-medium: rgba(255, 255, 255, 0.14);
      --border-strong: rgba(255, 255, 255, 0.24);

      --radius-xs: 6px;
      --radius-sm: 10px;
      --radius-md: 16px;
      --radius-lg: 24px;
      --radius-xl: 32px;

      --font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      --shadow-inset-top: inset 0 1px 0 rgba(255, 255, 255, 0.1);
      --shadow-card: 0 10px 30px -8px rgba(0, 0, 0, 0.6);
      --shadow-deep: 0 20px 50px -10px rgba(0, 0, 0, 0.85);

      --header-height: 68px;
      --transition-smooth: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 15px; scroll-behavior: smooth; color-scheme: dark; -webkit-text-size-adjust: 100%; }
    body {
      font-family: var(--font-body); background-color: var(--bg-base); color: var(--text-primary);
      line-height: 1.6; min-height: 100vh; overflow-x: hidden; position: relative;
      background-image:
        radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.03) 0%, transparent 45%),
        radial-gradient(circle at 90% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 45%),
        radial-gradient(circle at 50% 85%, rgba(255, 255, 255, 0.02) 0%, transparent 45%),
        linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 100% 100%, 36px 36px, 36px 36px;
    }

    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg-base); }
    ::-webkit-scrollbar-thumb { background: var(--bg-surface-elevated); border-radius: 9999px; border: 2px solid var(--bg-base); }
    ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

    h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); font-weight: 700; letter-spacing: -0.03em; color: var(--text-pure); line-height: 1.2; }
    .mono { font-family: var(--font-mono); }

    /* Header */
    .command-header {
      position: sticky; top: 0; z-index: 1000; height: var(--header-height);
      background: var(--bg-glass); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;
      padding: 0 1.5rem; transition: var(--transition-smooth);
    }
    .brand-cluster { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; min-width: 0; flex: 1; }
    .brand-logo-pill {
      display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;
      border-radius: var(--radius-sm); background: linear-gradient(135deg, #2a2c37, #15161b);
      border: 1px solid var(--border-medium); color: var(--accent-white); font-family: var(--font-mono);
      font-weight: 800; font-size: 1.05rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), var(--shadow-inset-top);
    }
    .brand-title-group { display: flex; flex-direction: column; min-width: 0; overflow: hidden; }
    .brand-main-heading { font-size: 0.98rem; font-weight: 700; display: flex; align-items: center; gap: 0.45rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text-pure); }
    .brand-sub-heading { font-size: 0.72rem; color: var(--text-secondary); font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .live-status-pill {
      display: inline-flex; align-items: center; gap: 0.35rem; font-family: var(--font-mono); font-size: 0.62rem; font-weight: 700;
      background: rgba(239, 68, 68, 0.12); color: var(--accent-red); padding: 0.15rem 0.45rem; border-radius: 9999px;
      border: 1px solid rgba(239, 68, 68, 0.35); flex-shrink: 0;
    }
    .pulsing-lamp { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-red); animation: pulseGlow 1.5s infinite; }
    @keyframes pulseGlow { 0% { transform: scale(0.9); opacity: 0.7; box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 70% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 0 7px rgba(239, 68, 68, 0); } 100% { transform: scale(0.9); opacity: 0.7; } }

    .header-nav { display: flex; align-items: center; gap: 0.15rem; background: rgba(18, 19, 24, 0.75); padding: 0.25rem 0.35rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); }
    .nav-link { color: var(--text-secondary); text-decoration: none; font-size: 0.78rem; font-weight: 600; padding: 0.35rem 0.6rem; border-radius: var(--radius-sm); transition: var(--transition-smooth); white-space: nowrap; }
    .nav-link:hover { color: var(--text-pure); background: rgba(255, 255, 255, 0.05); }
    .nav-link.active { color: var(--text-pure); background: var(--bg-surface-elevated); font-weight: 700; box-shadow: var(--shadow-inset-top); }

    .header-actions { display: flex; align-items: center; gap: 0.45rem; }
    .telemetry-clock { font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; color: #ffffff; background: var(--bg-surface); padding: 0.35rem 0.65rem; border-radius: var(--radius-xs); border: 1px solid var(--border-medium); letter-spacing: 0.05em; }

    /* Buttons */
    .btn-lux { display: inline-flex; align-items: center; justify-content: center; gap: 0.45rem; font-family: var(--font-body); font-weight: 600; font-size: 0.82rem; padding: 0.45rem 0.95rem; border-radius: var(--radius-sm); border: 1px solid transparent; cursor: pointer; text-decoration: none; transition: var(--transition-smooth); white-space: nowrap; touch-action: manipulation; }
    .btn-lux-primary { background: #ffffff; color: #111216; border-color: #ffffff; font-weight: 700; }
    .btn-lux-primary:hover { background: #e5e7eb; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(255, 255, 255, 0.2); }
    .btn-lux-red { background: var(--accent-red); color: #ffffff; border-color: var(--accent-red); font-weight: 700; }
    .btn-lux-red:hover { background: #dc2626; transform: translateY(-1px); box-shadow: 0 4px 14px var(--accent-red-glow); }
    .btn-lux-ghost { background: var(--bg-surface); color: var(--text-primary); border-color: var(--border-medium); }
    .btn-lux-ghost:hover { background: var(--bg-surface-raised); border-color: var(--border-strong); color: var(--text-pure); }
    .btn-lux-emerald { background: var(--accent-emerald); color: #ffffff; border-color: var(--accent-emerald); font-weight: 700; }
    .btn-lux-emerald:hover { background: #059669; }
    .btn-lux-amber { background: var(--accent-amber); color: #111216; border-color: var(--accent-amber); font-weight: 700; }
    .btn-lux-amber:hover { background: #d97706; }
    .btn-lux-sm { padding: 0.3rem 0.65rem; font-size: 0.76rem; border-radius: var(--radius-xs); min-height: 32px; }

    /* Layout */
    .master-layout { max-width: 1440px; margin: 0 auto; padding: 2rem 2rem 6rem; display: flex; flex-direction: column; gap: 3.5rem; }
    .section-block { scroll-margin-top: calc(var(--header-height) + 1.5rem); }
    .section-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.5rem; gap: 1rem; flex-wrap: wrap; }
    .section-tag { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); display: block; margin-bottom: 0.25rem; }
    .section-title { font-size: clamp(1.4rem, 2.5vw, 1.85rem); }
    .section-sub { font-size: 0.88rem; color: var(--text-secondary); max-width: 700px; margin-top: 0.25rem; }

    /* Badges */
    .glow-badge { display: inline-flex; align-items: center; gap: 0.35rem; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 9999px; border: 1px solid var(--border-medium); background: var(--bg-surface-raised); color: var(--text-primary); white-space: nowrap; }
    .glow-badge.emerald { background: rgba(16, 185, 129, 0.12); color: var(--accent-emerald); border-color: rgba(16, 185, 129, 0.35); }
    .glow-badge.red { background: rgba(239, 68, 68, 0.12); color: var(--accent-red); border-color: rgba(239, 68, 68, 0.35); }
    .glow-badge.amber { background: rgba(245, 158, 11, 0.12); color: var(--accent-amber); border-color: rgba(245, 158, 11, 0.35); }
    .glow-badge.cyan { background: rgba(6, 182, 212, 0.12); color: var(--accent-cyan); border-color: rgba(6, 182, 212, 0.35); }
    .glow-badge.purple { background: rgba(168, 85, 247, 0.12); color: var(--accent-purple); border-color: rgba(168, 85, 247, 0.35); }
    .glow-badge.white { background: rgba(255, 255, 255, 0.08); color: var(--text-pure); border-color: var(--border-medium); }

    /* Hero */
    .hero-banner { background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-midnight) 100%); border: 1px solid var(--border-medium); border-radius: var(--radius-xl); padding: clamp(1.5rem, 4vw, 3rem); box-shadow: var(--shadow-card), var(--shadow-inset-top); position: relative; overflow: hidden; }
    .hero-banner::before { content: ''; position: absolute; top: 0; right: 0; width: 450px; height: 450px; background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%); pointer-events: none; }
    .hero-inner-grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 2.5rem; align-items: center; }
    .hero-title-main { font-size: clamp(1.85rem, 4vw, 2.75rem); line-height: 1.15; margin-bottom: 1rem; }
    .hero-lead-text { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem; max-width: 680px; }
    .hero-buttons-row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }

    .telemetry-card-cluster { background: var(--bg-base); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.6); display: flex; flex-direction: column; gap: 0.85rem; }
    .telemetry-header-bar { display: flex; align-items: center; justify-content: space-between; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); padding-bottom: 0.6rem; border-bottom: 1px solid var(--border-subtle); letter-spacing: 0.06em; font-weight: 700; }
    .telemetry-row { display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; }
    .telemetry-key { color: var(--text-secondary); }
    .telemetry-val { font-family: var(--font-mono); font-weight: 700; color: var(--text-pure); }

    /* KPI Deck */
    .kpi-deck { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
    .kpi-unit { background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 1.25rem; display: flex; align-items: center; gap: 1rem; box-shadow: var(--shadow-card), var(--shadow-inset-top); transition: var(--transition-smooth); }
    .kpi-unit:hover { transform: translateY(-2px); border-color: var(--border-strong); background: var(--bg-surface-raised); }
    .kpi-symbol-box { width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--bg-midnight); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4); }
    .kpi-figure { font-family: var(--font-mono); font-size: 1.65rem; font-weight: 800; color: var(--text-pure); line-height: 1; }
    .kpi-desc { font-size: 0.76rem; color: var(--text-secondary); margin-top: 0.3rem; }

    /* Cards */
    .crew-deck-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.15rem; }
    .glass-card { background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; gap: 1rem; box-shadow: var(--shadow-card), var(--shadow-inset-top); transition: var(--transition-smooth); }
    .glass-card:hover { transform: translateY(-2px); border-color: var(--border-strong); background: var(--bg-surface-raised); }
    .card-top-row { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.4rem; }
    .card-main-title { font-weight: 700; font-size: 1.05rem; color: var(--text-pure); }
    .card-subtitle-role { font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.55rem; }
    .card-tech-chip { font-family: var(--font-mono); font-size: 0.72rem; color: #ffffff; background: var(--bg-midnight); padding: 0.35rem 0.55rem; border-radius: var(--radius-xs); border: 1px solid var(--border-subtle); margin-bottom: 0.65rem; line-height: 1.4; }
    .card-body-text { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }
    .card-bottom-row { display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono); padding-top: 0.65rem; border-top: 1px solid var(--border-subtle); }

    /* Filter Pills */
    .chip-filter-row { display: flex; gap: 0.45rem; align-items: center; flex-wrap: wrap; }
    .filter-pill { font-family: var(--font-body); font-size: 0.78rem; font-weight: 600; padding: 0.35rem 0.8rem; border-radius: 9999px; background: var(--bg-surface); border: 1px solid var(--border-medium); color: var(--text-secondary); cursor: pointer; transition: var(--transition-smooth); }
    .filter-pill:hover { color: var(--text-pure); border-color: var(--border-strong); background: var(--bg-surface-raised); }
    .filter-pill.active { background: var(--text-pure); color: var(--bg-base); font-weight: 700; border-color: var(--text-pure); box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2); }

    /* Sony Cheat Sheet */
    .cheat-sheet-box {
      background: var(--bg-midnight); border: 1px solid var(--border-medium); border-radius: var(--radius-md);
      padding: 1.25rem; margin-top: 1.5rem; box-shadow: var(--shadow-card);
    }
    .cheat-sheet-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem; }
    .cheat-unit { background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 0.85rem; }
    .cheat-title { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 0.3rem; }
    .cheat-val { font-size: 0.95rem; font-weight: 700; color: var(--text-pure); }
    .cheat-desc { font-size: 0.76rem; color: var(--text-secondary); margin-top: 0.25rem; }

    /* SVG Schematic Section */
    .schematic-wrapper {
      background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-lg);
      padding: clamp(1rem, 2.5vw, 1.75rem); box-shadow: var(--shadow-card), var(--shadow-inset-top);
      margin-bottom: 2rem; position: relative; overflow: hidden;
    }
    .schematic-svg-canvas { width: 100%; height: auto; min-height: 480px; display: block; border-radius: var(--radius-sm); background: #0c0d11; border: 1px solid var(--border-subtle); }
    .schematic-node { cursor: pointer; transition: transform 0.2s ease; }
    .schematic-node:hover rect { stroke: #ffffff; stroke-width: 2.5px; filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4)); }
    .schematic-node.active rect { stroke: var(--accent-emerald); stroke-width: 3px; filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.5)); }
    .schematic-wire { stroke-linecap: round; transition: stroke-width 0.2s ease, stroke 0.2s ease; }
    .schematic-wire.highlight { stroke-width: 3.5px !important; filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.6)); }
    .schematic-wire.pulse { stroke-dasharray: 8, 8; animation: wireDash 1s linear infinite; }
    @keyframes wireDash { to { stroke-dashoffset: -16; } }

    .schematic-inspector-card {
      background: var(--bg-midnight); border: 1px solid var(--border-medium); border-radius: var(--radius-md);
      padding: 1rem 1.25rem; margin-top: 1rem; display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 1rem;
    }

    /* Pipelines */
    .pipeline-container { background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-md); margin-bottom: 1.15rem; box-shadow: var(--shadow-card), var(--shadow-inset-top); overflow: hidden; transition: var(--transition-smooth); }
    .pipeline-container:hover { border-color: var(--border-strong); }
    .pipeline-top-bar { display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 1.25rem; background: var(--bg-surface-raised); border-bottom: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 0.5rem; }
    .pipeline-title-cluster { display: flex; align-items: center; gap: 0.65rem; }
    .pipeline-name { font-weight: 700; font-size: 0.98rem; color: var(--text-pure); }
    .pipeline-chain-flow { padding: 1.15rem 1.25rem; display: flex; align-items: center; gap: 0.6rem; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .pipeline-chain-flow::-webkit-scrollbar { height: 4px; }
    .pipeline-chain-flow::-webkit-scrollbar-thumb { background: var(--bg-surface-elevated); border-radius: 9999px; }
    .pipeline-node { background: var(--bg-midnight); border: 1px solid var(--border-subtle); padding: 0.4rem 0.75rem; border-radius: var(--radius-xs); font-family: var(--font-mono); font-size: 0.78rem; white-space: nowrap; color: var(--text-primary); flex-shrink: 0; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4); }
    .pipeline-arrow { color: #ffffff; font-weight: 800; font-size: 0.9rem; flex-shrink: 0; }
    .pipeline-desc-box { padding: 0.85rem 1.25rem 1.15rem; font-size: 0.84rem; color: var(--text-secondary); border-top: 1px solid var(--border-subtle); background: var(--bg-base); line-height: 1.6; }

    /* Switcher Simulator */
    .switcher-master-deck { display: grid; grid-template-columns: 1.55fr 1fr; gap: 1.5rem; }
    .multiview-theater { background: #08090b; border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem; box-shadow: var(--shadow-deep); }
    .multiview-quad-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .camera-slot { position: relative; aspect-ratio: 16/9; background: #000000; border: 2px solid var(--border-subtle); border-radius: var(--radius-xs); overflow: hidden; cursor: pointer; transition: var(--transition-smooth); }
    .camera-slot:hover { border-color: var(--border-strong); }
    .camera-slot.active-pgm { border-color: var(--accent-red); box-shadow: 0 0 16px var(--accent-red-glow); }
    .camera-slot.active-pvw { border-color: var(--accent-emerald); box-shadow: 0 0 16px var(--accent-emerald-glow); }
    .slot-id-badge { position: absolute; top: 8px; left: 8px; font-family: var(--font-mono); font-size: 0.65rem; font-weight: 700; background: rgba(0, 0, 0, 0.75); padding: 0.15rem 0.45rem; border-radius: 4px; color: #ffffff; z-index: 10; border: 1px solid rgba(255, 255, 255, 0.15); backdrop-filter: blur(4px); }
    .slot-tally-lamp { position: absolute; top: 8px; right: 8px; width: 10px; height: 10px; border-radius: 50%; background: #3f3f46; z-index: 10; border: 1px solid rgba(255, 255, 255, 0.2); }
    .slot-tally-lamp.pgm { background: var(--accent-red); box-shadow: 0 0 10px var(--accent-red); animation: pulseGlow 1.2s infinite; }
    .slot-tally-lamp.pvw { background: var(--accent-emerald); box-shadow: 0 0 10px var(--accent-emerald); }

    .master-screens-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .screen-housing { position: relative; aspect-ratio: 16/9; background: #000000; border-radius: var(--radius-xs); overflow: hidden; }
    .screen-housing.pgm-live { border: 2px solid var(--accent-red); box-shadow: 0 0 18px var(--accent-red-glow); }
    .screen-housing.pvw-live { border: 2px solid var(--accent-emerald); box-shadow: 0 0 18px var(--accent-emerald-glow); }
    .screen-header-tag { position: absolute; bottom: 8px; left: 8px; font-family: var(--font-mono); font-size: 0.68rem; font-weight: 800; padding: 0.15rem 0.5rem; border-radius: 4px; color: #ffffff; z-index: 10; }
    .screen-header-tag.red { background: var(--accent-red); }
    .screen-header-tag.green { background: var(--accent-emerald); }

    .control-console-deck { background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 1.25rem; display: flex; flex-direction: column; gap: 1.25rem; box-shadow: var(--shadow-card), var(--shadow-inset-top); }
    .bus-title-label { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.6rem; color: var(--text-secondary); display: flex; align-items: center; justify-content: space-between; }
    .bus-grid-buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
    .btn-tactile-bus { height: 46px; border-radius: var(--radius-xs); border: 1px solid var(--border-medium); background: var(--bg-midnight); color: var(--text-secondary); font-family: var(--font-mono); font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: var(--transition-smooth); display: flex; align-items: center; justify-content: center; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5); touch-action: manipulation; }
    .btn-tactile-bus:hover { color: var(--text-pure); border-color: var(--border-strong); background: var(--bg-surface-raised); }
    .btn-tactile-bus.pgm-selected { background: var(--accent-red); color: #ffffff; border-color: var(--accent-red); box-shadow: 0 0 14px var(--accent-red-glow), inset 0 1px 0 rgba(255, 255, 255, 0.3); font-weight: 800; }
    .btn-tactile-bus.pvw-selected { background: var(--accent-emerald); color: #ffffff; border-color: var(--accent-emerald); box-shadow: 0 0 14px var(--accent-emerald-glow), inset 0 1px 0 rgba(255, 255, 255, 0.3); font-weight: 800; }

    .transition-split { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
    .btn-cut-action { height: 50px; background: linear-gradient(180deg, #ef4444, #b91c1c); color: #ffffff; font-family: var(--font-mono); font-weight: 800; font-size: 0.92rem; border-radius: var(--radius-xs); border: 1px solid #f87171; cursor: pointer; transition: var(--transition-smooth); box-shadow: 0 4px 15px var(--accent-red-glow), inset 0 1px 0 rgba(255, 255, 255, 0.3); touch-action: manipulation; }
    .btn-cut-action:hover { filter: brightness(1.15); transform: translateY(-1px); }
    .btn-cut-action:active { transform: translateY(1px); }
    .btn-auto-action { height: 50px; background: linear-gradient(180deg, #374151, #1f2937); color: #ffffff; font-family: var(--font-mono); font-weight: 800; font-size: 0.92rem; border-radius: var(--radius-xs); border: 1px solid var(--border-strong); cursor: pointer; transition: var(--transition-smooth); box-shadow: var(--shadow-card), inset 0 1px 0 rgba(255, 255, 255, 0.2); touch-action: manipulation; }
    .btn-auto-action:hover { background: #4b5563; }

    .audio-vu-meter-rack { display: flex; align-items: center; justify-content: space-around; background: var(--bg-base); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); }
    .vu-column { display: flex; flex-direction: column; align-items: center; gap: 0.35rem; }
    .vu-bar-housing { width: 14px; height: 80px; background: #0a0b0d; border-radius: 4px; border: 1px solid var(--border-subtle); position: relative; overflow: hidden; display: flex; flex-direction: column-reverse; }
    .vu-fill-meter { width: 100%; background: linear-gradient(0deg, #10b981 0%, #10b981 70%, #f59e0b 85%, #ef4444 100%); transition: height 0.08s ease; }
    .vu-channel-text { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); font-weight: 700; }

    /* Inventory & Tables */
    .inventory-master-panel { background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: clamp(1.15rem, 2.5vw, 1.75rem); box-shadow: var(--shadow-card), var(--shadow-inset-top); }
    .inventory-toolbar-cluster { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.25rem; flex-wrap: wrap; }
    .search-bar-wrap { position: relative; flex: 1; min-width: 240px; }
    .search-icon-pos { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none; font-size: 0.85rem; }
    .glass-input { width: 100%; background: var(--bg-midnight); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); padding: 0.65rem 1rem 0.65rem 2.5rem; font-family: var(--font-body); font-size: 0.85rem; color: var(--text-pure); transition: var(--transition-smooth); outline: none; }
    .glass-input:focus { border-color: var(--text-pure); box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.15); background: var(--bg-surface-raised); }

    .table-scroll-wrapper { width: 100%; overflow-x: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); }
    .modern-dark-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left; min-width: 620px; }
    .modern-dark-table th { background: var(--bg-surface); color: var(--text-secondary); font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; padding: 0.8rem 1rem; border-bottom: 1px solid var(--border-medium); }
    .modern-dark-table td { padding: 0.8rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-primary); }
    .modern-dark-table tr:hover td { background: rgba(255, 255, 255, 0.03); }

    .custom-check-box { appearance: none; width: 20px; height: 20px; border: 2px solid var(--border-medium); border-radius: 6px; background: var(--bg-surface-raised); cursor: pointer; position: relative; display: inline-block; vertical-align: middle; transition: var(--transition-smooth); box-shadow: var(--shadow-inset-top); touch-action: manipulation; }
    .custom-check-box:checked { background: var(--accent-emerald); border-color: var(--accent-emerald); }
    .custom-check-box:checked::after { content: '✓'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #ffffff; font-weight: 900; font-size: 12px; }

    /* Stage Timekeeper */
    .timekeeper-glass-banner { background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: clamp(1.15rem, 3vw, 1.85rem); margin-bottom: 1.75rem; box-shadow: var(--shadow-card), var(--shadow-inset-top); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.25rem; }
    .time-digits-giant { font-family: var(--font-mono); font-size: clamp(2.4rem, 6vw, 4rem); font-weight: 800; color: #ffffff; line-height: 1; transition: color 0.3s ease; }
    .time-digits-giant.warning { color: var(--accent-amber); text-shadow: 0 0 15px var(--accent-amber-glow); }
    .time-digits-giant.overtime { color: var(--accent-red); text-shadow: 0 0 20px var(--accent-red-glow); animation: pulseGlow 1s infinite; }
    .phase-subhead { display: flex; align-items: center; gap: 0.65rem; margin-bottom: 1rem; padding-bottom: 0.45rem; border-bottom: 1px solid var(--border-subtle); }
    .phase-headline { font-size: 1.15rem; color: #ffffff; }

    /* Tools */
    .tools-split-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .pattern-canvas-frame { width: 100%; aspect-ratio: 16/9; border: 1px solid var(--border-medium); border-radius: var(--radius-sm); background: #000000; display: block; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6); }

    /* Incident Logger */
    .incident-log-row { display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); font-size: 0.82rem; }
    .incident-log-row:last-child { border-bottom: none; }

    /* Modals */
    .deck-modal { display: none; position: fixed; inset: 0; z-index: 99999; background: #0d0e12; color: #ffffff; flex-direction: column; }
    .deck-modal.active { display: flex; }
    .deck-top-nav { height: 60px; background: rgba(18, 19, 25, 0.95); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; padding: 0 clamp(1rem, 3vw, 2rem); gap: 0.75rem; }
    .deck-slide-stage { flex: 1; display: flex; align-items: center; justify-content: center; padding: clamp(1.25rem, 4vw, 2.5rem) clamp(1rem, 4vw, 3.5rem); position: relative; overflow-y: auto; }
    .deck-slide-unit { display: none; width: 100%; max-width: 1200px; animation: deckFade 0.35s ease; }
    .deck-slide-unit.active { display: block; }
    @keyframes deckFade { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
    .deck-bottom-nav { height: 60px; background: rgba(18, 19, 25, 0.95); border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; padding: 0 clamp(1rem, 3vw, 2rem); gap: 0.75rem; flex-wrap: wrap; }

    /* Virtual Tally Light Fullscreen Box */
    .tally-fullscreen-modal { display: none; position: fixed; inset: 0; z-index: 999999; background: #0b0c10; color: #ffffff; flex-direction: column; }
    .tally-fullscreen-modal.active { display: flex; }
    .tally-header-ctrl { height: 64px; background: rgba(18, 19, 25, 0.9); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; padding: 0 1.25rem; }
    .tally-stage-screen { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center; transition: background-color 0.15s ease; position: relative; }
    .tally-stage-screen.pgm { background: #b91c1c; color: #ffffff; animation: tallyFlash 0.3s ease; }
    .tally-stage-screen.pvw { background: #065f46; color: #ffffff; }
    .tally-stage-screen.standby { background: #111216; color: var(--text-secondary); }
    @keyframes tallyFlash { 0% { filter: brightness(2); } 100% { filter: brightness(1); } }
    .tally-gigantic-id { font-family: var(--font-display); font-size: clamp(3.5rem, 15vw, 9rem); font-weight: 900; line-height: 0.9; margin-bottom: 1rem; }
    .tally-status-label { font-family: var(--font-mono); font-size: clamp(1.2rem, 4vw, 2.5rem); font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }

    /* Equipment Handover Modal */
    .handover-modal-dialog { display: none; position: fixed; inset: 0; z-index: 99999; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px); align-items: center; justify-content: center; padding: 1rem; }
    .handover-modal-dialog.active { display: flex; }
    .handover-paper-card { background: #ffffff; color: #111216; width: 100%; max-width: 850px; max-height: 90vh; border-radius: var(--radius-md); overflow-y: auto; padding: 2.5rem; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8); }

    /* Mobile Floating Dock */
    .mobile-floating-dock { display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000; background: rgba(18, 19, 25, 0.95); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-top: 1px solid var(--border-medium); padding: 0.45rem 0.4rem calc(0.45rem + env(safe-area-inset-bottom)); justify-content: space-around; box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.7); }
    .dock-btn { display: flex; flex-direction: column; align-items: center; gap: 0.15rem; color: var(--text-secondary); text-decoration: none; font-size: 0.65rem; font-weight: 600; transition: var(--transition-smooth); padding: 0.3rem 0.45rem; border-radius: var(--radius-xs); touch-action: manipulation; }
    .dock-btn.active { color: #ffffff; background: rgba(255, 255, 255, 0.08); font-weight: 700; }
    .dock-symbol { font-size: 1.1rem; }

    /* Responsive */
    @media (max-width: 1024px) {
      .hero-inner-grid { grid-template-columns: 1fr; gap: 2rem; }
      .switcher-master-deck { grid-template-columns: 1fr; }
      .tools-split-layout { grid-template-columns: 1fr; }
      .header-nav { display: none; }
    }

    @media (max-width: 768px) {
      :root { --header-height: 58px; }
      .command-header { padding: 0 0.85rem; }
      .brand-logo-pill { width: 34px; height: 34px; font-size: 0.88rem; border-radius: 8px; }
      .brand-main-heading { font-size: 0.85rem; }
      .brand-sub-heading { font-size: 0.68rem; }
      .telemetry-clock { display: none; }
      .header-actions { gap: 0.4rem; }
      .btn-pres-text { display: none; }
      .btn-lux-sm { padding: 0.3rem 0.55rem; min-height: 32px; font-size: 0.74rem; }
      .master-layout { padding: 1.15rem 0.85rem 5.5rem; gap: 2.5rem; }
      .hero-banner { border-radius: var(--radius-lg); padding: 1.35rem 1rem; }
      .hero-title-main { font-size: 1.65rem; }
      .hero-buttons-row { width: 100%; }
      .hero-buttons-row .btn-lux { width: 100%; }
      .mobile-floating-dock { display: flex; }
      .kpi-deck { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
      .kpi-unit { padding: 0.9rem; }
      .kpi-figure { font-size: 1.4rem; }
      .kpi-symbol-box { width: 40px; height: 40px; font-size: 1.2rem; }
      .crew-deck-grid { grid-template-columns: 1fr; }
      .master-screens-row { grid-template-columns: 1fr; }
      .deck-bottom-nav { height: auto; padding: 0.65rem 0.85rem; }
      .deck-bottom-nav > div:last-child { display: none; }
      .pipeline-top-bar { padding: 0.8rem 0.9rem; }
      .pipeline-chain-flow { padding: 0.9rem; }
      .pipeline-desc-box { padding: 0.7rem 0.9rem 0.9rem; }
      .timekeeper-glass-banner { padding: 1.15rem 1rem; }
      .time-digits-giant { font-size: 2.6rem; }
      .chip-filter-row { flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 0.4rem; }
      .chip-filter-row::-webkit-scrollbar { display: none; }
      .filter-pill { flex-shrink: 0; }
    }

    @media (max-width: 480px) {
      .kpi-deck { grid-template-columns: 1fr; }
      .bus-grid-buttons { grid-template-columns: repeat(2, 1fr); }
      .btn-tactile-bus { height: 42px; }
      .inventory-toolbar-cluster { flex-direction: column; align-items: stretch; }
      .search-bar-wrap { width: 100%; min-width: 0; }
      .glass-input { width: 100%; }
    }

    /* Print Styles */
    @media print {
      body { background: #ffffff !important; color: #000000 !important; }
      .command-header, .mobile-floating-dock, .hero-buttons-row, .header-actions, .chip-filter-row, .inventory-toolbar-cluster, .btn-lux, #btn-open-presentation { display: none !important; }
      .master-layout { padding: 0 !important; }
      .glass-card, .pipeline-container, .inventory-master-panel { border: 1px solid #ccc !important; box-shadow: none !important; background: #fff !important; color: #000 !important; }
      .modern-dark-table th { background: #eee !important; color: #000 !important; }
      .modern-dark-table td { color: #000 !important; border-bottom: 1px solid #ddd !important; }
      .handover-paper-card { max-height: none !important; box-shadow: none !important; padding: 0 !important; width: 100% !important; }
    }
  </style>
</head>
<body>

  <!-- Top Sticky Command HUD -->
  <header class="command-header">
    <a href="#hero" class="brand-cluster">
      <div class="brand-logo-pill">IP26</div>
      <div class="brand-title-group">
        <div class="brand-main-heading">
          <span>IP26 UKK UNNES</span>
          <span class="live-status-pill">
            <span class="pulsing-lamp"></span> LIVE OPS READY
          </span>
        </div>
        <div class="brand-sub-heading">Auditorium UNNES • Production & Broadcast Command</div>
      </div>
    </a>

    <!-- Adaptive Navigation Bar (Desktop) -->
    <nav class="header-nav">
      <a href="#overview" class="nav-link active">Overview</a>
      <a href="#cameras" class="nav-link">Kamera</a>
      <a href="#crew" class="nav-link">Crew PIC</a>
      <a href="#routing" class="nav-link">Routing</a>
      <a href="#switcher" class="nav-link">Switcher</a>
      <a href="#inventory" class="nav-link">Inventaris</a>
      <a href="#rundown" class="nav-link">Rundown</a>
      <a href="#tools" class="nav-link">Tools</a>
      <a href="#sop" class="nav-link">SOP</a>
    </nav>

    <!-- Header Actions -->
    <div class="header-actions">
      <div class="telemetry-clock" id="live-event-clock">00:00:00</div>
      <button class="btn-lux btn-lux-red btn-lux-sm" id="btn-open-tally-modal" title="Buka Tally Light Fullscreen (Khusus Operator Kamera)">
        <span>📱</span>
        <span class="btn-pres-text">Tally Box</span>
      </button>
      <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-open-handover-modal" title="Buka Surat Berita Acara Peminjaman Alat">
        <span>📝</span>
        <span class="btn-pres-text">Berita Acara</span>
      </button>
      <button class="btn-lux btn-lux-primary btn-lux-sm" id="btn-open-presentation" title="Buka Mode Presentasi (Pitch Deck)">
        <span>📽️</span>
        <span class="btn-pres-text">Presentasi</span>
      </button>
      <a href="https://github.com/zzdree/ip26-production" target="_blank" rel="noopener" class="btn-lux btn-lux-ghost btn-lux-sm" title="GitHub Repository">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      </a>
    </div>
  </header>

  <!-- Master Landing Wrapper -->
  <main class="master-layout">

    <!-- 1. HERO COMMAND BANNER -->
    <section class="section-block" id="hero">
      <div class="hero-banner">
        <div class="hero-inner-grid">
          <div>
            <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1rem;">
              <span class="glow-badge white">UKK UNNES 2026</span>
              <span class="glow-badge emerald">OPERATIONAL READY</span>
              <span class="glow-badge amber">AUDITORIUM UNNES</span>
            </div>
            <h1 class="hero-title-main">
              Production & Broadcast Command Blueprint
            </h1>
            <p class="hero-lead-text">
              Pusat kendali komprehensif siaran langsung: konfigurasi 4-kamera broadcast (Dual Wireless Hollyland Pyro S & Pyro H), integrasi audio FOH Yamaha QL5 & Submix NewBaxs CT80S, visual stage mapping Resolume Arena & ProPresenter 7, serta master log inventaris peminjaman alat.
            </p>
            <div class="hero-buttons-row">
              <a href="#switcher" class="btn-lux btn-lux-red">
                ⚡ Uji Switcher & Multiview
              </a>
              <a href="#routing" class="btn-lux btn-lux-ghost">
                📡 Cek Jalur Kabel & Routing
              </a>
              <button class="btn-lux btn-lux-amber" onclick="document.getElementById('btn-open-tally-modal').click()">
                📱 Tally Box Operator
              </button>
              <button class="btn-lux btn-lux-primary" onclick="document.getElementById('btn-open-presentation').click()">
                📽️ Slide Presentasi Kru
              </button>
            </div>
          </div>

          <div class="telemetry-card-cluster">
            <div class="telemetry-header-bar">
              <span>SYSTEM TELEMETRY SUMMARY</span>
              <span style="color:var(--accent-emerald);">● ACTIVE</span>
            </div>
            <div class="telemetry-row">
              <span class="telemetry-key">Broadcast Switcher</span>
              <span class="telemetry-val">Cinetreak V1 (4CH)</span>
            </div>
            <div class="telemetry-row">
              <span class="telemetry-key">Audio Pipeline</span>
              <span class="telemetry-val">Yamaha QL5 + CT80S</span>
            </div>
            <div class="telemetry-row">
              <span class="telemetry-key">Wireless Transmission</span>
              <span class="telemetry-val" style="color:var(--accent-amber);">Pyro S & Pyro H (5.8GHz)</span>
            </div>
            <div class="telemetry-row">
              <span class="telemetry-key">Stage Timekeeper</span>
              <span class="telemetry-val" style="color:var(--accent-emerald);">ProPresenter 3 TV</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. EXECUTIVE OVERVIEW & KPI METRICS -->
    <section class="section-block" id="overview">
      <div class="section-head">
        <div>
          <span class="section-tag">01 • Executive Metrics</span>
          <h2 class="section-title">Ringkasan Kapasitas Sistem</h2>
          <p class="section-sub">Parameter operasional dan kesiapan perangkat broadcast di lokasi acara.</p>
        </div>
        <span class="glow-badge emerald">Semua Modul Aktif</span>
      </div>

      <div class="kpi-deck">
        <div class="kpi-unit">
          <div class="kpi-symbol-box">🎥</div>
          <div>
            <div class="kpi-figure">4 CAM</div>
            <div class="kpi-desc">2 Wireless + 2 Tethered</div>
          </div>
        </div>
        <div class="kpi-unit">
          <div class="kpi-symbol-box">📦</div>
          <div>
            <div class="kpi-figure" id="kpi-inv-total">93 Item</div>
            <div class="kpi-desc">Inventaris Log Terdata</div>
          </div>
        </div>
        <div class="kpi-unit">
          <div class="kpi-symbol-box">⚡</div>
          <div>
            <div class="kpi-figure">12 Line</div>
            <div class="kpi-desc">Jalur Sinyal Terintegrasi</div>
          </div>
        </div>
        <div class="kpi-unit">
          <div class="kpi-symbol-box">👥</div>
          <div>
            <div class="kpi-figure">15 Kru</div>
            <div class="kpi-desc">Divisi Teknis & Dokumentasi</div>
          </div>
        </div>
      </div>

      <!-- Quick Intercom Channel Matrix -->
      <div class="inventory-master-panel" style="margin-top:1.5rem;">
        <div class="section-tag">COMMUNICATION MATRIX (INTERCOM SYSTEM)</div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.85rem; margin-top:0.75rem;">
          <div class="cheat-unit">
            <div class="cheat-title">CHANNEL 1 (CH 1)</div>
            <div class="cheat-val">Broadcast & Cameras</div>
            <div class="cheat-desc">Alex (CAM 1), Kiel (CAM 2), Dewi (CAM 3), Nathania (CAM 4), Switcher (Wilfred).</div>
          </div>
          <div class="cheat-unit">
            <div class="cheat-title">CHANNEL 2 (CH 2)</div>
            <div class="cheat-val">Documentation Team</div>
            <div class="cheat-desc">Nico (Photo), Joel (Cinematic Video), Jennifer (Social Media/Reels).</div>
          </div>
          <div class="cheat-unit">
            <div class="cheat-title">CHANNEL 3 (CH 3)</div>
            <div class="cheat-val">Media & LED Operators</div>
            <div class="cheat-desc">Rania (Pro 1), Filia (Pro 2), Bayu/Andreas (Resolume), Darrel (Timekeeper).</div>
          </div>
          <div class="cheat-unit">
            <div class="cheat-title">CHANNEL 4 (CH 4)</div>
            <div class="cheat-val">Audio Engineers</div>
            <div class="cheat-desc">Jordan & Yosua (Virtual Mixer 1 & 2), FOH Sound, OBS Audio Feed.</div>
          </div>
          <div class="cheat-unit" style="border-color:var(--accent-red);">
            <div class="cheat-title" style="color:var(--accent-red);">MASTER CHANNEL</div>
            <div class="cheat-val">Director / Lead Eng</div>
            <div class="cheat-desc">Andreas (Technical Director) & Producer Command Over-ride.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. BROADCAST & DOCUMENTATION CAMERAS -->
    <section class="section-block" id="cameras">
      <div class="section-head">
        <div>
          <span class="section-tag">02 • Camera Rigging & Setup</span>
          <h2 class="section-title">Konfigurasi Kamera & Lensa</h2>
          <p class="section-sub">Spesifikasi 4 kamera broadcast live stream (Dual Wireless) dan 3 unit kamera dokumentasi terpisah.</p>
        </div>
        <span class="glow-badge white">Dual Wireless + Sony System</span>
      </div>

      <!-- Broadcast 4-CAM Cards -->
      <div class="crew-deck-grid" style="margin-bottom:1.5rem;">
        <div class="glass-card">
          <div>
            <div class="card-top-row">
              <span class="card-main-title">CAM 1 — Center Long Shot</span>
              <span class="glow-badge white">ALEX</span>
            </div>
            <div class="card-subtitle-role">Sony ZV-E10 + Lens 18-105mm F4 G OSS</div>
            <div class="card-tech-chip">Hollyland Pyro S Wireless (TX/RX) • Stand Lighting Small • HDMI 1.5M • Tripod Big</div>
            <div class="card-body-text">Main Long-shot & Stage Master framing. Sinyal dikirim via transmisi nirkabel Hollyland Pyro S ke Input 1 Switcher Cinetreak V1.</div>
          </div>
          <div class="card-bottom-row">
            <span>FOH Center Deck</span>
            <span style="color:#ffffff; font-weight:700;">5.8GHz Pyro S Wireless</span>
          </div>
        </div>

        <div class="glass-card">
          <div>
            <div class="card-top-row">
              <span class="card-main-title">CAM 2 — Roving Wireless</span>
              <span class="glow-badge amber">KIEL 1</span>
            </div>
            <div class="card-subtitle-role">Sony ZV-E10 + Lens 18-105mm F4 G OSS</div>
            <div class="card-tech-chip">Hollyland Pyro H Wireless Kit (TX/RX) • Stand Lighting Small • HDMI 1.5M</div>
            <div class="card-body-text">Wireless roving camera untuk close-up WL, Singer, dan interaksi jemaat dengan transmisi 5.8GHz ultra-low latency.</div>
          </div>
          <div class="card-bottom-row">
            <span>Altar Stage Front</span>
            <span style="color:var(--accent-amber); font-weight:700;">5.8GHz Pyro H Wireless</span>
          </div>
        </div>

        <div class="glass-card">
          <div>
            <div class="card-top-row">
              <span class="card-main-title">CAM 3 — Left Wing Angle</span>
              <span class="glow-badge white">DEWI</span>
            </div>
            <div class="card-subtitle-role">Sony A6000 + Lens 18-105mm F4 G OSS</div>
            <div class="card-tech-chip">HDMI 10M Line • Micro-HDMI Converter • Tripod Big</div>
            <div class="card-body-text">Stage left medium & profile shot, speaker cross-angle framing langsung ke Cinetreak V1 Input 3.</div>
          </div>
          <div class="card-bottom-row">
            <span>Wing House Left</span>
            <span style="color:var(--accent-emerald); font-weight:700;">1080p60 HDMI</span>
          </div>
        </div>

        <div class="glass-card">
          <div>
            <div class="card-top-row">
              <span class="card-main-title">CAM 4 — Right Wing Angle</span>
              <span class="glow-badge white">NATHANIA</span>
            </div>
            <div class="card-subtitle-role">Sony A6000 + Lens 16-50mm Kit OSS</div>
            <div class="card-tech-chip">HDMI 10M Line • Micro-HDMI Converter • Tripod Big</div>
            <div class="card-body-text">Stage right wide angle, coverage worship team & instrumen musik panggung ke Input 4 Switcher.</div>
          </div>
          <div class="card-bottom-row">
            <span>Wing House Right</span>
            <span style="color:var(--accent-emerald); font-weight:700;">1080p60 HDMI</span>
          </div>
        </div>
      </div>

      <!-- Documentation Dedicated Row -->
      <div class="glass-card" style="background:var(--bg-surface);">
        <div class="card-top-row" style="margin-bottom:1.25rem;">
          <div>
            <h3 style="font-size:1.15rem; font-weight:700;">📸 Shots System (Dokumentasi Terpisah dari Broadcast)</h3>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.2rem;">Tim media kreatif untuk dokumentasi still photo, video sinematik aftermovie, dan publikasi sosial media.</p>
          </div>
          <span class="glow-badge white">Non-Streaming Units</span>
        </div>
        <div class="crew-deck-grid">
          <div class="glass-card" style="background:var(--bg-midnight);">
            <div class="card-top-row"><span class="card-main-title">Nico — Lead Photographer</span><span class="glow-badge white">PHOTO</span></div>
            <div class="card-tech-chip">Sony A6400 + Sony 50mm Prime (OWL)</div>
            <div class="card-body-text">Foto high-res panggung, candid jemaat, stage lighting atmosphere, dan foto kepengurusan.</div>
          </div>
          <div class="glass-card" style="background:var(--bg-midnight);">
            <div class="card-top-row"><span class="card-main-title">Joel — Cinematic Video</span><span class="glow-badge white">CINEMA</span></div>
            <div class="card-tech-chip">Sony A6600 + Zeiss 24-70mm + DJI Ronin RS3</div>
            <div class="card-body-text">Video aftermovie sinematik 4K S-Log, slow motion tracking, dan b-roll backstage.</div>
          </div>
          <div class="glass-card" style="background:var(--bg-midnight);">
            <div class="card-top-row"><span class="card-main-title">Jennifer — Mobile Reels</span><span class="glow-badge white">SOCIAL</span></div>
            <div class="card-tech-chip">Apple iPhone 15 Pro 4K HDR</div>
            <div class="card-body-text">Konten instan Instagram Reels, Stories real-time, dan update publikasi media sosial UKK.</div>
          </div>
        </div>
      </div>

      <!-- Sony Camera Operator Setup & Clean HDMI Cheat Sheet -->
      <div class="cheat-sheet-box">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <span class="glow-badge cyan">OPERATOR GUIDE</span>
            <h3 style="font-size:1.05rem; font-weight:700; color:var(--text-pure);">Sony Alpha & ZV-E10 Live Broadcast Settings</h3>
          </div>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">Standard Operational Tuning</span>
        </div>
        <div class="cheat-sheet-grid">
          <div class="cheat-unit">
            <div class="cheat-title">EXPOSURE & SHUTTER</div>
            <div class="cheat-val">1/100s @ 50fps (PAL)</div>
            <div class="cheat-desc">Gunakan Rule of 180° Shutter Angle untuk gerakan natural dan anti-flicker lampu panggung.</div>
          </div>
          <div class="cheat-unit">
            <div class="cheat-title">APERTURE / DIAFRAGMA</div>
            <div class="cheat-val">F4.0 Constant</div>
            <div class="cheat-desc">Kunci bukaan di F4 pada lensa 18-105mm G agar eksposur stabil saat zoom-in/out.</div>
          </div>
          <div class="cheat-unit">
            <div class="cheat-title">WHITE BALANCE (KELVIN)</div>
            <div class="cheat-val">4500K – 4800K</div>
            <div class="cheat-desc">Kunci manual Kelvin agar warna kulit wajah panggung tidak berubah saat LED berganti warna.</div>
          </div>
          <div class="cheat-unit">
            <div class="cheat-title">CLEAN HDMI OUTPUT</div>
            <div class="cheat-val">HDMI Info Disp: OFF</div>
            <div class="cheat-desc">Wajib nonaktifkan HDMI Info Display di menu Setup agar ikon baterai/fokus tidak masuk ke switcher.</div>
          </div>
          <div class="cheat-unit">
            <div class="cheat-title">POWER & OVERHEAT</div>
            <div class="cheat-val">Auto OFF Temp: HIGH</div>
            <div class="cheat-desc">Atur Auto Power OFF Temp ke HIGH dan buka layar LCD lipat keluar untuk disipasi panas maksimal.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. MASTER CREW DIRECTORY -->
    <section class="section-block" id="crew">
      <div class="section-head">
        <div>
          <span class="section-tag">03 • Personnel In Charge</span>
          <h2 class="section-title">Struktur Tim & Pembagian Tugas</h2>
          <p class="section-sub">Daftar kontak intercom, perangkat yang dipegang, dan rincian SOP setiap kru.</p>
        </div>
        <div class="chip-filter-row">
          <button class="filter-pill crew-filter-btn active" data-division="all">Semua Kru (15)</button>
          <button class="filter-pill crew-filter-btn" data-division="broadcast">Broadcast</button>
          <button class="filter-pill crew-filter-btn" data-division="docs">Dokumentasi</button>
          <button class="filter-pill crew-filter-btn" data-division="engine">Engine & OBS</button>
          <button class="filter-pill crew-filter-btn" data-division="media">Media LED</button>
          <button class="filter-pill crew-filter-btn" data-division="audio">Virtual Audio</button>
        </div>
      </div>

      <div class="crew-deck-grid" id="crew-directory-grid"></div>
    </section>

    <!-- 5. SIGNAL ROUTING & SCHEMATIC MATRIX -->
    <section class="section-block" id="routing">
      <div class="section-head">
        <div>
          <span class="section-tag">04 • Signal Architecture & Schematic</span>
          <h2 class="section-title">Wiring & System Schematic Matrix</h2>
          <p class="section-sub">Diagram visual interaktif sistem siaran, alur video switcher, dual mixer audio, dan pemetaan layar LED.</p>
        </div>
        <div class="chip-filter-row">
          <button class="filter-pill route-filter-btn active" data-filter="all">Semua Pipeline (12)</button>
          <button class="filter-pill route-filter-btn" data-filter="video">Video Broadcast</button>
          <button class="filter-pill route-filter-btn" data-filter="media">Media & LED</button>
          <button class="filter-pill route-filter-btn" data-filter="audio">Audio Master</button>
          <button class="filter-pill route-filter-btn" data-filter="power">Kelistrikan</button>
        </div>
      </div>

      <!-- Interactive SVG Schematic Architecture Graph -->
      <div class="schematic-wrapper">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="glow-badge cyan">INTERACTIVE TRACER</span>
            <span style="font-size:0.95rem; font-weight:700; color:var(--text-pure);">Master Hardware Signal Topology</span>
          </div>
          <span style="font-size:0.75rem; color:var(--text-secondary); font-family:var(--font-mono);">Klik perangkat untuk highlight alur sinyal</span>
        </div>

        <svg viewBox="0 0 1100 520" class="schematic-svg-canvas" id="schematic-svg-board">
          <defs>
            <marker id="arrow-cyan" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#06b6d4"/></marker>
            <marker id="arrow-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#a855f7"/></marker>
            <marker id="arrow-emerald" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#10b981"/></marker>
            <marker id="arrow-amber" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#f59e0b"/></marker>
            <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#ef4444"/></marker>
          </defs>

          <!-- Grid Background lines -->
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"/>

          <!-- Wires & Connecting Signal Paths -->
          <!-- Video Lines -->
          <path id="wire-cam1" d="M 160 55 L 230 55" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire"/>
          <path id="wire-pyro-s" d="M 360 55 L 430 145" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire pulse"/>
          <path id="wire-cam2" d="M 160 145 L 230 145" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire"/>
          <path id="wire-pyro-h" d="M 360 145 L 430 155" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire pulse"/>
          <path id="wire-cam3" d="M 160 235 L 430 165" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire"/>
          <path id="wire-cam4" d="M 160 325 L 430 175" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire"/>

          <path id="wire-sw-tv" d="M 560 145 L 670 55" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire"/>
          <path id="wire-sw-obs" d="M 560 160 L 670 160" stroke="#06b6d4" stroke-width="2.5" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire"/>
          <path id="wire-sw-spl" d="M 560 175 L 670 250" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#arrow-cyan)" class="schematic-wire"/>

          <!-- Media & LED Lines -->
          <path id="wire-spl-pro1" d="M 790 250 L 890 250" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#arrow-amber)" class="schematic-wire"/>
          <path id="wire-pro1-led" d="M 1010 250 L 1050 250 L 1050 145" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#arrow-amber)" class="schematic-wire"/>
          
          <path id="wire-pro2-res" d="M 790 335 L 890 335" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#arrow-amber)" class="schematic-wire"/>
          <path id="wire-res-nova" d="M 1010 335 L 1050 335 L 1050 375" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#arrow-amber)" class="schematic-wire"/>
          
          <!-- Audio Lines -->
          <path id="wire-ql5-ct80s" d="M 360 445 L 430 445" stroke="#a855f7" stroke-width="2" fill="none" marker-end="url(#arrow-purple)" class="schematic-wire"/>
          <path id="wire-ct80s-obs" d="M 560 445 L 730 445 L 730 190" stroke="#a855f7" stroke-width="2" fill="none" marker-end="url(#arrow-purple)" class="schematic-wire"/>
          <path id="wire-res-dac" d="M 950 365 L 950 420 L 360 420" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,4" fill="none" marker-end="url(#arrow-purple)" class="schematic-wire"/>
          
          <!-- OBS to YouTube -->
          <path id="wire-obs-yt" d="M 790 160 L 890 160" stroke="#ef4444" stroke-width="2.5" fill="none" marker-end="url(#arrow-red)" class="schematic-wire"/>

          <!-- Nodes: Column 1 - Cameras -->
          <g class="schematic-node" id="node-cam1" data-node="cam1">
            <rect x="30" y="30" width="130" height="50" rx="8" fill="#1a1c22" stroke="#06b6d4" stroke-width="1.5"/>
            <text x="95" y="52" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">CAM 1 (Alex)</text>
            <text x="95" y="68" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" text-anchor="middle">Sony ZV-E10</text>
          </g>

          <g class="schematic-node" id="node-cam2" data-node="cam2">
            <rect x="30" y="120" width="130" height="50" rx="8" fill="#1a1c22" stroke="#06b6d4" stroke-width="1.5"/>
            <text x="95" y="142" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">CAM 2 (Kiel 1)</text>
            <text x="95" y="158" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" text-anchor="middle">Sony ZV-E10 Roving</text>
          </g>

          <g class="schematic-node" id="node-cam3" data-node="cam3">
            <rect x="30" y="210" width="130" height="50" rx="8" fill="#1a1c22" stroke="#06b6d4" stroke-width="1.5"/>
            <text x="95" y="232" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">CAM 3 (Dewi)</text>
            <text x="95" y="248" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" text-anchor="middle">Sony A6000 Wing L</text>
          </g>

          <g class="schematic-node" id="node-cam4" data-node="cam4">
            <rect x="30" y="300" width="130" height="50" rx="8" fill="#1a1c22" stroke="#06b6d4" stroke-width="1.5"/>
            <text x="95" y="322" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">CAM 4 (Nathania)</text>
            <text x="95" y="338" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" text-anchor="middle">Sony A6000 Wing R</text>
          </g>

          <!-- Nodes: Column 2 - Transmission & Sub-units -->
          <g class="schematic-node" id="node-pyros" data-node="pyros">
            <rect x="230" y="30" width="130" height="50" rx="8" fill="#15161b" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="295" y="52" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" text-anchor="middle">Pyro S Wireless</text>
            <text x="295" y="68" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="8" text-anchor="middle">5.8GHz Zero-Lag</text>
          </g>

          <g class="schematic-node" id="node-pyroh" data-node="pyroh">
            <rect x="230" y="120" width="130" height="50" rx="8" fill="#15161b" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="295" y="142" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" text-anchor="middle">Pyro H Wireless</text>
            <text x="295" y="158" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="8" text-anchor="middle">5.8GHz Zero-Lag</text>
          </g>

          <g class="schematic-node" id="node-ql5" data-node="ql5">
            <rect x="230" y="420" width="130" height="50" rx="8" fill="#1a1c22" stroke="#a855f7" stroke-width="1.5"/>
            <text x="295" y="442" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">Yamaha QL5</text>
            <text x="295" y="458" fill="#a855f7" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" text-anchor="middle">FOH Master Console</text>
          </g>

          <!-- Nodes: Column 3 - Switcher & Submix -->
          <g class="schematic-node" id="node-switcher" data-node="switcher">
            <rect x="430" y="120" width="130" height="80" rx="10" fill="#21232b" stroke="#ef4444" stroke-width="2"/>
            <text x="495" y="148" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" text-anchor="middle">Cinetreak V1</text>
            <text x="495" y="165" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" text-anchor="middle">4CH MASTER SWITCHER</text>
            <text x="495" y="182" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" text-anchor="middle">Wilfred (Intercom CH1)</text>
          </g>

          <g class="schematic-node" id="node-ct80s" data-node="ct80s">
            <rect x="430" y="420" width="130" height="50" rx="8" fill="#1a1c22" stroke="#a855f7" stroke-width="1.5"/>
            <text x="495" y="442" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" text-anchor="middle">NewBaxs CT80S</text>
            <text x="495" y="458" fill="#a855f7" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" text-anchor="middle">Broadcast Submixer</text>
          </g>

          <!-- Nodes: Column 4 - Distribution & Ingest -->
          <g class="schematic-node" id="node-tvmultiview" data-node="tvmultiview">
            <rect x="670" y="30" width="120" height="50" rx="8" fill="#1a1c22" stroke="#06b6d4" stroke-width="1.5"/>
            <text x="730" y="52" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" text-anchor="middle">TV Kezia</text>
            <text x="730" y="68" fill="#06b6d4" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" text-anchor="middle">Multiview Monitor</text>
          </g>

          <g class="schematic-node" id="node-obs" data-node="obs">
            <rect x="670" y="135" width="120" height="55" rx="8" fill="#21232b" stroke="#ef4444" stroke-width="1.5"/>
            <text x="730" y="158" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" text-anchor="middle">OBS Studio</text>
            <text x="730" y="174" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" text-anchor="middle">Laptop Andreas</text>
          </g>

          <g class="schematic-node" id="node-splitter" data-node="splitter">
            <rect x="670" y="225" width="120" height="50" rx="8" fill="#1a1c22" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="730" y="247" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" text-anchor="middle">HDMI Splitter</text>
            <text x="730" y="263" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="8" text-anchor="middle">Active 4CH 4K</text>
          </g>

          <g class="schematic-node" id="node-pro2" data-node="pro2">
            <rect x="670" y="310" width="120" height="50" rx="8" fill="#1a1c22" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="730" y="332" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" text-anchor="middle">ProPresenter 2</text>
            <text x="730" y="348" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" text-anchor="middle">Filia (Graphics)</text>
          </g>

          <!-- Nodes: Column 5 - Engines & Final Outputs -->
          <g class="schematic-node" id="node-pro1" data-node="pro1">
            <rect x="890" y="225" width="120" height="50" rx="8" fill="#1a1c22" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="950" y="247" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" text-anchor="middle">ProPresenter 1</text>
            <text x="950" y="263" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" text-anchor="middle">Rania (LED Sayap)</text>
          </g>

          <g class="schematic-node" id="node-resolume" data-node="resolume">
            <rect x="890" y="310" width="120" height="50" rx="8" fill="#1a1c22" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="950" y="332" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" text-anchor="middle">Resolume Arena</text>
            <text x="950" y="348" fill="#f59e0b" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" text-anchor="middle">Bayu & Andreas</text>
          </g>

          <g class="schematic-node" id="node-ytlive" data-node="ytlive">
            <rect x="890" y="135" width="120" height="55" rx="8" fill="#15161b" stroke="#ef4444" stroke-width="2"/>
            <text x="950" y="158" fill="#fff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" text-anchor="middle">YOUTUBE LIVE</text>
            <text x="950" y="174" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="8.5" text-anchor="middle">1080p60 Stream</text>
          </g>
        </svg>

        <div class="schematic-inspector-card" id="schematic-inspector">
          <div>
            <div class="section-tag" id="inspect-tag">INSPECTOR STATUS</div>
            <div style="font-size:1.05rem; font-weight:700; color:var(--text-pure);" id="inspect-title">Pilih perangkat pada diagram di atas</div>
            <div style="font-size:0.82rem; color:var(--text-secondary); margin-top:0.2rem;" id="inspect-desc">Alur kabel, tipe port konektor, dan person in charge (PIC) akan ditampilkan di panel ini.</div>
          </div>
          <div id="inspect-badge"><span class="glow-badge emerald">Ready & Synced</span></div>
        </div>
      </div>

      <!-- 12 Detailed Signal Routing Pipeline Cards -->
      <div id="pipeline-list-container"></div>
    </section>

    <!-- 6. LIVE SWITCHER SIMULATOR -->
    <section class="section-block" id="switcher">
      <div class="section-head">
        <div>
          <span class="section-tag">05 • Hardware Simulation</span>
          <h2 class="section-title">Cinetreak Cinelive V1 Switcher Console</h2>
          <p class="section-sub">Simulasi kontrol bus Program (PGM), Preview (PVW), transisi CUT/MIX, PiP, dan audio VU meter.</p>
        </div>
        <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
          <span class="glow-badge red" id="pgm-channel-label">PGM: CAM 1</span>
          <span class="glow-badge emerald" id="pvw-channel-label">PVW: CAM 2</span>
          <button class="btn-lux btn-lux-red btn-lux-sm" onclick="document.getElementById('btn-open-tally-modal').click()">
            📱 Virtual Tally Sync
          </button>
        </div>
      </div>

      <div class="switcher-master-deck">
        <!-- Multiview & PGM/PVW Master Displays -->
        <div class="multiview-theater">
          <div class="multiview-quad-grid">
            <div class="camera-slot active-pgm" id="mv-slot-1" onclick="app.setPreviewChannel(1)">
              <span class="slot-id-badge">01 • CAM 1 (Pyro S Alex)</span>
              <span class="slot-tally-lamp pgm" id="mv-tally-1"></span>
              <canvas id="canvas-cam-1" width="280" height="158" style="width:100%; height:100%; object-fit:cover;"></canvas>
            </div>
            <div class="camera-slot active-pvw" id="mv-slot-2" onclick="app.setPreviewChannel(2)">
              <span class="slot-id-badge">02 • CAM 2 (Pyro H Kiel)</span>
              <span class="slot-tally-lamp pvw" id="mv-tally-2"></span>
              <canvas id="canvas-cam-2" width="280" height="158" style="width:100%; height:100%; object-fit:cover;"></canvas>
            </div>
            <div class="camera-slot" id="mv-slot-3" onclick="app.setPreviewChannel(3)">
              <span class="slot-id-badge">03 • CAM 3 (Dewi)</span>
              <span class="slot-tally-lamp" id="mv-tally-3"></span>
              <canvas id="canvas-cam-3" width="280" height="158" style="width:100%; height:100%; object-fit:cover;"></canvas>
            </div>
            <div class="camera-slot" id="mv-slot-4" onclick="app.setPreviewChannel(4)">
              <span class="slot-id-badge">04 • CAM 4 (Nathania)</span>
              <span class="slot-tally-lamp" id="mv-tally-4"></span>
              <canvas id="canvas-cam-4" width="280" height="158" style="width:100%; height:100%; object-fit:cover;"></canvas>
            </div>
          </div>

          <div class="master-screens-row">
            <div class="screen-housing pvw-live">
              <span class="screen-header-tag green">PREVIEW (PVW)</span>
              <canvas id="canvas-pvw-master" width="380" height="214" style="width:100%; height:100%; object-fit:cover;"></canvas>
            </div>
            <div class="screen-housing pgm-live">
              <span class="screen-header-tag red">LIVE PROGRAM (PGM)</span>
              <canvas id="canvas-pgm-master" width="380" height="214" style="width:100%; height:100%; object-fit:cover;"></canvas>
            </div>
          </div>
        </div>

        <!-- Tactile Control Console Deck -->
        <div class="control-console-deck">
          <div>
            <div class="bus-title-label" style="color:var(--accent-red);">PROGRAM BUS (ON AIR)</div>
            <div class="bus-grid-buttons">
              <button class="btn-tactile-bus pgm-selected" data-pgm-btn="1">CAM 1</button>
              <button class="btn-tactile-bus" data-pgm-btn="2">CAM 2</button>
              <button class="btn-tactile-bus" data-pgm-btn="3">CAM 3</button>
              <button class="btn-tactile-bus" data-pgm-btn="4">CAM 4</button>
            </div>
          </div>

          <div>
            <div class="bus-title-label" style="color:var(--accent-emerald);">PREVIEW BUS (NEXT CUE)</div>
            <div class="bus-grid-buttons">
              <button class="btn-tactile-bus" data-pvw-btn="1">CAM 1</button>
              <button class="btn-tactile-bus pvw-selected" data-pvw-btn="2">CAM 2</button>
              <button class="btn-tactile-bus" data-pvw-btn="3">CAM 3</button>
              <button class="btn-tactile-bus" data-pvw-btn="4">CAM 4</button>
            </div>
          </div>

          <div>
            <div class="bus-title-label">TRANSITION & EFFECTS</div>
            <div class="transition-split">
              <button class="btn-cut-action" id="btn-switcher-cut">⚡ HARD CUT</button>
              <button class="btn-auto-action" id="btn-switcher-auto">✨ AUTO MIX</button>
            </div>
            <button class="btn-lux btn-lux-ghost" id="btn-switcher-pip" style="width:100%; margin-top:0.75rem;">
              🖼️ Toggle PiP (Picture-in-Picture)
            </button>
          </div>

          <div>
            <div class="bus-title-label">AUDIO LEVEL METER (DBFS)</div>
            <div class="audio-vu-meter-rack">
              <div class="vu-column">
                <div class="vu-bar-housing"><div class="vu-fill-meter" id="vu-ql5-l" style="height:70%;"></div></div>
                <span class="vu-channel-text">QL5 L</span>
              </div>
              <div class="vu-column">
                <div class="vu-bar-housing"><div class="vu-fill-meter" id="vu-ql5-r" style="height:72%;"></div></div>
                <span class="vu-channel-text">QL5 R</span>
              </div>
              <div class="vu-column">
                <div class="vu-bar-housing"><div class="vu-fill-meter" id="vu-obs-l" style="height:65%;"></div></div>
                <span class="vu-channel-text">OBS L</span>
              </div>
              <div class="vu-column">
                <div class="vu-bar-housing"><div class="vu-fill-meter" id="vu-obs-r" style="height:68%;"></div></div>
                <span class="vu-channel-text">OBS R</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. MASTER INVENTORY & PEMINJAMAN -->
    <section class="section-block" id="inventory">
      <div class="section-head">
        <div>
          <span class="section-tag">06 • Equipment Loan & Storage</span>
          <h2 class="section-title">Master Inventory & Checklist Alat</h2>
          <p class="section-sub">Log inventaris lintas 12 pemilik (OWL, ABON, Andreas, GIA, GKJ, UKK, Lio, Darrel, Kiel, Joel, Kezia, Jennifer, Panitia) dengan auto-save di browser.</p>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button class="btn-lux btn-lux-emerald btn-lux-sm" id="btn-create-handover">📝 Buat Berita Acara</button>
          <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-check-all-inv">✅ Check All</button>
          <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-reset-check-inv">🔄 Reset</button>
          <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-export-inv-json">💾 Export JSON</button>
          <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-print-inv">🖨️ Cetak</button>
        </div>
      </div>

      <!-- Inventory Metrics Bar -->
      <div class="kpi-deck" style="margin-bottom:1.75rem;">
        <div class="kpi-unit">
          <div class="kpi-symbol-box">📦</div>
          <div>
            <div class="kpi-figure" id="inv-stat-total">0</div>
            <div class="kpi-desc">Total Unit Perlengkapan</div>
          </div>
        </div>
        <div class="kpi-unit">
          <div class="kpi-symbol-box" style="color:var(--accent-emerald);">✅</div>
          <div>
            <div class="kpi-figure" id="inv-stat-checked" style="color:var(--accent-emerald);">0</div>
            <div class="kpi-desc">Terverifikasi di Lokasi</div>
          </div>
        </div>
        <div class="kpi-unit">
          <div class="kpi-symbol-box" style="color:var(--accent-amber);">⏳</div>
          <div>
            <div class="kpi-figure" id="inv-stat-remaining" style="color:var(--accent-amber);">0</div>
            <div class="kpi-desc">Belum Check-In / Standby</div>
          </div>
        </div>
        <div class="kpi-unit">
          <div class="kpi-symbol-box">📊</div>
          <div>
            <div class="kpi-figure" id="inv-stat-percent">0%</div>
            <div style="width:100%; background:var(--bg-midnight); height:6px; border-radius:9999px; margin-top:6px; overflow:hidden;">
              <div id="inv-stat-progress-bar" style="height:100%; width:0%; background:var(--accent-emerald); transition:width 0.3s ease;"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="inventory-master-panel">
        <div class="inventory-toolbar-cluster">
          <div class="search-bar-wrap">
            <span class="search-icon-pos">🔍</span>
            <input type="text" id="inventory-search-input" class="glass-input" placeholder="Cari nama alat, pemilik, kabel, adaptor..." />
          </div>
          <div style="display:flex; gap:0.55rem; flex-wrap:wrap;">
            <select id="category-filter-select" class="glass-input" style="width:auto; padding-left:1.15rem; cursor:pointer;"></select>
            <select id="status-filter-select" class="glass-input" style="width:auto; padding-left:1.15rem; cursor:pointer;">
              <option value="all">Semua Status</option>
              <option value="Verified">Verified ✅</option>
              <option value="Checked">Checked ☑️</option>
              <option value="Warning">Warning ⚠️</option>
            </select>
          </div>
        </div>

        <div class="chip-filter-row" id="provider-filter-chips" style="margin-bottom: 1.25rem;"></div>

        <div class="table-scroll-wrapper">
          <table class="modern-dark-table">
            <thead>
              <tr>
                <th style="width:45px; text-align:center;">Check</th>
                <th style="width:45px;">No</th>
                <th>Nama Perlengkapan & Keterangan</th>
                <th>Qty</th>
                <th>Pemilik / Provider</th>
                <th>Kategori</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="inventory-table-body"></tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 8. RUNDOWN & MEDIA ASSET CHECKLIST -->
    <section class="section-block" id="rundown">
      <div class="section-head">
        <div>
          <span class="section-tag">07 • Event Execution & Timekeeper</span>
          <h2 class="section-title">Rundown & Media Asset Checklist</h2>
          <p class="section-sub">Daftar putar video loop, sambutan, materi lirik, PPT firman, dan QRIS persembahan.</p>
        </div>
        <span class="glow-badge white">15 Cues</span>
      </div>

      <!-- Enhanced Master Stage Timer & Sermon Countdown -->
      <div class="timekeeper-glass-banner">
        <div>
          <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.35rem;">
            <span class="section-tag" style="margin:0;">STAGE TIMEKEEPER & SERMON COUNTDOWN (DARREL / TV STAGE)</span>
            <span class="glow-badge amber" id="timer-mode-badge">COUNTDOWN</span>
          </div>
          <div class="time-digits-giant" id="stopwatch-display">45:00</div>
          <div style="font-size:0.84rem; color:var(--text-secondary); margin-top:0.35rem;" id="timer-status-hint">
            Target Khotbah: 45 Menit • Peringatan visual kuning saat waktu tersisa 5 menit.
          </div>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.6rem; align-items:flex-end;">
          <div style="display:flex; gap:0.45rem; align-items:center; flex-wrap:wrap;">
            <button class="btn-lux btn-lux-primary" id="btn-sw-start">▶️ Start</button>
            <button class="btn-lux btn-lux-ghost" id="btn-sw-pause">⏸️ Pause</button>
            <button class="btn-lux btn-lux-ghost" id="btn-sw-reset">🔄 Reset</button>
            <button class="btn-lux btn-lux-ghost" id="btn-timer-fullscreen">⛶ Fullscreen TV</button>
          </div>
          <div class="chip-filter-row">
            <button class="filter-pill timer-preset-btn active" data-minutes="45">Khotbah (45m)</button>
            <button class="filter-pill timer-preset-btn" data-minutes="30">Praise & Worship (30m)</button>
            <button class="filter-pill timer-preset-btn" data-minutes="15">Open Gate (15m)</button>
            <button class="filter-pill timer-preset-btn" data-minutes="10">Doa Syafaat (10m)</button>
            <button class="filter-pill timer-preset-btn" data-minutes="0">Stopwatch (Count Up)</button>
          </div>
        </div>
      </div>

      <div class="inventory-master-panel">
        <div id="media-rundown-container"></div>
      </div>
    </section>

    <!-- 9. PRODUCTION CALIBRATION TOOLS & INCIDENT LOGGER -->
    <section class="section-block" id="tools">
      <div class="section-head">
        <div>
          <span class="section-tag">08 • Engineering Utilities & Logging</span>
          <h2 class="section-title">Alat Kalibrasi Layar, Audio & Log Kendala</h2>
          <p class="section-sub">SMPTE Test pattern, safe area 16:9 grid, generator gelombang audio, dan timeline kendala lapangan.</p>
        </div>
      </div>

      <div class="tools-split-layout">
        <!-- Display Pattern -->
        <div class="inventory-master-panel">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.15rem;">
            <h3 style="font-size:1.1rem; font-weight:700;">🎨 Display & LED Test Pattern</h3>
            <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-pattern-fullscreen">⛶ Fullscreen</button>
          </div>
          <div class="chip-filter-row" style="margin-bottom:1.15rem;">
            <button class="filter-pill active" data-pattern="smpte">SMPTE Color Bars</button>
            <button class="filter-pill" data-pattern="grid">16:9 Safe Area Grid</button>
            <button class="filter-pill" data-pattern="white">Solid White (100%)</button>
            <button class="filter-pill" data-pattern="black">Solid Black (0%)</button>
          </div>
          <canvas id="test-pattern-canvas" width="640" height="360" class="pattern-canvas-frame"></canvas>
        </div>

        <!-- Audio Tone Gen -->
        <div class="inventory-master-panel">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.15rem;">
            <h3 style="font-size:1.1rem; font-weight:700;">🔊 Web Audio Tone Generator</h3>
            <span class="glow-badge emerald">Web Audio API</span>
          </div>
          
          <div style="margin-bottom:1.15rem;">
            <label style="font-size:0.82rem; color:var(--text-secondary); display:block; margin-bottom:0.45rem;">Pilih Frekuensi Kalibrasi:</label>
            <select id="tone-freq-select" class="glass-input">
              <option value="1000">1 kHz Sine Wave (Standard Reference -18dBFS)</option>
              <option value="440">440 Hz Concert Pitch A4</option>
              <option value="100">100 Hz Subwoofer & Low-End Check</option>
              <option value="10000">10 kHz High Freq Clarity Check</option>
            </select>
          </div>

          <div style="margin-bottom:1.35rem;">
            <label style="font-size:0.82rem; color:var(--text-secondary); display:block; margin-bottom:0.45rem;">Volume Output Gain:</label>
            <input type="range" id="tone-vol-slider" min="0" max="0.5" step="0.01" value="0.15" style="width:100%; accent-color:#ffffff;" />
          </div>

          <button class="btn-lux btn-lux-primary" id="btn-play-tone" style="width:100%; height:46px;">
            🔊 Nyalakan Test Tone
          </button>
        </div>
      </div>

      <!-- Real-time Technical Incident Timestamp Logger -->
      <div class="inventory-master-panel" style="margin-top:1.75rem;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h3 style="font-size:1.1rem; font-weight:700;">⚡ Log Kendala & Catatan Lapangan Real-Time</h3>
            <p style="font-size:0.8rem; color:var(--text-secondary);">Catat insiden teknis dengan stempel waktu otomatis untuk evaluasi pasca-acara.</p>
          </div>
          <div style="display:flex; gap:0.45rem;">
            <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-export-incidents">💾 Export Log</button>
            <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-clear-incidents">🗑️ Clear Log</button>
          </div>
        </div>

        <div style="display:flex; gap:0.5rem; margin-bottom:1rem; flex-wrap:wrap;">
          <input type="text" id="incident-input-text" class="glass-input" placeholder="Tulis insiden teknis (misal: 'Sinyal CAM 2 flicker di channel 3')..." style="flex:1; min-width:260px;" />
          <select id="incident-severity-select" class="glass-input" style="width:auto; padding-left:1.15rem; cursor:pointer;">
            <option value="INFO">Info ℹ️</option>
            <option value="WARN">Warning ⚠️</option>
            <option value="CRITICAL">Critical 🚨</option>
          </select>
          <button class="btn-lux btn-lux-primary btn-lux-sm" id="btn-add-incident">+ Catat Log</button>
        </div>

        <div class="chip-filter-row" style="margin-bottom:1rem;">
          <button class="filter-pill quick-log-btn" data-text="Sinyal Wireless Pyro S & H stabil 100%">⚡ Wireless Sync OK</button>
          <button class="filter-pill quick-log-btn" data-text="Audio FOH QL5 clipping di matrix send">🔊 Audio Feedback / Clipping</button>
          <button class="filter-pill quick-log-btn" data-text="LED Center NovaStar refresh rate disinkronkan">🖥️ LED Nova Resync</button>
          <button class="filter-pill quick-log-btn" data-text="Khotbah selesai tepat waktu (43 menit)">⏱️ Khotbah Selesai</button>
        </div>

        <div class="table-scroll-wrapper" style="max-height:240px; overflow-y:auto;">
          <div id="incident-log-container"></div>
        </div>

        <div style="margin-top:1.25rem;">
          <label style="font-size:0.82rem; color:var(--text-secondary); display:block; margin-bottom:0.45rem;">📝 Catatan Tambahan (Field Notes):</label>
          <textarea id="field-notes-textarea" class="glass-input" rows="3" placeholder="Tulis catatan umum di sini (otomatis tersimpan di browser)..." style="resize:vertical; font-family:var(--font-mono);"></textarea>
        </div>
      </div>
    </section>

    <!-- 10. SOP & FAIL-SAFE CONTINGENCY -->
    <section class="section-block" id="sop">
      <div class="section-head">
        <div>
          <span class="section-tag">09 • Safety & Fail-Safe</span>
          <h2 class="section-title">Standar Operasional & Prosedur Darurat</h2>
          <p class="section-sub">Protokol pra-acara H-3 jam, pedoman operator kamera nirkabel, dan tindakan penanganan kegagalan teknis.</p>
        </div>
      </div>

      <div id="sop-container"></div>
    </section>

  </main>

  <!-- Mobile Floating Quick Navigation Dock -->
  <div class="mobile-floating-dock">
    <a href="#hero" class="dock-btn active"><span class="dock-symbol">🏠</span><span>Home</span></a>
    <a href="#cameras" class="dock-btn"><span class="dock-symbol">🎥</span><span>Kamera</span></a>
    <a href="#routing" class="dock-btn"><span class="dock-symbol">📡</span><span>Routing</span></a>
    <a href="#switcher" class="dock-btn"><span class="dock-symbol">🎛️</span><span>Switcher</span></a>
    <a href="#inventory" class="dock-btn"><span class="dock-symbol">📦</span><span>Alat</span></a>
    <a href="#rundown" class="dock-btn"><span class="dock-symbol">📑</span><span>Materi</span></a>
  </div>

  <!-- FULLSCREEN CREW PRESENTATION DECK MODAL -->
  <div class="deck-modal" id="presentation-modal">
    <div class="deck-top-nav">
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <span class="brand-logo-pill" style="width:32px; height:32px; font-size:0.9rem; border-radius:6px;">IP26</span>
        <span style="font-weight:800; font-size:clamp(0.82rem, 2vw, 1rem); letter-spacing:-0.02em;">CREW MASTER BRIEFING & PITCH DECK</span>
      </div>
      <div style="display:flex; align-items:center; gap:0.75rem;">
        <span id="pres-slide-indicator" style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-secondary);">Slide 1 of 8</span>
        <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-close-presentation">✕ Tutup</button>
      </div>
    </div>

    <div class="deck-slide-stage">
      <!-- Slide 1 -->
      <div class="deck-slide-unit active">
        <span class="glow-badge white">OFFICIAL TECHNICAL BRIEFING</span>
        <h1 style="font-size:clamp(1.75rem, 4vw, 3.2rem); margin:1.15rem 0 0.65rem; line-height:1.15; font-weight:800;">
          Ibadah Perdana UKK UNNES 2026
        </h1>
        <h3 style="color:var(--text-primary); font-weight:500; margin-bottom:1.75rem; font-size:clamp(0.95rem, 2vw, 1.3rem);">
          Production, Multi-Camera Broadcast & Media Engineering Architecture
        </h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1.15rem; margin-top:1.75rem;">
          <div class="kpi-unit"><div class="kpi-symbol-box">📍</div><div><div class="kpi-figure" style="font-size:1.1rem;">Auditorium UNNES</div><div class="kpi-desc">Master Venue</div></div></div>
          <div class="kpi-unit"><div class="kpi-symbol-box" style="color:var(--accent-amber);">🎥</div><div><div class="kpi-figure" style="font-size:1.1rem;">Dual Wireless</div><div class="kpi-desc">Pyro S + Pyro H</div></div></div>
          <div class="kpi-unit"><div class="kpi-symbol-box" style="color:var(--accent-emerald);">🖥️</div><div><div class="kpi-figure" style="font-size:1.1rem;">Megascreen LED</div><div class="kpi-desc">Center + Wing Sayap</div></div></div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="deck-slide-unit">
        <span class="glow-badge amber">STRUKTUR ORGANISASI</span>
        <h2 style="font-size:clamp(1.4rem, 3.5vw, 2.3rem); margin:0.65rem 0 1.35rem;">Master Production Crew & PIC</h2>
        <div class="crew-deck-grid">
          <div class="glass-card">
            <div class="card-top-row"><span class="card-main-title">🎥 BROADCAST TEAM</span></div>
            <div class="card-body-text" style="font-size:0.88rem; line-height:1.65;">
              • CAM 1: <strong>Alex</strong> (ZV-E10 Wireless Pyro S)<br/>
              • CAM 2: <strong>Kiel 1</strong> (ZV-E10 Wireless Pyro H)<br/>
              • CAM 3: <strong>Dewi</strong> (A6000 Wing Left HDMI 10M)<br/>
              • CAM 4: <strong>Nathania</strong> (A6000 Wing Right HDMI 10M)
            </div>
          </div>
          <div class="glass-card">
            <div class="card-top-row"><span class="card-main-title">📸 DOCUMENTATION</span></div>
            <div class="card-body-text" style="font-size:0.88rem; line-height:1.65;">
              • Photo Lead: <strong>Nico</strong> (A6400 + 50mm)<br/>
              • Cinematic Video: <strong>Joel</strong> (A6600 + RS3 Gimbal)<br/>
              • Social Media: <strong>Jennifer</strong> (iPhone 15 Pro)
            </div>
          </div>
          <div class="glass-card">
            <div class="card-top-row"><span class="card-main-title">💻 ENGINE & MEDIA</span></div>
            <div class="card-body-text" style="font-size:0.88rem; line-height:1.65;">
              • Switcher: <strong>Wilfred</strong> (Cinetreak V1 + TV Kezia)<br/>
              • OBS & Lead Eng: <strong>Andreas</strong><br/>
              • ProPresenter 1: <strong>Rania</strong> (LED Sayap)<br/>
              • ProPresenter 2: <strong>Filia</strong> (Graphics)<br/>
              • Resolume Arena: <strong>Andreas / Bayu</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="deck-slide-unit">
        <span class="glow-badge white">CAMERA PLACEMENT</span>
        <h2 style="font-size:clamp(1.4rem, 3.5vw, 2.3rem); margin:0.65rem 0 1.35rem;">Broadcast Camera Setup & Angles</h2>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1.35rem;">
          <div class="glass-card">
            <div class="card-main-title" style="color:#ffffff; margin-bottom:0.65rem;">CAM 1 (Alex) & CAM 2 (Kiel 1) — Dual Wireless</div>
            <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.65;">
              • <strong>CAM 1 (Pyro S):</strong> Berdiri di FOH Center. Memegang Master Stage Shot, Altar & Speaker Framing secara nirkabel.<br/><br/>
              • <strong>CAM 2 (Pyro H):</strong> Roving Kamera Wireless nirkabel. Menangkap ekspresi jemaat, close-up WL & Singer secara dinamis di panggung.
            </p>
          </div>
          <div class="glass-card">
            <div class="card-main-title" style="color:var(--text-secondary); margin-bottom:0.65rem;">CAM 3 (Dewi) & CAM 4 (Nathania) — Tethered HDMI</div>
            <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.65;">
              • <strong>CAM 3 (Wing Left):</strong> Cross-angle shot ke arah pembicara dan keyboardist panggung. Jalur HDMI 10M.<br/><br/>
              • <strong>CAM 4 (Wing Right):</strong> Cross-angle shot ke arah worship leader dan drum/gitar panggung. Jalur HDMI 10M.
            </p>
          </div>
        </div>
      </div>

      <!-- Slide 4 -->
      <div class="deck-slide-unit">
        <span class="glow-badge red">VIDEO PIPELINE</span>
        <h2 style="font-size:clamp(1.4rem, 3.5vw, 2.3rem); margin:0.65rem 0 1.35rem;">Cinetreak V1 Switcher & OBS Livestream</h2>
        <div class="glass-card" style="padding:1.5rem;">
          <p style="font-size:0.92rem; color:var(--text-primary); line-height:1.8;">
            1. <strong>Input 1-4:</strong> 4 Sinyal Kamera Masuk ke Switcher Cinetreak Cinelive V1 (Input 1: Pyro S, Input 2: Pyro H, Input 3-4: HDMI 10M).<br/>
            2. <strong>HDMI Multi-view Out:</strong> Masuk ke TV Monitor (Kezia) untuk monitoring 4 kamera + audio bar.<br/>
            3. <strong>USB-C UVC Out:</strong> Terhubung langsung via kabel Data USB 3.0 ke Laptop OBS Studio (Andreas).<br/>
            4. <strong>HDMI PGM Out:</strong> Masuk ke Active HDMI Splitter 4CH untuk diteruskan ke ProPresenter 1 & Resolume Arena.
          </p>
        </div>
      </div>

      <!-- Slide 5 -->
      <div class="deck-slide-unit">
        <span class="glow-badge amber">STAGE VISUAL ENGINE</span>
        <h2 style="font-size:clamp(1.4rem, 3.5vw, 2.3rem); margin:0.65rem 0 1.35rem;">Stage LED Mapping & Media Presentation</h2>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1.35rem;">
          <div class="glass-card">
            <div class="card-main-title" style="color:var(--accent-amber); margin-bottom:0.65rem;">LED Megascreen Center (Resolume Arena)</div>
            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.65;">
              Dikelola oleh Andreas & Bayu. Menampilkan Video Loop Pre-Ibadah, Opening Video, Motion Background Tema, dan live camera mix via HDMI 15M ke NovaStar Processor.
            </p>
          </div>
          <div class="glass-card">
            <div class="card-main-title" style="color:#ffffff; margin-bottom:0.65rem;">LED Sayap Kanan-Kiri (ProPresenter 1 & 2)</div>
            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.65;">
              Dikelola oleh Rania & Filia. Menampilkan Lirik Lagu, Slide Firman Alkitab, PPT Pembicara, dan QRIS Persembahan langsung ke Video Processor Auditorium UNNES.
            </p>
          </div>
        </div>
      </div>

      <!-- Slide 6 -->
      <div class="deck-slide-unit">
        <span class="glow-badge emerald">AUDIO PIPELINE</span>
        <h2 style="font-size:clamp(1.4rem, 3.5vw, 2.3rem); margin:0.65rem 0 1.35rem;">Dual Mixer Master Audio Routing</h2>
        <div class="glass-card" style="padding:1.5rem;">
          <p style="font-size:0.92rem; color:var(--text-primary); line-height:1.8;">
            • <strong>FOH Main Console:</strong> Yamaha QL5 (UNNES) mengelola seluruh 32 mic & instrumen panggung.<br/>
            • <strong>Broadcast Matrix Send:</strong> Yamaha QL5 ➔ XLR 10M (UKK) ➔ XLR 3M (GIA) ➔ <strong>NewBaxs CT80S Sub-Mixer</strong>.<br/>
            • <strong>Digital Audio Interface:</strong> NewBaxs CT80S terhubung via kabel USB Audio ke OBS Studio.<br/>
            • <strong>Video Playback Lossless DAC:</strong> Resolume Laptop ➔ USB-C DAC Hanason AB17X ➔ Yamaha QL5 Stereo In.
          </p>
        </div>
      </div>

      <!-- Slide 7 -->
      <div class="deck-slide-unit">
        <span class="glow-badge white">RUNDOWN & CUES</span>
        <h2 style="font-size:clamp(1.4rem, 3.5vw, 2.3rem); margin:0.65rem 0 1.35rem;">Media Checklist & Timing Cues</h2>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:1.15rem;">
          <div class="glass-card">
            <div class="card-main-title" style="color:#ffffff; margin-bottom:0.65rem;">1. Pre-Ibadah</div>
            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.55;">
              • Open Gate Playlist Audio<br/>
              • Loop Video Profile UKK & Aftermovie IP25/IN25 di LED Center.
            </p>
          </div>
          <div class="glass-card">
            <div class="card-main-title" style="color:var(--accent-amber); margin-bottom:0.65rem;">2. Sesi Ibadah</div>
            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.55;">
              • Opening Countdown Video<br/>
              • Sambutan Bu Grave<br/>
              • Lirik Lagu WL<br/>
              • Slide & Ayat Pembicara<br/>
              • QRIS Persembahan & UKK News.
            </p>
          </div>
          <div class="glass-card">
            <div class="card-main-title" style="color:var(--accent-emerald); margin-bottom:0.65rem;">3. Post-Ibadah</div>
            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.55;">
              • Usung-usung alat<br/>
              • Verifikasi checklist pengembalian (OWL, GIA, GKJ, UKK, Pribadi).
            </p>
          </div>
        </div>
      </div>

      <!-- Slide 8 -->
      <div class="deck-slide-unit">
        <span class="glow-badge red">SOP & FAIL-SAFE</span>
        <h2 style="font-size:clamp(1.4rem, 3.5vw, 2.3rem); margin:0.65rem 0 1.35rem;">Prosedur Darurat & Keamanan Elektrikal</h2>
        <div class="glass-card" style="padding:1.5rem;">
          <p style="font-size:0.92rem; color:var(--text-primary); line-height:1.8;">
            ⚠️ <strong>Jika Hollyland Pyro S/H Dropout:</strong> Operator kamera segera mendekati tiang lighting stand receiver RX untuk re-locking sinyal.<br/>
            ⚠️ <strong>Jika Kabel HDMI CAM 3/4 Terputus:</strong> Switcher segera beralih (CUT) ke CAM 1/2 Wireless atau Standby Graphic di OBS.<br/>
            ⚠️ <strong>Jika Resolume / ProPresenter Crash:</strong> Switcher alihkan ke Direct Hardware Pass-through.<br/>
            ⚡ <strong>Keamanan Listrik:</strong> Seluruh kabel di lantai di-gaffer tape rapi, terminal kabel terlindung dari genangan air.
          </p>
        </div>
      </div>
    </div>

    <div class="deck-bottom-nav">
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-pres-prev">◀ Prev</button>
        <button class="btn-lux btn-lux-primary btn-lux-sm" id="btn-pres-next">Next ▶</button>
      </div>
      <div style="width:200px; background:rgba(255, 255, 255, 0.08); height:5px; border-radius:9999px; overflow:hidden;">
        <div id="pres-progress-bar" style="height:100%; width:12.5%; background:#ffffff; box-shadow:0 0 10px rgba(255, 255, 255, 0.5); transition:width 0.25s ease;"></div>
      </div>
      <div style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">
        Gunakan tombol panah ◄ ►
      </div>
    </div>
  </div>

  <!-- FULLSCREEN VIRTUAL MOBILE STAGE TALLY LIGHT BOX MODAL -->
  <div class="tally-fullscreen-modal" id="tally-modal">
    <div class="tally-header-ctrl">
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <span class="glow-badge red">TALLY LIGHT</span>
        <span style="font-weight:700; font-size:0.9rem;">Mobile Tally Stage Box</span>
      </div>
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <select id="tally-camera-select" class="glass-input" style="width:auto; padding:0.3rem 0.8rem; font-size:0.8rem; cursor:pointer;">
          <option value="1">CAM 1 (Alex)</option>
          <option value="2">CAM 2 (Kiel 1)</option>
          <option value="3">CAM 3 (Dewi)</option>
          <option value="4">CAM 4 (Nathania)</option>
        </select>
        <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-tally-toggle-sound" title="Toggle Sound Beep on CUT">🔊 Beep: ON</button>
        <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-close-tally">✕ Tutup</button>
      </div>
    </div>

    <div class="tally-stage-screen pgm" id="tally-screen-target">
      <div class="tally-gigantic-id" id="tally-cam-big-label">CAM 1</div>
      <div class="tally-status-label" id="tally-state-big-label">● LIVE ON AIR (PGM)</div>
      <div style="font-family:var(--font-mono); font-size:1rem; opacity:0.85; margin-top:0.75rem;" id="tally-op-big-label">Operator: Alex (Sony ZV-E10 Wireless)</div>
    </div>
  </div>

  <!-- OFFICIAL EQUIPMENT HANDOVER AGREEMENT MODAL (BERITA ACARA) -->
  <div class="handover-modal-dialog" id="handover-modal">
    <div class="handover-paper-card">
      <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:2px solid #111; padding-bottom:1rem; margin-bottom:1.5rem;">
        <div>
          <h2 style="font-size:1.35rem; font-weight:800; color:#111; text-transform:uppercase;">BERITA ACARA PEMINJAMAN ALAT PRODUKSI</h2>
          <p style="font-size:0.85rem; color:#555; font-family:'Plus Jakarta Sans', sans-serif;">Ibadah Perdana UKK UNNES 2026 • Gedung Auditorium UNNES</p>
        </div>
        <div style="display:flex; gap:0.5rem;" class="no-print">
          <button class="btn-lux btn-lux-primary btn-lux-sm" onclick="window.print()">🖨️ Cetak Dokumen</button>
          <button class="btn-lux btn-lux-ghost btn-lux-sm" id="btn-close-handover">✕ Tutup</button>
        </div>
      </div>

      <div style="margin-bottom:1.25rem;" class="no-print">
        <label style="font-size:0.85rem; font-weight:700; color:#333; margin-bottom:0.35rem; display:block;">Pilih Pihak Pemilik / Provider Alat:</label>
        <select id="handover-provider-select" class="glass-input" style="background:#f3f4f6; color:#111; border-color:#ccc; cursor:pointer; width:100%;"></select>
      </div>

      <div id="handover-printable-content">
        <p style="font-size:0.88rem; line-height:1.6; color:#222; margin-bottom:1rem;">
          Pada hari ini, <strong id="handover-date-str">Jumat, 21 Agustus 2026</strong>, telah diserahterimakan sejumlah peralatan teknis untuk keperluan siaran dan operasional <strong>Ibadah Perdana UKK UNNES 2026</strong> dengan rincian sebagai berikut:
        </p>

        <table style="width:100%; border-collapse:collapse; font-size:0.82rem; margin-bottom:1.5rem;" border="1" cellpadding="6">
          <thead>
            <tr style="background:#f0f0f0;">
              <th style="width:35px; text-align:center;">No</th>
              <th>Nama Peralatan</th>
              <th style="width:65px; text-align:center;">Qty</th>
              <th>Kategori</th>
              <th style="width:90px; text-align:center;">Kondisi Awal</th>
              <th>Catatan / Peruntukan</th>
            </tr>
          </thead>
          <tbody id="handover-items-tbody"></tbody>
        </table>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin-top:2.5rem; text-align:center; font-size:0.88rem;">
          <div>
            <p>Pihak Yang Menyerahkan,</p>
            <p style="font-weight:700;" id="handover-party1-label">Pemilik Alat</p>
            <div style="height:65px;"></div>
            <p>( .................................................... )</p>
          </div>
          <div>
            <p>Pihak Yang Menerima (Tim Produksi),</p>
            <p style="font-weight:700;">Technical Lead IP26</p>
            <div style="height:65px;"></div>
            <p>( <strong>Andreas & Tim Logistik</strong> )</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Embedded JavaScript Engine -->
  <script>
    /* ==========================================================================
       IP26 COMPLETE APPLICATION DATA & ENGINE
       ========================================================================== */
    const CREW_ROLES = [
      { id: "cam-1", name: "Alex", division: "broadcast", role: "CAM 1 Operator (Main Center Wireless)", device: "Sony ZV-E10 + Lens 18-105mm F4 G + Hollyland Pyro S", contact: "Intercom CH 1", taskDescription: "Main Long-shot & Stage Master framing dengan transmisi nirkabel Hollyland Pyro S (TX/RX) ke Switcher Input 1.", badge: "CAM 1" },
      { id: "cam-2", name: "Kiel 1", division: "broadcast", role: "CAM 2 Operator (Roving Wireless)", device: "Sony ZV-E10 + Lens 18-105mm F4 G + Hollyland Pyro H", contact: "Intercom CH 1", taskDescription: "Wireless roving camera untuk close-up WL, Singer, & crowd immersion. Menggunakan Hollyland Pyro H TX/RX.", badge: "CAM 2" },
      { id: "cam-3", name: "Dewi", division: "broadcast", role: "CAM 3 Operator (Left Stage Wing)", device: "Sony A6000 + Lens 18-105mm F4 G", contact: "Intercom CH 1", taskDescription: "Stage left medium & profile shot, speaker cross-angle framing via HDMI 10M.", badge: "CAM 3" },
      { id: "cam-4", name: "Nathania", division: "broadcast", role: "CAM 4 Operator (Right Stage Wing)", device: "Sony A6000 + Lens 16-50mm Kit", contact: "Intercom CH 1", taskDescription: "Stage right wide angle, musical instrument coverage & altar wide view via HDMI 10M.", badge: "CAM 4" },
      { id: "pho-nico", name: "Nico", division: "docs", role: "Lead Photographer", device: "Sony A6400 + Sony 50mm Prime (OWL)", contact: "Intercom CH 2", taskDescription: "High-resolution photo coverage, candid moments, stage worship, & VIP portraits (terpisah dari broadcast).", badge: "PHOTO" },
      { id: "vid-joel", name: "Joel", division: "docs", role: "Cinematic Videographer", device: "Sony A6600 + Zeiss 24-70mm + DJI Ronin RS3", contact: "Intercom CH 2", taskDescription: "Cinematic aftermovie footage, 4K b-roll, gimbal tracking shots (terpisah dari broadcast).", badge: "CINEMA" },
      { id: "hp-jennifer", name: "Jennifer", division: "docs", role: "Social Media / Mobile Reels", device: "iPhone 15", contact: "Intercom CH 2", taskDescription: "Real-time Instagram Stories, Reels quick updates, & behind-the-scenes broadcast clips.", badge: "SOCIAL" },
      { id: "eng-wilfred", name: "Wilfred", division: "engine", role: "Video Switcher Operator", device: "Cinetreak Cinelive V1 + TV Multiview (Kezia)", contact: "Intercom Master", taskDescription: "Mengontrol PGM & PVW bus 4 kamera, transisi cut/mix, PiP, serta sinkronisasi visual ke OBS & LED.", badge: "SWITCHER" },
      { id: "eng-andreas", name: "Andreas", division: "engine", role: "Technical Director / OBS & Resolume Lead", device: "Laptop OBS Studio + Laptop Resolume Arena", contact: "Intercom Master", taskDescription: "Master control broadcast livestream, routing LED mapping Center, audio pipeline & electrical safety.", badge: "LEAD ENG" },
      { id: "pro-rania", name: "Rania", division: "media", role: "ProPresenter 1 Operator (Stage LED)", device: "Laptop ProPresenter 1 + HDMI Capture", contact: "Intercom CH 3", taskDescription: "Operator lirik lagu, ayat firman, slide khotbah & video sambutan ke LED Sayap (Left/Right/Back).", badge: "PRO 1" },
      { id: "pro-filia", name: "Filia", division: "media", role: "ProPresenter 2 Operator (Live Graphics)", device: "Laptop ProPresenter 2 + Capture Card ke Resolume", contact: "Intercom CH 3", taskDescription: "Lower-third graphics, dynamic title overlay, scripture overlay untuk input Resolume Arena.", badge: "PRO 2" },
      { id: "pro-darrel", name: "Darrel", division: "media", role: "Timekeeper & ProPresenter 3", device: "Laptop ProPresenter 3 + TV Dedicated", contact: "Intercom CH 3", taskDescription: "Stage timer, countdown open gate, speaker time limits via dedicated stage TV (terpisah).", badge: "TIME" },
      { id: "vm-jordan", name: "Jordan / Yosua", division: "audio", role: "Virtual Mixer 1 & 2 Operators", device: "iPad & Laptop Virtual Mixer (WiFi UNNES-ID)", contact: "Intercom CH 4", taskDescription: "Remote mixing monitor FOH Yamaha QL5, in-ear monitor balances, & broadcast aux mix feed.", badge: "VM AUDIO" },
      { id: "eng-bayu", name: "Bayu", division: "engine", role: "Resolume Co-Operator", device: "Laptop Resolume Arena Station", contact: "Intercom CH 3", taskDescription: "Background loops, visual FX, visual mapping ke LED Center NovaStar processor.", badge: "RESOLUME" },
      { id: "eng-backup", name: "Kiel 1", division: "engine", role: "Backup Station & Power Guard", device: "Laptop Backup Station", contact: "Intercom Master", taskDescription: "Secondary streaming backup, contingency hot-swap station & cable integrity guard.", badge: "BACKUP" }
    ];

    const BROADCAST_CAMERAS = [
      { id: "CAM 1", operator: "Alex", model: "Sony ZV-E10", lens: "18-105mm F4 G OSS", status: "Verified ✅", signalType: "5.8GHz Zero-Latency Wireless (Pyro S)", position: "FOH Center Deck" },
      { id: "CAM 2", operator: "Kiel 1", model: "Sony ZV-E10", lens: "18-105mm F4 G OSS", status: "Verified ✅", signalType: "5.8GHz Zero-Latency Wireless (Pyro H)", position: "Roving Altar & Stage Front" },
      { id: "CAM 3", operator: "Dewi", model: "Sony A6000", lens: "18-105mm F4 G OSS", status: "Verified ✅", signalType: "1080p60 Micro HDMI to Full HDMI", position: "Wing Left (House Left)" },
      { id: "CAM 4", operator: "Nathania", model: "Sony A6000", lens: "16-50mm Kit OSS", status: "Verified ✅", signalType: "1080p60 Micro HDMI to Full HDMI", position: "Wing Right (House Right)" }
    ];

    const ROUTING_PIPELINES = [
      { id: "route-elec", title: "1. Electrical Distribution System", category: "power", tag: "Andreas x UKK x Panitia", status: "Verified ✅", chain: ["Master Auditorium AC Mains", "Terminal Cable XCH (Panitia)", "Terminal Cable XCH (UKK)", "Terminal Cable XCH (Andreas)", "Regulated Multi-station Power Bus"], details: "Menghubungkan seluruh sistem engine, switcher, monitor TV, laptop OBS, Resolume, ProPresenter, dan audio mixer secara terisolasi guna mencegah ground-loop noise." },
      { id: "route-sw-tv", title: "2. Switcher to TV Multiview", category: "video", tag: "OWL x Kezia", status: "Verified ✅", chain: ["Terminal Cable XCH", "Cinetreak Cinelive V1", "Power Adaptor MIX", "HDMI to HDMI Cable 1M", "Television (Kezia)", "Power Adaptor TV"], details: "Menampilkan 4 input kamera (CAM 1-4), Preview Bus, Program Bus, Audio VU Meters, dan Status Record/Stream ke TV Kezia." },
      { id: "route-sw-spl", title: "3. Switcher PGM Distribution Splitter", category: "video", tag: "OWL x UKK", status: "Verified ✅", chain: ["Terminal Cable XCH", "Cinetreak Cinelive V1 (PGM Out)", "Power Adaptor MIX", "HDMI Splitter 4CH", "Power Adaptor SPL"], details: "Splitter 4CH aktif membagi sinyal HDMI PGM tanpa distorsi ke ProPresenter 1 (LED Sayap), Resolume (LED Center), dan recording." },
      { id: "route-sw-obs", title: "4. Switcher USB-C Bridge to OBS Studio", category: "video", tag: "OWL x Andreas x OBS", status: "Verified ✅", chain: ["Terminal Cable XCH", "Cinetreak Cinelive V1 (USB-C UVC Out)", "Power Adaptor MIX", "USB-A to USB-C 3.0 Data Cable", "Laptop OBS Studio", "Power Adaptor LTP"], details: "Sinyal video 1080p60 murni tanpa memerlukan external capture card tambahan, langsung dikenali sebagai video capture device di OBS Studio." },
      { id: "route-aud-pipe", title: "5. Dual Mixer Audio Master Pipeline", category: "audio", tag: "UNNES x UKK x Andreas x GIA x OBS", status: "Verified ✅", chain: ["FOH Mixer Yamaha QL5 (UNNES)", "XLR Female to Male 10M 2X (UKK)", "XLR Female to Male 3M 2X (GIA)", "Broadcast Sub-Mixer NewBaxs CT80S (GIA)", "USB-A to USB-C Audio Interface Cable", "Laptop OBS Studio", "Power Adaptor LTP"], details: "Yamaha QL5 mengirimkan stereo matrix/aux send terpisah untuk broadcast, diterima di NewBaxs CT80S untuk fine-tuning EQ, dynamic compression, dan disalurkan via digital USB ke OBS." },
      { id: "route-pro1-led", title: "6. ProPresenter 1 to LED Wing (Left, Right, Back)", category: "media", tag: "UKK x Andreas x OWL x PRO1 x UNNES", status: "Verified ✅", chain: ["HDMI Splitter 4CH (PGM Feed)", "Power Adaptor SPL", "HDMI to HDMI Cable 1.5M", "HDMI Video Capture (OWL)", "Laptop ProPresenter 1 (Rania)", "Power Adaptor LTP", "HDMI UNNES Line", "Auditorium Video Processor", "LED Stage Left, Right & Altar Back"], details: "ProPresenter 1 menerima input camera switcher via capture card untuk live video layering dengan teks lagu / firman dan mengirimkannya ke video processor auditorium." },
      { id: "route-pro2-res", title: "7. ProPresenter 2 to Resolume Arena Bridge", category: "media", tag: "PRO2 x Andreas x OWL x RES", status: "Verified ✅", chain: ["Laptop ProPresenter 2 (Filia)", "Power Adaptor LTP", "HDMI to HDMI Cable 1.5M", "HDMI Video Capture Card", "Laptop Resolume Arena (Andreas/Bayu)", "Power Adaptor LTP"], details: "ProPresenter 2 memproses alpha channel / chroma key lirik dan title pembicara, disalurkan ke Resolume Arena sebagai live visual layer." },
      { id: "route-res-center", title: "8. Resolume Arena to LED Center Main", category: "media", tag: "Andreas x GKJ x RES x GKJ x ABON x UNNES", status: "Verified ✅", chain: ["HDMI Splitter 4CH (PGM Feed)", "Power Adaptor SPL", "HDMI to HDMI Cable 1.5M", "HDMI Capture Card (ABON)", "Laptop Resolume Arena (Andreas)", "Power Adaptor LTP", "HDMI Cable 15M (GKJ)", "HDMI Capture Card (ABON)", "NovaStar LED Controller", "Auditorium Video Processor", "LED Stage Center (Megascreen)"], details: "Resolume Arena menggabungkan Loop Video, Opening Video, Camera PGM, dan ProPresenter 2 Graphics ke resolusi native NovaStar LED Center." },
      { id: "route-res-dac", title: "9. Resolume Digital Audio Out to FOH Mixer", category: "audio", tag: "RES x Andreas x UNNES", status: "Verified ✅", chain: ["Laptop Resolume Arena (Andreas)", "Power Adaptor LTP", "USB-C DAC Hanason AB17X / Oraimo OAA310", "Jack 3.5mm to 6.35mm UNNES", "Mixer Yamaha QL5 Stereo Channel"], details: "Menggunakan dedicated lossless USB DAC 24-bit/96kHz untuk menghasilkan audio video playback yang jernih tanpa distorsi noise kartu suara internal laptop." },
      { id: "route-vm1", title: "10. Virtual Mixer 1 (iPad Remote)", category: "audio", tag: "UNNES x Jennifer", status: "Verified ✅", chain: ["Mixer Yamaha QL5", "Auditorium Access Point (WiFi UNNES-ID)", "iPad Stage Monitor (Virtual Mixer 1)"], details: "Aplikasi Yamaha Stagemix pada iPad memungkinkan penyesuaian fader in-ear monitor musisi dan vocal balances langsung dari area altar panggung." },
      { id: "route-vm2", title: "11. Virtual Mixer 2 (Laptop FOH Control)", category: "audio", tag: "UNNES x Andreas", status: "Verified ✅", chain: ["Mixer Yamaha QL5", "WiFi UNNES-ID Network", "Laptop Virtual Mixer 2 (Andreas)", "Power Adaptor LTP"], details: "Yamaha QL5 Editor pada laptop untuk memantau routing matrix broadcast, dynamic limiter, dan mute group secara real-time." },
      { id: "route-pro3-tv", title: "12. ProPresenter 3 & Stage Timekeeper TV", category: "media", tag: "PRO3 x Darrel", status: "Verified ✅", chain: ["Terminal Cable XCH", "Laptop ProPresenter 3 (Darrel)", "Power Adaptor LTP", "HDMI to HDMI Cable 1M", "Television Monitor (Darrel)", "Power Adaptor TV"], details: "Terpisah dari Broadcast System. Menampilkan countdown khotbah, stage message, dan penanda durasi rundown ibadah." }
    ];

    const MASTER_INVENTORY = [
      // OWL
      { id: "inv-owl-1", name: "Sony A6000", qty: "2 Unit", provider: "OWL", status: "Verified", category: "camera", note: "Untuk CAM 3 & CAM 4" },
      { id: "inv-owl-2", name: "Sony A6400", qty: "1 Unit", provider: "OWL", status: "Verified", category: "camera", note: "Untuk Lead Photo (Nico)" },
      { id: "inv-owl-3", name: "Sony ZV-E10", qty: "1 Unit", provider: "OWL", status: "Verified", category: "camera", note: "Untuk CAM 1 (Alex)" },
      { id: "inv-owl-4", name: "Lens 18-105MM F4 G", qty: "3 Unit", provider: "OWL", status: "Verified", category: "lens", note: "CAM 1, CAM 2, CAM 3" },
      { id: "inv-owl-5", name: "Lens 50MM Prime", qty: "1 Unit", provider: "OWL", status: "Verified", category: "lens", note: "Photo Nico" },
      { id: "inv-owl-6", name: "Battery Sony NP-FW50", qty: "8 Unit", provider: "OWL", status: "Verified", category: "power", note: "Multi-camera broadcast" },
      { id: "inv-owl-7", name: "Charger Sony Multi", qty: "1 Pack", provider: "OWL", status: "Verified", category: "power", note: "Charging station" },
      { id: "inv-owl-8", name: "Memory Card 32GB High Speed", qty: "4 Unit", provider: "OWL", status: "Verified", category: "storage", note: "Broadcast & Photo" },
      { id: "inv-owl-9", name: "Cinetreak Cinelive V1 Switcher", qty: "1 Pack", provider: "OWL", status: "Verified", category: "switcher", note: "Master Video Switcher" },
      { id: "inv-owl-10", name: "Power Adaptor MIX", qty: "1 Unit", provider: "OWL", status: "Verified", category: "power", note: "Cinetreak V1 Power" },
      { id: "inv-owl-11", name: "Hollyland Pyro H Wireless Kit", qty: "1 Pack", provider: "OWL", status: "Verified", category: "wireless", note: "Transmitter TX + Receiver RX (CAM 2 Kiel)" },
      { id: "inv-owl-12", name: "Power Adaptor WIR (Pyro H)", qty: "1 Unit", provider: "OWL", status: "Verified", category: "power", note: "Hollyland Pyro H RX Power" },
      { id: "inv-owl-13", name: "Hollyland Pyro S Wireless Kit", qty: "1 Pack", provider: "OWL", status: "Verified", category: "wireless", note: "Transmitter TX + Receiver RX (CAM 1 Alex)" },
      { id: "inv-owl-14", name: "Power Adaptor WIR (Pyro S)", qty: "1 Unit", provider: "OWL", status: "Verified", category: "power", note: "Hollyland Pyro S RX Power" },
      { id: "inv-owl-15", name: "Tripod Camera Big Heavy Duty", qty: "1 Unit", provider: "OWL", status: "Verified", category: "tripod", note: "CAM 1 Deck" },
      { id: "inv-owl-16", name: "HDMI to Micro HDMI Converter", qty: "2 Unit", provider: "OWL", status: "Verified", category: "converter", note: "Sony Micro HDMI adapter" },
      { id: "inv-owl-17", name: "HDMI to Micro HDMI Cable 30CM", qty: "2 Unit", provider: "OWL", status: "Verified", category: "cable", note: "CAM 1 & CAM 2 Wireless link" },
      { id: "inv-owl-18", name: "HDMI Video Capture Card", qty: "2 Unit", provider: "OWL", status: "Verified", category: "capture", note: "Pro1 & Pro2 Capture" },
      // ABON
      { id: "inv-abon-1", name: "HDMI Video Capture Card USB 3.0", qty: "2 Unit", provider: "ABON", status: "Verified", category: "capture", note: "Resolume & Secondary Input" },
      // Andreas
      { id: "inv-and-1", name: "Fan Cooler Laptop High RPM", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "accessories", note: "OBS cooling dock" },
      { id: "inv-and-2", name: "Mouse Pad Precision XL", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "accessories", note: "Engine Table" },
      { id: "inv-and-3", name: "Keyboard External Mechanical", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "accessories", note: "Hotkey trigger" },
      { id: "inv-and-4", name: "Mouse External Ergonomic", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "accessories", note: "Switcher backup" },
      { id: "inv-and-5", name: "Powerbank 20.000mAh PD", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "power", note: "Emergency mobile power" },
      { id: "inv-and-6", name: "Power Adaptor USB A Multiport", qty: "9 Unit", provider: "Andreas", status: "Checked", category: "power", note: "Peripheral charge" },
      { id: "inv-and-7", name: "Power Adaptor USB A x C Fast Charge", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "power", note: "Fast charging hub" },
      { id: "inv-and-8", name: "Power Adaptor USB C PD 65W", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "power", note: "Laptop / DAC power" },
      { id: "inv-and-9", name: "USB A to USB B Data Cable", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Audio DAC / Interface" },
      { id: "inv-and-10", name: "USB A to USB Micro B Cable", qty: "2 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Camera control" },
      { id: "inv-and-11", name: "USB A to USB C Data 3.0 Cable", qty: "1 Unit", provider: "Andreas", status: "Verified", category: "cable", note: "Cinetreak to OBS" },
      { id: "inv-and-12", name: "USB A to USB C Charge Cable", qty: "1 Unit", provider: "Andreas", status: "Verified", category: "cable", note: "Device charging" },
      { id: "inv-and-13", name: "USB C to USB C Charge Cable PD", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Mac / iPad sync" },
      { id: "inv-and-14", name: "USB A to USB A Extender 30CM", qty: "2 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Dongle extension" },
      { id: "inv-and-15", name: "USB A to USB A Extender 2M", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Long USB run" },
      { id: "inv-and-16", name: "USB A to USB C Male Converter", qty: "4 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "Port compatibility" },
      { id: "inv-and-17", name: "USB A to USB C Female Converter", qty: "2 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "OTG adapter" },
      { id: "inv-and-18", name: "USB A to Mini USB Cable", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Legacy device sync" },
      { id: "inv-and-19", name: "USB A Hub Splitter 3CH", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "USB expansion" },
      { id: "inv-and-20", name: "USB A Hub Splitter 4CH", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "USB expansion" },
      { id: "inv-and-21", name: "USB C DAC Hanason AB17X 24bit", qty: "1 Unit", provider: "Andreas", status: "Verified", category: "audio", note: "Resolume to QL5" },
      { id: "inv-and-22", name: "USB C DAC Oraimo OAA310", qty: "1 Unit", provider: "Andreas", status: "Verified", category: "audio", note: "Backup DAC" },
      { id: "inv-and-23", name: "In Ear Monitor QKZ Hi7T", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "audio", note: "Director audio monitoring" },
      { id: "inv-and-24", name: "In Ear Monitor KZ EDX Pro", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "audio", note: "OBS audio monitoring" },
      { id: "inv-and-25", name: "Fastdrive Vgen SSD 128GB Portable", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "storage", note: "High speed media assets" },
      { id: "inv-and-26", name: "Fastdrive Toshiba HDD 1TB", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "storage", note: "Master recording backup" },
      { id: "inv-and-27", name: "Flashdrive Toshiba 8GB", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "storage", note: "Emergency PPT storage" },
      { id: "inv-and-28", name: "Flashdrive Sandisk 16GB", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "storage", note: "Firmware / assets" },
      { id: "inv-and-29", name: "Flashdrive Toshiba 32GB", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "storage", note: "Resolume loop assets" },
      { id: "inv-and-30", name: "Flashdrive Toshiba 64GB", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "storage", note: "Video opening master" },
      { id: "inv-and-31", name: "HDMI to Mini HDMI Converter", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "Adapter" },
      { id: "inv-and-32", name: "Mini HDMI to Mini HDMI Cable 1.5M", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Direct monitor link" },
      { id: "inv-and-33", name: "HDMI to HDMI Cable 1.5M", qty: "3 Unit", provider: "Andreas", status: "Verified", category: "cable", note: "Engine desk patch" },
      { id: "inv-and-34", name: "VGA to HDMI Converter Active", qty: "3 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "Legacy fallback" },
      { id: "inv-and-35", name: "VGA to VGA Cable 1.5M", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Legacy monitor patch" },
      { id: "inv-and-36", name: "Power Cable 3PIN Heavy Duty", qty: "3 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Cek isolasi grounding" },
      { id: "inv-and-37", name: "Power Cable 2PIN Standard", qty: "1 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Cek insulasi luar" },
      { id: "inv-and-38", name: "Terminal Cable 4CH 5M", qty: "3 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Engine cluster" },
      { id: "inv-and-39", name: "Terminal Cable 3CH 3M", qty: "2 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Camera pod" },
      { id: "inv-and-40", name: "Terminal Cable 2CH 2M", qty: "1 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Audio pod" },
      { id: "inv-and-41", name: "Terminal Cable Master XCH", qty: "X Unit", provider: "Andreas", status: "Verified", category: "power", note: "Master trunk line" },
      { id: "inv-and-42", name: "Terminal T Splitter 3 Way", qty: "8 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Periksa kontak tembaga" },
      { id: "inv-and-43", name: "Addon Box (Hardware Kit)", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Clamps, cold shoes" },
      { id: "inv-and-44", name: "Jack Box (Audio Adapter Kit)", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "audio", note: "3.5mm, 6.5mm, RCA, XLR" },
      { id: "inv-and-45", name: "Screw Box (Camera 1/4 & 3/8)", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Quick release plates" },
      { id: "inv-and-46", name: "Ties Box (Cable Management)", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Velcro & zip ties" },
      { id: "inv-and-47", name: "Tool Box Pro (Screwdriver/Pliers)", qty: "2 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Field repair toolkit" },
      { id: "inv-and-48", name: "Cable Reel Spare", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "cable", note: "Emergency spare run" },
      { id: "inv-and-49", name: "Gaffer & Electrical Tape Heavy", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Floor taping & safety" },
      // GIA Deliksari
      { id: "inv-gia-1", name: "Mixer NewBaxs CT80S 8-Channel", qty: "1 Unit", provider: "GIA Deliksari", status: "Verified", category: "audio", note: "Broadcast Sub-Mixer" },
      { id: "inv-gia-2", name: "XLR Female to Male Cable 3M", qty: "2 Unit", provider: "GIA Deliksari", status: "Verified", category: "audio", note: "CT80S patch" },
      { id: "inv-gia-3", name: "USB A to USB C Data Cable", qty: "1 Unit", provider: "GIA Deliksari", status: "Verified", category: "cable", note: "CT80S to OBS" },
      { id: "inv-gia-4", name: "Tripod Camera Big Sturdy", qty: "1 Unit", provider: "GIA Deliksari", status: "Verified", category: "tripod", note: "CAM 3 Dewi" },
      { id: "inv-gia-5", name: "HDMI Splitter 2CH Powered", qty: "1 Unit", provider: "GIA Deliksari", status: "Checked", category: "converter", note: "Spare splitter" },
      { id: "inv-gia-6", name: "Power Adaptor SPL", qty: "1 Pack", provider: "GIA Deliksari", status: "Checked", category: "power", note: "Splitter power" },
      { id: "inv-gia-7", name: "HDMI to HDMI Cable 1M", qty: "2 Unit", provider: "GIA Deliksari", status: "Verified", category: "cable", note: "Rack patching" },
      // GKJ Ngaliyan
      { id: "inv-gkj-1", name: "Stand Lighting Small", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "tripod", note: "Mounting wireless RX" },
      { id: "inv-gkj-2", name: "HDMI Cable 15M High Speed", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "cable", note: "Resolume to NovaStar" },
      { id: "inv-gkj-3", name: "HDMI Cable 10M High Speed", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "cable", note: "CAM 3 Dewi Run" },
      { id: "inv-gkj-4", name: "HDMI Cable 5M High Speed", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Checked", category: "cable", note: "Stage aux run" },
      { id: "inv-gkj-5", name: "HDMI Cable 1.5M Patch", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Checked", category: "cable", note: "Table patch" },
      { id: "inv-gkj-6", name: "HDMI Video Capture Card USB", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "capture", note: "Spare capture" },
      { id: "inv-gkj-7", name: "HDMI Splitter 4CH 4K", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Checked", category: "converter", note: "Secondary distribution" },
      { id: "inv-gkj-8", name: "Power Adaptor SPL 5V", qty: "1 Pack", provider: "GKJ Ngaliyan", status: "Checked", category: "power", note: "Splitter power" },
      // UKK UNNES
      { id: "inv-ukk-1", name: "XLR Female to Male Cable 10M", qty: "3 Unit", provider: "UKK UNNES", status: "Verified", category: "audio", note: "QL5 to NewBaxs master run" },
      { id: "inv-ukk-2", name: "Stand Lighting Small", qty: "4 Unit", provider: "UKK UNNES", status: "Warning", category: "tripod", note: "Stage perimeter & RX stand" },
      { id: "inv-ukk-3", name: "Tripod Camera Big Pro", qty: "1 Unit", provider: "UKK UNNES", status: "Verified", category: "tripod", note: "CAM 4 Nathania" },
      { id: "inv-ukk-4", name: "HDMI to Mini HDMI Cable 2.5M", qty: "1 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Backup camera run" },
      { id: "inv-ukk-5", name: "HDMI Cable 15M Braided", qty: "1 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Spare long run" },
      { id: "inv-ukk-6", name: "HDMI Cable 10M High Speed", qty: "1 Unit", provider: "UKK UNNES", status: "Verified", category: "cable", note: "CAM 4 Nathania Run" },
      { id: "inv-ukk-7", name: "HDMI Cable 1.5M Patch", qty: "4 Unit", provider: "UKK UNNES", status: "Warning", category: "cable", note: "Table patch & Wireless RX link" },
      { id: "inv-ukk-8", name: "HDMI Splitter 4CH Active", qty: "1 Unit", provider: "UKK UNNES", status: "Verified", category: "converter", note: "Primary PGM Splitter" },
      { id: "inv-ukk-9", name: "Power Adaptor SPL", qty: "1 Pack", provider: "UKK UNNES", status: "Verified", category: "power", note: "Splitter power" },
      { id: "inv-ukk-10", name: "VGA to VGA Cable 1.5M", qty: "1 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Backup display" },
      { id: "inv-ukk-11", name: "VGA to VGA Cable 2.5M", qty: "1 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Backup display" },
      { id: "inv-ukk-12", name: "VGA to HDMI Converter Active", qty: "2 Unit", provider: "UKK UNNES", status: "Checked", category: "converter", note: "Backup converter" },
      { id: "inv-ukk-13", name: "Power Cable XPIN", qty: "X Unit", provider: "UKK UNNES", status: "Checked", category: "power", note: "AC cables" },
      { id: "inv-ukk-14", name: "Terminal Cable XCH Master Box", qty: "X Unit", provider: "UKK UNNES", status: "Verified", category: "power", note: "Master distribution" },
      // Lio
      { id: "inv-lio-1", name: "HDMI Cable 1.5M High Speed", qty: "1 Unit", provider: "Lio", status: "Verified", category: "cable", note: "Hollyland RX patch" },
      // Darrel
      { id: "inv-darrel-1", name: "Television Monitor 32 Inch", qty: "1 Unit", provider: "Darrel", status: "Verified", category: "display", note: "Stage Timekeeper Display" },
      { id: "inv-darrel-2", name: "Power Adaptor TV & Remote", qty: "1 Pack", provider: "Darrel", status: "Verified", category: "power", note: "Timekeeper TV Power" },
      { id: "inv-darrel-3", name: "Memory Card 8GB", qty: "1 Unit", provider: "Darrel", status: "Checked", category: "storage", note: "Spare emergency card" },
      // Kiel
      { id: "inv-kiel-1", name: "Sony ZV-E10 Body 4K", qty: "1 Unit", provider: "Kiel", status: "Verified", category: "camera", note: "CAM 2 Wireless Kiel 1" },
      { id: "inv-kiel-2", name: "Sony Kit Lens 16-50MM OSS", qty: "1 Unit", provider: "Kiel", status: "Verified", category: "lens", note: "CAM 4 Nathania" },
      { id: "inv-kiel-3", name: "Sony Manual Lens 50MM F1.8", qty: "1 Unit", provider: "Kiel", status: "Checked", category: "lens", note: "Artistic b-roll spare" },
      { id: "inv-kiel-4", name: "Battery Sony NP-FW50", qty: "2 Unit", provider: "Kiel", status: "Verified", category: "power", note: "CAM 2 Battery" },
      { id: "inv-kiel-5", name: "Charger Sony Dual Slot", qty: "1 Pack", provider: "Kiel", status: "Verified", category: "power", note: "Rapid charging" },
      { id: "inv-kiel-6", name: "Memory Card 64GB Extreme Pro", qty: "1 Unit", provider: "Kiel", status: "Verified", category: "storage", note: "CAM 1 Alex" },
      { id: "inv-kiel-7", name: "Memory Card 128GB Extreme Pro", qty: "1 Unit", provider: "Kiel", status: "Checked", category: "storage", note: "Secondary master recording" },
      // Joel
      { id: "inv-joel-1", name: "Sony A6600 Body 4K", qty: "1 Unit", provider: "Joel", status: "Verified", category: "camera", note: "Cinematic Video Lead" },
      { id: "inv-joel-2", name: "Zeiss Vario-Tessar 24-70MM F4", qty: "1 Unit", provider: "Joel", status: "Verified", category: "lens", note: "Joel Cinematic Rig" },
      { id: "inv-joel-3", name: "Battery Sony NP-FZ100", qty: "2 Unit", provider: "Joel", status: "Verified", category: "power", note: "High capacity A6600" },
      { id: "inv-joel-4", name: "Charger Sony FZ100 Dual", qty: "1 Pack", provider: "Joel", status: "Verified", category: "power", note: "Joel battery hub" },
      { id: "inv-joel-5", name: "Memory Card 64GB Extreme Pro", qty: "1 Unit", provider: "Joel", status: "Verified", category: "storage", note: "Joel 4K S-Log footage" },
      { id: "inv-joel-6", name: "Gimbal 3-Axis DJI Ronin RS3", qty: "1 Unit", provider: "Joel", status: "Verified", category: "accessories", note: "Stabilized cinematic tracking" },
      // Kezia
      { id: "inv-kezia-1", name: "Television Monitor", qty: "1 Unit", provider: "Kezia", status: "Verified", category: "display", note: "Master Video Switcher Multiview" },
      { id: "inv-kezia-2", name: "Power Adaptor TV & HDMI Cable", qty: "1 Pack", provider: "Kezia", status: "Verified", category: "power", note: "Multiview TV Station" },
      // Jennifer
      { id: "inv-jen-1", name: "HP Iphone 15", qty: "1 Unit", provider: "Jennifer", status: "Verified", category: "camera", note: "Social Media / Mobile Reels" },
      // Panitia
      { id: "inv-panitia-1", name: "HDMI to Micro HDMI Converter", qty: "2 Unit", provider: "Panitia", status: "Verified", category: "converter", note: "Camera rig adapters" },
      { id: "inv-panitia-2", name: "Terminal Cable Heavy Duty XCH", qty: "X Unit", provider: "Panitia", status: "Verified", category: "power", note: "Auditorium main feeder" }
    ];

    const MEDIA_ASSET_CHECKLIST = [
      {
        phase: "Pre Ibadah (Open Gate)",
        items: [
          { id: "mat-pre-1", title: "Playlist (Lagu Rohani)", dest: "Sound System (Yamaha QL5)", pic: "Sound / Resolume DAC", type: "Audio Playback", status: "Ready ✅", notes: "Dimulai saat pintu open gate dibuka sampai 10 menit sebelum countdown." },
          { id: "mat-pre-2", title: "Loop Video (Profile UKK, After Movie IP25, IN25)", dest: "LED Tengah (Resolume Arena)", pic: "Bayu & Andreas", type: "1080p Video Loop", status: "Ready ✅", notes: "Diputar secara loop di LED Center dengan transisi fade halus." }
        ]
      },
      {
        phase: "Ibadah (Event)",
        items: [
          { id: "mat-evt-1", title: "Video Opening", dest: "LED Tengah (Resolume Arena)", pic: "Andreas & Wilfred", type: "1080p MP4 Video", status: "Ready ✅", notes: "Memicu dimming lampu auditorium dan cue awal opening worship team." },
          { id: "mat-evt-2", title: "Video Sambutan Bu Grave", dest: "LED Tengah Kanan Kiri", pic: "Rania & Andreas", type: "1080p MP4 Video", status: "Ready ✅", notes: "Pastikan audio terkirim ke QL5 via USB DAC tanpa clipping." },
          { id: "mat-evt-3", title: "Background Tema", dest: "LED Tengah", pic: "Bayu", type: "Motion Graphic Loop", status: "Ready ✅", notes: "Background visual dinamis selama sesi praise and worship." },
          { id: "mat-evt-4", title: "Background Lagu", dest: "Sound System", pic: "Sound Engineer", type: "Ambient Audio", status: "Ready ✅", notes: "Underlay musik saat doa pembuka, perjamuan/penyerahan, & altar call." },
          { id: "mat-evt-5", title: "Lirik Lagu", dest: "LED Tengah Kanan Kiri", pic: "Rania & Filia", type: "ProPresenter 7 Project", status: "Ready ✅", notes: "Sinkronisasi pergantian lirik sesuai arahan Worship Leader (WL)." },
          { id: "mat-evt-6", title: "Video Generation", dest: "LED Tengah Kanan Kiri", pic: "Andreas", type: "1080p Bumper Video", status: "Ready ✅", notes: "Menjembatani transisi dari praise & worship ke sesi pemberitaan Firman." },
          { id: "mat-evt-7", title: "PPT Pembicara", dest: "LED Tengah Kanan Kiri", pic: "Rania", type: "PowerPoint / ProPresenter Slides", status: "Ready ✅", notes: "Pastikan font ter-embed dan pointer slide berfungsi lancar." },
          { id: "mat-evt-8", title: "Ayat Pembicara", dest: "LED Tengah Kanan Kiri", pic: "Filia", type: "Scripture Overlay", status: "Ready ✅", notes: "Siapkan quick Bible search di ProPresenter untuk ayat spontan." },
          { id: "mat-evt-9", title: "Quote Pembicara", dest: "LED Tengah Kanan Kiri", pic: "Rania & Filia", type: "Graphic Quotes", status: "Ready ✅", notes: "Tampilkan setiap pembicara menekankan poin-poin khotbah penting." },
          { id: "mat-evt-10", title: "Persembahan (QRIS)", dest: "LED Tengah Kanan Kiri + OBS Stream", pic: "Rania & Andreas", type: "QRIS Graphic Card", status: "Ready ✅", notes: "Pastikan QRIS dapat di-scan dari jarak jauh auditorium & di layar live stream." },
          { id: "mat-evt-11", title: "UKK News", dest: "LED Tengah Kanan Kiri", pic: "Rania", type: "Slide Announcement", status: "Ready ✅", notes: "Jadwal ibadah rutin, fellowship kampus, dan rekruitmen panitia." },
          { id: "mat-evt-12", title: "Pokok Doa", dest: "LED Tengah Kanan Kiri", pic: "Filia", type: "Prayer Bullet Points", status: "Ready ✅", notes: "Ditampilkan saat pendoa syafaat memimpin doa bersama." }
        ]
      },
      {
        phase: "Post Ibadah (Close Gate)",
        items: [
          { id: "mat-post-1", title: "Usung-Usung", dest: "Seluruh Tim Produksi & Logistik", pic: "Seluruh Kru (Koordinator: Andreas & Kiel)", type: "Demobilization Checklist", status: "Standby ⏳", notes: "Verifikasi pengembalian alat per pemilik (OWL, GIA, GKJ, UKK, Pribadi)." }
        ]
      }
    ];

    const SOP_AND_CONTINGENCIES = [
      {
        id: "sop-1",
        title: "SOP 1: Pre-Event Checklist & Wireless RF Sync (H-3 Jam)",
        steps: [
          "Nyalakan Master AC Power & periksa tegangan kabel terminal XCH (harus stabil 220V - 230V).",
          "Koneksikan receiver Hollyland Pyro S (CAM 1) dan Hollyland Pyro H (CAM 2) ke Switcher Cinetreak V1 sebelum menyalakan kamera.",
          "Lakukan RF Frequency Scan pada kedua unit wireless Hollyland untuk menghindari bentrokan kanal dan interferensi WiFi auditorium.",
          "Koneksikan kabel HDMI 10M CAM 3 & CAM 4 ke Switcher Input 3 & 4.",
          "Test loop gambar ProPresenter 1, ProPresenter 2, dan Resolume Arena ke Video Processor LED Center & Sayap.",
          "Lakukan Sound Check & Level Metering: Yamaha QL5 -> NewBaxs CT80S -> OBS Studio (Target Livestream: -14 LUFS, Peak -3dB)."
        ]
      },
      {
        id: "sop-2",
        title: "SOP 2: Camera Operation Protocol",
        steps: [
          "CAM 1 (Alex): Berdiri di FOH Center Deck. Manfaatkan wireless Pyro S untuk kebebasan framing master stage & pembicara.",
          "CAM 2 (Kiel 1): Wajib menggunakan strap kamera. Bergerak dinamis di sekitar panggung dengan Pyro H tanpa menghalangi pandangan jemaat.",
          "CAM 3 (Dewi) & CAM 4 (Nathania): Jaga komposisi framing cross-angle dan panning lambat saat perpindahan vokal.",
          "Semua operator kamera wajib mengenakan busana rapi berwarna gelap/hitam dan selalu memantau arahan Switcher di Intercom."
        ]
      },
      {
        id: "sop-3",
        title: "SOP 3: Emergency Contingency Plan (Fail-Safe Procedures)",
        steps: [
          "Wireless Pyro S / Pyro H Dropout: Operator kamera mendekat ke tiang lighting stand receiver RX untuk re-locking sinyal.",
          "Jalur HDMI CAM 3/4 Terputus: Switcher operator langsung beralih (CUT) ke CAM 1/2 Wireless atau Graphic Standby di OBS.",
          "Resolume / ProPresenter Crash: Operator cadangan di Backup Station langsung beralih ke HDMI Splitter direct pass-through.",
          "Audio Clipping / Noise Grounding: Switcher OBS mengaktifkan Noise Gate & Compressor filter cadangan di OBS Audio Rack.",
          "Listrik Panggung Padam: Seluruh laptop berada dalam status baterai 100% dan UPS standby melindungi Cinetreak V1 & QL5."
        ]
      }
    ];

    const SCHEMATIC_SPECS = {
      cam1: { title: "CAM 1 — Sony ZV-E10 (Alex)", desc: "Main Stage & Altar Master Framing. Port: Micro HDMI -> HDMI 30cm -> Hollyland Pyro S TX.", badge: "5.8GHz Pyro S (In 1)" },
      cam2: { title: "CAM 2 — Sony ZV-E10 (Kiel 1)", desc: "Roving Wireless Altar & Close-up. Port: Micro HDMI -> HDMI 30cm -> Hollyland Pyro H TX.", badge: "5.8GHz Pyro H (In 2)" },
      cam3: { title: "CAM 3 — Sony A6000 (Dewi)", desc: "Wing House Left medium profile. Port: Micro HDMI converter -> HDMI 10M Tethered Cable.", badge: "HDMI 10M (In 3)" },
      cam4: { title: "CAM 4 — Sony A6000 (Nathania)", desc: "Wing House Right wide altar. Port: Micro HDMI converter -> HDMI 10M Tethered Cable.", badge: "HDMI 10M (In 4)" },
      pyros: { title: "Hollyland Pyro S Wireless Kit", desc: "Transmitter (TX) di rig CAM 1 -> Receiver (RX) di Lighting Stand FOH -> HDMI 1.5M ke Switcher In 1.", badge: "5.8GHz Zero-Latency" },
      pyroh: { title: "Hollyland Pyro H Wireless Kit", desc: "Transmitter (TX) di rig CAM 2 -> Receiver (RX) di Lighting Stand Panggung -> HDMI 1.5M ke Switcher In 2.", badge: "5.8GHz Low-Latency" },
      switcher: { title: "Cinetreak Cinelive V1 Switcher", desc: "Master Vision Console. 4 HDMI Inputs, Multi-view HDMI Out ke TV Kezia, PGM HDMI Out ke Splitter 4CH, USB-C UVC ke OBS.", badge: "Master Vision Hub" },
      tvmultiview: { title: "TV Kezia — Multiview Monitor", desc: "Menampilkan 4 input kamera secara real-time, Program bus, Preview bus, serta Audio VU meters untuk Operator Switcher (Wilfred).", badge: "HDMI Multiview" },
      obs: { title: "Laptop OBS Studio (Andreas)", desc: "Live Broadcast Ingest via USB-C UVC (1080p60) dan USB Audio dari NewBaxs CT80S -> RTMP stream ke YouTube Live.", badge: "1080p60 RTMP Ingest" },
      splitter: { title: "Active HDMI Splitter 4CH (UKK)", desc: "Mendistribusikan sinyal PGM Switcher ke ProPresenter 1 (LED Sayap) dan Resolume Arena (LED Center) tanpa kehilangan kualitas.", badge: "Active 4K Splitter" },
      pro1: { title: "Laptop ProPresenter 1 (Rania)", desc: "Menampilkan Lirik Lagu, Slide Khotbah, Video Sambutan Bu Grave langsung ke Video Processor LED Sayap Kiri/Kanan/Belakang.", badge: "LED Sayap Engine" },
      pro2: { title: "Laptop ProPresenter 2 (Filia)", desc: "Grafis Lower-Third, Scripture overlay firman, dan banner pengumuman dengan alpha channel ke Resolume Arena.", badge: "Live Graphics Feed" },
      resolume: { title: "Laptop Resolume Arena (Andreas/Bayu)", desc: "Visual Stage Engine. Video Loop, Bumper, Background Tema, PGM Camera Mix via HDMI 15M ke NovaStar Controller LED Center.", badge: "LED Center Megascreen" },
      ql5: { title: "Mixer Yamaha QL5 (UNNES FOH)", desc: "Master audio 32 channel panggung auditorium. Mengirimkan dedicated stereo matrix/aux send ke NewBaxs CT80S via kabel XLR 10M+3M.", badge: "32CH FOH Console" },
      ct80s: { title: "Mixer NewBaxs CT80S (GIA)", desc: "Broadcast Sub-Mixer. Fine-tune EQ, dynamic compression, dan USB Audio Interface langsung ke OBS Studio.", badge: "USB Audio Interface" },
      ytlive: { title: "YouTube Live Broadcast Stream", desc: "Live stream output resolusi 1080p 60fps, bitrate 6500 kbps, audio stereo AAC 192 kbps disiarkan ke seluruh jemaat daring.", badge: "Public Broadcast" }
    };

    /* ==========================================================================
       MASTER COMMAND CONTROLLER CLASS
       ========================================================================== */
    class MasterCommandApp {
      constructor() {
        this.pgmChannel = 1;
        this.pvwChannel = 2;
        this.selectedTallyCam = 1;
        this.tallySoundEnabled = true;
        this.isTransitioning = false;
        this.transitionProgress = 0;
        this.pipEnabled = false;

        this.storageKeyInv = 'ip26_inventory_state_v1';
        this.storageKeyMedia = 'ip26_media_state_v1';
        this.storageKeyNotes = 'ip26_notes_v1';
        this.storageKeyIncidents = 'ip26_incidents_v1';

        this.checkedInv = this.loadJSON(this.storageKeyInv);
        this.checkedMedia = this.loadJSON(this.storageKeyMedia);
        this.incidentLogs = this.loadJSON(this.storageKeyIncidents, []);

        this.currentProvider = 'all';
        this.currentCategory = 'all';
        this.currentStatus = 'all';
        this.currentSearch = '';
        this.currentSlide = 0;

        this.audioCtx = null;
        this.oscillator = null;
        this.gainNode = null;
        this.isAudioPlaying = false;

        // Stage Timer
        this.timerMode = 'countdown'; // 'countdown' or 'stopwatch'
        this.timerSeconds = 45 * 60; // default 45m
        this.timerInitialSeconds = 45 * 60;
        this.timerInterval = null;
      }

      loadJSON(key, fallback = {}) {
        try {
          const v = localStorage.getItem(key);
          return v ? JSON.parse(v) : fallback;
        } catch (e) { return fallback; }
      }

      saveJSON(key, data) {
        try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
      }

      init() {
        this.initClock();
        this.initScrollSpy();
        this.renderCrew('all');
        this.initCrewFilter();
        this.renderPipelines('all');
        this.initRouteFilter();
        this.initSchematicTracer();
        this.initSwitcher();
        this.initCameraFeeds();
        this.startVUMeters();
        this.initInventory();
        this.renderMediaChecklist();
        this.initStageTimer();
        this.initTools();
        this.initIncidentLogger();
        this.initSOP();
        this.initPresentation();
        this.initTallyBox();
        this.initHandoverForm();
      }

      initClock() {
        const clockEl = document.getElementById('live-event-clock');
        if (clockEl) {
          setInterval(() => {
            clockEl.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
          }, 1000);
        }
      }

      initScrollSpy() {
        const sections = document.querySelectorAll('.section-block');
        const navLinks = document.querySelectorAll('.nav-link');
        const dockItems = document.querySelectorAll('.dock-btn');

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
              dockItems.forEach(d => d.classList.toggle('active', d.getAttribute('href') === `#${id}`));
            }
          });
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

        sections.forEach(s => observer.observe(s));
      }

      renderCrew(div = 'all') {
        const container = document.getElementById('crew-directory-grid');
        if (!container) return;
        const filtered = div === 'all' ? CREW_ROLES : CREW_ROLES.filter(c => c.division === div);
        container.innerHTML = filtered.map(c => `
          <div class="glass-card">
            <div>
              <div class="card-top-row">
                <span class="card-main-title">${c.name}</span>
                <span class="glow-badge ${c.division === 'broadcast' ? 'white' : c.division === 'engine' ? 'red' : 'purple'}">${c.badge}</span>
              </div>
              <div class="card-subtitle-role">${c.role}</div>
              <div class="card-tech-chip">⚡ ${c.device}</div>
              <div class="card-body-text">${c.taskDescription}</div>
            </div>
            <div class="card-bottom-row">
              <span>📻 ${c.contact}</span>
              <span style="color:var(--accent-emerald); font-weight:700;">ONLINE / READY</span>
            </div>
          </div>
        `).join('');
      }

      initCrewFilter() {
        document.querySelectorAll('.crew-filter-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.crew-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.renderCrew(btn.dataset.division);
          });
        });
      }

      renderPipelines(filter = 'all') {
        const container = document.getElementById('pipeline-list-container');
        if (!container) return;
        const filtered = filter === 'all' ? ROUTING_PIPELINES : ROUTING_PIPELINES.filter(p => p.category === filter);
        container.innerHTML = filtered.map(p => `
          <div class="pipeline-container">
            <div class="pipeline-top-bar">
              <div class="pipeline-title-cluster">
                <span class="glow-badge ${p.category === 'video' ? 'white' : p.category === 'audio' ? 'purple' : p.category === 'power' ? 'emerald' : 'amber'}">${p.category.toUpperCase()}</span>
                <span class="pipeline-name">${p.title}</span>
              </div>
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <span class="glow-badge white">${p.tag}</span>
                <span style="color:var(--accent-emerald); font-size:0.82rem; font-weight:800;">${p.status}</span>
              </div>
            </div>
            <div class="pipeline-chain-flow">
              ${p.chain.map((n, i) => `
                <span class="pipeline-node"><strong>${i+1}.</strong> ${n}</span>
                ${i < p.chain.length - 1 ? '<span class="pipeline-arrow">➔</span>' : ''}
              `).join('')}
            </div>
            <div class="pipeline-desc-box">
              <strong>Rincian Teknis & Wiring:</strong> ${p.details}
            </div>
          </div>
        `).join('');
      }

      initRouteFilter() {
        document.querySelectorAll('.route-filter-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.route-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.renderPipelines(btn.dataset.filter);
          });
        });
      }

      initSchematicTracer() {
        const nodes = document.querySelectorAll('.schematic-node');
        const titleEl = document.getElementById('inspect-title');
        const descEl = document.getElementById('inspect-desc');
        const badgeEl = document.getElementById('inspect-badge');

        nodes.forEach(node => {
          node.addEventListener('click', () => {
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            const key = node.dataset.node;
            const spec = SCHEMATIC_SPECS[key];
            if (spec) {
              if (titleEl) titleEl.textContent = spec.title;
              if (descEl) descEl.textContent = spec.desc;
              if (badgeEl) badgeEl.innerHTML = `<span class="glow-badge cyan">${spec.badge}</span>`;
            }
          });
        });
      }

      initSwitcher() {
        document.querySelectorAll('[data-pgm-btn]').forEach(btn => {
          btn.addEventListener('click', () => {
            this.pgmChannel = parseInt(btn.dataset.pgmBtn);
            this.updateSwitcherUI();
          });
        });

        document.querySelectorAll('[data-pvw-btn]').forEach(btn => {
          btn.addEventListener('click', () => {
            this.pvwChannel = parseInt(btn.dataset.pvwBtn);
            this.updateSwitcherUI();
          });
        });

        const cutBtn = document.getElementById('btn-switcher-cut');
        if (cutBtn) {
          cutBtn.addEventListener('click', () => {
            const t = this.pgmChannel;
            this.pgmChannel = this.pvwChannel;
            this.pvwChannel = t;
            this.triggerTallyPulse();
            this.updateSwitcherUI();
          });
        }

        const autoBtn = document.getElementById('btn-switcher-auto');
        if (autoBtn) {
          autoBtn.addEventListener('click', () => {
            if (this.isTransitioning) return;
            this.isTransitioning = true;
            let p = 0;
            const step = () => {
              p += 0.05;
              this.transitionProgress = p;
              if (p >= 1) {
                this.isTransitioning = false;
                this.transitionProgress = 0;
                const t = this.pgmChannel;
                this.pgmChannel = this.pvwChannel;
                this.pvwChannel = t;
                this.triggerTallyPulse();
                this.updateSwitcherUI();
              } else {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
          });
        }

        const pipBtn = document.getElementById('btn-switcher-pip');
        if (pipBtn) {
          pipBtn.addEventListener('click', () => {
            this.pipEnabled = !this.pipEnabled;
            pipBtn.classList.toggle('active', this.pipEnabled);
          });
        }

        this.updateSwitcherUI();
      }

      setPreviewChannel(ch) {
        this.pvwChannel = ch;
        this.updateSwitcherUI();
      }

      updateSwitcherUI() {
        document.querySelectorAll('[data-pgm-btn]').forEach(b => b.classList.toggle('pgm-selected', parseInt(b.dataset.pgmBtn) === this.pgmChannel));
        document.querySelectorAll('[data-pvw-btn]').forEach(b => b.classList.toggle('pvw-selected', parseInt(b.dataset.pvwBtn) === this.pvwChannel));

        for (let i = 1; i <= 4; i++) {
          const slot = document.getElementById(`mv-slot-${i}`);
          const tally = document.getElementById(`mv-tally-${i}`);
          if (slot && tally) {
            slot.classList.remove('active-pgm', 'active-pvw');
            tally.classList.remove('pgm', 'pvw');
            if (i === this.pgmChannel) { slot.classList.add('active-pgm'); tally.classList.add('pgm'); }
            else if (i === this.pvwChannel) { slot.classList.add('active-pvw'); tally.classList.add('pvw'); }
          }
        }

        const pgmLabel = document.getElementById('pgm-channel-label');
        if (pgmLabel) pgmLabel.textContent = `PGM: CAM ${this.pgmChannel} (${BROADCAST_CAMERAS[this.pgmChannel - 1].operator})`;

        const pvwLabel = document.getElementById('pvw-channel-label');
        if (pvwLabel) pvwLabel.textContent = `PVW: CAM ${this.pvwChannel} (${BROADCAST_CAMERAS[this.pvwChannel - 1].operator})`;

        this.updateTallyScreen();
      }

      initCameraFeeds() {
        let t = 0;
        const renderLoop = () => {
          t += 0.03;
          for (let i = 1; i <= 4; i++) {
            const canvas = document.getElementById(`canvas-cam-${i}`);
            if (canvas) this.drawFeed(canvas, i, t);
          }
          const pvwCanvas = document.getElementById('canvas-pvw-master');
          if (pvwCanvas) this.drawFeed(pvwCanvas, this.pvwChannel, t);
          const pgmCanvas = document.getElementById('canvas-pgm-master');
          if (pgmCanvas) {
            if (!this.isTransitioning) {
              this.drawFeed(pgmCanvas, this.pgmChannel, t);
            } else {
              this.drawFeed(pgmCanvas, this.pgmChannel, t);
              const ctx = pgmCanvas.getContext('2d');
              ctx.save();
              ctx.globalAlpha = this.transitionProgress;
              this.drawFeed(pgmCanvas, this.pvwChannel, t);
              ctx.restore();
            }
            if (this.pipEnabled) {
              const ctx = pgmCanvas.getContext('2d');
              const pw = pgmCanvas.width * 0.32, ph = pgmCanvas.height * 0.32;
              const px = pgmCanvas.width - pw - 12, py = 12;
              ctx.fillStyle = '#000'; ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
              ctx.fillRect(px, py, pw, ph); ctx.strokeRect(px, py, pw, ph);
              ctx.fillStyle = '#f59e0b'; ctx.font = 'bold 9px "JetBrains Mono", monospace';
              ctx.fillText(`PiP: CAM ${this.pvwChannel}`, px + 6, py + 14);
            }
          }
          requestAnimationFrame(renderLoop);
        };
        renderLoop();
      }

      drawFeed(canvas, ch, t) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const w = canvas.width, h = canvas.height;
        ctx.fillStyle = '#101116'; ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)'; ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
        for (let y = 0; y < h; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

        const grad = ctx.createRadialGradient(w/2 + Math.sin(t + ch)*(w/4), h/2 + Math.cos(t*0.7 + ch)*20, 10, w/2, h/2, w/1.4);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);

        const cam = BROADCAST_CAMERAS[ch - 1];
        ctx.fillStyle = '#ffffff'; ctx.font = 'bold 12px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
        ctx.fillText(`CAM ${ch} • ${cam.model}`, w / 2, h / 2 - 10);
        ctx.font = '10px "Plus Jakarta Sans", sans-serif'; ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`${cam.position} (${cam.operator})`, w / 2, h / 2 + 10);
      }

      startVUMeters() {
        setInterval(() => {
          const ql = document.getElementById('vu-ql5-l'), qr = document.getElementById('vu-ql5-r');
          const ol = document.getElementById('vu-obs-l'), or = document.getElementById('vu-obs-r');
          if (ql && qr) {
            ql.style.height = `${Math.min(95, 60 + Math.random()*25)}%`;
            qr.style.height = `${Math.min(95, 62 + Math.random()*25)}%`;
          }
          if (ol && or) {
            ol.style.height = `${Math.min(92, 65 + Math.random()*20)}%`;
            or.style.height = `${Math.min(92, 68 + Math.random()*20)}%`;
          }
        }, 100);
      }

      initInventory() {
        const provSelect = document.getElementById('provider-filter-chips');
        const catSelect = document.getElementById('category-filter-select');
        const statSelect = document.getElementById('status-filter-select');
        const searchInp = document.getElementById('inventory-search-input');

        const providers = ['all', ...Array.from(new Set(MASTER_INVENTORY.map(i => i.provider))).sort()];
        if (provSelect) {
          provSelect.innerHTML = providers.map(p => `<button class="filter-pill ${p === 'all' ? 'active' : ''}" data-p="${p}">${p === 'all' ? 'Semua Pemilik (12)' : p}</button>`).join('');
          provSelect.querySelectorAll('[data-p]').forEach(b => {
            b.addEventListener('click', () => {
              provSelect.querySelectorAll('.filter-pill').forEach(c => c.classList.remove('active'));
              b.classList.add('active');
              this.currentProvider = b.dataset.p;
              this.renderInventoryTable();
            });
          });
        }

        const categories = ['all', ...Array.from(new Set(MASTER_INVENTORY.map(i => i.category))).sort()];
        if (catSelect) {
          catSelect.innerHTML = categories.map(c => `<option value="${c}">${c === 'all' ? 'Semua Kategori' : c.toUpperCase()}</option>`).join('');
          catSelect.addEventListener('change', (e) => { this.currentCategory = e.target.value; this.renderInventoryTable(); });
        }

        if (statSelect) {
          statSelect.addEventListener('change', (e) => { this.currentStatus = e.target.value; this.renderInventoryTable(); });
        }

        if (searchInp) {
          searchInp.addEventListener('input', (e) => { this.currentSearch = e.target.value.toLowerCase().trim(); this.renderInventoryTable(); });
        }

        const checkAll = document.getElementById('btn-check-all-inv');
        if (checkAll) {
          checkAll.addEventListener('click', () => {
            MASTER_INVENTORY.forEach(i => this.checkedInv[i.id] = true);
            this.saveJSON(this.storageKeyInv, this.checkedInv);
            this.renderInventoryTable();
          });
        }

        const resetInv = document.getElementById('btn-reset-check-inv');
        if (resetInv) {
          resetInv.addEventListener('click', () => {
            if (confirm('Reset seluruh checklist inventaris?')) {
              this.checkedInv = {};
              this.saveJSON(this.storageKeyInv, this.checkedInv);
              this.renderInventoryTable();
            }
          });
        }

        const expBtn = document.getElementById('btn-export-inv-json');
        if (expBtn) {
          expBtn.addEventListener('click', () => {
            const data = { event: "IP26 Production", date: new Date().toISOString(), items: MASTER_INVENTORY.map(i => ({ ...i, checked: !!this.checkedInv[i.id] })) };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = `IP26_Inventory_${new Date().toISOString().slice(0,10)}.json`; a.click();
          });
        }

        const prtBtn = document.getElementById('btn-print-inv');
        if (prtBtn) prtBtn.addEventListener('click', () => window.print());

        const createHandoverBtn = document.getElementById('btn-create-handover');
        if (createHandoverBtn) {
          createHandoverBtn.addEventListener('click', () => {
            document.getElementById('btn-open-handover-modal').click();
          });
        }

        this.renderInventoryTable();
      }

      renderInventoryTable() {
        const tbody = document.getElementById('inventory-table-body');
        if (!tbody) return;
        const filtered = MASTER_INVENTORY.filter(i => {
          if (this.currentProvider !== 'all' && i.provider !== this.currentProvider) return false;
          if (this.currentCategory !== 'all' && i.category !== this.currentCategory) return false;
          if (this.currentStatus !== 'all' && i.status !== this.currentStatus) return false;
          if (this.currentSearch) {
            const str = `${i.name} ${i.provider} ${i.category} ${i.note}`.toLowerCase();
            if (!str.includes(this.currentSearch)) return false;
          }
          return true;
        });

        tbody.innerHTML = filtered.map((item, idx) => `
          <tr>
            <td style="text-align:center;"><input type="checkbox" class="custom-check-box inv-cb" data-id="${item.id}" ${this.checkedInv[item.id] ? 'checked' : ''} /></td>
            <td style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${idx + 1}</td>
            <td><div style="font-weight:600; color:var(--text-pure);">${item.name}</div><div style="font-size:0.75rem; color:var(--text-muted);">${item.note || '-'}</div></td>
            <td style="font-family:var(--font-mono); font-weight:700; color:#ffffff;">${item.qty}</td>
            <td><span class="glow-badge white">${item.provider}</span></td>
            <td><span class="glow-badge white">${item.category.toUpperCase()}</span></td>
            <td><span class="glow-badge ${item.status === 'Verified' ? 'emerald' : item.status === 'Warning' ? 'red' : 'white'}">${item.status}</span></td>
          </tr>
        `).join('');

        tbody.querySelectorAll('.inv-cb').forEach(cb => {
          cb.addEventListener('change', (e) => {
            this.checkedInv[e.target.dataset.id] = e.target.checked;
            this.saveJSON(this.storageKeyInv, this.checkedInv);
            this.updateInventoryStats();
          });
        });

        this.updateInventoryStats();
      }

      updateInventoryStats() {
        const total = MASTER_INVENTORY.length;
        let checked = 0;
        MASTER_INVENTORY.forEach(i => { if (this.checkedInv[i.id]) checked++; });
        const pct = Math.round((checked / total) * 100);

        const tEl = document.getElementById('inv-stat-total');
        const cEl = document.getElementById('inv-stat-checked');
        const rEl = document.getElementById('inv-stat-remaining');
        const pEl = document.getElementById('inv-stat-percent');
        const barEl = document.getElementById('inv-stat-progress-bar');
        const kpiTotal = document.getElementById('kpi-inv-total');

        if (tEl) tEl.textContent = total;
        if (cEl) cEl.textContent = checked;
        if (rEl) rEl.textContent = total - checked;
        if (pEl) pEl.textContent = `${pct}% Ready`;
        if (barEl) barEl.style.width = `${pct}%`;
        if (kpiTotal) kpiTotal.textContent = `${total} Item`;
      }

      renderMediaChecklist() {
        const container = document.getElementById('media-rundown-container');
        if (!container) return;
        container.innerHTML = MEDIA_ASSET_CHECKLIST.map((phase, pIdx) => `
          <div style="margin-bottom:2rem;">
            <div class="phase-subhead">
              <span class="glow-badge white">FASE ${pIdx + 1}</span>
              <h3 class="phase-headline">${phase.phase}</h3>
            </div>
            <div class="crew-deck-grid">
              ${phase.items.map(item => `
                <div class="glass-card" style="background:var(--bg-surface);">
                  <div>
                    <div class="card-top-row">
                      <span class="glow-badge white">${item.type}</span>
                      <input type="checkbox" class="custom-check-box media-cb" data-id="${item.id}" ${this.checkedMedia[item.id] ? 'checked' : ''} />
                    </div>
                    <div class="card-main-title" style="font-size:1.02rem; margin-bottom:0.35rem;">${item.title}</div>
                    <div style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.45rem;">🎯 Destinasi: ${item.dest}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.75rem;">👤 PIC: <strong style="color:var(--text-primary);">${item.pic}</strong></div>
                  </div>
                  <div style="font-size:0.82rem; color:var(--text-secondary); background:var(--bg-midnight); padding:0.55rem 0.8rem; border-radius:var(--radius-xs); border-left:3px solid var(--border-strong);">
                    💡 ${item.notes}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('');

        container.querySelectorAll('.media-cb').forEach(cb => {
          cb.addEventListener('change', (e) => {
            this.checkedMedia[e.target.dataset.id] = e.target.checked;
            this.saveJSON(this.storageKeyMedia, this.checkedMedia);
          });
        });
      }

      initStageTimer() {
        const display = document.getElementById('stopwatch-display');
        const start = document.getElementById('btn-sw-start');
        const pause = document.getElementById('btn-sw-pause');
        const reset = document.getElementById('btn-sw-reset');
        const fsBtn = document.getElementById('btn-timer-fullscreen');
        const modeBadge = document.getElementById('timer-mode-badge');
        const hint = document.getElementById('timer-status-hint');

        const updateDisplay = () => {
          if (!display) return;
          display.classList.remove('warning', 'overtime');

          if (this.timerMode === 'countdown') {
            const isNegative = this.timerSeconds < 0;
            const absSec = Math.abs(this.timerSeconds);
            const m = Math.floor(absSec / 60).toString().padStart(2, '0');
            const s = (absSec % 60).toString().padStart(2, '0');
            display.textContent = `${isNegative ? '+' : ''}${m}:${s}`;

            if (isNegative) {
              display.classList.add('overtime');
              if (hint) hint.textContent = '⚠️ WAKTU MELEBIHI TARGET (OVERTIME)! Beri isyarat ke pembicara/WL.';
            } else if (this.timerSeconds <= 300 && this.timerSeconds > 0) {
              display.classList.add('warning');
              if (hint) hint.textContent = '⏳ Waktu tersisa kurang dari 5 menit!';
            }
          } else {
            const m = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
            const s = (this.timerSeconds % 60).toString().padStart(2, '0');
            display.textContent = `${m}:${s}`;
          }
        };

        document.querySelectorAll('.timer-preset-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mins = parseInt(btn.dataset.minutes);
            clearInterval(this.timerInterval);
            this.timerInterval = null;

            if (mins === 0) {
              this.timerMode = 'stopwatch';
              this.timerSeconds = 0;
              if (modeBadge) modeBadge.textContent = 'STOPWATCH';
              if (hint) hint.textContent = 'Stopwatch berjalan (Count-Up Mode)';
            } else {
              this.timerMode = 'countdown';
              this.timerSeconds = mins * 60;
              this.timerInitialSeconds = mins * 60;
              if (modeBadge) modeBadge.textContent = 'COUNTDOWN';
              if (hint) hint.textContent = `Target durasi: ${mins} Menit`;
            }
            updateDisplay();
          });
        });

        if (start) {
          start.addEventListener('click', () => {
            if (!this.timerInterval) {
              this.timerInterval = setInterval(() => {
                if (this.timerMode === 'countdown') {
                  this.timerSeconds--;
                } else {
                  this.timerSeconds++;
                }
                updateDisplay();
              }, 1000);
            }
          });
        }

        if (pause) {
          pause.addEventListener('click', () => {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
          });
        }

        if (reset) {
          reset.addEventListener('click', () => {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
            this.timerSeconds = this.timerMode === 'countdown' ? this.timerInitialSeconds : 0;
            updateDisplay();
          });
        }

        if (fsBtn) {
          fsBtn.addEventListener('click', () => {
            const banner = document.querySelector('.timekeeper-glass-banner');
            if (banner) banner.requestFullscreen?.();
          });
        }

        updateDisplay();
      }

      initTools() {
        const canvas = document.getElementById('test-pattern-canvas');
        if (canvas) this.drawPattern(canvas, 'smpte');

        document.querySelectorAll('[data-pattern]').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('[data-pattern]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (canvas) this.drawPattern(canvas, btn.dataset.pattern);
          });
        });

        const fs = document.getElementById('btn-pattern-fullscreen');
        if (fs && canvas) fs.addEventListener('click', () => canvas.requestFullscreen?.());

        // Web Audio Tone
        const playToneBtn = document.getElementById('btn-play-tone');
        const freqSel = document.getElementById('tone-freq-select');
        const volSlider = document.getElementById('tone-vol-slider');

        if (playToneBtn) {
          playToneBtn.addEventListener('click', () => {
            if (this.isAudioPlaying) {
              this.stopAudio();
              playToneBtn.textContent = '🔊 Nyalakan Test Tone';
              playToneBtn.classList.remove('btn-lux-red'); playToneBtn.classList.add('btn-lux-primary');
            } else {
              const freq = freqSel ? parseFloat(freqSel.value) : 1000;
              const vol = volSlider ? parseFloat(volSlider.value) : 0.2;
              this.playTone(freq, vol);
              playToneBtn.textContent = '⏹️ Hentikan Test Tone';
              playToneBtn.classList.remove('btn-lux-primary'); playToneBtn.classList.add('btn-lux-red');
            }
          });
        }

        // Notes
        const notes = document.getElementById('field-notes-textarea');
        if (notes) {
          notes.value = localStorage.getItem(this.storageKeyNotes) || '';
          notes.addEventListener('input', (e) => localStorage.setItem(this.storageKeyNotes, e.target.value));
        }
      }

      drawPattern(canvas, pattern) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const w = canvas.width, h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        if (pattern === 'smpte') {
          const colors = ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0'];
          const bw = w / colors.length, th = h * 0.67;
          colors.forEach((col, i) => { ctx.fillStyle = col; ctx.fillRect(i * bw, 0, bw, th); });
          const btm = ['#0000c0', '#131313', '#c000c0', '#131313', '#00c0c0', '#131313', '#c0c0c0'];
          btm.forEach((col, i) => { ctx.fillStyle = col; ctx.fillRect(i * bw, th, bw, h - th); });
          ctx.fillStyle = '#fff'; ctx.font = 'bold 12px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
          ctx.fillText('SMPTE COLOR BARS — 1080p60 TEST PATTERN', w / 2, h - 15);
        } else if (pattern === 'grid') {
          ctx.fillStyle = '#111216'; ctx.fillRect(0, 0, w, h);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; ctx.lineWidth = 1;
          for (let x = 0; x <= w; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
          for (let y = 0; y <= h; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
          ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.05, h * 0.05, w * 0.9, h * 0.9);
          ctx.strokeStyle = '#71717a'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.1, h * 0.1, w * 0.8, h * 0.8);
          ctx.fillStyle = '#fff'; ctx.font = 'bold 11px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
          ctx.fillText('STAGE LED ALIGNMENT & SAFE AREA GRID (16:9)', w / 2, 25);
        } else if (pattern === 'white') {
          ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
        } else if (pattern === 'black') {
          ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
        }
      }

      playTone(freq, volume) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (!this.audioCtx) this.audioCtx = new AudioContext();
          if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
          this.oscillator = this.audioCtx.createOscillator();
          this.gainNode = this.audioCtx.createGain();
          this.oscillator.type = 'sine';
          this.oscillator.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
          this.gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);
          this.oscillator.connect(this.gainNode);
          this.gainNode.connect(this.audioCtx.destination);
          this.oscillator.start();
          this.isAudioPlaying = true;
        } catch (e) {}
      }

      stopAudio() {
        if (this.oscillator) {
          try { this.oscillator.stop(); this.oscillator.disconnect(); } catch (e) {}
          this.oscillator = null;
        }
        this.isAudioPlaying = false;
      }

      initIncidentLogger() {
        const container = document.getElementById('incident-log-container');
        const input = document.getElementById('incident-input-text');
        const severitySel = document.getElementById('incident-severity-select');
        const addBtn = document.getElementById('btn-add-incident');
        const exportBtn = document.getElementById('btn-export-incidents');
        const clearBtn = document.getElementById('btn-clear-incidents');

        const renderLogs = () => {
          if (!container) return;
          if (this.incidentLogs.length === 0) {
            container.innerHTML = '<div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.82rem;">Belum ada insiden teknis yang dicatat. Gunakan form di atas untuk log real-time.</div>';
            return;
          }
          container.innerHTML = this.incidentLogs.map((log, idx) => `
            <div class="incident-log-row">
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${log.time}</span>
                <span class="glow-badge ${log.severity === 'CRITICAL' ? 'red' : log.severity === 'WARN' ? 'amber' : 'white'}">${log.severity}</span>
                <span style="color:var(--text-pure);">${log.text}</span>
              </div>
              <button style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:0.8rem;" onclick="app.removeIncident(${idx})">✕</button>
            </div>
          `).join('');
        };

        if (addBtn && input) {
          addBtn.addEventListener('click', () => {
            const txt = input.value.trim();
            if (!txt) return;
            const logItem = {
              time: new Date().toLocaleTimeString('id-ID', { hour12: false }),
              severity: severitySel ? severitySel.value : 'INFO',
              text: txt
            };
            this.incidentLogs.unshift(logItem);
            this.saveJSON(this.storageKeyIncidents, this.incidentLogs);
            input.value = '';
            renderLogs();
          });
        }

        document.querySelectorAll('.quick-log-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (input) input.value = btn.dataset.text;
          });
        });

        if (exportBtn) {
          exportBtn.addEventListener('click', () => {
            const dataStr = this.incidentLogs.map(l => `[${l.time}] [${l.severity}] ${l.text}`).join('\\n');
            const blob = new Blob([dataStr], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = `IP26_Incident_Log_${new Date().toISOString().slice(0,10)}.txt`; a.click();
          });
        }

        if (clearBtn) {
          clearBtn.addEventListener('click', () => {
            if (confirm('Kosongkan riwayat insiden log?')) {
              this.incidentLogs = [];
              this.saveJSON(this.storageKeyIncidents, []);
              renderLogs();
            }
          });
        }

        renderLogs();
      }

      removeIncident(idx) {
        this.incidentLogs.splice(idx, 1);
        this.saveJSON(this.storageKeyIncidents, this.incidentLogs);
        this.initIncidentLogger();
      }

      initSOP() {
        const container = document.getElementById('sop-container');
        if (!container) return;
        container.innerHTML = SOP_AND_CONTINGENCIES.map((sop, idx) => `
          <div class="glass-card" style="margin-bottom:1.5rem; background:var(--bg-surface);">
            <div class="card-top-row" style="margin-bottom:1.15rem;">
              <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
                <span class="glow-badge ${idx === 2 ? 'red' : 'white'}">SOP PROTOCOL 0${idx + 1}</span>
                <span style="font-size:1.05rem; font-weight:700; color:var(--text-pure);">${sop.title}</span>
              </div>
            </div>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem;">
              ${sop.steps.map((step, sIdx) => `
                <li style="display:flex; align-items:flex-start; gap:0.75rem; font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">
                  <span style="font-family:var(--font-mono); color:#ffffff; font-weight:800; flex-shrink:0;">[0${sIdx + 1}]</span>
                  <span>${step}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('');
      }

      initPresentation() {
        const modal = document.getElementById('presentation-modal');
        const slides = Array.from(document.querySelectorAll('.deck-slide-unit'));
        const openBtn = document.getElementById('btn-open-presentation');
        const closeBtn = document.getElementById('btn-close-presentation');
        const prevBtn = document.getElementById('btn-pres-prev');
        const nextBtn = document.getElementById('btn-pres-next');
        const ind = document.getElementById('pres-slide-indicator');
        const bar = document.getElementById('pres-progress-bar');

        const show = (idx) => {
          if (idx < 0) idx = 0;
          if (idx >= slides.length) idx = slides.length - 1;
          this.currentSlide = idx;
          slides.forEach((s, i) => s.classList.toggle('active', i === idx));
          if (ind) ind.textContent = `Slide ${idx + 1} of ${slides.length}`;
          if (bar) bar.style.width = `${((idx + 1) / slides.length) * 100}%`;
        };

        if (openBtn && modal) {
          openBtn.addEventListener('click', () => { modal.classList.add('active'); show(0); document.documentElement.requestFullscreen?.().catch(() => {}); });
        }
        if (closeBtn && modal) {
          closeBtn.addEventListener('click', () => { modal.classList.remove('active'); document.exitFullscreen?.().catch(() => {}); });
        }
        if (prevBtn) prevBtn.addEventListener('click', () => show(this.currentSlide - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => show(this.currentSlide + 1));

        document.addEventListener('keydown', (e) => {
          if (!modal || !modal.classList.contains('active')) return;
          if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); show(this.currentSlide + 1); }
          else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(this.currentSlide - 1); }
          else if (e.key === 'Escape') { modal.classList.remove('active'); }
        });
      }

      initTallyBox() {
        const modal = document.getElementById('tally-modal');
        const openBtn = document.getElementById('btn-open-tally-modal');
        const closeBtn = document.getElementById('btn-close-tally');
        const select = document.getElementById('tally-camera-select');
        const soundBtn = document.getElementById('btn-tally-toggle-sound');

        if (openBtn && modal) {
          openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            this.updateTallyScreen();
            document.documentElement.requestFullscreen?.().catch(() => {});
          });
        }

        if (closeBtn && modal) {
          closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.exitFullscreen?.().catch(() => {});
          });
        }

        if (select) {
          select.addEventListener('change', (e) => {
            this.selectedTallyCam = parseInt(e.target.value);
            this.updateTallyScreen();
          });
        }

        if (soundBtn) {
          soundBtn.addEventListener('click', () => {
            this.tallySoundEnabled = !this.tallySoundEnabled;
            soundBtn.textContent = `🔊 Beep: ${this.tallySoundEnabled ? 'ON' : 'OFF'}`;
          });
        }
      }

      triggerTallyPulse() {
        if (this.selectedTallyCam === this.pgmChannel) {
          if ('vibrate' in navigator) {
            try { navigator.vibrate([150, 80, 150]); } catch (e) {}
          }
          if (this.tallySoundEnabled) {
            this.playTone(880, 0.15);
            setTimeout(() => this.stopAudio(), 180);
          }
        }
      }

      updateTallyScreen() {
        const screen = document.getElementById('tally-screen-target');
        const camLabel = document.getElementById('tally-cam-big-label');
        const stateLabel = document.getElementById('tally-state-big-label');
        const opLabel = document.getElementById('tally-op-big-label');

        if (!screen || !camLabel) return;
        const cam = BROADCAST_CAMERAS[this.selectedTallyCam - 1];
        camLabel.textContent = `CAM ${this.selectedTallyCam}`;
        if (opLabel && cam) opLabel.textContent = `Operator: ${cam.operator} • ${cam.model} (${cam.position})`;

        screen.classList.remove('pgm', 'pvw', 'standby');
        if (this.selectedTallyCam === this.pgmChannel) {
          screen.classList.add('pgm');
          if (stateLabel) stateLabel.textContent = '● LIVE ON AIR (PGM)';
        } else if (this.selectedTallyCam === this.pvwChannel) {
          screen.classList.add('pvw');
          if (stateLabel) stateLabel.textContent = '▲ READY ON PREVIEW (PVW)';
        } else {
          screen.classList.add('standby');
          if (stateLabel) stateLabel.textContent = '■ STANDBY';
        }
      }

      initHandoverForm() {
        const modal = document.getElementById('handover-modal');
        const openBtn = document.getElementById('btn-open-handover-modal');
        const closeBtn = document.getElementById('btn-close-handover');
        const provSelect = document.getElementById('handover-provider-select');
        const tbody = document.getElementById('handover-items-tbody');
        const party1 = document.getElementById('handover-party1-label');

        const providers = Array.from(new Set(MASTER_INVENTORY.map(i => i.provider))).sort();
        if (provSelect) {
          provSelect.innerHTML = providers.map(p => `<option value="${p}">${p}</option>`).join('');
          provSelect.addEventListener('change', () => renderHandover());
        }

        const renderHandover = () => {
          if (!tbody || !provSelect) return;
          const p = provSelect.value;
          if (party1) party1.textContent = `Pemberi Pinjaman (${p})`;
          const items = MASTER_INVENTORY.filter(i => i.provider === p);
          tbody.innerHTML = items.map((item, idx) => `
            <tr>
              <td style="text-align:center;">${idx + 1}</td>
              <td style="font-weight:600;">${item.name}</td>
              <td style="text-align:center; font-weight:700;">${item.qty}</td>
              <td>${item.category.toUpperCase()}</td>
              <td style="text-align:center; color:green; font-weight:700;">Baik / Siap</td>
              <td>${item.note || '-'}</td>
            </tr>
          `).join('');
        };

        if (openBtn && modal) {
          openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            renderHandover();
          });
        }

        if (closeBtn && modal) {
          closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        }
      }
    }

    // Global Instance
    let app;
    document.addEventListener('DOMContentLoaded', () => {
      app = new MasterCommandApp();
      app.init();
    });
  </script>
</body>
</html>
"""
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html_content)
    print("index.html generated successfully! Total size:", len(html_content), "bytes")

if __name__ == '__main__':
    generate_html()
