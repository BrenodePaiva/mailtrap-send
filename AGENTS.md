# AGENTS.md

Express 5 + TypeScript API (ESM) that sends emails via Mailtrap. No test suite, no build step.

## Commands

- `npm run dev` — dev server (tsx watch src/server.ts)
- `npm start` — run (tsx src/server.ts; no build needed, `tsc` is `noEmit`)
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run format` / `npm run format:check` — Prettier
- Verification order: `npm run typecheck` then `npm run lint`

## Conventions (non-negotiable, enforced by pre-commit hooks)

- **Relative imports MUST use `.js` extension** in `.ts` files (ESM NodeNext): `from './app.js'`, never `from './app'`. Omission breaks at runtime.
- **`erasableSyntaxOnly`** — no enums, namespaces, or constructor parameter properties. **`verbatimModuleSyntax`** + `consistent-type-imports` — type-only imports use `import type`.
- Formatting: no semicolons, single quotes, trailing commas, 100 col (Prettier).
- Commit messages follow Conventional Commits (commitlint in `.husky/commit-msg`). Pre-commit runs `typecheck` + lint-staged (eslint --fix + prettier --write on `*.ts`).
- Code comments, Swagger summaries, and commit messages are written in Portuguese.

## Architecture

- `src/app.ts` — `createApp()` factory: JSON/urlencoded parsers, `/api-docs` (Swagger), routes, then `notFoundHandler` and `errorHandler` last.
- `src/server.ts` — local entrypoint. `api/index.ts` (Vercel serverless) and `src/index.ts` both just `export default createApp()`.
- `vercel.json` rewrites all routes to `/api`; `tsconfig.json` includes `src` and `api`.
- Routes mounted under `/api` in `src/routes/index.ts`; each route file carries inline Swagger JSDoc scanned by swagger-jsdoc (`./src/**/*.ts` and `.js`).
- Validation: zod schema + `validateSchema(schema, 'body-and-file')` middleware; validated data lands in `res.locals.validated`. For multipart resume uploads use `'body-and-file'`.
- `src/config/env.ts` throws at import time if a required var is missing — copy `.env.example` to `.env` before running. Required: `MAILTRAP_API_TOKEN`, `MAILTRAP_SENDER_EMAIL`, `MAILTRAP_TO_CONTACT`, `MAILTRAP_TO_CURRICULUM`.

## Gotchas

- **`src/assets/logo-data.ts` is generated** from `src/assets/logo.png` (base64, header says "nao editar"). Never edit by hand — if the logo changes, regenerate it. `src/config/logo.ts` falls back: file → embedded base64 → brand name in header.
- Email templates live in `src/templates/` (HTML strings); controllers call `render*Email()` and send via `mailtrap` client in `src/config/mailtrap.ts`.
- Resume upload uses multer memory storage with `MAX_RESUME_SIZE_MB` limit (default 5 MB).

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
