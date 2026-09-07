## 2026-09-07 - Accessible Static Initial Loader in index.html
**Learning:** Adding a CSS-only / SMIL-animated initial loader inside `<div id="root">` with inline styles and proper ARIA attributes (`role="status"`, `aria-label`) prevents blank-screen loading flicker without requiring custom CSS or external Tailwind assets before JS bundle load.
**Action:** Always nest initial static HTML loaders inside `<div id="root">` with flex centering and inline styles to ensure smooth transition when React mounts.
