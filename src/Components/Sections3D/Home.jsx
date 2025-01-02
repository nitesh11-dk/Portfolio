import { House2 } from "../3D/House2";

const Home = () => {
  return (
    <group>
      <House2 position={[-0.3, -0.1, 0]} rotation={[0, -0.65, 0]} scale={1} />
    </group>
  );
};

export default Home;
