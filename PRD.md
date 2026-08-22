# 📄 Product Requirements Document (PRD) — v3.0 Master Refactor
## IP26 Broadcast Command Suite — Ibadah Perdana UKK UNNES 2026

---

## 1. Executive Summary & Refactor Thesis
- **Product Name:** IP26 Master Broadcast Control & Media Suite
- **Aesthetic Direction:** **Authentic Dribbble Dark Mode Dashboard & Broadcast Control Room** (Directly inspired by the 25 curated UI examples from [Easeout](https://www.easeout.co/blog/2020-05-13-25-dark-mode-ui-design-examples/), featuring *DStudio Dashboard*, *Alexander Plyuto Skeuomorph Dark Banking*, *Valery Pevnev Podcast & Webinar Suite*, and *Quan Ha Ladder Dark UI*).
- **Core Architecture:**
  - **App-Like Dashboard Layout:** Integrated Sidebar Console (Left Rail / Mobile Collapsible Drawer) + Main Cockpit Grid.
  - **Layered Obsidian Surfaces:** Deep space navy base (`#070B14`), elevated card hulls (`#0F172A` / `#14223E`), and inset cavities (`#04070D`).
  - **Luminous Neon Contrasts:** Electric Cyan (`#00E5FF`), Vivid Emerald (`#00E676`), Radiant Amber (`#FFAB00`), and Royal Violet (`#7C4DFF`).
  - **Tactile Micro-Interactions:** Skeuomorphic switchers, glowing telemetry radars, live WIB digital clock, interactive signal flow nodes, one-click rig copy tools, and instant multi-facet inventory filtering.
- **Completeness Guarantee:** 100% of data from `ip26_pro1.txt`, `ip26_pro2.txt`, and `README.md` is preserved and rendered with highest fidelity.

---

## 2. Layout & Spatial Architecture

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ TOP LIVE TELEMETRY STATUS BAR (Live Time WIB | Venue | Pending Hardware Alert)         │
├──────────────────────┬─────────────────────────────────────────────────────────────────┤
│ SIDEBAR CONSOLE      │ MAIN COCKPIT DASHBOARD VIEW                                      │
│ (Desktop Fixed 260px │ 1. HERO METRIC DECK                                             │
│ / Mobile Bottom Dock)│    - 4 Widget Cards: Cameras, Workstations, Lenders, PICs       │
│                      │    - Visual Progress Bars & Verification Ratios                 │
│ • Brand Identity     ├─────────────────────────────────────────────────────────────────┤
│ • Telemetry Status   │ 2. LIVE SIGNAL TOPOLOGY MATRIX                                  │
│ • Nav Links (Icons)  │    - 4-Stage Interactive Routing: Cam ➔ Switcher ➔ Engine ➔ LED │
│ • Quick Filters      ├─────────────────────────────────────────────────────────────────┤
│ • Pending Laptops    │ 3. CAMERA RIG SPECIFICATION CARDS                               │
│   Action Card        │    - Broadcast Rig Cards (CAM 1-4) with Copy Config Buttons     │
│ • Github / License   │    - Documentation Rig Cards (PHO, VID, HP)                     │
│                      ├─────────────────────────────────────────────────────────────────┤
│                      │ 4. ENGINE ROUTING CONSOLE                                       │
│                      │    - Video, Audio, Time Keeper, and Electrical Matrices         │
│                      ├─────────────────────────────────────────────────────────────────┤
│                      │ 5. WORKSTATION MATRIX & OPERATOR ALLOCATION                     │
│                      │    - 10 Console Stations + Backup with PIC & Hardware Status    │
│                      ├─────────────────────────────────────────────────────────────────┤
│                      │ 6. MASTER INVENTORY DIRECTORY                                   │
│                      │    - Live Search, Status Filters (✅ ⚠️ ☑️), 13 Lender Filter  │
│                      ├─────────────────────────────────────────────────────────────────┤
│                      │ 7. MULTIMEDIA EVENT RUNDOWN (Pre, Main, Post Sesi)              │
│                      ├─────────────────────────────────────────────────────────────────┤
│                      │ 8. FOOTER & CREW LICENSE                                        │
└──────────────────────┴─────────────────────────────────────────────────────────────────┘
```

---

## 3. Design System Tokens (Easeout Dark Mode Benchmark)

### A. Color Palette
- `--bg-canvas`: `#060A12` (Deep Obsidian Blue)
- `--bg-sidebar`: `#090F1C` (Dark Console Rail)
- `--bg-surface`: `#0E1729` (Primary UI Surface)
- `--bg-card`: `#13203A` (Elevated Card Base)
- `--bg-card-hover`: `#18294B` (Interactive Card State)
- `--bg-inset`: `#030509` (Sunken Search & Terminals)
- `--border-subtle`: `rgba(255, 255, 255, 0.08)`
- `--border-card`: `rgba(255, 255, 255, 0.12)`
- `--border-active`: `rgba(0, 229, 255, 0.4)`

### B. High-Contrast Accents & Glows
- `--neon-cyan`: `#00E5FF` (`box-shadow: 0 0 20px rgba(0, 229, 255, 0.35)`)
- `--neon-emerald`: `#00E676` (`box-shadow: 0 0 20px rgba(0, 230, 118, 0.35)`)
- `--neon-amber`: `#FFAB00` (`box-shadow: 0 0 20px rgba(255, 171, 0, 0.35)`)
- `--neon-purple`: `#7C4DFF` (`box-shadow: 0 0 20px rgba(124, 77, 255, 0.35)`)

### C. Typography
- **Headings & Metrics:** `Space Grotesk` (Weight 700 / 800)
- **Body & Controls:** `Plus Jakarta Sans` (Weight 500 / 600 / 700)
- **Code & Wiring Chains:** `JetBrains Mono` (Weight 500 / 600)

---

## 4. Responsive Adaptation Matrix (Desktop vs Mobile)

| Fitur / Komponen | Desktop (>= 1024px) | Tablet & Mobile (< 768px) |
| :--- | :--- | :--- |
| **Navigasi** | Sidebar kiri fixed 260px dengan quick-action & status | Header sticky + Floating bottom app bar sentuh responsif |
| **Hero & Metrik** | 4-kolom widget cards dengan radial ambient glow & mini charts | 2x2 grid metrik compact dengan tap-to-focus |
| **Topologi Sinyal** | 4-kolom horizontal signal pipeline | Vertical stacked pipeline dengan konektor neon |
| **Kamera & Rig** | 2-kolom kartu rig interaktif dengan tombol salin | 1-kolom kartu layar penuh dengan quick copy |
| **Inventaris** | Toolbar lebar dengan live search, chip status, dan pill lender | Sticky mobile search cavity, horizontal swipe status chips & lender list |
| **Tabel Routing** | Tabel konsol dengan hover highlighting | Card-mode table wrapper dengan scroll indikator |

---

## 5. Rencana Eksekusi Refactor
1. [x] Update `PRD.md` ke Versi 3.0.
2. [ ] Rombak `index.html` dengan arsitektur App-Layout (Sidebar Console + Main Cockpit View).
3. [ ] Tulis ulang `style.css` dengan token desain Easeout Dark Mode, card shadows, glowing gradients, dan mobile bottom dock.
4. [ ] Sempurnakan `app.js` dengan live telemetry clock, topology visual highlighter, copy utility, dan instant inventory filtering.
5. [ ] Verifikasi dan deploy ke GitHub Pages (`https://zzdree.github.io/ip26-production/`).
