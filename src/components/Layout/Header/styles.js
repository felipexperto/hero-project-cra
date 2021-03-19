import styled from 'styled-components/macro';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'primary' ? 'column' : 'row')};

  [data-icon='svg-icon'] {
    margin: 2rem 0 1rem 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkgrey};
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  margin-top: 0.5rem;
`;
