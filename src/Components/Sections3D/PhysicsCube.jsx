import { Physics, usePlane } from "@react-three/cannon";
import { config } from "../../config";
import { createPositions } from "../../Helpers/createPositions.js";
import { Box } from "../3D/Box";

const Plane = (props) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
    material: { friction: 0.9, restitution: 0 },
    ...props,
  }));

  return (
    <mesh ref={ref} visible={false}>
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial color="#f5f3ee" />
    </mesh>
  );
};

const PhysicsCube = () => {
  const positions = createPositions(config.skills);

  return (
    <Physics
      gravity={[0, -9.81, 0]}
      defaultContactMaterial={{ friction: 0.9, restitution: 0 }}
      allowSleep
      iterations={7}
    >
      <Plane />
      {positions.map((position, i) => (
        <Box key={i} position={position} skill={config.skills[i]} />
      ))}
    </Physics>
  );
};

export default PhysicsCube;
