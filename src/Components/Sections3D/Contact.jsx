import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { Social } from "../3D/Social";
import { useControls } from "leva";
import { Float } from "@react-three/drei";

const Contact = () => {
  const { SECTIONS_DISTANCE } = useApp();

  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE * 3]}>
      <SectionTitle>Contact</SectionTitle>
      <Float
        speed={1.34}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.04, 0.04]}
      >
        <Social position={[-1.7, 1.2, 0]} rotation={[0, 0.4, 0]} scale={0.2} />
      </Float>
    </group>
  );
};

export default Contact;
