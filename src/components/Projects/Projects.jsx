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
            <div className="comment">{project.comment}</div>
            <a href={project.href} target="_blank" rel="noreferrer">
              <img src={project.imageURL} alt={project.name} className='image'/>
            </a>
          </div>
          )
        })}
      </div>
    </StyledProjects>
  );
};

export default Projects;