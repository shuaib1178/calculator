## 2026-08-27 - HTML Initial Loader Pattern
**Learning:** Adding a minimal inline SVG loader with `role="status"` and `aria-live="polite"` inside `#root` in `index.html` prevents a blank white screen during bundle load without relying on external CSS bundles or classes.
**Action:** Always nest static initial loaders directly inside `#root` using inline SVG animation and inline styles matching brand tokens (`#054f49`, `#fcfbfd`) so that React automatically replaces it upon mounting.
