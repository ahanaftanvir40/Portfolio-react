import Reveal from "../../utils/Reveal"

function Education({textEnter , textLeave}) {
    return (
        <div id="education">
            <div className="h-[100px] w-fit m-auto cursor-none sm:flex sm:items-end mt-8 sm:mt-12" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <div className="border border-purple-950 rounded-lg shadow-md shadow-purple-800">
                    <h1 className="text-4xl p-4 font-medium text-center">Education.</h1>
                </div>
            </div>

            <div className="mt-8 sm:mt-10 cursor-none" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2018</time>
                            <Reveal>
                            <div className="text-lg font-black">Government Science High School</div>
                            <div>
                                <h1 className="font-light">Department: Science</h1>
                            </div>
                            <div>
                                <h1 className="font-light">SSC Result: GPA 4.89</h1>
                            </div>
                            </Reveal>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2020</time>
                            <Reveal>
                            <div className="text-lg font-black">Govt. Mohammadpur Model School & College</div>
                            <div>
                                <h1 className="font-light">Department: Science</h1>
                            </div>
                            <div>
                                <h1 className="font-light">HSC Result: GPA 5.00</h1>
                            </div>
                            </Reveal>
                        </div>
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2021</time>
                            <Reveal>
                            <div className="text-lg font-black"> <a href="https://www.bracu.ac.bd/" target="_blank">BRAC University</a> </div>
                            <div>
                                <h1 className="font-light">Department: Computer Science</h1>
                            </div>
                            <div>
                                <h1 className="font-light">CGPA: Ongoing </h1>
                            </div>
                            </Reveal>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Education