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
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    padding: 2rem 1.5rem;
    flex: 1 1;
    max-width: 75rem;
    margin: 0 auto;
  }
`;
