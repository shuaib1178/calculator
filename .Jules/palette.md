# Palette Journal

## 2026-08-17 - Initial HTML Loading Screen Pattern
**Learning:** Adding a CSS/SVG-based initial loader nested inside the main `#root` element in `index.html` provides immediate visual feedback and accessibility (`role="status"`) before the React JS bundle finishes loading and mounting.
**Action:** Always use SMIL-animated SVG spinners and inline flexbox layout on `#root` to ensure zero FOUC and zero layout shift without adding external CSS bundle dependencies.
