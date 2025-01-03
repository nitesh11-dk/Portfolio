import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { Wall } from "../3D/Wall";
import { useControls } from "leva";
import PhysicsCube from "./PhysicsCube";
const Skills = () => {
  const { SECTIONS_DISTANCE } = useApp();

  const wallControls = useControls("Wall Controls", {
    position: {
      value: [-2.1, 0, 0],
      step: 0.1,
    },
    rotation: {
      value: [0, 0.5, 0],
      step: 0.1,
    },
    scale: {
      value: 0.6,
      step: 0.1,
    },
  });

  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE]}>
      <SectionTitle>Skills</SectionTitle>
      {/* <Wall
        position={wallControls.position}
        rotation={wallControls.rotation}
        scale={wallControls.scale}
      /> */}
      <group position={[-2.7, 0.5, 0]} rotation-y={0.6} scale={0.5}>
        <PhysicsCube />
      </group>
    </group>
  );
};

export default Skills;
