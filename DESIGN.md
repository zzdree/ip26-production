# 🎨 DESIGN SYSTEM SPECIFICATION (DESIGN.md v10.0)
## IP26 ATEM Pro Broadcast Command Suite — Dual Engine Edition

---

### 1. Filosofi & Visi Desain
Sistem desain **IP26 ATEM Pro Broadcast Suite** dibangun di atas metafora **Industrial Broadcast Console & Mission Control** (*Blackmagic ATEM Software Control, DaVinci Resolve, Avid Media Composer, Linear, & Vercel*).

Antarmuka ini menolak tampilan template generic SaaS / form steril. Setiap piksel berfungsi layaknya perangkat keras studio siaran berstandar industri dengan:
* **Tactile Hardware Aesthetic**: Panel bertingkat dengan hairline border presisi, tombol bergaya switch konsol, dan meteran status visual.
* **Dual-Theme Engine (1-Click Switcher)**:
  * 🎛️ **Broadcast Dark (Default Studio)**: Karbon-slate pekat (`#0d1117`) dengan lampu indikator Tally (🔴 Program / 🟢 Preview / 🟡 Standby).
  * 💡 **Studio Paper Light**: Slate putih bersih (`#f8fafc`) dengan kontras tinggi untuk pengoperasian di area terang/outdoor.
* **Zero Visual Lag**: 144Hz framerate tanpa backdrop-filter berat, hardware-accelerated CSS murni.

---

### 2. Tokens & Hierarki Warna (Dual Palette)

#### A. Broadcast Dark Theme Tokens:
| Token CSS | Hex / RGBA | Peruntukan |
| :--- | :--- | :--- |
| `--bg-base` | `#0b0e14` | Chassis dasar studio |
| `--bg-surface` | `#121721` | Panel konsol & kartu modul |
| `--bg-surface-hover`| `#18202d` | Highlight interaktif modul |
| `--bg-inset` | `#080b10` | Input cavity, kotak kode, status pod |
| `--border-color` | `#232d3d` | Hairline border presisi konsol |
| `--border-accent` | `#3b82f6` | Border aktif tombol/tab |
| `--text-primary` | `#f1f5f9` | Teks utama kontras tinggi |
| `--text-secondary` | `#94a3b8` | Deskripsi & label pendukung |
| `--text-dimmed` | `#64748b` | Metadata, unit, dan catatan kecil |

#### B. Studio Paper Light Theme Tokens:
| Token CSS | Hex / RGBA | Peruntukan |
| :--- | :--- | :--- |
| `--bg-base` | `#f8fafc` | Kanvas terang (Slate 50) |
| `--bg-surface` | `#ffffff` | Kartu putih berbayang lembut |
| `--bg-surface-hover`| `#f1f5f9` | Highlight kartu saat disentuh |
| `--bg-inset` | `#f1f5f9` | Kotak input pencarian |
| `--border-color` | `#e2e8f0` | Hairline border halus (Slate 200) |
| `--border-accent` | `#2563eb` | Border aktif tombol/tab |
| `--text-primary` | `#0f172a` | Hitam pekat natural (Slate 900) |
| `--text-secondary` | `#475569` | Abu-abu gelap (Slate 600) |
| `--text-dimmed` | `#94a3b8` | Metadata dan teks redup |

#### C. Broadcast Tally & Functional Lamp Accents:
* 🔴 **Tally Program (PGM / Live)**: `#ef4444` (`rgba(239, 68, 68, 0.15)` background soft).
* 🟢 **Tally Preview (PVW / Packed ✅)**: `#10b981` (`rgba(16, 185, 129, 0.15)` background soft).
* 🟡 **Tally Standby (STBY / Warning ⚠️)**: `#f59e0b` (`rgba(245, 158, 11, 0.15)` background soft).
* 🔵 **Tally Auxiliary (AUX / Creative 🎬)**: `#3b82f6` (`rgba(59, 130, 246, 0.15)` background soft).
* 🟣 **Tally Panitia (Structural 🏛️)**: `#8b5cf6` (`rgba(139, 92, 246, 0.15)` background soft).

---

### 3. Sistem Tipografi

1. **`Space Grotesk` (Display & Broadcast Badges)**:
   * Karakteristik: Geometris, tajam, profesional.
   * Digunakan untuk: Judul modul, tally badge, kode kamera, dan indikator persentase.
2. **`Plus Jakarta Sans` (Body & Interface Controls)**:
   * Karakteristik: Bersih dan mudah dibaca cepat.
   * Digunakan untuk: Nama item barang, deskripsi tugas kru, dan label filter.
3. **`JetBrains Mono` (Broadcast Telemetry & Timestamps)**:
   * Karakteristik: Monospace dengan spasi presisi.
   * Digunakan untuk: Jam digital WIB, countdown event, nomor kuantitas, dan jalur sinyal I/O.

---

### 4. Spesifikasi Komponen & Modul (4 Master Decks)

```
┌────────────────────────────────────────────────────────────────────────┐
│ HEADER: Logo IP26 │ Live Countdown │ WIB Clock │ Supabase Status │ 🌙/☀️ │
├────────────────────────────────────────────────────────────────────────┤
│ DECK SELECTOR: [ 🎛️ Vision Mixer ] [ 📦 Manifest ] [ 🎥 Rigging ] [ ⏱️ Rundown ] │
├────────────────────────────────────────────────────────────────────────┤
│ ACTIVE DECK VIEW (Hardware Console Surface)                            │
│                                                                        │
│  [ Deck Content with Custom Broadcast Tally Lamps & Telemetry Gauges ] │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ FOOTER: Event Metadata & Supabase Engine Telemetry                      │
└────────────────────────────────────────────────────────────────────────┘
```

1. **Header Control Ribbon**:
   * Badge Brand `IP26` dengan gaya indikator siaran.
   * Live Event Countdown Timer (Menghitung mundur otomatis ke 17 September 2026).
   * Jam Master WIB format `HH:MM:SS WIB`.
   * Live Supabase Database Synchronizer Pill.
   * Dual-Theme Toggle Button (🌙 Dark / ☀️ Light).

2. **Deck 1: Vision Mixer & Sinyal Interaktif**:
   * Interactive Switcher Visualizer: Menampilkan 4 input kamera aktif dengan tombol PGM/PVW visual.
   * Matriks alur sinyal kabel (Video, Audio, Timekeeper, Listrik).
   * Alokasi 11 Workstation Media & Operator (Yamaha QL5, CT80S, Virtual Mixers, Resolume, ProPresenter, OBS, Backup).

3. **Deck 2: Tactical Packing Manifest (119 Item)**:
   * Circular SVG Telemetry Gauge (menampilkan persentase packing secara real-time).
   * Quick-Action Matrix: *Tandai Selesai*, *Reset Manifest*, *Hanya Belum Kembali*.
   * Filter Rack Peminjam (13 Peminjam) & Status.
   * Checkbox taktil dengan efek centang instan (*0ms optimistic update*).

4. **Deck 3: Camera Rigging Directory**:
   * 5 Broadcast Rigs + 3 Documentation Rigs.
   * Komponen lengkap per rig (Body, Lensa, Baterai, Wireless TX/RX, Kabel, Input Mixer).
   * Tombol *1-Click Copy Brief* untuk kirim cepat ke WhatsApp operator.

5. **Deck 4: Run of Show (Rundown) & Crew Axioms**:
   * 5 Aksioma Operasional (Struktur Panitia vs Pelayan).
   * Bagan Kepemimpinan Divisi Teknis.
   * Tabel 3 Sesi Rundown (Pre, Main, Post-Ibadah).
