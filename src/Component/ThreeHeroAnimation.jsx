import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeHeroAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- 1. Luminous 3D Particle Cloud (Torus Knot + Field) ---
    const particleCount = 2200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color("#06b6d4");
    const purple = new THREE.Color("#a855f7");
    const blue = new THREE.Color("#3b82f6");

    // Arrange particles in a complex 3D mathematical space (Torus knot & ambient field)
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      if (i < 1600) {
        // Torus knot formula: p = 2, q = 3
        const u = (i / 1600) * Math.PI * 4;
        const p = 2;
        const q = 3;
        const r = 8 + Math.cos(q * u) * 2.5;

        // Add organic dispersion
        const spread = 1.2;
        positions[i3] = r * Math.cos(p * u) + (Math.random() - 0.5) * spread;
        positions[i3 + 1] = r * Math.sin(p * u) + (Math.random() - 0.5) * spread;
        positions[i3 + 2] = -Math.sin(q * u) * 4.5 + (Math.random() - 0.5) * spread;
      } else {
        // Ambient celestial particle cloud
        const radius = 12 + Math.random() * 15;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
      }

      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];

      // Smooth color gradient (Cyan -> Blue -> Purple)
      const ratio = i / particleCount;
      const mixedColor = cyan.clone();
      if (ratio < 0.5) {
        mixedColor.lerp(blue, ratio * 2);
      } else {
        mixedColor.copy(blue).lerp(purple, (ratio - 0.5) * 2);
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Circle point texture via canvas for smooth round particles
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.85)");
    gradient.addColorStop(0.6, "rgba(6, 182, 212, 0.4)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();

    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // --- 2. Floating Cyber Wireframe Core (Icosahedron & Octahedron) ---
    const coreGroup = new THREE.Group();

    // Inner Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(4, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    coreGroup.add(icoMesh);

    // Inner Octahedron core
    const octGeometry = new THREE.OctahedronGeometry(2.2, 0);
    const octMaterial = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const octMesh = new THREE.Mesh(octGeometry, octMaterial);
    coreGroup.add(octMesh);

    scene.add(coreGroup);

    // --- 3. Dynamic Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3, 40);
    cyanLight.position.set(10, 10, 10);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3, 40);
    purpleLight.position.set(-10, -10, 10);
    scene.add(purpleLight);

    // --- 4. Interactive Mouse Tracking & Shockwave Physics ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    let shockwaveRadius = 0;
    let shockwaveActive = false;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      // Normalized device coordinates [-1, 1]
      targetX = (x - 0.5) * 2;
      targetY = -(y - 0.5) * 2;
    };

    const handleClick = () => {
      // Trigger a pulse shockwave through particles
      shockwaveRadius = 0.1;
      shockwaveActive = true;
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleClick);

    // --- 5. Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // --- 6. Render Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Rotate particle system & core
      particleSystem.rotation.y = elapsedTime * 0.08 + mouseX * 0.4;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.15 + mouseY * 0.3;

      icoMesh.rotation.x = elapsedTime * 0.25;
      icoMesh.rotation.y = elapsedTime * 0.3;
      octMesh.rotation.x = -elapsedTime * 0.35;
      octMesh.rotation.z = elapsedTime * 0.2;

      // Orbit point lights for dynamic reflections
      cyanLight.position.x = Math.sin(elapsedTime * 0.8) * 12;
      cyanLight.position.y = Math.cos(elapsedTime * 0.6) * 12;
      purpleLight.position.x = -Math.sin(elapsedTime * 0.7) * 12;
      purpleLight.position.y = -Math.cos(elapsedTime * 0.9) * 12;

      // Wave ripples & shockwave through particles
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array;

      if (shockwaveActive) {
        shockwaveRadius += 0.45;
        if (shockwaveRadius > 25) {
          shockwaveActive = false;
        }
      }

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        // 3D Sine wave undulating ripple
        const wave = Math.sin(elapsedTime * 1.5 + ox * 0.4 + oy * 0.3) * 0.35;

        let dispX = 0;
        let dispY = 0;
        let dispZ = 0;

        // If shockwave active, push particles outward and spring back
        if (shockwaveActive) {
          const dist = Math.sqrt(ox * ox + oy * oy + oz * oz);
          const diff = Math.abs(dist - shockwaveRadius);
          if (diff < 3) {
            const force = (3 - diff) * 0.45;
            dispX = (ox / (dist || 1)) * force;
            dispY = (oy / (dist || 1)) * force;
            dispZ = (oz / (dist || 1)) * force;
          }
        }

        posArray[i3] = ox + wave + dispX;
        posArray[i3 + 1] = oy + wave + dispY;
        posArray[i3 + 2] = oz + wave + dispZ;
      }
      posAttr.needsUpdate = true;

      // Camera parallax
      camera.position.x = mouseX * 2.5;
      camera.position.y = mouseY * 2.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("click", handleClick);

      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      octGeometry.dispose();
      octMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 hover:opacity-100 transition-opacity duration-700 cursor-crosshair z-0"
      title="Interactive 3D Canvas — Move mouse to rotate & click for shockwave"
    />
  );
};

export default ThreeHeroAnimation;