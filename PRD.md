# PRD — IP26 Broadcast Command Suite (v14.0)
**Event:** Ibadah Perdana UKK UNNES 2026  
**Venue:** Gedung Auditorium UNNES, Semarang  
**Date:** 17 September 2026  
**Architecture:** Single-Page Responsive Precision Studio App (Raycast / Blackmagic ATEM Pro UI)  
**Database Sync:** Supabase PostgreSQL Realtime (`public.inventory_checklist`) + Local Cache  

---

## 1. Executive Summary & Objective
IP26 Broadcast Command Suite adalah aplikasi pusat kendali teknis dan pelacak inventaris siaran live multi-kamera untuk perhelatan Ibadah Perdana UKK UNNES 2026. Aplikasi ini menyatukan 119 item inventaris dari 13 peminjam, 8 rig kamera siaran/dokumentasi, 11 workstation media, matriks routing sinyal video-audio, skema tata panggung LED, dan rundown acara ke dalam satu halaman instrumen digital yang sangat presisi, responsif, dan bebas distorsi.

---

## 2. Core Design Direction: Precision Studio Pro (v14.0)
* **Visual Inspiration:** Raycast Desktop & Blackmagic ATEM Hardware Console.
* **Canvas:** Deep Obsidian (`#08090b`), Slate Cards (`#111317`), Inset Toolbars (`#16191f`).
* **Borders:** Hairline 0.5px–1px (`rgba(255, 255, 255, 0.07)`).
* **Typography:** `Plus Jakarta Sans` (Structure & Labels) + `JetBrains Mono` (Telemetry & Numbers).
* **Interaction:** Collapsible Accordion Modules + Auto-Expand Smart Navigation.

---

## 3. Information Architecture & Module Hierarchy
1. **Sticky Header & Top Telemetry**:
   - Master WIB Clock, Live Event Countdown to 17 Sept 2026, Supabase Connection Badge, 4 Stat Cockpit Cards.
2. **Module 1: 📦 Master Inventaris & Packing Manifest (119 Items)** *(Priority #1 — Open by default)*:
   - Progress bar ter-packing, real-time search (`Ctrl+K`), tab filter 13 peminjam (*OWL, Andreas, UKK, GKJ, GIA, Kiel 1, Joel, Darrel, Kezia, Jennifer, ABON, Lio, Panitia*), batch actions, dan checklist 2-arah.
3. **Module 2: 🎥 Sistem Rigging Kamera (8 Unit)**:
   - CAM 1 (FOH Wide), CAM 2 (Stage Mobile), CAM 3 (Stage Left), CAM 4 (Stage Right), CAM Backup, CAM PHO (Nico), CAM VID (Joel), CAM HP (Jennifer).
   - 1-Click WhatsApp briefing copy generator.
4. **Module 3: 🔀 Routing Sinyal & 11 Workstations**:
   - Interactive Cinetreak Bus (PGM/PVW Tally), Video Transmission Matrix, Audio Sub-mix Matrix, Splitter Notes, 11 Workstations Roster.
5. **Module 4: 🏛️ Denah Tata Panggung & LED Screens**:
   - Visual multi-screen feed (Center Resolume, L/R/Back ProPresenter 1), Timekeeper Display (Darrel TV), Camera Anchors.
6. **Module 5: ⏱️ Rundown Acara & Tim Multimedia**:
   - 3 Divisi Engineering (System, Media, Creative), 3-Phase Rundown Table.

---

## 4. Technical Constraints & Data Sources
* Strictly grounded on `ip26_pro1.txt` and `ip26_pro2.txt`.
* Zero meta-axioms/prompt artifacts in the user-facing UI.
* 100% Mobile & Desktop Responsive.
