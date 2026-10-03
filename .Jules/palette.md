## 2026-10-03 - Initial HTML Loader Pattern
**Learning:** Nesting a CSS/SVG initial loading container inside `<div id="root">` with inline styles provides immediate visual feedback before JS bundles execute, preventing blank screens without FOUC or custom CSS dependencies.
**Action:** Always wrap initial HTML loader inside a child wrapper `<div>` inside `#root` and use inline styles with brand tokens.
