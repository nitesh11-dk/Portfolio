import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { RoundedBox } from "@react-three/drei";
import { Monitor } from "../3D/Monitor";
import { useMobile } from "../../Helpers/useMobile";
import { MonitorScreen } from "../3D/MonitorScreen";

const Projects = () => {
  const { SECTIONS_DISTANCE } = useApp();
  const { isMobile } = useMobile();
  return (
    <group
      {...(isMobile
        ? {
            position: [-1.5, -0.1, SECTIONS_DISTANCE * 2 + 0.3],
            rotation: [0, -1.6, 0],
          }
        : {
            position: [0.4, 0, SECTIONS_DISTANCE * 2],
            rotation: [0, 0, 0],
          })}
    >
      <group
        position-x={0.5}
        position-z={0}
        rotation-y={-Math.PI / 5}
        scale={0.8}
      >
        <SectionTitle position-x={-0.8} position-y={1} position-z={-0.7}>
          Projects
        </SectionTitle>
        <Monitor
          scale={0.02}
          position-y={1.1}
          rotation-y={-Math.PI / 2}
          position-z={-1}
        />
        <MonitorScreen
          scale={1}
          rotation-x={-0.2}
          position-z={-0.895}
          position-y={1.86}
        />
        <RoundedBox scale-x={2} position-y={0.5} position-z={-1}>
          <meshStandardMaterial color="white" />
        </RoundedBox>
      </group>
    </group>
  );
};

export default Projects;
