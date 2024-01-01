import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"
import nodejs from "../assets/skills/nodejs.svg"
import javascript from "../assets/skills/javascript.svg"
import mongodb from "../assets/skills/mongodb.svg"



import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"

import kubernetes from "../assets/skills/kubernetes.svg"

import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"

import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"
import html from "../assets/skills/html.svg"
import mysqllogo from "../assets/skills/mysqllogo.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                
                <SkillCard name="nodejs" img={nodejs} />
                <SkillCard name="javascript"  img={javascript} />
                <SkillCard name="react"  img={reactIcon} />
                <SkillCard name="tailwind" img={tailwind} />
                <SkillCard name="html"  img={html} />
                <SkillCard name="mongodb"  img={mongodb} />
                <SkillCard name="react" img={react} />
                <SkillCard name="git"  img={git} />
                <SkillCard name="express"  img={express} />
                <SkillCard name="mysql"  img={mysqllogo} />
    
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}