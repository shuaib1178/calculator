## 2026-09-09 - Accessible Static Initial Loader

**Learning:** Static single-page applications without an initial HTML loading indicator cause a temporary blank white screen or Flash of Unstyled Content (FOUC) while JS assets load, confusing screen readers and users on slow networks.
**Action:** Embed an accessible SMIL-animated SVG spinner inside `<div id="root">` with `role="status"` and `aria-label`, so it renders immediately before JS hydration and is seamlessly replaced when React mounts.
