import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
const Skills = () => {
  const { SECTIONS_DISTANCE } = useApp();
  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE]}>
      <SectionTitle>Skills</SectionTitle>
    </group>
  );
};

export default Skills;
