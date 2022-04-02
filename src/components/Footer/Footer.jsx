import React from "react";
import { StyledFooter } from "./StyledFooter";

const Footer = () => {
  return(
    <StyledFooter>
      <h3 className="section-heading">Let's Work Together!</h3>
      <p>Find me on:</p>
      <p>
        <a href="https://github.com/Mundsen96"><i className="fab fa-github"> Github</i></a>
        <a href="#"><i className="fab fa-linkedinin-in"> Linkedin</i></a>
        <a href="#"><i className="fas fa-envelope-square"> E-mail</i></a>
      </p>
    </StyledFooter>
  );
}

export default Footer;