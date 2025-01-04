import React, { useState } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { Whatshap } from "./Whatshap";
import { Github } from "./Github";
import { Linkdin } from "./Linkdin"; 
import { Discord } from "./Discord";
import { config } from "../../config.js";
import { Mail } from "./MAIL";

export function Social(props) {
  const { nodes, materials } = useGLTF("/models/socialmedia.glb");
  const [hovered, setHovered] = useState(null);
  useCursor(!!hovered);

  const socialLinks = config.socialLinks;

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.1, -0.4]} scale={0.8}>
        <Whatshap
          position={[1.8, 2, -1.4]}
          rotation={[0, Math.PI, Math.PI]}
          onPointerEnter={() => setHovered("whatsapp")}
          onPointerLeave={() => setHovered(null)}
          onClick={() => window.open(socialLinks.whatsapp)}
          opacity={hovered === "whatsapp" ? 1 : 0.5}
        />
        <Mail
          position={[0, 4, -1.8]}
          onPointerEnter={() => setHovered("mail")}
          onPointerLeave={() => setHovered(null)}
          onClick={() => window.open(socialLinks.mail)}
          rotation={[0, Math.PI, Math.PI]}
        />
        <Github
          position={[-1.6, -2.5, -4]}
          onPointerEnter={() => setHovered("github")}
          onPointerLeave={() => setHovered(null)}
          onClick={() => window.open(socialLinks.github)}
        />
        <Linkdin
          position={[1.6, 6.0, -1.4]}
          rotation={[0, Math.PI, Math.PI]}
          onPointerEnter={() => setHovered("linkedin")}
          onPointerLeave={() => setHovered(null)}
          onClick={() => window.open(socialLinks.linkedin)}
        />
        <Discord
          position={[-2, 2.5, -1.4]}
          rotation={[0, Math.PI, Math.PI]}
          onPointerEnter={() => setHovered("discord")}
          onPointerLeave={() => setHovered(null)}
          onClick={() => window.open(socialLinks.discord)}
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
