import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import PhysicsCube from "./PhysicsCube";

const Skills = () => {
  const { SECTIONS_DISTANCE } = useApp();

  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE]}>
      <SectionTitle>Skills</SectionTitle>

      <group position={[-2, 0.5, 0.5]} rotation-y={0.4} scale={0.45}>
        <PhysicsCube />
      </group>
    </group>
  );
};

export default Skills;
