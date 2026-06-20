## 2026-01-10 - Initial Loader and Accessibility Refinements
**Learning:** Adding a lightweight, CSS-based loading spinner in `index.html` significantly improves perceived performance for SPAs before the JS bundle mounts. Also, the original `brand.muted` color (#c0c1c0) failed WCAG AA contrast standards (1.7:1), requiring a darker shade (#4b5563) for legibility.
**Action:** Always check brand tokens for accessibility and implement a minimal loading state in the root HTML to avoid blank screens during initialization.
