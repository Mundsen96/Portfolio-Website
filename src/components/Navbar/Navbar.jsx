import React from "react";
import { StyledNavbar } from "./StyledNavbar";
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <StyledNavbar>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>      
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;