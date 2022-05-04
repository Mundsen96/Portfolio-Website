import styled from 'styled-components';
import sebek from './components/Projects/Images/sebekk.svg'


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
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-align: center;
  }
  .message p{
    background-color: rgb(38, 38, 38, 0.4);
    border-radius: 50px;
    color:#b3ccff;
  }
  .main-image{
    background-image: url(${sebek});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width:40%;
    padding: 4rem;
  }
  .main-image:hover{
    transform: scale(1.07);
    transition: all 1s; 
  }
`