# 📄 Product Requirements Document (PRD) — v5.0 Pure Dark Grey Single-Page Master
## IP26 Broadcast Command Suite — Ibadah Perdana UKK UNNES 2026

---

## 1. Executive Summary & Design Pivot
- **Product Name:** IP26 Master Broadcast Control & Media Suite
- **Aesthetic Direction:** **Pure Dark Grey / Neutral Charcoal Single-Page Broadcast Center** (Berdasarkan kajian [REVIEW.md](file:///C:/ANDREAS/ip26-production/REVIEW.md) dan prinsip `frontend-design`: *Industrial Utilitarian Dark Grey Cockpit*).
- **Core Structural Mandate:**
  - **Color Palette (Zero Blue):** Palet murni abu-abu gelap netral arang / grafit (`#121214`, `#18191D`, `#202127`, `#282A32`, `#0C0D0F`) tanpa saturasi warna biru.
  - **Centered Single-Page Layout:** Halaman tunggal (*single page vertical scroll*) dengan konten terpusat rapi di tengah layar (`max-width: 1200px; margin: 0 auto;`).
  - **Dual Navigation Strategy:**
    - **Desktop (>= 768px):** Sticky Top Navigation Bar di bagian atas dengan tombol-tombol tab segmented untuk berganti/lompat seksi dengan halus.
    - **Mobile (< 768px):** Floating Bottom Navigation Dock di bagian bawah yang ergonomis untuk jangkauan ibu jari (*thumb-friendly*).
  - **Luminous Neon Contrasting Signals:** Aksen neon kontras tinggi (Electric Cyan `#00E5FF`, Vivid Emerald `#00E676`, Radiant Amber `#FFAB00`, Royal Violet `#A855F7`) yang menyala tegas di atas abu-abu arang.
- **Completeness Guarantee:** 100% data teknis (7 kamera siaran & dokumentasi, 10 workstation + backup, 13 mitra peminjam, 84 item inventaris, 3 sesi rundown multimedia) terintegrasi penuh.

---

## 2. Design System Tokens: Pure Dark Grey (Zero-Blue)

### A. Surface Color Hierarchy
- `--bg-canvas`: `#121214` (Pure Dark Charcoal Canvas)
- `--bg-surface`: `#18191D` (Matte Dark Grey Elevated Surface)
- `--bg-card`: `#202127` (Layered Graphite Card Container)
- `--bg-card-hover`: `#282A32` (Active Raised Dark Grey Card)
- `--bg-inset`: `#0C0D0F` (Sunken Search Cavity & Terminal Codes)
- `--bg-glass`: `rgba(24, 25, 29, 0.88)` (Frosted Glass with Neutral Tint)

### B. Borders & Depth
- `--border-subtle`: `rgba(255, 255, 255, 0.08)`
- `--border-card`: `rgba(255, 255, 255, 0.12)`
- `--border-card-hover`: `rgba(0, 229, 255, 0.45)`
- `--shadow-card`: `0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)`
- `--shadow-card-hover`: `0 16px 36px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 229, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.14)`
- `--shadow-inset`: `inset 0 2px 8px rgba(0, 0, 0, 0.85)`

### C. Luminous Signal Accents
- `--neon-cyan`: `#00E5FF` (Routing video & navigasi aktif)
- `--neon-emerald`: `#00E676` (Verifikasi aktif `✅` & live clock)
- `--neon-amber`: `#FFAB00` (Peringatan pengadaan laptop pending `⚠️`)
- `--neon-purple`: `#A855F7` (Standby cadangan `☑️` & dokumentasi)

### D. Typography Hierarchy
- **Headings & Metrics:** `Space Grotesk` (Weight 700 / 800)
- **Body & Controls:** `Plus Jakarta Sans` (Weight 500 / 600 / 700)
- **Code & Wiring Data:** `JetBrains Mono` (Weight 500 / 600)

---

## 3. Layout & User Experience Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP GLOBAL TELEMETRY BAR (Live WIB Clock | Venue | Pending Laptop Alert)    │
├─────────────────────────────────────────────────────────────────────────────┤
│ DESKTOP STICKY TOP NAVBAR (Brand + Tab Navigation Links + GitHub Repo Link) │
├─────────────────────────────────────────────────────────────────────────────┤
│ CENTERED MAIN CONTAINER (max-width: 1200px; margin: 0 auto;)                │
│                                                                             │
│ 1. HERO SECTION & 4 METRIC WIDGET CARDS (Kamera, Stasiun, Mitra, PIC)      │
│ 2. INTERACTIVE SIGNAL TOPOLOGY (4-Stage Pipeline: Cam ➔ Sw ➔ Eng ➔ Output)  │
│ 3. CAMERA RIG CONSOLE (Broadcast CAM 1-4 with Copy Tool + Dok PHO/VID/HP)   │
│ 4. MATRIX ROUTING & AUDIO ENGINE (Yamaha QL5 FOH, NewBaxs CT80S, Timer)     │
│ 5. WORKSTATION MATRIX & OPERATOR ALLOCATION (10 Stasiun + Status Kesiapan)  │
│ 6. MASTER INVENTORY CATALOG (Live Search + Status Filter + 13 Mitra Pills)  │
│ 7. MULTIMEDIA EVENT RUNDOWN (Pre-Ibadah, Main Ibadah, Post-Ibadah)          │
│ 8. SITE FOOTER & INTERNAL CREW OPERATIONAL LICENSE                          │
├─────────────────────────────────────────────────────────────────────────────┤
│ MOBILE FLOATING BOTTOM DOCK (Icons: Ikhtisar, Topo, Kamera, Routing, Inv)  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Execution Roadmap
1. [x] Update `PRD.md` to v5.0.
2. [ ] Overhaul `index.html` to single-page centered structure with sticky top nav on desktop and bottom dock on mobile.
3. [ ] Rewrite `style.css` with 100% pure neutral dark grey tokens (zero blue hue) and centered container layout.
4. [ ] Verify `app.js` functionality (live clock, copy-to-clipboard, responsive scroll spy).
5. [ ] Commit, push, and verify live build at `https://zzdree.github.io/ip26-production/`.
