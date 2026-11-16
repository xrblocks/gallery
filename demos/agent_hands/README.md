# Agent Hands

An orb and a pair of hands gesture as an agent speaks and point at objects in the scene.

## Usage

Choose **watch the scripted demo** to run without a key. For conversation, enter a Gemini key, use **Talk**, and scan the scene before asking the agent to point at objects.

## Assets and credits

Application code and startup styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. Hand rigs use the WebXR Input Profiles generic-hand assets. The implementation is based on the AgentHands research credited in [IMPLEMENTATION.md](IMPLEMENTATION.md). Hand, gesture, speech, and grounding source files are beside `main.ts`.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Conversation and object scanning require Gemini credentials and network access. Scripted preview works without a key. Pointing depends on available depth geometry.
