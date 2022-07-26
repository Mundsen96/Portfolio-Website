import React from 'react';
import { StyledMain } from './StyledMain.js';
import sebek from '../Projects/Images/Seba.png';

const Main = () => {
  return (
    <StyledMain>
      <div className="message">
        <img className="smallScreen" src={sebek} alt="" />
        <h2>Hi, I'm Sebastian Młotkowski</h2>
        <p>
          Welcome to my Portfolio website! <br /> I'm glad you are here. <br />{' '}
          Feel free to contact me!{' '}
        </p>
        <p>I'm self-taught Front-end Developer.</p>
        <p>
          I'm open to work full-time as an Junior React Developer, as it's my
          main focus right now.
        </p>
        <p>
          In the future I'm planning to become Full-Stack developer, as I'm
          learning NodeJs in addition to React/Redux.
        </p>
      </div>
    </StyledMain>
  );
};

export default Main;
