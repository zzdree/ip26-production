# PRODUCT REQUIREMENT DOCUMENT (PRD) v9.0
## IP26 Broadcast Command Suite — Minimalist Modular Edition

---

### 1. Executive Summary & Vision
* **Project Name**: IP26 Broadcast Command Suite
* **Event**: Ibadah Perdana UKK UNNES 2026 (17 September 2026)
* **Venue**: Gedung Auditorium Universitas Negeri Semarang
* **Production Core**: Panitia & Pelayan Ibadah Perdana 2026
* **Design Philosophy**: Minimalist High-Focus Studio UI (Inspired by *Raycast & Linear*).
* **Key Objective**: Menyederhanakan tampilan antarmuka (*de-cluttering visual overload*) menjadi sistem modular 4-Tab yang bersih, ringan, dan fokus pada tugas operasional tanpa menghilangkan satupun data teknis dari sumber acuan.

---

### 2. 5 Prinsip Operasional Dasar (Panitia vs Pelayan)
Sistem membedakan secara tegas dan harmonis antara fungsi Panitia Struktural dan Pelayan Operasional:
1. **Panitia bisa menjadi pelayan**: Anggota panitia struktural dapat bertugas teknis di lapangan.
2. **Pelayan belum tentu panitia**: Kru pelayan teknis tidak selalu berstatus panitia struktural.
3. **PIC ada yang menjadi panitia**: Person in Charge tertentu memegang posisi di kepanitiaan.
4. **PIC yang bukan panitia berarti pelayan**: Seluruh PIC non-panitia berstatus Pelayan Teknis.
5. **PIC dan Pelayan itu sama**: Dalam eksekusi operasional teknis, PIC dan Pelayan setara.

---

### 3. Struktur Modul & Tab Navigation (Clean View Switcher)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│ [LOGO IP26]  IP26 COMMAND SUITE    🟢 Supabase DB (Live Sync)   21:30:00 WIB  [GitHub]  │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│   [ 📦 Inventaris (119) ]   [ 🎥 Rig Kamera ]   [ 🔀 Routing Sinyal ]   [ ⏱️ Rundown & Tim ]    │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Tab 1: 📦 Inventaris & Packing Checklist (Focus Mode)
* **Dataset**: 119 Item dari 13 Peminjam (OWL, Andreas, GIA, GKJ, UKK UNNES, Lio, Darrel, Kiel 1, Joel, Kezia, Jennifer, ABON, Panitia).
* **Indikator Progress**: Progress bar terintegrasi dengan counter real-time (contoh: `0 / 119 Barang Terpacking (0%)`).
* **Filter Interaktif**:
  * Pilihan Peminjam (Pills: *Semua, OWL, Andreas, UKK UNNES, GIA, GKJ, Kiel 1, Joel, Darrel, Kezia, Jennifer, Lio, ABON, Panitia*).
  * Status Barang: *Semua, Terpakai (✅), Parsial (⚠️), Standby (☑️)*.
  * Filter Cepat: *Tampilkan Hanya yang Belum Kembali*.
  * Pencarian Real-Time (Debounced 35ms).
* **Aksi Cepat (Batch Actions)**: *Tandai Semua Selesai*, *Reset Checklist*.

#### Tab 2: 🎥 Rig Kamera & Operator
* **Broadcast Camera System (4 Rig Terverifikasi + 1 Backup)**:
  * **CAM 1 (Wireless + Fixed)**: Alex *(Sony ZV-E10 Kiel 1 + Pyro S + Lens 18-105)*.
  * **CAM 2 (Wireless + Mobile)**: Kiel 1 *(Sony ZV-E10 OWL + Pyro H + Lens 18-105)*.
  * **CAM 3 (Wired + Fixed)**: Nia *(Sony A6000 OWL + Micro HDMI + HDMI 10M GKJ)*.
  * **CAM 4 (Wired + Fixed)**: Ferdy *(Sony A6000 OWL + Lens 16-50 + HDMI 10M UKK)*.
  * **Backup**: 2 Unit Micro HDMI to HDMI Converter (Panitia).
* **Documentation Camera System (3 Rig)**:
  * **CAM PHO (Photo)**: Nico *(Sony A6400 OWL + 50MM OWL)*.
  * **CAM VID (Video)**: Joel *(Sony A6600 Joel + 24-70 Zeiss + DJI RS3)*.
  * **CAM HP (Social Media)**: Jennifer *(iPhone 15)*.

#### Tab 3: 🔀 Routing Sinyal & Media Engine
* **Sub-Kategori**:
  1. **Video Signal Matrix**: Switcher Cinetreak Cinelive V1 (OWL) ➔ Splitter HDMI 4CH (UKK/GKJ) ➔ Resolume Arena ➔ OBS Studio ➔ Novastar LED Center/Left/Right/Back.
  2. **Audio Signal Matrix**: Yamaha QL5 (UNNES) ➔ XLR 10M/3M ➔ NewBaxs CT80S (GIA) ➔ DAC Hanason/Oraimo ➔ OBS Studio & Virtual Mixers (Laptop Andreas + iPad Jennifer).
  3. **Timekeeper Display**: ProPresenter 3 (Laptop) ➔ HDMI 1.5M (Lio) ➔ TV (Darrel).
  4. **Electrical & Power**: Distribusi Terminal XCH (Andreas, UKK, Panitia) & Terminal T.
* **Perangkat & Operator Terdaftar**:
  * Mixer 1 (Jordan/Yosua), Mixer 2 (Andreas), VM 1 & 2 (Jordan/Yosua), Resolume (Andreas), ProPresenter 1 (Rania), ProPresenter 2 (Filia), ProPresenter 3 (Acara), Switcher (Wilfred), OBS (Andreas), Backup (Kiel 1).

#### Tab 4: ⏱️ Rundown & Tim Produksi
* **Struktur Tim**:
  * **System Engineer (✨ Pelayan)**: Andreas *(Leader)*.
  * **Media Engineer (🏛️ Panitia)**: Richard *(Leader)*, Wilfred, Alex, Rania.
  * **Creative Engineer (🏛️ Panitia)**: Jennifer *(Leader)*, Filia, Felani, Wike.
  * **Divisi Acara (🏛️ Panitia)**: Tim Acara.
  * **Pelayan Lapangan (✨ Pelayan)**: Andreas, Kiel 1, Nia, Ferdy, Nico, Joel, Jordan, Yosua.
* **Materi & Sesi Acara**:
  * **Pre-Ibadah (Open Gate)**: Playlist Lagu Rohani, Loop Video Profile UKK, After Movie IP25/IN25.
  * **Main Ibadah (Main Event)**: Video Opening, Sambutan Bu Grace, Background Lagu & Lirik, Video Generation, PPT/Ayat/Quote Pembicara, QRIS Persembahan, UKK News, Pokok Doa.
  * **Post-Ibadah (Close Gate)**: Usung-usung & Rekap Inventaris.

---

### 4. Database & Cloud Architecture
* **Primary Database**: Supabase PostgreSQL (`ssbkhhnnzwuykyeznpwd.supabase.co`).
* **Realtime Protocol**: WebSockets via `@supabase/supabase-js` (`postgres_changes` on `inventory_checklist`).
* **Keep-Alive Automation**: GitHub Actions Daily Cron (`0 0 * * *`) via `.github/workflows/supabase-keep-alive.yml` untuk mencegah 7-day auto-pause.
* **Local Offline Fallback**: Web Storage (`localStorage`) + Auxiliary SSE Relay (`ntfy.sh`).

---

### 5. UI/UX & Non-Functional Specifications
* **Aesthetics**: Obsidian Clean Dark (`#0b0c0f` canvas, `#14171f` card surfaces, 1px crisp borders, Inter/Space Grotesk typography).
* **Performance**: 144Hz Smooth Scrolling, Hardware-Accelerated Canvas, Zero Cumulative Layout Shift (CLS), Debounced Input.
* **Responsiveness**: Mobile-First Dock Navigation + Desktop Top Nav Tabs.
