# Palette Journal - Critical UX & Accessibility Learnings

## 2026-10-12 - HTML Initial Loading State Pattern
**Learning:** Adding an initial loading state inside `<div id="root">` using inline styles and SMIL SVG animation provides an immediate, accessible visual feedback indicator during application boot, avoiding layout shifts or FOUC before React mounts.
**Action:** Nest the loader inside `<div id="root">` with `role="status"` and `aria-label` using inline styles and SMIL animated SVG so React smoothly replaces it when initialized.
