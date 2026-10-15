## 2026-10-15 - Initial HTML Loader Pattern & Accessibility
**Learning:** Adding a lightweight, CSS/SMIL-based loader inside `<div id="root">` prevents FOUC (Flash of Unstyled Content) and blank screen delays prior to React JS bundle execution. Using `role="status"` and `aria-live="polite"` ensures screen reader users are informed that the application is loading.
**Action:** Always wrap initial load markup inside `#root` using inline styles with fallback system fonts and brand colors, ensuring it is cleanly replaced once React mounts.
