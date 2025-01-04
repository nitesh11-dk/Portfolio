import { ContactShadows, Environment, useScroll } from "@react-three/drei";
import { Avatar } from "./3D/Avatar";
import { useRef } from "react";
import Home from "./Sections3D/Home.jsx";
import Skills from "./Sections3D/Skills.jsx";
import Projects from "./Sections3D/Projects.jsx";
import Contact from "./Sections3D/Contact.jsx";
import { useFrame } from "@react-three/fiber";
import { useApp } from "../Context/context";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { config } from "../config";
import { useMobile } from "../Helpers/useMobile";
import { useControls } from "leva";

const Experience = () => {
  const sectionContainer = useRef();
  const scrollData = useScroll();
  const { isMobile } = useMobile();
  const { SECTIONS_DISTANCE, setCurrentSection } = useApp();
  const { camera } = useThree();

  const { mobilePosition, mobileRotation } = useControls("Mobile Camera", {
    mobilePosition: {
      value: { x: -4.0, y: 0.2, z: -1 },
      step: 0.1,
    },
    mobileRotation: {
      value: { x: 0, y: -1.78, z: 0 },
      step: 0.01,
    },
  });

  function CameraPosition() {
    const targetPosition = isMobile
      ? scrollData.offset === 0
        ? new THREE.Vector3(1.3, 2.9, 3.4)
        : new THREE.Vector3(mobilePosition.x, mobilePosition.y, mobilePosition.z)
      : scrollData.offset === 0
      ? new THREE.Vector3(0.08, 1.53, 2.5)
      : new THREE.Vector3(0.7, 0.3, 4);

    const targetRotation = isMobile
      ? scrollData.offset === 0
        ? new THREE.Euler(-0.6, 0.16, 0)
        : new THREE.Euler(mobileRotation.x, mobileRotation.y, mobileRotation.z)
      : scrollData.offset === 0
      ? new THREE.Euler(-0.58, 0.09, 0)
      : new THREE.Euler(0, 0, 0);

    camera.position.lerp(targetPosition, 0.07);
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetRotation.x, 0.07);
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, targetRotation.y, 0.07);
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, targetRotation.z, 0.07);
  }

  useFrame(() => {
    sectionContainer.current.position.z = -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
    setCurrentSection(config.sections[Math.floor(scrollData.offset * (scrollData.pages - 1))]);
    CameraPosition();
  });

  return (
    <group className="mainContainer" position={[0.6, 0, 0]}>
      <Environment preset="sunset" />
      <Avatar />
      <mesh rotation-x={-Math.PI / 2} position-y={-0.001}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>
      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />
      <group ref={sectionContainer}>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </group>
    </group>
  );
};

export default Experience;
