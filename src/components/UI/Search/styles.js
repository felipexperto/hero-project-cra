import styled, { css } from 'styled-components';

export const SearchWrapper = styled.form`
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.colors.lightred};
  border: 0;
  border-radius: 3rem;
  font-size: 1.1rem;
  padding: 1.25rem 1.25rem 1.25rem 6rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.red};
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
`;

export const SearchGroup = styled.div`
  position: relative;

  [data-icon='icon-svg'] {
    height: 32px;
    transform: translate(75%, -50%);
    width: 32px;
  }
`;
