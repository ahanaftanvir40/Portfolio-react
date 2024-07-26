import Cards from "./Cards"
import Reveal from "../../utils/Reveal"
import project2img from '../assets/p2.png'
import reactImg from '../assets/reactimg.png';

function Projects({ textEnter, textLeave }) {


    const project_01 = {
        no: "1",
        name: 'WheelZOnRent',
        stack: 'MERN'
    }

    const project_02 = {
        no: '2',
        name: 'CinePhile',
        stack: 'React'
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
                        <Cards no={project_01.no} name={project_01.name} stack={project_01.stack} />
                    </Reveal>

                    <Reveal>
                    <Cards no={project_02.no} stackimg={reactImg} img={project2img} name={project_02.name} stack={project_02.stack} />
                    </Reveal>
                    <Reveal>
                    <Cards no={project_02.no} name={project_02.name} stack={project_02.stack} />
                    </Reveal>



                </div>


            </div>
        </div>
    )
}

export default Projects