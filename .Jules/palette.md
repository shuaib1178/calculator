## 2026-10-13 - HTML Initial Loader Pattern
**Learning:** Adding a CSS/SVG-only initial loading state inside `<div id="root">` with `role="status"` and `aria-label` prevents white screen flash during JS bundle execution and provides instant feedback for screen readers.
**Action:** Always nest the loader inside `#root` using inline styles or SMIL SVG animation to ensure zero dependency on external CSS bundles before mounting React.
