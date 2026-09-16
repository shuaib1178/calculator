## 2026-09-16 - Initial Load Experience and Zero-FOUC Spinner Pattern

**Learning:** Nesting an accessible loading indicator with inline CSS and SMIL SVG animations directly inside `#root` in `index.html` prevents Flash of Unstyled Content (FOUC) and provides immediate visual feedback before JavaScript/CSS bundles load, while ensuring React seamlessly overwrites it upon mounting.
**Action:** For SPAs, provide inline-styled static HTML loaders inside `#root` using brand primary colors and `role="status"` to announce loading states to screen readers immediately on page request.
