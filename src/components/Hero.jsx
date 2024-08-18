import { motion } from "framer-motion"
import img from '../assets/portfolio.jpg'
import { Image } from "@nextui-org/react";
// import Typical from "react-typical";
import Typed from 'typed.js';
import { useRef, useEffect } from "react";
import githubImg from '../assets/github2.png'
import linkedinImg from '../assets/linkedin.png'

function Hero({ textEnter, textLeave }) {


  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['I am Ahanaf Tanvir', 'A Full-Stack Web Developer'],
      typeSpeed: 30,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
      showCursor: false
    };


    const typed = new Typed(typedElement.current, options);


    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row justify-around items-center sm:mt-24 min-h-[40vh] space-y-5 lg:space-y-0 lg:space-x-10 w-full">
        <div className="flex flex-col justify-center items-center h-auto lg:h-[400px]">
          <div className="w-full lg:w-[60vh] h-auto lg:h-40vh">
            <motion.div
              initial={{ y: -1000 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2.2,
                delay: 0.1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',

              }}
              className="py-2 mt-8 w-full lg:w-[180px] text-center rounded-lg shadow-lg shadow-orange-800 bg-gradient-to-r from-orange-500 via-purple-600 to-purple-900"
            >
              <h1 className="text-xl font-light cursor-default">Hey there!</h1>
            </motion.div>
            <div className="mt-6">
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-3xl sm:w-fit h-[75px] sm:h-[110px]  cursor-none lg:text-5xl font-medium mt-4 text-center lg:text-left"
              >
                <h1 ref={typedElement}></h1>

              </motion.div>
              <motion.p
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.25,
                }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="-mt-1 sm:mt-0 cursor-none tracking-wider font-medium text-slate-300 text-center lg:text-left"
              >
                A lone warrior on a journey through the world of development, facing challenges with the strength of the Berserker Armor.
              </motion.p>
              <div className="mt-4 flex justify-center items-center sm:justify-start sm:items-start">
                <a href="https://github.com/ahanaftanvir40" target="_blank">
                  <img className="h-10 w-10 transition-transform transform hover:scale-110" src={githubImg} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/ahanaf-tanvir-980a06264/" target="_blank">
                  <img className="h-12 w-12 ml-2 opacity-65 transition-transform transform hover:scale-110" src={linkedinImg} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative border border-purple-800 border-spacing-5 mb-20 rounded-lg h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] flex-shrink-0">
          <div className="absolute top-0 left-0 transform translate-x-4 sm:translate-x-6 sm:translate-y-5 translate-y-2 w-full h-full">
            <motion.div
              initial={{ y: [-10] }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.7,
                delay: 0.5,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'



              }}

            >

              <Image
                layout="fill"
                isBlurred
                objectFit="cover"
                src={img}
                alt=""
                className="rounded-lg"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero