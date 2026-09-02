## 2026-09-02 - Accessible Initial Loader Pattern
**Learning:** Adding a CSS/SMIL-animated loader inside `#root` in `index.html` prevents Flash of Unstyled Content (FOUC) and blank screen perception before JS bundle execution. Nesting inside `<div id="root">` ensures React automatically replaces the loader on mount. Using `role="status"` and `aria-label="Loading application"` provides immediate accessibility feedback.
**Action:** Always use inline styles and SVG SMIL animations for static index.html loaders to avoid dependency on external CSS bundles before load.
