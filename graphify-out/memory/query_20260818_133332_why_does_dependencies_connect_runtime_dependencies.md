---
type: "query"
date: "2026-08-18T13:33:32.947961+00:00"
question: "Why does dependencies connect Runtime Dependencies to Package Metadata?"
contributor: "graphify"
outcome: "useful"
source_nodes: ["dependencies", "package.json", "express", "mailtrap"]
---

# Q: Why does dependencies connect Runtime Dependencies to Package Metadata?

## Answer

Expanded from original question via vocab: [devdependencies, commitlint, eslint, lint, package, dependencies, scripts, staged]. dependencies (community Runtime Dependencies, degree 7, betweenness 0.048) is a contains-container inside package.json (community Package Metadata, degree 12): package.json --contains--> dependencies [EXTRACTED]. It groups the 6 runtime libs (dotenv, express, mailtrap, multer, swagger-jsdoc, zod) which form the Runtime Dependencies community, while package.json itself sits in Package Metadata. Same structural bridge as devDependencies, but lower betweenness because it only connects 2 communities through 1 field; mailtrap appears twice (package_dependencies_mailtrap in Runtime Dependencies from package.json, and src_config_mailtrap_mailtrap in Env & Logo Config from src/config/mailtrap.ts), showing the runtime dep feeding the config module.

## Outcome

- Signal: useful

## Source Nodes

- dependencies
- package.json
- express
- mailtrap