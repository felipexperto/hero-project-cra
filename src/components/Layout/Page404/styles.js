import styled from 'styled-components/macro';

export const WrapperPage404 = styled.section`
  background-color: ${({ theme }) => theme.colors.lightred};
  height: 100vh;

  img {
    border-radius: 4px;
    margin: 0 auto;
    max-width: 100%;
    width: 480px;
  }

  [data-anchor='home'] {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10em;
    color: ${({ theme }) => theme.colors.red};
    display: inline-block;
    font-size: 1.5rem;
    margin-top: 1rem;
    padding: 12px 24px;

    &:active,
    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-bottom: 1rem;
  margin-top: 0;
  padding-top: 4rem;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;
