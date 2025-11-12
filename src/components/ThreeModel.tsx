import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function ThreeModel({ modelSource }: { modelSource: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const scene: THREE.Scene = new THREE.Scene();

  const light = new THREE.SpotLight(0xffc963, 50);
  const blueLight = new THREE.PointLight(0x33bbff, 40);
  blueLight.position.set(5, 5, 0);
  light.position.set(0, 4, 0);
  light.castShadow = true;
  blueLight.castShadow = true;
  const ambLight = new THREE.AmbientLight(0xa8beff, 0.25);

  let model: THREE.Group | null = null;
  const loader = new GLTFLoader();

  loader.load(
    modelSource,
    (gltf) => {
      model = gltf.scene;
      model.scale.set(7.01, 7.01, 7.01);
      model.castShadow = true;
      scene.add(model);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log("Error loading GLTF:", error);
    }
  );

  scene.add(light, blueLight, ambLight);

  const camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  camera.position.z = 7;
  camera.position.y = 4;
  scene.add(camera);

  function render() {
    if (!canvasRef.current) {
      return;
    }
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.autoRotate = false;
    controls.enablePan = true;
    controls.enableDamping = true;
    controls.enableZoom = false;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setClearColor(0xffffff, 0);

    console.log(
      "Shader:",
      document.getElementById("vertexshader")?.textContent
    );

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const clock = new THREE.Clock();
    let previousTime = clock.getElapsedTime();

    function resize() {
      const container = canvasRef.current;
      const { width, height } = container!.getBoundingClientRect();
      renderer.setSize(width, height);

      camera.aspect = width / height;
      // camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    const frame = () => {
      const currentTime = clock.getElapsedTime();
      let delta = currentTime - previousTime;
      previousTime = currentTime;
      const scaled = Math.sin(currentTime * 0.8) * 0.07;

      if (model) model.position.y = scaled;

      blueLight.position.y = scaled;

      renderer.setSize(
        canvasRef.current!.parentElement!.clientWidth,
        canvasRef.current!.parentElement!.clientHeight
      );
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

  return (
    <div className="w-full h-full max-w-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className=" w-[100%] m-0 overflow-hidden "
      ></canvas>
    </div>
  );
}

export default ThreeModel;
