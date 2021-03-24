import styled from 'styled-components/macro';

export const HeaderWrapper = styled.header``;

export const LogoWrapper = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkgrey};
  font-size: 2rem;
  line-height: 1.2em;
  margin: 0;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  margin-top: 0.5rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  [data-logo] {
    margin: 2rem 0 1rem 0;
  }
`;
