## 2026-08-26 - Initial Application Loader Pattern
**Learning:** Adding a CSS/inline SVG-based loading state directly inside `#root` in `index.html` prevents a blank screen (FOUC) while JavaScript bundle assets load, and using SMIL animations allows zero dependency CSS-free spinner animation.
**Action:** Always nest initial HTML loading skeletons inside `#root` with appropriate ARIA attributes (`role="status"`, `aria-label`) and inline brand styles.
