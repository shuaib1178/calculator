## 2026-09-25 - HTML Initial Loading State with Inline SMIL Spinner
**Learning:** Nesting a CSS/SMIL-based loading indicator directly inside `<div id="root">` with `role="status"` and `aria-label` provides immediate visual feedback while JS bundles load, and is automatically replaced when React mounts without custom JS cleanup or FOUC.
**Action:** Use inline styles, standard system fonts, and SMIL SVG animations inside `#root` in `index.html` to guarantee instant accessible loading states before external styles/scripts load.
