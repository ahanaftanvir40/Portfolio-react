import Cards from "./Cards"


function Projects({textEnter , textLeave}) {


const project_01 = {
    no:"1",
    name: 'WheelZOnRent',
    stack: 'MERN'
}

const project_02 = {
    no:'2',
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

            <div className="h-full w-full mt-5 sm:mt-10">
                <div className="flex justify-evenly gap-8 flex-wrap">
                    
                    <Cards no={project_01.no} name={project_01.name} stack={project_01.stack}/>
                    <Cards no={project_02.no} name={project_02.name} stack={project_02.stack} />
                    <Cards no={project_02.no} name={project_02.name} stack={project_02.stack} />
                  
                  
                    
                </div>


            </div>
        </div>
    )
}

export default Projects