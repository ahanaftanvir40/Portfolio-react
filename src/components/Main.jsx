import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



function Scene() {
    const gltf = useLoader(GLTFLoader, '/robothead.glb')
    return (
        <primitive object={gltf.scene} />
    )
}


function Cube() {

    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.x += delta
    }
    )

    return (
        <mesh ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'red'} />
        </mesh>
    )
}

function Main() {

    return (
        <div className="w-full h-screen">
            <Canvas
            >
                <directionalLight position={[0, 0, 2]} intensity={1} />
                <Scene />
            </Canvas>
        </div>
    )
}

export default Main
