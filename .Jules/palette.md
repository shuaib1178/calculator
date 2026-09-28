# Palette UX Journal

## 2026-09-28 - Initial Loader inside `#root` for SPA Startup
**Learning:** Adding a lightweight inline SVG loader inside `<div id="root">` with system fonts and ARIA attributes (`role="status"`, `aria-live="polite"`) prevents unstyled/blank flash during initial bundle loading and provides immediate accessibility feedback to screen readers.
**Action:** When working on SPAs with potential bundle load latency, nest a lightweight CSS/SVG loader inside `#root` using brand colors without relying on external CSS bundles.
