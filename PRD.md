# 📋 Product Requirements Document (PRD)
## IP26 Live Broadcast & Multimedia Production Web Portal
**Project:** IP26 Technical Production Web Command Portal  
**Document ID:** `PRD-IP26-UNNES-2026`  
**Status:** Production / Fully Deployed & Synchronized  
**Target Event:** Ibadah Perdana UKK UNNES 2026 (Auditorium UNNES)  

---

### 1. Executive Summary & Product Vision
The **IP26 Production Portal** is a lightweight, responsive, high-performance web dashboard & command portal designed as the **single source of truth** for all technical crews, PICs, and committee members executing the **Ibadah Perdana UKK UNNES 2026** at Auditorium Universitas Negeri Semarang.

The portal provides instant, frictionless, mobile-optimized access to master signal architectures, camera sub-systems, audio routing, equipment allocations, operator matrices, rundown media timelines, and multi-user synchronized inventory checklists without requiring logins, installations, or bulky software.

---

### 2. Target Audience & Personas
1. **Camera PICs & Operators (Alex, Kiel 1, Nia, Ferdy, Nico, Joel, Jennifer):** Rapid lookup of camera models, lens configurations, battery/memory card statuses, wireless transmitter frequencies, and tripod positions on mobile devices while on stage or in the hall.
2. **Video & Switcher Operators (Wilfred, Rania, Filia, Andreas, Bayu):** Detailed routing diagrams for Cinetreak V1, Splitter 4CH, ProPresenter 1 & 2 layers, and Resolume Arena Novastar mappings.
3. **Sound Engineers & FOH Audio (Jordan, Yosua, Andreas):** Reference for Yamaha QL5 sub-mix sends, NewBaxs CT80S streaming levels, and WiFi UNNES-ID remote iPad/Laptop configurations.
4. **Time Keepers & Event Coordinators (Acara Team, Darrel, Lio):** Independent stage monitor and countdown timer setup reference.
5. **Production Leads & Committee Leads (Andreas, Richard, Jennifer):** Full-scope inventory tracking across 14 loan providers, multi-device live checklist sync, vendor loan management, and post-event teardown (*usung-usung*) verifications.

---

### 3. Key Functional Requirements (FR)

| ID | Feature | Description | Priority |
| :--- | :--- | :--- | :---: |
| **FR-01** | **Unified Single-Page Architecture** | All information accessible in a continuous, smooth-scrolling single-page layout with high-performance section anchors and reading progress bar. | P0 |
| **FR-02** | **Dual Responsive Navigation** | • **Desktop:** Frosted sticky top header with reading progress bar, single-word links (PIC, Alur, Sistem, Kamera, Device, Logistik, Rundown), real-time status pill, theme switcher, and Cloud Sync toggle.<br>• **Mobile:** Ergonomic bottom navigation dock with touch-friendly icons and safe-area inset adaptation. | P0 |
| **FR-03** | **Dual-Theme Engine** | • **Dark Mode (Default):** Pure Neutral Studio Slate (`#181a1f` / `#242731`) with crisp cyan accents.<br>• **Light Mode:** Pure Warm White Linen (`#fcfbf8` / `#ffffff`) with deep espresso text. Seamlessly persisted via `localStorage`. | P0 |
| **FR-04** | **Interactive Flowchart & Mermaid Engine** | Dual-engine visual diagrams: (1) High-level interactive 4-stage hardware pipeline board, and (2) 7 embedded Mermaid.js architecture flowcharts (Org Hierarchy, Master Signal Flow, 5 Sub-System Deep Dives) with automatic dark/light theme adaptation. | P0 |
| **FR-05** | **Realtime Multi-Device Cloud Sync** | Multi-crew bi-directional checklist synchronization using Supabase PostgreSQL + Realtime WebSockets CDC. Tracks independent 'Loading In' (pemasangan) and 'Packing Out' (pengemasan) statuses per item, with crew identity badges and real-time presence indicators (`online crew count`). | P0 |
| **FR-06** | **Live Inventory Search & Multi-Filter** | Instant client-side search and category filtering across all 14 equipment providers (OWL, ABON, Andreas, GIA, GKJ, UKK, etc.) with real-time status badges (`✅ Ready`, `⚠️ Belum Ada / Sebagian`, `☑️ Reserve`). | P0 |
| **FR-07** | **Camera & Hardware Spec Sheets** | Dedicated visual cards and tabular specs for CAM 1–4 (Broadcast) and CAM PHO/VID/HP (Documentation) with sensor sizes, lenses, mounts, and power lines. | P1 |
| **FR-08** | **Workstation & Operator Matrix** | Status matrix displaying operator names, assigned hardware roles, and alerts for unallocated laptop units. | P1 |
| **FR-09** | **Rundown & Screen Mapping Matrix** | Sequential timeline covering Pre-Ibadah, Main Ibadah, and Post-Ibadah media targets across LED Main, LED Wings, and OBS live stream feeds. | P1 |
| **FR-10** | **5-Clause Operational & Legal Modal** | Complete verbatim ASCII legal and operational governance charter accessible via dedicated footer modal with full keyboard accessibility. | P2 |

---

### 4. Non-Functional Requirements (NFR)

1. **Performance & Web Vitals:** Ultra-fast initial load (< 300ms), sub-millisecond DOM filter query speeds, and zero blocking scripts.
2. **Accessibility (a11y):** WCAG 2.1 AA compliant contrast ratios in both dark and light modes; keyboard accessible navigation (`Tab`, `Escape` modals, `Skip-to-content` link).
3. **Responsiveness:** Fluid scaling across ultra-compact mobile (320px), standard tablets (768px), compact laptop viewports (1024px), and wide monitors (1440px+).
4. **Zero-Build Architecture:** Pure Vanilla HTML5, CSS3, and modern ES6+ JavaScript for maximum longevity, independence from build tool obsolescence, and instant execution via standard web browsers.

---

### 5. Information Architecture & Content Hierarchy
1. **Top Navigation Header:** Progress bar, single-word anchors, live status badge, theme toggle, and cloud status.
2. **Hero Section:** Event title, venue badge, real-time telemetry stats, live crew presence, and action triggers.
3. **Command & Organization:** 3 Leadership team cards, 5 Technical Assignment Golden Rules, and Mermaid Org Flowchart.
4. **Master Architecture & Signal Flow:** 4-Stage interactive board + Master Mermaid Signal Flow Diagram.
5. **5 Sub-System Deep-Dives:** Camera Acquisition, Video & LED Mapping, Audio Routing & Streaming, Stage Time Keeper, and Electrical Power Distribution (each with its dedicated Mermaid diagram & technical explanation).
6. **Camera Acquisition Systems:** Broadcast & Documentation camera specifications.
7. **Workstations & Media Matrix:** Operator roles and device allocation statuses.
8. **Master Inventory Directory:** Live search, 14 vendor filter pills, dual-action realtime checklist (`[v] Pasang` & `[v] Kemas`), progress gauges, and clipboard summary exporter.
9. **Rundown & Screen Mapping:** Schedule and multimedia asset targets.
10. **Footer & Governance:** Operational charter and 5-clause ASCII license modal.
11. **Mobile Bottom Dock:** 5 touch-friendly quick-access tabs with active scrollspy tracking.
