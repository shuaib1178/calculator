## 2026-09-08 - Accessible Initial Loading State in Single-Page Applications
**Learning:** Single-Page Applications (SPAs) with an empty `#root` element present a blank white screen during bundle loading, creating confusion for users and screen reader users about whether the application is loading or unresponsive.
**Action:** Provide an immediate, zero-dependency inline CSS/SMIL SVG initial loader inside `<div id="root">` with `role="status"` and `aria-label="Loading application"` to ensure immediate visual and screen reader feedback before JS bundles execute.
