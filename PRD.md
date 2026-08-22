# 📄 Product Requirements Document (PRD) — v7.1 Production & Engineering Suite
## IP26 Broadcast Command Suite — Ibadah Perdana UKK UNNES 2026

---

## 1. Executive Summary & Team Structure
- **Product Name:** IP26 Master Broadcast Control & Realtime Production Suite
- **Event:** Ibadah Perdana UKK UNNES 2026
- **Venue:** Gedung Auditorium Universitas Negeri Semarang (UNNES)
- **Production Hierarchy & Peran:**
  - **System Engineer (Pelayan):** Andreas (Leader) — *✨ Pelayan*
  - **Media Engineer (Panitia):** Richard (Leader) — *🏛️ Panitia*, Wilfred (*🏛️ Panitia*), Alex (*🏛️ Panitia*), Rania (*🏛️ Panitia*)
  - **Creative Engineer (Panitia):** Jennifer (Leader) — *🏛️ Panitia*, Filia (*🏛️ Panitia*), Felani (*🏛️ Panitia*), Wike (*🏛️ Panitia*)

### 1.1 Prinsip & Klasifikasi Status Personel PIC
- **Prinsip Operasional:**
  1. *Panitia bisa menjadi pelayan*
  2. *Pelayan belum tentu panitia*
  3. *PIC ada yang menjadi panitia*
  4. *PIC yang bukan panitia berarti pelayan*
  5. *PIC dan Pelayan itu sama*
- **🏛️ Panitia (Committee):** Richard, Wilfred, Alex, Rania, Jennifer, Filia, Felani, Wike, dan Tim Acara.
- **✨ Pelayan (Ministry Servant / Field Operator):** Andreas, Kiel 1, Nia, Ferdy, Nico, Joel, Jordan, dan Yosua.

---

## 2. Core Modules & System Architecture

### A. Broadcast Camera System (Integrated with Engine System)
- **CAM 1 (Wireless + Fixed):** Sony ZVE10 (Kiel 1) + Hollyland Pyro S (OWL) ➔ Operator: **Alex** (*🏛️ Panitia*) `✅`
- **CAM 2 (Wireless + Mobile):** Sony ZV-E10 (OWL) + Hollyland Pyro H (OWL) ➔ Operator: **Kiel 1** (*✨ Pelayan*) `✅`
- **CAM 3 (Wired + Fixed):** Sony A6000 (OWL) + Lens 18-105mm (OWL) + HDMI 10M (GKJ) ➔ Operator: **Nia** (*✨ Pelayan*) `✅`
- **CAM 4 (Wired + Fixed):** Sony A6000 (OWL) + Lens 16-50mm Kit (Kiel 1) + HDMI 10M (UKK) ➔ Operator: **Ferdy** (*✨ Pelayan*) `✅`
- **Backup:** Micro HDMI to HDMI Converter X2 (Panitia) `☑️`

### B. Documentation Camera System (Dedicated Offline Production)
- **CAM PHO:** Sony A6400 (OWL) + 50mm Fix (OWL) ➔ Operator: **Nico** (*✨ Pelayan*) `✅`
- **CAM VID:** Sony A6600 (Joel) + 24-70mm Zeiss + DJI Ronin RS3 (Joel) ➔ Operator: **Joel** (*✨ Pelayan*) `✅`
- **CAM HP:** iPhone 15 (Jennifer) ➔ Operator: **Jennifer** (*🏛️ Panitia*) `✅`

### C. Engine & Video/Audio Signal Routing
- **Video Routing:** Switcher Cinetreak Cinelive V1 (OWL) ➔ TV Kezia, Splitter 4CH UKK/GKJ, OBS Studio.
- **Audio Routing:** Mixer Yamaha QL5 (UNNES) ➔ Sub-Mixer NewBaxs CT80S (GIA) ➔ OBS Studio + Resolume DAC Playback + 2x Virtual Mixers (WiFi UNNES-ID).
- **Time Keeper:** ProPresenter 3 ➔ TV Darrel (Operator: **Tim Acara** — *🏛️ Panitia*).

### D. Workstation & PIC Allocation
- Mixer 1 (FOH): Jordan / Yosua (*✨ Pelayan*) `✅`
- Mixer 2 (Sub-Mixer): Andreas (*✨ Pelayan*) `✅`
- Virtual Mixer 1: Jordan / Yosua (*✨ Pelayan*) `✅`
- Virtual Mixer 2: Jordan / Yosua (*✨ Pelayan*) `✅`
- Resolume Arena: Andreas (*✨ Pelayan*) `✅`
- Pro Presenter 1: Rania (*🏛️ Panitia*) `⚠️` (Laptop Belum Ada)
- Pro Presenter 2: Filia (*🏛️ Panitia*) `⚠️` (Laptop Belum Ada)
- Pro Presenter 3 + TV: Tim Acara (*🏛️ Panitia*) `⚠️` (Laptop Belum Ada)
- Switcher + TV: Wilfred (*🏛️ Panitia*) `✅`
- OBS Studio: Andreas (*✨ Pelayan*) `⚠️` (Laptop Belum Ada)
- Backup Workstation: Kiel 1 (*✨ Pelayan*) `✅`

### E. Master Inventory Directory (119 Items across 13 Lenders)
- **1. OWL (17 items):** Cameras (A6000 x2, A6400, ZV-E10), Lenses (18-105mm x3, 50mm), Batteries (x8), SD 32GB (x4), Switcher Cinelive V1, Pyro H & Pyro S TX/RX, Battery WIR (x4), Tripod, HDMI-Micro Converters & Cables, HDMI Capture (x2).
- **2. ABON (1 item):** HDMI Capture (2 Unit, 1/2 used).
- **3. Andreas (49 items):** Peripherals, USB adaptors, DAC Hanason AB17X / Oraimo, IEMs, Storage drives, HDMI/VGA cables, Electrical power strips (4CH x3, 3CH x2, 2CH, XCH, Terminal T x8), Tool & Jack boxes.
- **4. GIA Deliksari (7 items):** Mixer NewBaxs CT80S, XLR 3M (x2), USB-C cable, Tripod, HDMI Splitter 2CH + Adaptor, HDMI 1M (x2).
- **5. GKJ Ngaliyan (8 items):** Stand lighting, HDMI cables (15M, 10M, 5M, 1.5M), HDMI Capture, HDMI Splitter 4CH + Adaptor.
- **6. UKK UNNES (14 items):** XLR 10M (x3), Stands (x4), Tripod, HDMI cables (10M, 1.5M x4, 15M, 2.5M Mini), HDMI Splitter 4CH + Adaptor, VGA cables & converters, Power cables, Terminal XCH.
- **7. Lio (1 item):** HDMI 1.5M (x1).
- **8. Darrel (3 items):** TV + Adaptor, SD 8GB.
- **9. Kiel 1 (7 items):** Sony ZVE10, Lenses (16-50mm, 50mm Fix), Battery (x2), Charger, SD 64GB & 128GB.
- **10. Joel (6 items):** Sony A6600, Lens 24-70mm Zeiss, Battery (x2), Charger, SD 64GB, Gimbal DJI Ronin RS3.
- **11. Kezia (2 items):** TV + Adaptor.
- **12. Jennifer (2 items):** iPhone 15, TAB iPad.
- **13. Panitia (2 items):** HDMI to Micro HDMI Converter (x2), Terminal Cable XCH.

---

## 3. Realtime Multi-Device Cloud Checklist & Persistence
- **Zero-Setup Realtime Stream:** Real-time Pub/Sub SSE & WebSockets (`ip26_checklist_sync_2026`) with sub-100ms sync across all crew smartphones without logins or API keys.
- **Dual-Layer Cache:** LocalStorage + 24-hour cloud event replay for auditorium network resilience.
- **Grand Packing Meter & Quick Batch Actions:** `Centang Semua (100% Packing)`, `Uncentang Semua (Loading)`, `Filter Belum Kembali`.

---

## 4. UI/UX Design System Specifications (Easeout Dark Mode Architecture)
- **Reference Standard:** [Easeout.co 25 Dark Mode UI Examples](https://www.easeout.co/blog/2020-05-13-25-dark-mode-ui-design-examples/) (Skeuomorphic depth, DStudio dashboard widgets, Unix dark monospace readouts, Valery Pevnev atmospheric glows).
- **Surface Elevation Hierarchy:**
  - **Canvas Base (L0):** `#0c0d10` with subtle geometric dot/square technical grid pattern (`radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)` at 24px spacing) and ambient glowing radial overlays.
  - **Raised Containers (L1):** `#12141a` with 1px border `rgba(255,255,255,0.07)`.
  - **Interactive Cards (L2):** `#181b22` with top-edge glint highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`) and dual-stage volumetric drop shadow (`0 8px 24px rgba(0,0,0,0.45)`).
  - **Active / Floating Docks (L3):** `#202430` with neon cyan rim halo (`0 0 20px rgba(0,229,255,0.18)`).
- **Luminescent Accent Palette:**
  - **Electric Cyan (`#00e5ff`):** Broadcast telemetry, live buttons, system highlights, active tab line.
  - **Neon Emerald (`#00f59b`):** 100% verified status `✅`, packing meter completion, cloud sync green pulse.
  - **Ultraviolet (`#a855f7`):** Structural badge **🏛️ Panitia**, Creative Lead, and timeline tags.
  - **Cyber Amber (`#ffb800`):** Pending hardware alerts `⚠️`, inventory usage ratio tags.
  - **Pulse Coral (`#ff3b5c`):** Live indicators, items unreturned filter, quick reset actions.
- **Typography & Data Readability:**
  - Headlines: `Plus Jakarta Sans` & `Space Grotesk` with tight tracking (`-0.02em`).
  - Monospace Telemetry: `JetBrains Mono` for percentages, checklist IDs, and cable specifications.
- **Navigation & Mobile Dock:**
  - Glassmorphic top sticky navbar + Mobile bottom dock with `backdrop-filter: blur(20px)` and active glowing indicators.
- **Rendering Performance:**
  - Zero-jank 60–144 FPS rendering, single-pass DOM injection, hardware-accelerated CSS transforms, and offline caching.
