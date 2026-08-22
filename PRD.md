# 📋 PRODUCT REQUIREMENTS DOCUMENT (PRD v13.0)
## Ibadah Perdana UKK UNNES 2026 — Minimalist Clean Compact Studio Suite

---

### 1. Executive Summary & Visi Produk
* **Nama Acara**: Ibadah Perdana UKK UNNES 2026
* **Tanggal Pelaksanaan**: 17 September 2026
* **Lokasi**: Gedung Auditorium Universitas Negeri Semarang (UNNES)
* **Pelaksana Produksi**: Panitia Ibadah Perdana 2026 & Divisi Pelayan Multimedia UKK UNNES
* **Arah Desain**: **Minimalist & Clean Compact** (Gaya *Linear / Vercel Dark Mode* — kartu rapi, hairline border presisi, minim ornamen berlebih, tipografi tajam, dan performa instan).
* **Alur Interaksi**: **Single Page dengan Collapsible Accordion** (setiap modul dapat dibuka-tutup untuk kenyamanan scrolling di HP, terintegrasi dengan Top Desktop Nav dan Mobile Bottom Dock).

---

### 2. Hierarki Informasi & Prioritas Layar
Berdasarkan kebutuhan utama kru lapangan, susunan tampilan diatur sebagai berikut:
1. **Header & Quick Telemetry**: Live Countdown, Master Clock WIB, Supabase Realtime Status, dan 4 Key Metric Counters.
2. **PRIORITAS 1 — 📦 Master Inventaris & Packing Manifest (119 Item)**:
   * Tracking 119 barang dari 13 peminjam (OWL, Andreas, UKK, GKJ, GIA, Kiel 1, Joel, Darrel, Kezia, Jennifer, ABON, Lio, Panitia).
   * Progress bar persentase, live search (`Ctrl+K`), filter peminjam, aksi batch, dan sinkronisasi instan ke Supabase PostgreSQL.
3. **PRIORITAS 2 — 🎥 Sistem Rigging Kamera (5 Broadcast + 3 Dokumentasi)**:
   * 8 unit kamera dengan rincian gear per peminjam, operator PIC, status, dan tombol *1-Click Copy WA Briefing*.
4. **PRIORITAS 3 — 🔀 Routing Sinyal & Workstation Media**:
   * Switcher Cinetreak bus PGM/PVW interaktif.
   * Matriks Video Multi-Screen (Novastar), Audio FOH (Yamaha QL5 & CT80S), Stage Timekeeper, dan catatan 3 HDMI Splitter.
   * Roster 11 Workstation Media & Operator.
5. **PRIORITAS 4 — 🏛️ Denah Tata Panggung & Multi-Screen LED**:
   * Skema tata letak panggung Auditorium UNNES, 4 layar LED, posisi kamera, dan meja FOH control.
6. **PRIORITAS 5 — ⏱️ Rundown Acara & Struktur Tim**:
   * Tim System Engineer, Media Engineer, Creative Engineer.
   * Rundown 3 Sesi: Pre-Ibadah, Main Ibadah (12 butir materi lengkap), dan Post-Ibadah (Usung-usung).

---

### 3. Arsitektur Teknis
* **Frontend**: HTML5 Semantik, Vanilla CSS (Design Tokens Linear/Vercel), Vanilla JavaScript (No Bloat).
* **Database & Realtime**: Supabase PostgreSQL (`public.inventory_checklist`) dengan fallback `localStorage`.
* **Deployment**: GitHub Pages (`https://zzdree.github.io/ip26-production/`).
