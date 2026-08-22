# 📄 Product Requirements Document (PRD) — v7.0 Full Production & Engineering Suite
## IP26 Broadcast Command Suite — Ibadah Perdana UKK UNNES 2026

---

## 1. Executive Summary & Team Structure
- **Product Name:** IP26 Master Broadcast Control & Realtime Production Suite
- **Event:** Ibadah Perdana UKK UNNES 2026
- **Venue:** Gedung Auditorium Universitas Negeri Semarang (UNNES)
- **Production Hierarchy:**
  - **System Engineer:** Andreas (Leader)
  - **Media Engineer:** Richard (Leader), Wilfred, Alex, Rania
  - **Creative Engineer:** Jennifer (Leader), Filia, Felani, Wike

---

## 2. Core Modules & System Architecture

### A. Broadcast Camera System (Integrated with Engine System)
- **CAM 1 (Wireless + Fixed):** Sony ZVE10 (Kiel 1) + Hollyland Pyro S (OWL) ➔ Operator: **Alex** `✅`
- **CAM 2 (Wireless + Mobile):** Sony ZV-E10 (OWL) + Hollyland Pyro H (OWL) ➔ Operator: **Kiel 1** `✅`
- **CAM 3 (Wired + Fixed):** Sony A6000 (OWL) + Lens 18-105mm (OWL) + HDMI 10M (GKJ) ➔ Operator: **Nia** `✅`
- **CAM 4 (Wired + Fixed):** Sony A6000 (OWL) + Lens 16-50mm Kit (Kiel 1) + HDMI 10M (UKK) ➔ Operator: **Ferdy** `✅`
- **Backup:** Micro HDMI to HDMI Converter X2 (Panitia) `☑️`

### B. Documentation Camera System (Dedicated Offline Production)
- **CAM PHO:** Sony A6400 (OWL) + 50mm Fix (OWL) ➔ Operator: **Nico** `✅`
- **CAM VID:** Sony A6600 (Joel) + 24-70mm Zeiss + DJI Ronin RS3 (Joel) ➔ Operator: **Joel** `✅`
- **CAM HP:** iPhone 15 (Jennifer) ➔ Operator: **Jennifer** `✅`

### C. Engine & Video/Audio Signal Routing
- **Video Routing:** Switcher Cinetreak Cinelive V1 (OWL) ➔ TV Kezia, Splitter 4CH UKK/GKJ, OBS Studio.
- **Audio Routing:** Mixer Yamaha QL5 (UNNES) ➔ Sub-Mixer NewBaxs CT80S (GIA) ➔ OBS Studio + Resolume DAC Playback + 2x Virtual Mixers (WiFi UNNES-ID).
- **Time Keeper:** ProPresenter 3 ➔ TV Darrel (Operator: Tim Acara).

### D. Workstation & PIC Allocation
- Mixer 1: Jordan / Yosua `✅`
- Mixer 2: Andreas `✅`
- Virtual Mixer 1: Jordan / Yosua `✅`
- Virtual Mixer 2: Jordan / Yosua `✅`
- Resolume Arena: Andreas `✅`
- Pro Presenter 1: Rania `⚠️` (Laptop Belum Ada)
- Pro Presenter 2: Filia `⚠️` (Laptop Belum Ada)
- Pro Presenter 3 + TV: Tim Acara `⚠️` (Laptop Belum Ada)
- Switcher + TV: Wilfred `✅`
- OBS Studio: Andreas `⚠️` (Laptop Belum Ada)
- Backup Laptop: Kiel 1 `✅`

---

## 3. Realtime Multi-Device Cloud Checklist & Persistence
- **Zero-Setup Realtime Stream:** Real-time Pub/Sub SSE & WebSockets (`ip26_checklist_sync_2026`) with sub-100ms sync across all crew smartphones without logins or API keys.
- **Dual-Layer Cache:** LocalStorage + 24-hour cloud event replay for auditorium network resilience.
- **Grand Packing Meter & Quick Batch Actions:** `Centang Semua (100% Packing)`, `Uncentang Semua (Loading)`, `Filter Belum Kembali`.

---

## 4. UI & Performance Specs
- **Theme:** Pure Neutral Dark Grey (`#111214`, `#17181c`, `#1e1f25`, `#252730`). Zero blue hue.
- **Navigation:** Desktop sticky tab bar + Mobile bottom dock.
- **Performance:** 60-144 FPS zero-jank scrolling, `IntersectionObserver` scroll-spy, hardware-accelerated single-pass CSS, and single-pass DOM string injection.
