import React, { useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { config } from "../../config";
import { useFrame } from "@react-three/fiber";

export function Resume(props) {
  const { nodes, materials } = useGLTF("/models/resume.glb");
  const [hovered, setHovered] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const scrollData = useScroll();
  useFrame((state) => {
    if (scrollData.offset <= 0) {
      if (!hovered) {
        setOpacity(0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.15);
      } else {
        setOpacity(1);
      }
    } else {
      setOpacity(0);
    }
  });

  return (
    <group
      {...props}
      className="resume"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => window.open(config.resume, "_blank")}
    >
      {
        <Html>
          <div
            className="bg-black/80 text-white px-2 py-1 rounded-lg"
            style={{ opacity }}
          >
            <h1 className="text-md font-semibold">Resume</h1>
          </div>
        </Html>
      }
      <group dispose={null}>
        <mesh
          name="Cube073"
          geometry={nodes.Cube073.geometry}
          material={materials.blue}
          position={[0.052, -0.661, 0.135]}
          rotation={[-0.478, 0.532, 0.338]}
          scale={1.356}
        >
          <mesh
            name="Cube074"
            geometry={nodes.Cube074.geometry}
            material={materials["light blue"]}
            position={[0, 0.275, 0.155]}
          >
            <mesh
              name="Cube075"
              geometry={nodes.Cube075.geometry}
              material={nodes.Cube075.material}
              position={[0, -1.675, 0.03]}
              scale={0.175}
            />
          </mesh>
          <mesh
            name="Cube076"
            geometry={nodes.Cube076.geometry}
            material={materials.glass}
            position={[-0.349, 0.031, 0.231]}
            scale={0.707}
          >
            <mesh
              name="Cube077"
              geometry={nodes.Cube077.geometry}
              material={materials["red.001"]}
              position={[0.334, 0.116, 0.099]}
              scale={1.308}
            />
            <mesh
              name="Cylinder027"
              geometry={nodes.Cylinder027.geometry}
              material={materials["red.001"]}
              position={[-0.893, -0.004, 0.102]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.747}
            />
          </mesh>
          <mesh
            name="Cube078"
            geometry={nodes.Cube078.geometry}
            material={materials["light blue"]}
            position={[0, 0.62, 0.611]}
          >
            <mesh
              name="Cube083"
              geometry={nodes.Cube083.geometry}
              material={materials.blue}
            />
            <mesh
              name="Cube084"
              geometry={nodes.Cube084.geometry}
              material={materials.blue}
              position={[-0.083, 0.76, 0.269]}
            />
            <mesh
              name="Cube085"
              geometry={nodes.Cube085.geometry}
              material={materials.blue}
              position={[-0.275, 0.458, 0.269]}
            />
            <mesh
              name="Cylinder030"
              geometry={nodes.Cylinder030.geometry}
              material={materials.blue}
              position={[-0.547, 0.715, 0.271]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </mesh>
          <mesh
            name="Cube079"
            geometry={nodes.Cube079.geometry}
            material={materials.glass}
            position={[0.32, -0.526, 0.231]}
            scale={0.707}
          >
            <mesh
              name="Cube080"
              geometry={nodes.Cube080.geometry}
              material={materials["yellow.001"]}
              position={[0.334, 0.116, 0.099]}
              scale={1.308}
            />
            <mesh
              name="Cylinder028"
              geometry={nodes.Cylinder028.geometry}
              material={materials["yellow.001"]}
              position={[-0.893, -0.004, 0.102]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.747}
            />
          </mesh>
          <mesh
            name="Cube081"
            geometry={nodes.Cube081.geometry}
            material={materials.glass}
            position={[-0.282, -1.042, 0.231]}
            scale={0.707}
          >
            <mesh
              name="Cube082"
              geometry={nodes.Cube082.geometry}
              material={materials.green}
              position={[0.334, 0.116, 0.099]}
              scale={1.308}
            />
            <mesh
              name="Cylinder029"
              geometry={nodes.Cylinder029.geometry}
              material={materials.green}
              position={[-0.893, -0.004, 0.102]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.747}
            />
          </mesh>
          <mesh
            name="Plane012"
            geometry={nodes.Plane012.geometry}
            material={materials.blue}
            position={[0, 0.972, 0.203]}
            scale={3.501}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/resume.glb");
