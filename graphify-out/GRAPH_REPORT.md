# Graph Report - mailtrap-send-email  (2026-08-17)

## Corpus Check
- Corpus is ~3,605 words - fits in a single context window. You may not need a graph.

## Summary
- 170 nodes · 235 edges · 12 communities
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Dev Tooling & Linting
- TypeScript Config
- Email Config & Controllers
- Routes & Middleware
- Email Templates
- Runtime Dependencies
- Package Metadata
- App Bootstrap & Errors
- NPM Scripts
- Prettier Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `scripts` - 9 edges
3. `env` - 9 edges
4. `renderCurriculumEmail()` - 6 edges
5. `escapeHtml()` - 6 edges
6. `renderEmailLayout()` - 6 edges
7. `renderContactEmail()` - 5 edges
8. `createApp()` - 4 edges
9. `*.ts` - 3 edges
10. `logo` - 3 edges

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

## Communities (12 total, 0 thin omitted)

### Community 0 - "Dev Tooling & Linting"
Cohesion: 0.06
Nodes (33): @commitlint/cli, @commitlint/config-conventional, eslint, eslint-config-prettier, @eslint/js, globals, husky, lint-staged (+25 more)

### Community 1 - "TypeScript Config"
Cohesion: 0.09
Nodes (22): ES2023, src, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, esModuleInterop, forceConsistentCasingInFileNames, lib (+14 more)

### Community 2 - "Email Config & Controllers"
Cohesion: 0.20
Nodes (11): env, logo, MIME_BY_EXTENSION, mailtrap, ContactEmailInput, curriculumBodySchema, CurriculumRequestInput, emailSchema (+3 more)

### Community 3 - "Routes & Middleware"
Cohesion: 0.15
Nodes (12): sendContactEmail(), sendCurriculumEmail(), getHealth(), uploadResume, validateSchema(), ValidationSource, router, router (+4 more)

### Community 4 - "Email Templates"
Cohesion: 0.25
Nodes (13): ContactEmailData, renderContactEmail(), CurriculumEmailData, formatFileSize(), renderCurriculumEmail(), BRAND_COLOR, BRAND_COLOR_LIGHT, BrandHeaderData (+5 more)

### Community 5 - "Runtime Dependencies"
Cohesion: 0.13
Nodes (15): dotenv, express, mailtrap, multer, dependencies, dotenv, express, mailtrap (+7 more)

### Community 6 - "Package Metadata"
Cohesion: 0.14
Nodes (13): author, description, engines, node, keywords, license, lint-staged, *.ts (+5 more)

### Community 7 - "App Bootstrap & Errors"
Cohesion: 0.29
Nodes (6): createApp(), options, swaggerSpec, errorHandler(), notFoundHandler(), app

### Community 8 - "NPM Scripts"
Cohesion: 0.22
Nodes (9): scripts, dev, format, format:check, lint, lint:fix, prepare, start (+1 more)

### Community 9 - "Prettier Config"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

## Knowledge Gaps
- **76 isolated node(s):** `semi`, `singleQuote`, `trailingComma`, `printWidth`, `tabWidth` (+71 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Tooling & Linting` to `Package Metadata`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Metadata`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Why does `scripts` connect `NPM Scripts` to `Package Metadata`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `trailingComma` to the rest of the system?**
  _76 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dev Tooling & Linting` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._