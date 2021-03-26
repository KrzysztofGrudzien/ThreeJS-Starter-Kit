import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const canvas = document.querySelector('.webgl');

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const cursor = {
    x: 0,
    y: 0,
};

window.addEventListener('mousemove', e => {
    cursor.x = e.clientX / size.width - 0.5;
    cursor.y = -(e.clientY / size.height - 0.5);
});

// START Remove this test animation //

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);

scene.add(cube);

// END Remove this test animation //

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

let clock = new THREE.Clock();

const animate = function () {
    const time = clock.getElapsedTime();

    // START Remove this test animation //

    camera.position.x = Math.sin(cursor.x * Math.PI) * 2;
    camera.position.z = Math.cos(cursor.x * Math.PI) * 2;
    camera.position.y = cursor.y * Math.PI * 2;
    camera.lookAt(cube.position);

    // END Remove this test animation //

    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
