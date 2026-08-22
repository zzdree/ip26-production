# 🎨 DESIGN SYSTEM SPECIFICATION (DESIGN.md)
## IP26 Broadcast Command Suite — Genesis Light Studio Edition

---

### 1. Filosofi & Visi Desain
Sistem desain **IP26 Broadcast Command Suite (Genesis Light Studio Edition)** dirancang berdasarkan standar desain editorial modern dari **DesignMD (`chef/genesis`)**, Linear Studio, dan Apple Pro Developer Tools.

* **Prinsip Utama**:
  1. **Clarity & High Contrast**: Menggunakan warna dasar *Soft Slate Light* (`#F8FAFC`) dengan kartu *Pure White* (`#FFFFFF`) untuk kenyamanan mata maksimal di lingkungan kerja terang atau panggung.
  2. **Task-Oriented 4-Tab Modularity**: Membagi informasi produksi menjadi 4 modul independen (*Inventaris & Packing, Rig Kamera, Routing Sinyal, Rundown & Tim*) untuk menghilangkan *visual overload*.
  3. **Zero-Lag 144Hz Architecture**: Bebas dari kalkulasi blur berat (`backdrop-filter`) dan bebas dari animasi kontinu yang membebani GPU/CPU perangkat.
  4. **Frictionless Field Usability**: Checkbox berkecepatan 0ms (*optimistic UI*), *search filter* ter-*debounce* 35ms, dan tombol *1-Click Copy Brief*.

---

### 2. Hierarki Permukaan & Palet Warna (Genesis Light Palette)

```
┌────────────────────────────────────────────────────────────────────────┐
│ LEVEL 0: Canvas Base (#F8FAFC - Soft Slate Light)                      │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │ LEVEL 1: Header & Navigation Containers (#FFFFFF - Pure White)   │ │
│   │   ┌────────────────────────────────────────────────────────────┐ │ │
│   │   │ LEVEL 2: Cards & Modul (#FFFFFF + Border: #E2E8F0)         │ │ │
│   │   │   ┌──────────────────────────────────────────────────────┐ │ │ │
│   │   │   │ LEVEL -1: Input & Sub-list Cavities (#F1F5F9)        │ │ │ │
│   │   │   └──────────────────────────────────────────────────────┘ │ │ │
│   │   └────────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

#### Palet Warna Permukaan (Surface Tokens):
| Token CSS | Nilai Hex | Fungsi / Konteks |
| :--- | :--- | :--- |
| `--bg-canvas` | `#F8FAFC` | Latar belakang kanvas aplikasi (Slate 50) |
| `--bg-header` | `#FFFFFF` | Latar header sticky & footer |
| `--bg-card` | `#FFFFFF` | Latar kartu inventaris, spek rig, dan tabel |
| `--bg-card-hover` | `#FCFDFE` | Status hover interaktif pada kartu |
| `--bg-inset` | `#F1F5F9` | Kotak pencarian, tag filter, dan sub-detail |
| `--border` | `#E2E8F0` | Hairline border presisi 1px (Slate 200) |
| `--border-hover` | `#CBD5E1` | Highlight border saat hover |
| `--border-focus` | `#4F46E5` | Fokus aktif pada kotak input |

#### Palet Aksen Fungsional (Luminescent & Semantic Accents):
| Aksen | Hex Code | Soft Background | Semantik & Penggunaan |
| :--- | :--- | :--- | :--- |
| **Primary Indigo** | `#4F46E5` | `rgba(79, 70, 229, 0.08)` | Brand IP26, active tab, counter badge, telemetry |
| **Emerald Green** | `#059669` | `rgba(5, 150, 105, 0.08)` | Status terverifikasi (✅), item packed, Supabase DB live |
| **Warm Amber** | `#D97706` | `rgba(217, 119, 6, 0.08)` | Status parsial (⚠️), item belum kembali, tips panggung |
| **Purple Creative** | `#7C3AED` | `rgba(124, 58, 237, 0.08)` | Rig kamera dokumentasi, badge Panitia struktural |
| **Coral Red** | `#DC2626` | `rgba(220, 38, 38, 0.08)` | Tombol reset checklist & tindakan krusial |

---

### 3. Tipografi Presisi (Typography Tokens)

Memadukan 3 font modern dengan keterbacaan tinggi:

1. **`Space Grotesk` (Display & Headings)**:
   * Karakter: Modern, presisi, geometris.
   * Digunakan pada: Judul halaman, logo badge `IP26`, judul rig kamera, dan angka counter.
   * `letter-spacing: -0.02em; font-weight: 700 / 800; color: #0F172A;`
2. **`Plus Jakarta Sans` (Body & Interface)**:
   * Karakter: Bersih dan mudah dibaca pada layar kecil maupun besar.
   * Digunakan pada: Teks utama, label checkbox, nama peminjam, deskripsi tugas, dan tombol.
   * `font-weight: 500 / 600 / 700; color: #0F172A / #475569;`
3. **`JetBrains Mono` (Technical Data)**:
   * Karakter: Monospace teknis berjarak tetap.
   * Digunakan pada: Jam digital WIB, jumlah unit (`2 Unit`, `1 Pack`), jalur kabel, dan ID barang.
   * `font-weight: 500 / 700;`

---

### 4. Komponen Antarmuka & UX

#### A. Header & View Switcher (Navigasi 4-Tab)
* **Top Bar**:
  * Brand Badge `IP26` di kiri dengan warna *Indigo Soft*.
  * Status Pill `🟢 Supabase DB (Live Sync)` di kanan dengan *Emerald indicator*.
  * Jam digital presisi WIB format `HH:MM:SS WIB`.
  * Tautan GitHub.
* **4-Tab Navigation**:
  * `[ 📦 Inventaris & Packing (119) ]`
  * `[ 🎥 Rig Kamera & Operator ]`
  * `[ 🔀 Routing Sinyal & Media ]`
  * `[ ⏱️ Rundown & Tim Produksi ]`

#### B. Packing Progress & Controls Card
* **Headline Counter**: Menampilkan rasio barang ter-packing secara real-time.
* **Progress Track**: Track `8px` dengan gradien halus `linear-gradient(90deg, #4F46E5, #059669)`.
* **Action Buttons**:
  * *Tandai Semua Selesai* (Emerald Soft).
  * *Reset Checklist* (Coral Soft).
  * *Tampilkan Hanya Belum Kembali* (Amber Toggle).

#### C. Custom Checkbox Inventaris
* Menggunakan kotak putih bersih dengan border `#CBD5E1` yang berubah menjadi hijau emerald `#059669` dengan ikon SVG centang putih saat tercentang.
* Teks item tercentang otomatis diberi efek *line-through* dan warna redup (`#64748B`).

#### D. Camera Spec Cards & 1-Click Copy Brief
* Kartu putih rapi dengan kepala rincian operator & fungsi panggung.
* Tombol **"📋 Salin Rincian"** menyalin *briefing text* langsung ke clipboard dan berubah menjadi **"Tersalin! ✅"** selama 2 detik.

---

### 5. Integrasi Database & Real-Time Sync
* **Database**: Supabase PostgreSQL (`ssbkhhnnzwuykyeznpwd.supabase.co`).
* **Realtime Protocol**: WebSockets via `@supabase/supabase-js` (`postgres_changes` on `inventory_checklist`).
* **Keep-Alive Cron**: GitHub Actions Daily Workflow (`0 0 * * *`) via `.github/workflows/supabase-keep-alive.yml` untuk mencegah 7-day auto-pause.
