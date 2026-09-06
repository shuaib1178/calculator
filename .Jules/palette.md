# Palette Journal - Micro-UX & Accessibility Learnings

## 2026-09-06 - Initial HTML Loader Pattern for Single-Page Apps
**Learning:** Adding a lightweight CSS/SVG initial loader inside `<div id="root">` with `role="status"` gives immediate visual feedback before JavaScript bundle evaluation without causing FOUC or interfering with React mounting.
**Action:** Use inline styles and SMIL-animated SVG inside `<div id="root">` for zero-dependency startup loading feedback.
