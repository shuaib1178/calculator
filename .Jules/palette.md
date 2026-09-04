# Palette's Journal - Critical Learnings

## 2026-09-04 - Initial Loader UX and Accessible Loading States
**Learning:** Adding a lightweight, accessible HTML/SVG spinner inside `<div id="#root">` prevents a blank screen during JS module resolution, providing immediate visual feedback with zero FOUC and full screen reader compatibility via `role="status"`.
**Action:** Always wrap initial loading states in `<div id="root">` with inline styles and SMIL animated SVGs when bundlers/CSS preprocessors are loading asynchronously.
