# Offline Captions

Show live microphone captions and optional translations using models that run on the device.

## Usage

Select **Download captions model**, then **Start listening**. Choose a translation language and download its model to add translated lines. Use **Clear** to clear the captions and stop listening when finished. Cached models can be loaded without downloading them again.

## Assets and credits

Application code and styles are copied from [XR Blocks](https://github.com/google/xrblocks), under Apache-2.0. [Moonshine](https://github.com/moonshine-ai/moonshine) by Useful Sensors is MIT licensed, with an [ONNX conversion by onnx-community](https://huggingface.co/onnx-community/moonshine-base-ONNX). [Opus-MT](https://github.com/Helsinki-NLP/Opus-MT) models are by Helsinki-NLP and converted by [Xenova](https://huggingface.co/Xenova): English to Spanish, French, and Chinese use Apache-2.0; English to German uses CC-BY-4.0. [Transformers.js](https://github.com/huggingface/transformers.js) is Apache-2.0; [ONNX Runtime](https://github.com/microsoft/onnxruntime) is MIT. Model revisions, byte counts, and SHA-256 hashes remain in the local configuration files.

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Captions require an initial download of about 94 MB. Each translation language needs a separate download. Microphone access requires a secure context. Model files work offline after loading; the page and runtime script still need network access or a browser cache. Speed depends on the device.
