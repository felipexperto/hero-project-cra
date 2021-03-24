import styled from 'styled-components/macro';
import { Mixins } from 'styles';

const { resetButton } = Mixins;

export const ButtonShowFavorites = styled.button`
  ${resetButton};
  align-items: center;
  border-radius: 10em;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  display: flex;
  padding: 12px 16px;

  &:active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightred};
  }

  [data-icon='icon-svg'] {
    height: 16px;
    margin-right: 8px;
    width: 16px;
  }
`;
