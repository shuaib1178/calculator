## 2026-08-28 - Accessible Initial HTML Loading State
**Learning:** Adding an inline CSS/SVG loader inside `#root` in `index.html` prevents a white screen flash before React mounts, while providing screen reader feedback with `role="status"` and `aria-label`.
**Action:** Use inline styles and SMIL-animated SVG elements within `#root` for static fallback loaders to ensure immediate rendering without relying on external bundles or custom CSS classes.
