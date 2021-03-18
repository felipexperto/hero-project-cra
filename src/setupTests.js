// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// Custom Render for StyledComponents
// https://testing-library.com/docs/react-testing-library/setup#custom-render

import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Root } from 'components/Layout';

const WrapperProvider = ({ children }) => (
  <Root>{children}</Root>
);

const customRender = (ui, options) => render(ui, { wrapper: WrapperProvider, ...options });

export * from '@testing-library/react';

export {
  customRender as render,
};
