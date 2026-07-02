## 2026-07-02 - [Initial Loading UX]
**Learning:** Single Page Applications (SPAs) without a fallback loading indicator in the root HTML show a blank screen while the JavaScript bundle is being fetched and parsed. This is especially problematic for users on slower connections or devices.
**Action:** Always include a lightweight, CSS-only loading indicator inside the `#root` div in `index.html` to provide immediate visual feedback.
