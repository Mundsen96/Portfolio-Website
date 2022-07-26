import React, { useState } from 'react';
import { StyledNavbar } from './StyledNavbar';
import { Link } from 'react-router-dom';
import sebek from '../Projects/Images/Seba.png';

const Navbar = () => {
  const [icon, setIcon] = useState('fa-solid fa-sun');

  const changeTheme = () => {
    document.body.classList.toggle('dark');
    setIcon(
      document.body.classList.contains('dark')
        ? 'fa-solid fa-moon'
        : 'fa-solid fa-sun'
    );
  };

  const activeNav = (event) => {
    const targetEl = event.target;
    var current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    targetEl.className += ' active';
  };

  return (
    <StyledNavbar>
      <ul>
        <li onClick={activeNav}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={activeNav}>
          <Link to="/skills">Skills</Link>
        </li>
        <li onClick={activeNav}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={activeNav}>
          <Link to="/Contact">Contact</Link>
        </li>
        <li onClick={changeTheme}>
          <i className={icon}></i>
        </li>
        <li>
          <img className="bigScreen" src={sebek} alt="" />
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
