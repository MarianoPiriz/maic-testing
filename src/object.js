import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { scene } from './renderer';
import model3d from './assets/scene.glb';

//console.log(model3d);

const loader = new GLTFLoader();

export let model;

loader.load(
  model3d,
  function (gltf) {
    //console.log(gltf);
    model = scene.add(gltf.scene);
  }
  // function (xhr) {
  //   console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  // },
  // function (error) {
  //   console.error(error);
  // }
);
