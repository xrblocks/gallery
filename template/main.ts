import * as THREE from 'three';
import * as xb from 'xrblocks';

class BasicScene extends xb.Script {
  private readonly cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.25, 0.25),
    new THREE.MeshPhongMaterial({color: 0x4285f4})
  );

  init() {
    this.add(new THREE.HemisphereLight(0xffffff, 0x666666, 3));
    this.cube.name = 'Color cube';
    this.cube.position.set(0, xb.user.height - 0.3, -xb.user.objectDistance);
    this.add(this.cube);
  }

  onSelectEnd() {
    const color = this.cube.material.color;
    color.setHex(color.getHex() === 0x4285f4 ? 0x34a853 : 0x4285f4);
  }

  dispose() {
    this.cube.geometry.dispose();
    this.cube.material.dispose();
  }
}

xb.add(new BasicScene());
await xb.init(new xb.Options());
