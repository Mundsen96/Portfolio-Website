import styled from 'styled-components';

export const StyledContact = styled.form`
  min-height: calc(100vh - 210px); 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.3rem;
  .wrapper{
    width: 30%;
  }
  h1{
    background-color:rgb(38, 38, 38, 0.4);
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    color: #b3ccff;
  }
  form{
    width: 100%;
  }
  label{
    background-color: #b3ccff;
    padding: 3px 10px;
    border-radius: 20px;
  }
  input[type=text], textarea, input[type=email]{
    font-size: 1.3rem;
    width: 100%;
    padding: 12px 20px;
    border-radius: 10px;
    margin: 1rem 0;
    border: 3px solid #b3ccff;
  }
  textarea{
    resize: none;
  }
  button{
    width: fit-content;
    padding: 12px 20px;
    border: 3px solid #b3ccff;
    border-radius: 10px;
    font-size: 1.3rem;
  }
  button:hover{
    background-color: #b3ccff;
  }
  .after-submit{
    padding: 12px 20px;
    border: 3px solid #b3ccff;
    border-radius: 10px;
    background-color: white;
  }
  
`
