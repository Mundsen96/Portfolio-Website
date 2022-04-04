import styled from 'styled-components';

export const StyledMain = styled.main`
  min-height: calc(100vh - 210px); 
  display: flex;
  justify-content: center;

  .section-heading{
    font-size: 2rem;
    text-align: center;
  }
  .message{
    display: flex;
    width: 100%;
    justify-content: center; /*oś x, flex-start end(lewy, prawy)*/
    align-items: center; /*oś y, flex-start end(góra dół)*/
    font-size: 2rem;
    text-align: center;
  }
  .message p{
    background-color: rgb(128, 128, 128, 0.5);
    border-radius: 50px;
    box-shadow: 0 0 1em 0.5em rgba(128,128,128,0.5); 
    color:#b3ccff;
  }
  .message img{
    max-width: 40%; /* Dopasowanie obrazka do kontenera div niezaleznie od rozdzielczości zrodłowej obrazka*/
    border-radius: 1000px;
    padding: 4rem;
    border: 5px grey double;
    background-color: rgb(173, 173, 235, 0.5);
  }
  .message img:hover{
    transform: scale(1.07);
    transition: all 1s; 
  }
`