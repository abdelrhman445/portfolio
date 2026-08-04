"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import type { Points as PointsType } from "three";

function Field() {
  const ref = useRef<PointsType>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2400), { radius: 1.6 }) as Float32Array
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 28;
    ref.current.rotation.y -= delta / 38;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#8891a3"
        size={0.0035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

export default function StarField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      className="!absolute inset-0"
    >
      <Field />
    </Canvas>
  );
}
