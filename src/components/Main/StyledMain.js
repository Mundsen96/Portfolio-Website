import styled from 'styled-components';
import sebek from '../Projects/Images/Seba.png'
import { device } from '../devices';

export const StyledMain = styled.main`
  

  .message{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    font-size: 0.8rem;
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
    .smallScreen{
      display: none;
    }
  }
`