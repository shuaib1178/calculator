## 2026-09-08 - Accessible Initial Loader Pattern
**Learning:** Adding a lightweight, CSS-free SMIL-animated loader inside `#root` in `index.html` provides immediate, zero-latency visual feedback for users before JS bundles execute, preventing layout shift and unstyled content.
**Action:** Use inline styles with brand background (`#fcfbfd`) and primary color (`#054f49`), along with `role="status"` and `aria-live="polite"`, nested inside `<div id="root">` so React automatically replaces it upon mounting.
