## 2026-09-18 - Static HTML Initial Loading State Accessibility
**Learning:** Static inline HTML loading indicators nested inside `#root` provide immediate, smooth visual feedback before JavaScript bundles finish downloading, avoiding unstyled page flashes while naturally clearing once React mounts.
**Action:** Use inline CSS flexbox, brand colors (`#054f49`), SMIL SVG animations, and screen-reader accessible attributes (`role="status"`, `aria-live="polite"`) in `index.html`.
