# Palette UX Journal

## 2026-09-03 - Initial Loader in Static HTML
**Learning:** Adding a CSS-only / inline SMIL SVG initial loader inside the `#root` container provides instant visual feedback while JS bundles download and prevents unstyled layout shifts (FOUC).
**Action:** Always wrap initial loaders in a container inside `#root` with `role="status"` and accessible `aria-live="polite"` text using fallback system fonts and brand primary colors.
