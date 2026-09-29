# Palette Journal

## 2026-09-29 - Initial Load State with Accessible Spinner in index.html
**Learning:** Displaying a CSS/SMIL-animated initial loader directly inside the `#root` container in `index.html` prevents Flash of Unstyled Content (FOUC) and blank screens during bundle load, providing immediate visual feedback and screen-reader accessibility (`role="status"`).
**Action:** Use inline styles and SMIL-animated SVG elements within `#root` for initial application mount points to ensure smooth loading feedback without relying on external CSS bundles.
