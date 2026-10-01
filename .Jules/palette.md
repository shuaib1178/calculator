## 2026-10-01 - Initial Accessible Loader
**Learning:** Adding a CSS-only/inline SVG loader inside `<div id="root">` with `role="status"` and `aria-live="polite"` provides immediate feedback before the JavaScript bundle executes, eliminating blank screen flashes without relying on external CSS bundles.
**Action:** Implement lightweight inline styles and SMIL-animated SVGs inside `#root` wrapper elements for zero-FOUC initial loading states.
