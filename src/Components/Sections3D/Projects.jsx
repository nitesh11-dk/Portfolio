import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { RoundedBox } from "@react-three/drei";
import { Monitor } from "../3D/Monitor";
// import { MonitorScreen } from "../3D/MonitorScreen";

const Projects = () => {
  const { SECTIONS_DISTANCE } = useApp();
  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE * 2]}>
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
        {/* <MonitorScreen
                rotation-x={-0.18}
                position-z={-0.895}
                position-y={1.74}
              /> */}
        <RoundedBox scale-x={2} position-y={0.5} position-z={-1}>
          <meshStandardMaterial color="white" />
        </RoundedBox>
      </group>
    </group>
  );
};

export default Projects;
