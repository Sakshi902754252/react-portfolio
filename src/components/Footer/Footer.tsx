import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span style={{color:'green'}}>Sakshi</span>
        <span>Shinde</span>
      </a>
      <div>
        <p>
          This website is made in <img src={reactIcon} alt="React" /> React framework.
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/sakshishinde9022/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Sakshi902754252"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
