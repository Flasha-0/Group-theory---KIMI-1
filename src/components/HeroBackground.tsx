import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Group
    const group = new THREE.Group();
    scene.add(group);

    // Shared material
    const material = new THREE.LineBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.5,
    });

    // Create three Platonic wireframe meshes
    const geoIcos = new THREE.IcosahedronGeometry(2.5, 0);
    const geoTetra = new THREE.TetrahedronGeometry(2.8, 0);
    const geoOcta = new THREE.OctahedronGeometry(2.5, 0);

    const meshes: THREE.LineSegments[] = [];

    [geoIcos, geoTetra, geoOcta].forEach((geo) => {
      const wireGeo = new THREE.WireframeGeometry(geo);
      const wireMesh = new THREE.LineSegments(wireGeo, material.clone());
      wireMesh.visible = false;
      group.add(wireMesh);
      meshes.push(wireMesh);
    });

    // Show first mesh
    meshes[0].visible = true;
    const mat0 = meshes[0].material as THREE.LineBasicMaterial;
    mat0.opacity = 0.6;

    let currentMeshIndex = 0;
    let morphProgress = 0;
    const morphSpeed = 0.008;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();

    // Intersection observer to pause when not visible
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();

      const targetRotationX = mouseY * 2;
      const targetRotationY = mouseX * 2;

      group.rotation.x += (targetRotationX - group.rotation.x) * delta * 2;
      group.rotation.y += (targetRotationY - group.rotation.y) * delta * 2;

      // Constant slow rotation
      group.rotation.x += 0.001;
      group.rotation.y += 0.002;

      morphProgress += morphSpeed;

      if (morphProgress >= 1) {
        morphProgress = 0;
        currentMeshIndex = (currentMeshIndex + 1) % meshes.length;
      }

      const nextIndex = (currentMeshIndex + 1) % meshes.length;

      meshes.forEach((m) => {
        m.visible = false;
      });

      meshes[currentMeshIndex].visible = true;
      const matCurrent = meshes[currentMeshIndex].material as THREE.LineBasicMaterial;
      matCurrent.opacity = 0.6 * (1 - morphProgress);

      meshes[nextIndex].visible = true;
      const matNext = meshes[nextIndex].material as THREE.LineBasicMaterial;
      matNext.opacity = 0.6 * morphProgress;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      className="opacity-60"
    />
  );
}
