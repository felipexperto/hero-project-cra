import styled, { css } from 'styled-components/macro';

export const LogoWrapper = styled.div`
  [data-icon='icon-svg'] {
    max-width: 100%;
  }

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      [data-icon='icon-svg'] {
        height: 60px;
      }
    `}
`;
