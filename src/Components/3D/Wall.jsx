import React from "react";
import { useGLTF } from "@react-three/drei";

export function Wall(props) {
  const { nodes, materials } = useGLTF("/models/wall.glb");
  return (
    <group {...props} dispose={null}>
      <group name="wall" rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          name="Cube4230"
          geometry={nodes.Cube4230.geometry}
          material={materials["Stone.050"]}
        />
        <mesh
          name="Cube4230_1"
          geometry={nodes.Cube4230_1.geometry}
          material={materials["StoneDark.011"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/wall.glb");
