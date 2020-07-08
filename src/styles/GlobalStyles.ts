import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: 0;
    color: var(--dark);
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  /*O "*" não funciona no button e nem no input...*/

  html {
    background: var(--primary);
  }

  :root {
    --primary: #fff;
    --secondary: #15181C;
    --search: #202327;
    --dark: #14171A;
    --gray: #7A7A7A;
    --outline: #d5d9de;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-white-hover: #edf8ff;
    --twitter-light-hover: #2C8ED6;
  }
`;
