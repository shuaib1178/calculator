## 2026-10-08 - Accessible Initial Loading Indicator
**Learning:** Adding a static CSS/SVG loading state inside the root DOM element in index.html prevents unstyled blank screens (FOUC) while JS bundles load, improving perceived performance. Nesting it inside `#root` allows React/frameworks to seamlessly replace it upon mount.
**Action:** Use inline styles and SMIL SVG animation inside `#root` with `role="status"` and `aria-label="Loading application"` to ensure accessibility and immediate visual feedback without external CSS dependencies.
