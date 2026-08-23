## 2026-08-23 - Initial HTML Loading State Accessibility
**Learning:** Single Page Applications (SPAs) often render a blank screen until JavaScript bundles load and execute. Adding a lightweight, CSS-free, accessible loader (`role="status"`, `aria-label`) inside `#root` gives immediate visual feedback and announces the loading state to screen reader users before React hydrates.
**Action:** Always include an inline SVG/SMIL initial loading indicator in `index.html` within `#root` matching the brand theme colors.
