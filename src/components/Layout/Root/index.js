import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter as Router } from 'react-router-dom';

import { HeroesListContextProvider, SearchContextProvider } from 'contexts';
import { GlobalStyles, theme } from 'styles';

const Root = ({ children }) => {
  const { main } = theme;

  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={main}>
        <HeroesListContextProvider>
          <SearchContextProvider>{children}</SearchContextProvider>
        </HeroesListContextProvider>
      </ThemeProvider>
    </Router>
  );
};

Root.propTypes = {
  children: node,
};

Root.defaultProps = {
  children: <div />,
};

export { Root };
