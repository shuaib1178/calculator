# Palette's Journal - UX & Accessibility Learnings

## 2026-07-31 - WCAG AA Contrast Compliance and FOUC-Free Initial Loader
**Learning:** The default `brand.muted` color (`#c0c1c0`) provides a poor 1.93:1 contrast ratio against the light background (`#fcfbfd`), violating WCAG AA guidelines. Changing this to `#4b5563` boosts the contrast ratio to a fully compliant 7.7:1. Additionally, embedding an SVG spinner with a SMIL animation inside the `#root` container of `index.html` offers an accessible, immediate initial load state without FOUC or custom CSS blocks.
**Action:** Always verify color contrast ratios using standard accessibility values (like `#4b5563` for muted elements) and leverage inline-styled SVGs in `index.html` to improve perceived performance.
