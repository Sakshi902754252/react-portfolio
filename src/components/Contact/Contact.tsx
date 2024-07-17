import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Contact Me</h2>
        <p>If you saw my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:sakshishinde9022@gmail.com"><h3>E-Mail</h3></a>
        </div>
        <div>
          <a  href="https://www.linkedin.com/in/sakshishinde9022/"><h1>Linkedin Profile</h1></a>
        </div>  
      </div>
      <Form></Form>
    </Container>  
  )
}