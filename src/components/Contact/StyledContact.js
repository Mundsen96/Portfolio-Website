import styled from 'styled-components';

export const StyledContact = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  font-size: 3vw;
  padding: 1rem 0;
  height: 150vw;
  .wrapper {
    width: 60%;
    background-color: rgb(38, 38, 38, 0.2);
    border-radius: 15px;
    padding: 2vw;
  }
  label {
    background-color: var(--color);
    padding: 3px 10px;
    border-radius: 20px;
    color: white;
  }
  input[type='text'],
  textarea,
  input[type='email'] {
    font-size: 0.8em;
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 1rem 0;
    border: 3px solid var(--color);
    background: inherit;
    color: inherit;
  }
  textarea {
    resize: none;
    height: 10em;
  }
  button {
    width: fit-content;
    padding: 12px 20px;
    border: 3px solid var(--color);
    border-radius: 10px;
    font-size: 1.5em;
    color: white;
    background: var(--color);
  }
  button:hover {
    background-color: var(--second-color);
    cursor: pointer;
  }
  .after-submit {
    padding: 12px 20px;
    border: 3px solid var(--color);
    border-radius: 10px;
    background-color: inherit;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    max-height: 100%;
    margin-left: auto;
    overflow-y: scroll;
    font-size: 1.5vw;
    .wrapper {
      padding: 1vw;
    }
  }
`;
