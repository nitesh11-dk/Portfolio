import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { RoundedBox } from "@react-three/drei";
import { Monitor } from "../3D/Monitor";
import { useMobile } from "../../Helpers/useMobile";

const Projects = () => {
  const { SECTIONS_DISTANCE } = useApp();
  const { isMobile } = useMobile();

  return (
    <group
      position={isMobile ? [1.4, -0.1, SECTIONS_DISTANCE * 2] : [0.4, 0, SECTIONS_DISTANCE * 2]}
      rotation={isMobile ? [0, -1.5, 0] : [0, 0, 0]}
    >
      <group position-x={0.5} position-z={0} rotation-y={-Math.PI / 5} scale={0.8}>
        <SectionTitle position-x={-0.8} position-y={1} position-z={-0.7}>
          Projects
        </SectionTitle>
        <Monitor
          scale={0.02}
          position-y={1.1}
          rotation-y={-Math.PI / 2}
          position-z={-1}
        />
        <RoundedBox scale-x={2} position-y={0.5} position-z={-1}>
          <meshStandardMaterial color="white" />
        </RoundedBox>
      </group>
    </group>
  );
};

export default Projects;
