# 🎨 DESIGN SYSTEM SPECIFICATION (DESIGN.md v13.0)
## IP26 Clean Compact Studio — Linear & Vercel Inspired Design System

---

### 1. Filosofi & Karakter Visual
Sistem desain **Linear Clean Compact (v13.0)** dibangun dengan prinsip *Precision, Restraint, and High Craft*:
* **Matte Slate & Dark Grey Canvas**: Menghilangkan efek glow neon berlebih dan gradien norak. Menggunakan latar abu-gelap pekat bertingkat yang teduh di mata.
* **Hairline Precision Borders**: Garis pembatas tipis `1px solid rgba(255, 255, 255, 0.08)` untuk struktur kartu yang rapi dan tegas.
* **Collapsible Accordion Modules**: Setiap modul utama memiliki accordion header yang dapat dibuka-tutup dengan animasi halus, menjaga layar HP tetap ringkas.
* **Touch-First Navigation**: Sticky Top Nav untuk Desktop dan Fixed Floating Dock untuk Mobile dengan *active section auto-expand*.

---

### 2. Token Desain (CSS Custom Properties)

#### A. Palet Warna (Linear Dark Theme):
```css
:root {
  /* Canvas & Surfaces */
  --bg-base: #0c0d0f;              /* Kanvas utama */
  --bg-surface: #14161a;           /* Kartu modul */
  --bg-surface-hover: #1c1f24;     /* Hover state */
  --bg-inset: #090a0c;             /* Input box & sub-cards */
  --bg-dock: rgba(18, 20, 24, 0.92); /* Glass blur navbar/dock */

  /* Hairline Borders */
  --border-card: rgba(255, 255, 255, 0.08);
  --border-subtle: rgba(255, 255, 255, 0.04);
  --border-hover: rgba(255, 255, 255, 0.16);
  --border-focus: #38bdf8;

  /* Typography */
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --text-dim: #6b7280;

  /* Functional Accents */
  --accent-blue: #38bdf8;
  --accent-emerald: #10b981;
  --accent-amber: #f59e0b;
  --accent-purple: #8b5cf6;
  --accent-coral: #ef4444;
}
```

#### B. Tipografi:
* **Display & Headings**: `Plus Jakarta Sans` / `Space Grotesk` (Weight: 700/800, tight tracking `-0.02em`).
* **UI Controls & Body**: `Plus Jakarta Sans` / `Inter` (Weight: 400/500/600, readable, balanced line-height).
* **Technical Telemetry & Badges**: `JetBrains Mono` (Monospace for clocks, counters, and gear quantities).

---

### 3. Komponen Utama & Interaksi

1. **Collapsible Section Header**:
   * Header kartu dengan judul seksi, badge modul, jumlah item/ringkasan, dan tombol chevron toggle `[▼ / ▲]`.
   * Klik pada header akan melakukan toggle kelas `.collapsed`.
2. **Synchronized Navigation**:
   * Tombol navbar di atas dan bottom dock di HP secara otomatis membuka (*expand*) seksi tujuan jika sedang tertutup, lalu scroll mulus ke posisi seksi tersebut.
3. **Tactile Checkbox**:
   * 0ms optimistic feedback, SVG check mark, auto-calculate progress bar, dan Supabase real-time sync.
4. **1-Click WhatsApp Briefing Copy**:
   * Tombol ringkas untuk menyalin format pesan WhatsApp instan per rig kamera.
