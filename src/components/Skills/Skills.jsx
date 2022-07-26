import React from 'react';
import { StyledSkills } from './StyledSkills';
import { skills } from './ListOfSkills';

const Skills = () => {
  return (
    <StyledSkills>
      <ul className="skills-container">
        {skills.map((skill, key) => {
          return (
            <li className="skill-information" key={key}>
              <i className={skill.icon}></i>
              <p className="skill-name">{skill.name} </p>
            </li>
          );
        })}
      </ul>
    </StyledSkills>
  );
};

export default Skills;
