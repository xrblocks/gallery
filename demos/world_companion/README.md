# World Companion

Talk to an AR companion that observes the scene and adds labels to objects.

## Usage

Enter a Gemini key. Press **Start**, allow the requested media access, and ask the companion to label an object. Use **Stop** to end the session and **Clear** to remove markers.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. The Gemini session driver is local in `GeminiManager.ts`. Transcript rendering uses marked `14.1.4` (MIT) and DOMPurify `3.4.17` (MPL-2.0 or Apache-2.0). See [IMPLEMENTATION.md](IMPLEMENTATION.md) for the original application notes.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Requires Gemini Live access and camera or simulator imagery. Object grounding depends on available depth and detection results.
