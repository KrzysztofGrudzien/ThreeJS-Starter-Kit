import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const canvas = document.querySelector('.webgl');

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.rotation.y = 10;
cube.rotation.x = 10;

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    0.1,
    1000,
);
camera.position.z = 5;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
