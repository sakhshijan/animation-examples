"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { PointMaterial, Points } from "@react-three/drei";

function Stars() {
  const ref = useRef<any>(null);
  const [starts] = useState(() =>
    random.inSphere(new Float32Array(30000), { radius: 3 })
  );

  useFrame((state, delta) => {
    // if (!ref.current) return;
    ref.current.rotation.x += delta / 10;
    ref.current.rotation.y += delta / 15;
  });
  //test vercel
  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      <Points frustumCulled stride={3} positions={starts}>
        <PointMaterial
          depthWrite={false}
          transparent
          sizeAttenuation={true}
          size={0.002}
          color="#fff"
        />
      </Points>
    </group>
  );
}

const StarSky = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <Canvas className="h-full" camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarSky;
