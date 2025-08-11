import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Pane } from "tweakpane";
import forestFloor from "../textures/forest-floor-bl/forest_floor_albedo.png";
function ThreeModel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Adding the scene
  const pane = new Pane();

  const textureLoader = new THREE.TextureLoader();

  const scene: THREE.Scene = new THREE.Scene();
  const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
  const groundGeometry = new THREE.CircleGeometry(3, 24);

  const grassTexture = textureLoader.load(forestFloor);
  grassTexture.repeat.set(1, 1);
  grassTexture.wrapS = THREE.RepeatWrapping;
  grassTexture.wrapT = THREE.RepeatWrapping;

  const material = new THREE.MeshStandardMaterial({
    // color: "red",
    roughness: 0.1,
    // metalness: 0.3,
    map: grassTexture,
  });

  console.log(grassTexture);

  const light = new THREE.PointLight(0xffffff, 50);
  const ambLight = new THREE.AmbientLight(0xffffff, 0.5);
  light.position.set(2, 2, 2);

  const mesh = new THREE.Mesh(sphereGeometry, material);
  const mesh2 = new THREE.Mesh(sphereGeometry, material);
  const groundMesh = new THREE.Mesh(groundGeometry, material);

  mesh2.position.x = 2;
  mesh2.scale.set(0.2, 0.2, 0.2);

  groundMesh.position.y = -1.5;
  groundMesh.rotateX(THREE.MathUtils.degToRad(-90));

  scene.add(mesh, mesh2, groundMesh, light, ambLight);

  const fog = new THREE.Fog(0x0, 1, 50);
  scene.fog = fog;

  const camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  camera.position.z = 10;
  scene.add(camera);

  const axesHelper = new THREE.AxesHelper(2);
  mesh.add(axesHelper);
  // cubeMesh.rotation.z = THREE.MathUtils.degToRad(30);

  // scene.add(axesHelper);

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);

  function render() {
    if (!canvasRef.current) {
      return;
    }
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.autoRotate = false;
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = false;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const clock = new THREE.Clock();
    let previousTime = clock.getElapsedTime();

    const frame = () => {
      const currentTime = clock.getElapsedTime();
      let delta = currentTime - previousTime;
      previousTime = currentTime;
      const scaled = Math.sin(currentTime * 0.7) * 0.05;

      // cubeMesh.scale.set(scaled + 1, scaled + 1, scaled + 1);
      mesh.position.y = scaled;

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
      controls.update();
      window.requestAnimationFrame(frame);
    };

    window.requestAnimationFrame(frame);
    return;
  }

  useEffect(() => {
    try {
      render();
    } catch (e) {
      console.log(`JS Exception: ${e}`);
    }
  }, []);

  //   console.log("Camera", camera);
  return (
    <>
      <canvas
        ref={canvasRef}
        className="border-2 border-white m-0 overflow-hidden"
      ></canvas>
    </>
  );
}

export default ThreeModel;
