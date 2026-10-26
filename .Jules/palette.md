## 2026-10-26 - Initial Load UX with Inline SMIL Spinner
**Learning:** Adding a CSS/SVG spinner directly inside `#root` in `index.html` with inline styles prevents white-screen flashes during initial React bundle loading without causing post-mount layout shifts or requiring CSS bundle evaluation.
**Action:** Use inline flexbox styling and an accessible SMIL SVG animation inside `<div id="root">` for zero-dependency initial loading feedback.
