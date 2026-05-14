## 2025-05-14 - Initial Loader & Accessibility Enhancements
**Learning:** For React apps with large bundles, an accessible initial loader in `index.html` prevents a "blank screen" flash and provides immediate feedback. Standardizing `brand.muted` colors for WCAG AA contrast ensures long-term accessibility across the UI.
**Action:** Always check the root `index.html` for a `noscript` tag and a basic loading state during initial audit.
