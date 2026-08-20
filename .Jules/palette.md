# Palette Journal

## 2026-08-20 - Initial Application Loading State
**Learning:** Placing an inline-styled SVG loading spinner inside `<div id="root">` in `index.html` prevents a blank white screen during initial bundle load, improving perceived performance and accessibility without adding external CSS dependencies or causing FOUC.
**Action:** Always include an accessible `role="status"` loader inside `#root` for SPA entry points with brand colors and clean fallback text.
