import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiPython,
  SiTypescript, SiGit, SiDocker,
  SiFirebase, SiMongodb, SiExpress, SiCplusplus,
  SiMysql, SiPhp
} from 'react-icons/si';

const skillIcons = [
  { Icon: SiReact, color: "#61DAFB", name: "React", level: "Advanced" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js", level: "Intermediate" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript", level: "Advanced" },
  { Icon: SiHtml5, color: "#E34F26", name: "HTML5", level: "Advanced" },
  { Icon: SiCss3, color: "#1572B6", name: "CSS3", level: "Advanced" },
  { Icon: SiPython, color: "#3776AB", name: "Python", level: "Intermediate" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript", level: "Intermediate" },
  { Icon: SiGit, color: "#F05032", name: "Git", level: "Advanced" },
  { Icon: SiDocker, color: "#2496ED", name: "Docker", level: "Beginner" },
  { Icon: SiFirebase, color: "#FFCA28", name: "Firebase", level: "Intermediate" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB", level: "Intermediate" },
  { Icon: SiExpress, color: "#000000", name: "Express", level: "Intermediate" },
  { Icon: SiCplusplus, color: "#00599C", name: "C++", level: "Intermediate" },
  { Icon: SiMysql, color: "#4479A1", name: "SQL", level: "Intermediate" },
  { Icon: SiPhp, color: "#777BB4", name: "PHP", level: "Intermediate" },
];


export function About(){
  return (
    <Container id="experience">
      <div className="skills-section">
        <ScrollAnimation animateIn="fadeInLeft">
          <h3>Technical Skills</h3>
        </ScrollAnimation>
        <div className="skills-grid">
          {skillIcons.map(({ Icon, color, name, level }, index) => (
            <ScrollAnimation 
              key={name}
              animateIn="bounceIn"
              delay={index * 100}
              className="skill-item"
            >
              <Icon style={{ color }} />
              <span className="skill-name">{name}</span>
              <span className="skill-level">{level}</span>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      

      <div className="experience-content">
      <ScrollAnimation animateIn="fadeInLeft">
        <h2>My Experience</h2>
      </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="experience-item">
            <div className="icon"><FaBriefcase /></div>
            <div className="details">
              <h3>Web Developer Intern</h3>
              <p>Mandet India</p>
              <p>Feb 2024 - May 2024</p>
              <ul>
                <li>Developed and maintained web applications using React, Firebase, Php</li>
                <li>Collaborated into the government-based project, Tax Sarthi</li>
                <li>Designed and developed algorithms for financial benefits</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="experience-item">
            <div className="icon"><FaBriefcase /></div>
            <div className="details">
              <h3>Full Stack Developer Intern</h3>
              <p>BNB Developers</p>
              <p>Nov 2024 - Dec 2024</p>
              <ul>
                <li>Assisted in building responsive user interfaces using HTML, CSS, and JavaScript</li>
                <li>Participated in code reviews and implemented feedback from senior developers</li>
                <li>Gained hands-on experience with Vue.js and modern frontend workflows</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="experience-item">
            <div className="icon"><FaGraduationCap /></div>
            <div className="details">
              <h3>B.E in Information Technology</h3>
              <p>Savitribai Phule Pune University</p>
              <p>2021 - 2025</p>
              <ul>
                <li>Relevant coursework: Data Structures, Algorithms, Web Development, Database Management</li>
                <li>Participated in coding competitions and hackathons</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}