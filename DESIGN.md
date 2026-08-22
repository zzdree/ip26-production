# 🎨 Design System & Specification: IP26 Production Portal
**Project:** IP26 Live Broadcast & Multimedia Web Portal  
**Document ID:** `DESIGN-IP26-UNNES-2026`  
**Design Lead:** System & Frontend Design Engineer  
**Status:** Production / Fully Synchronized  

---

## 1. Visual Theme, Atmosphere & Aesthetic Philosophy

### Aesthetic Direction: *Utilitarian Broadcast Command*
The visual language is inspired by high-end professional broadcast control rooms, master control facilities (MCR), and mission-critical telemetry interfaces. It rejects generic SaaS aesthetics, flat templates, and decorative fluff in favor of **hyper-clarity, high density, and tactile feedback**.

- **Atmosphere:** Rigorous, disciplined, technical, and immediately actionable under high-pressure live production conditions.
- **DFII (Design Feasibility & Impact Index) Score:**
  - Aesthetic Impact: 5/5
  - Context Fit: 5/5
  - Implementation Feasibility: 5/5
  - Performance Safety: 5/5
  - Consistency Risk: -0/5
  - **Total DFII = 20/20 (Executes at Highest Enterprise Quality)**

---

## 2. Color Palette & Roles (Dual Theme Specification)

### A. Dark Mode Palette — *Pure Neutral Grey* (Default)
| Color Role | Token Name | Hex Code | Visual Character & Functional Usage |
| :--- | :--- | :---: | :--- |
| **Canvas Background** | `--bg-primary` | `#121212` | Pure neutral dark grey canvas; zero blue tint, glare-free, and eye-friendly. |
| **Surface Background** | `--bg-surface` | `#1f1f1f` | Balanced dark grey elevation for cards, spec bins, and inventory tables. |
| **Surface Elevated** | `--bg-surface-elevated` | `#262626` | Elevated neutral grey for sticky headers, dialogs, and controls. |
| **Surface Hover** | `--bg-surface-hover` | `#303030` | Interactive hover tone with tactile contrast. |
| **Border / Stroke** | `--border-subtle` | `#333333` | Technical hairline divider contours. |
| **Border Strong** | `--border-strong` | `#484848` | Focused card borders, modal strokes, and active elements. |
| **Text Primary** | `--text-primary` | `#f5f5f5` | Crisp pure white for headers and primary telemetry. |
| **Text Secondary** | `--text-secondary` | `#cccccc` | Clean neutral light grey for descriptions and documentation. |
| **Text Muted** | `--text-muted` | `#8e8e8e` | Auxiliary metadata, timestamps, and subtitles. |
| **Accent Primary** | `--accent-cyan` | `#00d2ff` | High-visibility technical cyan for active states, live indicators & signal paths. |
| **Accent Secondary** | `--accent-amber` | `#f59e0b` | Warning indicators for missing laptops & standby gear. |
| **Accent Success** | `--accent-emerald` | `#10b981` | Status badges for verified & deployed devices (`✅ Ready`). |

### B. Light Mode Palette — *Pure Warm White & Editorial Linen*
| Color Role | Token Name | Hex Code | Visual Character & Functional Usage |
| :--- | :--- | :---: | :--- |
| **Canvas Background** | `--bg-primary` | `#fdfbf7` | Pure warm white linen canvas; soft, elegant, and daylight-ready. |
| **Surface Background** | `--bg-surface` | `#ffffff` | Pure white crisp surface cards. |
| **Surface Elevated** | `--bg-surface-elevated` | `#f3efe6` | Warm cream elevation for sticky headers, badges, and filters. |
| **Surface Hover** | `--bg-surface-hover` | `#ebe5d8` | Tactile warm cream hover state. |
| **Border / Stroke** | `--border-subtle` | `#e5dfd3` | Soft warm hairline dividers. |
| **Border Strong** | `--border-strong` | `#d0c7b8` | Focused borders and outline rings. |
| **Text Primary** | `--text-primary` | `#1c1917` | Deep warm charcoal with maximum typography legibility. |
| **Text Secondary** | `--text-secondary` | `#44403c` | Warm charcoal for body text and instructions. |
| **Text Muted** | `--text-muted` | `#78716c` | Warm stone grey for descriptions and sub-labels. |
| **Accent Primary** | `--accent-cyan` | `#0284c7` | Deep sky blue for interactive links and signal arrows. |
| **Accent Secondary** | `--accent-amber` | `#d97706` | Rich amber for warning badges and alerts. |
| **Accent Success** | `--accent-emerald` | `#059669` | Crisp forest green for verified items. |

---

## 3. Typography Hierarchy

- **Display & Section Headers:** `Outfit`, sans-serif — Geometric, modern, confident, with tight tracking (`-0.02em`).
- **Body & Tabular Data:** `Plus Jakarta Sans`, sans-serif — Optimized for compact data display, tabular readability, and neutral tone.
- **Signal Paths, Ports & Hardware Codes:** `JetBrains Mono`, monospace — Monospaced precision for gear codes, quantities, and routing formulas (`A6000`, `18-105MM`, `HDMI 10M`, `QL5`, `Pyro S`).

---

## 4. Component Stylings & Micro-Interactions

### A. Navigation Bars
- **Desktop Navbar (Top):** Fixed `top: 0`, frosted backdrop filter (`backdrop-filter: blur(16px)`), reading progress bar indicator, single-word crisp links (PIC, Alur, Sistem, Kamera, Device, Logistik, Rundown), real-time status pill, theme switcher, and Cloud Sync toggle.
- **Mobile Navigation Dock (Bottom):** Fixed `bottom: 0`, elevated dock design with safe-area padding (`env(safe-area-inset-bottom)`), 5 key icon tabs (Beranda, Tim, Sinyal, Kamera, Alat), active indicator pill with subtle glow.

### B. Realtime Cloud Synchronization Bar & Telemetry
- **Crew Identity Input:** Live inline name selector with auto-save badge and presence tracking.
- **Dual Progress Gauges:** Dynamic percentage bars tracking independent **Loading In (Pemasangan)** and **Packing Out (Pengemasan)** completion rates.
- **Quick Action Buttons:** "Salin Progres" summary clipboard exporter, "Koneksi Cloud" config modal launcher, and "Reset Checklist" dialog.

### C. Interactive Diagrams & Transparent Adaptive Mermaid Engine
- **Master Signal Board:** 4-stage interactive high-level hardware pipeline (Camera $\rightarrow$ Switcher $\rightarrow$ LED Processors $\rightarrow$ Stage & Stream).
- **Dynamic Transparent Flowcharts (Mermaid.js):** 
  - **Transparent Node Containers:** Node containers have 100% transparent fills (`rgba(255,255,255,0.03)` dark / `rgba(0,0,0,0.02)` light) with clean 1px subtle resting strokes (`var(--border-subtle)`), completely eliminating solid blocky white/black rectangles.
  - **Dynamic Glowing Node Outlines on Interaction:** Mermaid node containers remain quiet at 1px stroke in default state, and light up with a **2.5px cyan glowing outline (`#00d2ff`, filter drop-shadow)** ONLY when hovered (`:hover`) or clicked (`:active`).
  - **Auto-Adaptive Lines & Typography:**
    - *Dark Mode:* Pure light text (`#f5f5f5`) and cyan/grey connecting vector lines.
    - *Light Mode:* Deep charcoal text (`#1c1917`) and sky-blue connecting vector lines.
  - **Instant Re-rendering on Theme Toggle:** Automatically captures raw diagram definitions and re-renders SVG vector graphs in real-time when the theme switcher is clicked without requiring page reload.
  - Flowcharts rendered:
    1. *Bagan Struktur Komando & Hierarki Tim*
    2. *Master Architecture Signal Flow (5 Sub-Graphs)*
    3. *Sub-Flowchart 1: Sub-Sistem Kamera Wireless — CAM 1 & CAM 2 (`flowchart LR`)*
    4. *Sub-Flowchart 2: Sub-Sistem Kamera Kabel / Wired — CAM 3 & CAM 4 (`flowchart LR`)*
    5. *Sub-Flowchart 3: Sub-Sistem Distribusi Video & Pemetaan LED (`flowchart LR`)*
    6. *Sub-Flowchart 4: Sub-Sistem Audio Sub-Mixing & Streaming (`flowchart LR`)*
    7. *Sub-Flowchart 5: Sub-Sistem Stage Time Keeper (`flowchart LR`)*
    8. *Sub-Flowchart 6: Sub-Sistem Distribusi Daya & Grounding (`flowchart LR`)*

### D. Cards, Hardware Bins & 2-Column Subsystem Grid
- Subtly rounded corners (`border-radius: 14px`).
- **Hairline Default Resting State:** 1px hairline technical borders (`1px solid var(--border-subtle)`) across all cards, callouts, telemetry blocks, and camera spec bins with zero intrusive static borders.
- **Dynamic Interactive Outlines:** Prominently highlights with a **2.5px glowing cyan outline (`0 0 0 2px var(--accent-cyan-subtle), var(--shadow-glow)`)** and micro-lift (`translateY(-2px)`) ONLY on hover (`:hover`), active/click (`:active`), or keyboard focus (`:focus-visible`).
- **2-Column Responsive Subsystem Grid (`.subsystems-grid`):** Displays the 5 deep-dive technical chains side-by-side in a 2-column grid on desktop/tablets (collapsing cleanly on mobile) paired with horizontal `flowchart LR` diagrams to drastically eliminate vertical scrolling fatigue.
- **Direct Tactile Checkboxes:** Streamlined 32×32px responsive checkboxes with SVG checkmarks (`✓`) directly synchronized to Supabase Cloud with crew timestamps.

### E. Modals & Dialogs
- **Cloud Database Configuration Modal:** Supabase Project URL & Anon Key credentials management.
- **5-Clause ASCII Legal & Operational License Modal:** Verbatim governance modal with monospace readability and accessible keyboard dismissal (Escape key).

---

## 5. Responsive Breakpoints

- **Mobile Small (< 480px):** Single column, bottom dock nav, compact inventory cards, full-width search input.
- **Tablet (481px - 768px):** 2-column grid for camera cards, sticky bottom nav, collapsible filter tabs.
- **Compact Tablet / Laptop (769px - 1120px):** Compact desktop navbar with non-wrapping single-word labels, 2-column subsystem cards.
- **Desktop (1121px - 1440px):** Full multi-column hardware matrix, full sidebar/horizontal layout.
- **Wide Desktop (> 1440px):** Max container width `1280px` centered with generous margins.
