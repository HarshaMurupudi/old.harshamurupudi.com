import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Gauca(props) {
  const { nodes, materials } = useGLTF('/models/Gauca.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[-0.04, 1.45, -0.03]} rotation={[-0.04, 0.04, -0.25]}>
        <mesh
          geometry={nodes.Circle.geometry}
          material={materials['eyes and mouth']}
          position={[0, 0.16, 0.07]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.arms}
        position={[0.31, 1.47, -0.3]}
        scale={0.06}
      />
      <group position={[0, 2.01, 0]}>
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials.dark} />
        <mesh
          geometry={nodes.Sphere001_2.geometry}
          material={materials.light}
        />
      </group>
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials.pit}
        position={[0, 2.01, 0]}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={materials['eyes and mouth']}
        position={[0.49, 1.7, -0.03]}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={materials['eyes and mouth']}
        position={[-0.49, 1.7, -0.03]}
      />
    </group>
  );
}

useGLTF.preload('/models/Gauca.glb');
