# Palette Journal

## 2026-07-14 - Initial load UX improvement
**Learning:** Single Page Applications often show a blank screen while the main JavaScript bundle is being fetched and parsed, which can lead to a poor user experience and perceived slow performance. Providing a CSS-only loading state in the HTML entry point gives immediate feedback to the user.
**Action:** Implement a lightweight, accessible CSS-only spinner in `index.html` inside the `#root` div to improve the initial loading experience.
