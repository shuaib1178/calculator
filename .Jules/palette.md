## 2024-06-16 - [Accessibility: Improving Muted Text Contrast]
**Learning:** The 'brand.muted' color (#c0c1c0) provided a contrast ratio of only ~1.85:1 against a white background, failing WCAG AA standards. This makes text or icons using this color nearly invisible for users with visual impairments. Standardizing on gray-600 (#4b5563) or darker ensures a compliant contrast ratio (>4.5:1).
**Action:** Always verify contrast ratios for brand tokens during setup. Use tools or standardized palettes (like Tailwind's default shades) to ensure accessibility by design.
