import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useApp } from "../../Context/context.jsx";

export function Box({ position, args = [0.5, 0.5, 0.5], skill }) {
  const boxSize = Math.max(0.6, skill.name.length * 0.1);
  const adjustedArgs = [boxSize, boxSize, boxSize];
  const textOffset = boxSize / 2 + 0.01;

  const textDisplacement = [
    // Front
    { position: [0, 0, textOffset], rotation: [0, 0, 0] },
    // Back
    { position: [0, 0, -textOffset], rotation: [0, Math.PI, 0] },
    // Right
    { position: [textOffset, 0, 0], rotation: [0, Math.PI / 2, 0] },
    // Left
    { position: [-textOffset, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    // Top
    { position: [0, textOffset, 0], rotation: [-Math.PI / 2, 0, 0] },
    // Bottom
    { position: [0, -textOffset, 0], rotation: [Math.PI / 2, 0, 0] },
  ];

  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    args: adjustedArgs,
    material: { friction: 0.9, restitution: 0 },
    linearDamping: 0.9,
    angularDamping: 0.9,
  }));

  const [hovered, setHovered] = useState(false);
  const [currentPosition, setCurrentPosition] = useState([0, 0, 0]);
  const [currentVelocity, setCurrentVelocity] = useState([0, 0, 0]);

  useEffect(() => {
    const unsubPosition = api.position.subscribe((p) => setCurrentPosition(p));
    const unsubVelocity = api.velocity.subscribe((v) => setCurrentVelocity(v));
    return () => {
      unsubPosition();
      unsubVelocity();
    };
  }, [api.position, api.velocity]);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    const randomX = (Math.random() - 0.5) * 5;
    const randomZ = (Math.random() - 0.5) * 5;
    api.applyImpulse([randomX, 4, randomZ], [0, 0, 0]);
    api.angularVelocity.set(
      Math.random() * 5,
      Math.random() * 5,
      Math.random() * 5
    );
  };

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handlePointerDown}
    >
      <boxGeometry args={adjustedArgs} />
      <meshStandardMaterial
        color={hovered ? "#ff9f9f" : skill.color}
        metalness={0.9}
        roughness={0.6}
        envMapIntensity={1}
      />
      {textDisplacement.map((face, index) => (
        <Text
          key={index}
          position={face.position}
          rotation={face.rotation}
          fontSize={0.15}
          color={skill.textColor}
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      ))}
    </mesh>
  );
}
