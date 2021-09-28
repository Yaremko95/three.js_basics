import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//group
const group = new THREE.Group();
scene.add(group);

group.position.y = 1;
group.scale.y = 1.2;

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);

group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow" })
);
cube3.position.x = 2;
group.add(cube3);

//axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  group.children.forEach((child) => {
    child.rotation.x = elapsedTime * Math.PI * 1;
  });
  group.position.y = Math.sin(elapsedTime);
  group.position.x = Math.cos(elapsedTime);
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
