import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'styles';

const Root = ({ children }) => {
  const { main } = theme;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={main}>{children}</ThemeProvider>
    </>
  );
};

Root.propTypes = {
  children: node,
};

Root.defaultProps = {
  children: <div />,
};

export { Root };
