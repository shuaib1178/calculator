## 2026-08-16 - Accessible Initial Loader Pattern
**Learning:** Inserting an inline CSS/SVG spinner inside `#root` in `index.html` with `role="status"` and `aria-label` provides instant accessible feedback during script loading and bundle execution, eliminating blank screen FOUC without extra CSS files.
**Action:** Use an inline flex layout with SVG SMIL animation inside `#root` for instant startup UX feedback that automatically disappears when React mounts.
