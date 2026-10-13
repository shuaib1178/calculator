## 2026-10-13 - Initial HTML Loading Spinner & Accessibility
**Learning:** Adding a lightweight, CSS/SVG inline loading spinner with `role="status"` and `aria-label` directly inside `#root` in `index.html` prevents Flash of Unstyled Content (FOUC) and blank white screen delay before JavaScript bundles execute, while providing immediate screen reader feedback.
**Action:** Always nest initial HTML loaders inside `<div id="root">` with inline styles, standard system fonts, and SMIL SVG animations so React automatically replaces it when mounted.
