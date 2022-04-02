import React from "react";
import { StyledProjects } from "./StyledProjects";
import {projects} from './ListOfProjects';

const Projects = () => {
  
  return(
    <StyledProjects>
      <div className="projects-container">
        {projects.map((project)=>{
          return (
          <div className="image-box" key={project.id}>
            <a href={project.href} target="_blank">
              <img src={project.imageURL} alt={project.name} className='image'/>
              <div className="comment">{project.comment}</div>
            </a>
          </div>
          )
        })}
      </div>
    </StyledProjects>
  );
};

export default Projects;