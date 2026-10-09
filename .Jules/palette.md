## 2026-10-09 - Accessible Initial HTML Loader Pattern
**Learning:** Adding a static CSS/SMIL-animated SVG loader directly inside the `#root` container in `index.html` with `role="status"` and `aria-label` provides instant visual feedback and screen reader accessibility before JavaScript bundles load, avoiding blank screen flashes without requiring custom CSS classes or external stylesheets.
**Action:** Use inline flexbox styling and an inline SVG spinner with SMIL animation nested in `#root` for instant, framework-agnostic loading states.
