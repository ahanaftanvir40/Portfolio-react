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

function Skills({textEnter , textLeave}) {
  const skills = [
    { src: htmlImg, alt: 'HTML', label: 'HTML', borderColor: 'orange-700', shadowColor: 'orange-600' },
    { src: cssImg, alt: 'CSS', label: 'CSS', borderColor: 'blue-500', shadowColor: 'blue-400' },
    { src: jsImg, alt: 'JavaScript', label: 'JavaScript', borderColor: 'yellow-500', shadowColor: 'yellow-400' },
    { src: reactImg, alt: 'React', label: 'React', borderColor: 'cyan-600', shadowColor: 'cyan-700' },
    { src: nodeImg, alt: 'Node.js', label: 'Node.js', borderColor: 'lime-400', shadowColor: 'lime-500' },
    { src: mongoImg, alt: 'MongoDB', label: 'MongoDB', borderColor: 'green-700', shadowColor: 'green-600' },
    { src: mysqlImg, alt: 'MySQL', label: 'MySQL', borderColor: 'cyan-700', shadowColor: 'cyan-500' },
    { src: postgresImg, alt: 'PostgreSQL', label: 'PostgreSQL', borderColor: 'slate-600', shadowColor: 'slate-400' },
    { src: pythonImg, alt: 'Python', label: 'Python', borderColor: 'blue-600', shadowColor: 'blue-400' },
    { src: djImg, alt: 'Django', label: 'Django', borderColor: 'green-900', shadowColor: 'green-600' },
  ];

  return (
    <div id="skills" className=" mt-10 py-10">
            <div className="h-[100px] w-fit m-auto sm:flex sm:items-end mb-10">
                <div className="border border-purple-950 rounded-lg shadow-md shadow-purple-800">
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="cursor-none text-4xl p-4 font-medium text-center">Skills.</h1>
                </div>
                
            </div>
      <Reveal>
        <div className="grid grid-cols-2 cursor-none md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-8 lg:px-16" onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
          {skills.map((skill, index) => (
            <div
            
              key={index}
              className={`flex flex-col cursor-none items-center justify-center py-3 border-2 border-${skill.borderColor} rounded-lg shadow-md shadow-${skill.shadowColor}  transition duration-300`}
            >
              <Reveal>
              <img className="h-16 w-16 mb-4" src={skill.src} alt={skill.alt} />
              <h2 className="text-lg font-light">{skill.label}</h2>
              </Reveal>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default Skills;
