import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }


  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
    }

    .react-modal-overlay {
      background-color: ${theme.colors.overlay};

      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 600px;
      padding: 3rem 4rem;

      outline: none;
      box-shadow: 0px 6px 30px rgb(0, 0, 0, 0.4);
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors.primary};
    }

    button {
      cursor: pointer;
    }
  `}

`

export default GlobalStyles
