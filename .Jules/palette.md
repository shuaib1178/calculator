## 2026-09-29 - Initial Load State in Single Page Applications
**Learning:** Single Page Applications without inline HTML loading indicators present a blank white screen during bundle downloading and parsing, creating uncertainty for users and screen reader unfriendliness.
**Action:** Nest a CSS/SMIL SVG initial loading indicator with `role="status"` and `aria-label` inside `<div id="root">` so React automatically replaces it when mounted.
