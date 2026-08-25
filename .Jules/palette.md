## 2026-08-25 - Initial HTML Loading State Accessibility
**Learning:** Adding a static CSS/SVG loading state inside `#root` in `index.html` with `role="status"` and `aria-live="polite"` prevents a Flash of Unstyled Content (FOUC) and provides immediate feedback to assistive technologies before React initializes.
**Action:** Use inline styles and SMIL SVG animations inside `#root` so the initial loader renders instantly without external dependencies.
