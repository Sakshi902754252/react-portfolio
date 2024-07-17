import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Project Quest</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Sakshi902754252/StyleSwipe" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
              <a href="https://style-swipe-ivory.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>StyleSwipe: Interactive Fashion Discovery Platform
              </h3>
              <p> <li>-Gamified Experience for fashion items.</li>
              <li>-Competitive leaderboard based on user interactions</li>
              <li>-very impressive UI design</li>   
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flask</li>
                <li>React.js</li>
                <li>TensorFlow</li> 
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Sakshi902754252/UniSpace" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href=" https://uni-space.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>UniSpace - Educational Platform</h3>
              <p><li>-Web-App Using MERN Stack</li>
                <li>- aims to assist students with their academic needs</li>
                <li>-Developed REST APIs for easy access to all resources and data.</li>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js and Node.js</li>
                <li>Docker</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Sakshi902754252/aws-s3uploader" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.npmjs.com/package/s3-upload-tool" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>S3-upload-tool</h3>
              <li>-Node package is designed to simplify and streamline the process of uploading files to AWS S3.</li>
              <li>-It provides a user-friendly API that handles file validation, progress tracking, and resumable uploads, making it an essential tool for any project requiring reliable file storage solutions.</li>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Sakshi902754252/ChatGpt-Clone" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://chatgpt-three-flame.vercel.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>ChatGpt Clone
              </h3>
              <li>-Devloped Responsive User Interface for ChatGpt
              </li>
              <li>-used React and Material UI.</li>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJs</li>
                <li>Material UI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}