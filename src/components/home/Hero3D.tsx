"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
    Environment,
    Line,
    Instances,
    Instance,
    Cylinder
} from "@react-three/drei";
import { useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

// --- 3D COMPONENTS ---

function CircuitLine({ start, end, control1, control2, color = "#00f0ff", width = 0.1 }) {
    const curve = useMemo(() => {
        return new THREE.CubicBezierCurve3(
            new THREE.Vector3(...start),
            new THREE.Vector3(...control1),
            new THREE.Vector3(...control2),
            new THREE.Vector3(...end)
        );
    }, [start, end, control1, control2]);

    const points = useMemo(() => curve.getPoints(50), [curve]);

    return (
        <Line
            points={points}
            color={color}
            lineWidth={width}
            transparent
            opacity={0.8}
        />
    );
}

function PowerCable({ start, end, thickness = 0.15, color = "#0088ff" }) {
    const curve = useMemo(() => {
        // Simple curve that dips slightly like a heavy cable or flexible pipe
        const mid = new THREE.Vector3().lerpVectors(new THREE.Vector3(...start), new THREE.Vector3(...end), 0.5);
        mid.y -= 0.5; // Dip
        return new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(...start),
            mid,
            new THREE.Vector3(...end)
        );
    }, [start, end]);

    return (
        <mesh>
            <tubeGeometry args={[curve, 20, thickness, 8, false]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.4}
                metalness={0.8}
            />
        </mesh>
    );
}

// --- NEW ELECTRICAL COMPONENTS ---

function SolarPanel({ position, rotation = [0, 0, 0] }) {
    return (
        <group position={position} rotation={rotation}>
            {/* Frame/Stand */}
            <mesh position={[0, -0.4, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                <meshStandardMaterial color="#64748b" metalness={0.8} />
            </mesh>

            {/* Panel Grid */}
            <group rotation={[Math.PI / 4, 0, 0]}> {/* Angled towards sun */}
                <mesh>
                    <boxGeometry args={[1.5, 0.05, 1]} />
                    <meshStandardMaterial color="#020617" metalness={0.9} roughness={0.1} />
                </mesh>
                {/* Cells Pattern */}
                <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[1.4, 0.9]} />
                    {/* Blue glassy look */}
                    <meshStandardMaterial color="#0044aa" emissive="#002266" emissiveIntensity={0.5} roughness={0.1} metalness={0.9} />
                </mesh>
                {/* Grid Lines Overlay */}
                <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[1.45, 0.95]} />
                    <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.1} />
                </mesh>
            </group>
        </group>
    );
}

function TransformerUnit({ position, scale = 1 }) {
    return (
        <group position={position} scale={scale}>
            {/* Main Tank */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[2, 2.5, 1.5]} />
                <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.3} />
            </mesh>

            {/* Cooling Fins (Ribs) */}
            {Array.from({ length: 6 }).map((_, i) => (
                <mesh key={i} position={[-1.1, 1, -0.6 + i * 0.24]}>
                    <boxGeometry args={[0.2, 2, 0.1]} />
                    <meshStandardMaterial color="#1e293b" metalness={0.7} />
                </mesh>
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
                <mesh key={`r-${i}`} position={[1.1, 1, -0.6 + i * 0.24]}>
                    <boxGeometry args={[0.2, 2, 0.1]} />
                    <meshStandardMaterial color="#1e293b" metalness={0.7} />
                </mesh>
            ))}

            {/* Bushings (Top Insulators) */}
            <group position={[0, 2.3, 0]}>
                <Cylinder args={[0.1, 0.15, 0.6]} position={[-0.5, 0, 0]} material={new THREE.MeshStandardMaterial({ color: "#954433" })} />
                <Cylinder args={[0.1, 0.15, 0.6]} position={[0, 0, 0]} material={new THREE.MeshStandardMaterial({ color: "#954433" })} />
                <Cylinder args={[0.1, 0.15, 0.6]} position={[0.5, 0, 0]} material={new THREE.MeshStandardMaterial({ color: "#954433" })} />
            </group>

            {/* Warning Light / Digital Display */}
            <mesh position={[0, 1.5, 0.76]}>
                <planeGeometry args={[0.5, 0.3]} />
                <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={2} />
            </mesh>
        </group>
    );
}

function Switchgear({ position }) {
    return (
        <group position={position}>
            {/* Cabinet */}
            <mesh position={[0, 1.25, 0]}>
                <boxGeometry args={[1, 2.5, 1]} />
                <meshStandardMaterial color="#475569" metalness={0.5} roughness={0.2} />
            </mesh>
            {/* Door Outline */}
            <mesh position={[0, 1.25, 0.51]}>
                <planeGeometry args={[0.9, 2.3]} />
                <meshStandardMaterial color="#94a3b8" wireframe transparent opacity={0.3} />
            </mesh>
            {/* Indicator Lights */}
            <mesh position={[-0.2, 2, 0.52]}>
                <circleGeometry args={[0.05]} />
                <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
            </mesh>
            <mesh position={[0, 2, 0.52]}>
                <circleGeometry args={[0.05]} />
                <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={2} />
            </mesh>
            <mesh position={[0.2, 2, 0.52]}>
                <circleGeometry args={[0.05]} />
                <meshStandardMaterial color="#0088ff" emissive="#0088ff" emissiveIntensity={2} />
            </mesh>
        </group>
    )
}

function PowerHubPlatform() {
    // Industrial Electrical Setup
    return (
        <group position={[3, -2, 0]} rotation={[0, -Math.PI / 4, 0]}>
            {/* Specialized Floor - Industrial Concrete/Grid */}
            <mesh position={[0, -0.25, 0]}>
                <boxGeometry args={[12, 0.5, 12]} />
                <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.8} />
            </mesh>

            {/* Yellow Safety Lines on floor */}
            <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#fbbf24" wireframe transparent opacity={0.1} />
            </mesh>

            {/* Main Transformer - The Power Core */}
            <TransformerUnit position={[0, 0, 0]} scale={1.5} />

            {/* Switchgear Banks */}
            <group position={[-3, 0, -2]}>
                <Switchgear position={[0, 0, 0]} />
                <Switchgear position={[1.1, 0, 0]} />
                <Switchgear position={[2.2, 0, 0]} />
            </group>

            {/* Solar Array - Clean Energy Field */}
            <group position={[3, 0.5, 3]}>
                {/* 3x3 Grid of Solar Panels */}
                <SolarPanel position={[0, 0, 0]} />
                <SolarPanel position={[1.6, 0, 0]} />
                <SolarPanel position={[3.2, 0, 0]} />

                <SolarPanel position={[0, 0, 1.2]} />
                <SolarPanel position={[1.6, 0, 1.2]} />
                <SolarPanel position={[3.2, 0, 1.2]} />
            </group>

            {/* Power Lines connecting them */}
            {/* Transformer to Switchgear */}
            <PowerCable start={[-0.5, 2.5, 0]} end={[-3, 2.5, -2]} thickness={0.08} color="#000000" />
            <PowerCable start={[0, 2.5, 0]} end={[-1.9, 2.5, -2]} thickness={0.08} color="#000000" />
            <PowerCable start={[0.5, 2.5, 0]} end={[-0.8, 2.5, -2]} thickness={0.08} color="#000000" />

            {/* Outgoing Feeder Cables (The cyan ones) */}
            <PowerCable start={[-4, 0.2, -1.5]} end={[-8, -2, 4]} thickness={0.2} color="#00ffff" />
            <PowerCable start={[-4, 0.2, -2]} end={[-8, -2, 3]} thickness={0.2} color="#06b6d4" />

            {/* Solar Inverter connection */}
            <PowerCable start={[3, 0.1, 3]} end={[1, 0.5, 1]} thickness={0.1} color="#facc15" /> {/* DC Yellow cable */}

            {/* Safety/perimeter light poles */}
            <group position={[-5, 0, -5]}>
                <cylinderGeometry args={[0.05, 0.05, 4]} />
                <meshStandardMaterial color="#64748b" />
                <mesh position={[0, 2, 0.2]}>
                    <coneGeometry args={[0.2, 0.3, 8]} rotation={[Math.PI / 2, 0, 0]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={5} />
                </mesh>
            </group>
        </group>
    );
}

export default function Hero3D() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                height: 'calc(100vh - 90px)',
                marginTop: '90px',
                background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)', // Maintain dark bg
                overflow: 'hidden'
            }}
        >
            {/* Content Overlay (Unchanged) */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '5%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                pointerEvents: 'none',
                width: '100%',
                maxWidth: '600px'
            }}>
                <div style={{ pointerEvents: 'auto' }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                        fontWeight: 700,
                        marginBottom: '1.5rem',
                        lineHeight: 1.2,
                        color: 'white'
                    }}>
                        The Modern <br />
                        <span style={{
                            background: 'linear-gradient(to right, #60a5fa, #67e8f9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontStyle: 'italic'
                        }}>
                            Electrical
                        </span> <br />
                        Solution Provider.
                    </h1>
                    <p style={{
                        fontSize: '1rem',
                        color: '#94a3b8',
                        marginBottom: '2rem',
                        maxWidth: '480px',
                        lineHeight: 1.7
                    }}>
                        Empowering infrastructure with next-generation smart grid technology and sustainable energy solutions.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Button href="/contact" variant="primary" style={{ padding: '0.75rem 1.75rem' }}>
                            Get Started
                        </Button>
                        <Button href="/services" variant="outline" style={{ padding: '0.75rem 1.75rem' }}>
                            View services
                        </Button>
                    </div>
                </div>
            </div>

            {domLoaded && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    {/* Static Camera Position for Isometric View - Moved back for better overview */}
                    <Canvas shadows camera={{ position: [20, 20, 20], fov: 25 }} gl={{ alpha: true }}>
                        <ambientLight intensity={0.5} />
                        {/* Dramatic Sidebar Lighting */}
                        <directionalLight position={[10, 10, 2]} intensity={2} color="#facc15" /> {/* Warm sunlight for solar */}
                        <pointLight position={[-5, 5, 5]} intensity={1} color="#60a5fa" />
                        <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} />

                        {/* Power Hub Platform */}
                        <group scale={0.7} position={[4, -0.5, 0]}>
                            <PowerHubPlatform />
                        </group>

                        <Environment preset="night" />
                    </Canvas>
                </div>
            )}
        </section>
    );
}
