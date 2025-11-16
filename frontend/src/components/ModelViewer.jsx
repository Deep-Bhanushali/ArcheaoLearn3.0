import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ModelViewerModal = ({ modelId, onClose }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#c9b79c'); // Matches your ModelViewer background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, mountNode.clientWidth / mountNode.clientHeight, 0.1, 1000);
    camera.position.set(0, 1, 3);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.shadowMap.enabled = true;
    mountNode.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(0, 5, 3);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.3;
    spotLight.decay = 2;
    spotLight.distance = 20;
    spotLight.castShadow = true;
    scene.add(spotLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 0.6);
    scene.add(hemisphereLight);

    const backLight = new THREE.PointLight(0xffffff, 0.7);
    backLight.position.set(-5, 5, -5);
    scene.add(backLight);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      `/models/${modelId}.glb`,
      (gltf) => {
        const model = gltf.scene;
        model.traverse((child) => {
          if (child.isMesh) {
            child.material.side = THREE.DoubleSide; // Ensure both sides render
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        scene.add(model);

        // Optional: Auto-center and scale model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        model.position.sub(center); // Center model
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim; // Scale to fit in view
        model.scale.set(scale, scale, scale);
      },
      undefined,
      (error) => console.error('GLTF Load Error:', error)
    );

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mountNode.clientWidth;
      const height = mountNode.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelId]);

  return (
    <div className="quiz-modal">
      <div className="quiz-modal-content" style={{ maxWidth: '1000px' }}>
        <span className="quiz-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </span>
        <div className="quiz-header">
          <h3>3D Model Viewer</h3>
          <p>Interact with the 3D model: {modelId.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</p>
        </div>
        <div className="quiz-body">
          <div ref={mountRef} style={{ width: '100%', height: '500px' }} />
        </div>
        <div className="quiz-footer">
          <button className="quiz-next" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelViewerModal;