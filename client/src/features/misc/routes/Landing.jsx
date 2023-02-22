import React from 'react';
import { useNavigate } from 'react-router';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { World } from '../../../components/models';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas shadows camera={{ position: [-80, 28, 100], fov: 20 }}>
        <Environment preset='forest' />
        <World />
        <ContactShadows position={[0, -0.8, 0]} color='#ffffff' />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
