## 2026-09-12 - Initial Accessible HTML App Loader
**Learning:** Nesting a lightweight CSS-only/SMIL SVG initial loader inside `#root` in `index.html` provides immediate accessible loading feedback during bundle initialization without FOUC or custom CSS classes.
**Action:** Use inline styles, system font fallbacks, brand color tokens (`#054f49`), and proper ARIA attributes (`role="status"`, `aria-label`) on nested containers inside `#root`.
