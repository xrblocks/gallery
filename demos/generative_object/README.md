# Generative Object

Generate an image cutout and place it as a draggable object in your space.

## Usage

Enter a prototype Gemini key. Choose a preset and select **Summon**, or use **Speak** to describe an object. Grab generated objects to move them and use **Clear** to remove them.

## Assets and credits

Application code and styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. Generated content comes from Gemini. Image decoding, background removal, object placement, and voice controls are implemented in the local source files.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Requires Gemini credentials with image generation access. Voice input sends recorded audio to Gemini. Surface placement depends on depth support. Generated objects are image cutouts, with optional approximate relief, rather than full 3D models.
