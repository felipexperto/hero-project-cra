import { node } from 'prop-types';

import { App } from 'components/App';

const Root = () => {
  return (
    <>
      <App />
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
