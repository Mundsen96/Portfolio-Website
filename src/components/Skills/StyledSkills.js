import styled from 'styled-components';

export const StyledSkills = styled.section`
  color:var(--second-color);
  font-size: 5vw;
  margin-left: auto;
  height: 150vw;

  .skills-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 3vw;
  }
  .skill-information{
    margin: 10px 0;
    width: calc(50% - 10px);
    padding: 1rem;
    text-align: center;
    background-color: var(--color);
    border-radius: 10px;
  }
  .skill-name{
    margin:0;
  }
  ul, li{
    list-style-type: none;
  }
  li:hover{
    background-color: rgb(38, 38, 38, 0.4);
  }

  @media screen and (min-width: 768px){
    width: 60%;
    font-size: 2vw;
  }
`