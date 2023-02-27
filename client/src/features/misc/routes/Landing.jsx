import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { DoubleSide, Mesh, PerspectiveCamera } from 'three';

import { World } from '../../../components/models';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        shadows
        camera={{
          position: [-170, 70, 180],
          fov: 6,
          near: 0.1,
          far: 1000,
        }}
      >
        <Environment preset='forest' />
        <World />
        <ContactShadows position={[0, -0.8, 0]} color='#ffffff' />
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4 + 0.1}
          maxAzimuthAngle={Math.PI / 6 - 0.7}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2 - 0.27}
        />
      </Canvas>
    </div>
  );
};
