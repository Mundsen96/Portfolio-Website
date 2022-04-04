import styled from 'styled-components';

export const StyledAbout = styled.section`

  min-height: calc(100vh - 210px); 
  color:#b3ccff;
  display: flex;
  width: 100%;
  justify-content: space-around; /*oś x, flex-start end(lewy, prawy)*/
  align-items: center; /*oś y, flex-start end(góra dół)*/
  font-size: 2rem;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  text-align: center;

  .message img{
    max-width: 50%; /* Dopasowanie obrazka do kontenera div niezaleznie od rozdzielczości zrodłowej obrazka*/
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
    background-color: rgb(128, 128, 128, 0.5);
    border-radius: 50px;
    box-shadow: 0 0 1em 0.5em rgba(128,128,128,0.5); 
    padding: 1rem;
  }
`