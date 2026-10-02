## 2026-10-02 - Accessible Initial HTML Loader Pattern
**Learning:** Nesting a CSS/SVG inline loader inside `<div id="root">` with `role="status"` and `aria-live="polite"` provides immediate feedback during initial bundle fetch without FOUC or layout shift.
**Action:** Use inline SVG SMIL animations and system font fallbacks within `#root` for instant, framework-independent initial load states.
