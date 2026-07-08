# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-07-08 - Initial Load UX
**Learning:** A blank screen during the initial React bundle load can be perceived as a broken application, especially on slower connections. Providing a CSS-only loader in `index.html` improves perceived performance and provides immediate feedback.
**Action:** Always include a lightweight, branded loading indicator in the root mount point of SPA projects.
