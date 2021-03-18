import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles, theme } from 'styles';

const Root = ({ children }) => {
  const { main } = theme;

  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={main}>{children}</ThemeProvider>
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
