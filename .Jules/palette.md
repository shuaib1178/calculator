## 2026-07-06 - Importance of Initial Load Feedback
**Learning:** Single-page applications (SPAs) often show a blank screen while the JavaScript bundle is loading. This can lead to user confusion and perceived performance issues. Providing a fallback loading indicator in the root element improves the user experience and ensures accessibility by communicating the system's state.
**Action:** Always include a CSS-only spinner or progress indicator within the main mounting element of an SPA to provide immediate feedback.
