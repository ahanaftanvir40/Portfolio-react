import React from 'react'
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';


function ProjectTexture({ onProjectClick }) {
    const projects = [
        { name: "Project 1", image: p1 },
        { name: "Project 2", image: p2 },
        { name: "Project 3", image: p3 },
        { name: "Project 4", image: p4 },
    ];
    console.log(projects);
    const textures = useLoader(THREE.TextureLoader, projects.map(p => p.image));

    const radius = 3; // How far from the center the images will be placed
    const angleStep = (2 * Math.PI) / projects.length; // Angle step to evenly distribute projects around the circle

    return (
        <>
            {textures.map((texture, index) => {
                // Calculate position in a circle (X and Z axes)
                const angle = index * angleStep;
                const x = Math.sin(angle) * radius;
                const z = Math.cos(angle) * radius;

                return (
                    <mesh
                        key={index}
                        position={[x, 0, z]} // Position the image in a circle
                        onClick={() => onProjectClick(projects[index])} // Handle click
                    >
                        {/* Display the project image as a plane */}
                        <planeGeometry args={[1, 1.5]} />
                        <meshBasicMaterial map={texture} />
                    </mesh>
                );
            })}
        </>
    );
}

export default ProjectTexture
