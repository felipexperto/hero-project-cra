import { css } from 'styled-components/macro';

export const resetButton = () => css`
  appearance: none;
  background: 0;
  border: 0;
  cursor: pointer;
  line-height: 1.4em;
  margin: 0;
  padding: 0;
`;

export const resetList = () => css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const visuallyHidden = () => css`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
