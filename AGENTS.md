<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build; also runs the full TypeScript check
- `npx tsc --noEmit` — fast typecheck (no npm script exists for it)
- `npm run lint` — ESLint flat config (`eslint.config.mjs`)
- No test runner, no formatter, no CI. Verification = `npm run lint` → `npx tsc --noEmit` → `npm run build`.
- Use npm (package-lock.json), not pnpm/yarn/bun.
- Baseline: `npm run lint` currently fails (exit 1) with 2 pre-existing `react-hooks/set-state-in-effect` errors in generated/boilerplate files — `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts` — plus an unused-import warning in `src/app/page.tsx`. Don't chase these unless asked; just don't add new errors.

## Next.js 16 specifics

- Version-matched docs: `node_modules/next/dist/docs/` (same structure as nextjs.org/docs). Check here before assuming an API from training data.
- `LayoutProps<"/">` / `PageProps<"/">` are **global** types in layouts/pages — no import.
- `next.config.ts` enables `cacheComponents` (caching/fetch semantics differ from classic Next — see bundled `01-app/02-guides/migrating-to-cache-components.md`), `partialPrefetching`, and the React Compiler (`reactCompiler: true`). Compiler/lint rules forbid patterns like calling `setState` synchronously in effects.

## Stack & conventions

- App Router under `src/app/` (currently just `layout.tsx` + `page.tsx`). Alias `@/*` → `./src/*`.
- Tailwind CSS **4** — there is no `tailwind.config.*`; theme tokens are CSS-first in `src/app/globals.css` (`@theme inline`). CSS is processed by the `@tailwindcss/turbopack` loader rule in `next.config.ts`.
- shadcn/ui style **base-nova** built on **Base UI** (`@base-ui/react`) — *not* Radix. Components live in `src/components/ui/` as locally-owned source; add more with `npx shadcn add <name>` (config in `components.json`).
- `cn` is imported from the `cn` package directly (`import { cn } from "cn"`); `src/lib/utils.ts` only re-exports it. Follow the pattern in existing `src/components/ui/*.tsx` files.
- Shiki code highlighting supports only the languages listed in the `languages` map in `src/lib/highlighter.tsx` — add an import there to support a new one.
