"use client"
import * as THREE from "three";
import { useRef, useReducer, useMemo, useEffect, useLayoutEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, MeshTransmissionMaterial, Environment, Lightformer, useTexture } from "@react-three/drei";
import { CuboidCollider, BallCollider, Physics, RigidBody, vec3 } from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";

const accents = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
  { color: "#444", size: 0.9 },
  { color: "#444", size: 0.75 },
  { color: "#444", size: 0.75 },
  { color: "white", size: 1 },
  { color: "white", size: 1.5 },
  // { color: "white", size: 0.1 },
  { color: accents[accent], size: 1.4, accent: true },
  { color: accents[accent], size: 1, accent: true },
  { color: accents[accent], size: 1, accent: true },
];

export function Planets(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const [jiggle, setJiggle] = useState(true);
  const handleClick = () => {
    click();
    setJiggle((state) => !state);
  };
  const connectors = useMemo(() => shuffle(accent), [accent]);
  return (
    <Canvas onClick={handleClick} shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} {...props} className="rounded-3xl">
      <color attach="background" args={["#141622"]} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Physics /* debug */ gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => <Connector key={i} index={i} size={props.size} {...props} jiggle={jiggle} />) /* prettier-ignore */}
        <Connector position={[10, 10, 5]} size={1} jiggle={jiggle}>
          <Model size={1} index={2}>
            <MeshTransmissionMaterial clearcoat={1}  thickness={0.1} anisotropicBlur={0.1} chromaticAberration={0.1} samples={8} resolution={512} />
          </Model>
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </Canvas>
  );
}

function Connector({ position, children, vec = new THREE.Vector3(), scale, size = 1, r = THREE.MathUtils.randFloatSpread, accent, jiggle, ...props }) {
  const jiggleTorqueScale = 10;
  useEffect(() => {
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(-15));

    api.current?.applyTorqueImpulse({
      x: Math.random() * jiggleTorqueScale,
      y: Math.random() * jiggleTorqueScale,
      z: Math.random() * jiggleTorqueScale,
    });
  }, [jiggle]);

  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.18));
  });
  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[size, 32, 32]} />
      {children ? children : <Model size={size} {...props} />}
      {accent && <pointLight intensity={40} distance={2.5} color={props.color} />}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0));
  });
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <CuboidCollider args={[0.2, 0.2, 5]} />
    </RigidBody>
  );
}

function Model({ children, index, size, roughness = 0, ...props }) {
  const ref = useRef();

  const planetTexture = useTexture(`/textures/planet_${index + 2}.jpg`);
  return (
    <mesh ref={ref} castShadow receiveShadow scale={1}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={planetTexture} />
      {children}
    </mesh>
  );
}
