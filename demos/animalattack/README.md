# Animal Attack

Place animated animals in your space, let them fall from the sky, and clear them with playful weapon effects.

## Usage

1. Use the arrows in the animal picker to choose an animal.
2. Select and drag the animal image into the scene, then release to place it. Turn **Weapons** off to drag animals that are already in the scene.
3. With **Weapons** on, select an animal or surface to fire a randomly chosen effect. Use a mouse click in the simulator, or a pinch or controller trigger in XR.
4. Use **Rain** to toggle falling animals. Turning rain off also clears the active animals.

## Assets and credits

| Asset                              | Source and credits                                                                                                                                                                                                                |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dog                                | [Shiba by zixisun02](https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c), CC-BY-4.0; hosted by [Geo Web](https://github.com/Geo-Web-Project/webxr-experiments/tree/e0e46798caa106adeae464a5fc4829a54e54012f). |
| Flamingo, parrot, horse, and stork | [three.js sample models at r160](https://github.com/mrdoob/three.js/tree/r160/examples/models/gltf). The model files do not include individual license metadata; consult the upstream model sources for their terms.              |
| Robot                              | [RobotExpressive from three.js](https://github.com/mrdoob/three.js/tree/r160/examples/models/gltf/RobotExpressive), credited to Tomás Laulhé in the upstream example. The model file does not include license metadata.           |
| Duck                               | [Khronos sample-model credits](https://github.com/KhronosGroup/glTF-Sample-Models/tree/d7a3cc8e51d7c573771ae77a57f16b0662a905c6/2.0/Duck): Sony Computer Entertainment, SCEA Shared Source License 1.0.                           |
| Fish                               | [BarramundiFish credits](https://github.com/KhronosGroup/glTF-Sample-Models/tree/d7a3cc8e51d7c573771ae77a57f16b0662a905c6/2.0/BarramundiFish): Microsoft, public-domain dedication.                                               |
| Runner                             | [CesiumMan credits](https://github.com/KhronosGroup/glTF-Sample-Models/tree/d7a3cc8e51d7c573771ae77a57f16b0662a905c6/2.0/CesiumMan), CC-BY-4.0.                                                                                   |
| Cat and dinosaur                   | [XR Blocks assets](https://github.com/xrblocks/assets/tree/5582bd1b2d1a4e19f7ee7093b63a5ee328e974ac/models), Apache-2.0 repository license.                                                                                       |
| Animal picker icons                | [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji/tree/1ffb34c752ecf5d402f04cfb4b392c77f57c54bc), MIT.                                                                                                         |

## Tested Devices

- Galaxy XR
- Simulator

## Known limitations

Real-world occlusion and surface interactions require depth support; the simulator uses its virtual environment.
