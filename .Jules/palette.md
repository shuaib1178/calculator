# Palette's Journal

## 2026-07-05 - Initial Loader UX Improvement
**Learning:** The application lacks an initial loading state in `index.html`, leading to a blank screen while the React bundle loads. This can be confusing for users, especially on slower connections.
**Action:** Added a CSS-only loading indicator with proper ARIA roles to `index.html` to provide immediate visual feedback and ensure a smoother initial user experience.
