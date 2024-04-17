"use client";
import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { Environment, OrbitControls, PresentationControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const LogoThree = () => {
  return (
    <div className="w-2/6 h-2/5 absolute top-0 left-0 ">
      <Canvas>
        <Environment preset="city" />
        <ExtrudeLogo />
      </Canvas>
    </div>
  );
};

export default LogoThree;

function Model(props) {
  const { nodes, materials } = useGLTF("assets/logo.glb");
  const groupRef = useRef(null);
  useFrame(() => {
    groupRef.current.rotation.z += 0.01;
  });
  return (
    <group {...props} dispose={null} ref={groupRef} rotation={[Math.PI / 2, 0, 0]} scale={2}>
      <mesh geometry={nodes.Exclusion_1.geometry} scale={[1, 0.3, 1]}>
        <meshPhysicalMaterial color="#07A267" metalness={0.5} />
      </mesh>
    </group>
  );
}

function ExtrudeLogo(props) {
  const { nodes, materials } = useGLTF("/assets/logo-mglb.glb");
  const groupRef = useRef(null);
  // const parts = useRef(Array.from({ length: 14 }));
  // let temp = new THREE.Vector3(0);
  // useFrame(({ pointer, clock }) => {
  //   temp.set(groupRef.current.rotation.x, groupRef.current.rotation.y, groupRef.current.rotation.z);
  //   temp.lerp(new THREE.Vector3(Math.PI / 2, pointer.y, pointer.x ), 0.05);
  //   groupRef.current.rotation.setFromVector3(temp);
  // });
  useFrame(() => {
    groupRef.current.rotation.z += 0.01
    // groupRef.current.rotation.y += 0.001
  })

  const material = new THREE.MeshPhysicalMaterial({ color: "green" });
  material.side = THREE.DoubleSide;
  return (
    <group {...props} dispose={null} ref={groupRef} rotation={[Math.PI / 3, 0, 0]} scale={25} position={[0, 0, 0]}>
      <mesh geometry={nodes.Path_36003.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_1.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_2.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_3.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_4.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_5.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_6.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_7.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_8.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_9.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_10.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_11.geometry} material={material}  />
      <mesh geometry={nodes.Path_36003_12.geometry} material={material}  />
    </group>
  );
}

useGLTF.preload("/assets/logo.glb");
useGLTF.preload("/assets/logo-mglb.glb");
