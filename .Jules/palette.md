## 2026-09-03 - Initial HTML Loading State Pattern
**Learning:** Adding an inline CSS/SMIL-animated initial loader inside `<div id="root">` prevents FOUC (Flash of Unstyled Content) and blank screens during JS bundle download/execution. Using `role="status"` and `aria-label` ensures screen reader users are notified immediately upon load.
**Action:** Implement initial loaders in `index.html` using inline styles (or SMIL for SVGs) matching brand color tokens without waiting for external stylesheets.
