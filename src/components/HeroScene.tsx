'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function WireframeShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const edgesRef = useRef<THREE.LineSegments>(null);

    useFrame((state) => {
        if (!meshRef.current || !edgesRef.current) return;

        // Slow auto-rotation
        meshRef.current.rotation.y += 0.003;
        meshRef.current.rotation.x += 0.001;
        edgesRef.current.rotation.y = meshRef.current.rotation.y;
        edgesRef.current.rotation.x = meshRef.current.rotation.x;

        // Mouse-follow tilt
        const { pointer } = state;
        meshRef.current.rotation.z = pointer.x * 0.3;
        edgesRef.current.rotation.z = pointer.x * 0.3;
    });

    const geometry = new THREE.IcosahedronGeometry(1.8, 1);

    return (
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
            <group>
                {/* Solid fill with low opacity */}
                <mesh ref={meshRef} geometry={geometry}>
                    <meshBasicMaterial
                        color="#ccff00"
                        transparent
                        opacity={0.03}
                    />
                </mesh>

                {/* Wireframe edges */}
                <lineSegments ref={edgesRef} geometry={new THREE.EdgesGeometry(geometry)}>
                    <lineBasicMaterial color="#ccff00" transparent opacity={0.6} />
                </lineSegments>
            </group>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            aria-hidden="true"
        >
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ pointerEvents: 'auto' }}
            >
                <WireframeShape />
            </Canvas>
        </div>
    );
}
