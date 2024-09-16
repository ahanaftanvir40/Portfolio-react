import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

// Import the images
import htmlImg from '../assets/html.png';
import reactImg from '../assets/reactimg.png';
import cssImg from '../assets/cssimg.png';
import jsImg from '../assets/js.png';
import nodeImg from '../assets/node.png';
import mongoImg from '../assets/mongo.png';
import mysqlImg from '../assets/mysql.png';
import postgresImg from '../assets/postgres.png';
import pythonImg from '../assets/python.png';
import djImg from '../assets/dj.png';
import nextImg from '../assets/next.png';

function Scene() {
    // Define the projects array with the images
    const projects = [
        { name: "HTML", image: htmlImg },
        { name: "React", image: reactImg },
        { name: "CSS", image: cssImg },
        { name: "JavaScript", image: jsImg },
        { name: "Node.js", image: nodeImg },
        { name: "MongoDB", image: mongoImg },
        { name: "MySQL", image: mysqlImg },
        { name: "PostgreSQL", image: postgresImg },
        { name: "Python", image: pythonImg },
        { name: "Django", image: djImg },
        { name: "Next.js", image: nextImg },
    ];

    // Load textures for each project image
    const textures = useTexture(projects.map(p => p.image));
    const ref = useRef();

    // Rotate the cylinder continuously
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={ref}>
            {/* Main rotating cylinder */}
            <mesh>
                {/* Create a cylinder geometry with the number of segments equal to the number of projects */}
                <cylinderGeometry args={[1, 1, 5, projects.length,1, true]} />

                {/* Apply a different texture to each segment */}
                {textures.map((texture, index) => (
                    <meshBasicMaterial key={index} map={texture} side={THREE.DoubleSide} />
                ))}
            </mesh>
        </group>
    );
}

export default Scene;
