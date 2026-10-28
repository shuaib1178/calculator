## 2026-10-28 - Initial Load Accessible Spinner in Pure HTML

**Learning:** When React bundles take time to load or execute, displaying a zero-dependency SVG loading indicator inside `#root` prevents a blank white screen flash (FOUC). Using inline CSS with flexbox on a inner wrapper `<div>` rather than `#root` directly ensures smooth replacement when React mounts without breaking layout structure.

**Action:** Add inline SVG spinners with `role="status"` and `aria-live="polite"` inside `#root` in `index.html` styled with brand primary colors (`#054f49`) and page background (`#fcfbfd`).
