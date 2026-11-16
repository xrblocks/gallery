# Photo Depth

Recover depth from a photo, align it with the room, and inspect or interact with the reconstructed surface.

## Usage

Press **Capture**. Use the display and scale controls to inspect the result. Printed-marker calibration is optional; use the calibration controls when an ArUco marker is available.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. Uses MoGe-2 and local LiteRT, ArUco, pose-history, and palette helpers. Model terms are retained in [LICENSE](LICENSE); see [IMPLEMENTATION.md](IMPLEMENTATION.md).

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Requires model downloads and a supported inference backend. Scale and alignment depend on camera calibration and the scene. Native depth comparisons require device depth support.
