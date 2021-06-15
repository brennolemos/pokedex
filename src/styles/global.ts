import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
  }

  :root {
    --white: #fff;
    --gray-1: #14141c;
    --gray-2: #1e1e26;
    --gray-3: #282830;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  .container {
    padding: 2rem 1.5rem;
    flex: 1 1;
    max-width: 75rem;
    margin: 0 auto;
  }

  @media (max-width: 75rem) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 576px) {
    html {
      font-size: 87.5%;
    }
  }
`;
