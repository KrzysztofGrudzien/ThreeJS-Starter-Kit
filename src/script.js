import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const canvas = document.querySelector('.webgl');

// START Remove this test animation //

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);

const cubes = new THREE.Group();
cubes.add(cube1, cube2, cube3);
scene.add(cubes);

// END Remove this test animation //

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

let clock = new THREE.Clock();

const animate = function () {
    const time = clock.getElapsedTime();

    // START Remove this test animation //

    console.log(time);
    cube1.position.y = Math.sin(time) * 2;
    cube1.position.x = Math.cos(time) * 2;

    cube2.position.z = Math.sin(time) * 2;
    cube2.position.y = Math.cos(time) * 2;

    cube3.position.x = Math.sin(time) * 2;
    cube3.position.z = Math.cos(time) * 2;

    // END Remove this test animation //

    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
