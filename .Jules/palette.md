# Palette's Journal - UX & Accessibility Learnings

## 2026-07-27 - Reusable UX Pattern: FOUC-Free Initial Loader
**Learning:** Adding a static CSS or custom-styled loading spinner in `index.html` often causes a Flash of Unstyled Content (FOUC) if Tailwind CSS or custom style blocks are used before the main CSS bundle is loaded. Moreover, style tags can violate strict custom CSS constraints. Using an SVG spinner with inline SMIL `<animateTransform>` and inline styles on the centering container provides immediate, flicker-free, and branded visual feedback.
**Action:** In future projects with strict CSS rules and initial load lag, implement initial loaders using inline-styled flexbox layouts and SVG SMIL animations wrapped inside the `#root` element.
