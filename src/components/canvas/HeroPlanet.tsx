"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import Planet from "./Planet";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function HeroPlanet() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.5} />
      <Float speed={0.5} floatIntensity={0.6}>
        <Planet scale={isMobile ? 0.7 : 1} />
      </Float>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 4, 1]}>
          <Lightformer form="circle" intensity={2} color="#ff7a33" position={[0, 5, -9]} scale={10} />
          <Lightformer form="circle" intensity={2} color="#49d9c2" position={[0, 3, 1]} scale={10} />
          <Lightformer form="circle" intensity={2} position={[-5, -1, -1]} scale={10} />
          <Lightformer form="circle" intensity={2} position={[10, 1, 0]} scale={16} />
        </group>
      </Environment>
    </Canvas>
  );
}
