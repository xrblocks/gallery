# Roomcraft

Build and edit procedural scenes, with optional voice authoring and collaboration.

## Usage

The default scene is a no-key reading nook. Choose a starter scene or edit its objects. Supply a Gemini key for generated scene instructions or voice input. Collaboration is available through the app's room controls.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. The app owns the Roomcraft, networking, and keyboard implementations in local TypeScript files beside `main.ts`. The optional Boom Box sample asset is Microsoft's CC0 glTF sample. See [IMPLEMENTATION.md](IMPLEMENTATION.md) for original credits and feature notes.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

AI authoring requires Gemini credentials. Collaboration depends on the selected network transport. WebSocket collaboration requires a running relay (`server/relay.ts`). Generated scenes use bounded recipes rather than arbitrary generated code or meshes.
