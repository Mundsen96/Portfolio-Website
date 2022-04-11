import styled from 'styled-components';

export const StyledSkills = styled.section`
  color: #b3ccff;
  min-height: calc(100vh - 210px); 
  font-size: 1.5rem;
  display: flex;

  .skills-container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
  .skill-information{
    padding:1.5rem;
    text-align: center;
  }
  .skill-name{
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
  }
  .skill-information progress{
    background-color: #1a8cff;
    border: solid 1px white;
    border-radius: 25px;
  }
  .skill-information progress::-webkit-progress-value{
    background-color: #5c5cd6;
    border-radius: 25px;
  }
  .skill-information progress::-webkit-progress-bar{
    background-color: #adadeb;
    border-radius: 25px;
  ;
  }
`