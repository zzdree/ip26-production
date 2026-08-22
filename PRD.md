# 📋 PRODUCT REQUIREMENTS DOCUMENT (PRD v10.0)
## Ibadah Perdana UKK UNNES 2026 — Master Broadcast Command Suite

---

### 1. Executive Summary & Event Context
* **Nama Acara**: Ibadah Perdana UKK UNNES 2026
* **Tanggal Pelaksanaan**: 17 September 2026
* **Lokasi**: Gedung Auditorium Universitas Negeri Semarang (UNNES)
* **Pelaksana Produksi**: Panitia Ibadah Perdana 2026 & Divisi Pelayan Multimedia UKK UNNES
* **Tujuan Aplikasi**: Platform kendali komando siaran terpadu (*Unified Broadcast Command Suite*) yang menyatukan alur checklist 119 alat inventaris, 5 rig kamera broadcast, 3 kamera dokumentasi, 4 matriks routing kabel/sinyal, alokasi 11 workstation operator media, serta sinkronisasi database real-time antar perangkat kru.

---

### 2. Lima Aksioma & Prinsip Operasional (Axioms of Operation)
Sistem membedakan secara tegas peran struktural panitia dan fungsionalitas pelayanan teknis:
1. **Prinsip 1**: Panitia bisa menjadi pelayan.
2. **Prinsip 2**: Pelayan belum tentu panitia.
3. **Prinsip 3**: PIC ada yang menjadi panitia.
4. **Prinsip 4**: PIC yang bukan panitia berarti pelayan.
5. **Prinsip 5**: PIC dan Pelayan berkedudukan setara dalam eksekusi teknis lapangan.

---

### 3. Arsitektur 4 Master Decks (Functional Modules)

#### 🎛️ Deck 1: Vision Mixer & Live Signal Topology
* **Switcher Engine**: Cinetreak Cinelive V1 (Input CAM 1-4, Output Multi-Screen & OBS).
* **Signal Matrices**:
  * **Video Routing**: Cinetreak ➔ Splitter HDMI 4CH ➔ Resolume Arena & ProPresenter ➔ Video Processor Novastar ➔ LED Wall (Center, Left, Right, Back Stage).
  * **Audio Routing**: Yamaha QL5 (UNNES FOH) ➔ XLR 10M & 3M ➔ NewBaxs CT80S (GIA) ➔ USB DAC & OBS Studio (Auxiliary Streaming Feed).
  * **Timekeeper Routing**: ProPresenter 3 ➔ HDMI 1.5M ➔ TV Panggung Darrel (Display Waktu Pembicara).
  * **Electrical Routing**: Terminal 4CH, 3CH, 2CH, dan Terminal T dengan jalur beban seimbang.
* **Media Workstations & Operators**:
  1. *Mixer 1 Yamaha QL5*: Jordan / Yosua (UNNES) ✅
  2. *Mixer 2 NewBaxs CT80S*: Andreas (GIA) ✅
  3. *Virtual Mixer 1 Laptop*: Jordan / Yosua (Andreas) ✅
  4. *Virtual Mixer 2 iPad*: Jordan / Yosua (Jennifer) ✅
  5. *Resolume Arena*: Andreas (Bayu) ✅
  6. *ProPresenter 1*: Rania (Laptop TBD) ⚠️
  7. *ProPresenter 2*: Filia (Laptop TBD) ⚠️
  8. *ProPresenter 3 + TV*: Acara (Darrel) ⚠️
  9. *Switcher Cinetreak + TV*: Wilfred (OWL & Kezia) ✅
  10. *OBS Studio*: Andreas (Laptop TBD) ⚠️
  11. *Backup Workstation*: Kiel 1 (Kiel 1) ✅

#### 📦 Deck 2: Tactical Packing Manifest (119 Item / 13 Peminjam)
* **Peminjam Terdaftar**:
  1. OWL (17 Unit)
  2. Andreas (49 Unit)
  3. UKK UNNES (14 Unit)
  4. GKJ Ngaliyan (8 Unit)
  5. GIA Deliksari (7 Unit)
  6. Kiel 1 (7 Unit)
  7. Joel (6 Unit)
  8. Darrel (3 Unit)
  9. Kezia (2 Unit)
  10. Jennifer (2 Unit)
  11. ABON (1 Unit)
  12. Lio (1 Unit)
  13. Panitia (2 Unit)
* **Klasifikasi Status Barang**:
  * `✅ Terpakai`: Masuk dalam wiring/routing aktif.
  * `⚠️ Parsial`: Terpakai sebagian unit.
  * `☑️ Standby`: Siap sedia sebagai backup lapangan.
* **Fitur Manifest**:
  * Realtime Supabase PostgreSQL synchronization via WebSockets.
  * Filter multi-peminjam, pencarian cepat *debounced*, dan tombol filter khusus barang belum kembali.

#### 🎥 Deck 3: Camera Systems & Rigging Specifications
* **Broadcast System (Terintegrasi ke Switcher)**:
  * **CAM 1 (FOH Center / Wide)**: Sony ZV-E10 + Lens 18-105mm + Hollyland Pyro S Wireless TX/RX ➔ Cinetreak (Operator: Alex) ✅
  * **CAM 2 (Left Stage / Mobile)**: Sony ZV-E10 + Lens 18-105mm + Hollyland Pyro H Wireless TX/RX ➔ Cinetreak (Operator: Kiel 1) ✅
  * **CAM 3 (Right Stage / Fixed)**: Sony A6000 + Lens 18-105mm + Cable HDMI 10M ➔ Cinetreak (Operator: Nia) ✅
  * **CAM 4 (Close-Up / Fixed)**: Sony A6000 + Lens 16-50mm + Cable HDMI 10M ➔ Cinetreak (Operator: Ferdy) ✅
  * **CAM 5 (Backup)**: Micro HDMI to HDMI Converter 2X (Panitia)
* **Documentation System (Terpisah)**:
  * **PHO (Still Photography)**: Sony A6400 + Lens Sony 50mm Prime (Operator: Nico) ✅
  * **VID (Cinematic Reels)**: Sony A6600 + Lens 24-70mm Zeiss + Gimbal DJI Ronin RS3 (Operator: Joel) ✅
  * **HP (Social Media VIP)**: iPhone 15 Pro (Operator: Jennifer) ✅
* **Fitur Khusus**: Tombol *1-Click Copy Brief* untuk kirim instruksi rigging langsung ke WhatsApp crew.

#### ⏱️ Deck 4: Run of Show (Rundown) & Operational Command
* **Struktur Divisi**:
  * *System Engineer (Pelayan)*: Andreas (Leader)
  * *Media Engineer (Panitia)*: Richard (Leader), Wilfred, Alex, Rania
  * *Creative Engineer (Panitia)*: Jennifer (Leader), Filia, Felani, Wike
* **3-Fase Rundown**:
  1. *Pre-Ibadah (Open Gate)*: Playlist Rohani FOH, Loop Video Profil UKK, After Movie IP25 & IN25 di LED Tengah.
  2. *Main Ibadah (Main Event)*: Opening Video, Sambutan Bu Grace, Background Tema, Background Musik, Lirik Lagu, Video Generation, PPT/Ayat/Quote Pembicara, QRIS Persembahan, UKK News, Pokok Doa.
  3. *Post-Ibadah (Close Gate)*: Usung-usung, re-packing checklist, dan verifikasi serah-terima barang pinjaman.

---

### 4. Spesifikasi Teknis & Database
* **Database**: Supabase PostgreSQL (`ssbkhhnnzwuykyeznpwd.supabase.co`)
* **Realtime Protocol**: WebSockets channel `public.inventory_checklist`
* **Keep-Alive Cron**: GitHub Actions `.github/workflows/supabase-keep-alive.yml` (Cron harian `0 0 * * *`)
* **Dual-Theme Engine**:
  * Mode 1: *ATEM Pro Broadcast Dark* (`#0d1117`, `#161b22`, Tally Ruby & Emerald)
  * Mode 2: *Studio Paper Light* (`#f8fafc`, `#ffffff`, Slate & Indigo)
