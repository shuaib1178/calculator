## 2026-09-26 - Initial Loading Feedback in index.html
**Learning:** Nesting an accessible loading state inside `#root` with inline CSS and SMIL SVG animations prevents white-screen flickering before JavaScript loads without interfering with React's DOM mounting.
**Action:** Always wrap initial loaders inside a container nested in `<div id="root">` rather than applying styles directly to `#root`.
