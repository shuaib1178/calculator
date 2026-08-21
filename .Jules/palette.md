## 2026-08-21 - Initial Load UX with Inline SMIL Spinner
**Learning:** Inserting an accessible loading state inside `#root` in `index.html` using inline CSS and an SVG with SMIL `<animateTransform>` avoids FOUC and provides instant visual feedback while JS bundles load.
**Action:** When adding initial HTML loading states, place them inside `#root` using pure inline styles and SMIL animations so React automatically unmounts them when initialized.
