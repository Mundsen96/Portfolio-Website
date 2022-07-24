import styled from 'styled-components';
import { device } from '../devices';

export const StyledProjects = styled.section`
  

  .projects-container{
    display: flex;
    flex-wrap: wrap;
    // overflow-x: auto;
  }
  .projects-container .image-box{
    margin: 5px;
  }
  .image-box{
    position: relative;
    border-bottom: 1vw solid var(--color);
  }
  .image-box .comment{
    // transition: .5s ease;
    // opacity: 0.5;
    // position: absolute;
    // top: 10%;
    // left: 10%;
    // transform: translate(-50%, -50%);
    // -ms-transform: translate(-50%, -50%);
    text-align: center;
    background-color: var(--color);
    padding: 0.5rem;
    color: var(--second-color);
    border-radius: 15px;
    margin: 5px 0;
    box-shadow: 0 0 0.3em black;
  }
  // .image {
  //   opacity: 1;
  //   transition: .5s ease;
  //   backface-visibility: hidden;
  // }
  .image-box img{
    border-radius: 10px;
    border: double 5px grey;
    max-width: 100%;
  }
  // .image-box:hover .image {
  //   opacity: 0.3;
  // }
  // .image-box:hover .comment {
  //   opacity: 1;
  // }

  @media screen and (min-width: 768px){
    margin-left: auto;
    width:60%;
    height: 100%;
    overflow-y: scroll;
  }
`