# 📄 Product Requirements Document (PRD)
## Ibadah Perdana UKK UNNES 2026 — Production & Media Landing Page

---

## 1. Executive Summary & Overview
- **Product Name:** IP26 Production Command & Media Dashboard
- **Target Audience:** Crew Produksi, Operator Teknis, Divisi Media & Multimedia UKK UNNES, Panitia Inti, dan Pihak Peminjam Alat.
- **Tujuan Utama:** Menyediakan satu pintu akses digital interaktif (*single source of truth*) dalam format landing page yang cepat, responsif, dan komprehensif, mencakup seluruh diagram routing, spesifikasi sistem kamera siaran, alokasi operator, direktori inventaris alat (13 pihak), dan rundown tayangan event.
- **Lokasi Penyimpanan:** `C:\ANDREAS\ip26-production`
- **Prinsip Arsitektur:** Minimalis, efisien (tanpa bloatware framework berat), mandiri (*zero-dependency/vanilla web*), dan mudah dibuka di perangkat mobile maupun laptop saat *live production*.

---

## 2. Design Mandate & Aesthetic Thesis (DFII Evaluation)
Mengacu pada standar skill **`frontend-design`**:

### A. Arah Estetika: *Broadcast Control Room / Industrial Utilitarian*
- **Karakter Visual:** Tampilan modern workstation siaran TV / broadcast suite dengan palette dark slate (`#0B0F17`), aksen emerald green (`#10B981`) untuk status terverifikasi, amber gold (`#F59E0B`) untuk status perhatian/pending, dan electric blue (`#3B82F6`) untuk alur sinyal.
- **Tipografi:**
  - *Display / Headings:* `Space Grotesk` (Karakter presisi, tech-forward, tajam).
  - *Body / Technical Monospace:* `Plus Jakarta Sans` & `JetBrains Mono` (Tingkat keterbacaan tinggi untuk rincian kabel dan spesifikasi teknis).
- **Differentiation Anchor:** Skema visual interaktif sinyal video & audio yang dapat di-filter berdasarkan stasiun kerja (*workstation*), dilengkapi fitur pencarian inventaris instan (*live search & filter*).

### B. DFII (Design Feasibility & Impact Index) Scoring
- **Aesthetic Impact:** 4.5 / 5
- **Context Fit:** 5.0 / 5 (Sangat cocok untuk kebutuhan crew lapangan dan operator broadcast)
- **Implementation Feasibility:** 5.0 / 5 (Vanilla HTML5, CSS3 kustom, JS modular)
- **Performance Safety:** 5.0 / 5 (Ukuran sangat ringan, < 100KB, load time < 0.2 detik)
- **Consistency Risk:** 1.0 / 5 (Resiko rendah dengan struktur file tunggal/modular terpusat)
- **Total DFII Score:** `(4.5 + 5.0 + 5.0 + 5.0) - 1.0 = 17.5 / 15` (Kategori: **Excellent**)

---

## 3. Cakupan Informasi & Struktur Halaman (Information Architecture)

Landing page dirancang dengan struktur *one-page progressive disclosure* yang memuat **100% data** dari `ip26_pro1.txt`, `ip26_pro2.txt`, dan `README.md`:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. HERO SECTION & LIVE STATS BANNER                                   │
│    - Title, Event Meta, Venue (Auditorium UNNES), Quick Stat Badges    │
├────────────────────────────────────────────────────────────────────────┤
│ 2. INTERACTIVE WORKSTATION & PIC MATRIX                                │
│    - 10 Workstations, Operator Names, Hardware Status, Pending Alert   │
├────────────────────────────────────────────────────────────────────────┤
│ 3. BROADCAST & DOCUMENTATION CAMERA RIGS                               │
│    - CAM 1-4 (Wireless & Wired Chains, Rig Specs, PIC Alex/Kiel/Nia)   │
│    - CAM PHO, VID, HP (Rig Specs, PIC Nico/Joel/Jennifer)              │
├────────────────────────────────────────────────────────────────────────┤
│ 4. ENGINE SYSTEM ARCHITECTURE & SIGNAL ROUTING                         │
│    - Electrical Power Distribution                                     │
│    - Broadcast Video Flow (Switcher -> Splitter -> ProPresenter/Res)   │
│    - Audio Flow (Yamaha QL5 -> CT80S -> OBS + Virtual Mixers)          │
│    - Time Keeper System                                                │
├────────────────────────────────────────────────────────────────────────┤
│ 5. MASTER INVENTORY DIRECTORY (LIVE FILTER & SEARCH)                   │
│    - Filter by Lender (OWL, Andreas, UKK, GKJ, GIA, Kiel 1, Joel, dll) │
│    - Filter by Status (✅ Aktif, ⚠️ Sebagian, ☑️ Standby)               │
│    - Live Keyword Search Bar                                           │
├────────────────────────────────────────────────────────────────────────┤
│ 6. EVENT RUNDOWN & SCREEN MAPPING                                      │
│    - Pre-Ibadah, Main Ibadah, Post-Ibadah Content Mapping              │
├────────────────────────────────────────────────────────────────────────┤
│ 7. FOOTER & CREW LICENSE                                               │
│    - Internal Operational License Info & Tim Produksi Media            │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Rincian Fitur & Interaktivitas (Functional Requirements)

1. **Instant Search & Category Filter di Inventaris:**
   - Operator dapat mencari barang spesifik (misal: "Capture", "10M", "Sony", "Andreas") dalam hitungan milidetik.
   - Tombol filter cepat untuk status `Semua`, `✅ Terpakai`, `⚠️ Perhatian`, dan `☑️ Standby`.
2. **Interactive Signal Flow Viewer:**
   - Tab navigasi untuk beralih antara alur Video Routing, Audio Routing, dan Time Keeper.
3. **Copy-to-Clipboard Utility:**
   - Tombol satu-klik untuk menyalin rincian kabel/routing ke clipboard agar mudah dibagikan via WhatsApp crew.
4. **Mobile-First & Offline-Ready:**
   - Layout fully responsive untuk iPhone, Android, tablet, dan laptop layar lebar.
   - Ringan tanpa CDN eksternal wajib sehingga tetap cepat di jaringan auditorium yang padat.

---

## 5. Struktur Berkas (File Structure)

Untuk memenuhi instruksi "sederhanakan file, jangan banyak file, efisien aja":

```
C:\ANDREAS\ip26-production\
├── index.html       # Struktur semantik lengkap, metadata, dan layout responsive
├── style.css        # Desain visual broadcast suite, responsive grid, micro-animations
├── app.js           # Logika interaktif: live search, filter data inventaris, tab routing
├── PRD.md           # Dokumen spesifikasi kebutuhan produk (file ini)
├── README.md        # Dokumentasi utama repositori
├── LICENSE          # Lisensi internal operasional crew
├── ip26_pro1.txt    # Data sumber 1 (Sistem & Routing)
└── ip26_pro2.txt    # Data sumber 2 (Inventaris & Peminjaman)
```

---

## 6. Rencana Implementasi Bertahap (Implementation Roadmap)

- [x] **Tahap 1:** Pembuatan Dokumen PRD (`PRD.md`)
- [ ] **Tahap 2:** Implementasi Struktur Semantik HTML5 (`index.html`) dengan seluruh data 100% lengkap
- [ ] **Tahap 3:** Implementasi Sistem Desain & Styling CSS (`style.css`) dengan tema *Broadcast Control Room*
- [ ] **Tahap 4:** Implementasi Interaktivitas JavaScript (`app.js`) untuk filter, search, tab switcher, dan copy utility
- [ ] **Tahap 5:** Verifikasi Tampilan & Validasi Data Silang (Cross-Validation)
- [ ] **Tahap 6:** Sinkronisasi & Push ke Repositori GitHub
