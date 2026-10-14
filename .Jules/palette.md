## 2026-10-14 - Initial HTML Loading Indicator
**Learning:** Adding a CSS-only/inline SVG initial loader nested inside `<div id="root">` with accessible `role="status"` and `aria-live="polite"` feedback prevents a blank screen / FOUC during JS bundle fetch while ensuring smooth replacement when React mounts.
**Action:** Use inline styles, system fonts, and SMIL animated SVG within `<div id="root">` in `index.html`.
