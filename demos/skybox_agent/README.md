# Skybox Agent

Describe a scene by voice and ask Gemini to generate a panoramic background.

## Usage

Supply a prototype Gemini key through the SDK key setup or `?key=...`. Press **Start**, allow microphone access, and describe a background. Stop the session when finished.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. The app owns its `SkyboxAgent` and `GenerateSkyboxTool` implementations. Generated backgrounds come from the configured Gemini service.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Live voice and image generation require Gemini credentials, network access, and available model service support. Cloud generation is not covered by no-key startup checks.
