import { useTexture } from "@react-three/drei";
import { useApp } from "../../Context/context";

export const MonitorScreen = (props) => {
  const { projectTexture } = useApp();
  // Load texture directly using useTexture hook
  const texture = useTexture(projectTexture);

  return (
    <group {...props}>
      <mesh>
        <planeGeometry args={[1.14, 0.66]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
};
