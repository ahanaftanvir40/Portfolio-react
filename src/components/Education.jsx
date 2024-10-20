import Reveal from "../../utils/Reveal"

function Education() {
    return (
        <div id="education" className="min-h-screen">


            <div className="mt-8 sm:mt-52 " >
                <div className="h-[100px] w-fit m-auto  sm:flex sm:items-end mt-8 sm:mt-12 mb-10" >
                    <div className="rounded-lg shadow-[#46415c93] bg-gradient-to-r from-[#9389bd] via-[#5e4d9b] to-[#2f2d3b]">
                        <h1 className="text-4xl p-4 font-light text-center">Education.</h1>
                    </div>
                </div>
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
                                <div className="text-lg font-black text-white/80">Government Science High School</div>
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
                                <div className="text-lg font-black text-white/80">Govt. Mohammadpur Model School & College</div>
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
                                <div className="text-lg font-black text-white/80"> <a href="https://www.bracu.ac.bd/" target="_blank">BRAC University</a> </div>
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