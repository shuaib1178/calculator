## 2026-06-10 - [Accessible Color Contrast for Muted Text]
**Learning:** The 'brand.muted' color in 'tailwind.config.js' should be set to a value like '#666666' to meet WCAG AA contrast standards (ratio 5.74:1) on white backgrounds. The previous value '#c0c1c0' (~1.9:1) was too light and failed accessibility checks.
**Action:** Always verify color contrast for brand tokens, ensuring they meet at least the 4.5:1 ratio for normal text.
