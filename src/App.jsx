import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience.jsx";
import { Scroll, ScrollControls } from "@react-three/drei";
import { config } from "./config.js";
import { Leva } from "leva";
import Interface from "./Components/Interface";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Leva />
      <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
        <color attach="background" args={["#f5f3ee"]} />
        <fog attach="fog" args={["#f5f3ee", 10, 50]} />

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
