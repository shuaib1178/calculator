## 2026-10-01 - Accessible Initial HTML Loader Pattern

**Learning:** When JavaScript bundles are loading on initial app startup, displaying an unstyled or blank page hurts perceived performance and lacks accessibility for screen reader users. Nesting an accessible loader with `role="status"` and `aria-label` inside `<div id="root">` with inline system-font styling provides immediate visual and screen reader feedback, which React automatically replaces once mounted.
**Action:** Always include an inline CSS/SVG loading state with `role="status"` inside `<div id="root">` in `index.html` to improve initial loading UX without requiring additional CSS/JS assets.
