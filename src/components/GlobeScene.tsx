import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleGlobe() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 1.5;
      pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1 + mouseRef.current.x * 0.3;
      pointsRef.current.rotation.x = mouseRef.current.y * 0.2;
    }
  });

  // Track mouse for interactivity
  useMemo(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#00ffff" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

const GlobeScene = () => (
  <div className="w-full h-full min-h-[400px]">
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.1} />
      <ParticleGlobe />
    </Canvas>
  </div>
);

export default GlobeScene;
