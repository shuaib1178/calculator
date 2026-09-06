# Palette's Journal - UX & Accessibility Learnings

## 2026-09-06 - Initial Loader Pattern
**Learning:** Implementing an SVG spinner with inline SMIL animation inside `<div id="root">` with `role="status"` provides immediate, accessible visual feedback prior to JavaScript bundle load without requiring external CSS or custom build steps.
**Action:** Use inline styles, SMIL SVG animations, and standard fallbacks inside `#root` for initial application loading states.
