import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { Laptop } from "../3D/Laptop";
import { useControls } from "leva";
import { Float } from "@react-three/drei";
import { Tree } from "../3D/Tree";
import { config } from "../../config";
const Home = () => {
  const { SECTIONS_DISTANCE } = useApp();

  const titleControls = useControls("Title", {
    positionX: { value: -2.4, min: -5, max: 5, step: 0.1 },
    positionY: { value: 0.75, min: -5, max: 5, step: 0.1 },
    positionZ: { value: -2.6, min: -5, max: 5, step: 0.1 },
    rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    rotationY: { value: 0.5, min: -Math.PI, max: Math.PI, step: 0.1 },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    scale: { value: 1.5, min: 0.1, max: 3, step: 0.1 },
  });

  return (
    <group>
      <Float
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={2}
        floatingRange={[0.001, 0.001]}
      >
        <Laptop
          position={[-1.1, 0.2, -0.8]}
          rotation={[0.3, -1.2, -0.1]}
          scale={1.9}
        />
      </Float>
      <Tree position={[1.6, 0, -1.6]} rotation={[0, -3.1, 0]} scale={0.7} />
      <SectionTitle
        position={[
          titleControls.positionX,
          titleControls.positionY,
          titleControls.positionZ,
        ]}
        rotation={[
          titleControls.rotationX,
          titleControls.rotationY,
          titleControls.rotationZ,
        ]}
        scale={titleControls.scale}
      >
        {config.title}
      </SectionTitle>
      <SectionTitle
        position={[-2.5, 0, -2.8]}
        rotation={[0, 0.5, 0]}
        scale={2.2}
      >
        {config.subtitle}
      </SectionTitle>
    </group>
  );
};

export default Home;
