## 2026-10-18 - Accessible Initial Loading State in HTML Root
**Learning:** Adding an inline CSS/SVG loading state inside `<div id="root">` in `index.html` provides immediate accessible feedback (`role="status"`, `aria-label`) before JS bundles load, eliminating initial white screen flickering and improving perceived loading performance.
**Action:** Wrap the initial loader layout in a inner `div` inside `<div id="root">` with inline flex styles, system font stack, and brand primary background/color, enabling React to naturally replace it upon mounting.
