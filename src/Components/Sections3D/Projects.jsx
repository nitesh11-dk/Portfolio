import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";

const Projects = () => {
  const { SECTIONS_DISTANCE } = useApp();
  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE * 3]}>
      <SectionTitle>Projects</SectionTitle>
    </group>
  );
};

export default Projects;
