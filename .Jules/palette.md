# Palette's Journal

## 2026-09-16 - Initial Loader Pattern inside #root for React Single Page Applications
**Learning:** Adding a CSS/SVG-based accessible loader inside `<div id="root">` with inline styling provides immediate user feedback during app bundle load/initialization and is automatically unmounted when React renders.
**Action:** Use inline styles, brand primary color (`#054f49`), fallback system fonts, and SMIL animated SVG with proper `role="status"` and `aria-live="polite"` attributes inside `#root` in `index.html`.
