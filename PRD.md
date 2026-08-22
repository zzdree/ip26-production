# 📄 Product Requirements Document (PRD) — v6.0 Realtime Cloud Database & Checklist Suite
## IP26 Broadcast Command Suite — Ibadah Perdana UKK UNNES 2026

---

## 1. Executive Summary & New Capability
- **Product Name:** IP26 Master Broadcast Control & Realtime Media Inventory Suite
- **Core Architecture:** **Pure Dark Grey / Neutral Charcoal Single-Page Broadcast Center** with **Full Cloud Realtime Database Multi-Device Synchronization**.
- **The Core Problem Solved:**
  - Saat tahapan **Loading (Unload Gear)** dan **Packing (De-rigging & Return)** di Gedung Auditorium UNNES, seluruh crew media memerlukan satu sumber data inventaris terpadu yang dapat di-checklist langsung dari smartphone masing-masing.
  - Ketika Crew A mencentang suatu kabel/kamera di panggung, HP Crew B di meja mixer dan HP Koordinator di ruang transit langsung terupdate detik itu juga secara otomatis tanpa perlu refresh/reload halaman.

---

## 2. Cloud Database Architecture (Zero-Server Backend)
- **Database Engine:** **Firebase Realtime Database (Google Cloud)** via Client-Side WebSockets.
- **Hosting Platform:** GitHub Pages (Static Web Serving) + Google Cloud Realtime Database (State & Synchronization Layer).
- **Data Model:**
  ```json
  {
    "inventory_state": {
      "OWL_Sony_A6000_1": { "packed": true, "updated_at": 1755864000, "updated_by": "Alex" },
      "Andreas_USB_DAC_Hanason": { "packed": false, "updated_at": 1755864100, "updated_by": "Andreas" }
    },
    "metadata": {
      "last_synced": 1755864200,
      "event": "Ibadah Perdana UKK UNNES 2026"
    }
  }
  ```
- **Realtime Sync Features:**
  - Multi-client 2-way data binding (WebSockets).
  - Status koneksi live: `🟢 Cloud Sync Connected (Realtime)` / `🟡 Reconnecting`.
  - Batch Actions:
    - `📦 Tandai Semua Selesai Packing (100% Aman Kembali)`
    - `🚚 Reset / Mulai Unload (0% Loading Keluar)`
    - `🔍 Filter Khusus: Tampilkan Hanya Barang Yang Belum Kembali`

---

## 3. Design System & Palette (Pure Dark Grey)
- `--bg-canvas`: `#121214` (Neutral Dark Charcoal)
- `--bg-surface`: `#18191D` (Matte Graphite)
- `--bg-card`: `#202127` (Elevated Card Container)
- `--bg-card-hover`: `#282A32`
- `--bg-inset`: `#0C0D0F`
- `--neon-cyan`: `#00E5FF`
- `--neon-emerald`: `#00E676` (Indikator checklist aman & live database)
- `--neon-amber`: `#FFAB00` (Barang belum kembali)
- `--neon-purple`: `#A855F7`

---

## 4. Execution Roadmap
1. [x] Authored PRD v6.0 specification.
2. [ ] Integrate Firebase Realtime Database SDK in `index.html`.
3. [ ] Add Checklist Control Bar, Packing Progress Meter, and Realtime Cloud Badge in `index.html`.
4. [ ] Style interactive checkboxes, strikethrough animations, and sync badges in `style.css`.
5. [ ] Implement WebSocket sync engine and batch actions in `app.js`.
6. [ ] Deploy to GitHub Pages and verify multi-device sync live.
