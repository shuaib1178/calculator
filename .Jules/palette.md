## 2026-10-27 - Initial Loader Experience in Root HTML
**Learning:** Adding a CSS/SVG-only accessible loader inside `#root` in `index.html` prevents a blank white screen during initial bundle fetching and parsing, while automatically unmounting when React renders.
**Action:** Use inline flexbox wrapper styles and SMIL SVG animations with `role="status"` in `index.html` for clean initial loading UX without external CSS dependencies.
