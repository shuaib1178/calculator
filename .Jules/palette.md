## 2026-09-30 - Accessible HTML Initial Loader
**Learning:** Adding a static CSS/SVG loading state inside `#root` in `index.html` with `role="status"` and `aria-label` improves visual perception and screen reader feedback during initial application bundle loading without risking layout shift once React mounts.
**Action:** Always nest initial static HTML loaders inside `<div id="root">` wrapper using inline styles and fallback font stacks to avoid FOUC before external CSS loads.
