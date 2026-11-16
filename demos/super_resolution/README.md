# Super-Resolution

Crop the current camera or simulator image and upscale it locally.

## Usage

Select a crop size, move the crop square in the viewfinder, and press **Enhance**.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. Uses LiteRT.js and the linked Real-ESRGAN model. See [IMPLEMENTATION.md](IMPLEMENTATION.md) for the original model source and runtime details.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

The first launch downloads the model and runtime. Backend availability and processing speed depend on the device; camera images are processed locally.
