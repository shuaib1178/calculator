## 2025-01-24 - Accessible Muted Text
**Learning:** The previous `brand.muted` color (#c0c1c0) had insufficient contrast against white backgrounds, failing WCAG accessibility standards.
**Action:** Updated `brand.muted` to #6b7280 in `tailwind.config.js` to ensure a contrast ratio of at least 4.5:1 (actual 4.83:1), meeting WCAG AA requirements.
