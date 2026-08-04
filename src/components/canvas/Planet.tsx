"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import type { ThreeElements } from "@react-three/fiber";
import type { Group, Mesh, Material } from "three";
import { gsap } from "@/lib/gsap";

type PlanetGLTF = {
  nodes: {
    Sphere: Mesh;
    Sphere2: Mesh;
    Ring: Mesh;
  };
  materials: Record<string, Material>;
};

export default function Planet(props: ThreeElements["group"]) {
  const shapeContainer = useRef<Group>(null);
  const spheresContainer = useRef<Group>(null);
  const ringContainer = useRef<Mesh>(null);

  const { nodes, materials } = useGLTF("/models/Planet.glb") as unknown as PlanetGLTF;

  useGSAP(() => {
    if (!shapeContainer.current || !spheresContainer.current || !ringContainer.current) return;

    const tl = gsap.timeline();
    tl.from(shapeContainer.current.position, {
      y: 5,
      duration: 3,
      ease: "circ.out",
    });
    tl.from(
      spheresContainer.current.rotation,
      { x: 0, y: Math.PI, z: -Math.PI, duration: 10, ease: "power1.inOut" },
      "-=25%"
    );
    tl.from(
      ringContainer.current.rotation,
      { x: 0.8, y: 0, z: 0, duration: 10, ease: "power1.inOut" },
      "<"
    );
  }, []);

  return (
    <group ref={shapeContainer} {...props} dispose={null}>
      <group ref={spheresContainer}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={materials["Material.001"]}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>
      <mesh
        ref={ringContainer}
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials["Material.001"]}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/models/Planet.glb");
