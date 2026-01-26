"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows, Html, Text, Line } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Link from 'next/link';

// Abstract Circuit Component
function CircuitNode({ position, color = "#0066cc", scale = 1 }: { position: [number, number, number]; color?: string; scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} opacity={0.8} transparent />
            </mesh>
        </Float>
    );
}

function ConnectionLine({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
    return (
        <Line
            points={[start, end]}
            color="#4db8ff"
            lineWidth={1}
            transparent
            opacity={0.3}
        />
    );
}

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[-10, 10, -10]} intensity={0.8} angle={0.5} penumbra={1} />

            {/* Background Elements */}
            <group position={[3, 0, -2]}>
                <CircuitNode position={[0, 1, 0]} color="#0066cc" scale={1.2} />
                <CircuitNode position={[2, -1, 1]} color="#ffa500" scale={0.8} />
                <CircuitNode position={[-1, -2, 0]} color="#4db8ff" scale={0.6} />

                <ConnectionLine start={[0, 1, 0]} end={[2, -1, 1]} />
                <ConnectionLine start={[0, 1, 0]} end={[-1, -2, 0]} />

                {/* Subtle Particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <mesh key={i} position={[
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 5
                    ]}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
                    </mesh>
                ))}
            </group>

            <Environment preset="city" />
        </>
    );
}

export default function Hero3D() {
    return (
        <section className="relative w-full h-screen bg-[#0f172a] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Scene />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl text-white">
                        <div className="mb-6 inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">
                            Future of Electrical Engineering
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            The Modern <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Electrical
                            </span> <br />
                            Solution Provider.
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-xl">
                            Simplify your power infrastructure with Mysore's first technology-driven electrical contracting firm.
                            Safety, Efficiency, and Innovation combined.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button href="/contact" variant="primary" className="bg-blue-600 hover:bg-blue-700 border-none shadow-lg shadow-blue-500/30">
                                Get Started <ArrowRight size={20} className="ml-2" />
                            </Button>
                            <Button href="/services" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                                View Services
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
