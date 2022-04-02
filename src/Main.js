import React from 'react';
import {StyledMain} from  './StyledMain.js';

const Main = () => {
  return (
    <StyledMain>
      <div className="message">
        <p>Hello! <br/> Welcome to my Portfolio website! <br/> I'm glad you are here <br/> Feel free to contact me! </p>
      </div>
      <div className="message">
        <img src="https://cdn.pixabay.com/photo/2019/10/24/15/46/stiker-4574586_1280.png" alt="image"/>
      </div>
    </StyledMain>
  );
}

export default Main;
