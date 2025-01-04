import React, { useEffect, useState } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { config } from "../../config";

export function Github(props) {
  const { nodes, materials } = useGLTF("/models/social/github.glb");
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);
  useCursor(hovered);

  useEffect(() => {
    const emissiveColor = new THREE.Color("#181717");
    Object.values(materials).forEach((material) => {
      material.emissive = emissiveColor;
      material.metalness = 0.8;
      material.roughness = 0.6;
    });
  }, []);

  useFrame(() => {
    Object.values(materials).forEach((material) => {
      material.emissiveIntensity = THREE.MathUtils.lerp(
        material.emissiveIntensity,
        hovered ? 14 : 0,
        0.2
      );
    });
    setScale(THREE.MathUtils.lerp(scale, hovered ? 1.2 : 1, 0.1));
  });

  return (
    <group
      {...props}
      dispose={null}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => window.open(config.socialLinks.github)}
      scale-z={scale}
    >
      <group
        name="Curve012_0"
        position={[-0.055, 2.945, 6.336]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={28.364}
      >
        <mesh
          name="Object_4"
          geometry={nodes.Object_4.geometry}
          material={materials.glossy_putih}
        />
        <mesh
          name="Object_5"
          geometry={nodes.Object_5.geometry}
          material={materials.github}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/social/github.glb");
