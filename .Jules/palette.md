# Palette UX Journal

## 2026-09-04 - Initial Loader UX and Accessibility Pattern
**Learning:** Adding a static CSS/SVG-based initial loading spinner inside `#root` in `index.html` with `role="status"` and `aria-label` provides immediate, accessible visual feedback before JavaScript bundles load and mount without requiring external CSS files.
**Action:** Use inline styles, brand theme colors (`#054f49`), and SMIL SVG animations inside `<div id="root">` for zero-FOUC initial loading states.
