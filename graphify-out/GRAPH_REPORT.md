# Graph Report - mailtrap-send-email  (2026-08-18)

## Corpus Check
- 26 files · ~3,849 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 177 nodes · 239 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Lint Tooling
- Package Metadata
- TypeScript Config
- Env & Logo Config
- Routes & Middleware
- Email Templates
- App Bootstrap & Swagger
- Runtime Dependencies
- Validation Schemas
- Prettier Formatting
- Vercel Deployment
- Brand Logo Asset

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `env` - 9 edges
3. `scripts` - 9 edges
4. `createApp()` - 5 edges
5. `escapeHtml()` - 4 edges
6. `renderEmailLayout()` - 4 edges
7. `renderCurriculumEmail()` - 4 edges
8. `validateSchema()` - 3 edges
9. `renderBrandHeader()` - 3 edges
10. `BRAND_COLOR` - 3 edges

## Surprising Connections (you probably didn't know these)
- `createApp()` --indirect_call--> `errorHandler()`  [INFERRED]
  src/app.ts → src/middlewares/error-handler-middleware.ts
- `sendContactEmail()` --calls--> `renderContactEmail()`  [EXTRACTED]
  src/controllers/contact-email-controller.ts → src/templates/contact-email.ts
- `sendCurriculumEmail()` --calls--> `renderCurriculumEmail()`  [EXTRACTED]
  src/controllers/curriculum-email-controller.ts → src/templates/curriculum-email.ts

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "Lint Tooling"
Cohesion: 0.06
Nodes (33): @commitlint/cli, @commitlint/config-conventional, eslint, eslint-config-prettier, @eslint/js, globals, husky, lint-staged (+25 more)

### Community 1 - "Package Metadata"
Cohesion: 0.09
Nodes (22): author, description, engines, node, keywords, license, lint-staged, *.ts (+14 more)

### Community 2 - "TypeScript Config"
Cohesion: 0.09
Nodes (21): api, ES2023, src, compilerOptions, erasableSyntaxOnly, esModuleInterop, forceConsistentCasingInFileNames, lib (+13 more)

### Community 3 - "Env & Logo Config"
Cohesion: 0.23
Nodes (8): LOGO_BASE64, env, logo, MIME_BY_EXTENSION, mailtrap, sendContactEmail(), app, renderContactEmail()

### Community 4 - "Routes & Middleware"
Cohesion: 0.18
Nodes (10): getHealth(), uploadResume, validateSchema(), ValidationSource, router, router, router, router (+2 more)

### Community 5 - "Email Templates"
Cohesion: 0.22
Nodes (13): sendCurriculumEmail(), ContactEmailData, CurriculumEmailData, formatFileSize(), renderCurriculumEmail(), BRAND_COLOR, BRAND_COLOR_LIGHT, BrandHeaderData (+5 more)

### Community 6 - "App Bootstrap & Swagger"
Cohesion: 0.24
Nodes (6): createApp(), swaggerDocsHtml, options, swaggerSpec, errorHandler(), notFoundHandler()

### Community 7 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): dotenv, express, mailtrap, multer, dependencies, dotenv, express, mailtrap (+5 more)

### Community 8 - "Validation Schemas"
Cohesion: 0.33
Nodes (7): ContactEmailInput, curriculumBodySchema, CurriculumRequestInput, emailSchema, nameSchema, phoneSchema, resumeFileSchema

### Community 9 - "Prettier Formatting"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

## Knowledge Gaps
- **77 isolated node(s):** `ValidationSource`, `BrandHeaderData`, `EmailLayoutData`, `HEADER_COLOR`, `endOfLine` (+72 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Lint Tooling` to `Package Metadata`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Metadata`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **What connects `ValidationSource`, `BrandHeaderData`, `EmailLayoutData` to the rest of the system?**
  _77 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Lint Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `Package Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._