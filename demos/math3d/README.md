# Math 3D

Edit a mathematical expression and view its surface in XR.

## Usage

Edit the expression on the spatial keyboard, and submit it to redraw the graph. Expressions use `x` and `y`, for example `x^2 - y^2`.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. Expression parsing uses expr-eval `2.0.2` (MIT). The gradient image and graphing code are copied from XR Blocks. The keyboard implementation is in `Keyboard.ts`.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Invalid expressions show an error. This is a small surface plotter, not a full computer algebra system.
