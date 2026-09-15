## 2026-09-15 - Accessible CSS-only Initial Loading Spinner Pattern
**Learning:** Adding a lightweight CSS/SMIL-based SVG loading spinner with `role="status"` and `aria-label="Loading application"` inside `<div id="root">` ensures immediate visual feedback and screen reader notifications prior to JS execution without FOUC or external dependencies.
**Action:** Embed initial loading indicator markup directly within the `#root` element in `index.html` using brand colors (`#054f49` / `#fcfbfd`) and SMIL SVG animations.
