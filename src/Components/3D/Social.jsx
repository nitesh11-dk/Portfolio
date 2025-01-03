import React from "react";
import { useGLTF } from "@react-three/drei";
import { Whatshap } from "./Whatshap";
import { Github } from "./Github";
import { Linkdin } from "./Linkdin";
import { Discord } from "./Discord";
import { useControls } from "leva";

export function Social(props) {
  const { nodes, materials } = useGLTF("/models/socialmedia.glb");

  return (
    <group {...props} dispose={null}>
      <group>
        <Whatshap
          position={[1.8, 3.2, -1.4]}
          rotation={[0, Math.PI, Math.PI]}
          scale={0.8}
        />
        <Github position={[-1.6, -1.5, -3.9]} scale={0.8} />
        <Linkdin
          position={[1.6, 6.0, -1.4]}
          rotation={[0, Math.PI, Math.PI]}
          scale={0.8}
        />
        <Discord
          position={[-1.1, 3.2, -1.4]}
          rotation={[0, Math.PI, Math.PI]}
          scale={0.8}
        />
      </group>
      <mesh
        name="Cube111"
        geometry={nodes.Cube111.geometry}
        material={materials.blue}
        position={[0.005, -0.163, 0.135]}
        scale={1.6}
      >
        <mesh
          name="Cube112"
          geometry={nodes.Cube112.geometry}
          material={materials["light blue"]}
          position={[0, 0.275, 0.155]}
        >
          <mesh
            name="Cube113"
            geometry={nodes.Cube113.geometry}
            material={materials.black}
            position={[0, -1.675, 0.03]}
            scale={0.175}
          />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/socialmedia.glb");
