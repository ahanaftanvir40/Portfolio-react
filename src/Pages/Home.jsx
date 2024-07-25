import { useEffect, useState } from "react"
import { Education, Hero, Projects, Skills } from "../components"
import { motion } from "framer-motion";
import debounce from 'lodash.debounce';

function Home() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    // console.log(mousePosition);

    const [cursorVariant, setCursorVariant] = useState('default')

    useEffect(() => {
        const mouseMove = debounce((e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }, 10)
        window.addEventListener('mousemove', mouseMove,)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    const variants = {
        default: {
            // x: mousePosition.x - 16,
            // y: mousePosition.y - 16
        },
        text: {
            height: 80,
            width: 80,
            x: mousePosition.x - 55,
            y: mousePosition.y - 55,
            backgroundColor: 'white',
            mixBlendMode: 'difference',
            
        }
    }

    const textEnter = () => setCursorVariant('text')
    const textLeave = () => setCursorVariant('default')
    return (
        <div className="min-h-screen min-w-full overflow-hidden" id="home">
            <motion.div id="cursor"
                variants={variants}
                animate={cursorVariant}
            >

            </motion.div>
            <Hero textEnter={textEnter} textLeave={textLeave} />
            <Projects textEnter={textEnter} textLeave={textLeave} />
            <Skills textEnter={textEnter} textLeave={textLeave} />
            <Education textEnter={textEnter} textLeave={textLeave} />
        </div>


    )
}

export default Home