# 🎨 DESIGN SYSTEM SPECIFICATION (DESIGN.md v11.0)
## IP26 Broadcast Command Suite — Dark Grey Fluid Single-Page Edition

---

### 1. Filosofi & Visi Desain
Sistem desain **IP26 Broadcast Command Suite (v11.0)** mengusung konsep **Dark Grey Fluid Ergonomics** yang menggabungkan keindahan antarmuka modern (*Apple Pro, iOS 18 Dynamic Dock, Raycast, & Linear*) dengan kejelasan operasional produksi siaran langsung.

* **Prinsip Utama**:
  1. **Single-Page Flow**: Seluruh informasi tersaji dalam satu halaman yang mengalir (*flowing scroll*), menghilangkan kebingungan tab tersembunyi.
  2. **Ergonomi Adaptif Desktop & Mobile**:
     * **Desktop**: Header sticky di bagian atas dengan quick navigation links dan status live.
     * **Mobile**: Floating bottom dock di bagian bawah layar yang mudah dijangkau satu jempol (*thumb-friendly zone*).
  3. **Palet Dark Grey yang Hangat & Nyaman**: Menghindari hitam pekat mati (*void black*) maupun putih steril (*flat white*). Menggunakan lapisan abu-abu gelap terstruktur (`#111216` ➔ `#181a20` ➔ `#20232b`) dengan hairline border halus (`#2a2d37`).
  4. **Fluency & Micro-Interactions**: Transisi halus `cubic-bezier(0.16, 1, 0.3, 1)`, hover lift lembut pada kartu, dan responsivitas centang seketika (*0ms optimistic update*).

---

### 2. Hierarki Permukaan & Palet Warna (Dark Grey Palette)

```
┌────────────────────────────────────────────────────────────────────────┐
│ LEVEL 0: Canvas Base (#111216 - Warm Dark Grey)                        │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │ LEVEL 1: Cards & Panels (#181a20 - Surface Slate)                │ │
│   │   ┌────────────────────────────────────────────────────────────┐ │ │
│   │   │ LEVEL 2: Hovered Cards & Sub-Headers (#20232b)             │ │ │
│   │   │   ┌──────────────────────────────────────────────────────┐ │ │ │
│   │   │   │ LEVEL -1: Input Cavities & Code Blocks (#0d0e12)     │ │ │ │
│   │   │   └──────────────────────────────────────────────────────┘ │ │ │
│   │   └────────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

#### Token Warna Permukaan (Surface Tokens):
| Token CSS | Hex / RGBA | Fungsi & Konteks |
| :--- | :--- | :--- |
| `--bg-base` | `#111216` | Warna latar kanvas halaman (Dark Grey) |
| `--bg-surface` | `#181a20` | Kartu modul, kontainer seksi, dan modal |
| `--bg-surface-hover` | `#20232b` | Status hover dan card header |
| `--bg-inset` | `#0d0e12` | Kotak pencarian dan sub-list |
| `--border-subtle` | `#22252e` | Pembatas antar baris list |
| `--border-card` | `#2a2d37` | Hairline border presisi 1px pada kartu |
| `--border-hover` | `#3e4453` | Highlight border saat hover |
| `--border-focus` | `#38bdf8` | Border aktif pada input pencarian |

#### Token Tipografi & Teks:
| Token CSS | Hex Code | Penggunaan |
| :--- | :--- | :--- |
| `--text-primary` | `#f3f4f6` | Judul, nama barang, dan teks utama |
| `--text-secondary` | `#9ca3af` | Deskripsi, role operator, dan instruksi |
| `--text-dimmed` | `#6b7280` | Metadata, unit, dan catatan kecil |

#### Aksen Fungsional Fluency (Smooth Accents):
* **Sky Cyan (`#38bdf8`)**: Aksen brand IP26, active navigation link, counter telemetry.
* **Emerald Green (`#34d399`)**: Status terverifikasi (✅), item checklist selesai, Supabase DB live.
* **Warm Amber (`#fbbf24`)**: Status parsial (⚠️), item belum kembali, catatan teknis.
* **Creative Purple (`#a78bfa`)**: Kamera dokumentasi, badge divisi Panitia.
* **Soft Coral (`#f87171`)**: Tombol reset dan peringatan darurat.

---

### 3. Tipografi & Skala Teks
1. **`Space Grotesk` (Headings & Display)**: Geometris, tegas, dan modern untuk judul seksi dan brand badge.
2. **`Plus Jakarta Sans` (Body & Controls)**: Huruf sans-serif humanist yang sangat ramah dibaca pada layar HP.
3. **`JetBrains Mono` (Technical Data)**: Monospace untuk jam WIB, countdown, unit jumlah barang, dan ID teknis.

---

### 4. Spesifikasi Komponen & Ergonomi

#### A. Desktop Sticky Header (`≥ 769px`)
* Menempel di bagian atas layar (`position: sticky; top: 0;`).
* Berisi: Logo Badge IP26, Live Countdown to 17 Sept 2026, Navigation Quick-Links (`Overview`, `Inventaris`, `Kamera`, `Routing`, `Rundown`), dan Supabase Live Status.

#### B. Mobile Bottom Floating Dock (`< 769px`)
* Menempel di bagian bawah layar (`position: fixed; bottom: 0; left: 0; right: 0;`).
* Desain pill dock mengambang dengan latar *Dark Grey Glass* (`rgba(24, 26, 32, 0.92)` + `backdrop-filter: blur(16px)`).
* 5 Touch-friendly Navigation Items:
  * `[ 🏠 Info ]` `[ 📦 Manifest ]` `[ 🎥 Rigs ]` `[ 🔀 Sinyal ]` `[ ⏱️ Rundown ]`
* Otomatis meng-highlight ikon seksi yang sedang aktif saat layar di-scroll (*IntersectionObserver*).

#### C. Manifest Packing Cards & Real-Time Telemetry
* Progress bar dengan gradien lembut Sky Cyan ke Emerald Green.
* Checkbox hardware-style dengan responsivitas 0ms (*optimistic local state*).
* Filter peminjam dalam bentuk scrollable pill bar.

#### D. Camera Spec Cards & 1-Click WhatsApp Copy
* Kartu spek kamera dengan rincian gear per operator.
* Tombol **"📋 Salin Briefing WA"** dengan toast visual feedback selama 2 detik.
