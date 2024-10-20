import { Canvas } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment } from "@react-three/drei"
import { motion } from "framer-motion"


function Scene() {
    const gltf = useLoader(GLTFLoader, '/robothead.glb')
    const model = gltf.scene

    window.addEventListener('mousemove', (e) => {
        const rotationX = (e.clientX / window.innerWidth - 0.5) * (Math.PI * .25)
        const rotationY = (e.clientY / window.innerHeight - 0.5) * (Math.PI * .25)

        model.rotation.x = rotationY
        model.rotation.y = rotationX
    })

    return (
        <primitive object={gltf.scene} />
    )
}



function MainScene() {

    return (
        <div className="flex flex-col items-center p-4 lg:px-14 sm:p-0 justify-center w-full h-screen bg-[#6768ab] ">

            <div className="flex flex-col md:flex-col lg:flex-row items-center py-28 lg:justify-around md:justify-center w-full h-full">
                <div>
                    <motion.div
                        initial={{ y: -1000 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 2.5,
                            delay: 0.1,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                        }}
                        className="py-2 mb-9 sm:mb-8 w-full lg:w-[180px] text-center rounded-lg shadow-lg shadow-[#46415c93] bg-gradient-to-r from-[#9389bd] via-[#5e4d9b] to-[#2f2d3b]"
                    >
                        <h1 className="text-xl font-light cursor-default">Hey there!</h1>
                    </motion.div>
                    <div className="Intro mb-0 md:mb-0 md:mr-8 text-center md:text-left ">
                        <h1 className="text-4xl">
                            I am Ahanaf Tanvir, <span className="sm:hidden">a</span> <span className="text-[#b3cde4] sm:hidden"> Full-Stack Web Developer</span>
                            <h1 className="hidden sm:block">a <span className="text-[#b3cde4]">Full-Stack Web Developer</span></h1>
                        </h1>
                    </div>
                </div>

                <div className="w-full h-full max-w-4xl mt-10 md:mb-0 md:max-w-[45%] lg:max-w-[25%] max-h-[200px] md:max-h-[350px] sm:max-h-[900px]">
                    <Canvas camera={{ fov: 75, position: [0, 0, 1.2] }}>
                        <Environment files='/garage.jpg' />
                        <Scene />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default MainScene
