## 2026-10-17 - Accessible Initial HTML Loader Pattern
**Learning:** Nesting a CSS-only/SMIL inline-styled loader inside `<div id="root">` with `role="status"` and `aria-live="polite"` prevents FOUC and gives immediate visual and screen-reader feedback before the JS bundle loads, automatically unmounting when React renders.
**Action:** Use inline styles, brand colors (`#054f49`), and SMIL SVG animations inside `#root` for instant accessible loading feedback in static HTML entrypoints.
