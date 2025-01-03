import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import PhysicsCube from "./PhysicsCube";
import { MeshDistortMaterial } from "@react-three/drei";
import { useControls } from "leva";

const Skills = () => {
  const { SECTIONS_DISTANCE } = useApp();

  return (
    <group position={[0.4, 0, SECTIONS_DISTANCE]}>
      <mesh position-y={1.3} position-x={0.8}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <MeshDistortMaterial
          opacity={0.2}
          transparent
          distort={0.5}
          speed={1}
          color="red"
          metalness={0.2}
          roughness={0}
          transmission={0.95}
          ior={1.5}
        ></MeshDistortMaterial>
      </mesh>
      <SectionTitle
        position-y={1.1}
        position-x={0.4}
        position-z={-0.5}
        rotation-x={0}
        rotation-y={-0.5}
        rotation-z={0}
      >
        Skills
      </SectionTitle>
      <group position={[-1.5, 0.5, 0]} rotation-y={0.4} scale={0.45}>
        <PhysicsCube />
      </group>
    </group>
  );
};

export default Skills;
