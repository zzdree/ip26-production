# DESIGN.md — Precision Studio Pro Design System (v14.0)
**Theme:** Raycast / Blackmagic ATEM Precision Instrument Aesthetic  
**Aesthetic Standard:** Deep Obsidian Canvas, Slate Hardware Cards, 0.5px Hairline Borders, Studio Tally Accents  

---

## 1. Color Palette & Semantic Tokens
```css
:root {
  /* Canvas & Surfaces */
  --bg-base: #08090b;            /* Deep Obsidian */
  --bg-surface: #111317;         /* Master Slate Hardware Card */
  --bg-surface-hover: #16191f;   /* Elevated Slate */
  --bg-inset: #0c0e12;           /* Inset Row / Recessed Surface */
  --bg-dock: rgba(17, 19, 23, 0.92);

  /* Hairline Borders */
  --border-card: rgba(255, 255, 255, 0.07);
  --border-subtle: rgba(255, 255, 255, 0.035);
  --border-hover: rgba(255, 255, 255, 0.15);
  --border-focus: #0ea5e9;

  /* Typography */
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;

  /* Studio Hardware Accents (Tally & Signal) */
  --tally-pgm: #ef4444;          /* Red PGM Live */
  --tally-pgm-soft: rgba(239, 68, 68, 0.12);
  --tally-pvw: #10b981;          /* Green PVW / Ready / Checked */
  --tally-pvw-soft: rgba(16, 185, 129, 0.12);
  --accent-cyan: #0ea5e9;        /* Signal Route / Focus */
  --accent-cyan-soft: rgba(14, 165, 233, 0.1);
  --accent-amber: #f59e0b;       /* Standby / Caution */
  --accent-amber-soft: rgba(245, 158, 11, 0.12);
  --accent-purple: #a855f7;      /* Wireless TX/RX */
  --accent-purple-soft: rgba(168, 85, 247, 0.12);
}
```

---

## 2. Typography
* **Primary Interface Font:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`
* **Technical Monospace Font:** `'JetBrains Mono', monospace` (for Telemetry, Quantities, Clocks, Timecodes, Port IDs)
* **Hierarchy:**
  * App Header Brand: `14px / weight 700 / letter-spacing -0.01em`
  * Section Titles: `15px / weight 700 / letter-spacing -0.02em`
  * Sub-headings: `13px / weight 600`
  * Body Text: `12.5px / line-height 1.5`
  * Small Meta / Badges: `10.5px–11px / weight 600–700 / JetBrains Mono`

---

## 3. Component Architecture
1. **Studio Header (Desktop)**: Height 52px, frosted blur (16px), quick navigation pills with subtle hover background and active blue glow.
2. **Mobile Cockpit Dock**: Height 56px, fixed bottom, icon + label with thumb-friendly touch targets (min 44px).
3. **Accordion Module Cards**:
   * Header: tactile row with index tag (`01`), bold module title, right status badge, and rotating chevron icon.
   * Smooth collapse/expand state transitions.
4. **Hardware Checklist Rows**:
   * Compact 36px height row, custom green checkmark on active, strikethrough muted typography, lender name pill, and signal usage badge.
5. **Interactive Cinetreak Bus**:
   * Hardware switcher buttons for PGM (Red Tally) and PVW (Green Tally).
6. **Data Tables**:
   * Monospace technical table with subtle alternating row hover and compact 8px padding.
