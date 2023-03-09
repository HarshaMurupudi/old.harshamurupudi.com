import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function Sail({
  initial,
  geometry,
  material,
  children,
  label,
  ...props
}) {
  const ref = useRef();
  const [hovered, set] = useState(false);
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = `pointer`;
      return () => (document.body.style.cursor = `auto`);
    }
  }, [hovered]);

  return (
    <group
      {...props}
      onPointerOver={(e) => set(true)}
      onPointerOut={() => set(false)}
    >
      <group ref={ref}>
        {/* {children} */}
        <mesh geometry={geometry} material={material} />
        {hovered && (
          <Html distanceFactor={10}>
            <div className='content'>{label}</div>
          </Html>
        )}
      </group>
    </group>
  );
}
