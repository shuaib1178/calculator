## 2025-05-12 - [Initial Load UX & Accessibility]
**Learning:** React applications often show a blank white screen while the JavaScript bundle is loading, which is a poor UX and provides no feedback for screen reader users.
**Action:** Include a surgical, minimal CSS-only loading spinner with 'aria-live="polite"' and a '<noscript>' fallback inside the root div to ensure immediate user feedback.
