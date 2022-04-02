import styled from 'styled-components';

export const StyledProjects = styled.section`
  min-height: calc(100vh - 220px); 
  .projects-container{
    display: flex;
    overflow-x: auto;
    padding-top: 4rem;
  }
  .projects-container .image-box{
    margin: 5px;
  }
  .image-box{
    position: relative;
  }
  .image-box .comment{
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    background-color: #404040;
    padding: 2rem;
    color: #b3ccff;
    border-radius: 100px;
  }
  .image {
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .image-box img{
    border-radius: 10px;
    border: double 5px grey;
    max-width: 50rem;
  }
  .image-box:hover .image {
    opacity: 0.3;
  }
  .image-box:hover .comment {
    opacity: 1;
  }
`