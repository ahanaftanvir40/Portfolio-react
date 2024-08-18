import Cards from "./Cards"
import Reveal from "../../utils/Reveal"
import project2Img from '../assets/p2.png'
import reactImg from '../assets/reactimg.png';
import project1Img from '../assets/p1.png'
import mernImg from '../assets/mern.png'
import project3Img from '../assets/p3.png'
import djImg from '../assets/dj.png';
import project4Img from '../assets/p4.png'
import nextImg from '../assets/next.png'

function Projects({ textEnter, textLeave }) {


    const project_01 = {
        no: "1",
        name: 'WheelZOnRent',
        stack: 'MERN',
        body: `WheelzOnRent is a comprehensive platform designed to facilitate vehicle and garage rentals.`,
        tech: ['MERN', 'Socket.IO', 'DaisyUI', 'Tailwind'],
        github: 'https://github.com/ahanaftanvir40/WheelZOnRent',
        live: ''
    }

    const project_02 = {
        no: '2',
        name: 'CinePhile',
        stack: 'React',
        body: `CinePhile leverages the rich data from TMDB to offer a vibrant and comprehensive entertainment exploration experience, making it a go-to destination for movie and TV enthusiasts.`,
        tech: ['React', 'TMDB', 'Tailwind'],
        github: 'https://github.com/ahanaftanvir40/Cinephile',
        live: 'https://cinephile-project.netlify.app/'
    }

    const project_03 = {
        no: '3',
        name: 'Ki-Key Ecommerce',
        stack: 'Django',
        body: `কি- Key is a Django-based e-commerce website where users can register, log in, browse products by category, add items to their cart, and place orders. The site also features a search function for easy product discovery.`,
        tech: ['HTML', 'CSS', 'Python', 'Django'],
        github: 'https://github.com/ahanaftanvir40/Ki-Key-ECommerce',
        live: ''
    }
    
    const project_04 = {
        no: '4',
        name: 'Trendy Kicks',
        stack: 'Next.js',
        body: `Trendy Kicks is a modern Next.js e-commerce platform for high-end sneaker enthusiasts. Users can browse premium sneakers, view details, and place orders effortlessly. The admin dashboard allows for easy management of sneaker listings and orders. The UI is sleek and user-friendly, ensuring a seamless experience for all.`,
        tech: ['Next.js' , 'AceternityUI' ,'NextAuth', 'MongoDB'],
        github: 'https://github.com/ahanaftanvir40/trendykicks_nextjs',
        live: 'https://trendykicks-phi.vercel.app/'
    }




    return (
        <div id="projects" className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-16">
            <div className="w-fit flex items-center justify-center mt-16">
                <div className="border border-purple-950 rounded-lg shadow-md shadow-purple-800">
                    <h1
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className="cursor-none text-4xl p-4 font-medium text-center"
                    >
                        Projects.
                    </h1>
                </div>
            </div>

            <div className="w-full mt-12 flex justify-center">
                <div className="flex justify-center gap-8 flex-wrap">
                    <Reveal>
                        <Cards
                            no={project_01.no}
                            live={project_01.live}
                            github={project_01.github}
                            tech={project_01.tech}
                            body={project_01.body}
                            stackimg={mernImg}
                            img={project1Img}
                            name={project_01.name}
                            stack={project_01.stack}
                        />
                    </Reveal>

                    <Reveal>
                        <Cards
                            no={project_02.no}
                            live={project_02.live}
                            github={project_02.github}
                            tech={project_02.tech}
                            body={project_02.body}
                            stackimg={reactImg}
                            img={project2Img}
                            name={project_02.name}
                            stack={project_02.stack}
                        />
                    </Reveal>

                    <Reveal>
                        <Cards
                            no={project_03.no}
                            live={project_03.live}
                            github={project_03.github}
                            tech={project_03.tech}
                            body={project_03.body}
                            stackimg={djImg}
                            img={project3Img}
                            name={project_03.name}
                            stack={project_03.stack}
                        />
                    </Reveal>

                    <Reveal>
                        <Cards
                            no={project_04.no}
                            live={project_04.live}
                            github={project_04.github}
                            tech={project_04.tech}
                            body={project_04.body}
                            stackimg={nextImg}
                            img={project4Img}
                            name={project_04.name}
                            stack={project_04.stack}
                        />
                    </Reveal>
                </div>
            </div>
        </div>

    )
}

export default Projects