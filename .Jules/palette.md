# Palette's Journal - UX & Accessibility Learnings

## 2026-07-12 - Initial Discovery
**Learning:** The brand's muted color (`#c0c1c0`) has insufficient contrast (~1.93:1) against the page background (`#fcfbfd`), failing WCAG AA standards.
**Action:** Recommend updating `brand.muted` to a more accessible shade like `#4b5563` in a future task.

## 2026-07-12 - Reusable UX Pattern: Initial Loader
**Learning:** Implementing a CSS-only loading state within the 'index.html' #root div (using a flex container, brand-colored spinner, and 'role="status"' text) provides immediate feedback while the JavaScript bundle loads.
**Action:** Use this pattern in Vite/React projects to improve perceived performance and prevent a blank screen on initial load.
