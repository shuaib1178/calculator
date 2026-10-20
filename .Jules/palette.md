## 2026-10-20 - Initial Application Loading State
**Learning:** Adding a lightweight, accessible CSS/SMIL-animated initial loading indicator inside `<div id="root">` in static `index.html` prevents Flash of Unstyled Content (FOUC) and blank white screens during initial JS bundle fetch/parse while respecting accessibility standards via `role="status"`.
**Action:** Always wrap initial static loader inside `#root` using inline styles or SVG SMIL animations to ensure immediate zero-dependency feedback that React unmounts naturally when mounting the app.
