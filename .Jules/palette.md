# Palette Journal - UX & Accessibility Learnings

## 2026-09-28 - Inline Initial Loader in HTML Root
**Learning:** Adding a lightweight inline SVG/CSS loader nested directly within `<div id="root">` prevents FOUC (Flash of Unstyled Content) and gives screen readers immediate feedback (`role="status"`, `aria-live="polite"`) during cold initial load before JavaScript bundles parse and mount.
**Action:** Always nest initial static loading indicators inside `#root` using brand inline styles and SMIL animations to keep load times instantaneous and fully accessible without external CSS dependencies.
