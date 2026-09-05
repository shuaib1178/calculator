## 2026-09-05 - Initial Page Load Accessible Spinner Pattern
**Learning:** Adding an inline CSS/SVG loading spinner with `role="status"` inside `<div id="root">` provides immediate visual and screen-reader feedback during JS bundle fetching while avoiding FOUC (Flash of Unstyled Content).
**Action:** Use inline SVG with SMIL animations or inline CSS styled with brand tokens inside `#root` for SPAs, ensuring seamless replacement once React mounts.
