---
type: "query"
date: "2026-08-18T13:31:51.482316+00:00"
question: "Why does devDependencies connect Lint Tooling to Package Metadata?"
contributor: "graphify"
outcome: "useful"
source_nodes: ["devDependencies", "package.json", "lint-staged", "typescript-eslint"]
---

# Q: Why does devDependencies connect Lint Tooling to Package Metadata?

## Answer

Expanded from original question via vocab: [devdependencies, commitlint, eslint, lint, package, dependencies, scripts, staged]. BFS from typescript-eslint/eslint --fix/lint-staged. devDependencies (community Lint Tooling, degree 17) is a contains-container inside package.json (community Package Metadata, degree 12): package.json --contains--> devDependencies [EXTRACTED]. The 15 dev tool packages it contains (@commitlint/cli, @commitlint/config-conventional, @eslint/js, eslint, eslint-config-prettier, globals, husky, lint-staged, prettier, tsx, typescript, @types/*) are classified into Lint Tooling community, while scripts (lint, lint:fix, eslint --fix, format:check) live in Package Metadata. devDependencies is the high-betweenness bridge because it is the single manifest field that both binds the toolchain packages (Lint Tooling) AND is itself a property of package.json (Package Metadata).

## Outcome

- Signal: useful

## Source Nodes

- devDependencies
- package.json
- lint-staged
- typescript-eslint