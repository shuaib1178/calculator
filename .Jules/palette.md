## 2026-06-26 - Improve accessibility with WCAG-compliant muted color and initial loading state
**Learning:** The default 'muted' color (#c0c1c0) in the brand palette had a contrast ratio of approximately 1.8:1 against a white background, failing WCAG AA (4.5:1). Additionally, a blank page during React initialization provides poor UX and lacks accessibility feedback.
**Action:** Updated 'brand.muted' to #4b5563 (gray-600) for a ~7.5:1 contrast ratio. Added a semantic loading state with `role="status"` to `index.html` to provide immediate visual and screen-reader feedback.
