# Graph Report - mailtrap-send-email  (2026-08-18)

## Corpus Check
- 36 files · ~4,696 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 198 nodes · 264 edges · 16 communities (14 shown, 2 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0d3cf06c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- package.json
- compilerOptions
- contact-email-controller.ts
- curriculum-email-routes.ts
- templates/shared.ts
- app.ts
- dependencies
- AGENTS.md
- .prettierrc.json
- vercel.json
- Mailtrap Logo (src/assets/logo.png)
- Q: Why does devDependencies connect Lint Tooling to Package Metadata?
- Q: Why does dependencies connect Runtime Dependencies to Package Metadata?

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `env` - 10 edges
3. `scripts` - 9 edges
4. `createApp()` - 6 edges
5. `renderCurriculumEmail()` - 6 edges
6. `escapeHtml()` - 6 edges
7. `renderEmailLayout()` - 6 edges
8. `renderContactEmail()` - 5 edges
9. `Q: Why does devDependencies connect Lint Tooling to Package Metadata?` - 4 edges
10. `Q: Why does dependencies connect Runtime Dependencies to Package Metadata?` - 4 edges

## Surprising Connections (you probably didn't know these)
- `createApp()` --indirect_call--> `errorHandler()`  [INFERRED]
  src/app.ts → src/middlewares/error-handler-middleware.ts
- `createApp()` --indirect_call--> `notFoundHandler()`  [INFERRED]
  src/app.ts → src/middlewares/not-found-middleware.ts
- `sendContactEmail()` --calls--> `renderContactEmail()`  [EXTRACTED]
  src/controllers/contact-email-controller.ts → src/templates/contact-email.ts
- `sendCurriculumEmail()` --calls--> `renderCurriculumEmail()`  [EXTRACTED]
  src/controllers/curriculum-email-controller.ts → src/templates/curriculum-email.ts
- `renderContactEmail()` --calls--> `escapeHtml()`  [EXTRACTED]
  src/templates/contact-email.ts → src/templates/shared.ts

## Import Cycles
- None detected.

## Communities (16 total, 2 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.06
Nodes (35): @commitlint/cli, @commitlint/config-conventional, eslint, eslint-config-prettier, @eslint/js, globals, husky, lint-staged (+27 more)

### Community 1 - "package.json"
Cohesion: 0.09
Nodes (22): author, description, engines, node, keywords, license, lint-staged, *.ts (+14 more)

### Community 2 - "compilerOptions"
Cohesion: 0.09
Nodes (21): api, ES2023, src, compilerOptions, erasableSyntaxOnly, esModuleInterop, forceConsistentCasingInFileNames, lib (+13 more)

### Community 3 - "contact-email-controller.ts"
Cohesion: 0.16
Nodes (13): LOGO_BASE64, env, logo, MIME_BY_EXTENSION, mailtrap, ContactEmailInput, curriculumBodySchema, CurriculumRequestInput (+5 more)

### Community 4 - "curriculum-email-routes.ts"
Cohesion: 0.15
Nodes (12): sendContactEmail(), sendCurriculumEmail(), getHealth(), uploadResume, validateSchema(), ValidationSource, router, router (+4 more)

### Community 5 - "templates/shared.ts"
Cohesion: 0.25
Nodes (13): ContactEmailData, renderContactEmail(), CurriculumEmailData, formatFileSize(), renderCurriculumEmail(), BRAND_COLOR, BRAND_COLOR_LIGHT, BrandHeaderData (+5 more)

### Community 6 - "app.ts"
Cohesion: 0.26
Nodes (6): createApp(), swaggerDocsHtml, options, swaggerSpec, errorHandler(), notFoundHandler()

### Community 7 - "dependencies"
Cohesion: 0.13
Nodes (15): cors, dotenv, express, mailtrap, multer, dependencies, cors, dotenv (+7 more)

### Community 8 - "AGENTS.md"
Cohesion: 0.29
Nodes (5): Architecture, Commands, Conventions (non-negotiable, enforced by pre-commit hooks), Gotchas, graphify

### Community 9 - ".prettierrc.json"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 14 - "Q: Why does devDependencies connect Lint Tooling to Package Metadata?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Why does devDependencies connect Lint Tooling to Package Metadata?, Source Nodes

### Community 15 - "Q: Why does dependencies connect Runtime Dependencies to Package Metadata?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Why does dependencies connect Runtime Dependencies to Package Metadata?, Source Nodes

## Knowledge Gaps
- **90 isolated node(s):** `semi`, `singleQuote`, `trailingComma`, `printWidth`, `tabWidth` (+85 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `trailingComma` to the rest of the system?**
  _90 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._