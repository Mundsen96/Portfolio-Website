import styled from 'styled-components';
import { device } from '../devices';

export const StyledMain = styled.main`
  
  height: 150vw;
  .message{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    font-size: 3vw;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    text-align: center;
    padding: 3vw;
  }
  .message p{
    width: 80%;
    color: white;
    background-color: var(--color);
    border-radius: 10px;
    padding: 1vw;
  }
  .message h2{
    color: inherit;
    font-size: 1.5em;
  }
  .smallScreen{
    max-width: 40%;
    border-radius: 50%;
  }

  p:hover{
    background-color: rgb(38, 38, 38, 0.4);
  }

  @media ${device.tablet} {
    width:70%;
    margin-left: auto;
    .message{
      font-size: 1.5vw;
    }
    .smallScreen{
      display: none;
    }
  }
  @media ${device.laptopL} {
    width:70%;
    margin-left: auto;
    .message{
      font-size: 1.2vw;
    }
    .smallScreen{
      display: none;
    }
  }
`