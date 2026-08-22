# PRD — IP26 Siaran Mission Control (v15.0)

**Event:** Ibadah Perdana UKK UNNES 2026
**Venue:** Gedung Auditorium UNNES, Semarang
**Date:** 17 September 2026
**Architecture:** Single-Page Responsive Broadcast Operations Console (Desktop top-nav + Mobile bottom-dock)
**Realtime DB:** Supabase PostgreSQL (`public.inventory_checklist`) + localStorage cache

---

## 1. Product Purpose
Pusat kendali siaran langsung (live multicam) dan pelacak inventaris untuk Ibadah Perdana UKK UNNES 2026. Menggabungkan 119 item inventaris (13 peminjam), 8 rig kamera, 11 workstation media, matriks routing sinyal, tata layar LED, dan rundown ke dalam satu konsol digital yang padat, responsif, dan berkarakter.

## 2. Aesthetic Direction (Precision Studio dipensiunkan)
**"Siaran Mission Control / OB-Van Telemetry"** — diinspirasi dari konsol teknik siaran nyata (tally light, source grid, telemetry), BUKAN clone Linear/Vercel/Stripe.
- Base charcoal `#0E0F12`, surface `#16181D`, hairline `rgba(255,255,255,.08)`
- Aksen tunggal: amber sinyal `#F5A524`
- Status semantik: hijau (terverifikasi ✅), amber (sebagian ⚠️), ungu redup (standby ☑️), merah (on-air/PGM)
- Font: Space Grotesk (display+telemetry), Plus Jakarta Sans (body), JetBrains Mono (ID teknis)

## 3. Information Architecture (Semua dari source, tanpa meta-`x`)
1. **Sticky Header + Bottom Dock**: Jam WIB live, Countdown ke 17 Sep 2026, status Supabase, nav.
2. **Hero Mission Control**: Judul, venue/tanggal, Countdown besar (focal point), 4 telemetry (119 item, 8 kamera, 11 workstation, 3 sesi).
3. **Struktur Tim**: 3 divisi (System/Pelayan, Media/Panitia, Creative/Panitia) + klasifikasi Panitia vs Pelayan.
4. **Legenda Status**: ✅ ⚠️ ☑️.
5. **Broadcast Camera**: CAM 1-4 + Backup (gear + operator + salin WA).
6. **Documentation Camera**: PHO (Nico), VID (Joel), HP (Jennifer).
7. **Engine System**: Electrical, Video Routing (7 sub-sistem), Audio (4 chain), Time Keeper, Catatan Splitter.
8. **Media Workstations**: 11 device + operator.
9. **Master Inventaris**: 119 item, 13 peminjam, checklist + Supabase + filter + search.
10. **Stage & LED**: 4 layar + timekeeper + anchor kamera.
11. **Rundown**: Pre / Main / Post.

## 4. Constraints
- 100% mobile + desktop responsive (bottom dock di HP, top nav di desktop).
- Tidak ada em dash (—) di UI text (antislop R-02).
- Kontras WCAG AA, tap target ≥44px, keyboard navigable.
- Baris `x` di source = konteks agent, TIDAK dimasukkan ke UI.
