import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  padding: 5px 0 0 0;
  height: fit-content;
  width: 100%;
  background-color: var(--color);
  border-radius: 15px 15px 0 0;
  font-size: 4vw;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
  }
  ul li a {
    display: inline-block;
    padding: 5px;
    color: white;
    font-size: inherit;
    text-decoration: none;
    width: 100%;
  }

  ul li a:active,
  ul li a.active {
    background: var(--second-color);
    color: var(--color);
    width: 100%;
  }
  ul li i {
    padding: 5px;
    margin-left: 1rem;
    color: white;
  }
  .bigScreen {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 20%;
    border-radius: 15px 0 15px 0;
    font-size: 2vw;
    ul {
      flex-direction: column;
      margin: 0;
    }
    ul li {
      margin: 0.5rem 0;
      text-align: center;
    }
    ul li a:hover {
      color: white;
      opacity: 0.5;
      transition: all 0.15s;
    }
    .bigScreen {
      display: block;
      margin: auto;
      max-width: 80%;
      border-radius: 50%;
    }
  }
`;
