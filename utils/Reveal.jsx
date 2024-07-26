import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({ children }) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        // console.log('isInview: ', isInView);
        if (isInView) {
            mainControls.start("visible")
        }

    }, [isInView, mainControls])
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.25 }}
            ref={ref}
            className=""
            
        >{children}</motion.div>
    )
}

export default Reveal