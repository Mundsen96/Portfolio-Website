import styled from 'styled-components';
import { device } from '../devices';

export const StyledNavbar = styled.nav`
  padding: 5px 0;
  width: 100%;
  height: fit-content;
  background-color: var(--color);

  ul{
    display: flex;
    list-style: none;
  }
  ul li a{
    padding:5px;
    color: white;
    border-radius: 25px;
    opacity: 1; 
    font-size: 1.2rem;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    text-decoration: none;
  }
  ul li a:hover{
    color: var(--second-color);
    opacity: 0.5;
    border-radius: 25px;
    transition: all 0.15s; 
  }
`;