## 2026-08-23 - Initial Static HTML Loader Accessibility & UX
**Learning:** Adding an accessible, inline CSS/SVG loader inside `#root` in `index.html` prevents a Flash of Unstyled/Empty Content (FOUC) while JavaScript modules load, improving perceived startup performance and accessibility for screen readers (`role="status"`).
**Action:** Use inline styles with brand background (`#fcfbfd`) and brand primary color (`#054f49`), fallback system fonts, and SVG SMIL animation for lightweight, framework-agnostic initial load state without custom CSS files.
