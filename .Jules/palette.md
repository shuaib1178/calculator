## 2026-10-11 - Initial Loading State in index.html
**Learning:** Nesting a CSS/SMIL-animated fallback loader directly inside `<div id="root">` with inline styles ensures an immediate, accessible, and flicker-free visual feedback state during application load before React mounts and replaces `#root`.
**Action:** Use inline styles, brand primary color `#054f49`, brand background `#fcfbfd`, system fonts, and `role="status"` on a container nested inside `#root`.
