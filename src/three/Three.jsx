import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

function Three() {
    return (
        <div className='w-full h-screen'>
            <Canvas camera={{fov:40}}>
                <OrbitControls />
                <ambientLight />
                <mesh>
                    <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
                    <meshStandardMaterial side={THREE.DoubleSide} />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Three
