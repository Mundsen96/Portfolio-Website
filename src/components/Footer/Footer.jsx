import React from "react";
import { StyledFooter } from "./StyledFooter";

const Footer = () => {
  return(
    <StyledFooter>
      {/* <h3 className="section-heading">Let's Work Together!</h3>
      <p>Find me on:</p> */}
      {/* <p> */}
      <a href="https://github.com/Mundsen96" target='_blank'><i className="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/sebastian-młotkowski-931090159" target='_blank'><i className="fab fa-linkedin-in"></i></a>
      <a href="mailto:sebamlot142@gmail.com" target='_blank'><i className="fas fa-envelope-square"></i></a>
      {/* </p> */}
    </StyledFooter>
  );
}

export default Footer;