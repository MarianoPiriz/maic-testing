import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { model } from './object.js';

const targetCanvas = document.getElementById('home');

//console.log(targetCanvas);

let cw = window.innerWidth;
let ch = window.innerHeight;

//console.log(cw);

//console.log(model);

const render1 = new THREE.WebGLRenderer({ antialias: false, alpha: true });

//console.log(render1.domElement);

const canvas1 = render1.domElement;

canvas1.classList.add('canvas1');

render1.setSize(cw, ch);

window.addEventListener('resize', (e) => {
  cw = window.innerWidth;
  ch = window.innerHeight;
  render1.setSize(cw, ch);
});

render1.shadowMap.enabled = true;

//document.body.appendChild(canvas1);

export const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 800 / 800, 0.1, 1000);
const light = new THREE.AmbientLight(0xffffee, 0.6);
//light.position.set(2, 2, 5);
scene.add(light);

camera.position.set(0, 0, 10);

// const orbit = new OrbitControls(camera, render1.domElement);

// orbit.update();

function render() {
  render1.render(scene, camera);
  render1.setClearColor(0xffffff, 0);
  if (model) model.rotation.y += 0.001;

  requestAnimationFrame(render);
}

render();
