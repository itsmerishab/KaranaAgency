import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const GoldenParticles = () => {
  const ref = useRef<THREE.Points>(null);

  // Increased from 600 to 1200 for richness, still very lightweight
  const particles = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15; // Closer cluster
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(t * 0.3) * 0.3;
      ref.current.rotation.z += 0.0005; // Slower rotation
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#FFD700"
        size={0.15} // Increased size from 0.06
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};
