## 2026-10-07 - Initial Loader UX Pattern
**Learning:** Centering a CSS-only/SMIL-animated loader within `<div id="root">` using inline flexbox styles and system fallback fonts prevents visual flicker and provides immediate screen reader feedback (`role="status"`) before JavaScript bundle execution.
**Action:** Always wrap initial loaders in a nested wrapper inside `#root` rather than applying styles directly to `#root` to avoid layout shifts when React mounts.
