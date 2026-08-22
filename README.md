# 🎬 Ibadah Perdana UKK UNNES 2026 — Production & Media System

<div align="center">

![Event](https://img.shields.io/badge/Event-Ibadah%20Perdana%20UKK%20UNNES%202026-blue?style=for-the-badge&logo=eventstore&logoColor=white)
![Venue](https://img.shields.io/badge/Venue-Auditorium%20UNNES-orange?style=for-the-badge&logo=google-maps&logoColor=white)
![Production](https://img.shields.io/badge/Production-Panitia%20%26%20Pelayan%20Media%202026-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/System%20Status-Ready%20%2F%20Verified%20100%25-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Internal%20Crew%20Only-red?style=for-the-badge)

<p align="center">
  <b>Dokumen Resmi Arsitektur Teknis, Routing Sinyal Siaran, Struktur Panitia vs Pelayan, Alokasi Workstation, Inventaris Gear, dan Rundown Konten Multimedia</b><br/>
</p>

</div>

---

## 📑 Daftar Isi

- [📌 Informasi Acara & Struktur Personel](#-informasi-acara--struktur-personel)
  - [1. Ringkasan Acara](#1-ringkasan-acara)
  - [2. Struktur Tim Engineering](#2-struktur-tim-engineering)
  - [3. Klasifikasi Peran: Panitia vs Pelayan](#3-klasifikasi-peran-panitia-vs-pelayan)
- [🧭 Panduan Status Indikator](#-panduan-status-indikator)
- [🎥 Sistem Kamera (Camera Systems)](#-sistem-kamera-camera-systems)
  - [1. Broadcast Camera System](#1-broadcast-camera-system)
  - [2. Documentation Camera System](#2-documentation-camera-system)
- [⚡ Arsitektur Engine System](#-arsitektur-engine-system)
  - [1. Electrical & Power Routing](#1-electrical--power-routing)
  - [2. Broadcast & Video Signal Routing](#2-broadcast--video-signal-routing)
  - [3. Audio Signal & Mixing System](#3-audio-signal--mixing-system)
  - [4. Time Keeper System](#4-time-keeper-system)
  - [5. Catatan Arsitektur Splitter](#5-catatan-arsitektur-splitter)
- [💻 Media System Device & Alokasi Operator](#-media-system-device--alokasi-operator)
- [📦 Master Inventory & Equipment Loan Directory](#-master-inventory--equipment-loan-directory)
- [📋 Rundown Konten & Tampilan Layar](#-rundown-konten--tampilan-layar)
- [📜 Hak Cipta & Lisensi](#-hak-cipta--lisensi)

---

## 📌 Informasi Acara & Struktur Personel

### 1. Ringkasan Acara

| Parameter | Keterangan |
| :--- | :--- |
| **Nama Acara** | Ibadah Perdana UKK UNNES 2026 |
| **Lokasi** | Gedung Auditorium Universitas Negeri Semarang (UNNES) |
| **Pelaksana Produksi** | Panitia Ibadah Perdana 2026 & Tim Pelayan Divisi Multimedia |
| **Target Output** | Multi-Screen LED (Center, Left, Right, Back Stage), Live Streaming OBS, dan FOH Sound System |

### 2. Struktur Tim Engineering & Klasifikasi Peran

```
                             ┌───────────────────────────────────┐
                             │    IBADAH PERDANA UNNES 2026      │
                             └─────────────────┬─────────────────┘
                                               │
         ┌─────────────────────────────────────┼─────────────────────────────────────┐
         │                                     │                                     │
         ▼                                     ▼                                     ▼
┌───────────────────────┐             ┌───────────────────────┐             ┌───────────────────────┐
│ SYSTEM ENGINEER       │             │ MEDIA ENGINEER        │             │ CREATIVE ENGINEER     │
│ (Pelayan)             │             │ (Panitia)             │             │ (Panitia)             │
├───────────────────────┤             ├───────────────────────┤             ├───────────────────────┤
│ • Andreas (Leader)    │             │ • Richard (Leader)    │             │ • Jennifer (Leader)   │
│                       │             │ • Wilfred             │             │ • Filia               │
│                       │             │ • Alex                │             │ • Felani              │
│                       │             │ • Rania               │             │ • Wike                │
└───────────────────────┘             └───────────────────────┘             └───────────────────────┘
```

### 3. Klasifikasi Tim & Personel
* **🏛️ Panitia (Committee):**
  * **Media Engineer:** Richard *(Leader)*, Wilfred, Alex, Rania
  * **Creative Engineer:** Jennifer *(Leader)*, Filia, Felani, Wike
  * **Divisi Acara:** Tim Acara
* **✨ Pelayan (Ministry Servant / Field Operator):**
  * **System Engineer:** Andreas *(Leader)*
  * **Broadcast & Doc Crew:** Kiel 1, Nia, Ferdy, Nico, Joel
  * **Audio FOH & Live Crew:** Jordan, Yosua

---

## 🧭 Panduan Status Indikator

| Simbol | Status | Definisi Operasional |
| :---: | :--- | :--- |
| `✅` | **Terverifikasi & Aktif** | Barang telah terverifikasi dan terpasang aktif di sistem/routing utama. |
| `⚠️` | **Perhatian / Sebagian / Pending** | Barang dipakai sebagian (disertai rasio pemakaian, contoh: `2/4`) atau workstation berstatus *Belum Ada*. |
| `☑️` | **Standby / Backup** | Barang tersedia di inventaris/storage sebagai unit cadangan (tidak tersambung aktif). |

---

## 🎥 Sistem Kamera (Camera Systems)

### 1. Broadcast Camera System
*Menjadi satu kesatuan sistem dengan Engine System.* Terintegrasi langsung ke Video Switcher (*Cinetreak Cinelive V1*) untuk produksi siaran langsung (*multicam live production*).

```mermaid
flowchart TD
    subgraph CAMERAS["Broadcast Cameras"]
        CAM1["CAM 1 - Alex (Wireless + Fixed)<br/>Sony ZVE10 (Kiel 1) + Lens 18-105mm (OWL)"]
        CAM2["CAM 2 - Kiel 1 (Wireless + Mobile)<br/>Sony ZV-E10 (OWL) + Lens 18-105mm (OWL)"]
        CAM3["CAM 3 - Nia (Wired + Fixed)<br/>Sony A6000 (OWL) + Lens 18-105mm (OWL)"]
        CAM4["CAM 4 - Ferdy (Wired + Fixed)<br/>Sony A6000 (OWL) + Lens 16-50mm Kit (Kiel 1)"]
    end

    subgraph TRANSMISSION["Transmission Layer"]
        TX1["Hollyland Pyro S TX (OWL)"]
        RX1["Hollyland Pyro S RX (OWL)"]
        TX2["Hollyland Pyro H TX (OWL)"]
        RX2["Hollyland Pyro H RX (OWL)"]
        CONV3["Micro HDMI Conv (OWL) + HDMI 10M (GKJ)"]
        CONV4["Micro HDMI Conv (OWL) + HDMI 10M (UKK)"]
    end

    subgraph ENGINE["Broadcast Core Switcher"]
        SWITCHER["Cinetreak Cinelive V1 (OWL)<br/>Video Switcher"]
    end

    CAM1 --> TX1 -. Wireless .-> RX1 -->|HDMI 1.5M UKK| SWITCHER
    CAM2 --> TX2 -. Wireless .-> RX2 -->|HDMI 1.5M UKK| SWITCHER
    CAM3 --> CONV3 --> SWITCHER
    CAM4 --> CONV4 --> SWITCHER
```

| ID Kamera | Konfigurasi Rig & Kepemilikan Barang | PIC Operator | Status Personel | Tipe Jalur | Status |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **CAM 1** | Sony ZVE10 (Kiel 1) + Lens 18-105MM (OWL) + Battery (Kiel 1) + Memory Card 64GB (Kiel 1) + Tripod Camera Big (OWL) + HDMI to Micro HDMI Cable 30CM (OWL) + Hollyland Pyro S Transmitter (OWL) + Battery WIR (OWL) + Hollyland Pyro S Receiver (OWL) + Battery WIR (OWL) + Stand Lighting Small (UKK) + HDMI Cable 1,5M (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) | **Alex** | 🏛️ Panitia | Wireless + Fixed | `✅` |
| **CAM 2** | Sony ZV-E10 (OWL) + Lens 18-105MM (OWL) + Battery (OWL) + Memory Card 32GB (OWL) + HDMI to Micro HDMI Cable 30CM (OWL) + Hollyland Pyro H Transmitter (OWL) + Battery WIR (OWL) + Hollyland Pyro H Receiver (OWL) + Battery WIR (OWL) + Stand Lighting Small (UKK) + HDMI Cable 1,5M (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) | **Kiel 1** | ✨ Pelayan | Wireless + Mobile | `✅` |
| **CAM 3** | Sony A6000 (OWL) + Lens 18-105MM (OWL) + Battery (OWL) + Memory Card 32GB (OWL) + Tripod Camera Big (GIA) + Micro HDMI to HDMI Converter (OWL) + HDMI Cable 10M (GKJ) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) | **Nia** | ✨ Pelayan | Wired + Fixed | `✅` |
| **CAM 4** | Sony A6000 (OWL) + Lens 16-50MM Kit (Kiel 1) + Battery (OWL) + Memory Card 32GB (OWL) + Tripod Camera Big (UKK) + Micro HDMI to HDMI Converter (OWL) + HDMI Cable 10M (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) | **Ferdy** | ✨ Pelayan | Wired + Fixed | `✅` |
| **BACKUP**| Micro HDMI to HDMI Converter X2 (Panitia) | — | — | Backup Line | `☑️` |

---

### 2. Documentation Camera System
*Terpisah secara sistem dari Broadcast System dan Engine System.* Berfokus pada dokumentasi foto, aftermovie, dan media sosial.

```mermaid
flowchart LR
    subgraph DOC["Documentation Team"]
        PHO["CAM PHO - Nico<br/>Sony A6400 + 50mm Fix (OWL)"]
        VID["CAM VID - Joel<br/>Sony A6600 + 24-70mm + Ronin RS3 (Joel)"]
        HP["CAM HP - Jennifer<br/>iPhone 15 (Jennifer)"]
    end

    subgraph OUTPUT_DOC["Output Media"]
        STILLS["Foto Dokumentasi Acara"]
        REELS["Aftermovie & Highlight Video"]
        SOCMED["Live Story & Social Updates"]
    end

    PHO --> STILLS
    VID --> REELS
    HP --> SOCMED
```

| Unit Kamera | Konfigurasi Rig & Kepemilikan Barang | PIC Operator | Status Personel | Peran Produksi | Status |
| :--- | :--- | :--- | :---: | :--- | :---: |
| **CAM PHO** | Sony A6400 (OWL) + Sony 50MM (OWL) + Battery X2 (OWL) + Memory Card 32GB (OWL) | **Nico** | ✨ Pelayan | Foto Dokumentasi & Liputan | `✅` |
| **CAM VID** | Sony A6600 (Joel) + Lens 24-70MM Zeiss (Joel) + Battery X2 (Joel) + Memory Card 64GB (Joel) + Gimbal DJI Ronin RS3 (Joel) | **Joel** | ✨ Pelayan | Video Cinematic & Aftermovie | `✅` |
| **CAM HP** | HP Iphone 15 (Jennifer) | **Jennifer** | 🏛️ Panitia | Instant Reels, Social Media & Story | `✅` |

---

## ⚡ Arsitektur Engine System

### 1. Electrical & Power Routing
- `Terminal Cable XCH (Andreas) + Terminal Cable XCH (UKK) + Terminal Cable XCH (Panitia)` — `✅`

---

### 2. Broadcast & Video Signal Routing

```mermaid
flowchart TD
    SW["Cinetreak Cinelive V1 (OWL)<br/>Video Switcher"]
    TV_M["Television (Kezia)<br/>Multiview Monitor"]
    SPL["HDMI Splitter 4CH (UKK/GKJ)<br/>Signal Distributor"]
    OBS["Laptop OBS Studio (Andreas)<br/>Live Streaming Engine"]
    
    PRO1["Laptop Pro Presenter 1 (Rania)<br/>LED Left/Right/Back Engine"]
    RES["Laptop Resolume Arena (Andreas)<br/>Visual Mapping & Media Server"]
    
    UNNES_PC["PC UNNES<br/>Novastar Video Processor"]
    LED_LRB["LED Left, Right & Back (UNNES)"]
    LED_CTR["LED Center (UNNES)"]

    SW -->|HDMI 1M GIA| TV_M
    SW -->|HDMI 1M GIA| SPL
    SW -->|USB A-C Data Andreas| OBS

    SPL -->|HDMI 1.5M + HDMI Capture OWL| PRO1
    PRO1 -->|HDMI 20M UNNES + Novastar| LED_LRB

    PRO2["Laptop Pro Presenter 2 (Filia)"] -->|HDMI 1.5M + HDMI Capture OWL| RES
    SPL -->|HDMI 1.5M + HDMI Capture ABON| RES
    RES -->|HDMI 15M GKJ + HDMI Capture GKJ| UNNES_PC --> LED_CTR
```

| Jalur Routing Video | Konfigurasi Wiring Lengkap | Status |
| :--- | :--- | :---: |
| **Switcher ➔ TV Multiview** | Terminal Cable XCH (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) + HDMI to HDMI Cable 1M (GIA) + Television (Kezia) + Power Adaptor TV (Kezia) | `✅` |
| **Switcher ➔ Splitter** | Terminal Cable XCH (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) + HDMI to HDMI Cable 1M (GIA) + HDMI Splitter 4CH (UKK/GKJ) + Power Adaptor SPL (UKK/GKJ) | `✅` |
| **Switcher ➔ OBS Studio** | Terminal Cable XCH (UKK) + Cinetreak Cinelive V1 (OWL) + Power Adaptor MIX (OWL) + USB A to USB C Data Cable (Andreas) + Laptop (OBS Studio) + Power Adaptor LTP (OBS Studio) | `✅` |
| **Splitter ➔ PRO1 ➔ LED L/R/Back** | HDMI Splitter 4CH (UKK/GKJ) + Power Adaptor SPL (UKK/GKJ) + HDMI to HDMI Cable 1,5M (Andreas) + HDMI Capture (OWL) + Laptop (Pro Presenter 1) + Power Adaptor LTP (Pro Presenter 1) + HDMI Cable 20M (UNNES) + Novastar Video Processor (UNNES) + LED Left Right Back (UNNES) | `✅` |
| **PRO2 ➔ Resolume Arena** | Laptop (Pro Presenter 2) + Power Adaptor LTP (Pro Presenter 2) + HDMI to HDMI Cable 1,5M (Andreas) + HDMI Capture (OWL) + Laptop (Resolume Arena) + Power Adaptor LTP (Resolume Arena) | `✅` |
| **Splitter ➔ RES ➔ LED Center** | HDMI Splitter 4CH (UKK/GKJ) + Power Adaptor SPL (UKK/GKJ) + HDMI to HDMI Cable 1,5M (Andreas) + HDMI Capture (ABON) + Laptop (Resolume Arena) + Power Adaptor LTP + HDMI Cable 15M (GKJ) + HDMI Capture (GKJ) + PC (UNNES) + Novastar Video Processor (UNNES) + LED Center (UNNES) | `✅` |

---

### 3. Audio Signal & Mixing System

```mermaid
flowchart TD
    YAM["Mixer 1: Yamaha QL5 (UNNES)<br/>Main FOH Mixer (Jordan/Yosua)"]
    CT80["Mixer 2: NewBaxs CT80S (GIA)<br/>Stream Sub-Mixer (Andreas)"]
    OBS_A["Laptop OBS Studio (Andreas)<br/>Broadcast Stream Audio"]
    RES_A["Laptop Resolume Arena (Andreas)<br/>Video/BGM Audio Playback"]
    VM1["Laptop Virtual Mixer 1 (Andreas)<br/>Operator: Jordan / Yosua"]
    VM2["iPad Virtual Mixer 2 (Jennifer)<br/>Operator: Jordan / Yosua"]

    YAM -->|XLR 10M 2X UKK + XLR 3M 2X GIA| CT80
    CT80 -->|USB A-A Ext 2M + USB A-C Data GIA| OBS_A
    RES_A -->|USB C DAC Hanason/Oraimo + Audio Cable 20M UNNES| YAM
    YAM -. WiFi UNNES-ID .-> VM1
    YAM -. WiFi UNNES-ID .-> VM2
```

| Jalur Audio | Konfigurasi Wiring & Antarmuka | Status |
| :--- | :--- | :---: |
| **Mixer 1 (FOH) ➔ Mixer 2 ➔ OBS** | Mixer Yamaha QL5 (UNNES) + XLR Female to Male Cable 10M 2X (UKK) + XLR Female to Male Cable 3M 2X (GIA) + Mixer NewBaxs CT80S (GIA) + USB A to USB A Extender 2M (Andreas) + USB A to USB C Data Cable (GIA) + Laptop (OBS Studio) + Power Adaptor LTP (OBS Studio) | `✅` |
| **Resolume (Playback) ➔ Mixer 1** | Laptop (Resolume Arena) + Power Adaptor LTP (Resolume Arena) + USB C DAC Hanason AB17X / USB C DAC Oraimo OAA310 (Andreas) + Audio Cable 20M (UNNES) + Mixer Yamaha QL5 (UNNES) | `✅` |
| **Mixer 1 ➔ Virtual Mixer 1** | Mixer Yamaha QL5 (UNNES) + WiFi (UNNES-ID) + Laptop (Virtual Mixer 1) + Power Adaptor LTP (Virtual Mixer 1) | `✅` |
| **Mixer 1 ➔ Virtual Mixer 2** | Mixer Yamaha QL5 (UNNES) + WiFi (UNNES-ID) + iPad (Virtual Mixer 2) | `✅` |

---

### 4. Time Keeper System
*Terpisah secara sistem dari Broadcast System dan Engine System.*
- `Terminal Cable XCH (UKK) + Laptop (Pro Presenter 3) + Power Adaptor LTP (Pro Presenter 3) + HDMI to HDMI Cable 1.5M (Lio) + Television (Darrel) + Power Adaptor TV (Darrel)` — `✅` *(Operator: Tim Acara - 🏛️ Panitia)*

---

### 5. Catatan Arsitektur Splitter
Terdapat total **3 Unit HDMI Splitter**:
1. **GKJ Ngaliyan:** 1 Unit HDMI Splitter 4CH + Power Adaptor SPL
2. **UKK UNNES:** 1 Unit HDMI Splitter 4CH + Power Adaptor SPL
3. **GIA Deliksari:** 1 Unit HDMI Splitter 2CH + Power Adaptor SPL
*(Tersedia 2 unit splitter aktif sebagai unit cadangan/backup).*

---

## 💻 Media System Device & Alokasi Operator

| Perangkat / Posisi | Hardware & Kepemilikan Barang | Operator (PIC) | Status Personel | Status Kesiapan |
| :--- | :--- | :--- | :---: | :---: |
| **Mixer 1 (FOH Console)** | Yamaha QL5 (UNNES) | Jordan / Yosua | ✨ Pelayan | `✅` Terpasang |
| **Mixer 2 (Sub-Mixer Stream)**| NewBaxs CT80S (GIA) | Andreas | ✨ Pelayan | `✅` Terpasang |
| **Virtual Mixer 1** | Laptop + Power Adaptor LTP (Andreas) | Jordan / Yosua | ✨ Pelayan | `✅` Terpasang |
| **Virtual Mixer 2** | iPad (Jennifer) | Jordan / Yosua | ✨ Pelayan | `✅` Terpasang |
| **Resolume Arena** | Laptop + Power Adaptor LTP (Bayu) | Andreas | ✨ Pelayan | `✅` Terpasang |
| **Pro Presenter 1 (LED L/R/Back)**| Laptop + Power Adaptor LTP *(Belum Ada)* | Rania | 🏛️ Panitia | `⚠️` Belum Ada |
| **Pro Presenter 2 (Lirik & Ayat)** | Laptop + Power Adaptor LTP *(Belum Ada)* | Filia | 🏛️ Panitia | `⚠️` Belum Ada |
| **Pro Presenter 3 + Television** | Laptop X + Power Adaptor LTP *(Belum Ada)* + TV + Power Adaptor TV (Darrel) | Acara (Tim Acara) | 🏛️ Panitia | `⚠️` Belum Ada |
| **Switcher + Television** | Cinetreak Cinelive V1 + Power Adaptor MIX (OWL) + TV + Power Adaptor TV (Kezia) | Wilfred | 🏛️ Panitia | `✅` Terpasang |
| **OBS Studio (Live Stream)** | Laptop X + Power Adaptor LTP *(Belum Ada)* | Andreas | ✨ Pelayan | `⚠️` Belum Ada |
| **Backup Workstation** | Laptop + Power Adaptor LTP (Kiel 1) | Kiel 1 | ✨ Pelayan | `✅` Standby |

---

## 📦 Master Inventory & Equipment Loan Directory

<details open>
<summary><b>1. Peminjaman dari OWL (17 Item)</b></summary>

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
</details>

<details>
<summary><b>2. Peminjaman dari ABON (1 Item)</b></summary>

- HDMI Capture (2 Unit) `⚠️ 1/2`
</details>

<details>
<summary><b>3. Peminjaman dari Andreas (49 Item)</b></summary>

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
</details>

<details>
<summary><b>4. Peminjaman dari GIA Deliksari (7 Item)</b></summary>

- Mixer NewBaxs CT80S `✅`
- XLR Female to Male Cable 3M (2 Unit) `✅`
- USB A to USB C Data Cable (1 Unit) `✅`
- Tripod Camera Big (1 Unit) `✅`
- HDMI Splitter 2CH (1 Unit) `☑️`
- Power Adaptor SPL (1 Pack) `☑️`
- HDMI to HDMI Cable 1M (2 Unit) `✅`
</details>

<details>
<summary><b>5. Peminjaman dari GKJ Ngaliyan (8 Item)</b></summary>

- Stand Lighting Small (1 Unit) `☑️`
- HDMI Cable 15M (1 Unit) `✅`
- HDMI Cable 10M (1 Unit) `✅`
- HDMI Cable 5M (1 Unit) `☑️`
- HDMI Cable 1,5M (1 Unit) `☑️`
- HDMI Capture (1 Unit) `✅`
- HDMI Splitter 4CH (1 Unit) `☑️`
- Power Adaptor SPL (1 Pack) `☑️`
</details>

<details open>
<summary><b>6. Peminjaman dari UKK UNNES (14 Item)</b></summary>

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
</details>

<details>
<summary><b>7. Peminjaman dari Lio (1 Item)</b></summary>

- HDMI Cable 1,5M (1 Unit) `✅`
</details>

<details>
<summary><b>8. Peminjaman dari Darrel (3 Item)</b></summary>

- Television (1 Unit) `✅`
- Power Adaptor TV (1 Pack) `✅`
- Memory Card 8GB (1 Unit) `☑️`
</details>

<details>
<summary><b>9. Peminjaman dari Kiel 1 (7 Item)</b></summary>

- Sony ZVE10 (1 Unit) `✅`
- Lens 16-50MM Kit (1 Unit) `✅`
- Lens 50MM Fix (1 Unit) `☑️`
- Battery (2 Unit) `✅`
- Charger (1 Pack) `✅`
- Memory Card 64GB (1 Unit) `✅`
- Memory Card 128GB (1 Unit) `☑️`
</details>

<details>
<summary><b>10. Peminjaman dari Joel (6 Item)</b></summary>

- Sony A6600 (1 Unit) `✅`
- Lens 24-70MM Zeiss (1 Unit) `✅`
- Battery (2 Unit) `✅`
- Charger (1 Pack) `✅`
- Memory Card 64GB (1 Unit) `✅`
- Gimbal DJI Ronin RS3 (1 Unit) `✅`
</details>

<details>
<summary><b>11. Peminjaman dari Kezia (2 Item)</b></summary>

- Television (1 Unit) `✅`
- Power Adaptor TV (1 Pack) `✅`
</details>

<details>
<summary><b>12. Peminjaman dari Jennifer (2 Item)</b></summary>

- HP Iphone 15 (1 Unit) `✅`
- TAB iPad (1 Unit) `✅`
</details>

<details>
<summary><b>13. Peminjaman dari Panitia (2 Item)</b></summary>

- HDMI to Micro HDMI Converter (2 Unit) `✅`
- Terminal Cable XCH (X Unit) `✅`
</details>

---

## 📋 Rundown Konten & Tampilan Layar

Distribusi penayangan konten multimedia per 3 sesi acara:

### 1. Pre Ibadah (Open Gate)
- **Playlist (Lagu Rohani):** FOH Sound System
- **Loop Video (Profile UKK, After Movie IP25, After Movie IN25):** LED Tengah

### 2. Main Ibadah (Main Event)
- **Video Opening:** LED Tengah
- **Video Sambutan Bu Grace:** LED Tengah, Kanan & Kiri
- **Background Tema:** LED Tengah
- **Background Lagu:** FOH Sound System
- **Lirik Lagu:** LED Tengah, Kanan & Kiri
- **Video Generation:** LED Tengah, Kanan & Kiri
- **PPT Pembicara:** LED Tengah, Kanan & Kiri
- **Ayat Pembicara:** LED Tengah, Kanan & Kiri
- **Quote Pembicara:** LED Tengah, Kanan & Kiri
- **Persembahan (QRIS):** LED Tengah, Kanan & Kiri
- **UKK News:** LED Tengah, Kanan & Kiri
- **Pokok Doa:** LED Tengah, Kanan & Kiri

### 3. Post Ibadah (Close Gate)
- **Usung-Usung & De-rigging:** Loading barang, checklist packing kembali, dan pengembalian gear.

---

## 📜 Hak Cipta & Lisensi

Dokumen dan konfigurasi teknis ini dilindungi di bawah lisensi **Internal Operational & Production Crew License**. Akses publik disediakan khusus untuk kemudahan koordinasi tim dan crew divisi media Ibadah Perdana UKK UNNES 2026. Lihat file [LICENSE](LICENSE) untuk detail lengkap.

---

<div align="center">
  <b>Panitia Ibadah Perdana UKK UNNES 2026 & Tim Pelayan Multimedia</b><br/>
  <i>Divisi Media, Broadcast & Multimedia Production</i>
</div>
