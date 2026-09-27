## 2026-09-27 - Initial Load Accessibility & Experience
**Learning:** Inserting a lightweight CSS/inline-styled loader with SMIL-animated SVG inside `#root` in `index.html` gives instant visual feedback and screen-reader context (`role="status"`, `aria-label`) before JS bundles execute, avoiding a flash of unstyled blank page.
**Action:** Always wrap initial page loaders inside `#root` using inline styles or SMIL animations so React cleanly replaces them upon mounting without FOUC or extra dependencies.
