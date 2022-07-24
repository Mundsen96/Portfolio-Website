import styled from 'styled-components';
import { device } from '../devices';

export const StyledFooter = styled.footer`
  color: white;
  text-align: center;
  background-color:rgb(38, 38, 38, 0.4);
  padding: 1rem 0;
  border-radius: 0 0 15px 15px;
  a{
    color: var(--color);
    margin: 0 1.5rem; 
    text-decoration: none;
    font-size: 1rem;
  }
  i{
    font-size: 2rem;
  }
  p{
    font-size:0.7rem;
    margin:0;
  }
  h3{
    margin:0;
  }
  @media screen and (min-width: 768px){
    margin-left: auto;
    width: fit-content;
    border-radius: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i{
      margin: 1rem 0;
    }
  }
`