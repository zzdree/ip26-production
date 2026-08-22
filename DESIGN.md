# DESIGN.md — Siaran Mission Control (v15.0)

**Dial:** ENERGY 2 / RHYTHM 3 / MOTION 2
**Aesthetic:** OB-Van Telemetry Console (bukan clone produk komersial)
**Inspiration:** Konsol teknik siaran nyata (Cinetreak, tally light, source grid)

## 1. Visual Theme & Atmosphere
Konsol operasional siaran yang padat dan terfokus. Charcoal pekat sebagai substrate, aksen amber terang sebagai sinyal tunggal. Status ditunjukkan via *tally light semantics* (hijau/amber/ungu/merah) yang konsisten di seluruh modul — ini adalah motif identitas, bukan dekorasi.

## 2. Color Palette & Roles
- **Charcoal Base** `#0E0F12` — background utama (substrate gelap, bukan hitam murni agar nyaman di layar)
- **Slate Surface** `#16181D` — panel/kartu modul
- **Inset** `#0B0C0F` — baris ter-recessed, search, table
- **Hairline** `rgba(255,255,255,.08)` — batas presisi 1px
- **Signal Amber** `#F5A524` — aksen tunggal: tombol aktif, highlight, countdown (focus point)
- **Verified Green** `#34D399` — barang terverifikasi aktif ✅ / checklist selesai
- **Caution Amber-Status** `#FBBF24` — sebagian / pending ⚠️
- **Standby Purple** `#A78BFA` — standby / backup ☑️ (diredam, bukan dominan)
- **On-Air Red** `#F43F5E` — PGM tally / switcher live

## 3. Typography
- **Space Grotesk** (display + angka telemetry): terlihat teknis tapi punya karakter, bukan Inter/Roboto.
- **Plus Jakarta Sans** (body/labels): keterbacaan tinggi.
- **JetBrains Mono** (ID teknis: port, kabel, jam, channel): sebagai identitas "telemetry".
- Heading modul 15px/700; body 13px; telemetry 28-32px mono.

## 4. Component Stylings
- **Buttons:** sudut kecil (6px), amber solid untuk primary aktif, outline hairline untuk secondary. Tidak semua pill.
- **Cards/Modules:** sudut 12px, border hairline, collapsible accordion. Hover border sedikit terang.
- **Inputs:** inset bg, border fokus amber, mono placeholder.
- **Tally Badges:** dot + label, warna status semantik.

## 5. Layout Principles
- Top nav (desktop) + bottom dock (mobile) dengan ikon + label thumb-zone.
- Hero: countdown besar sebagai focal point tunggal per layar.
- Grid modul auto-fit, dense tapi bernapas. Whitespace sebagai pemisah antar section.
- RHYTHM 3: komposisi bervariasi (hero asimetris, grid kamera, tabel routing, kartu roster).
