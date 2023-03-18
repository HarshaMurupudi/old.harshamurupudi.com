import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { DoubleSide, Mesh, PerspectiveCamera } from 'three';
import { Drawer } from 'flowbite';
import { connect } from 'react-redux';

import { World } from '../../../components/models';

import { setDrawerTitle } from '@/components/elements/drawer/store/actions';

const LandingComponent = ({ setDrawerTitle }) => {
  // set the drawer menu element
  // let $targetEl = {};
  // options with default values

  let drawer = {};

  useEffect(() => {
    // $targetEl = document.getElementById('drawer-js-example');
    const options = {
      placement: 'right',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
      onHide: () => {
        console.log('drawer is hidden');
      },
      onShow: () => {
        console.log('drawer is shown');
      },
      onToggle: () => {
        console.log('drawer has been toggledd');
      },
    };
    // const drawer = {};

    // set the drawer menu element
    const $targetEl = document.getElementById('drawer-js-example') || null;
    drawer = new Drawer($targetEl, options);

    // drawer.hide();
  }, []);

  const onDrawerToggle = (title) => {
    drawer.toggle();
    setDrawerTitle(title);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* <button onClick={() => drawer.toggle()}>Click</button> */}
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
        {/* <ambientLight intensity={0.5} /> */}
        <World onDrawerToggle={onDrawerToggle} />
        <ContactShadows position={[0, -0.8, 0]} color='#ffffff' />
        <OrbitControls
          target={[0, 8, 0]}
          // minAzimuthAngle={-Math.PI / 4 + 0.1}
          // maxAzimuthAngle={Math.PI / 6 - 0.7}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2 - 0.27}
          maxDistance={300}
          minDistance={100}
        />
      </Canvas>
    </div>
  );
};

const Landing = connect(null, { setDrawerTitle })(LandingComponent);

export { Landing };
