## 2026-08-27 - Initial Loading State Micro-UX & Accessibility
**Learning:** Adding a CSS/SVG inline loading spinner with `role="status"` and `aria-label` directly inside `#root` in `index.html` prevents Flash of Unstyled Content (FOUC) and gives immediate feedback during JS bundle fetching while maintaining full WCAG AA accessibility.
**Action:** Always include an inline, system-font fallback loading indicator in `index.html` for single-page React apps before JS mounts.
