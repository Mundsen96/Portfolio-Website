import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  margin: 0;
  padding: 5px 0;
  width: 100%;
  height: fit-content;
  background-color: rgb(38, 38, 38, 0.4);

  ul{
    display: flex;
    margin: 10px 0px 10px auto;
    width: 45%;
    justify-content: space-evenly;
    list-style: none;
  }
  ul li a{
    padding:5px;
    margin-left: 3px;
    color: #b3ccff;
    border-radius: 25px;
    opacity: 1; 
    font-size: 1.2rem;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    text-decoration: none;
  }
  ul li a:hover{
    color: lightgreen;
    background-color: grey;
    opacity: 0.5;
    border-radius: 25px;
    transition: all 0.15s; 
  }
`;