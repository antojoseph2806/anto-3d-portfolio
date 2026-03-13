import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

function WireframeHead({ isDesktop }: { isDesktop: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const scrollRef = useRef(0);
  const dragRotationRef = useRef({
    offsetY: 0,
    targetOffsetY: 0,
    isDragging: false,
    lastX: 0,
  });

  useEffect(() => {
    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      scrollRef.current = progress;
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const handlePointerDown = (e: PointerEvent) => {
      dragRotationRef.current.isDragging = true;
      dragRotationRef.current.lastX = e.clientX;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!dragRotationRef.current.isDragging) return;
      const deltaX = e.clientX - dragRotationRef.current.lastX;
      dragRotationRef.current.lastX = e.clientX;
      dragRotationRef.current.targetOffsetY += deltaX * 0.005;
    };

    const handlePointerUp = () => {
      dragRotationRef.current.isDragging = false;
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointercancel", handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  const shader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0x00ffff) },
        uIntensity: { value: 1 },
      },
      vertexShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vScanline;
        
        void main() {
          vNormal = normal;
          vPosition = position;
          
          vec3 pos = position;
          float scanline = sin(pos.y * 20.0 + uTime * 2.0) * 0.02;
          pos += normal * scanline;
          
          vScanline = sin(pos.y * 40.0 + uTime * 3.0) * 0.5 + 0.5;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        uniform float uIntensity;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vScanline;
        
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          
          float scanlineEffect = step(0.7, vScanline) * 0.3;
          
          vec3 color = uColor * (fresnel * 0.7 + 0.08) + scanlineEffect * 0.8;
          float alpha = (fresnel * 0.45 + scanlineEffect * 0.8 + 0.04) * uIntensity;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
    }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scroll = scrollRef.current;
    const offset = (scroll - 0.5) * 2;
    const shrinkPhase = Math.min(scroll / 0.45, 1);
    const settlePhase = Math.max((scroll - 0.45) / 0.55, 0);
    const startScale = isDesktop ? 2.95 : 2.2;
    const minScale = isDesktop ? 1.5 : 1.3;
    const endScale = isDesktop ? 1.95 : 1.7;
    const currentScale = THREE.MathUtils.lerp(
      THREE.MathUtils.lerp(startScale, minScale, shrinkPhase),
      endScale,
      settlePhase
    );
    const targetX = THREE.MathUtils.lerp(offset * 0.18, 0, settlePhase);
    const targetY = THREE.MathUtils.lerp(0.1 - offset * 0.5, -0.05, settlePhase);

    dragRotationRef.current.offsetY +=
      (dragRotationRef.current.targetOffsetY - dragRotationRef.current.offsetY) * 0.08;

    if (meshRef.current) {
      const targetRotY =
        t * 0.25 +
        THREE.MathUtils.lerp(offset * 0.9, 0.2, settlePhase) +
        dragRotationRef.current.offsetY;
      const targetRotX = THREE.MathUtils.lerp(
        Math.sin(t * 0.18) * 0.18 + offset * 0.4,
        0.08,
        settlePhase
      );

      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotY,
        0.08
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotX,
        0.08
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetY,
        0.08
      );
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        targetX,
        0.08
      );
      const scale = THREE.MathUtils.lerp(meshRef.current.scale.x, currentScale, 0.08);
      meshRef.current.scale.setScalar(scale);
    }

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
      const base = THREE.MathUtils.lerp(1, 0.42, shrinkPhase);
      const settled = THREE.MathUtils.lerp(base, 0.72, settlePhase);
      materialRef.current.uniforms.uIntensity.value = Math.max(settled, 0.28);
    }
  });

  return (
    <mesh ref={meshRef} scale={isDesktop ? 2.95 : 2.2} position={[0, 0.1, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        {...shader}
        transparent
        side={THREE.DoubleSide}
        wireframe
      />
    </mesh>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const count = 200;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 8;
      vel[i] = (Math.random() - 0.5) * 0.002;
    }
    return { positions: pos, velocities: vel };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    for (let i = 0; i < pos.length; i++) {
      pos[i] += velocities[i];
      if (Math.abs(pos[i]) > 4) velocities[i] *= -1;
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#00ffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

const HeroScene = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateViewport = () => setIsDesktop(window.innerWidth >= 1024);

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, isDesktop ? 4.15 : 5], fov: isDesktop ? 40 : 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} color="#00ffff" />
        <WireframeHead isDesktop={isDesktop} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
