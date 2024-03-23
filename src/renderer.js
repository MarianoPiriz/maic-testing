import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
import { gsap } from 'gsap/gsap-core';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { model } from './object.js';

const cw = window.innerWidth;
const ch = window.innerHeight;

const render1 = new THREE.WebGLRenderer({ alpha: true });

const canvas1 = render1.domElement;

//const target = document.querySelector('.render_root');

canvas1.classList.add('canvas1');

canvas1.setAttribute(
  'aria-description',
  'This work is based on Cargo Ship 02(https://sketchfab.com/3d-models/cargo-ship-02-22135f8937194b6aba964b05e3608620) by gogiart (https://sketchfab.com/agt14032013) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)'
);

render1.setSize(cw, ch);

document.body.appendChild(canvas1);

export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(75, cw / ch, 0.1, 1000);
const light = new THREE.AmbientLight(0xffffee, 0.6);

scene.add(light);

camera.position.set(-6, 0, 0);

const orbit = new OrbitControls(camera, render1.domElement);

orbit.update();

window.addEventListener('resize', (e) => {
  render1.setSize(window.innerWidth, window.innerHeight);

  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});

function render() {
  render1.render(scene, camera);
  render1.setClearColor(0xffffff, 0);
  if (model) model.rotation.y += 0.0001;

  requestAnimationFrame(render);
}

render();

function scrollAnimation() {
  let top = 0;

  const scrollPosition = window.scrollY;

  const scrollPositionY = window.scrollY / 6000;
  const scrollPositionX = window.scrollY * -0.0005;
  const scrollPositionZ = window.scrollY / -2500;

  if (model) model.rotation.y = scrollPositionY;
  if (model) model.position.x = scrollPositionX;
  if (model) model.position.z = scrollPositionZ;

  top = scrollPosition;
}

window.addEventListener('scroll', scrollAnimation);
