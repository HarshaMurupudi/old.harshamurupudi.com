import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Gauca(props) {
  const { nodes, materials } = useGLTF('/models/Gauca.glb');
  return (
    <group
      {...props}
      dispose={null}
      scale={2}
      position={[-5.29, 0.5, -5.03]}
      rotation={[0.0, -0.2, 0.0]}
    >
      <group position={[2.85, 1.51, 2.86]} rotation={[-0.04, 0.04, -0.25]}>
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials['eyes and mouth.001']}
          position={[0, 0.16, 0.07]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials['arms.001']}
        position={[3.19, 1.53, 2.58]}
        scale={0.06}
      />
      <group position={[2.89, 2.07, 2.88]}>
        <mesh
          geometry={nodes.Sphere007_1.geometry}
          material={materials['dark.001']}
        />
        <mesh
          geometry={nodes.Sphere007_2.geometry}
          material={materials['light.001']}
        />
      </group>
      <mesh
        geometry={nodes.Sphere007.geometry}
        material={materials['pit.001']}
        position={[2.89, 2.07, 2.88]}
      />
      <mesh
        geometry={nodes.Sphere004.geometry}
        material={materials['eyes and mouth.001']}
        position={[3.37, 1.75, 2.86]}
      />
      <mesh
        geometry={nodes.Sphere005.geometry}
        material={materials['eyes and mouth.001']}
        position={[2.4, 1.75, 2.86]}
      />
    </group>
  );
}

useGLTF.preload('/models/Gauca.glb');
