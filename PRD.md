# 📄 Product Requirements Document (PRD) — v7.1 Production & Engineering Suite
## IP26 Broadcast Command Suite — Ibadah Perdana UKK UNNES 2026

---

## 1. Executive Summary & Team Structure
- **Product Name:** IP26 Master Broadcast Control & Realtime Production Suite
- **Event:** Ibadah Perdana UKK UNNES 2026
- **Venue:** Gedung Auditorium Universitas Negeri Semarang (UNNES)
- **Production Hierarchy:**
  - **System Engineer:** Andreas (Leader) — *🏛️ Panitia*
  - **Media Engineer:** Richard (Leader) — *🏛️ Panitia*, Wilfred (*✨ Pelayan*), Alex (*✨ Pelayan*), Rania (*✨ Pelayan*)
  - **Creative Engineer:** Jennifer (Leader) — *🏛️ Panitia*, Filia (*✨ Pelayan*), Felani (*✨ Pelayan*), Wike (*✨ Pelayan*)

### 1.1 Klasifikasi Status Personel PIC
- **🏛️ Panitia (Committee):** Personel yang memegang jabatan struktural kepanitiaan resmi Ibadah Perdana 2026 (seperti Tim Acara, System Lead, Media Lead, Creative Lead).
- **✨ Pelayan (Ministry Servant / Field Operator):** Personel yang melayani khusus sebagai operator teknis lapangan (Kamera, Sound Mixer, Visual Display, Lighting) dan bukan panitia struktural.

---

## 2. Core Modules & System Architecture

### A. Broadcast Camera System (Integrated with Engine System)
- **CAM 1 (Wireless + Fixed):** Sony ZVE10 (Kiel 1) + Hollyland Pyro S (OWL) ➔ Operator: **Alex** (*✨ Pelayan*) `✅`
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
- Mixer 2 (Sub-Mixer): Andreas (*🏛️ Panitia*) `✅`
- Virtual Mixer 1: Jordan / Yosua (*✨ Pelayan*) `✅`
- Virtual Mixer 2: Jordan / Yosua (*✨ Pelayan*) `✅`
- Resolume Arena: Andreas (*🏛️ Panitia*) `✅`
- Pro Presenter 1: Rania (*✨ Pelayan*) `⚠️` (Laptop Belum Ada)
- Pro Presenter 2: Filia (*✨ Pelayan*) `⚠️` (Laptop Belum Ada)
- Pro Presenter 3 + TV: Tim Acara (*🏛️ Panitia*) `⚠️` (Laptop Belum Ada)
- Switcher + TV: Wilfred (*✨ Pelayan*) `✅`
- OBS Studio: Andreas (*🏛️ Panitia*) `⚠️` (Laptop Belum Ada)
- Backup Workstation: Kiel 1 (*✨ Pelayan*) `✅`

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
