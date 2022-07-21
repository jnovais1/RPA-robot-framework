import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #a6a8ab;

    --dark-green: #176c4c;
    --light-green: #33b459;
    --white: #fff;

    --title: #176c4c;
    --text: #a6a8ab;

    --blue-button: #5863C3;
    --red-button: #C93F3F;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Amino', sans-serif;
    font-weight: 400;
    color: #FFF;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 100;
    color: #FFF;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


`