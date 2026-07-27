# Palette's Journal - UX & Accessibility Learnings

## 2026-07-27 - WCAG AA Contrast Compliance and FOUC-Free Initial Loader
**Learning:** The initial default design token for `brand.muted` (`#c0c1c0`) has an extremely low contrast ratio of ~1.93:1 against the brand background color (`#fcfbfd`), which is highly inaccessible and fails WCAG AA standards. Changing it to `#4b5563` provides a robust ~7.7:1 contrast ratio, dramatically improving legibility. Furthermore, adding an inline-styled SVG spinner inside `#root` in `index.html` prevents Flash of Unstyled Content (FOUC) and ensures an immediate, elegant loading state.
**Action:** Always verify color contrast ratios using standards-compliant targets (like #4b5563 for muted text) and provide semantic initial fallback loaders inside `#root` for better perceived performance.
