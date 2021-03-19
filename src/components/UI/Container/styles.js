import styled, { css } from 'styled-components/macro';
import { media } from 'styles';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  ${({ alignment }) =>
    alignment &&
    css`
      display: flex;
      flex-direction: ${alignment};
    `}

  ${({ fullWidth }) =>
    !fullWidth &&
    css`
      ${media.tablet`
      max-width: 720px;
    `}
      ${media.desktop`
      max-width: 960px;
    `}
    ${media.largeDesktop`
      max-width: 70vw;
    `}
    `}
`;
