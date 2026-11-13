## Development and checks

Use Node.js 24.

```bash
npm ci
npm run dev           # Compile, watch, and serve on port 8080
npm run build         # Build and validate apps
npm run serve         # Serve without compiling
npm run lint
npm run format
npm run check         # All repository checks
```

## API and dependency rules

- Check APIs against the project's pinned release declarations. SDK `main` can have newer APIs.
- Use public SDK APIs. Do not import SDK source, internal chunks, or a sibling checkout, or add a local SDK fallback.
- Keep package imports external for the HTML import map to resolve. Do not load a second SDK or three.js instance.
- Keep version updates explicit and local to the affected demo. Update its import map, compatible dependencies, README, and validation results together. An SDK release does not require a gallery update.

## Project structure and changes

- Keep each project's page, implementation, relevant tests, README, and assets together.
- Follow the demo submission guidelines in `README.md`. Use `template/` as the starting example and adapt every section of its README for the new demo.
- Keep project paths stable for documentation links. Coordinate route changes with documentation owners.
- Use clear names and small changes. Follow Google TypeScript and developer documentation style.
- Remove obsolete APIs, aliases, and compatibility layers.
- Get approval before large changes, bulk moves, or public API changes.
- Keep tests concise and focused on important behavior. Do not duplicate SDK tests or copy SDK internals into gallery to keep tests working.
- Use relative asset paths. Retain copyright notices and asset source and license details.
- Do not commit credentials, personal data, or private assets. Document service and device requirements in the project README.
