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
import Reveal from '../../utils/Reveal';

function Skills({ textEnter, textLeave }) {
  return (
    <div id="skills" className="mt-10 py-10">
      <div className="h-[100px] w-fit m-auto sm:flex sm:items-end mb-10">
        <div className="border border-purple-950 rounded-lg shadow-md shadow-purple-800">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="cursor-none text-4xl p-4 font-medium text-center"
          >
            Skills.
          </h1>
        </div>
      </div>
      <Reveal>
        <div
          className="grid grid-cols-2 cursor-none md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-8 lg:px-16"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <div className="flex flex-col items-center justify-center py-3 border-2 border-orange-700 rounded-lg shadow-md shadow-orange-600 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={htmlImg} alt="HTML" />
              <h2 className="text-lg font-light text-center">HTML</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-blue-500 rounded-lg shadow-md shadow-blue-400 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={cssImg} alt="CSS" />
              <h2 className="text-lg text-center font-light">CSS</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-yellow-500 rounded-lg shadow-md shadow-yellow-400 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={jsImg} alt="JavaScript" />
              <h2 className="text-lg font-light text-center">JavaScript</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-cyan-600 rounded-lg shadow-md shadow-cyan-700 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={reactImg} alt="React" />
              <h2 className="text-lg font-light text-center">React</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-lime-400 rounded-lg shadow-md shadow-lime-500 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={nodeImg} alt="Node.js" />
              <h2 className="text-lg font-light text-center">Node.js</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-green-700 rounded-lg shadow-md shadow-green-600 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={mongoImg} alt="MongoDB" />
              <h2 className="text-lg font-light text-center">MongoDB</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-cyan-700 rounded-lg shadow-md shadow-cyan-500 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={mysqlImg} alt="MySQL" />
              <h2 className="text-lg font-light text-center">MySQL</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-slate-600 rounded-lg shadow-md shadow-slate-400 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={postgresImg} alt="PostgreSQL" />
              <h2 className="text-lg font-light text-center">PostgreSQL</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-blue-600 rounded-lg shadow-md shadow-blue-400 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={pythonImg} alt="Python" />
              <h2 className="text-lg font-light text-center">Python</h2>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center py-3 border-2 border-green-900 rounded-lg shadow-md shadow-green-600 transition duration-300">
            <Reveal>
              <img className="h-16 w-16 mb-4" src={djImg} alt="Django" />
              <h2 className="text-lg font-light text-center">Django</h2>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Skills;
