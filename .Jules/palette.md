# Palette's Journal - Critical Learnings

## 2026-09-09 - Accessible Initial Loading State in static HTML
**Learning:** Adding a lightweight, accessible HTML/SVG spinner inside `<div id="root">` prevents a blank white screen during JavaScript module resolution and bundle loading, providing immediate visual feedback with zero FOUC and full screen reader compatibility via `role="status"` and `aria-live="polite"`.
**Action:** Always wrap initial loading states in `<div id="root">` with inline styles and SMIL animated SVGs when frontend application scripts load asynchronously.
