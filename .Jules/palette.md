## 2026-10-19 - Initial Loader UX and FOUC Prevention
**Learning:** Adding a lightweight, CSS/SMIL-animated initial loader inside `#root` in `index.html` prevents a blank screen during JS bundle execution and avoids FOUC without external stylesheet dependencies.
**Action:** Use inline flexbox wrapper styles and SMIL-animated SVG with `role="status"` and `aria-label` inside `#root` for instant, accessible feedback.
