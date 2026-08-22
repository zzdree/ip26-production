# PRD — IP26 Production Call Sheet (v16.0)

**Event:** Ibadah Perdana UKK UNNES 2026 · Auditorium UNNES · 17 September 2026
**Arsitektur:** Single-page responsive, light editorial theme, top-nav desktop + bottom-dock mobile
**Realtime:** Supabase `public.inventory_checklist` + localStorage

## 1. Tujuan
Konsol produksi siaran & pelacak inventaris yang tampil seperti **production call sheet / technical rider cetak**: presisi, terbaca di lingkungan terang, dan punya karakter dokumen resmi.

## 2. Arah Desain (fresh, beda total dari v13–v15 yang gelap)
- Latar kertas hangat `#F7F4EE`, tinta `#17181A`, garis ruling hitam tipis
- Aksen tunggal merah sinyal `#D93A2B`; status semantik: hijau/amber/ungu
- Tipografi koran: **Libre Franklin** (display+body), **IBM Plex Mono** (data teknis)

## 3. Struktur Informasi (semua dari ip26_pro1.txt, ip26_pro2.txt, README.md)
1. Masthead: judul, venue, tanggal, countdown, jam WIB
2. Ringkasan angka: 119 item · 13 peminjam · 8 kamera · 11 workstation · 3 sesi
3. Struktur tim 3 divisi + klasifikasi Panitia vs Pelayan + legenda status ✅⚠️☑️
4. Kamera Broadcast (CAM 1–4 + Backup) & Dokumentasi (PHO/VID/HP): gear per barang + peminjam + operator + salin briefing WA
5. Engine System: Electrical, Video Routing (Switcher+TV/Splitter/OBS, Splitter+PRO1+LED L/R/B, PRO2+RES, Splitter+RES+LED Center), Audio (4 chain), Time Keeper, catatan splitter
6. Media Workstation 11 device + PIC (PRO1/2/3/OBS ⚠️ laptop belum ada)
7. Inventaris 119 item / 13 peminjam: checklist realtime, search Ctrl+K, filter peminjam, progress
8. Panggung & LED (Center/L/R/Back + timekeeper TV Darrel + posisi kamera)
9. Rundown 3 sesi (Pre/Main 12 materi/Post: Usung-usung)
10. Simulasi switcher Cinetreak PGM/PVW interaktif

## 4. Batasan
- Baris `x` pada source = konteks agent, tidak masuk UI
- Tanpa em dash pada teks UI; kontras AA; tap target ≥44px
