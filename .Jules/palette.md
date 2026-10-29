## 2026-10-29 - Accessible Initial Page Loading State
**Learning:** Nesting a flexbox loader inside `<div id="root">` with inline CSS styling, system font stack (`system-ui, -apple-system, sans-serif`), and SMIL SVG animations avoids FOUC and provides instant visual and screen reader (`role="status"`, `aria-label`) feedback before JS execution.
**Action:** Use a wrapper `div` inside `#root` with inline styles (`display: flex; height: 100vh`) to ensure seamless replacement when React mounts without causing layout shifts.
