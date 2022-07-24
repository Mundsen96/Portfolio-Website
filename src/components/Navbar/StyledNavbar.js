import styled from 'styled-components';
import { device } from '../devices';

export const StyledNavbar = styled.nav`
  padding: 5px 0 0 0;
  height: fit-content;
  width:100%;
  background-color: var(--color);
  border-radius: 15px 15px 0 0;

  ul{
    display: flex;
    list-style: none;
    padding: 0;
  }
  ul li a{
    display: inline-block;
    padding:5px;
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    width:100%;
  }
 
  ul li a:active,
  ul li a.active {
    background: var(--second-color);
    color: var(--color);
    width:100%;
  }
  ul li i{
    padding: 5px;
    margin-left: 1rem;
    color: white;
  }
  .bigScreen{
    display:none;
  }

  @media screen and (min-width: 768px){
    width: 20%;
    border-radius: 15px 0 15px 0;
    ul{
      flex-direction: column;
      margin:0;
    }
    ul li{
      margin: 0.5rem 0;
      text-align: center;
    }
    ul li a:hover{
      color: white;
      opacity: 0.5;
      transition: all 0.15s; 
    }
    .bigScreen{
      display:block;
      margin:auto;
      max-width: 80%;
      border-radius: 50%;
      
    }
  }
`;