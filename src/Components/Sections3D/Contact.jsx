import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { Social } from "../3D/Social";
import { useControls } from "leva";
import { Float } from "@react-three/drei";
import { Mailbox } from "../3D/Mailbox";
import { ParkBench } from "../3D/ParkBench";
const Contact = () => {
  const { SECTIONS_DISTANCE } = useApp();

  const parkBenchControls = useControls("Park Bench", {
    positionX: {
      value: 1.2,
      min: -5,
      max: 5,
      step: 0.1,
    },
    positionY: {
      value: 0,
      min: -5,
      max: 5,
      step: 0.1,
    },
    positionZ: {
      value: -2.6,
      min: -5,
      max: 5,
      step: 0.1,
    },
    rotationY: {
      value: -2.3,
      min: -Math.PI,
      max: Math.PI,
      step: 0.1,
    },
    scale: {
      value: 0.5,
      min: 0.1,
      max: 2,
      step: 0.1,
    },
  });

  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE * 3]}>
      <SectionTitle position={[-2.7, 0, 0]} rotation={[0, 0.4, 0]}>Contact</SectionTitle>
      <Float
        speed={1.34}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.04, 0.04]}
      >
        <Social position={[-1.7, 1.2, 0]} rotation={[0, 0.4, 0]} scale={0.2} />
      </Float>

      <Mailbox
        scale={0.25}
        rotation-y={1.25 * Math.PI}
        position-x={0.5}
        position-y={0.25}
        position-z={-0.5}
      />
      <ParkBench
        scale={0.5}
        position-x={1}
        position-z={-2}
        rotation-y={-2.3}
      />
    </group>
  );
};

export default Contact;
