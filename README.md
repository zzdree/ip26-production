# 🎬 IBADAH PERDANA UKK UNNES 2026 — PRODUCTION & BROADCAST BLUEPRINT

<div align="center">

[![Live Web Preview](https://img.shields.io/badge/🌐_LIVE_WEB_PREVIEW-ONLINE-00d2ff?style=for-the-badge&logo=google-chrome&logoColor=white)](https://zzdree.github.io/ip26-production/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/zzdree/ip26-production)

<br/>

![Event Year](https://img.shields.io/badge/EVENT_YEAR-2026-blue?style=flat-square)
![Venue](https://img.shields.io/badge/VENUE-Auditorium_UNNES-red?style=flat-square)
![Production](https://img.shields.io/badge/PRODUCTION-UKK_UNNES_2026-green?style=flat-square)
![Status](https://img.shields.io/badge/STATUS-OPERATIONAL_READY_%E2%9C%85-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/LICENSE-PROPRIETARY_PRIVATE-purple?style=flat-square)

<p align="center">
  <b>Arsitektur Teknis Komprehensif, Multi-Camera Broadcast Routing, Audio-Visual Signal Pipeline, Master Inventory & Equipment Loan Log untuk Ibadah Perdana UKK UNNES 2026.</b>
</p>

[**🚀 Buka Live Command Center & Web App »**](https://zzdree.github.io/ip26-production/)

---

</div>

## 📑 Daftar Isi
- [📌 1. Event Overview & Metadata](#-1-event-overview--metadata)
- [👥 2. Crew Structure & Person In Charge (PIC)](#-2-crew-structure--person-in-charge-pic)
- [📡 3. Broadcast & Documentation Camera Setup](#-3-broadcast--documentation-camera-setup)
- [🔄 4. System Architecture & Signal Routing](#-4-system-architecture--signal-routing)
  - [🎥 A. Video & Broadcast Signal Flow](#-a-video--broadcast-signal-flow)
  - [🖥️ B. Media Presentation & LED Mapping](#-b-media-presentation--led-mapping)
  - [🔊 C. Audio Master & Virtual Mixing Pipeline](#-c-audio-master--virtual-mixing-pipeline)
  - [⏱️ D. Timekeeper Engine Flow](#-d-timekeeper-engine-flow)
- [📦 5. Master Inventory & Equipment Loan Log](#-5-master-inventory--equipment-loan-log)
- [📑 6. Rundown & Media Asset Checklist](#-6-rundown--media-asset-checklist)
- [⚡ 7. SOP Operasional & Safety Guidelines](#-7-sop-operasional--safety-guidelines)
- [⚖️ 8. License & Proprietary Notice](#-8-license--proprietary-notice)

---

## 📌 1. Event Overview & Metadata

| Field | Detail |
| :--- | :--- |
| **Event Name** | Ibadah Perdana UKK UNNES 2026 |
| **Venue** | Gedung Auditorium Universitas Negeri Semarang (UNNES) |
| **Organizer** | Panitia Ibadah Perdana UKK UNNES 2026 |
| **Technical & Media Lead** | Andreas & Media Production Team |
| **Live Web App** | [https://zzdree.github.io/ip26-production/](https://zzdree.github.io/ip26-production/) |
| **Primary System Stacks** | Cinetreak Cinelive V1, OBS Studio, Resolume Arena, ProPresenter 7, Yamaha QL5, NewBaxs CT80S, Hollyland Pyro S & Pyro H |

---

## 👥 2. Crew Structure & Person In Charge (PIC)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 MASTER PRODUCTION CREW                                 │
├───────────────────────┬───────────────────────────┬────────────────────────────────────┤
│ 🎥 BROADCAST CAMERA   │ 📸 DOCUMENTATION CAMERA   │ 💻 MEDIA & ENGINE SYSTEM           │
├───────────────────────┼───────────────────────────┼────────────────────────────────────┤
│ CAM 1: Alex           │ CAM PHO: Nico             │ Video Switcher & TV: Wilfred       │
│ CAM 2: Kiel 1         │ CAM VID: Joel             │ OBS Studio: Andreas                │
│ CAM 3: Nia            │ CAM HP: Jennifer          │ Resolume Arena: Andreas            │
│ CAM 4: Ferdy          │                           │ ProPresenter 1: Rania              │
│                       │                           │ ProPresenter 2: Filia              │
│                       │                           │ ProPresenter 3 & TV: Tim Acara     │
│                       │                           │ Mixer 1 (FOH): Jordan / Yosua      │
│                       │                           │ Mixer 2 (Submix): Andreas          │
│                       │                           │ Virtual Mixer 1 & 2: Jordan / Yosua│
│                       │                           │ Backup Station: Kiel 1             │
└───────────────────────┴───────────────────────────┴────────────────────────────────────┘
```

---

## 📡 3. Broadcast & Documentation Camera Setup

### 🎥 Broadcast Camera System *(Terintegrasi dengan Engine System)*

| Camera ID | Operator | Unit / Body | Lensa | Routing / Aksesoris / Transmisi |
| :--- | :--- | :--- | :--- | :--- |
| **CAM 1** | **Alex** ✅ | Sony ZV-E10 *(Kiel 1)* | Lens 18–105mm *(OWL)* | Battery *(Kiel 1)*, Memory Card 64GB *(Kiel 1)*, Tripod Camera Big *(OWL)*, HDMI to Micro HDMI 30cm *(OWL)*, **Hollyland Pyro S TX/RX** *(OWL)*, Battery WIR *(OWL)*, Stand Lighting Small *(UKK)*, HDMI Cable 1.5M *(UKK)*, Switcher Cinetreak Cinelive V1 *(OWL)* |
| **CAM 2** | **Kiel 1** ✅ | Sony ZV-E10 *(OWL)* | Lens 18–105mm *(OWL)* | Battery *(OWL)*, Memory Card 32GB *(OWL)*, HDMI to Micro HDMI 30cm *(OWL)*, **Hollyland Pyro H TX/RX** *(OWL)*, Stand Lighting Small *(UKK)*, HDMI Cable 1.5M *(UKK)*, Switcher Cinetreak Cinelive V1 *(OWL)* |
| **CAM 3** | **Nia** ✅ | Sony A6000 *(OWL)* | Lens 18–105mm *(OWL)* | Battery *(OWL)*, Memory Card 32GB *(OWL)*, Tripod Camera Big *(GIA)*, Micro-HDMI to HDMI Converter *(OWL)*, **HDMI Cable 10M** *(GKJ)*, Switcher Cinetreak Cinelive V1 *(OWL)* |
| **CAM 4** | **Ferdy** ✅ | Sony A6000 *(OWL)* | Lens 16–50mm *(Kiel 1)* | Battery *(OWL)*, Memory Card 32GB *(OWL)*, Tripod Camera Big *(UKK)*, Micro-HDMI to HDMI Converter *(OWL)*, **HDMI Cable 10M** *(UKK)*, Switcher Cinetreak Cinelive V1 *(OWL)* |
| **BACKUP** | *Standby* | — | — | Micro HDMI to HDMI Converter X2 *(Panitia)* |

### 📸 Documentation Camera System *(Terpisah dari Broadcast & Engine System)*

| Camera Role | Operator | Unit / Body | Lensa & Aksesoris Tambahan |
| :--- | :--- | :--- | :--- |
| **CAM PHO** | **Nico** ✅ | Sony A6400 *(OWL)* | Sony 50mm Prime *(OWL)*, Battery 2X *(OWL)*, Memory Card 32GB *(OWL)* |
| **CAM VID** | **Joel** ✅ | Sony A6600 *(Joel)* | Zeiss 24–70mm *(Joel)*, Battery 2X *(Joel)*, Memory Card 64GB *(Joel)*, **DJI Ronin RS3 Gimbal** *(Joel)* |
| **CAM HP** | **Jennifer** ✅ | Apple iPhone 15 *(Jennifer)* | Native High-Res Video / Social Media Story Ingest |

---

## 🔄 4. System Architecture & Signal Routing

### 🎥 A. Video & Broadcast Signal Flow
```mermaid
graph TD
    subgraph Cameras["🎥 Broadcast Live Cameras"]
        CAM1["CAM 1 (Alex)<br/>Sony ZV-E10 + Pyro S (Wireless TX/RX)"]
        CAM2["CAM 2 (Kiel 1)<br/>Sony ZV-E10 + Pyro H (Wireless TX/RX)"]
        CAM3["CAM 3 (Nia)<br/>Sony A6000 + HDMI 10M (GKJ)"]
        CAM4["CAM 4 (Ferdy)<br/>Sony A6000 + HDMI 10M (UKK)"]
    end

    subgraph SwitcherStation["🎛️ Video Switcher & Ingest Station"]
        Switcher["Cinetreak Cinelive V1 Switcher (OWL)"]
        SplitterVideo["HDMI Splitter 4CH (UKK/GKJ)"]
        TVMultiview["TV Multiview Monitor (Kezia)"]
        LaptopOBS["Laptop OBS Studio (Andreas)"]
    end

    CAM1 -->|Wireless RF / HDMI 1.5M| Switcher
    CAM2 -->|Wireless RF / HDMI 1.5M| Switcher
    CAM3 -->|HDMI Cable 10M| Switcher
    CAM4 -->|HDMI Cable 10M| Switcher

    Switcher -->|HDMI 1M (GIA)| TVMultiview
    Switcher -->|HDMI 1M (GIA) - PGM/AUX| SplitterVideo
    Switcher -->|USB-A to USB-C Data Cable (Andreas)| LaptopOBS
```

### 🖥️ B. Media Presentation & LED Mapping
```mermaid
graph LR
    subgraph Presentation["💻 Presentation & Visual Engine"]
        PRO1["Laptop ProPresenter 1 (Rania)"]
        PRO2["Laptop ProPresenter 2 (Filia)"]
        RES["Laptop Resolume Arena (Bayu / Andreas)"]
    end

    subgraph Processors["⚙️ Signal Processing & Ingest"]
        Splitter["HDMI Splitter 4CH (UKK/GKJ)"]
        CapOWL1["HDMI Capture (OWL)"]
        CapOWL2["HDMI Capture (OWL)"]
        CapABON["HDMI Capture (ABON)"]
        CapGKJ["HDMI Capture (GKJ)"]
        PC_UNNES["PC Display Ingest (UNNES)"]
        Nova["NovaStar Video Processor (UNNES)"]
    end

    subgraph Screens["📽️ Stage Display Outputs"]
        LED_Sides["LED Left, Right & Back (UNNES)"]
        LED_Center["LED Center Main Screen (UNNES)"]
    end

    Splitter -->|HDMI 1.5M (Andreas)| CapOWL1 --> PRO1
    PRO1 -->|HDMI 20M (UNNES)| Nova --> LED_Sides

    PRO2 -->|HDMI 1.5M (Andreas)| CapOWL2 --> RES

    Splitter -->|HDMI 1.5M (Andreas)| CapABON --> RES
    RES -->|HDMI 15M (GKJ)| CapGKJ --> PC_UNNES --> Nova --> LED_Center
```

### 🔊 C. Audio Master & Virtual Mixing Pipeline
```mermaid
graph TD
    subgraph FOHAudio["🎤 Main Audio & Ingest"]
        QL5["Mixer Yamaha QL5 (UNNES - FOH)"]
        RES_Audio["Laptop Resolume Arena (Bayu)"]
        DAC["USB-C DAC Hanason AB17X / Oraimo OAA310 (Andreas)"]
    end

    subgraph SubmixOBS["🎚️ Submix & Live Stream Ingest"]
        CT80S["Mixer NewBaxs CT80S (GIA)"]
        OBS["Laptop OBS Studio (Andreas)"]
    end

    subgraph VirtualControl["📱 Remote Virtual Mixing"]
        WiFi["Local WiFi Network (UNNES-ID)"]
        iPadVM["iPad Virtual Mixer 2 (Jennifer / Jordan & Yosua)"]
        LaptopVM["Laptop Virtual Mixer 1 (Andreas / Jordan & Yosua)"]
    end

    RES_Audio --> DAC -->|Audio Cable 20M (UNNES)| QL5
    QL5 -->|XLR 10M 2X + XLR 3M 2X (UKK)| CT80S
    CT80S -->|USB-A to USB-C + Extender 2M (Andreas)| OBS

    QL5 -.->|Network Protocol| WiFi
    WiFi -.-> iPadVM
    WiFi -.-> LaptopVM
```

### ⏱️ D. Timekeeper Engine Flow *(Sistem Terpisah)*
```mermaid
graph LR
    subgraph Timekeeper["⏱️ Timekeeper System"]
        PRO3["Laptop ProPresenter 3 (Tim Acara)"]
        TVTK["Television Monitor (Darrel)"]
    end

    PRO3 -->|HDMI to HDMI 1.5M (Lio)| TVTK
```

> [!NOTE]
> **Catatan Splitter Cadangan:** Tersedia total 3 unit HDMI Splitter di lokasi (1 Unit 4CH GKJ, 1 Unit 4CH UKK, 1 Unit 2CH GIA) lengkap dengan power adaptor masing-masing, sehingga terdapat 2 unit HDMI Splitter sebagai backup operasional.

---

## 📦 5. Master Inventory & Equipment Loan Log

<details open>
<summary><b>📦 Rincian Inventaris & Status Peminjaman (Berdasarkan ip26_pro1.txt & ip26_pro2.txt)</b></summary>

> **Legend Keterangan:**
> - `✅` = Digunakan aktif dalam System / Wiring / Routing
> - `⚠️` = Digunakan sebagian / parsial (contoh: 1/2 atau 2/4 unit)
> - `☑️` = Standby / Cadangan (tidak terpasang di jalur aktif)

### 🏢 1. Peminjaman dari OWL
- [x] Sony A6000 (2 Unit) ✅
- [x] Sony A6400 (1 Unit) ✅
- [x] Sony ZV-E10 (1 Unit) ✅
- [x] Lens 18–105mm F4 G (3 Unit) ✅
- [x] Lens 50mm Prime (1 Unit) ✅
- [x] Battery (8 Unit) & Charger (1 Pack) ✅
- [x] Memory Card 32GB (4 Unit) ✅
- [x] Cinetreak Cinelive V1 (1 Pack) + Power Adaptor MIX (1 Unit) ✅
- [x] Hollyland Pyro H Transmitter & Receiver (1 Pack) ✅
- [x] Hollyland Pyro S Transmitter & Receiver (1 Pack) ✅
- [x] Battery WIR (4 Unit) ✅
- [x] Tripod Camera Big (1 Unit) ✅
- [x] HDMI to Micro HDMI Converter (2 Unit) ✅
- [x] HDMI to Micro HDMI Cable 30CM (2 Unit) ✅
- [x] HDMI Capture (2 Unit) ✅

### 🏢 2. Peminjaman dari ABON
- [ ] HDMI Capture (2 Unit) ⚠️ *(1 Unit terpakai untuk Resolume Ingest / 1 Standby)*

### 👤 3. Peminjaman dari Andreas (Master Engine Toolkit)
- [x] USB C DAC Hanason AB17X (1 Unit) ✅
- [x] USB C DAC Oraimo OAA310 (1 Unit) ✅
- [x] USB A to USB C Data Cable (1 Unit) ✅
- [x] USB A to USB C Charge Cable (1 Unit) ✅
- [x] USB A to USB A Extender 2M (1 Unit) ✅
- [x] HDMI to HDMI Cable 1,5M (3 Unit) ✅
- [x] Terminal Cable XCH (X Unit) ✅
- [ ] Power Cable 3PIN (3 Unit) ⚠️
- [ ] Power Cable 2PIN (1 Unit) ⚠️
- [ ] Terminal Cable 4CH (3 Unit) ⚠️
- [ ] Terminal Cable 3CH (2 Unit) ⚠️
- [ ] Terminal Cable 2CH (1 Unit) ⚠️
- [ ] Terminal T (8 Unit) ⚠️
- [x] Fan Cooler (1 Unit) ☑️
- [x] Mouse Pad & Mouse Ext (1 Unit) ☑️
- [x] Keyboard Ext (1 Unit) ☑️
- [x] Powerbank (1 Unit) ☑️
- [x] Power Adaptor USB A (9 Unit), USB A x C (1 Unit), USB C (1 Unit) ☑️
- [x] USB A to USB B Data Cable (1 Unit) & USB A to Micro B (2 Unit) ☑️
- [x] USB C to USB C Charge Cable (1 Unit) ☑️
- [x] USB A to USB A Extender 30CM (2 Unit) ☑️
- [x] USB A to USB C Male Converter (4 Unit) & Female Converter (2 Unit) ☑️
- [x] USB A to Mini USB Cable (1 Unit) ☑️
- [x] USB A Splitter 3CH (1 Unit) & USB A Splitter 4CH (1 Unit) ☑️
- [x] In-Ear Monitors: QKZ Hi7T (1 Pack) & KZ EDX Pro (1 Pack) ☑️
- [x] Storage: SSD Vgen 128GB, Toshiba HDD 1TB, Flashdrives (8GB, 16GB, 32GB, 64GB) ☑️
- [x] HDMI to Mini HDMI Converter (1 Unit) & Mini HDMI to Mini HDMI 1.5M (1 Unit) ☑️
- [x] VGA to HDMI Converter (3 Unit) & VGA to VGA Cable 1.5M (1 Unit) ☑️
- [x] Toolbox Packs: Addon Box, Jack Box, Screw Box, Ties Box, Tool Box (2 Pack), Cable, Tape ☑️

### ⛪ 4. Peminjaman dari GIA Deliksari
- [x] Mixer NewBaxs CT80S (1 Unit) ✅
- [x] XLR Female to Male Cable 3M (2 Unit) ✅
- [x] USB A to USB C Data Cable (1 Unit) ✅
- [x] Tripod Camera Big (1 Unit) ✅
- [x] HDMI to HDMI Cable 1M (2 Unit) ✅
- [x] HDMI Splitter 2CH (1 Unit) & Power Adaptor SPL (1 Pack) ☑️ *(Backup Splitter)*

### ⛪ 5. Peminjaman dari GKJ Ngaliyan
- [x] HDMI Cable 15M (1 Unit) ✅
- [x] HDMI Cable 10M (1 Unit) ✅
- [x] HDMI Capture (1 Unit) ✅
- [x] Stand Lighting Small (1 Unit) ☑️
- [x] HDMI Cable 5M (1 Unit) & HDMI Cable 1.5M (1 Unit) ☑️
- [x] HDMI Splitter 4CH (1 Unit) & Power Adaptor SPL (1 Pack) ☑️ *(Backup Splitter)*

### 🏢 6. Peminjaman dari UKK UNNES
- [x] XLR Female to Male Cable 10M (3 Unit) ✅
- [ ] Stand Lighting Small (4 Unit) ⚠️ *(2/4 Unit Terpakai untuk CAM 1 & CAM 2)*
- [x] Tripod Camera Big (1 Unit) ✅
- [x] HDMI Cable 10M (1 Unit) ✅
- [ ] HDMI Cable 1,5M (4 Unit) ⚠️ *(2/4 Unit Terpakai)*
- [x] HDMI Splitter 4CH (1 Unit) & Power Adaptor SPL (1 Pack) ✅ *(Active Main Splitter)*
- [x] Terminal Cable XCH (X Unit) ✅
- [x] HDMI to Mini HDMI Cable 2,5M (1 Unit) ☑️
- [x] HDMI Cable 15M (1 Unit) ☑️
- [x] VGA to VGA Cable 1,5M & 2,5M (2 Unit) ☑️
- [x] VGA to HDMI Converter (2 Unit) ☑️
- [x] Power Cable XPIN (X Unit) ☑️

### 👥 7. Peminjaman Personal & Tim
- **Jennifer:** HP iPhone 15 (1 Unit) ✅ + TAB iPad (1 Unit) ✅
- **Lio:** HDMI Cable 1.5M (1 Unit) ✅
- **Darrel:** Television (1 Unit) ✅ + Power Adaptor TV (1 Pack) ✅ + Memory Card 8GB (1 Unit) ☑️
- **Kiel:** Sony ZV-E10 (1 Unit) ✅ + Lens Kit 16–50mm (1 Unit) ✅ + Battery (2 Unit) ✅ + Charger (1 Pack) ✅ + Memory Card 64GB (1 Unit) ✅ + Lens Manual 50mm (1 Unit) ☑️ + Memory Card 128GB (1 Unit) ☑️ + Laptop Backup Station ✅
- **Joel:** Sony A6600 (1 Unit) ✅ + Lens Zeiss 24–70mm (1 Unit) ✅ + Battery (2 Unit) ✅ + Charger (1 Pack) ✅ + Memory Card 64GB (1 Unit) ✅ + Gimbal DJI Ronin RS3 (1 Unit) ✅
- **Kezia:** Television Multiview (1 Unit) ✅ + Power Adaptor TV (1 Pack) ✅
- **Panitia:** HDMI to Micro HDMI Converter (2 Unit) ✅ + Terminal Cable XCH (X Unit) ✅

</details>

---

## 📑 6. Rundown & Media Asset Checklist

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              MEDIA ASSET & RUNDOWN PHASES                              │
├─────────────────────────┬───────────────────────────────┬──────────────────────────────┤
│ ⏳ PRE-IBADAH           │ 🎬 MAIN IBADAH (MAIN EVENT)   │ 📦 POST-IBADAH               │
├─────────────────────────┼───────────────────────────────┼──────────────────────────────┤
│ • Playlist Rohani       │ • Video Opening               │ • Usung-Usung                │
│ • Loop Profile UKK      │ • Video Sambutan Bu Grace     │ • Demobilisasi Perlengkapan  │
│ • After Movie IP25/IN25 │ • Background Tema & Lagu      │ • Inventory Final Check      │
│                         │ • Lirik Lagu & Video Gen      │                              │
│                         │ • PPT, Ayat, & Quote          │                              │
│                         │ • Persembahan QRIS            │                              │
│                         │ • UKK News & Pokok Doa        │                              │
└─────────────────────────┴───────────────────────────────┴──────────────────────────────┘
```

| Sesi / Phase | Elemen Media & Konten | Output Target | Penanggung Jawab (PIC) | Status |
| :--- | :--- | :--- | :--- | :---: |
| **Pre-Ibadah** *(Open Gate)* | Playlist (Lagu Rohani) | Sound System *(Mixer Yamaha QL5)* | Sound Engineer & Andreas | ✅ Ready |
| | Loop Video *(Profile UKK, After Movie IP25, After Movie IN25)* | LED Tengah *(Resolume Arena)* | Andreas & Bayu | ✅ Ready |
| **Main Event** *(Ibadah)* | Video Opening | LED Tengah *(Resolume Arena)* | Andreas | ✅ Ready |
| | Video Sambutan Bu Grace | LED Tengah Kanan Kiri | Rania & Filia | ✅ Ready |
| | Background Tema | LED Tengah | Andreas | ✅ Ready |
| | Background Lagu | Sound System *(Mixer Yamaha QL5)* | Sound Engineer | ✅ Ready |
| | Lirik Lagu | LED Tengah Kanan Kiri *(ProPresenter 1 & 2)* | Rania & Filia | ✅ Ready |
| | Video Generation | LED Tengah Kanan Kiri | Andreas | ✅ Ready |
| | PPT Pembicara | LED Tengah Kanan Kiri *(ProPresenter 1)* | Rania | ✅ Ready |
| | Ayat Pembicara | LED Tengah Kanan Kiri *(ProPresenter 1 & 2)* | Filia & Rania | ✅ Ready |
| | Quote Pembicara | LED Tengah Kanan Kiri *(ProPresenter 1 & 2)* | Filia & Rania | ✅ Ready |
| | Persembahan (QRIS) | LED Tengah Kanan Kiri + OBS Stream | Rania & Andreas | ✅ Ready |
| | UKK News | LED Tengah Kanan Kiri | Filia & Rania | ✅ Ready |
| | Pokok Doa | LED Tengah Kanan Kiri | Filia & Rania | ✅ Ready |
| **Post-Ibadah** *(Close Gate)* | **Usung-Usung & Teardown** | All Storage & Returned to Owners | Seluruh Kru Produksi | ⏳ Standby |

---

## ⚡ 7. SOP Operasional & Safety Guidelines

1. **Power & Electrical Routing:**
   - Semua distribusi daya terminal kabel harus menggunakan jalur aman bertanda proteksi (hindari daisy-chaining berlebih pada stopkontak utama).
   - Pastikan power adaptor switcher, splitter, dan mixer terpasang pada terminal stabil dengan cadangan port.
2. **Signal & Wireless Frequency Sync:**
   - Sambungkan transmitter Hollyland Pyro S (CAM 1) dan Pyro H (CAM 2) pada line-of-sight yang bebas hambatan menuju receiver station di samping FOH/Panggung.
   - Lakukan scanning frekuensi RF sebelum acara dimulai guna menghindari bentrokan channel dengan hotspot WiFi auditorium.
3. **Audio Gain Staging & Routing:**
   - Pastikan audio output dari Resolume Arena dialirkan melalui USB-C DAC dengan level nominal menuju channel stereo di Yamaha QL5.
   - Submix dari Yamaha QL5 menuju NewBaxs CT80S diatur pada unity gain sebelum dikirim via USB Audio ke OBS Studio.
4. **Usung-Usung & Teardown:**
   - Setiap PIC bertanggung jawab penuh atas pengecekan fisik, penggulungan kabel dengan metode over-under, dan pengembalian unit pinjaman sesuai daftar inventaris di Section 5.

---

## ⚖️ 8. License & Proprietary Notice

Blueprint dan dokumen konfigurasi ini dilindungi oleh **Proprietary & Confidential License**.
Dibuat khusus untuk keperluan teknis **Ibadah Perdana UKK UNNES 2026**. 
Dilarang menyalin, mendistribusikan ulang, atau menggunakan blueprint ini untuk keperluan komersial pihak ketiga tanpa izin tertulis dari tim produksi.

© 2026 UKK UNNES Production Team & Andreas. All Rights Reserved.
