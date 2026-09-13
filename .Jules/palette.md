## 2026-09-13 - Initial HTML Loader Pattern
**Learning:** Adding a CSS/SMIL fallback loader directly inside `<div id="root">` in `index.html` prevents white screen flash (FOUC) during initial JS bundle fetch without relying on external CSS bundles.
**Action:** Use inline flex container, SMIL SVG animation, and `role="status"` with `aria-live="polite"` inside `#root` so React naturally replaces it upon mounting.
