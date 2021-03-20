import styled, { css } from 'styled-components/macro';
import { Mixins } from 'styles';

const { resetButton } = Mixins;

export const SearchWrapper = styled.form`
  margin: 2rem 0 2rem 0;
`;

export const SearchInput = styled.input`
  ${resetButton};
  background-color: ${({ theme }) => theme.colors.lightred};
  border-radius: 3rem;
  font-size: 1.1rem;
  width: 100%;

  ${({ variant }) =>
    variant === 'primary'
      ? css`
          padding: 1.25rem 1.25rem 1.25rem 6rem;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.grey};
          padding: 0.75rem 0.75rem 0.75rem 6rem;
        `}

  &::placeholder {
    color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.red : theme.colors.grey};
    opacity: 0.5;
    text-overflow: ellipsis;
  }
`;

export const SearchButton = styled.button`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translate(50%, -45%);

  ${({ variant }) =>
    variant === 'primary'
      ? css`
          > [data-icon='icon-svg'] {
            height: 32px;
            width: 32px;
          }
        `
      : css`
          > [data-icon='icon-svg'] {
            height: 24px;
            width: 24px;
          }
        `}
`;

export const SearchGroup = styled.div`
  position: relative;
`;
