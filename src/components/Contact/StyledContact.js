import styled from 'styled-components';
import { device } from '../devices';

export const StyledContact = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 1rem;
  color:rgb(38, 38, 38, 0.7);
  .wrapper{
    width: 60%;
  }
  label{
    background-color: #b3ccff;
    padding: 3px 10px;
    border-radius: 20px;
  }
  input[type=text], textarea, input[type=email]{
    font-size: 0.8rem;
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 1rem 0;
    border: 3px solid #b3ccff;
  }
  textarea{
    resize: none;
    height: 10rem;
  }
  button{
    width: fit-content;
    padding: 12px 20px;
    border: 3px solid #b3ccff;
    border-radius: 10px;
    font-size: 1.3rem;
    color:rgb(38, 38, 38, 0.7);
  }
  button:hover{
    background-color: #b3ccff;
    cursor: pointer;
  }
  .after-submit{
    padding: 12px 20px;
    border: 3px solid #b3ccff;
    border-radius: 10px;
    background-color: white;
  }
  
`
