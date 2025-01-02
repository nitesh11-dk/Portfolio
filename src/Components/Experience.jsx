import {
  ContactShadows,
  Environment,
  OrbitControls,
  useScroll,
} from "@react-three/drei";
import { Avatar } from "./3D/Avatar";

import { useRef, useState } from "react";
import Home from "./Sections3D/Home.jsx";
import Skills from "./Sections3D/Skills.jsx";
import Projects from "./Sections3D/Projects.jsx";
import Contact from "./Sections3D/Contact.jsx";
import { useFrame } from "@react-three/fiber";
import { useApp } from "../Context/context";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";

const Experience = () => {
  const sectionContainer = useRef();
  const scrollData = useScroll();
  const { SECTIONS_DISTANCE } = useApp();
  const { camera } = useThree();

  function CameraPosition() {
    const targetPosition =
      scrollData.offset === 0
        ? new THREE.Vector3(0.08, 2.63, 2.98)
        : new THREE.Vector3(0, 0.5, 5);

    const targetRotation =
      scrollData.offset === 0
        ? new THREE.Euler(-0.58, 0.09, 0)
        : new THREE.Euler(0, 0, 0);

    camera.position.lerp(targetPosition, 0.07);
    camera.rotation.x = THREE.MathUtils.lerp(
      camera.rotation.x,
      targetRotation.x,
      0.07
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      targetRotation.y,
      0.07
    );
    camera.rotation.z = THREE.MathUtils.lerp(
      camera.rotation.z,
      targetRotation.z,
      0.07
    );
  }

  useFrame(() => {
    sectionContainer.current.position.z =
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);

    CameraPosition();
  });

  return (
    <group className="mainContainer">
      <Environment preset="sunset" />
      <axesHelper args={[5]} />
      <Avatar />

      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />

      <group ref={sectionContainer}>
        {/*  HOME */}
        <Home />
        {/* Skills */}
        <Skills></Skills>
        {/* Projects */}
        <Projects></Projects>
        {/* Contact */}
        <Contact></Contact>
      </group>
    </group>
  );
};

export default Experience;
