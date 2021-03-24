import { createGlobalStyle } from 'styled-components/macro';
import theme from 'styles/Themes';

const { main } = theme;
const fontFamily = `${main.fonts.family}, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

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
    font-family: ${fontFamily};
    line-height: 1.4em;
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
