## 2026-09-14 - Initial Loader UX Pattern
**Learning:** Nesting a flexbox loading spinner inside `<div id="root">` with inline styles and SMIL SVG animations provides instant visual and screen reader feedback without FOUC or custom CSS, and automatically unmounts when React renders.
**Action:** Use inline styles, brand colors (#054f49 / #fcfbfd), and explicit ARIA attributes (`role="status"`, `aria-label="Loading application"`) on a wrapper `<div>` inside `<div id="root">`.
