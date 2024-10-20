import htmlImg from '../assets/html.png';
import reactImg from '../assets/reactimg.png';
import cssImg from '../assets/cssimg.png';
import jsImg from '../assets/js.png';
import nodeImg from '../assets/node.png';
import mongoImg from '../assets/mongo.png';
import mysqlImg from '../assets/mysql.png';
import postgresImg from '../assets/postgres.png';
import pythonImg from '../assets/python.png';
import djImg from '../assets/dj.png';
import nextImg from '../assets/next.png'
import Reveal from '../../utils/Reveal';

function Skills() {
  return (
    <div id="skills" className="mt-10 py-10 min-h-screen">

      <Reveal>
        <div className="h-[100px] w-fit m-auto sm:flex sm:items-end  sm:mt-52">
          <div className=" rounded-lg shadow-[#46415c93] bg-gradient-to-r from-[#9389bd] via-[#5e4d9b] to-[#2f2d3b] mb-10">
            <h1
              
              className="text-4xl p-4 font-light text-center"
            >
              Skills.
            </h1>
          </div>
        </div>
        <div
          className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-8 lg:px-16 "
          
        >
          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={htmlImg} alt="HTML" />
              <h2 className="text-lg font-light text-center">HTML</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={cssImg} alt="CSS" />
              <h2 className="text-lg text-center font-light">CSS</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={jsImg} alt="JavaScript" />
              <h2 className="text-lg font-light text-center">JavaScript</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={reactImg} alt="React" />
              <h2 className="text-lg font-light text-center">React</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={nodeImg} alt="Node.js" />
              <h2 className="text-lg font-light text-center">Node.js</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={mongoImg} alt="MongoDB" />
              <h2 className="text-lg font-light text-center">MongoDB</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={mysqlImg} alt="MySQL" />
              <h2 className="text-lg font-light text-center">MySQL</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={postgresImg} alt="PostgreSQL" />
              <h2 className="text-lg font-light text-center">PostgreSQL</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={pythonImg} alt="Python" />
              <h2 className="text-lg font-light text-center">Python</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={djImg} alt="Django" />
              <h2 className="text-lg font-light text-center">Django</h2>
            </Reveal>
          </div>
          <div className="flex flex-col items-center justify-center py-3 border-2 border-[#5b5c9b] rounded-lg ">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={nextImg} alt="CSS" />
              <h2 className="text-lg text-center font-light">Next.js</h2>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  
  );
}

export default Skills;
