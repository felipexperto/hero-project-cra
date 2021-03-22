import styled, { css, keyframes } from 'styled-components';

const rotating = keyframes`
  from {
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;

const animation = () => css`
  -webkit-animation: ${rotating} 1s linear infinite;
  -moz-animation: ${rotating} 1s linear infinite;
  animation: ${rotating} 1s linear infinite;
`;

export const SpinningLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SpinningLoaderIcon = styled.div`
  ${animation}
  border: 4px solid ${({ theme }) => theme.colors.red};
  border-left-color: transparent;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
