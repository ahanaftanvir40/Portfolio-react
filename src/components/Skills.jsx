
import htmlImg from '../assets/html.png'
import reactImg from '../assets/reactimg.png'
import cssImg from '../assets/cssimg.png'
import jsImg from '../assets/js.png'
import nodeImg from '../assets/node.png'
import mongoImg from '../assets/mongo.png'
import mysqlImg from '../assets/mysql.png'
import postgresImg from '../assets/postgres.png'
import pythonImg from '../assets/python.png'
import djImg from '../assets/dj.png'
function Skills() {
    return (
        <div id='skills'>
            <div className="h-[100px] w-fit m-auto sm:flex sm:items-end mt-8 sm:mt-12">
                <div className="border border-purple-950 rounded-lg shadow-md shadow-purple-800">
                    <h1 className="text-4xl p-4 font-medium text-center">Skills.</h1>
                </div>

            </div>

            <div className="mt-5 sm:mt-8">
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box bg-transparent border-orange-700 shadow-md shadow-orange-600  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={htmlImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">HTML</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box bg-transparent border-blue-500 shadow-md shadow-blue-400  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={cssImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">CSS</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box bg-transparent border-yellow-500 shadow-md shadow-yellow-400  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={jsImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">JavaScript</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box bg-transparent border-cyan-600 shadow-md shadow-cyan-700  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={reactImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">React</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box bg-transparent border-lime-400 shadow-md shadow-lime-500  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={nodeImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">Node.js</h1>
                            </div>
                        </div>
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-end timeline-box bg-transparent border-green-700 shadow-md shadow-green-600  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={mongoImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">MongoDB</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box bg-transparent border-cyan-700 shadow-md shadow-cyan-500  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={mysqlImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">MySQL</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box bg-transparent border-slate-600 shadow-md shadow-slate-400  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={postgresImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">PostgreSQL</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box bg-transparent border-blue-600 shadow-md shadow-blue-400  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={pythonImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">Python</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box bg-transparent border-green-900 shadow-md shadow-green-600  flex flex-col justify-center items-center text-center">
                            <div>
                                <img className='h-12 w-12' src={djImg} alt="" />
                            </div>
                            <div>
                                <h1 className="font-light">Django</h1>
                            </div>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Skills