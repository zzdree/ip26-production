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

### A. Dark Mode Palette — *Pure Industrial Grey & Studio Slate* (Default)
| Color Role | Token Name | Hex Code | Visual Character & Functional Usage |
| :--- | :--- | :---: | :--- |
| **Canvas Background** | `--bg-primary` | `#181a1f` | Pure neutral studio slate grey; sleek, glare-free, and eye-friendly in low light. |
| **Surface Background** | `--bg-surface` | `#242731` | Balanced dark grey elevation for cards, spec bins, and inventory tables. |
| **Surface Elevated** | `--bg-surface-elevated` | `#2c303c` | Elevated pure grey for sticky headers, dialogs, modals, and flowcharts. |
| **Surface Hover** | `--bg-surface-hover` | `#353a49` | Interactive hover tone with tactile contrast. |
| **Border / Stroke** | `--border-subtle` | `#383d4c` | Technical hairline divider contours. |
| **Border Strong** | `--border-strong` | `#4f566a` | Focused card borders, modal strokes, and active elements. |
| **Text Primary** | `--text-primary` | `#f4f6fa` | Crisp studio white for headers and primary telemetry. |
| **Text Secondary** | `--text-secondary` | `#cacedb` | Clean neutral grey for descriptions and documentation. |
| **Text Muted** | `--text-muted` | `#959cb0` | Auxiliary metadata, timestamps, and subtitles. |
| **Accent Primary** | `--accent-cyan` | `#00d2ff` | High-visibility technical cyan for active states, live indicators & signal paths. |
| **Accent Secondary** | `--accent-amber` | `#f59e0b` | Warning indicators for missing laptops & standby gear. |
| **Accent Success** | `--accent-emerald` | `#10b981` | Status badges for verified & deployed devices (`✅ Ready`). |

### B. Light Mode Palette — *Pure Warm White & Editorial Linen*
| Color Role | Token Name | Hex Code | Visual Character & Functional Usage |
| :--- | :--- | :---: | :--- |
| **Canvas Background** | `--bg-primary` | `#fcfbf8` | Pure warm white linen canvas; soft, elegant, and daylight-ready. |
| **Surface Background** | `--bg-surface` | `#ffffff` | Pure white crisp surface cards. |
| **Surface Elevated** | `--bg-surface-elevated` | `#f4f0e6` | Warm cream elevation for sticky headers, badges, and filters. |
| **Surface Hover** | `--bg-surface-hover` | `#eae3d2` | Tactile warm cream hover state. |
| **Border / Stroke** | `--border-subtle` | `#e6dfd3` | Soft warm hairline dividers. |
| **Border Strong** | `--border-strong` | `#cfc1ae` | Focused borders and outline rings. |
| **Text Primary** | `--text-primary` | `#1a1715` | Deep espresso charcoal with maximum typography legibility. |
| **Text Secondary** | `--text-secondary` | `#3c3732` | Warm charcoal for body text and instructions. |
| **Text Muted** | `--text-muted` | `#6e675f` | Warm stone grey for descriptions and sub-labels. |
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

### C. Interactive Diagrams & Mermaid Engine
- **Master Signal Board:** 4-stage interactive high-level hardware pipeline (Camera $\rightarrow$ Switcher $\rightarrow$ LED Processors $\rightarrow$ Stage & Stream).
- **Mermaid.js Architecture Flowcharts:** Theme-adaptive SVG rendering with zoomable horizontal scroll containers for:
  1. *Bagan Struktur Komando & Hierarki Tim*
  2. *Master Architecture Signal Flow (5 Sub-Graphs)*
  3. *Sub-Flowchart 1: Broadcast Camera & Wireless Links*
  4. *Sub-Flowchart 2: Video Distribution & LED Mapping*
  5. *Sub-Flowchart 3: Audio Routing & Live Streaming*
  6. *Sub-Flowchart 4: Stage Time Keeper System*
  7. *Sub-Flowchart 5: Electrical & Power Distribution System*

### D. Cards, Hardware Bins & Tables
- Subtly rounded corners (`border-radius: 14px`).
- 1px hairline technical borders (`1px solid var(--border-subtle)`).
- Micro-lift hover animation (`transform: translateY(-2px)`) with 200ms cubic-bezier transition.
- Double-action checkboxes for inventory tracking (`[v] Pasang` and `[v] Kemas`) with crew tag timestamps.

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
