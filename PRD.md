# 📋 PRODUCT REQUIREMENTS DOCUMENT (PRD v12.0)
## Ibadah Perdana UKK UNNES 2026 — Master Unified Single-Page Broadcast Suite

---

### 1. Executive Summary & Visi Produk
* **Nama Acara**: Ibadah Perdana UKK UNNES 2026
* **Tanggal Pelaksanaan**: 17 September 2026
* **Lokasi**: Gedung Auditorium Universitas Negeri Semarang (UNNES)
* **Pelaksana Produksi**: Panitia Ibadah Perdana 2026 & Divisi Pelayan Multimedia UKK UNNES
* **Tujuan Produk**: Aplikasi web komando siaran terpadu (*Unified Single-Page Command Suite*) yang menyajikan 100% data teknis produksi dalam satu halaman yang mengalir (*fluid scrolling*), berkecepatan 144Hz, dengan estetika **Dark Grey Premium**, navigasi desktop di atas (*Sticky Top Header*), dan navigasi mobile di bawah (*Bottom Floating Dock*).

---

### 2. Standar Desain & Skills Terintegrasi
1. **`frontend-design`**: Antarmuka berkarakter kuat, berkelas studio siaran (*Broadcast Engineering Craft*), tipografi presisi, dan visual yang memorable.
2. **`mobile-design`**: Desain *touch-first*, *thumb-zone bottom dock*, target sentuh luas (≥48px), dan responsivitas mobile alami.
3. **`design-md`**: Dokumentasi spesifikasi sistem desain semantik lengkap di `DESIGN.md`.
4. **`web-design-guidelines`**: Aksesibilitas WCAG 2.1 AA, kontras warna tajam, semantik HTML5 murni, dan keyboard shortcuts (`Ctrl + K`).
5. **`ui-skills` (StyleSeed Suite)**: Arsitektur token CSS terstandarisasi (`--bg-base`, `--bg-surface`, `--text-main`, `--accent-cyan`, `--emerald`).
6. **`iconsax-library`**: Set ikon SVG modern bergaya *Linear/Two-Tone* pada grid konsisten 20x20 / 24x24.
7. **`magic-animator`**: Penerapan kurva animasi *kinetic easing* `cubic-bezier(0.16, 1, 0.3, 1)`, hover lift lembut pada kartu, dan live pulse indicators.

---

### 3. Lima Aksioma Fungsional (Panitia vs Pelayan)
Sistem menegaskan pemisahan dan kesetaraan fungsional:
1. **Panitia bisa menjadi pelayan.**
2. **Pelayan belum tentu panitia.**
3. **PIC ada yang menjadi panitia.**
4. **PIC yang bukan panitia berarti pelayan.**
5. **PIC dan Pelayan berkedudukan setara dalam eksekusi teknis lapangan.**

---

### 4. Struktur Tim & Pembagian Divisi
* **System Engineer (Pelayan)**:
  * *Leader*: Andreas (Arsitektur sistem, routing sinyal, switcher, OBS, kelistrikan, dan audio sub-mixing).
* **Media Engineer (Panitia)**:
  * *Leader*: Richard
  * *Anggota*: Wilfred (Switcher), Alex (Cam 1 FOH), Rania (ProPresenter 1).
* **Creative Engineer (Panitia)**:
  * *Leader*: Jennifer
  * *Anggota*: Filia (ProPresenter 2), Felani, Wike.

---

### 5. Rincian Modul Single-Page (5 Seksi Lengkap)

#### A. Seksi 1: Hero & Operational Overview (`#secOverview`)
* Informasi Event, Lokasi Auditorium UNNES, dan Tanggal 17 September 2026.
* Live Countdown Timer presisi detik.
* Jam Master WIB real-time.
* Panel 5 Aksioma Operasional.

#### B. Seksi 2: Master Inventaris & Packing Manifest (`#secInventory`)
* **119 Item dari 13 Peminjam**:
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
* **Fitur**: Real-time progress bar, pencarian instan *debounced*, filter peminjam satu baris, aksi batch (*Tandai Selesai*, *Reset*, *Filter Belum Kembali*), dan sinkronisasi dua arah ke **Supabase PostgreSQL**.

#### C. Seksi 3: Sistem Rigging Kamera (`#secCameras`)
* **5 Broadcast Camera Systems**:
  * *CAM 1 (Alex)*: Sony ZVE10 + Lensa 18-105mm + Hollyland Pyro S Wireless + Tripod Big (OWL) ✅
  * *CAM 2 (Kiel 1)*: Sony ZV-E10 + Lensa 18-105mm + Hollyland Pyro H Wireless + Stand Light (UKK) ✅
  * *CAM 3 (Nia)*: Sony A6000 + Lensa 18-105mm + HDMI 10M (GKJ) + Tripod Big (GIA) ✅
  * *CAM 4 (Ferdy)*: Sony A6000 + Lensa 16-50mm Kit + HDMI 10M (UKK) + Tripod Big (UKK) ✅
  * *BACKUP (Panitia)*: Micro HDMI Converter X2 + Splitter Backup GKJ/GIA
* **3 Documentation Camera Systems**:
  * *CAM PHO (Nico)*: Sony A6400 + Lensa 50mm Prime (OWL) ✅
  * *CAM VID (Joel)*: Sony A6600 + Lensa 24-70mm Zeiss + Gimbal DJI RS3 (Joel) ✅
  * *CAM HP (Jennifer)*: iPhone 15 Pro (Jennifer) ✅
* **Fitur**: Tombol *1-Click Copy Briefing WA* dengan toast konfirmasi 2 detik.

#### D. Seksi 4: Routing Sinyal & Workstation Media (`#secRouting`)
* **Interactive Cinetreak Switcher**: Bus PGM/PVW interaktif 4 Channel.
* **Video Routing Matrix**: Cinetreak ➔ Splitter 4CH ➔ ProPresenter & Resolume ➔ Novastar Processor ➔ Multi-Screen LED (Center, Left, Right, Back) & OBS Streaming.
* **Audio Routing Matrix**: Yamaha QL5 (UNNES FOH) ➔ XLR 10M & 3M ➔ NewBaxs CT80S (GIA) ➔ USB DAC Hanason & OBS Studio.
* **Stage Timekeeper Matrix**: ProPresenter 3 ➔ HDMI 1.5M (Lio) ➔ TV Monitor Panggung (Darrel).
* **Electrical Matrix**: Terminal 4CH, 3CH, 2CH, Terminal T (8 Unit) & Jalur Bebas Gangguan XCH.
* **11 Workstation Media & Operator**: Roster lengkap beserta status ketersediaan hardware.

#### E. Seksi 5: Rundown Multimedia & Sesi Acara (`#secRundown`)
* **3 Sesi Acara**:
  1. *Pre-Ibadah (Open Gate)*: Playlist Rohani FOH, Loop Video Profil UKK & After Movie IP25/IN25 di LED Tengah.
  2. *Main Ibadah (Main Event)*: Opening Video, Sambutan Bu Grace, Background Tema/Musik, Lirik Lagu, Video Generation, PPT/Ayat/Quote Pembicara, QRIS Persembahan, UKK News, Pokok Doa, Timekeeper Stage Timer.
  3. *Post-Ibadah (Close Gate)*: Usung-usung, re-packing manifest, dan verifikasi serah-terima barang pinjaman.

---

### 6. Arsitektur Database & Real-Time Sync
* **Database**: Supabase PostgreSQL (`ssbkhhnnzwuykyeznpwd.supabase.co`).
* **Realtime Channel**: WebSockets `public.inventory_checklist`.
* **Keep-Alive Cron**: GitHub Actions harian (`.github/workflows/supabase-keep-alive.yml`).
