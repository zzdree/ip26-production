# 🎨 DESIGN SYSTEM SPECIFICATION (DESIGN.md)
## IP26 Broadcast Command Suite — Minimalist Studio Edition

---

### 1. Filosofi & Visi Desain
Sistem desain **IP26 Broadcast Command Suite (Minimalist Studio Edition)** dirancang dengan filosofi **"Clarity over Clutter, Function over Fluff"** yang terinspirasi dari standar desain alat pengembang dan ruang kontrol modern (*Raycast, Linear, & Apple Pro Tools*).

* **Prinsip Utama**:
  1. **Task-Oriented Modularity**: Membagi informasi kompleks menjadi 4 modul terfokus (*Inventaris, Kamera, Routing, Rundown*) agar kru di lapangan tidak mengalami kelelahan visual (*visual fatigue*).
  2. **High-Contrast Readability**: Memastikan seluruh teks teknis terbaca dengan kontras sempurna baik di monitor workstation indoor maupun layar HP di bawah pencahayaan dinamis panggung.
  3. **Zero-Lag 144Hz Performance**: Menghilangkan efek blur berat (*backdrop-filter*) dan animasi kontinu yang menguras baterai HP/laptop. Menggunakan *hardware-accelerated compositing* murni.
  4. **Frictionless Interaction**: Input pencarian ter-*debounce* 35ms, centang checkbox berkecepatan 0ms (*optimistic UI*), dan tombol *1-Click Copy Brief* untuk koordinasi kilat.

---

### 2. Hierarki Warna & Permukaan (Obsidian Dark Palette)

```
┌────────────────────────────────────────────────────────────────────────┐
│ LEVEL 0: Canvas Base (#0c0d12)                                        │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │ LEVEL 1: Header & Nav Containers (#10121a)                       │ │
│   │   ┌────────────────────────────────────────────────────────────┐ │ │
│   │   │ LEVEL 2: Cards & Group Panels (#151822 / Hover: #1b1f2c)   │ │ │
│   │   │   ┌──────────────────────────────────────────────────────┐ │ │ │
│   │   │   │ LEVEL -1: Inset / Search Cavities (#090a0e)          │ │ │ │
│   │   │   └──────────────────────────────────────────────────────┘ │ │ │
│   │   └────────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

#### Palet Warna Utama:
| Token CSS | Hex / RGBA | Penggunaan / Konteks |
| :--- | :--- | :--- |
| `--bg-canvas` | `#0c0d12` | Warna latar belakang dasar halaman |
| `--bg-header` | `#10121a` | Latar header sticky & footer |
| `--bg-card` | `#151822` | Kartu inventaris, spek rig, dan tabel |
| `--bg-card-hover` | `#1b1f2c` | Status hover interaktif pada kartu |
| `--bg-inset` | `#090a0e` | Kotak input pencarian & sub-list detail |
| `--border` | `rgba(255, 255, 255, 0.08)` | Hairline border presisi 1px |
| `--border-hover` | `rgba(255, 255, 255, 0.18)` | Highlight border saat elemen disentuh/hover |

#### Palet Aksen Fungsional (Luminescent Accents):
| Aksen | Hex Code | Background Soft | Fungsi & Semantik |
| :--- | :--- | :--- | :--- |
| **Cyan (Primary)** | `#00e5ff` | `rgba(0, 229, 255, 0.10)` | Brand IP26, active tab, counter badge, telemetry |
| **Emerald (Success)** | `#00f59b` | `rgba(0, 245, 155, 0.10)` | Status terverifikasi (✅), item packed, Supabase DB live |
| **Amber (Warning)** | `#ffb800` | `rgba(255, 184, 0, 0.10)` | Status parsial (⚠️), item belum kembali, catatan teknis |
| **Purple (Creative)** | `#c084fc` | `rgba(192, 132, 252, 0.10)` | Rig dokumentasi, badge Panitia struktural |
| **Coral (Danger)** | `#ff4757` | `rgba(255, 71, 87, 0.10)` | Tombol reset checklist & peringatan krusial |

---

### 3. Sistem Tipografi

Menggunakan kombinasi 3 font modern yang dimuat secara asinkron via Google Fonts:

1. **`Space Grotesk` (Display & Headings)**:
   * Karakter: Modern, geometris, tegas.
   * Digunakan pada: Judul halaman, logo badge `IP26`, judul kartu spek kamera, dan counter progres packing.
   * `letter-spacing: -0.02em; font-weight: 700 / 800;`
2. **`Plus Jakarta Sans` (Body & Interface)**:
   * Karakter: Sangat mudah dibaca pada berbagai ukuran layar (*clean x-height*).
   * Digunakan pada: Teks umum, label checkbox, nama peminjam, deskripsi tugas, dan tombol.
   * `font-weight: 400 / 500 / 600 / 700;`
3. **`JetBrains Mono` (Data & Telemetry)**:
   * Karakter: Monospace teknis berjarak tetap.
   * Digunakan pada: Jam digital WIB, jumlah unit (`2 Unit`, `1 Pack`), kode jalur sinyal, dan ID barang.
   * `font-weight: 500 / 700;`

---

### 4. Komponen Antarmuka (UI Components)

#### A. Header & View Switcher (Navigasi Tab)
* **Top Bar**:
  * Brand Badge `IP26` di kiri.
  * Status Pill `🟢 Supabase DB (Live Sync)` di kanan dengan indikator hijau aktif.
  * Live Digital Clock (WIB) dengan format `HH:MM:SS WIB`.
  * Tautan ikon GitHub.
* **4-Tab Navigation**:
  * `[ 📦 Inventaris & Packing (119) ]`
  * `[ 🎥 Rig Kamera & Operator ]`
  * `[ 🔀 Routing Sinyal & Media ]`
  * `[ ⏱️ Rundown & Tim Produksi ]`
  * Tombol aktif ditandai dengan garis bawah cyan (`border-bottom: 2px solid #00e5ff`) dan teks menyala.

#### B. Packing Progress & Controls Card
* **Headline Counter**: Menampilkan rasio dan persentase barang yang telah di-*packing* secara real-time.
* **Progress Track**: Track `7px` dengan gradien halus `linear-gradient(90deg, #00e5ff, #00f59b)`.
* **Action Buttons**:
  * *Tandai Semua Selesai* (Emerald Soft).
  * *Reset Checklist* (Coral Soft).
  * *Tampilkan Hanya Belum Kembali* (Toggle Amber).

#### C. Filter & Search Controls
* **Search Input Cavity**: Input bulat dengan ikon kaca pembesar dan tombol reset `×` otomatis saat ada karakter.
* **Lender Filter Pills**: Scrollable row peminjam (*Semua, OWL, Andreas, UKK UNNES, GIA, GKJ, Kiel 1, Joel, Darrel, Kezia, Jennifer, Lio, ABON, Panitia*).
* **Status Filter Chips**: Pilihan status (*Semua, Terpakai, Parsial, Standby*).

#### D. Custom Checkbox Inventaris
* Menggunakan elemen SVG *check mark* yang tersembunyi secara *default* dan muncul instan dengan latar emerald saat *checked*.
* Teks item yang sudah tercentang otomatis diberi efek *line-through* dan warna redup (`--text-dim`) agar kru langsung tahu barang mana saja yang belum selesai.

#### E. Camera Spec Cards & 1-Click Copy
* Kartu dengan kepala rincian operator & fungsi panggung.
* Tombol **"📋 Salin Rincian"** di setiap kartu yang langsung menyalin *briefing text* ke clipboard perangkat dan berubah menjadi **"Tersalin! ✅"** selama 2 detik.

#### F. Clean Signal Tables
* Tabel datar dengan baris zebra minimalis, border 1px halus, dan pill status badge untuk menunjukkan alur Sumber ➔ Kabel ➔ Tujuan.

---

### 5. Respon & Interaksi Realtime (UX Guidelines)
* **Optimistic Local Update**: Setiap perubahan checkbox langsung di-render pada frame berikutnya tanpa menunggu respon jaringan.
* **Supabase WebSockets**: Mengirimkan perubahan ke tabel PostgreSQL dan memancarkan (*broadcast*) ke semua perangkat kru yang aktif.
* **Debounced Search**: Menunggu 35ms setelah ketikan terakhir pengguna sebelum me-reka ulang kartu untuk mencegah stuttering pada komputer desktop maupun HP.
* **Mobile-Responsive Breakpoint**: Pada layar di bawah `768px`, padding kontainer menyusut rapi dan kartu beralih ke tata letak 1-kolom yang nyaman dioperasikan dengan satu jempol.
