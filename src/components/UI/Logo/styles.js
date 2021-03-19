import styled, { css } from 'styled-components/macro';

export const LogoWrapper = styled.div`
  [data-icon='svg-icon'] {
    max-width: 100%;
  }

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      [data-icon='svg-icon'] {
        height: 60px;
      }
    `}
`;
