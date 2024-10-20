import { motion } from "framer-motion"
import img from '../assets/portfolio.jpg'
import { Image } from "@nextui-org/react";
// import Typical from "react-typical";
import Typed from 'typed.js';
import { useRef, useEffect } from "react";
import githubImg from '../assets/github2.png'
import linkedinImg from '../assets/linkedin.png'

function Hero() {


  // const typedElement = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     strings: ['I am Ahanaf Tanvir', 'A Full-Stack Web Developer'],
  //     typeSpeed: 30,
  //     backSpeed: 25,
  //     backDelay: 1500,
  //     loop: true,
  //     showCursor: false
  //   };


  //   const typed = new Typed(typedElement.current, options);


  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div id="about" className="container  mx-auto px-4 min-h-screen flex items-center bg-[#4f4b64] sm:rounded-3xl ">
      <div className="flex flex-col lg:flex-row justify-around items-center sm:mt-24 min-h-[40vh] space-y-5 lg:space-y-0 lg:space-x-10 w-full">
        <div className="flex flex-col justify-center items-center h-auto lg:h-[400px]">
          <div className="w-full lg:w-[60vh] h-auto lg:h-40vh">
            <motion.div
              initial={{ y: -1000 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2.8,
                delay: 0.1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',

              }}
              className="py-2 mt-8 w-full lg:w-[180px] text-center rounded-lg shadow-lg shadow-[#46415c93] bg-gradient-to-r from-[#9389bd] via-[#5e4d9b] to-[#2f2d3b]"
            >
              <h1 className="text-xl font-light cursor-default">About Me</h1>
            </motion.div>
            <div className="mt-6">
              <motion.p
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.25,
                }}

                className="about -mt-1 sm:mt-0  text-slate-300 text-center lg:text-left"
              >
                Aspiring Full Stack Web Developer with a passion for creating dynamic and user-friendly websites. Proficient in MERN Stack, NextJs, JavaScript, and Python. Eager to leverage programming skills and enthusiasm for problem-solving to contribute to innovative web development projects.
              </motion.p>
              {/* <div className="mt-4 flex justify-center items-center sm:justify-start sm:items-start">
                <a href="https://github.com/ahanaftanvir40" target="_blank">
                  <img className="h-11 w-11 scale-[0.9]  transition-transform transform hover:scale-110" src={githubImg} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/ahanaf-tanvir-980a06264/" target="_blank">
                  <img className="h-11 w-11 ml-2 scale-110  opacity-65 transition-transform transform hover:scale-125" src={linkedinImg} alt="" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="relative border border-[#5b5c9b] border-spacing-5 mb-20 rounded-lg h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] flex-shrink-0">
          <div className="absolute top-0 left-0 transform translate-x-4 sm:translate-x-6 sm:translate-y-5 translate-y-2 w-full h-full">
            <motion.div
              initial={{ y: [-10] }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.5,
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