import styled from 'styled-components';

export const StyledFooter = styled.footer`
  color: white;
  text-align: center;
  background-color: rgb(38, 38, 38, 0.4);
  padding: 1rem 0;
  border-radius: 0 0 15px 15px;
  font-size: 5vw;
  a {
    color: var(--color);
    margin: 0 1.5rem;
    text-decoration: none;
  }
  i {
    font-size: inherit;
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
    width: fit-content;
    border-radius: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3vw;
    i {
      margin: 1rem 0;
    }
  }
`;
