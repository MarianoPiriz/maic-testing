import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { scene } from './renderer';
import model3d from './assets/whiteShip.glb';

import { gui } from './renderer';

const loader = new GLTFLoader();

export let model;

loader.load(model3d, function (gltf) {
  model = scene.add(gltf.scene);
  // gui.add(model.position, 'x', -10, 10).name('position X');
  // gui.add(model.position, 'y', -10, 10).name('position Y');
  // gui.add(model.position, 'z', -10, 10).name('position Z');
  // gui.add(model.rotation, 'x', -10, 10).name('rotation X');
  // gui.add(model.rotation, 'y', -10, 10).name('rotation Y');
  // gui.add(model.rotation, 'z', -10, 10).name('rotation Z');

  model.traverse((node) => {
    if (!node.isMesh) return;

    node.material.wireframe = true;
    node.material.color.setHex(greish);
  });
});

const greish = 0xe4e4ff;
const lightgreish = 0xefefef;
