# AGENTS.md — proyecto-4

## Authority
- **DESIGN.md** canonical for all visual/interaction/motion/layout/component decisions. Implement faithfully — do not redesign, reinterpret, or substitute.
- **PRODUCT.md** canonical for audience, goals, messaging, priorities, IA. Do not modify.
- Priority: user instructions > PRODUCT.md > DESIGN.md > existing code > assumptions

## Stack
- React 19 + TypeScript 6.0 + Vite 8 (`@vitejs/plugin-react` via Oxc)
- Plain CSS — no Tailwind, no CSS-in-JS. Use DESIGN.md CSS custom properties directly.
- No test framework installed. Add one (vitest + testing-library) before writing tests.

## Commands (order independent unless noted)
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (typecheck via project references, then bundle)
- `npm run lint` — ESLint flat config (`eslint.config.js`)
- `npm run preview` — Vite preview of built output

## TypeScript quirks (tsconfig.app.json)
- `verbatimModuleSyntax` → use `import type` for type-only imports
- `erasableSyntaxOnly` → no enums, no namespaces, no parameter properties
- `noUnusedLocals` / `noUnusedParameters` — lint errors, not warnings
- Project references: `tsconfig.app.json` covers `src/`, `tsconfig.node.json` covers `vite.config.ts`

## Design rules (condensed from DESIGN.md)
- Canvas: `#f6f3f1` (Parchment Cream), never pure white
- Fonts: Untitled Serif 400 for headlines, ABC Diatype Mono for UI text/buttons/nav/tags
- Radii: pills/tags/buttons = 100px, cards = 40px, inputs = 8px
- Shadows: only `rgba(0,0,0,0.1) 0 0 10px` on elevated cards
- Color confined to decorative gradient illustrations; UI stays near-grayscale
- Animations: functional only (navigation, state changes, user understanding), no decorative
- Font substitutes in DESIGN.md if primary fonts unavailable

## Current state
- `src/` is Vite starter boilerplate — App.tsx, App.css, index.css are placeholder and will be replaced
- No previously set up design token files — tokens are in DESIGN.md as CSS custom properties

## Anti-patterns to avoid (unless in DESIGN.md)
Generic card grids, gradient headlines, glassmorphism, floating dashboard cards, decorative section numbering, template portfolio layouts, excessive effects
