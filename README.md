# 🎥 Ibadah Perdana UKK UNNES 2026 — Production & Technical Master Guide

<div align="center">

[![Live Web Portal](https://img.shields.io/badge/Live%20Portal-Master%20Command-brightgreen?style=for-the-badge&logo=githubpages&logoColor=white)](https://zzdree.github.io/ip26-production/)
[![Live SATSET Mobile](https://img.shields.io/badge/Live%20Mobile-⚡%20SATSET%20Checklist-orange?style=for-the-badge&logo=fastapi&logoColor=white)](https://zzdree.github.io/ip26-production/satset.html)
[![Event](https://img.shields.io/badge/Event-IP26%20UKK%20UNNES-007ACC?style=for-the-badge&logo=eventstore&logoColor=white)](#)
[![Venue](https://img.shields.io/badge/Venue-Auditorium%20UNNES-critical?style=for-the-badge&logo=googlemaps&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge&logo=checkmarx&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-Private%20%26%20Confidential-red?style=for-the-badge&logo=lock&logoColor=white)](./LICENSE)

<br/>

[![Visual](https://img.shields.io/badge/Visual-Resolume%20Arena-orange?style=flat-square&logo=adobeaftereffects&logoColor=white)](#)
[![Lyrics](https://img.shields.io/badge/Lyrics-ProPresenter%207-blue?style=flat-square)](#)
[![Stream](https://img.shields.io/badge/Stream-OBS%20Studio-302E31?style=flat-square&logo=obsstudio&logoColor=white)](#)
[![Switcher](https://img.shields.io/badge/Switcher-Cinetreak%20Cinelive%20V1-blueviolet?style=flat-square)](#)
[![Audio FOH](https://img.shields.io/badge/FOH%20Audio-Yamaha%20QL5-555555?style=flat-square)](#)
[![Audio Submix](https://img.shields.io/badge/Sub--Mixer-NewBaxs%20CT80S-grey?style=flat-square)](#)
[![Camera](https://img.shields.io/badge/Camera-Sony%20Alpha%20%26%20ZV--E10-000000?style=flat-square&logo=sony&logoColor=white)](#)
[![Wireless](https://img.shields.io/badge/Wireless%20TX%2FRX-Hollyland%20Pyro-008080?style=flat-square)](#)

</div>

> **Dokumentasi Terpadu Arsitektur Sistem Produksi, Manajemen Inventaris, Routing Audio-Visual, Diagram Sinyal Master & Sub-Sistem, Serta Eksekusi Multimedia Ibadah Perdana UKK UNNES 2026.**

---

## 📌 Repository Live Deployments & Overview

| Akses Web | URL Live | Keterangan & Peruntukan |
| :--- | :--- | :--- |
| 🌐 **Master Command Portal** | [https://zzdree.github.io/ip26-production/](https://zzdree.github.io/ip26-production/) | Portal lengkap seluruh arsitektur sistem, 8 diagram sinyal, tabel detail 154 logistik, device matrix, & rundown. |
| ⚡ **SATSET Lapangan (Mobile)** | [https://zzdree.github.io/ip26-production/satset.html](https://zzdree.github.io/ip26-production/satset.html) | Mode khusus smartphone kru hari H. Kartu taktis berbasis nama barang untuk centang cepat *Pasang (Loading-In)* & *Kemas (Packing-Out)*. |

| Atribut | Keterangan |
| :--- | :--- |
| **Event** | Ibadah Perdana UKK UNNES 2026 |
| **Venue** | Gedung Auditorium Universitas Negeri Semarang (UNNES) |
| **Organizer / Production** | Panitia Ibadah Perdana 2026 |
| **License** | **Private & Confidential** (Internal Production & Technical Team Use Only) |
| **Repository Topics** | `live-production`, `broadcast-system`, `multimedia`, `resolume-arena`, `propresenter`, `obs-studio`, `audio-engineering`, `video-routing`, `ukk-unnes`, `live-streaming` |

### 📝 Short Description (About)
> *Master documentation & technical pipeline for IP26 Live Broadcast & Multimedia Production at Auditorium UNNES — covering camera routing, audio sub-mixing, LED video processing, inventory tracking, and rundown execution.*

---

## 💻 Web Command Portal Architecture & Dual-Mode Operations

Portal web interaktif ini dibangun sebagai pusat komando operasional seluruh tim produksi di lapangan:

### 1. 🌐 Master Command Portal (`/index.html`)
- **Zero-Build Architecture:** Dibangun murni menggunakan **Vanilla HTML5, Modern CSS3, dan ES6+ JavaScript** tanpa ketergantungan framework/build tool berat.
- **Dynamic Transparent Mermaid 10.9.1 Engine:** 8 diagram alur sinyal adaptif tema (Dark/Light) yang di-cache secara kebal (*immutable*) bebas error.
- **Mobile Responsive Drawer & Dock:** Tata letak responsif penuh untuk ponsel pintar (S24 FE, iPhone, dll) dilengkapi backdrop drawer navigasi dan bottom dock.
- **Tabel Detail 154 Logistik:** Inventaris lengkap terbagi dalam 14 vendor peminjaman dengan status dan jalur penggunaan teknis.

### 2. ⚡ SATSET Lapangan Khusus Mobile (`/satset.html`)
- **Touch-First Tactile Cards:** Setiap barang ditampilkan dalam kartu individual berbasis nama barang dengan 2 tombol sentuh besar (48px) untuk **📦 PASANG (Loading-In)** dan **🧳 KEMAS (Packing-Out)**.
- **Desktop Access Rejection Guard:** Akses dari layar desktop (> 768px) otomatis diblokir dengan tampilan edukatif + **Live QR Code** untuk di-scan kru ke smartphone mereka, serta tombol *Simulator Frame Mobile*.
- **Realtime Multi-Device Sync (Supabase PostgreSQL):** Perubahan centang oleh satu kru langsung tersinkronisasi instan ke seluruh layar HP kru lain via WebSockets CDC tanpa refresh.
- **Live Presence & Crew Identity:** Menampilkan jumlah kru online secara langsung dan merekam identitas kru (Andreas, Kiel 1, Darrel, Joel, Kezia, Jennifer, Lio, dll) beserta cap waktu (*timestamp*) pada setiap centangan.
- **Instant WhatsApp Report:** Tombol "📋 Salin Ringkasan" untuk mengekspor status pasang/kemas ke format teks siap kirim ke grup WhatsApp.
- **Anti-Pause Supabase Keep-Alive:** Otomasi GitHub Actions cron (`0 0,12 * * *`) 2x sehari untuk mencegah database Supabase tertidur (*pause*) akibat aturan inaktivitas 7 hari.

---

## 👥 Struktur Organisasi & Komando Produksi

```mermaid
flowchart TD
    A["👑 Production Lead / System Engineer<br/><b>Andreas</b>"] --> B["🎬 Media Engineer<br/><b>Richard (Leader)</b>"]
    A --> C["🎨 Creative Engineer<br/><b>Jennifer (Leader)</b>"]
    
    B --> B1["Wilfred — Video Switcher Master"]
    B --> B2["Alex — Operator CAM 1 Wireless"]
    B --> B3["Rania — Operator ProPresenter 1 (Side & Back LED)"]
    
    C --> C1["Filia — Operator ProPresenter 2 (Center Lyrics/Layer)"]
    C --> C2["Felani — Creative Support"]
    C --> C3["Wike — Creative Support"]
```

### 1. System Engineer (Pelayan)
- **Andreas** (Leader / System Architect)

### 2. Media Engineer (Panitia)
- **Richard** (Leader)
- **Wilfred**
- **Alex**
- **Rania**

### 3. Creative Engineer (Panitia)
- **Jennifer** (Leader)
- **Filia**
- **Felani**
- **Wike**

> [!NOTE]
> **Prinsip & Aturan Penugasan Tim:**
> - Panitia dapat bertindak sebagai pelayan teknis.
> - Pelayan belum tentu bagian dari kepanitiaan struktural.
> - PIC ada yang berstatus panitia dan ada yang berstatus pelayan teknis.
> - PIC yang bukan panitia secara fungsional adalah pelayan teknis.
> - Seluruh PIC dan Pelayan memiliki tanggung jawab teknis yang setara di lapangan.

---

## 🗺️ MASTER ARCHITECTURE FLOWCHART

Diagram berikut menggambarkan **keseluruhan ekosistem teknis terintegrasi** yang mencakup input video kamera, switching, pemrosesan visual LED (ProPresenter & Resolume), distribusi audio digital & analog, kontrol nirkabel FOH, hingga streaming OBS dan monitor panggung.

```mermaid
flowchart TB
    %% SECTION: CAMERA INPUTS
    subgraph S_CAM["🎥 1. CAMERA ACQUISITION"]
        CAM1["CAM 1 (Alex)<br/>Sony ZVE10 + Pyro S TX"]
        CAM2["CAM 2 (Kiel 1)<br/>Sony ZV-E10 + Pyro H TX"]
        CAM3["CAM 3 (Nia)<br/>Sony A6000 + HDMI 10M"]
        CAM4["CAM 4 (Ferdy)<br/>Sony A6000 + HDMI 10M"]
    end

    %% SECTION: VIDEO SWITCHING & MONITORING
    subgraph S_SW["🎛️ 2. BROADCAST SWITCHING & MULTIVIEW"]
        RX1["Pyro S RX (UKK Stand)"]
        RX2["Pyro H RX (UKK Stand)"]
        SW["Master Switcher<br/><b>Cinetreak Cinelive V1</b><br/>(Wilfred)"]
        TV_MV["Television Multiview<br/>(Kezia)"]
        SPL["HDMI Splitter 4CH<br/>(UKK / GKJ)"]
    end

    %% SECTION: PRESENTATION & LED VIDEO PROCESSING
    subgraph S_VIS["💻 3. PRESENTATION & LED MAPPING ENGINE"]
        P1["Laptop ProPresenter 1<br/>(Rania)<br/><i>L/R/Back Visuals</i>"]
        P2["Laptop ProPresenter 2<br/>(Filia)<br/><i>Lyrics / Layers</i>"]
        RES["Laptop Resolume Arena<br/>(Andreas / Bayu)<br/><i>Center Screen Mapper</i>"]
        PC_UN["PC UNNES<br/>(Passthrough & Scale)"]
        NOVA1["Novastar Processor 1<br/>(UNNES)"]
        NOVA2["Novastar Processor 2<br/>(UNNES)"]
        LED_LR["🖥️ LED Left, Right & Back<br/>(Auditorium UNNES)"]
        LED_CTR["🖥️ LED Center Main Stage<br/>(Auditorium UNNES)"]
    end

    %% SECTION: AUDIO & STREAMING
    subgraph S_AUD["🔊 4. AUDIO ROUTING & LIVE STREAMING"]
        STAGE_MIC["Stage Mics, Instruments & Vocal"]
        QL5["Master Digital Audio Mixer<br/><b>Yamaha QL5 UNNES</b><br/>(Jordan / Yosua)"]
        VM1["Laptop Virtual Mixer 1<br/>(Andreas)"]
        VM2["iPad Virtual Mixer 2<br/>(Jennifer)"]
        DAC["USB-C DAC Hanason / Oraimo<br/>(Audio Playback Resolume)"]
        CT80S["Sub-Mix Audio Mixer<br/><b>NewBaxs CT80S GIA</b><br/>(Andreas)"]
        OBS["Live Streaming Workstation<br/><b>OBS Studio</b><br/>(Andreas)"]
    end

    %% SECTION: TIME KEEPER
    subgraph S_TK["⏱️ 5. STAGE TIME KEEPER SYSTEM"]
        P3["Laptop ProPresenter 3<br/>(Tim Acara)"]
        TV_TK["Stage Television<br/>(Darrel)"]
    end

    %% SIGNAL CONNECTIONS
    CAM1 -.->|Wireless 5GHz| RX1 -->|HDMI 1.5M| SW
    CAM2 -.->|Wireless 5GHz| RX2 -->|HDMI 1.5M| SW
    CAM3 -->|HDMI 10M GKJ| SW
    CAM4 -->|HDMI 10M UKK| SW

    SW -->|HDMI 1M GIA| TV_MV
    SW -->|USB-A to USB-C Andreas| OBS
    SW -->|HDMI 1M GIA| SPL

    SPL -->|HDMI 1.5M + Capture OWL| P1
    SPL -->|HDMI 1.5M + Capture ABON| RES
    P2 -->|HDMI 1.5M + Capture OWL| RES

    P1 -->|HDMI 20M UNNES| NOVA1 --> LED_LR
    RES -->|HDMI 15M GKJ + Capture GKJ| PC_UN --> NOVA2 --> LED_CTR

    RES -->|USB-C DAC + Audio 20M| DAC --> QL5
    STAGE_MIC --> QL5
    QL5 -.->|WiFi UNNES-ID| VM1
    QL5 -.->|WiFi UNNES-ID| VM2
    QL5 -->|2x XLR 10M UKK + 2x XLR 3M GIA| CT80S
    CT80S -->|USB Extender 2M + USB Cable GIA| OBS

    P3 -->|HDMI 1.5M Lio| TV_TK
```

---

## 🔍 DETAIL 6 SUB-SISTEM TEKNIS & SIGNAL FLOWCHARTS

---

### Sub-Flowchart 1: Sub-Sistem Kamera Wireless — CAM 1 & CAM 2

```mermaid
flowchart LR
    subgraph CAM_1["CAM 1 (Steady Wireless) — Alex"]
        C1["Sony ZVE10 Kiel 1<br/>+ Lens 18-105 OWL"] -->|Micro HDMI 30cm| TX1["Hollyland Pyro S TX"]
        TX1 -.->|Wireless 5GHz| RX1["Hollyland Pyro S RX"]
        RX1 -->|HDMI 1.5M UKK| SW_IN1["Ch 1 Switcher"]
    end

    subgraph CAM_2["CAM 2 (Mobile Wireless) — Kiel 1"]
        C2["Sony ZV-E10 OWL<br/>+ Lens 18-105 OWL"] -->|Micro HDMI 30cm| TX2["Hollyland Pyro H TX"]
        TX2 -.->|Wireless 5GHz| RX2["Hollyland Pyro H RX"]
        RX2 -->|HDMI 1.5M UKK| SW_IN2["Ch 2 Switcher"]
    end
```

#### 📖 Penjelasan Teknis Sub-Sistem Kamera Wireless:
1. **CAM 1 (Alex - Steady Wireless):** Ditempatkan pada Tripod Big OWL. Sinyal Full HD dikirim melalui transmitter nirkabel Hollyland Pyro S TX bertenaga Baterai WIR menuju Receiver Pyro S RX yang dipasang pada Stand Lighting Small UKK di dekat meja switcher, lalu dihubungkan via kabel HDMI 1.5M UKK.
2. **CAM 2 (Kiel 1 - Mobile Wireless):** Kamera bergerak (*handheld/roaming*) untuk menangkap momen dinamis jemaat dan panggung. Menggunakan transmitter Hollyland Pyro H TX/RX nirkabel berlatensi rendah dengan kabel patch Micro HDMI 30cm.

---

### Sub-Flowchart 2: Sub-Sistem Kamera Kabel / Wired — CAM 3 & CAM 4

```mermaid
flowchart LR
    subgraph CAM_3["CAM 3 (Steady Wired) — Nia"]
        C3["Sony A6000 OWL<br/>+ Lens 18-105 OWL"] -->|Micro HDMI Conv| CAB3["HDMI Cable 10M GKJ"]
        CAB3 --> SW_IN3["Ch 3 Switcher"]
    end

    subgraph CAM_4["CAM 4 (Steady Wired) — Ferdy"]
        C4["Sony A6000 OWL<br/>+ Lens 16-50 Kit Kiel 1"] -->|Micro HDMI Conv| CAB4["HDMI Cable 10M UKK"]
        CAB4 --> SW_IN4["Ch 4 Switcher"]
    end
```

#### 📖 Penjelasan Teknis Sub-Sistem Kamera Wired:
1. **CAM 3 (Nia - Steady Wired) & CAM 4 (Ferdy - Steady Wired):** Kamera posisi tetap di sisi auditorium menggunakan konverter Micro HDMI to HDMI OWL dan kabel HDMI solid 10 meter (GKJ & UKK) langsung menuju switcher tanpa dependensi sinyal frekuensi radio.
2. **Redundansi / Backup:** 2 unit Converter Micro HDMI to HDMI Panitia disiagakan di kotak perkakas untuk antisipasi kegagalan port kamera.

---

### Sub-Flowchart 3: Sub-Sistem Distribusi Video & Pemetaan LED

```mermaid
flowchart LR
    SW_OUT["Switcher Cinetreak V1"] -->|HDMI 1M| SPL4["Splitter 4CH"]
    
    SPL4 -->|Capture OWL| P1_IN["ProPresenter 1 Rania"]
    SPL4 -->|Capture ABON| RES_IN1["Resolume In 1"]
    P2_OUT["ProPresenter 2 Filia"] -->|Capture OWL| RES_IN2["Resolume In 2"]

    P1_IN -->|HDMI 20M| NOV1["Novastar 1"] --> LED_SIDE["LED Left/Right/Back"]
    RES_IN1 --> RES_OUT["Resolume Andreas"]
    RES_IN2 --> RES_OUT
    RES_OUT -->|HDMI 15M| PC_UN["PC UNNES"] --> NOV2["Novastar 2"] --> LED_MID["LED Center Main"]
```

#### 📖 Penjelasan Teknis Sub-Sistem Visual & LED:
1. **Distribusi Splitter 4CH:** Sinyal PGM dari Switcher Cinetreak dialirkan ke Splitter 4CH (UKK/GKJ) untuk diumpankan ke ProPresenter 1 (Layer Kamera Samping/Belakang) dan Resolume Arena (Layer Kamera Tengah).
2. **ProPresenter 1 (LED Samping & Belakang):** Menggabungkan video live camera feed dari Capture Card OWL dengan slide pengumuman/ayat/tema, lalu dikirim via kabel HDMI 20M UNNES ke Novastar Processor 1 untuk layar LED Kiri, Kanan, dan Belakang.
3. **ProPresenter 2 $\rightarrow$ Resolume Arena (LED Tengah):** Lirik lagu dan materi grafis dari ProPresenter 2 dialirkan via Capture Card OWL ke Resolume Arena. Resolume memadukan background dinamis, video generation, dan live camera feed.
4. **Output Resolume $\rightarrow$ Novastar 2:** Sinyal output Resolume dikirim via kabel HDMI 15M GKJ ke Capture Card GKJ di PC UNNES, lalu diteruskan ke Novastar Video Processor 2 untuk menampilkan visual panggung utama (LED Center).
5. **Cadangan Splitter:** Tersedia 1 unit Splitter 4CH GKJ dan 1 unit Splitter 2CH GIA sebagai cadangan.

---

### Sub-Flowchart 4: Sub-Sistem Audio Sub-Mixing & Streaming

```mermaid
flowchart LR
    STAGE_SRC["Stage Mics & Musik"] --> QL5_MAIN["Yamaha QL5 UNNES"]
    RES_AUDIO["Resolume Playback"] -->|USB-C DAC + Audio 20M| QL5_MAIN
    
    QL5_MAIN -.->|WiFi UNNES-ID| VM_REMOTE["VM Laptop & iPad Jennifer"]
    QL5_MAIN -->|XLR 10M + XLR 3M| CT80S_IN["NewBaxs CT80S GIA"]
    
    CT80S_IN -->|USB Data Cable| OBS_IN["OBS Studio Stream"]
    SW_CAM["Switcher Video Feed"] -->|USB Cable| OBS_IN
    
    OBS_IN --> STREAM_OUT["🚀 YouTube Live"]
```

#### 📖 Penjelasan Teknis Sub-Sistem Audio & Streaming:
1. **Master FOH Console (Yamaha QL5 UNNES):** Mengontrol seluruh input panggung (mikrofon vokal, instrumen musik, dan audio multimedia dari Resolume via USB-C DAC Hanason/Oraimo dengan kabel audio 20M).
2. **Virtual Mixing Remote:** FOH Sound Engineer (Jordan / Yosua) dapat melakukan remote fader, gain, dan EQ secara nirkabel melalui Virtual Mixer 1 (Laptop Andreas) dan Virtual Mixer 2 (iPad Jennifer) melalui WiFi UNNES-ID.
3. **Dedicated Streaming Sub-Mix (NewBaxs CT80S GIA):** Sinyal audio master dari Yamaha QL5 dikirim melalui sambungan kabel balance XLR (2x 10M UKK + 2x 3M GIA) ke Mixer NewBaxs CT80S untuk menyetel level audio streaming secara independen tanpa mempengaruhi tata suara ruangan Auditorium.
4. **Integrasi OBS Studio:** Workstation OBS menerima audio digital murni dari NewBaxs CT80S melalui USB Data + Extender 2M, serta video feed langsung dari Cinetreak V1 via USB-C.

---

### Sub-Flowchart 5: Sub-Sistem Stage Time Keeper

```mermaid
flowchart LR
    P3_LAP["Laptop ProPresenter 3<br/>Tim Acara / Time Keeper"] -->|HDMI Cable 1.5M Lio| TV_STAGE["Television Stage Darrel<br/>+ Power Adaptor Darrel"]
    PWR_UKK["Terminal Cable XCH UKK"] -.-> P3_LAP
    PWR_UKK -.-> TV_STAGE
```

#### 📖 Penjelasan Teknis Sub-Sistem Time Keeper:
- **Isolasi Sistem:** Sistem Time Keeper dirancang **100% independen** dan terpisah dari jaringan video master switcher untuk mencegah resiko *cross-feed* atau *blackout*.
- **Hardware:** Menggunakan Laptop ProPresenter 3 (Tim Acara) yang tersambung langsung ke TV Stage Darrel via kabel HDMI 1.5M Lio dan terminal daya UKK untuk menampilkan countdown timer khotbah, durasi pujian, dan penanda waktu rundown.

---

### Sub-Flowchart 6: Sub-Sistem Distribusi Daya & Grounding

```mermaid
flowchart LR
    SOURCE["⚡ Daya UNNES"] --> MAIN_PANEL["Panel Utama"]
    
    MAIN_PANEL --> T1["Terminal Andreas<br/><b>Broadcast & OBS</b>"]
    MAIN_PANEL --> T2["Terminal UKK<br/><b>Visual & Switcher</b>"]
    MAIN_PANEL --> T3["Terminal Panitia<br/><b>Audio & Stage</b>"]

    T1 --> D_BROADCAST["Laptop OBS, Charger Cam, DAC"]
    T2 --> D_VISUAL["Cinetreak, Splitter, ProPresenter, Resolume"]
    T3 --> D_AUDIO["CT80S, VM1, TV Stage, Stand Wireless"]
```

#### 📖 Penjelasan Teknis Distribusi Daya:
- Menggunakan 3 jalur terminal utama (`Terminal Cable XCH`) dari Andreas, UKK, dan Panitia untuk memisahkan beban daya perangkat audio, pemrosesan video berdaya tinggi, dan charger baterai nirkabel guna mencegah terjadinya *electrical ground loop hum* pada sistem audio.

---

## 🎥 Camera Systems & Technical Specs

### A. Broadcast Camera System (Terintegrasi ke Master Switcher)
*Status Verifikasi: ✅ Terverifikasi Penuh*

| Kamera | Mode Operasi | Rantai Perangkat & Routing Sinyal (*Hardware Path*) | PIC / Operator | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **CAM 1** | Wireless + Steady | Sony ZVE10 (Kiel 1) + Lensa 18-105MM (OWL) + Battery (Kiel 1) + Memory Card 64GB (Kiel 1) + Tripod Camera Big (OWL) + HDMI to Micro HDMI Cable 30CM (OWL) + **Hollyland Pyro S TX** (OWL) + Battery WIR (OWL) $\xrightarrow{\text{Wireless}}$ **Hollyland Pyro S RX** (OWL) + Battery WIR (OWL) + Stand Lighting Small (UKK) + HDMI Cable 1,5M (UKK) $\rightarrow$ Cinetreak Cinelive V1 (OWL) | **Alex** | ✅ |
| **CAM 2** | Wireless + Mobile | Sony ZV-E10 (OWL) + Lensa 18-105MM (OWL) + Battery (OWL) + Memory Card 32GB (OWL) + HDMI to Micro HDMI Cable 30CM (OWL) + **Hollyland Pyro H TX** (OWL) + Battery WIR (OWL) $\xrightarrow{\text{Wireless}}$ **Hollyland Pyro H RX** (OWL) + Battery WIR (OWL) + Stand Lighting Small (UKK) + HDMI Cable 1,5M (UKK) $\rightarrow$ Cinetreak Cinelive V1 (OWL) | **Kiel 1** | ✅ |
| **CAM 3** | Wired + Steady | Sony A6000 (OWL) + Lensa 18-105MM (OWL) + Battery (OWL) + Memory Card 32GB (OWL) + Tripod Camera Big (GIA) + Micro HDMI to HDMI Converter (OWL) + **HDMI Cable 10M (GKJ)** $\rightarrow$ Cinetreak Cinelive V1 (OWL) | **Nia** | ✅ |
| **CAM 4** | Wired + Steady | Sony A6000 (OWL) + Lensa 16-50MM Kit (Kiel 1) + Battery (OWL) + Memory Card 32GB (OWL) + Tripod Camera Big (UKK) + Micro HDMI to HDMI Converter (OWL) + **HDMI Cable 10M (UKK)** $\rightarrow$ Cinetreak Cinelive V1 (OWL) | **Ferdy** | ✅ |
| **BACKUP** | Spare Parts | 2x Micro HDMI to HDMI Converter (Panitia) | - | ✅ |

---

### B. Documentation Camera System (Terpisah / Standalone)
*Status Verifikasi: ✅ Terverifikasi Penuh*

| Fungsi | Rantai Perangkat (*Hardware Path*) | PIC / Operator | Status |
| :--- | :--- | :--- | :---: |
| **CAM PHO (Foto)** | Sony A6400 (OWL) + Lensa Sony 50MM (OWL) + Battery X2 (OWL) + Memory Card 32GB (OWL) | **Nico** | ✅ |
| **CAM VID (Video)** | Sony A6600 (Joel) + Lensa 24-70MM Zeiss (Joel) + Battery X2 (Joel) + Memory Card 64GB (Joel) + Gimbal DJI Ronin RS3 (Joel) | **Joel** | ✅ |
| **CAM HP (Mobile)** | iPhone 15 (Jennifer) | **Jennifer** | ✅ |

---

## 💻 Media System Device & Operator Matrix

| Device / Workstation | Alokasi Hardware | Operator / PIC | Status Verifikasi |
| :--- | :--- | :--- | :---: |
| **Mixer 1 (FOH Master)** | Yamaha QL5 (UNNES) | **Jordan / Yosua** | ✅ Terverifikasi |
| **Mixer 2 (Streaming Sub-Mix)** | NewBaxs CT80S (GIA) | **Andreas** | ✅ Terverifikasi |
| **Virtual Mixer 1** | Laptop + Power Adaptor LTP (Andreas) | **Jordan / Yosua** | ✅ Terverifikasi |
| **Virtual Mixer 2** | iPad (Jennifer) | **Jordan / Yosua** | ✅ Terverifikasi |
| **Resolume Arena** | Laptop + Power Adaptor LTP (Bayu) | **Andreas** | ✅ Terverifikasi |
| **Pro Presenter 1 (Side & Back LED)** | Laptop + Power Adaptor LTP (*Belum Ada*) | **Rania** | ⚠️ *Belum Ada Laptop* |
| **Pro Presenter 2 (Center Lyrics/Layer)** | Laptop + Power Adaptor LTP (*Belum Ada*) | **Filia** | ⚠️ *Belum Ada Laptop* |
| **Pro Presenter 3 + Television (Time Keeper)** | Laptop X (*Belum Ada*) + TV & Adaptor (Darrel) | **Tim Acara** | ⚠️ *Belum Ada Laptop* |
| **Switcher + Television (Multiview)** | Cinetreak Cinelive V1 (OWL) + TV (Kezia) | **Wilfred** | ✅ Terverifikasi |
| **OBS Studio (Live Stream Control)** | Laptop X + Power Adaptor LTP (*Belum Ada*) | **Andreas** | ⚠️ *Belum Ada Laptop* |
| **Backup Laptop** | Laptop + Power Adaptor LTP (Kiel 1) | **Kiel 1** | ✅ Standby Terverifikasi |

---

## 📦 Master Inventory & Equipment List (Full Expanded)

*Keterangan Status Inventaris:*
- `✅` = Terpakai & terpasang aktif di sistem / wiring / routing
- `⚠️` = Terpakai sebagian (contoh: 2 dari 4 unit) atau menunggu pemenuhan unit
- `☑️` = Standby / Cadangan siap pakai di storage box

---

### 1. Peminjaman dari OWL
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| Sony A6000 | 2 Unit | ✅ | CAM 3 & CAM 4 Broadcast |
| Sony A6400 | 1 Unit | ✅ | CAM PHO Dokumentasi Foto |
| Sony ZV-E10 | 1 Unit | ✅ | CAM 2 Broadcast Wireless |
| Lens 18-105MM | 3 Unit | ✅ | CAM 1, CAM 2, & CAM 3 |
| Lens 50MM | 1 Unit | ✅ | CAM PHO Dokumentasi Foto |
| Battery Kamera | 8 Unit | ✅ | 5 Unit terpakai aktif (CAM 2, 3, 4 & PHO x2), 3 Unit standby |
| Charger Kamera | 1 Pack | ✅ | Station pengisian daya baterai kamera |
| Memory Card 32GB | 4 Unit | ✅ | CAM 2, CAM 3, CAM 4, dan CAM PHO |
| Cinetreak Cinelive V1 | 1 Pack | ✅ | Video Switcher Master Broadcast |
| Power Adaptor MIX | 1 Unit | ✅ | Power Adaptor Cinetreak Cinelive V1 |
| Hollyland Pyro H | 1 Pack | ✅ | TX & RX Wireless CAM 2 Mobile |
| Hollyland Pyro S | 1 Pack | ✅ | TX & RX Wireless CAM 1 Steady |
| Battery WIR | 4 Unit | ✅ | 2 Unit Pyro S (TX/RX), 2 Unit Pyro H (TX/RX) |
| Tripod Camera Big | 1 Unit | ✅ | Tripod CAM 1 Broadcast |
| HDMI to Micro HDMI Converter | 2 Unit | ✅ | Converter CAM 3 & CAM 4 |
| HDMI to Micro HDMI Cable 30CM | 2 Unit | ✅ | CAM 1 & CAM 2 ke Hollyland TX |
| HDMI Capture | 2 Unit | ✅ | 1x Input ProPresenter 1, 1x Input Resolume dari ProPresenter 2 |

---

### 2. Peminjaman dari ABON
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| HDMI Capture | 2 Unit | ⚠️ 1/2 | 1 Unit terpakai di Input Resolume (Splitter $\rightarrow$ RES), 1 Unit standby |

---

### 3. Peminjaman dari Andreas
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| Fan Cooler | 1 Unit | ☑️ | Pendingin laptop / workstation |
| Mouse Pad | 1 Unit | ☑️ | Perlengkapan workstation |
| Keyboard External | 1 Unit | ☑️ | Kontrol tambahan |
| Mouse External | 1 Unit | ☑️ | Kontrol navigasi switcher / visual |
| Powerbank | 1 Unit | ☑️ | Daya darurat |
| Power Adaptor USB A | 9 Unit | ☑️ | Charger aksesoris / transmitter |
| Power Adaptor USB A x C | 1 Unit | ☑️ | Charger cepat dual-port |
| Power Adaptor USB C | 1 Unit | ☑️ | Charger perangkat Type-C |
| USB A to USB B Data Cable | 1 Unit | ☑️ | Cadangan koneksi printer/audio device |
| USB A to USB Micro B Data Cable | 2 Unit | ☑️ | Cadangan koneksi perangkat legacy |
| USB A to USB C Data Cable | 1 Unit | ✅ | Switcher Cinetreak $\rightarrow$ Laptop OBS Studio |
| USB A to USB C Charge Cable | 1 Unit | ☑️ | Pengisian daya |
| USB C to USB C Charge Cable | 1 Unit | ☑️ | Pengisian daya Type-C |
| USB A to USB A Extender 30CM | 2 Unit | ☑️ | Sambungan pendek port USB |
| USB A to USB A Extender 2M | 1 Unit | ✅ | Mixer NewBaxs CT80S $\rightarrow$ Laptop OBS Studio |
| USB A to USB C Male Converter | 4 Unit | ☑️ | Converter port USB-C |
| USB A to USB C Female Converter | 2 Unit | ☑️ | Adapter USB-C |
| USB A to Mini USB Cable | 1 Unit | ☑️ | Cadangan koneksi perangkat mini-USB |
| USB A Splitter 3CH | 1 Unit | ☑️ | Ekspansi port USB |
| USB A Splitter 4CH | 1 Unit | ☑️ | Ekspansi port USB |
| USB C DAC Hanason AB17X | 1 Unit | ✅ | Audio DAC Laptop Resolume $\rightarrow$ Mixer Yamaha QL5 |
| USB C DAC Oraimo OAA310 | 1 Unit | ☑️ | Cadangan Audio DAC |
| In Ear Monitor QKZ Hi7T | 1 Pack | ☑️ | Monitoring audio operator |
| In Ear Monitor KZ EDX Pro | 1 Pack | ☑️ | Monitoring audio operator |
| Fastdrive Vgen SSD 128GB | 1 Pack | ☑️ | Penyimpanan cepat materi visual |
| Fastdrive Toshiba HDD 1TB | 1 Pack | ☑️ | Penyimpanan arsip video & asset besar |
| Flashdrive Toshiba 8GB | 1 Unit | ☑️ | Transfer materi presentasi |
| Flashdrive Sandisk 16GB | 1 Unit | ☑️ | Transfer materi presentasi |
| Flashdrive Toshiba 32GB | 1 Unit | ☑️ | Backup materi video / audio |
| Flashdrive Toshiba 64GB | 1 Unit | ☑️ | Backup master file rundown |
| HDMI to Mini HDMI Converter | 1 Unit | ☑️ | Cadangan konverter video |
| Mini HDMI to Mini HDMI Cable 1,5M | 1 Unit | ☑️ | Cadangan kabel video |
| HDMI to HDMI Cable 1,5M | 3 Unit | ✅ | 1x Splitter $\rightarrow$ PRO1, 1x PRO2 $\rightarrow$ RES, 1x Splitter $\rightarrow$ RES |
| VGA to HDMI Converter | 3 Unit | ☑️ | Cadangan display legacy |
| VGA to VGA Cable 1,5M | 1 Unit | ☑️ | Cadangan monitor |
| Power Cable 3PIN | 3 Unit | ⚠️ | Kabel power PC / Monitor / Mixer |
| Power Cable 2PIN | 1 Unit | ⚠️ | Kabel power adaptor TV / Device |
| Terminal Cable 4CH | 3 Unit | ⚠️ | Distribusi colokan meja teknis |
| Terminal Cable 3CH | 2 Unit | ⚠️ | Distribusi colokan meja teknis |
| Terminal Cable 2CH | 1 Unit | ⚠️ | Distribusi colokan meja teknis |
| Terminal Cable XCH | X Unit | ✅ | Terminal utama meja kontrol |
| Terminal T | 8 Unit | ⚠️ | Percabangan colokan listrik |
| Addon Box | 1 Pack | ☑️ | Perlengkapan & tools tambahan |
| Jack Box | 1 Pack | ☑️ | Kumpulan jack audio & converter |
| Screw Box | 1 Pack | ☑️ | Baut rigging & plate kamera/tripod |
| Ties Box | 1 Pack | ☑️ | Cable ties untuk manajemen kabel |
| Tool Box | 2 Pack | ☑️ | Obeng, tang, gunting, tespen, multimeter |
| Cable Box | 1 Pack | ☑️ | Wadah manajemen cadangan kabel |
| Tape Box | 1 Pack | ☑️ | Lakban kain, isolasi hitam, double tape |

---

### 4. Peminjaman dari GIA Deliksari
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| Mixer NewBaxs CT80S | 1 Unit | ✅ | Mixer 2 (Sub-Mix Audio Streaming ke OBS) |
| XLR Female to Male Cable 3M | 2 Unit | ✅ | Output Yamaha QL5 $\rightarrow$ Input Mixer NewBaxs CT80S |
| USB A to USB C Data Cable | 1 Unit | ✅ | Mixer NewBaxs CT80S $\rightarrow$ Laptop OBS Studio |
| Tripod Camera Big | 1 Unit | ✅ | Tripod CAM 3 Broadcast |
| HDMI Splitter 2CH | 1 Unit | ☑️ | Cadangan Video Splitter |
| Power Adaptor SPL | 1 Pack | ☑️ | Power Adaptor Splitter GIA |
| HDMI to HDMI Cable 1M | 2 Unit | ✅ | 1x Switcher $\rightarrow$ TV Multiview, 1x Switcher $\rightarrow$ Splitter 4CH |

---

### 5. Peminjaman dari GKJ Ngaliyan
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| Stand Lighting Small | 1 Unit | ☑️ | Cadangan stand wireless receiver / lighting |
| HDMI Cable 15M | 1 Unit | ✅ | Output Laptop Resolume $\rightarrow$ HDMI Capture PC UNNES |
| HDMI Cable 10M | 1 Unit | ✅ | CAM 3 Wired $\rightarrow$ Switcher Cinetreak |
| HDMI Cable 5M | 1 Unit | ☑️ | Cadangan kabel HDMI jarak menengah |
| HDMI Cable 1,5M | 1 Unit | ☑️ | Cadangan kabel patch HDMI |
| HDMI Capture | 1 Unit | ✅ | Input ke PC UNNES dari Laptop Resolume |
| HDMI Splitter 4CH | 1 Unit | ☑️ | Cadangan HDMI Splitter 4 Channel |
| Power Adaptor SPL | 1 Pack | ☑️ | Power Adaptor Splitter GKJ |

---

### 6. Peminjaman dari UKK UNNES
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| XLR Female to Male Cable 10M | 3 Unit | ⚠️ 2/3 | 2 Unit Yamaha QL5 $\rightarrow$ CT80S, 1 Unit standby |
| Stand Lighting Small | 4 Unit | ⚠️ 2/4 | 1x Holder RX Pyro S (CAM 1), 1x Holder RX Pyro H (CAM 2), 2x standby |
| Tripod Camera Big | 1 Unit | ✅ | Tripod CAM 4 Broadcast |
| HDMI to Mini HDMI Cable 2,5M | 1 Unit | ☑️ | Cadangan kabel video |
| HDMI Cable 15M | 1 Unit | ☑️ | Cadangan kabel HDMI panjang |
| HDMI Cable 10M | 1 Unit | ✅ | CAM 4 Wired $\rightarrow$ Switcher Cinetreak |
| HDMI Cable 1,5M | 4 Unit | ⚠️ 2/4 | 1x Pyro S RX $\rightarrow$ Switcher, 1x Pyro H RX $\rightarrow$ Switcher, 2x standby |
| HDMI Splitter 4CH | 1 Unit | ✅ | Splitter Utama Distribusi Sinyal Switcher |
| Power Adaptor SPL | 1 Pack | ✅ | Power Adaptor Splitter UKK |
| VGA to VGA Cable 1,5M | 1 Unit | ☑️ | Cadangan kabel monitor |
| VGA to VGA Cable 2,5M | 1 Unit | ☑️ | Cadangan kabel monitor |
| VGA to HDMI Converter | 2 Unit | ☑️ | Cadangan converter display |
| Power Cable XPIN | X Unit | ☑️ | Cadangan kabel power |
| Terminal Cable XCH | X Unit | ✅ | Distribusi listrik panggung & FOH |

---

### 7. Peminjaman dari Lio
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| HDMI Cable 1,5M | 1 Unit | ✅ | Laptop ProPresenter 3 $\rightarrow$ Television Time Keeper |

---

### 8. Peminjaman dari Darrel
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| Television | 1 Unit | ✅ | Monitor Stage Time Keeper |
| Power Adaptor TV | 1 Pack | ✅ | Power Adaptor TV Time Keeper |
| Memory Card 8GB | 1 Unit | ☑️ | Penyimpanan file cadangan |

---

### 9. Peminjaman dari Kiel 1
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| Sony ZVE10 | 1 Unit | ✅ | CAM 1 Broadcast Wireless |
| Lens 16-50MM Kit | 1 Unit | ✅ | CAM 4 Broadcast Wired |
| Lens 50MM Fix | 1 Unit | ☑️ | Cadangan lensa portrait/low-light |
| Battery Kamera | 2 Unit | ✅ | 1 Unit di CAM 1, 1 Unit standby |
| Charger Kamera | 1 Pack | ✅ | Pengisian daya baterai |
| Memory Card 64GB | 1 Unit | ✅ | CAM 1 Broadcast |
| Memory Card 128GB | 1 Unit | ☑️ | Cadangan storage resolusi tinggi |
| Laptop + Adaptor LTP | 1 Unit | ✅ | Laptop Cadangan Operasional (Backup Workstation) |

---

### 10. Peminjaman dari Joel
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| Sony A6600 | 1 Unit | ✅ | CAM VID Dokumentasi Video |
| Lens 24-70MM Zeiss | 1 Unit | ✅ | Lensa utama CAM VID Dokumentasi |
| Battery Kamera | 2 Unit | ✅ | Baterai CAM VID Dokumentasi |
| Charger Kamera | 1 Pack | ✅ | Pengisian daya baterai |
| Memory Card 64GB | 1 Unit | ✅ | CAM VID Dokumentasi Video |
| Gimbal DJI Ronin RS3 | 1 Unit | ✅ | Stabilizer pergerakan dinamis CAM VID |

---

### 11. Peminjaman dari Kezia
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| Television | 1 Unit | ✅ | Monitor Multiview Switcher Broadcast |
| Power Adaptor TV | 1 Pack | ✅ | Power Adaptor TV Multiview |

---

### 12. Peminjaman dari Jennifer
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| HP Iphone 15 | 1 Unit | ✅ | CAM HP Dokumentasi Live Reels/Story/Sosmed |
| TAB iPad | 1 Unit | ✅ | iPad Virtual Mixer 2 (Remote Audio Mixing FOH) |

---

### 13. Peminjaman dari Panitia
| Nama Barang | Jumlah | Status | Keterangan Penggunaan |
| :--- | :---: | :---: | :--- |
| HDMI to Micro HDMI Converter | 2 Unit | ✅ | Backup Converter CAM 3 & CAM 4 |
| Terminal Cable XCH | X Unit | ✅ | Distribusi listrik jalur utama |

---

### 14. Fasilitas & Perangkat Gedung Auditorium UNNES
| Nama Barang / Fasilitas | Status | Keterangan Penggunaan |
| :--- | :---: | :--- |
| Mixer Yamaha QL5 | ✅ | Master Digital Console Audio FOH |
| WiFi UNNES-ID | ✅ | Jaringan kontrol nirkabel Virtual Mixer 1 & 2 |
| Audio Cable 20M | ✅ | Jalur audio Resolume BGM $\rightarrow$ Mixer Yamaha QL5 |
| HDMI Cable 20M | ✅ | Laptop ProPresenter 1 $\rightarrow$ Novastar Video Processor 1 |
| Novastar Video Processor 1 & 2 | ✅ | Processor pemetaan resolusi LED Kiri/Kanan/Belakang & Tengah |
| PC UNNES | ✅ | PC passthrough display input Resolume $\rightarrow$ Novastar 2 |
| LED Center Screen | ✅ | Layar LED panggung utama tengah |
| LED Left, Right, & Back Screens | ✅ | Layar LED panggung sayap kiri, kanan, dan belakang |

---

## 📋 Rundown & Visual Screen Mapping Matrix

| Sesi Acara | Item Materi / Konten | Output Target Layar & Audio | Penanggung Jawab |
| :--- | :--- | :--- | :--- |
| **Pre-Ibadah**<br>*(Open Gate)* | • Playlist Lagu Rohani<br>• Loop Video (Profile UKK, After Movie IP25, After Movie IN25) | Sound System FOH (Yamaha QL5)<br>LED Screen Tengah | Media Engineer & FOH Team |
| **Main Ibadah**<br>*(Main Event)* | • Video Opening Ibadah<br>• Video Sambutan Pembina (Bu Grace)<br>• Background Tema Ibadah<br>• Background Musik / Pujian<br>• Lirik Lagu Pujian & Penyembahan<br>• Video Generation<br>• Slide PPT Pembicara Firman<br>• Ayat Firman Pembicara<br>• Quote / Poin Khotbah<br>• Slide Persembahan (Barcode QRIS)<br>• Video / Slide UKK News<br>• Slide Pokok Doa Syafaat | LED Tengah<br>LED Tengah, Kiri, Kanan, & Belakang<br>LED Tengah<br>Sound System FOH (Yamaha QL5)<br>LED Tengah, Kiri, Kanan, & Belakang<br>LED Tengah, Kiri, Kanan, & Belakang<br>LED Tengah, Kiri, Kanan, & Belakang<br>LED Tengah, Kiri, Kanan, & Belakang<br>LED Tengah, Kiri, Kanan, & Belakang<br>LED Tengah, Kiri, Kanan, & Belakang<br>LED Tengah, Kiri, Kanan, & Belakang<br>LED Tengah, Kiri, Kanan, & Belakang | Operator ProPresenter 1 & 2,<br>Resolume Arena, Switcher,<br>serta Audio Engineer |
| **Post-Ibadah**<br>*(Close Gate)* | • Usung-usung & Rolling Kabel Sistem<br>• Re-Check Inventory & Safe Storage Packing | Area Auditorium UNNES | Seluruh Tim Teknis, Pelayan,<br>dan Panitia Produksi |

---

## 🔒 License & Operational Policy

```text
================================================================================
          PROPRIETARY, CONFIDENTIAL & INTERNAL OPERATIONAL LICENSE
================================================================================

EVENT: Ibadah Perdana UKK UNNES 2026
VENUE: Gedung Auditorium Universitas Negeri Semarang (UNNES)
ORGANIZER: Panitia Ibadah Perdana UKK UNNES 2026
TECHNICAL LEAD: System Engineer & Media Production Team

Copyright (c) 2026 Panitia Ibadah Perdana UKK UNNES & Technical Production Team.
All Rights Reserved.

1. DEFINITIONS & SCOPE
   This repository and all associated documentation, files, diagrams, specifications, 
   and configurations comprise proprietary operational and technical guidelines 
   designed specifically for the execution of Ibadah Perdana UKK UNNES 2026.

2. AUTHORIZED USE & INTERNAL ACCESS
   Access to and use of these Technical Materials is strictly limited to authorized 
   members of Panitia Ibadah Perdana UKK UNNES 2026, System Engineers, Media Engineers, 
   Creative Engineers, Camera/Audio/Visual Operators, and authorized technical servants.

3. RESTRICTIONS
   Unauthorized duplication, public mirroring, fork publication, external transmission, 
   or commercial utilization of these routing topologies, system schematics, or 
   equipment records without prior written consent from the Technical Leadership 
   is strictly prohibited.

4. EQUIPMENT RESPONSIBILITY & INTEGRITY
   All listed equipment represents valuable assets loaned in trust from OWL, ABON, 
   Andreas, GIA Deliksari, GKJ Ngaliyan, UKK UNNES, Auditorium UNNES, and personal 
   contributors. All handlers and operators are bound to maintain electrical safety 
   protocols and standard operational procedures throughout setup, event, and teardown.

5. GOVERNANCE
   The System Engineer / Production Lead reserves all rights to update, modify, 
   or adapt these operational guidelines to ensure maximum stability during live production.
================================================================================
```
Lihat dokumen lengkap pada file [LICENSE](./LICENSE).

