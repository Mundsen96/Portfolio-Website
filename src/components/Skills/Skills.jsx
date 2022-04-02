import React from "react";
import { StyledSkills } from "./StyledSkills";

const Skills = () => {
  return(
    <StyledSkills>
      <h1 className="section-heading">My skills</h1>
      <div className="skills-container">
        <div className="skill-information">
          <p> <i className="fab fa-html5 fa-3x"></i></p>
          <p className="skill-name">HTML5</p>
          <p><progress value="60" max="100"></progress></p>
        </div>
        <div className="skill-information">
          <p> <i className="fab fa-css3 fa-3x"></i></p>
          <p className="skill-name">CSS3</p>
          <p><progress value="60" max="100"></progress></p>
        </div>
        <div className="skill-information">
          <p> <i className="fab fa-js fa-3x"></i></p>
          <p className="skill-name">JAVASCRIPT</p>
          <p><progress value="60" max="100"></progress></p>
        </div>
        <div className="skill-information">
          <p> <i className="fab fa-react fa-3x"></i></p>
          <p className="skill-name">React</p>
          <p><progress value="25" max="100"></progress></p>
        </div>
      </div>
    </StyledSkills>
  );
}

export default Skills;