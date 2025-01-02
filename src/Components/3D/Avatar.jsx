import React, { useEffect, useRef, useState } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useFBX, useGLTF, useScroll } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Avatar(props) {
  const { scene } = useGLTF("/models/Avatar.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const model = useRef();
  const [animation, setAnimation] = useState("Typing");
  const [position, setPosition] = useState([-0.55, 0.0, -0.3]);
  const [rotation, setRotation] = useState([0.1, 2.6, 0]);

  const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
  const { animations: walkAnimation } = useFBX("/animations/Walking.fbx");
  const { animations: typingAnimation } = useFBX("/animations/Typing.fbx");
  idleAnimation[0].name = "Idle";
  walkAnimation[0].name = "Walk";
  typingAnimation[0].name = "Typing";

  const { actions } = useAnimations(
    [idleAnimation[0], walkAnimation[0], typingAnimation[0]],
    model
  );

  useEffect(() => {
    actions[animation].reset().fadeIn(0.7).play();
    return () => {
      actions[animation].reset().fadeOut(0.7).paused = true;
    };
  }, [animation]);

  const scrollData = useScroll();
  const lastScroll = useRef(0);

  useFrame(() => {
    const scrollDelta = scrollData.offset - lastScroll.current;

    if (scrollData.offset === 0) {
      setAnimation("Typing");
      const targetPosition = [-0.55, 0.0, -0.3];
      setPosition(
        position.map((p, i) => THREE.MathUtils.lerp(p, targetPosition[i], 0.09))
      );
      const targetRotation = [0.1, 2.6, 0];
      setRotation(
        rotation.map((r, i) => THREE.MathUtils.lerp(r, targetRotation[i], 0.09))
      );
    } else {
      const targetPosition = [0, 0.06, 0];
      setPosition(
        position.map((p, i) => THREE.MathUtils.lerp(p, targetPosition[i], 0.03))
      );

      let rotationTarget = 0;
      if (Math.abs(scrollDelta) > 0.0001) {
        setAnimation("Walk");
        rotationTarget = scrollDelta > 0 ? 0 : Math.PI;
      } else {
        setAnimation("Idle");
      }

      setRotation([
        0,
        THREE.MathUtils.lerp(rotation[1], rotationTarget, 0.1),
        0,
      ]);
    }

    lastScroll.current = scrollData.offset;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={model}
      position={position}
      rotation={rotation}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="Wolf3D_Hair"
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Top"
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Bottom"
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Footwear"
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Body"
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/models/Avatar.glb");
useFBX.preload("/animations/Idle.fbx");
useFBX.preload("/animations/Walking.fbx");
