# Palette Journal

## 2026-09-22 - Initial Loader for SPA Startup Experience
**Learning:** Adding a CSS-inline, SMIL-animated SVG initial loader inside the `#root` container with `role="status"` prevents a blank white screen during initial JS bundle load while remaining fully accessible and zero-dependency.
**Action:** Always nest initial static HTML loaders inside `<div id="root">` with inline styles and fallback system fonts to ensure seamless mounting by React without layout shifts or FOUC.
