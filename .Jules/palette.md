# Palette's UX & Accessibility Journal

## 2026-09-19 - Inline HTML Loader for Initial Load UX
**Learning:** Adding an inline CSS/SVG loader inside `#root` in `index.html` prevents a blank screen during JS bundle downloading/parsing while avoiding Flash of Unstyled Content (FOUC).
**Action:** Use inline styles, fallback system fonts, and SMIL animated SVGs inside `#root` with `role="status"` and `aria-live="polite"` for instant, accessible initial load feedback.
