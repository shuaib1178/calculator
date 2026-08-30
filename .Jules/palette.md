## 2026-08-30 - Initial Loader Pattern in Static HTML
**Learning:** Adding a static CSS/SVG loading indicator inside `<div id="root">` improves perceived load performance and provides immediate screen reader feedback (`role="status"`, `aria-label="Loading application..."`) before JS bundles execute.
**Action:** Always use inline styles and SMIL SVG animations inside `#root` for static initial load indicators to prevent FOUC without adding extra CSS dependencies.
