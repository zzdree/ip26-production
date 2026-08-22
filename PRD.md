# 📄 Product Requirements Document (PRD) — v2.0 Dark Mode UI Redesign
## Ibadah Perdana UKK UNNES 2026 — Production & Media Landing Page

---

## 1. Executive Summary & Design Pivot
- **Product Name:** IP26 Production Command & Media Dashboard
- **Design Inspiration & Benchmark:** [Easeout 25 Dark Mode UI Design Examples](https://www.easeout.co/blog/2020-05-13-25-dark-mode-ui-design-examples/) (Featuring modern dark dashboard patterns, subtle skeuomorphic depth, neon/ambient glowing accents, layered surfaces, and touch-first mobile ergonomics).
- **Target Audience:** Crew Produksi, Operator Broadcast & Sound, Tim Multimedia UKK UNNES, dan Panitia Lapangan.
- **Tujuan Utama:** Mentransformasikan antarmuka menjadi dashboard siaran modern kelas profesional (*Broadcast Control Suite*), responsif optimal di desktop layar lebar dan smartphone crew, dengan visual yang tajam, kedalaman permukaan multi-layer, serta memuat 100% informasi teknis dari `ip26_pro1.txt`, `ip26_pro2.txt`, dan `README.md`.

---

## 2. Design System & Aesthetic Architecture (Easeout Dark Mode UI Standards)

### A. Color Palette & Surface Tokens
Mengadopsi hierarki kontras multi-layer tanpa menggunakan hitam pekat murni `#000000`:
- **Canvas Base Background:** `#090D16` (Deep Obsidian Blue-Black)
- **Primary Elevated Surface (Cards):** `#111827` dengan 1px hairline border `rgba(255, 255, 255, 0.08)` dan inner glow `inset 0 1px 0 rgba(255, 255, 255, 0.06)`.
- **Secondary Elevated Surface (Controls & Inset):** `#1A243B` / `#0D1322`
- **Card Hover State:** `#16213B` dengan border flare `rgba(56, 189, 248, 0.4)` dan box-shadow `0 12px 32px rgba(0, 0, 0, 0.6)`.

### B. High-Contrast Accent Lights
- **Electric Cyan (`#00D2FF` / `#38BDF8`):** Sinyal video switcher, tab aktif, dan metrik siaran.
- **Radiant Emerald (`#10B981` / `#00F298`):** Status terverifikasi/aktif `✅`, dengan *pulsing live dot*.
- **Vibrant Amber (`#F59E0B` / `#FFB020`):** Status perhatian/sebagian `⚠️` dan notifikasi kritis laptop pending.
- **Royal Indigo/Violet (`#8B5CF6`):** Status standby/cadangan `☑️` dan kategori gear.

### C. Typography Hierarchy
- **Header & Metric Display:** `Space Grotesk` (Modern, bold, tech-forward geometric).
- **Body & Operations Text:** `Plus Jakarta Sans` (Tingkat keterbacaan tinggi dalam kondisi redup/gelap).
- **Technical Monospace:** `JetBrains Mono` (Untuk jalur kabel, port, dan skema routing).

---

## 3. Responsive Layout Strategy (Desktop vs Mobile)

| Komponen | Tampilan Desktop (>= 1024px) | Tampilan Mobile (< 768px) |
| :--- | :--- | :--- |
| **Hero & Metrics** | 4-kolom kartu metrik dengan visual glow, judul besar 48px | 2x2 grid metrik ringkas, header mobile-optimized, spacing sentuh nyaman |
| **Navigasi** | Sticky top bar dengan link navigasi penuh dan tombol aksi GitHub | Sticky header dengan horizontal swipe nav menu + auto-active scroll spy |
| **Kamera & Rig Cards** | 2-kolom & 3-kolom grid dengan spec card berkedalaman tinggi | 1-kolom kartu rig penuh dengan pill status yang jelas dan mudah di-tap |
| **Routing Tables** | Full table layout dengan highlight alur sinyal dan status | Horizontal responsive table container dengan sticky header & status badges |
| **Inventaris Alat** | Toolbar lebar dengan search bar, chip status horizontal, dan lender pills | Sticky search bar, swipeable status chips, accordion/card layout yang ringan |
| **Rundown Tampilan** | 3-kolom card berjejer (*Pre, Main, Post*) | Stacked step-by-step rundown cards dengan destination tags berwarna |

---

## 4. DFII (Design Feasibility & Impact Index) Scoring
- **Aesthetic Impact:** 5.0 / 5 (Mengikuti acuan Easeout Dark Mode UI modern)
- **Context Fit:** 5.0 / 5 (Sangat ergonomis untuk kru broadcast di ruang kontrol & panggung)
- **Implementation Feasibility:** 5.0 / 5 (Zero-dependency vanilla HTML/CSS/JS yang super efisien)
- **Performance Safety:** 5.0 / 5 (Load time instan, CSS murni tanpa overhead framework)
- **Consistency Risk:** 1.0 / 5
- **Total DFII Score:** `(5.0 + 5.0 + 5.0 + 5.0) - 1.0 = 19.0 / 15` (Kategori: **Elite / Exceptional**)

---

## 5. Rencana Eksekusi Teknis
1. [x] Update `PRD.md` dengan spesifikasi Easeout Dark Mode.
2. [ ] Redesign `style.css` dengan token warna modern, elevated glassmorphism, glow effects, dan breakpoint responsive menyeluruh.
3. [ ] Perbarui `index.html` dengan struktur layout dashboard kontrol siaran yang diperkaya.
4. [ ] Sempurnakan `app.js` dengan performa search/filter instan, interaksi tab yang halus, dan mobile touch events.
5. [ ] Verifikasi dan deploy ke GitHub Pages (`zzdree.github.io/ip26-production`).
