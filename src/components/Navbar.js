import logo from '../assets/logo.svg';
import resume from "../assets/sakshi shinde resume.pdf"
import mylogo from "../assets/mylogo.svg"                   

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={mylogo} className="App-logo w-10 rounded-full" alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-4"><a href="#honors" className="hover:underline">Experience</a></li>
            <li className="p-4"><a href="#certs" className="hover:underline">Projects</a></li>
            </ul>
            <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Resume</a>
        </div>
    </div>
    )
}
