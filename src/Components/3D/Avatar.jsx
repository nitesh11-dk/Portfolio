import React, { useEffect, useRef, useState } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useFBX, useGLTF, useScroll } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useMobile } from "../../Helpers/useMobile";

export function Avatar(props) {
  const { scene } = useGLTF("/models/Avatar.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { isMobile } = useMobile();
  const model = useRef();
  const lastScroll = useRef(0);
  const scrollData = useScroll();

  const [animation, setAnimation] = useState("Typing");
  const [position, setPosition] = useState([-0.55, 0.0, -0.3]);
  const [rotation, setRotation] = useState([0.1, 2.6, 0]);

  const animations = React.useMemo(() => {
    const idle = useFBX("/animations/Idle.fbx").animations[0];
    const walk = useFBX("/animations/Walking.fbx").animations[0];
    const typing = useFBX("/animations/Typing.fbx").animations[0];

    idle.name = "Idle";
    walk.name = "Walk";
    typing.name = "Typing";

    return [idle, walk, typing];
  }, []);

  const { actions } = useAnimations(animations, model);

  useEffect(() => {
    const action = actions[animation];
    action.reset().fadeIn(0.3).play();
    if (animation === "Walk") {
      action.timeScale = 1.7; // Makes the walk animation 50% faster
    }
    return () => (action.reset().fadeOut(0.3).paused = true);
  }, [animation, actions]);

  useFrame(() => {
    const scrollDelta = scrollData.offset - lastScroll.current;
    const lerpFactor = scrollData.offset === 0 ? 0.06 : 0.03;
    const targetPosition =
      scrollData.offset === 0 ? [-0.55, 0.0, -0.3] : [0, 0.06, 0];

    setPosition(
      position.map((p, i) =>
        THREE.MathUtils.lerp(p, targetPosition[i], lerpFactor)
      )
    );

    if (scrollData.offset === 0) {
      setAnimation("Typing");
      setRotation(
        rotation.map((r, i) =>
          THREE.MathUtils.lerp(r, [0.1, 2.6, 0][i], lerpFactor)
        )
      );
    } else {
      let rotationTarget = 0;
      if (Math.abs(scrollDelta) > 0.0001) {
        setAnimation("Walk");
        rotationTarget = scrollDelta > 0 ? 0 : Math.PI;
      } else {
        setAnimation("Idle");
        if (isMobile) rotationTarget = -Math.PI / 2;
      }
      setRotation([
        0,
        THREE.MathUtils.lerp(rotation[1], rotationTarget, 0.07),
        0,
      ]);
    }

    lastScroll.current = scrollData.offset;
  });

  const meshProps = {
    dispose: null,
    ref: model,
    position,
    rotation,
    ...props,
  };

  return (
    <group {...meshProps}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
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
useFBX.preload("/animations/Typing.fbx");
