import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './Scene'


function Three() {
    const handleProjectClick = (project) => {
        alert(`Clicked on: ${project.name}`); // Replace with your action (e.g., modal, navigation)
    };
    return (
        <div className='w-full h-screen'>
            <Canvas camera={{ fov: 60 }}>
                <OrbitControls />
                <ambientLight />
                <Scene onProjectClick={handleProjectClick} />
            </Canvas>
        </div>
    )
}

export default Three
