'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Floating Cube Component
function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.0002;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0.5, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#0023ff"
        metalness={0.7}
        roughness={0.2}
        emissive="#001a99"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// Rotating Torus
function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z -= 0.002;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -2]} rotation={[0.5, 0, 0]}>
      <torusGeometry args={[2, 0.6, 64, 100]} />
      <meshStandardMaterial
        color="#0066ff"
        metalness={0.6}
        roughness={0.15}
        emissive="#0033ff"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Rotating Sphere
function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004;
      meshRef.current.position.x += Math.sin(Date.now() * 0.0008) * 0.0001;
    }
  });

  return (
    <mesh ref={meshRef} position={[-3, -0.5, -2]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#00ccff"
        metalness={0.8}
        roughness={0.1}
        emissive="#0099ff"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

// Particle system
function ParticleField() {
  const points = useRef<THREE.Points>(null);

  useEffect(() => {
    if (!points.current) return;

    const geometry = points.current.geometry as THREE.BufferGeometry;
    const positions = geometry.attributes.position.array as Float32Array;

    geometry.attributes.position.needsUpdate = true;
  }, []);

  useFrame(() => {
    if (points.current && points.current.geometry) {
      points.current.rotation.y += 0.0002;
    }
  });

  const particleCount = 1000;
  const particles = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particles[i] = (Math.random() - 0.5) * 20;
    particles[i + 1] = (Math.random() - 0.5) * 20;
    particles[i + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#0066ff" sizeAttenuation={true} />
    </points>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={0.3}
      />

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066ff" />

      {/* 3D Objects */}
      <FloatingCube />
      <RotatingTorus />
      <RotatingSphere />
      <ParticleField />

      {/* Sparkles */}
      <Sparkles count={100} scale={10} size={1} speed={0.5} />

      {/* Environment */}
      <Environment preset="night" />

      {/* Background */}
      <color attach="background" args={['#ffffff']} />
    </>
  );
}

export const HeroScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          pixelRatio: Math.min(window.devicePixelRatio, 2),
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
