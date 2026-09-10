## 2026-09-10 - Static HTML Initial Loading Indicator
**Learning:** Placing an accessible CSS/SVG loading state inside `<div id="root">` in `index.html` provides immediate visual feedback during JS bundle fetching without FOUC, and is automatically unmounted when React mounts.
**Action:** Use inline flexbox styling with `min-height: 100vh` on an inner wrapper div, `role="status"`, `aria-label="Loading application"`, and a brand-colored (`#054f49`) SMIL-animated SVG spinner for smooth, zero-dependency initial load UX.
