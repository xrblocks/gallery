# XR Blocks Gallery

Demos and examples built with [XR Blocks]([XR Blocks](https://github.com/google/xrblocks)).

## Local development

Use Node.js 24 and npm. From the repository root:

```bash
npm ci
npm run dev
```

Open **<http://127.0.0.1:8080/demos/>** to browse the projects.

## Start a demo

Copy the template to start a project:

```bash
cp -R template demos/my-demo
```

Update the title, implementation, and README as you develop.

## Commands

```bash
npm run dev           # Compile, watch, and serve on port 8080
npm run build         # Build and validate apps
npm run build:watch   # Rebuild when project files change
npm run serve         # Serve without compiling
npm run lint          # Lint apps and build tools
npm run format        # Format source and documentation
npm run format:check  # Check formatting without changing files
npm run check         # Run lint, formatting, and build
```

## Contributions and scope

We'd love to see your awesome XR Blocks creations! Create a pull request to add your demo to our list of apps. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

If you are submitting a new demo, please keep each pull request to one new demo.

Each submission must include:

- An `index.html` that opens at `/demos/<name>/` through the root dev server.
- A `main.ts` entry and TypeScript source files. Generated `build/` files are not committed.
- The complete implementation, styles, and required small assets.
- An HTML import map pinned to an exact published XR Blocks version and exact compatible dependency versions.
- A `README.md` following the [template format](template/README.md)

## License

[Apache License 2.0](LICENSE). Retain copyright notices and license and attribution details for moved code and assets.
