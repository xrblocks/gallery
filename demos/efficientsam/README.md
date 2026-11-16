# Circle to Search

Circle an object to segment it from the current view with EfficientSAM and LiteRT.

## Usage

Hold a pinch or mouse press and draw a circle around an object. Release to segment it and inspect the cutout and timing results. Use the camera control to choose the device profile.

## Assets and credits

Application code and styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. [EfficientSAM](https://github.com/yformer/EfficientSAM) is Apache-2.0 licensed. The demo uses fixed EfficientSAM-Ti model URLs and LiteRT `2.5.3`. The original model conversion script is included as `export_tflite.py`.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Segmentation requires model downloads and a supported LiteRT runtime. Camera access requires a secure context. Results depend on the selected camera profile and the circle prompt.
