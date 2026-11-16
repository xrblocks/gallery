# Scene Editor

Edit a scene with a model picker, hierarchy, transform gizmos, and undo/redo.

## Usage

Select **Cube.gltf** in the model picker and press **Spawn**. Select the model, use the transform tools or inspector, and use undo/redo as needed. Add other glTF models to `Models/` and saved manifests to `Scenes/`.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. The editor implementation is copied from XR Blocks into local TypeScript files beside `main.ts`. The included cube is generated primitive geometry with no external model assets.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

This editor supports desktop mouse input in the simulator, not XR controllers. Model and scene browsing require directory listings, which the local gallery server provides. Exported scenes are downloaded rather than written back by the static server.
