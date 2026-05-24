## 2026-05-24 - [Accessible Color Contrast Fix]
**Learning:** The 'brand.muted' color (#c0c1c0) in the default Tailwind config failed WCAG AA contrast standards (1.81:1) against white backgrounds, which is common in this app's card-based layout.
**Action:** Updated 'brand.muted' to #6b7280, achieving a 4.83:1 contrast ratio, ensuring accessibility for secondary text and icons without compromising the 'muted' visual intent.
