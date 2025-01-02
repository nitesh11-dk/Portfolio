import { useControls } from "leva";
import { config } from "../../config";
import { House2 } from "../3D/House2";
import { Text } from "@react-three/drei";

const Home = () => {
  const textControls = useControls("Text Group", {
    position: {
      value: [-0.1, 2.14, -1.25],
      step: 0.1,
    },
    rotation: {
      value: [0, -0.65, 0],
      step: 0.1,
    },
    scale: {
      value: 1,
      step: 0.1,
    },
  });

  return (
    <group>
      <House2 position={[-0.3, -0.1, 0]} rotation={[0, -0.65, 0]} scale={1} />

      
    </group>
  );
};

export default Home;
