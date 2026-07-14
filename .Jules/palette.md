## 2026-07-14 - [Initial Loader Pattern]
**Learning:** Adding a CSS-only loading state within the `#root` div in `index.html` provides immediate feedback to users during the initial load, especially before the main JavaScript bundle is parsed and executed. Using inline styles prevents FOUC.
**Action:** Use a simple, accessible CSS spinner with `role="status"` in `index.html` for all new projects to improve perceived performance.
