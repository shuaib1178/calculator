## 2026-10-08 - Accessible HTML Initial Loader
**Learning:** Adding a lightweight, inline-styled loader with `role="status"` and `aria-live="polite"` inside `#root` in `index.html` prevents Flash of Unstyled Content (FOUC) and informs screen readers immediately during application startup before JavaScript bundles load.
**Action:** Use inline CSS flexbox centering and SMIL animated SVGs matching brand colors for static initial html loaders.
