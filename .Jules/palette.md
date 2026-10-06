# Palette Journal - Critical UX Learnings

## 2026-10-06 - Initial HTML Loader Pattern for Single Page Applications
**Learning:** Adding a lightweight, CSS/SVG inline loader inside `<div id="root">` with `role="status"` and `aria-live="polite"` prevents blank white screens during initial JS bundle fetch without requiring external stylesheet dependencies or custom CSS.
**Action:** Use inline styles and SMIL SVG animation inside `#root` for initial application loading state.
