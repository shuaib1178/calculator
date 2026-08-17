## 2026-08-17 - Accessible Initial Loading Fallback
**Learning:** Adding an accessible CSS/SVG loading state inside `#root` in `index.html` eliminates blank screen Flash of Unstyled Content (FOUC) while JavaScript modules load, improving perceived performance and accessibility for screen readers (`role="status"` and `aria-label`).
**Action:** When working on SPA initial loads, nest static accessible loading skeletons inside `#root` with inline fallback styles and SMIL animations so they seamlessly unmount when React finishes rendering.
