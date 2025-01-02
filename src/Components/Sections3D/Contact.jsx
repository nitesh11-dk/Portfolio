import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
const Contact = () => {
  const { SECTIONS_DISTANCE } = useApp();
  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE * 3]}>
      <SectionTitle>Contact</SectionTitle>
    </group>
  );
};

export default Contact;
