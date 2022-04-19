import styled from 'styled-components';

export const StyledAbout = styled.section`

  min-height: calc(100vh - 210px); 
  color:#b3ccff;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center; 
  font-size: 2rem;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  text-align: center;

  .message img{
    max-width: 50%;
  }
  .message img:hover{
    transform: scale(1.07);
    transition: all 1s; 
  }
  div.my-information{
    display: block;
    font-size: 1.5rem;
    text-align: left;
    max-width: 50%;
  }
  p{
    background-color: rgb(38, 38, 38, 0.4);
    border-radius: 50px;

    padding: 1rem;
  }
`