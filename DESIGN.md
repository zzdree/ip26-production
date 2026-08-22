# 🎨 Design System & Specification: IP26 Production Portal
**Project:** IP26 Live Broadcast & Multimedia Web Portal  
**Document ID:** `DESIGN-IP26-UNNES-2026`  
**Design Lead:** System & Frontend Design Engineer

---

## 1. Visual Theme, Atmosphere & Aesthetic Philosophy

### Aesthetic Direction: *Utilitarian Broadcast Command*
The visual language is inspired by high-end professional broadcast control rooms, master control facilities (MCR), and mission-critical telemetry interfaces. It rejects generic SaaS aesthetics and decorative fluff in favor of **hyper-clarity, high density, and tactile feedback**.

- **Atmosphere:** Rigorous, disciplined, technical, and immediately actionable under high-pressure live production conditions.
- **DFII (Design Feasibility & Impact Index) Score:**
  - Aesthetic Impact: 5/5
  - Context Fit: 5/5
  - Implementation Feasibility: 5/5
  - Performance Safety: 5/5
  - Consistency Risk: -1/5
  - **Total DFII = 19/20 (Executes at Highest Quality)**

---

## 2. Color Palette & Roles (Dual Theme Specification)

### A. Dark Mode Palette — *Precision Dark Slate & Charcoal* (Default)
| Color Role | Token Name | Hex Code | Visual Character & Functional Usage |
| :--- | :--- | :---: | :--- |
| **Canvas Background** | `--bg-primary` | `#0f1115` | Ultra-deep slate black; reduces glare in dark control booths. |
| **Surface Background** | `--bg-surface` | `#161920` | Subtle raised elevation for cards, specs, and tables. |
| **Surface Elevated** | `--bg-surface-elevated` | `#1e222d` | Higher elevation for headers, modals, and sticky navs. |
| **Border / Stroke** | `--border-subtle` | `#282e3d` | Technical gridlines and card contours. |
| **Border Strong** | `--border-strong` | `#3d465c` | Highlighted borders on active/hover states. |
| **Text Primary** | `--text-primary` | `#f0f3f8` | High-contrast crisp white for primary headlines and data. |
| **Text Muted** | `--text-muted` | `#94a3b8` | Neutral cool slate for descriptions and labels. |
| **Accent Primary** | `--accent-cyan` | `#00d2ff` | High-visibility technical cyan for signal paths & active states. |
| **Accent Secondary** | `--accent-amber` | `#f59e0b` | Warning indicators for missing gear & standby units. |
| **Accent Success** | `--accent-emerald` | `#10b981` | Status badges for verified & deployed devices (`✅`). |

### B. Light Mode Palette — *Architectural Warm White & Linen*
| Color Role | Token Name | Hex Code | Visual Character & Functional Usage |
| :--- | :--- | :---: | :--- |
| **Canvas Background** | `--bg-primary` | `#fbf9f5` | Warm alabaster linen; soft on the eyes during daylight setup. |
| **Surface Background** | `--bg-surface` | `#ffffff` | Pure white surface cards for clean visual segmentation. |
| **Surface Elevated** | `--bg-surface-elevated` | `#f3efe6` | Warm cream elevation for sticky navigation and headers. |
| **Border / Stroke** | `--border-subtle` | `#e4ded4` | Warm architectural divider lines. |
| **Border Strong** | `--border-strong` | `#cbbfaf` | Focused card borders and interactive focus rings. |
| **Text Primary** | `--text-primary` | `#191c21` | Deep obsidian charcoal with maximum legibility. |
| **Text Muted** | `--text-muted` | `#64748b` | Balanced slate grey for auxiliary metadata. |
| **Accent Primary** | `--accent-cyan` | `#0284c7` | Deep sky blue for interactive links and signal arrows. |
| **Accent Secondary** | `--accent-amber` | `#d97706` | Rich amber for warning badges and alerts. |
| **Accent Success** | `--accent-emerald` | `#059669` | Crisp forest green for verified items. |

---

## 3. Typography Hierarchy

- **Display & Section Headers:** `Outfit`, sans-serif — Geometric, modern, confident, with tight tracking (`-0.02em`).
- **Body & Tables:** `Plus Jakarta Sans`, sans-serif — Optimized for compact data display, tabular readability, and neutral tone.
- **Signal Paths, Ports & Hardware Codes:** `JetBrains Mono`, monospace — Monospaced precision for gear codes, quantities, and routing formulas (`A6000`, `18-105MM`, `HDMI 10M`, `QL5`).

---

## 4. Component Stylings & Micro-Interactions

### A. Navigation Bars
- **Desktop Navbar (Top):** Fixed `top: 0`, frosted backdrop filter (`backdrop-filter: blur(12px)`), logo + event title on left, anchor links in center, theme toggle and quick action button on right.
- **Mobile Navigation Dock (Bottom):** Fixed `bottom: 0`, elevated pill/dock design with safe-area padding (`env(safe-area-inset-bottom)`), 5 key icon tabs (Home, Teams, Routing, Cameras, Inventory), active indicator pill with subtle glow.

### B. Cards & Hardware Bins
- Subtly rounded corners (`border-radius: 12px`).
- 1px hairline technical borders (`1px solid var(--border-subtle)`).
- Hover effect: micro-lift (`transform: translateY(-2px)`) with border highlight transition (200ms ease).

### C. Status Badges & Pills
- **Verified (`✅ Ready`):** Emerald green background with subtle border and bold text.
- **Partial / Warning (`⚠️ Belum Ada / Sebagian`):** Amber background with attention pulse.
- **Standby (`☑️ Reserve`):** Muted cool slate badge.

### D. Interactive Flowcharts
- Rendered in clean SVG / CSS Flex with high-contrast signal nodes, animated pulsing flow lines, and responsive horizontal scroll on mobile.
- Categorized into **Master Architecture** and **5 Sub-System Deep-Dives** with technical descriptions.

---

## 5. Responsive Breakpoints

- **Mobile Small (< 480px):** Single column, bottom dock nav, compact inventory rows, full-width search input.
- **Tablet (481px - 768px):** 2-column grid for camera cards, sticky bottom nav, collapsible filter tabs.
- **Desktop (769px - 1200px):** Top sticky navbar, multi-column hardware matrix, full sidebar/horizontal layout.
- **Wide Desktop (> 1200px):** Max container width `1280px` centered with generous margins.
