import { useGLTF } from "@react-three/drei";
import React from "react";

export function ParkBench(props) {
  const { nodes, materials } = useGLTF("/models/Park Bench.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["Park_Bench_Cube-Mesh"].geometry}
        material={materials.Metal}
      />
      <mesh
        geometry={nodes["Park_Bench_Cube-Mesh_1"].geometry}
        material={materials.Wood}
      />
    </group>
  );
}

useGLTF.preload("/models/Park Bench.glb");
