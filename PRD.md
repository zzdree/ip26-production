# 📋 PRODUCT REQUIREMENTS DOCUMENT (PRD v11.0)
## Ibadah Perdana UKK UNNES 2026 — Fluid Single-Page Studio Edition

---

### 1. Executive Summary & Visi Produk
* **Nama Acara**: Ibadah Perdana UKK UNNES 2026
* **Tanggal Pelaksanaan**: 17 September 2026
* **Lokasi**: Gedung Auditorium Universitas Negeri Semarang (UNNES)
* **Pelaksana Produksi**: Panitia Ibadah Perdana 2026 & Divisi Pelayan Multimedia UKK UNNES
* **Tujuan Desain**: Menghadirkan web single-page terpadu (*Unified Single-Page Experience*) yang **fluid, elegan, minimalis, dan berkelas tinggi (*kece & modern*)** dengan palet **Dark Grey Premium**, navigasi desktop di atas, dan navigasi mobile di bawah (*Bottom Mobile Dock*).

---

### 2. Arsitektur Single-Page & Tata Letak Responsif

```
┌────────────────────────────────────────────────────────────────────────┐
│ DESKTOP TOP NAVBAR (Sticky Top): Logo, Event Countdown, Nav Links, WIB │
├────────────────────────────────────────────────────────────────────────┤
│ 1. SECTION: HERO & OPERATIONAL OVERVIEW                                │
│    - Status Siaran, Live Countdown, 5 Aksioma Panitia vs Pelayan       │
├────────────────────────────────────────────────────────────────────────┤
│ 2. SECTION: MASTER INVENTARIS & PACKING MANIFEST (119 ITEM)            │
│    - Progress Bar Realtime, Filter 13 Peminjam, Batch Actions, Search  │
├────────────────────────────────────────────────────────────────────────┤
│ 3. SECTION: SISTEM KAMERA & RIGGING (5 Broadcast + 3 Dokumentasi)      │
│    - Kartu Spek Lengkap + Tombol 1-Click Salin Briefing WhatsApp       │
├────────────────────────────────────────────────────────────────────────┤
│ 4. SECTION: ROUTING SINYAL & WORKSTATION MEDIA                         │
│    - Switcher Cinetreak Interaktif, Matriks Video/Audio/Listrik/Timer  │
│    - Alokasi 11 Workstation Media & Operator                           │
├────────────────────────────────────────────────────────────────────────┤
│ 5. SECTION: RUNDOWN KONTEN & STRUKTUR TIM                              │
│    - Bagan Kepemimpinan Divisi, Tabel 3-Phase Rundown (Pre, Main, Post)│
├────────────────────────────────────────────────────────────────────────┤
│ FOOTER: Metadata Produksi & Realtime Engine                            │
├────────────────────────────────────────────────────────────────────────┤
│ MOBILE BOTTOM DOCK (Sticky Bottom di Layar HP): [🏠] [📦] [🎥] [🔀] [⏱️]│
└────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Lima Aksioma Fungsional (Panitia vs Pelayan)
1. **Panitia bisa menjadi pelayan.**
2. **Pelayan belum tentu panitia.**
3. **PIC ada yang menjadi panitia.**
4. **PIC yang bukan panitia berarti pelayan.**
5. **PIC dan Pelayan berkedudukan setara dalam eksekusi teknis lapangan.**

---

### 4. Rincian Data Teknis (100% Sesuai Dokumen Sumber)

#### A. 119 Item Inventaris dari 13 Peminjam:
* **OWL (17 Item)**: Sony A6000 (2 Unit), Sony A6400 (1 Unit), Sony ZV-E10 (1 Unit), Lensa 18-105mm (3 Unit), Lensa 50mm Prime (1 Unit), Baterai (8 Unit), Charger (1 Pack), SD Card 32GB (4 Unit), Cinetreak Cinelive V1 (1 Pack), Power Adaptor MIX (1 Unit), Hollyland Pyro H (1 Pack), Hollyland Pyro S (1 Pack), Baterai WIR (4 Unit), Tripod Big (1 Unit), HDMI Micro Converter (2 Unit), Kabel HDMI Micro 30cm (2 Unit), HDMI Capture (2 Unit).
* **ABON (1 Item)**: HDMI Capture (2 Unit — 1 Active, 1 Standby).
* **Andreas (49 Item)**: Fan Cooler, Mouse Pad, Keyboard Ext, Mouse Ext, Powerbank, Power Adaptor USB-A (9), USB-A x C (1), USB-C (1), Kabel Data USB A-B (1), USB A-Micro B (2), USB A-C Data (1), USB A-C Charge (1), USB C-C (1), Extender USB-A 30cm (2), Extender USB-A 2M (1), Converter USB A-C Male (4), USB A-C Female (2), Kabel Mini USB (1), Splitter USB-A 3CH (1), Splitter USB-A 4CH (1), USB-C DAC Hanason AB17X (1), USB-C DAC Oraimo OAA310 (1), IEM QKZ Hi7T (1), IEM KZ EDX Pro (1), SSD Vgen 128GB (1), HDD Toshiba 1TB (1), Flashdisk 8GB, 16GB, 32GB, 64GB, Converter HDMI-Mini HDMI (1), Kabel Mini HDMI 1.5M (1), Kabel HDMI 1.5M (3), Converter VGA-HDMI (3), Kabel VGA 1.5M (1), Kabel Power 3PIN (3), Kabel Power 2PIN (1), Terminal 4CH (3), Terminal 3CH (2), Terminal 2CH (1), Terminal XCH (X), Terminal T (8), Addon Box, Jack Box, Screw Box, Ties Box, Tool Box (2), Kabel Pack, Lakban Gaffer.
* **GIA Deliksari (7 Item)**: Mixer NewBaxs CT80S, Kabel XLR 3M (2), Kabel USB A-C Data (1), Tripod Big (1), HDMI Splitter 2CH (1), Power Adaptor SPL (1), Kabel HDMI 1M (2).
* **GKJ Ngaliyan (8 Item)**: Stand Light (1), Kabel HDMI 15M (1), Kabel HDMI 10M (1), Kabel HDMI 5M (1), Kabel HDMI 1.5M (1), HDMI Capture (1), HDMI Splitter 4CH (1), Power Adaptor SPL (1).
* **UKK UNNES (14 Item)**: Kabel XLR 10M (3), Stand Light (4), Tripod Big (1), Kabel HDMI-Mini HDMI 2.5M (1), Kabel HDMI 15M (1), Kabel HDMI 10M (1), Kabel HDMI 1.5M (4), HDMI Splitter 4CH (1), Power Adaptor SPL (1), Kabel VGA 1.5M (1), Kabel VGA 2.5M (1), Converter VGA-HDMI (2), Kabel Power XPIN (X), Terminal XCH (X).
* **Lio (1 Item)**: Kabel HDMI 1.5M (1).
* **Darrel (3 Item)**: TV Panggung (1), Power Adaptor TV (1), SD Card 8GB (1).
* **Kiel 1 (7 Item)**: Sony ZVE10 (1), Lensa 16-50mm Kit (1), Lensa 50mm Fix (1), Baterai (2), Charger (1), SD Card 64GB (1), SD Card 128GB (1).
* **Joel (6 Item)**: Sony A6600 (1), Lensa 24-70mm Zeiss (1), Baterai (2), Charger (1), SD Card 64GB (1), Gimbal DJI Ronin RS3 (1).
* **Kezia (2 Item)**: TV Multiview (1), Power Adaptor TV (1).
* **Jennifer (2 Item)**: iPhone 15 Pro (1), iPad (1).
* **Panitia (2 Item)**: Converter HDMI-Micro HDMI (2), Terminal XCH (X).

#### B. Kamera Broadcast (5 Unit) & Dokumentasi (3 Unit):
* **CAM 1**: Sony ZVE10 + Lensa 18-105mm + Hollyland Pyro S Wireless ➔ Cinetreak (Alex) ✅
* **CAM 2**: Sony ZV-E10 + Lensa 18-105mm + Hollyland Pyro H Wireless ➔ Cinetreak (Kiel 1) ✅
* **CAM 3**: Sony A6000 + Lensa 18-105mm + Kabel HDMI 10M ➔ Cinetreak (Nia) ✅
* **CAM 4**: Sony A6000 + Lensa 16-50mm Kit + Kabel HDMI 10M ➔ Cinetreak (Ferdy) ✅
* **BACKUP**: Converter Micro HDMI 2X + Splitter Backup (Panitia)
* **CAM PHO**: Sony A6400 + Lensa 50mm Prime (Nico) ✅
* **CAM VID**: Sony A6600 + Lensa 24-70mm Zeiss + Gimbal DJI RS3 (Joel) ✅
* **CAM HP**: iPhone 15 Pro (Jennifer) ✅

#### C. Workstation Media & Operator:
* Yamaha QL5 (Jordan/Yosua), CT80S (Andreas), Virtual Mixer 1 (Jordan/Yosua), Virtual Mixer 2 (Jordan/Yosua), Resolume Arena (Andreas), ProPresenter 1 (Rania), ProPresenter 2 (Filia), ProPresenter 3 + TV (Acara), Switcher + TV (Wilfred), OBS Studio (Andreas), Backup Laptop (Kiel 1).

---

### 5. Integrasi Database & Sinkronisasi
* **Supabase PostgreSQL Realtime**: WebSockets sinkronisasi checklist barang antar perangkat 0ms.
* **Keep-Alive Cron**: GitHub Actions harian (`0 0 * * *`) menjaga Supabase aktif 24/7.
