# Gemini VRM Lip Sync

Talk to a Gemini Live avatar whose mouth follows its speech.

## Usage

Supply a prototype Gemini key, select **Talk to Gemini**, and allow microphone access. Select **Stop** to end the conversation.

## Assets and credits

Application code and styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. The avatar is the [three-vrm constraint sample](https://github.com/pixiv/three-vrm/tree/v3.5.1/packages/three-vrm-animation/examples/models), loaded with three-vrm `3.5.1` (MIT). T-pose and idle animations come from a fixed revision of [XR Blocks proprietary-assets](https://github.com/xrblocks/proprietary-assets); retain their upstream terms. Avatar, audio, and lip-sync source files are included beside `main.ts`.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Requires Gemini Live credentials and network access. Mouth shapes use an audio heuristic and do not provide phoneme-accurate animation. Microphone access requires a secure context.
