"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import type { Mesh } from "three";
import { useMediaQuery } from "@/lib/useMediaQuery";

function Knot() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.28, 220, 24, 2, 3]} />
        <meshStandardMaterial
          color="#ff7a33"
          wireframe
          emissive="#ff7a33"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingKnot() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas
      camera={{ position: [0, 0, isMobile ? 6.5 : 5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#ff7a33" />
      <pointLight position={[-4, -2, -4]} intensity={20} color="#49d9c2" />
      <Knot />
      <Environment preset="city" environmentIntensity={0.25} />
    </Canvas>
  );
}
