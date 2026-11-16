# Diet Helper

Capture a food image and use Gemini to add estimated nutrition to a meal log.

## Usage

Supply a prototype Gemini key, then use the capture button or **C** to analyze the current view. Review the result and meal entries in the panel.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. The application and its demo food models originate in XR Blocks. Captured images are sent to the configured Gemini service when analysis is requested.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Requires Gemini credentials for analysis. Nutrition results are model estimates. Camera behavior differs between simulator and XR devices.
