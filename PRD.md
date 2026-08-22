# 📄 Product Requirements Document (PRD) — v4.0 Dark Grey Master Edition
## IP26 Broadcast Command Suite — Ibadah Perdana UKK UNNES 2026

---

## 1. Executive Summary & Design Pivot
- **Product Name:** IP26 Master Broadcast Control & Media Suite
- **Aesthetic Benchmark:** **Charcoal & Graphite Dark Grey UI** (Berdasarkan kajian mendalam [REVIEW.md](file:///C:/ANDREAS/ip26-production/REVIEW.md) dan 25 studi kasus [Easeout.co](https://www.easeout.co/blog/2020-05-13-25-dark-mode-ui-design-examples/), dengan adaptasi spesifik palet **Dark Grey / Anthracite Slate** menggantikan dark blue).
- **Core Visual Philosophy:**
  - **Dark Grey / Matte Anthracite Stacking:** Latar kanvas arang gelap pekat (`#0D0E12` - `#12141A`), bilah navigasi grafit (`#14161D`), permukaan kartu berlapis abu-abu gelap terangkat (`#1A1D26` & `#20232E`), serta rongga cekung sunken (`#090A0D`).
  - **Luminous Neon Contrasting Signaling:** Aksen berfrekuensi tinggi (Electric Cyan `#00E5FF`, Vivid Emerald `#00E676`, Radiant Amber `#FFAB00`, Royal Violet `#A855F7`) yang menyala kontras di atas latar belakang abu-abu arang.
  - **Neumorphic & Skeuomorphic Depth:** Tombol taktil timbul (*embossed dual drop shadow*), kolom pencarian sunken inset, dan garis tepi presisi (*hairline glass borders*).
  - **Layout App-Shell Adaptif:** Sidebar konsol tetap di desktop (260px) + Floating Bottom App Dock di smartphone + Cockpit interaktif di area utama.
- **Completeness Guarantee:** 100% data teknis (7 kamera siaran & dokumentasi, 10 workstation + backup, 13 mitra peminjam, 84 item inventaris, 3 sesi rundown multimedia) terintegrasi penuh.

---

## 2. Design System Tokens: Charcoal / Dark Grey Palette

### A. Surface Architecture (Dark Grey Tones)
- `--bg-canvas`: `#0D0E12` (Base Dark Charcoal Grey)
- `--bg-canvas-grad`: `radial-gradient(at 15% 0%, #171A22 0px, transparent 60%), radial-gradient(at 85% 10%, #151820 0px, transparent 60%), #0D0E12`
- `--bg-sidebar`: `#13151C` (Matte Graphite Grey)
- `--bg-surface`: `#181B24` (Elevated Neutral Grey Surface)
- `--bg-card`: `#1E222D` (Primary Layered Card Hull)
- `--bg-card-hover`: `#252A38` (Active Raised Card State)
- `--bg-inset`: `#090A0D` (Sunken Search Bar & Monospace Terminals)
- `--bg-glass`: `rgba(24, 27, 36, 0.88)`

### B. Borders & Shadows
- `--border-subtle`: `rgba(255, 255, 255, 0.08)`
- `--border-card`: `rgba(255, 255, 255, 0.12)`
- `--border-card-hover`: `rgba(0, 229, 255, 0.45)`
- `--shadow-card`: `0 8px 28px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.09)`
- `--shadow-card-hover`: `0 18px 44px rgba(0, 0, 0, 0.9), 0 0 24px rgba(0, 229, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.16)`
- `--shadow-inset`: `inset 0 2px 8px rgba(0, 0, 0, 0.85)`

### C. Luminous Neon Accents
- `--neon-cyan`: `#00E5FF` (Routing video & navigasi aktif)
- `--neon-emerald`: `#00E676` (Verifikasi aktif `✅` & live clock)
- `--neon-amber`: `#FFAB00` (Peringatan pengadaan laptop pending `⚠️`)
- `--neon-purple`: `#A855F7` (Standby cadangan `☑️` & dokumentasi)

### D. Typography Hierarchy
- **Headings & Metrics:** `Space Grotesk` (Weight 700 / 800)
- **Body & Controls:** `Plus Jakarta Sans` (Weight 500 / 600 / 700)
- **Code & Telemetry Data:** `JetBrains Mono` (Weight 500 / 600)

---

## 3. Spatial Layout & User Journey

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ TOP GLOBAL TELEMETRY BAR (Live WIB Clock | Venue: Aud UNNES | Alert 4 Laptop Pending)  │
├──────────────────────┬─────────────────────────────────────────────────────────────────┤
│ LEFT APP SIDEBAR     │ MAIN COCKPIT DASHBOARD VIEW (Dark Grey Theme)                   │
│ (Desktop Fixed 260px │ 1. HERO METRIC DECK (4 Widget Cards with Charcoal Glow Corners) │
│ / Mobile Bottom Dock)│ 2. LIVE SIGNAL TOPOLOGY (4-Stage Pipeline: Cam ➔ Sw ➔ Eng ➔ LED)│
│ • Brand Identity     │ 3. CAMERA RIG CONSOLE (Broadcast Cards + Salin Rig Tool)        │
│ • Meteran 95.4%      │ 4. MATRIX ROUTING & AUDIO ENGINE (Yamaha QL5 FOH, NewBaxs)      │
│ • Nav Links & Icons  │ 5. WORKSTATION MATRIX & OPERATOR PIC ALLOCATION                 │
│ • Emergency Alert    │ 6. MASTER INVENTORY EXPLORER (Live Search, Status & 13 Mitra)   │
│ • GitHub Link        │ 7. MULTIMEDIA EVENT RUNDOWN (Pre, Main, Post Sesi)              │
│                      │ 8. COCKPIT FOOTER & OPERATIONAL CREW LICENSE                    │
└──────────────────────┴─────────────────────────────────────────────────────────────────┘
```

---

## 4. Feature Specifications & Requirements

### 1. Telemetry Top Bar
- Jam digital real-time **WIB** berdetik setiap detik.
- Live radar dot berdenyut (*breathing green pulse*).
- Bar notifikasi peringatan status 4 unit laptop pending.

### 2. Metric Dashboard Widgets (Dark Grey Style)
- 4 Widget Utama: Kamera Rig (7), Workstation (10), Sumber Alat (13), Operator Bertugas (11).
- Disertai bar kemajuan mini (*progress bar*) beraksen neon dan sudut kartu berpendar lembut (*ambient corner glow*).

### 3. Interactive Signal Topology Pipeline
- Visualisasi 4 pilar: **Input Kamera (1-4) ➔ Switcher Cinetreak & Splitter ➔ Media Engine (OBS, Resolume, ProPresenter) ➔ Proyeksi Layar LED**.

### 4. Camera System Console
- 4 Kartu Rig Siaran (*CAM 1, CAM 2, CAM 3, CAM 4*) dengan tombol **"Salin Rig Config"** 1-klik untuk kemudahan koordinasi kru.
- 3 Kartu Rig Dokumentasi (*CAM PHO, CAM VID, CAM HP Jennifer*).

### 5. Routing & Audio Matrix Console
- Tab bergaya *segmented switch* memisahkan Routing Video, Routing Audio Engine FOH/Stream, Skema Time Keeper Panggung, dan Distribusi Listrik.

### 6. Workstation & PIC Allocation Matrix
- Tabel konsol 10 stasiun kerja + workstation cadangan dengan baris highlight kuning pada laptop yang berstatus *Belum Ada*.

### 7. Master Storage & Inventory Directory
- Pencarian cerdas instan dengan kolom cekung sunken inset.
- Chip pemfilter status kesiapan (`Semua`, `✅ Aktif`, `⚠️ Perhatian`, `☑️ Standby`).
- Baris filter horizontal 13 mitra peminjam dengan badge penghitung barang otomatis.

### 8. Multimedia Event Rundown
- Kartu rangkaian 3 fase acara (*Pre-Ibadah, Main Ibadah, Post-Ibadah*) dengan label output layar LED dan FOH Sound System.

---

## 5. Rencana Eksekusi & Validasi
1. [x] Perbarui `PRD.md` ke Versi 4.0 Dark Grey Master Edition.
2. [ ] Rombak `style.css` secara menyeluruh dengan skema warna **Dark Grey / Charcoal / Graphite** murni (menghilangkan nuansa dark blue).
3. [ ] Sinkronkan `index.html` dan `app.js` dengan token dark grey dan cache-busting version `?v=20260822_darkgrey`.
4. [ ] Commit & Push ke GitHub serta verifikasi GitHub Pages build status.
