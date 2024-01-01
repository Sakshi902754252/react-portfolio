import ProjCard from "./ProjCard"

import hr from "../assets/curve-hr.svg"
import proj1 from "../assets/certs/proj 1.png"
import proj2 from "../assets/certs/proj 2.png"
import proj3 from "../assets/certs/proj 3.png"

// import 

export default function Proj(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <ProjCard name="Music Player - Spotify Clone" img={proj1} desc="Created a Spotify-inspired music player using HTML, CSS, and JavaScript, offering a seamless and responsive interface for playlist
management and dynamic playback controls" date="Aug 2023" />
                <ProjCard name="Apna Mart - Hacakathon Participation" img={proj3} desc="This is a interactive labels web app that customers can scan the QR with their smartphones to access detailed product
information, reviews, and usage tips. This enhances the in-store experience and empowers customers with more knowledge" date="Aug 2023" />
                <ProjCard name="Random Quote Generator" desc="Created using html css and javascripts which ramdomly generated the quote" img={proj2}  date="sep 2023" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
