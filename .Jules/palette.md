## 2026-08-24 - Initial Load State Accessibility
**Learning:** Single page applications without initial HTML loading indicators leave screen readers and visual users in a blank state while JS bundles download and parse.
**Action:** Inject an inline-styled SVG loading spinner with `role="status"` and `aria-live="polite"` directly inside `#root` in `index.html` so feedback is immediate and automatically replaced when React mounts.
