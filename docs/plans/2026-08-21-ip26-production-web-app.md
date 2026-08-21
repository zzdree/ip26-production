# IP26 Production & Broadcast Web App Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a comprehensive, high-craft, offline-capable Command Center & Presentation Web Application for Ibadah Perdana UKK UNNES 2026 based on `ip26_pro1.txt`, `ip26_pro2.txt`, `ip26_route.txt`, and `README.md`, and deploy it to GitHub Pages (`zzdree/ip26-production`).

**Architecture:** A modern single-page progressive web dashboard with zero framework dependencies (Vanilla Modern ES6+ JavaScript, CSS Custom Properties Design System, SVG/Canvas Signal Flow Visualizers, Web Audio API Tone Generator, Test Pattern Generator, and LocalStorage-backed state management). Includes two core viewing paradigms: **Crew App Dashboard Mode** (Routing, Inventory, Simulation, Assets, Intercom, Notes, Tools) and **Crew Presentation / Briefing Mode** (Fullscreen presentation slide deck with divisional breakdowns and interactive diagrams).

**Tech Stack:** Modern Semantic HTML5, Vanilla CSS3 (Custom Design System tokens, Glassmorphism, Tactical Grid, Responsive Layouts), ES Modules, HTML5 Web Audio API, Canvas 2D Engine, LocalStorage Engine, Git / GitHub Pages deployment.

---

## 🎨 Aesthetic & Design System (Frontend-Design Mandate)
- **Aesthetic Direction:** *Tactical Broadcast Command & Cyber-Industrial Utilitarian*
- **Theme Palette:**
  - Obsidian Base: `#080b11`, `#0f172a`, `#1e293b`
  - Signal Amber / Warning: `#f59e0b`
  - Broadcast Tally Red: `#ef4444`
  - Signal Sync Green: `#10b981`
  - Broadcast Video Cyan: `#06b6d4`
  - Audio Violet: `#8b5cf6`
  - Power / Electrical Orange: `#f97316`
- **Typography:**
  - Primary UI / Headings: `Plus Jakarta Sans`, `Space Grotesk`
  - Monospace Data / Technical Labels: `JetBrains Mono`
- **Memorable Anchor:** Live interactive switcher & signal flow simulator with dynamic cable routing visualizer and multi-pattern TV test screen.

---

## 📋 Task Breakdown

### Task 1: Project Architecture & Core Data Extraction (`js/app-data.js`)
- Extract and structure all data from `ip26_pro1.txt`, `ip26_pro2.txt`, `ip26_route.txt`, and `README.md`.
- Store comprehensive datasets for: Crew & PICs, Broadcast Cameras, Documentation Team, Media Engine & Switchers, Master Inventory by Provider/Owner, Signal Route Matrix, Media Checklist, Rundown, and Contingency SOPs.

### Task 2: Tactical Design System & Core Stylesheet (`css/style.css`)
- Complete CSS custom properties (`--bg-primary`, `--bg-surface`, `--accent-cyan`, `--accent-red`, `--accent-green`, `--accent-amber`, `--border-color`, `--font-mono`, `--font-sans`).
- Broadcast HUD aesthetic, cards, glow effects, badge systems, responsive grids, collapsible sidebars, mobile bottom navigation bar, presentation mode theme.
- Interactive controls: tactile toggle switches, faders, tally lights, status pills, routing line connectors.

### Task 3: Interactive Signal Flow & Routing Simulator Engine (`js/routing-simulator.js`)
- Interactive schematic diagram with subsystem filters (All, Video SDI/HDMI, Audio Dante/XLR, Media/LED, Electrical/Power).
- Port-to-port cable connection explorer.
- Live Switcher Simulator (Cinetreak Cinelive V1) with Program/Preview bus switching, Cut/Auto transitions, PiP toggle, HDMI multiview output simulator, and LED Stage Projection preview.
- Audio Pipeline Visualizer (Yamaha QL5 32CH -> Aux Send -> NewBaxs CT80S -> OBS Studio -> YouTube Live Stream).

### Task 4: Master Inventory & Storage Checklist Manager (`js/inventory-manager.js`)
- Real-time search and multi-filtering (by Owner: OWL, GKJ, GIA, UKK, Andreas, etc., by Category: Camera, Audio, Cable, Video Switcher, Power/Electrical, Accessories, by Status: Verified ✅, Checked ☑️, Warning ⚠️).
- Check-in / Check-out status toggling with persistent LocalStorage state.
- Inventory summary KPI metrics (Total Items, Verified Count, In-Transit, Missing/Warning, Progress %).
- Export/Import JSON & Print-friendly manifest generation.

### Task 5: Media Asset Checklist, Rundown, & Intercom Hub (`js/media-rundown.js`)
- Interactive Rundown Timeline (Pre-Ibadah Open Gate, Ibadah Event Items, Post-Ibadah Close Gate/Usung-usung).
- Media Asset Tracking (Video Opening, Sambutan Bu Grave, Loop Video, PPT, Lirik, QRIS, etc.) with asset readiness status and cue notes.
- Master Crew Intercom directory with direct action links and assigned equipment checklist per crew member.
- Live Event Timer / Countdown Clock with stopwatch & stage cue markers.

### Task 6: Presentation / Master Briefing Mode (`js/presentation-mode.js`)
- Slide navigation (Next, Prev, Keyboard Arrows, Spacebar, Touch Swipe, Slide Index Picker).
- Slides formatted for crew briefing (Overview, Hierarchy, Cameras, Video Routing, LED Mapping, Audio Chain, Media Rundown, Electrical Safety & SOP).

### Task 7: Production Quick Tools (`js/production-tools.js`)
- **Test Pattern Generator**: SMPTE Color Bars, Grid Alignment (16:9, LED Center, LED Side Ratio), White / Black screen for projector/LED calibration.
- **Audio Tone Generator**: Web Audio API 1kHz Sine Test Tone (-18dBFS / -20dBFS) & Pink Noise generator for PA & Livestream calibration.
- **Crew Quick Notes**: LocalStorage notepad for on-site live notes.

### Task 8: Main Application Shell & Integration (`index.html`, `js/app.js`, PWA Manifest, Service Worker)
- Construct rich responsive dashboard layout with instant tab switching and smooth animated transitions.
- Offline Service Worker (`sw.js`) and PWA `manifest.json`.

### Task 9: Verification, Testing & GitHub Deployment
- Test local build and all features across viewports.
- Commit changes and push to `origin/main`.
- Verify GitHub Pages deployment.
