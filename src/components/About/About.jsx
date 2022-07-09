import React from "react";
import { StyledAbout } from "./StyledAbout";


const About = () => {
  return(
    <StyledAbout>
        <div className="message">
          <img src="https://cdn.pixabay.com/photo/2020/07/26/13/46/laptop-5439577_1280.png" alt=""/>
        </div>
        <div className="message my-information">
          <p>I'm self-taught front-end developer, who is looking to gain some experience and improve my Portfolio</p>
          <p>I'm open to work full-time as an Junior React Developer, as it's my main focus right now.</p>
          <p>In the future I'm planning to become Full-Stack developer, as I will start learning NodeJs in the nearest future.</p>
        </div>
    </StyledAbout>
  );
}

export default About;