## 2024-05-29 - Initial Load State Accessibility
**Learning:** Adding a lightweight CSS-based loading spinner with `role="status"` and `aria-live="polite"` directly in `index.html` ensures that users, including those using assistive technologies, receive immediate feedback while the React application bundle is downloading and hydrating.
**Action:** Always implement a basic, accessible loading state in the root HTML to avoid a blank screen experience during the initial hydration phase.
