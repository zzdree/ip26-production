# 📋 Product Requirements Document (PRD)
## IP26 Live Broadcast & Multimedia Production Web Portal

---

### 1. Executive Summary & Product Vision
The **IP26 Production Portal** is a lightweight, responsive, high-performance web dashboard & landing page designed as the **single source of truth** for all technical crews, PICs, and committee members executing the **Ibadah Perdana UKK UNNES 2026** at Auditorium Universitas Negeri Semarang.

The portal provides instant, frictionless, mobile-optimized access to master signal architectures, camera sub-systems, audio routing, equipment allocations, operator matrices, and rundown media timelines without requiring logins or bulky software.

---

### 2. Target Audience & Personas
1. **Camera PICs & Operators (Alex, Kiel 1, Nia, Ferdy, Nico, Joel, Jennifer):** Need rapid lookup of camera models, lens configurations, battery/memory card statuses, wireless transmitter frequencies, and tripod positions on mobile devices while on stage or in the hall.
2. **Video & Switcher Operators (Wilfred, Rania, Filia, Andreas):** Need detailed routing diagrams for Cinetreak V1, Splitter 4CH, ProPresenter 1 & 2 layers, and Resolume Arena Novastar mappings.
3. **Sound Engineers & FOH Audio (Jordan, Yosua, Andreas):** Need quick reference for Yamaha QL5 sub-mix sends, NewBaxs CT80S streaming levels, and WiFi UNNES-ID remote iPad/Laptop configurations.
4. **Time Keepers & Event Coordinators (Acara Team, Darrel, Lio):** Need independent stage monitor and countdown timer setup reference.
5. **Production Leads & Committee Leads (Andreas, Richard, Jennifer):** Need full-scope inventory tracking, vendor loan management, and post-event teardown (*usung-usung*) checklists.

---

### 3. Key Functional Requirements (FR)

| ID | Feature | Description | Priority |
| :--- | :--- | :--- | :---: |
| **FR-01** | **Unified Single-Page Navigation** | All information accessible in a continuous single-page layout with smooth scrolling and section anchors. | P0 |
| **FR-02** | **Dual Responsive Navigation** | **Desktop:** Sticky header navbar with quick-jump links and theme switcher.<br>**Mobile:** Ergonomic bottom navigation dock with touch-friendly icons and active indicator. | P0 |
| **FR-03** | **Dual-Theme Engine** | • **Dark Mode (Default):** Deep Slate Grey (`#121418` / `#1c1f26`) with crisp neutral accents.<br>• **Light Mode:** Warm White / Cream (`#fbf9f5` / `#f3efe6`) with readable deep charcoal text. Persisted via `localStorage`. | P0 |
| **FR-04** | **Interactive Master & Sub Flowcharts** | Visual representation of high-level architecture plus 5 dedicated sub-systems: Cameras, Visual & LED, Audio & Streaming, Time Keeper, and Electrical. | P0 |
| **FR-05** | **Live Inventory Search & Filter** | Instant client-side search and category filtering across all 14 loan providers (OWL, ABON, Andreas, GIA, GKJ, UKK, etc.) with real-time status badges (`✅`, `⚠️`, `☑️`). | P0 |
| **FR-06** | **Camera & Hardware Spec Sheets** | Dedicated visual cards and tabular specs for CAM 1–4 (Broadcast) and CAM PHO/VID/HP (Documentation). | P1 |
| **FR-07** | **Workstation & Operator Matrix** | Status matrix displaying operator names, assigned hardware, and warnings for unallocated units. | P1 |
| **FR-08** | **Rundown & Screen Mapping Matrix** | Sequential timeline covering Pre-Ibadah, Main Ibadah, and Post-Ibadah media targets. | P1 |
| **FR-09** | **Proprietary License & Policy Notice** | Expanded operational governance policy embedded in the footer. | P2 |
| **FR-10** | **Realtime Cloud Inventory Sync** | Multi-device bi-directional inventory checklist synchronization using Supabase PostgreSQL + Realtime WebSockets CDC, tracking independent 'Loading In' (pemasangan) and 'Packing Out' (pengemasan) statuses with crew avatars and timestamps. | P0 |

---

### 4. Non-Functional Requirements (NFR)

1. **Performance:** Zero external dependencies / CDN locks. Fast initial load under 300ms.
2. **Accessibility (a11y):** WCAG 2.1 AA compliant contrast in both dark and light modes; keyboard accessible navigation.
3. **Responsiveness:** Fluid scaling from 320px mobile screens to 4K desktop displays.
4. **Zero-Build Architecture:** Pure Vanilla HTML5, CSS3, and modern JavaScript (ES6+) for maximum portability and instant execution via standard web browsers or local file serving.

---

### 5. Information Architecture & Content Hierarchy
1. **Hero Section:** Event title, venue badge, quick stats, and direct call-to-action buttons.
2. **Command & Organization:** Leadership structure and team assignments.
3. **Master Architecture & Signal Flow:** Master flowchart & interactive sub-flowcharts with technical explanations.
4. **Camera Acquisition Systems:** Broadcast and documentation camera specifications.
5. **Workstations & Media Matrix:** Operator roles and device readiness.
6. **Master Inventory Directory:** Searchable, filterable 14-source equipment catalog.
7. **Rundown & Screen Mapping:** Schedule and multimedia asset targets.
8. **Footer & License:** Proprietary terms and production credits.
