# Photo to 3D

Turn a photo into a small colored point-cloud model using MoGe-2 on-device.

## Usage

Allow camera access when requested and press **Capture**. Wait for model loading and reconstruction, then inspect the miniature.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. Uses MoGe-2 through the local LiteRT helper files beside `main.ts`. Model terms are retained in [LICENSE](LICENSE); see [IMPLEMENTATION.md](IMPLEMENTATION.md) for source details.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Model downloads and inference require a supported backend and enough device memory. Reconstruction quality depends on the photo and camera calibration.
