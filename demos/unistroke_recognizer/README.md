# Unistroke Recognizer

Draw a shape with a pinch gesture, recognize it, and launch a matching 3D shape.

## Usage

Pinch and move your hand to draw a single stroke, then release. The recognized shape launches in the direction you are looking.

## Assets and credits

Application code and styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. Stroke visualization and recognized shapes use Three.js geometry. No external model, texture, or audio assets are required.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Recognition expects a single continuous stroke. Accuracy depends on tracking quality and the supported shape set.
