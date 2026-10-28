# Palette Journal - UX & Accessibility Learnings

## 2026-10-28 - Initial HTML Load Spinner
**Learning:** Providing an inline CSS/SVG loading state inside `#root` in `index.html` prevents a blank screen during JS bundle loading, improving initial load UX while maintaining full WCAG accessibility with `role="status"`.
**Action:** Implement lightweight SMIL/inline CSS loaders inside the app container so React cleanly unmounts/replaces it once loaded.
