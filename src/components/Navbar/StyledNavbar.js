import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  margin: 0;
  padding: 5px 0;
  width: 100%;
  height: fit-content;
  top: 0;
  left: 0;
  box-shadow: inset 0 0 1em 0.5em rgba(128,128,128,0.4) , 0 0.5em 1em 0.5em rgba(128,128,128,0.4); 
  background-color: rgb(38, 38, 38, 0.4);

  ul{
    display: flex;
    margin: 10px 0px 10px auto;
    width: 45%;
    justify-content: space-evenly; /*Oddziela elementy równo od siebie.*/
    list-style: none; /*Usuwanie kropek z listy*/
  }
  ul li a{
    padding:5px;
    margin-left: 3px;
    color: #b3ccff;
    opacity: 1; /*rozjaśnienie tekstu*/
    font-size: 1.2rem;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    text-decoration: none; /*Usunięcie podkreślenia*/
  }
  ul li a:hover{
    color: lightgreen;
    background-color: grey;
    opacity: 0.5;
    border-radius: 25px;
    transition: all 0.15s; /*Przejście między stylami w ciągu 0.15sekundy*/
  }
`;