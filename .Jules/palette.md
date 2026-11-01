## 2026-11-01 - Accessible Initial Fallback Loader in HTML Shell
**Learning:** Adding an inline CSS/SVG loader directly inside `#root` in `index.html` prevents a blank screen (FOUC) during initial script load without layout shift once React mounts.
**Action:** Use inline styles, brand colors (`#054f49`), and standard ARIA attributes (`role="status"`, `aria-label`) inside `#root` for static fallback loaders.
