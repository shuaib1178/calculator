## 2026-09-12 - Initial Loader for Static Entry Point
**Learning:** Adding a CSS-only initial loading spinner inside `#root` in `index.html` provides immediate accessible feedback (`role="status"`, `aria-label="Loading Hirdog School System"`) prior to JS bundle mounting.
**Action:** Use inline flexbox styles and an SVG with SMIL animation nested inside `<div id="root">` so React automatically replaces it when mounted.
