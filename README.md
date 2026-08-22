# 🎬 Ibadah Perdana UKK UNNES 2026 — Production & Media System

> Comprehensive technical specification, signal routing architecture, device allocation, inventory directory, and operational rundown for **Ibadah Perdana UKK UNNES 2026**.

---

## 📌 Informasi Acara

| Parameter | Detail |
| :--- | :--- |
| **Event** | Ibadah Perdana UKK UNNES 2026 |
| **Venue** | Gedung Auditorium Universitas Negeri Semarang (UNNES) |
| **Production** | Tim Media & Multimedia Panitia Ibadah Perdana 2026 |
| **Repository Access** | Public (Internal Team & Crew Reference) |

---

## 🧭 Panduan Status Indikator

- `✅` **Terverifikasi / Aktif**: Perangkat terverifikasi dan digunakan aktif dalam sistem/wiring.
- `⚠️` **Perhatian / Sebagian**: Perangkat terpakai sebagian (disertai rasio pemakaian, misal `2/4`) atau berstatus belum tersedia/pending.
- `☑️` **Standby / Cadangan**: Perangkat tersedia di inventaris namun tidak terpasang aktif di jalur utama (standby).

---

## 🎥 Camera Systems

### 1. Broadcast Camera System (Engine-Integrated)
Sistem kamera siaran langsung terhubung langsung ke Switcher (*Cinetreak Cinelive V1*) dan terintegrasi dengan Engine System.

```
[CAM 1 (Alex)]  ──(Micro HDMI)──► [Hollyland Pyro S TX] ~~~ (Wireless) ~~~► [Hollyland Pyro S RX] ──(HDMI)──┐
[CAM 2 (Kiel)]  ──(Micro HDMI)──► [Hollyland Pyro H TX] ~~~ (Wireless) ~~~► [Hollyland Pyro H RX] ──(HDMI)──┼─► [Cinetreak Cinelive V1]
[CAM 3 (Nia)]   ──(Micro HDMI to HDMI Conv) ────────────(HDMI 10M GKJ)─────────────────────────────────────┼─►      (Switcher)
[CAM 4 (Ferdy)] ──(Micro HDMI to HDMI Conv) ────────────(HDMI 10M UKK)─────────────────────────────────────┘
```

| Unit | Tipe & Mobilitas | Konfigurasi Rig & Jalur Sinyal | Operator (PIC) | Status |
| :--- | :--- | :--- | :--- | :---: |
| **CAM 1** | Wireless + Fixed | Sony ZVE10 (Kiel 1) + Lens 18-105MM (OWL) + Battery (Kiel 1) + Memory Card 64GB (Kiel 1) + Tripod Camera Big (OWL) + HDMI to Micro HDMI Cable 30CM (OWL) + Hollyland Pyro S TX (OWL) + Battery WIR (OWL) + Hollyland Pyro S RX (OWL) + Battery WIR (OWL) + Stand Lighting Small (UKK) + HDMI Cable 1,5M (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) | **Alex** | `✅` |
| **CAM 2** | Wireless + Mobile | Sony ZV-E10 (OWL) + Lens 18-105MM (OWL) + Battery (OWL) + Memory Card 32GB (OWL) + HDMI to Micro HDMI Cable 30CM (OWL) + Hollyland Pyro H TX (OWL) + Battery WIR (OWL) + Hollyland Pyro H RX (OWL) + Battery WIR (OWL) + Stand Lighting Small (UKK) + HDMI Cable 1,5M (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) | **Kiel 1** | `✅` |
| **CAM 3** | Wired + Fixed | Sony A6000 (OWL) + Lens 18-105MM (OWL) + Battery (OWL) + Memory Card 32GB (OWL) + Tripod Camera Big (GIA) + Micro HDMI to HDMI Converter (OWL) + HDMI Cable 10M (GKJ) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) | **Nia** | `✅` |
| **CAM 4** | Wired + Fixed | Sony A6000 (OWL) + Lens 16-50MM Kit (Kiel 1) + Battery (OWL) + Memory Card 32GB (OWL) + Tripod Camera Big (UKK) + Micro HDMI to HDMI Converter (OWL) + HDMI Cable 10M (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) | **Ferdy** | `✅` |
| **BACKUP** | Spare Parts | Micro HDMI to HDMI Converter X2 (Panitia) | — | `✅` |

---

### 2. Documentation Camera System
Sistem kamera dokumentasi mandiri yang beroperasi terpisah dari jalur Broadcast & Engine.

| Posisi | Konfigurasi Alat | Operator (PIC) | Status |
| :--- | :--- | :--- | :---: |
| **CAM PHO** (Foto) | Sony A6400 (OWL) + Lens 50MM Fix (OWL) + Battery X2 (OWL) + Memory Card 32GB (OWL) | **Nico** | `✅` |
| **CAM VID** (Video) | Sony A6600 (Joel) + Lens 24-70MM Zeiss (Joel) + Battery X2 (Joel) + Memory Card 64GB (Joel) + Gimbal DJI Ronin RS3 (Joel) | **Joel** | `✅` |
| **CAM HP** (Mobile) | iPhone 15 (Jennifer) | **Jennifer** | `✅` |

---

## ⚡ Engine System Architecture

### 1. Electrical Routing
Distribusi daya utama untuk seluruh perangkat di workstation media:
- `Terminal Cable XCH (Andreas) + Terminal Cable XCH (UKK) + Terminal Cable XCH (Panitia)` — `✅`

---

### 2. Broadcast & Video Routing

```
                          ┌─► [Television Kezia (Multiview)]
                          │
[Cinetreak Cinelive V1] ──┼─► [Laptop OBS Studio (Livestream)]
     (Switcher OWL)       │
                          └─► [HDMI Splitter 4CH (UKK)]
                                  │
                                  ├─► [HDMI Capture OWL]  ──► [Laptop Pro Presenter 1] ──► [Novastar UNNES] ──► [LED L/R/Back UNNES]
                                  │
                                  ├─► [HDMI Capture ABON] ──► [Laptop Resolume Arena]  ──► [HDMI Capture GKJ] ──► [PC UNNES] ──► [Novastar UNNES] ──► [LED Center UNNES]
                                  │                                ▲
[Laptop Pro Presenter 2] ─────────┴─► [HDMI Capture OWL] ──────────┘
```

| Jalur Aliran Sinyal | Rincian Kabel & Perangkat | Status |
| :--- | :--- | :---: |
| **Switcher ➔ Television** | Terminal Cable XCH (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) + HDMI to HDMI Cable 1M (GIA) + Television (Kezia) + Power Adaptor TV (Kezia) | `✅` |
| **Switcher ➔ Splitter** | Terminal Cable XCH (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) + HDMI to HDMI Cable 1M (GIA) + HDMI Splitter 4CH (UKK/GKJ) + Power Adaptor SPL (UKK/GKJ) | `✅` |
| **Switcher ➔ OBS** | Terminal Cable XCH (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) + USB A to USB C Data Cable (Andreas) + Laptop (OBS Studio) + Power Adaptor LTP (OBS Studio) | `✅` |
| **Splitter ➔ PRO 1 ➔ LED Left/Right/Back** | HDMI Splitter 4CH (UKK/GKJ) + Power Adaptor SPL (UKK/GKJ) + HDMI to HDMI Cable 1,5M (Andreas) + HDMI Capture (OWL) + Laptop (Pro Presenter 1) + Power Adaptor LTP (Pro Presenter 1) + HDMI Cable 20M (UNNES) + Novastar Video Processor (UNNES) + LED Left Right Back (UNNES) | `✅` |
| **PRO 2 ➔ Resolume Arena** | Laptop (Pro Presenter 2) + Power Adaptor LTP (Pro Presenter 2) + HDMI to HDMI Cable 1,5M (Andreas) + HDMI Capture (OWL) + Laptop (Resolume Arena) + Power Adaptor LTP (Resolume Arena) | `✅` |
| **Splitter ➔ Resolume ➔ LED Center** | HDMI Splitter 4CH (UKK/GKJ) + Power Adaptor SPL (UKK/GKJ) + HDMI to HDMI Cable 1,5M (Andreas) + HDMI Capture (ABON) + Laptop (Resolume Arena) + Power Adaptor LTP + HDMI Cable 15M (GKJ) + HDMI Capture (GKJ) + PC (UNNES) + Novastar Video Processor (UNNES) + LED Center (UNNES) | `✅` |

> [!NOTE]
> **Catatan Splitter HDMI:**
> Terdapat 3 unit HDMI Splitter yang tersedia: GKJ (1 Unit 4CH), UKK (1 Unit 4CH - Utama), dan GIA (1 Unit 2CH), seluruhnya dilengkapi Power Adaptor SPL. Tersedia 2 unit splitter sebagai cadangan.

---

### 3. Audio Engine System

```
[Mixer Yamaha QL5 (UNNES)] ──(XLR 10M UKK + XLR 3M GIA)──► [Mixer NewBaxs CT80S (GIA)] ──(USB A-A Ext + USB A-C)──► [Laptop OBS Studio]
            ▲
            ├──(Audio 20M UNNES + USB C DAC Hanason)─────── [Laptop Resolume Arena]
            │
            ├──(WiFi UNNES-ID)────────────────────────────► [Laptop Virtual Mixer 1 (Andreas)]
            └──(WiFi UNNES-ID)────────────────────────────► [iPad Virtual Mixer 2 (Jennifer)]
```

| Jalur Audio | Rincian Konfigurasi | Status |
| :--- | :--- | :---: |
| **Mixer 1 ➔ Mixer 2 ➔ OBS** | Mixer Yamaha QL5 (UNNES) + XLR Female to Male Cable 10M 2X (UKK) + XLR Female to Male Cable 3M 2X (GIA) + Mixer NewBaxs CT80S (GIA) + USB A to USB A Extender 2M (Andreas) + USB A to USB C Data Cable (GIA) + Laptop (OBS Studio) + Power Adaptor LTP (OBS Studio) | `✅` |
| **Resolume ➔ DAC ➔ Mixer 1** | Laptop (Resolume Arena) + Power Adaptor LTP (Resolume Arena) + USB C DAC Hanason AB17X / USB C DAC Oraimo OAA310 (Andreas) + Audio Cable 20M (UNNES) + Mixer Yamaha QL5 (UNNES) | `✅` |
| **Mixer 1 ➔ Virtual Mixer 1** | Mixer Yamaha QL5 (UNNES) + WiFi (UNNES-ID) + Laptop (Virtual Mixer 1) + Power Adaptor LTP (Virtual Mixer 1) | `✅` |
| **Mixer 1 ➔ Virtual Mixer 2** | Mixer Yamaha QL5 (UNNES) + WiFi (UNNES-ID) + iPad (Virtual Mixer 2) | `✅` |

---

### 4. Time Keeper System
Sistem penghitung waktu mandiri untuk kebutuhan panggung dan tim acara:
- `Terminal Cable XCH (UKK) + Laptop (Pro Presenter 3) + Power Adaptor LTP (Pro Presenter 3) + HDMI to HDMI Cable 1.5M (Lio) + Television (Darrel) + Power Adaptor TV (Darrel)` — `✅`

---

## 💻 Media System Devices & Station Allocation

Daftar workstation, alokasi hardware, dan penanggung jawab operator:

| Workstation / Posisi | Alokasi Perangkat & Kepemilikan | Operator | Status |
| :--- | :--- | :--- | :---: |
| **Mixer 1 (FOH Audio)** | Yamaha QL5 (UNNES) | Jordan / Yosua | `✅` |
| **Mixer 2 (Stream Audio)** | NewBaxs CT80S (GIA) | Andreas | `✅` |
| **Virtual Mixer 1** | Laptop + Power Adaptor LTP (Andreas) | Jordan / Yosua | `✅` |
| **Virtual Mixer 2** | iPad (Jennifer) | Jordan / Yosua | `✅` |
| **Resolume Arena** | Laptop + Power Adaptor LTP (Bayu) | Andreas | `✅` |
| **Pro Presenter 1** | Laptop + Power Adaptor LTP *(Belum Ada)* | Rania | `⚠️` |
| **Pro Presenter 2** | Laptop + Power Adaptor LTP *(Belum Ada)* | Filia | `⚠️` |
| **Pro Presenter 3 + TV** | Laptop X + Power Adaptor LTP *(Belum Ada)* + TV + Power Adaptor TV (Darrel) | Acara | `⚠️` |
| **Switcher + TV Multiview**| Cinetreak Cinelive V1 + Power Adaptor MIX (OWL) + TV + Power Adaptor TV (Kezia) | Wilfred | `✅` |
| **OBS Studio (Streaming)** | Laptop X + Power Adaptor LTP *(Belum Ada)* | Andreas | `⚠️` |
| **Backup Laptop** | Laptop + Power Adaptor LTP (Kiel 1) | Kiel 1 | `✅` |

> [!WARNING]
> **Tindakan Kritis (Pending Hardware):**
> Masih diperlukan kepastian pengadaan **4 unit Laptop** untuk: Pro Presenter 1, Pro Presenter 2, Pro Presenter 3, dan OBS Studio.

---

## 📦 Master Inventory & Equipment Loan Directory

### 1. Peminjaman dari OWL
- Sony A6000 (2 Unit) `✅`
- Sony A6400 (1 Unit) `✅`
- Sony ZV-E10 (1 Unit) `✅`
- Lens 18-105MM (3 Unit) `✅`
- Lens 50MM (1 Unit) `✅`
- Battery (8 Unit) `✅`
- Charger (1 Pack) `✅`
- Memory Card 32GB (4 Unit) `✅`
- Cinetreak Cinelive V1 (1 Pack) `✅`
- Power Adaptor MIX (1 Unit) `✅`
- Hollyland Pyro H (1 Pack) `✅`
- Hollyland Pyro S (1 Pack) `✅`
- Battery WIR (4 Unit) `✅`
- Tripod Camera Big (1 Unit) `✅`
- HDMI to Micro HDMI Converter (2 Unit) `✅`
- HDMI to Micro HDMI Cable 30CM (2 Unit) `✅`
- HDMI Capture (2 Unit) `✅`

### 2. Peminjaman dari ABON
- HDMI Capture (2 Unit) `⚠️ 1/2`

### 3. Peminjaman dari Andreas
- Fan Cooler (1 Unit) `☑️`
- Mouse Pad (1 Unit) `☑️`
- Keyboard Ext (1 Unit) `☑️`
- Mouse Ext (1 Unit) `☑️`
- Powerbank (1 Unit) `☑️`
- Power Adaptor USB A (9 Unit) `☑️`
- Power Adaptor USB A x C (1 Unit) `☑️`
- Power Adaptor USB C (1 Unit) `☑️`
- USB A to USB B Data Cable (1 Unit) `☑️`
- USB A to USB Micro B Data Cable (2 Unit) `☑️`
- USB A to USB C Data Cable (1 Unit) `✅`
- USB A to USB C Charge Cable (1 Unit) `☑️`
- USB C to USB C Charge Cable (1 Unit) `☑️`
- USB A to USB A Extender 30CM (2 Unit) `☑️`
- USB A to USB A Extender 2M (1 Unit) `✅`
- USB A to USB C Male Converter (4 Unit) `☑️`
- USB A to USB C Female Converter (2 Unit) `☑️`
- USB A to Mini USB Cable (1 Unit) `☑️`
- USB A Splitter 3CH (1 Unit) `☑️`
- USB A Splitter 4CH (1 Unit) `☑️`
- USB C DAC Hanason AB17X (1 Unit) `✅`
- USB C DAC Oraimo OAA310 (1 Unit) `☑️`
- In Ear Monitor QKZ Hi7T (1 Pack) `☑️`
- In Ear Monitor KZ EDX Pro (1 Pack) `☑️`
- Fastdrive Vgen SSD 128GB (1 Pack) `☑️`
- Fastdrive Toshiba HDD 1TB (1 Pack) `☑️`
- Flashdrive Toshiba 8GB (1 Unit) `☑️`
- Flashdrive Sandisk 16GB (1 Unit) `☑️`
- Flashdrive Toshiba 32GB (1 Unit) `☑️`
- Flashdrive Toshiba 64GB (1 Unit) `☑️`
- HDMI to Mini HDMI Converter (1 Unit) `☑️`
- Mini HDMI to Mini HDMI Cable 1,5M (1 Unit) `☑️`
- HDMI to HDMI Cable 1,5M (3 Unit) `✅`
- VGA to HDMI Converter (3 Unit) `☑️`
- VGA to VGA Cable 1,5M (1 Unit) `☑️`
- Power Cable 3PIN (3 Unit) `⚠️`
- Power Cable 2PIN (1 Unit) `⚠️`
- Terminal Cable 4CH (3 Unit) `⚠️`
- Terminal Cable 3CH (2 Unit) `⚠️`
- Terminal Cable 2CH (1 Unit) `⚠️`
- Terminal Cable XCH (X Unit) `✅`
- Terminal T (8 Unit) `⚠️`
- Addon Box (1 Pack) `☑️`
- Jack Box (1 Pack) `☑️`
- Screw Box (1 Pack) `☑️`
- Ties Box (1 Pack) `☑️`
- Tool Box (2 Pack) `☑️`
- Cable (1 Pack) `☑️`
- Tape (1 Pack) `☑️`

### 4. Peminjaman dari GIA Deliksari
- Mixer NewBaxs CT80S `✅`
- XLR Female to Male Cable 3M (2 Unit) `✅`
- USB A to USB C Data Cable (1 Unit) `✅`
- Tripod Camera Big (1 Unit) `✅`
- HDMI Splitter 2CH (1 Unit) `☑️`
- Power Adaptor SPL (1 Pack) `☑️`
- HDMI to HDMI Cable 1M (2 Unit) `✅`

### 5. Peminjaman dari GKJ Ngaliyan
- Stand Lighting Small (1 Unit) `☑️`
- HDMI Cable 15M (1 Unit) `✅`
- HDMI Cable 10M (1 Unit) `✅`
- HDMI Cable 5M (1 Unit) `☑️`
- HDMI Cable 1,5M (1 Unit) `☑️`
- HDMI Capture (1 Unit) `✅`
- HDMI Splitter 4CH (1 Unit) `☑️`
- Power Adaptor SPL (1 Pack) `☑️`

### 6. Peminjaman dari UKK UNNES
- XLR Female to Male Cable 10M (3 Unit) `⚠️ 2/3`
- Stand Lighting Small (4 Unit) `⚠️ 2/4`
- Tripod Camera Big (1 Unit) `✅`
- HDMI to Mini HDMI Cable 2,5M (1 Unit) `☑️`
- HDMI Cable 15M (1 Unit) `☑️`
- HDMI Cable 10M (1 Unit) `✅`
- HDMI Cable 1,5M (4 Unit) `⚠️ 2/4`
- HDMI Splitter 4CH (1 Unit) `✅`
- Power Adaptor SPL (1 Pack) `✅`
- VGA to VGA Cable 1,5M (1 Unit) `☑️`
- VGA to VGA Cable 2,5M (1 Unit) `☑️`
- VGA to HDMI Converter (2 Unit) `☑️`
- Power Cable XPIN (X Unit) `☑️`
- Terminal Cable XCH (X Unit) `✅`

### 7. Peminjaman dari Lio
- HDMI Cable 1,5M (1 Unit) `✅`

### 8. Peminjaman dari Darrel
- Television (1 Unit) `✅`
- Power Adaptor TV (1 Pack) `✅`
- Memory Card 8GB (1 Unit) `☑️`

### 9. Peminjaman dari Kiel 1
- Sony ZVE10 (1 Unit) `✅`
- Lens 16-50MM Kit (1 Unit) `✅`
- Lens 50MM Fix (1 Unit) `☑️`
- Battery (2 Unit) `✅`
- Charger (1 Pack) `✅`
- Memory Card 64GB (1 Unit) `✅`
- Memory Card 128GB (1 Unit) `☑️`

### 10. Peminjaman dari Joel
- Sony A6600 (1 Unit) `✅`
- Lens 24-70MM Zeiss (1 Unit) `✅`
- Battery (2 Unit) `✅`
- Charger (1 Pack) `✅`
- Memory Card 64GB (1 Unit) `✅`
- Gimbal DJI Ronin RS3 (1 Unit) `✅`

### 11. Peminjaman dari Kezia
- Television (1 Unit) `✅`
- Power Adaptor TV (1 Pack) `✅`

### 12. Peminjaman dari Jennifer
- HP iPhone 15 (1 Unit) `✅`
- TAB iPad (1 Unit) `✅`

### 13. Peminjaman dari Panitia
- HDMI to Micro HDMI Converter (2 Unit) `✅`
- Terminal Cable XCH (X Unit) `✅`

---

## 📋 Data & List Materi Tampilan Sesi Event

Alur penayangan konten media selama rangkaian ibadah:

### 1. Pre Ibadah (Open Gate)
- **Playlist Lagu Rohani** ➔ Sound System FOH
- **Loop Video** (*Profile UKK, After Movie IP25, After Movie IN25*) ➔ LED Tengah

### 2. Main Ibadah (Main Event)
- **Video Opening** ➔ LED Tengah
- **Video Sambutan Bu Grace** ➔ LED Tengah & Kanan-Kiri
- **Background Tema** ➔ LED Tengah
- **Background Lagu** ➔ Sound System FOH
- **Lirik Lagu** ➔ LED Tengah & Kanan-Kiri
- **Video Generation** ➔ LED Tengah & Kanan-Kiri
- **PPT Pembicara** ➔ LED Tengah & Kanan-Kiri
- **Ayat Pembicara** ➔ LED Tengah & Kanan-Kiri
- **Quote Pembicara** ➔ LED Tengah & Kanan-Kiri
- **Persembahan (QRIS)** ➔ LED Tengah & Kanan-Kiri
- **UKK News** ➔ LED Tengah & Kanan-Kiri
- **Pokok Doa** ➔ LED Tengah & Kanan-Kiri

### 3. Post Ibadah (Close Gate)
- **Usung-Usung & De-rigging** (Pembersihan, inventarisasi ulang, dan packing gear)

---

<div align="center">
  <sub>Panitia Ibadah Perdana UKK UNNES 2026 • Media & Broadcast Production Division</sub>
</div>
