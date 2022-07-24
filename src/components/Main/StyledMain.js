import styled from 'styled-components';
import sebek from '../Projects/Images/Seba.png'
import { device } from '../devices';

export const StyledMain = styled.main`


  .message{
    width: 100%;
    color:rgb(38, 38, 38, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center; 
    font-size: 0.8rem;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    text-align: center;
    padding: 3vw;
  }
  .message img{
    max-width: 50%;
    transform:
    perspective(75em)
    rotateX(18deg);
    box-shadow:
      rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
      rgba(19, 26, 32, 0.08) 0px 35px 75px -35px;
    border-radius: 50%;
    border: 1px solid;
    border-color:
      rgb(213, 220, 226)
      rgb(213, 220, 226)
      rgb(184, 194, 204);
  }
  .message p{
    width: 80%;
    color: white;
    background-color: var(--color);
    border-radius: 10px;
    padding: 1vw;
  }
  .message h2{
    color: rgb(38, 38, 38, 0.8);
  }

  p:hover{
    background-color: rgb(38, 38, 38, 0.4);
  }
`