import { createGlobalStyle } from 'styled-components/macro';
import theme from 'styles/Themes';

const { main } = theme;

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  html,
  body {
    font-family: ${main.fonts.family};
    margin: 0;
    padding: 0;
  }

  body {
    overflow-anchor: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
