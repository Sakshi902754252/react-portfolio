import ExpCard from "./ExpCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Experience</h1>
            <p className="font-light text-gray-400">Here is my experience</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <ExpCard name="BnB developers" tenure="full stack developer - Nov 2023 to jan 2023" desc="Contributed to real-time client projects, leveraged expertise in React.js, Node.js, and MongoDB. Played a pivotal role in the
development and implementation of solutions, showcasing a hands-on understanding of full-stack technologies.
" />
                <ExpCard name="NoQs Digitals" tenure="Data analyst - dec 2023"  desc="Internship involved proficient analysis of data using tools such as PowerBI and Tableau, contributing valuable insights to inform
strategic decision-making. Demonstrated strong analytical skills and a keen understanding of data visualization techniques.
" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
