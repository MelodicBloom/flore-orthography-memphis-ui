# FLORÉ — Orthography × Memphis × Illustrated Floral × Impasto

> Artful systems for brands that bloom.

A production-ready **Vite + React + TypeScript + Tailwind** design-system showcase website.

## Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/) — UI
- [TypeScript](https://www.typescriptlang.org/) — types
- [Tailwind CSS v3](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — animation
- [Lucide React](https://lucide.dev/) — icons
- [pnpm](https://pnpm.io/) — package manager

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview build locally |
| `pnpm typecheck` | Run TypeScript check |
| `pnpm lint` | Run ESLint |

## Palette

| Token | Hex |
|-------|-----|
| Ink | `#0E0F14` |
| Ivory | `#F7F3EE` |
| Blush | `#F2D7D9` |
| Sage | `#C7D8C0` |
| Lavender | `#8D7CC3` |
| Ochre | `#E9C46A` |
| Deep Green | `#123B2D` |
| Charcoal | `#222222` |

## Structure

```
src/
  app/App.tsx
  components/
    layout/   Header · Footer
    sections/ Hero · DesignSystem · About · SelectedWork · Journal · TypographySpecimen · CTA
    ui/       Button · Card · ColorSwatch · PaintingPanel · MemphisDecor
    motion/   Reveal
  data/       tokens · projects · journal
  styles/     globals.css
  main.tsx
```

---

© 2024 FLORÉ Studio. All rights reserved.
