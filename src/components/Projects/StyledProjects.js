import styled from 'styled-components';
import { device } from '../devices';

export const StyledProjects = styled.section`

  .projects-container{
    display: flex;
    flex-wrap: wrap;
    height: 150vw;
    overflow-y: scroll;
    font-size: 3vw;
  }
  .projects-container .image-box{
    margin: 5px;
  }
  .image-box{
    position: relative;
    border-bottom: 1vw solid var(--color);
  }
  .image-box .comment{
    text-align: center;
    background-color: var(--color);
    padding: 0.5rem;
    color: var(--second-color);
    border-radius: 15px;
    margin: 5px 0;
    box-shadow: 0 0 0.3em black;
  }
  .image-box img{
    border-radius: 10px;
    border: double 5px grey;
    max-width: 100%;
  }

  @media screen and (min-width: 768px){
    margin-left: auto;
    width:60%;
    height: 100%;
    overflow-y:scroll;
    .projects-container{
      font-size: 2vw;
    }
  }
`