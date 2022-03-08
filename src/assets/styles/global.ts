import styled, { createGlobalStyle } from 'styled-components'

interface IContainerProps {
    background: string
}

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --white-100: #f3f3f3;
    --white-200: #fafcff;
    --white-300: #e2e3e4;
    --white-400: #cbd2e0;


    --gold: #efda9f;
    --gold-100: #d0b877;
    --gold-200: #ac924d;
    --gold-300: #635530;

    --blue: #1a325f;
    --blue-900: #020a19;
    --blue-rgba: rgba(38, 178, 190, 0.2);

    --purple: #8789b9;
    --purple-100: #5e3ea1;
    --purple-200: #4c357d;
    --purple-300: #240a53;

    --red: #fe3a02;
    --red-400: #633030;

    --green: #faffde;
    --green-100: #bde100;
    --green-200: #99d939;
    --green-300: #5a9418;
    --green-400: #063b17;

    --black: #111111;
    --black-rgba: rgba(0, 0, 0, .6);

    --roboto: 'Roboto';
    --montserrat: 'Montserrat';
    --rumraisin: 'Rum Raisin';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1280px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }

    @media (max-width: 480px) {
      font-size: 67.5%
    }
  }

  body {
    color: var(--black);
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ease-in .2s;

    &:hover {
      transition: ease-out .3s;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: var(--black-rgba);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background-color: var(--white);
    padding: 60px 100px;
    position: absolute;
    border-radius: 5px;
    inset: 40px;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
      border-radius: 10px;
      background-color: var(--blue);
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--white);
      border-radius: 10px;
    }

    @media (max-width: 480px) {
      padding: 30px 20px;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    border: 0;
    background: transparent;
    font-size: 2rem;
    color: var(--blue);
    transition: ease-in .2s;

    &:hover {
      transition: ease-out .4s;
      color: var(--blue-900);
    }
  }
`

const Container = styled.div<IContainerProps>`
  background-color: var(--background);
  background-image: url("${({background}) => background}");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`

export { GlobalStyle, Container }
