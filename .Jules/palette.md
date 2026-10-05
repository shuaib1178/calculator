# Palette's Journal

## 2026-10-05 - Accessible Initial HTML Loading State
**Learning:** Adding a static CSS/SMIL SVG initial loader inside `<div id="root">` with `role="status"` and `aria-label="Loading Hirdog School System"` improves initial loading UX and accessibility before the JS bundle executes, eliminating blank screen FOUC without affecting React mounting.
**Action:** Use inline styles on a inner container wrapper inside `<div id="root">`, system fonts, and SMIL SVG animation for zero-dependency HTML-level initial feedback.
