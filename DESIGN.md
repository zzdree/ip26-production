# DESIGN.md — Production Call Sheet (v16.3)

**Theme:** Light Editorial "Technical Rider" — dokumen produksi cetak yang hidup di web
**Dial:** ENERGY 2 / RHYTHM 3 / MOTION 1

## 1. Atmosphere
Kertas hangat seperti call sheet yang dicetak pagi hari sebelum event. Ruling garis hitam tipis memandu mata, merah sinyal menandai hal penting (countdown, PGM, aksi utama). Terbaca sempurna di lokasi terang.

## 2. Palet & Peran
- **Paper** `#F7F4EE` — latar utama
- **Card White** `#FFFFFF` — panel/kartu
- **Inset Cream** `#EFEBE2` — baris recessed, tabel head
- **Ink** `#17181A` — teks utama
- **Ink Soft** `#5A5D63` — teks sekunder
- **Rule** `#17181A` (1px) dan `rgba(23,24,26,.12)` (hairline) — garis struktur
- **Signal Red** `#D93A2B` — aksen tunggal: masthead rule, countdown, PGM, tombol aktif, badge operator
- **Verified Green** `#1B7F4D` / soft `rgba(27,127,77,.12)` — ✅ aktif/terverifikasi/checklist done
- **Caution Amber** `#B45309` / soft `rgba(180,83,9,.14)` — ⚠️ sebagian/pending
- **Standby Purple** `#6D4FA3` / soft `rgba(109,79,163,.12)` — ☑️ standby

## 3. Tipografi
- **Libre Franklin** (400/600/700/800): display + body. Judul besar uppercase condensed-feel dengan letter-spacing ketat; section header bergaya koran.
- **IBM Plex Mono** (500/700): angka, jam, countdown, ID teknis, badge status.

## 4. Komponen
- **Masthead**: judul raksasa + double rule bawah (2px+1px) khas koran.
- **Section header**: nomor mono dalam kotak tinta + judul uppercase + rule panjang.
- **Accordion**: kartu putih border ink hairline; chevron berputar; konten padding lega.
- **Tabel**: head cream uppercase mono kecil, ruling tipis antar baris, hover lembut.
- **Checklist row**: checkbox hijau saat done + strikethrough ink soft.
- **Switcher bus**: tombol putih border ink; PGM aktif = merah penuh teks putih; PVW aktif = hijau.
- **Dock mobile**: putih blur, ikon+label, aktif merah.
- **Badge operator**: outline merah tipis uppercase mono.

## 5. Layout
Container max 1100px; whitespace kertas sebagai pemisah utama; grid auto-fit untuk kartu; komposisi bervariasi per seksi (masthead asimetris, roster 3 kolom, tabel penuh, grid checklist).

## 6. Revisi v16.3
- Badge personel Panitia/Pelayan pada cam-sub dan kolom operator workstation
- Dual theme light warm pastel / dark lembut + aurora blobs hue-loop 40s
