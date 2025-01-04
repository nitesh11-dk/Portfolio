import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience.jsx";
import { Scroll, ScrollControls } from "@react-three/drei";
import { config } from "./config.js";
import { Leva } from "leva";
import Interface from "./Components/Interface";
import { useMobile } from "./Helpers/useMobile.jsx";
const App = () => {
  const isMobile = useMobile();
  return (
    <div className="h-screen w-screen">
      <Leva hidden />
      {/* <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}> */}

      <Canvas
        camera={{
          position: [0.08, 4.63, 3.98],
          fov: 42,
          rotation: [-0.58, 0.09, 0],
        }}
      >
        <color attach="background" args={["#f5f3ee"]} />
        <fog attach="fog" args={["#f5f3ee", 5, 12]} />

        <ScrollControls
          pages={config.sections.length}
          damping={0.1}
          maxSpeed={0.3}
        >
          <group position-y={-1}>
            <Experience />
          </group>

          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
