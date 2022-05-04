import React from "react";
import { StyledAbout } from "./StyledAbout";


const About = () => {
  return(
    <StyledAbout>
        <div className="message">
          <img src="https://cdn.pixabay.com/photo/2020/07/26/13/46/laptop-5439577_1280.png" alt=""/>
        </div>
        <div className="message my-information">
          <p>I'm young man, who decided to change his career and start to learn about front-end development</p>
          <p>I'm Bachelor of Engineering in Faculty of Marined Engineering and Machin Design. I travelled around the world <br/> on the vessels and decided that stationary job is someting for me.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, atque.</p>
        </div>
    </StyledAbout>
  );
}

export default About;