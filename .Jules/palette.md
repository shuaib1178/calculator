## 2026-09-02 - Initial Loader for SPA Startup
**Learning:** Adding a centered inline HTML/CSS loader inside `#root` in `index.html` gives users instant visual feedback during initial script parsing and JS bundle download before React mounts.
**Action:** Nest a lightweight, accessible CSS/SVG loader inside `<div id="root">` with proper `role="status"` and `aria-label`.
