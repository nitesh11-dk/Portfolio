import React, { useEffect, useState } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { config } from "../../config";

export function Whatshap(props) {
  const { nodes, materials } = useGLTF("/models/social/whatshap.glb");
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);
  useCursor(hovered);

  useEffect(() => {
    const emissiveColor = new THREE.Color("#25D366");
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
        hovered ? 1 : 0,
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
      onClick={() => window.open(config.socialLinks.whatsapp)}
      scale-z={scale}
    >
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <group name="Curve004_0" position={[0, 3, 6]} scale={13.49}>
          <mesh
            name="Object_4"
            geometry={nodes.Object_4.geometry}
            material={materials["glossy_putih.009"]}
          />
          <mesh
            name="Object_5"
            geometry={nodes.Object_5.geometry}
            material={materials.glossy_wa}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/social/whatshap.glb");
