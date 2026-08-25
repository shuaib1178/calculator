## 2026-08-25 - Initial Static HTML Loading Spinner
**Learning:** Nesting a static SVG loader inside `#root` in `index.html` with inline flexbox styling provides immediate visual feedback before JavaScript loads without FOUC or external CSS dependencies.
**Action:** Use inline styles and SMIL-animated SVG inside `<div id="root">` with `role="status"` and `aria-live="polite"` for accessible initial load feedback.
