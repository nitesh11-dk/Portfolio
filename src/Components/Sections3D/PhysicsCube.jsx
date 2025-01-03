import { Physics, usePlane } from "@react-three/cannon";
import { config } from "../../config";
import { createPositions } from "../../Helpers/createPositions.js";
import { Box } from "../3D/Box";
import { useApp } from "../../Context/context";
import { useEffect, useState } from "react";

function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
    material: { friction: 0.9, restitution: 0 },
    ...props,
  }));

  return (
    <mesh ref={ref} visible={false}>
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial color={"#f5f3ee"} />
    </mesh>
  );
}

export default function PhysicsCube() {
  const { currentSection } = useApp();
  const [hasRendered, setHasRendered] = useState(false);
  const positions = createPositions(config.skills);

  useEffect(() => {
    if (currentSection === "Skills" && !hasRendered) {
      setHasRendered(true);
    }
  }, [currentSection]);

  if (!hasRendered) {
    return null;
  }

  return (
    <Physics
      gravity={[0, -9.81, 0]}
      defaultContactMaterial={{
        friction: 0.9,
        restitution: 0,
      }}
      allowSleep={true}
      iterations={7}
    >
      <Plane />

      {positions.map((position, i) => (
        <Box key={i} position={position} skill={config.skills[i]} />
      ))}
    </Physics>
  );
}
