## 2026-09-21 - Initial HTML Loader Pattern
**Learning:** Adding a lightweight, CSS/inline SVG loader inside `<div id="root">` gives instant visual feedback before the JS bundle downloads and mounts React, preventing a blank screen FOUC.
**Action:** Use inline styles and SMIL SVG animations with standard accessible markup (`role="status"` and `aria-label`) nested directly inside `<div id="root">`.
