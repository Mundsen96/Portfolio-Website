import styled from 'styled-components';

export const StyledContact = styled.div`
  min-height: calc(100vh - 210px); 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  h1{
    text-align: center;
    color: #b3ccff;
  }
  label{
    background-color: #b3ccff;
    padding: 3px;
    border-radius: 20px;
  }
  .form-container{
    width:40%;
  }
  form{
    width: fit-content;
  }
  input[type=text], textarea{
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
`
