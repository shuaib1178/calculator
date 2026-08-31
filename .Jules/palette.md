## 2026-08-31 - Initial Application Loading State
**Learning:** Adding a lightweight, CSS-only initial loader inside `<div id="root">` with proper ARIA attributes (`role="status"`, `aria-label`) prevents blank screen flash during bundle fetch and improves perceived speed without requiring custom CSS bundles.
**Action:** Always wrap initial HTML loader within `<div id="root">` using inline CSS and SMIL SVG animations so React automatically replaces it upon mounting.
