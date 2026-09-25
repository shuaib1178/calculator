# Palette's Journal - UX & Accessibility Learnings

## 2026-09-25 - Initial Loader for SPA Pre-hydration UX
**Learning:** Implementing an inline CSS and SMIL SVG loader inside `<div id="root">` prevents unstyled content flickering (FOUC) and blank white screens while JS/CSS bundles load, while `role="status"` ensures accessibility for screen readers.
**Action:** Always nest initial static HTML loaders inside `#root` using inline styles or SMIL animations so React automatically replaces them upon mounting.
