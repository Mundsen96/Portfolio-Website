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
  .message img{
    max-width: 40%;
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