# Webcam Gestures

Use webcam hand tracking to drive simulator hand poses and gesture events.

## Usage

Allow webcam access and hold one hand in view. Try a pinch, fist, thumbs up, thumbs down, point, victory, rock, or open palm. The simulator hand follows the recognized gesture.

## Assets and credits

Application code and styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. Uses MediaPipe Tasks Vision `0.10.34` (Apache-2.0) and the fixed version 1 [MediaPipe gesture recognizer model](https://ai.google.dev/edge/mediapipe/solutions/vision/gesture_recognizer). The pose estimator and gesture recognizer are local demo implementations.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Tracks one hand and maps it to the simulator right hand. Requires a webcam, model download, and a secure context. The webcam drives the desktop simulator; it does not replace native XR hand tracking.
