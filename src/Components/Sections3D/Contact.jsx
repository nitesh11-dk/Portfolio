import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { Social } from "../3D/Social";
import { useControls } from "leva";
import { Float } from "@react-three/drei";
import { Mailbox } from "../3D/Mailbox";
import { ParkBench } from "../3D/ParkBench";
const Contact = () => {
  const { SECTIONS_DISTANCE } = useApp();

  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE * 3]}>
      {/* <SectionTitle position={[-2.7, 0, 0]} rotation={[0, 0.4, 0]}>Contact</SectionTitle> */}

      <Float
        speed={1.34}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.04, 0.04]}
      >
        <Social position={[-1.5, 1.2, 0]} rotation={[0, 0.4, 0]} scale={0.17} />
      </Float>

      <Mailbox
        scale={0.25}
        rotation-y={1.25 * Math.PI}
        position-x={0.5}
        position-y={0.25}
        position-z={-0.5}
      />
      <ParkBench scale={0.5} position-x={1} position-z={-2} rotation-y={-2.3} />
    </group>
  );
};

export default Contact;
