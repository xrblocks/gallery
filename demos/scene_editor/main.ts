import * as THREE from 'three';
import * as xb from 'xrblocks';
import {SceneEditor} from './SceneEditor.js';

const options = new xb.Options();
options.simulator.defaultMode = xb.SimulatorMode.EDITOR;
options.xrButton.showEnterSimulatorButton = true;
options.setAppTitle('Scene Editor');
options.setAppDescription('Edit a scene in the desktop simulator.');
const editor = new SceneEditor();
editor.add(new THREE.HemisphereLight(0xffffff, 0x666666, 3));
xb.add(editor);
await xb.init(options);
