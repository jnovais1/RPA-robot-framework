import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #a6a8ab;

    --dark-green: #176c4c;
    --light-green: #33b459;
    --white: #fff;
    --grey: #909090;

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
    background-image: linear-gradient(to right, var(--dark-green), var(--light-green));
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Amino', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 100;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: #FFF;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }


`