import React, { useEffect, useState } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { config } from "../../config";

export function Linkdin(props) {
  const { nodes, materials } = useGLTF("/models/social/linkdin.glb");
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);
  useCursor(hovered);

  useEffect(() => {
    const emissiveColor = new THREE.Color("#0A66C2");
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
        hovered ? 2 : 0,
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
      onClick={() => window.open(config.socialLinks.linkedin)}
      scale-z={scale}
    >
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <group name="Cylinder007_0" position={[0, 3, 6]} scale={0.843}>
          <mesh
            name="Object_4"
            geometry={nodes.Object_4.geometry}
            material={materials.glossy_linkedin}
          />
          <mesh
            name="Object_5"
            geometry={nodes.Object_5.geometry}
            material={materials.glossy_putih}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/social/linkdin.glb");
