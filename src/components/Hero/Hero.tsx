import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/female-programmer-svgrepo-com.svg"
import { NavHashLink } from "react-router-hash-link"
import Curriculo from '../../assets/sakshi-shinde.pdf'
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <h4>Hii 👋, I am</h4>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Sakshi Shinde</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <h3>Full Stack Devloper</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
          <p className="small-resume">Passionate coder proficient in Python, C, C++, JS and React with a strong interest in the tech world.<br></br>
          Enthusiastic about engineering and coding, aiming to leverage skills and experience to contribute to impactful projects.</p>
        </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.4*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contato" className="button">Contact</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.4*1000}>
          <p><br/><br/></p>
          <a href={Curriculo} download className="button">
            Resume Overveiw
          </a>
          </ScrollAnimation>
        </div>  
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={Illustration} alt="Ilustração"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}