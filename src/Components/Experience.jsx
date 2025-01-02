import {
  ContactShadows,
  Environment,
  OrbitControls,
  useScroll,
} from "@react-three/drei";
import { Avatar } from "./3D/Avatar";

import { useRef } from "react";
import Home from "./Sections/Home.jsx";
import Skills from "./Sections/Skills.jsx";
import Projects from "./Sections/Projects.jsx";
import Contact from "./Sections/Contact.jsx";
import { useFrame } from "@react-three/fiber";
import { useApp } from "../Context/context";

const Experience = () => {
  const sectionContainer = useRef();
  const scrollData = useScroll();
  const { SECTIONS_DISTANCE } = useApp();

  useFrame(() => {
    sectionContainer.current.position.z =
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
  });

  return (
    <>
      <Environment preset="sunset" />
      <OrbitControls />
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
    </>
  );
};

export default Experience;
