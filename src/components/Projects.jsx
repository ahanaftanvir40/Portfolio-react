import Cards from "./Cards"
import Reveal from "../../utils/Reveal"
import project2img from '../assets/p2.png'
import reactImg from '../assets/reactimg.png';
import project1Img from '../assets/p1.png'
import mernImg from '../assets/mern.png'
import project3Img from '../assets/p3.png'
import djImg from '../assets/dj.png';

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
        body:`কি- Key is a Django-based e-commerce website where users can register, log in, browse products by category, add items to their cart, and place orders. The site also features a search function for easy product discovery.`,
        tech:['HTML', 'CSS', 'Python', 'Django'],
        github: 'https://github.com/ahanaftanvir40/Ki-Key-ECommerce',
        live: ''
    }



    return (
        <div id="projects">
            <div className="h-[100px] w-fit m-auto sm:flex sm:items-end mt-16">
                <div className="border border-purple-950 rounded-lg shadow-md shadow-purple-800">
                    <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="cursor-none text-4xl p-4 font-medium text-center">Projects.</h1>
                </div>

            </div>

            <div className="h-full w-full mt-5 sm:mt-12">
                <div className="flex justify-evenly gap-8 flex-wrap">
                    <Reveal>
                        <Cards no={project_01.no} live={project_01.live} github={project_01.github} tech={project_01.tech} body={project_01.body} stackimg={mernImg} img={project1Img} name={project_01.name} stack={project_01.stack} />
                    </Reveal>

                    <Reveal>
                        <Cards no={project_02.no} live={project_02.live} github={project_02.github} tech={project_02.tech} body={project_02.body} stackimg={reactImg} img={project2img} name={project_02.name} stack={project_02.stack} />
                    </Reveal>
                    <Reveal>
                        <Cards no={project_03.no} tech={project_03.tech} body={project_03.body} live={project_03.live} github={project_03.github} stackimg={djImg} img={project3Img} name={project_03.name} stack={project_03.stack} />
                    </Reveal>



                </div>


            </div>
        </div>
    )
}

export default Projects