# 🎨 DESIGN SYSTEM SPECIFICATION (DESIGN.md v12.0)
## IP26 Broadcast Command Suite — Dark Grey Fluid Single-Page Design System

---

### 1. Filosofi & Visi Desain
Sistem desain **IP26 Broadcast Command Suite (v12.0)** memadukan prinsip-prinsip unggulan:
* **`frontend-design`**: Antarmuka berkarakter industri siaran modern (*Broadcast Studio Craftsmanship*), memiliki ritme visual yang seimbang antara kepadatan informasi teknis dan ruang bernapas (*breathing room*).
* **`mobile-design`**: Ergonomi *touch-first*, navigasi *Bottom Floating Dock* pada layar smartphone (<769px) untuk memudahkan operasi satu jempol (*thumb-zone*), dan target sentuh luas (≥48px).
* **`design-md`**: Standar dokumentasi semantic tokens terstruktur.
* **`web-design-guidelines`**: Aksesibilitas kontras tinggi (WCAG 2.1 AA), tipografi presisi, dan navigasi keyboard (`Ctrl + K`).
* **`ui-skills` (StyleSeed Tokens)**: Hierarki warna dan variabel CSS yang ketat dan konsisten.
* **`iconsax-library`**: Ikonografi SVG bergaya *Linear/Two-Tone* modern berbasis grid 20x20 / 24x24.
* **`magic-animator`**: Mikro-animasi fluida dengan kurva *kinetic easing* `cubic-bezier(0.16, 1, 0.3, 1)` untuk interaksi yang terasa hidup, halus, dan responsif.

---

### 2. Token Desain (StyleSeed UI Tokens)

```
┌────────────────────────────────────────────────────────────────────────┐
│ LEVEL 0: Canvas Base (#111216 - Warm Slate Dark Grey)                 │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │ LEVEL 1: Surface Containers (#181a20 - Dark Grey Surface)        │ │
│   │   ┌────────────────────────────────────────────────────────────┐ │ │
│   │   │ LEVEL 2: Card Headers & Hover States (#20232b)             │ │ │
│   │   │   ┌──────────────────────────────────────────────────────┐ │ │ │
│   │   │   │ LEVEL -1: Inset Cavities & Code Cavities (#0d0e12)   │ │ │ │
│   │   │   └──────────────────────────────────────────────────────┘ │ │ │
│   │   └────────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

#### A. Surface & Border Tokens:
| Token CSS | Nilai Hex / RGBA | Peruntukan |
| :--- | :--- | :--- |
| `--bg-base` | `#111216` | Latar kanvas utama web |
| `--bg-surface` | `#181a20` | Kartu modul, kontainer seksi, dan tabel |
| `--bg-surface-hover`| `#20232b` | Status hover dan card header |
| `--bg-inset` | `#0d0e12` | Kotak pencarian, tag filter, dan sub-detail |
| `--bg-dock` | `rgba(24, 26, 32, 0.92)` | Latar top navbar & bottom dock (Glass Blur 16px) |
| `--border-card` | `#2a2d37` | Hairline border presisi 1px kartu |
| `--border-subtle` | `#22252e` | Garis pembatas antar baris list |
| `--border-hover` | `#3e4453` | Highlight border saat elemen disentuh/hover |
| `--border-focus` | `#38bdf8` | Border aktif pada input pencarian |

#### B. Text & Contrast Tokens:
| Token CSS | Nilai Hex | Keterangan |
| :--- | :--- | :--- |
| `--text-main` | `#f3f4f6` | Teks utama, judul seksi, nama barang |
| `--text-muted` | `#9ca3af` | Deskripsi, peran operator, dan rincian spek |
| `--text-dim` | `#6b7280` | Unit jumlah, timestamp, dan catatan kecil |

#### C. Fluid Luminescent Accents:
* **Sky Cyan (`#38bdf8`)**: Aksen brand IP26, active navigation link, counter telemetry.
* **Emerald Green (`#34d399`)**: Status terverifikasi (✅), item checklist selesai, Supabase DB live.
* **Warm Amber (`#fbbf24`)**: Status parsial (⚠️), item belum kembali, catatan teknis.
* **Creative Purple (`#a78bfa`)**: Kamera dokumentasi, badge divisi Panitia.
* **Soft Coral (`#f87171`)**: Tombol reset checklist, indikator PGM Cinetreak.

---

### 3. Tipografi Presisi (Typography Matrix)
1. **`Space Grotesk` (Headings & Display)**:
   * Geometris, modern, tegas. Digunakan pada judul seksi, logo badge `IP26`, dan angka countdown.
2. **`Plus Jakarta Sans` (Body & UI Controls)**:
   * Humanist sans-serif yang nyaman dan sangat mudah dibaca pada layar HP. Digunakan untuk nama barang, deskripsi tugas, dan tombol.
3. **`JetBrains Mono` (Technical Telemetry)**:
   * Monospace presisi untuk jam digital WIB, countdown detik, kode jalur I/O kabel, dan kuantitas unit.

---

### 4. Spesifikasi Komponen & Ergonomi

#### A. Desktop Sticky Header (`≥ 769px`)
* `position: sticky; top: 0; z-index: 1000;`
* Berisi: Logo IP26, Navigation Links dengan efek *scroll-spy* otomatis, status Supabase PostgreSQL Live, dan Jam Master WIB.

#### B. Mobile Bottom Floating Dock (`< 769px`)
* `position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000;`
* 5 Touch Targets yang mudah dijangkau satu jempol: `[ 🏠 Overview ]` `[ 📦 Manifest ]` `[ 🎥 Rigs ]` `[ 🔀 Sinyal ]` `[ ⏱️ Rundown ]`.
* Menggunakan `IntersectionObserver` untuk meng-highlight ikon seksi secara otomatis saat scrolling.

#### C. Tactile Manifest Checkbox
* Kotak centang dengan feedback visual seketika (*0ms optimistic UI*), SVG check mark putih, dan teks bergaris coret saat tercentang.
* Terkoneksi dua arah ke **Supabase PostgreSQL Realtime**.

#### D. Camera Spec Cards & 1-Click Briefing
* Rincian komponen rig kamera per operator.
* Tombol **"📋 Salin Briefing WA"** yang menyalin teks terformat untuk WhatsApp dan memunculkan toast feedback selama 2.2 detik.
