import styled from 'styled-components/macro';
import { Mixins } from 'styles';

const { resetButton } = Mixins;

export const OrderByNameButton = styled.button`
  ${resetButton};
  align-items: center;
  border-radius: 10em;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  display: flex;
  padding: 8px 16px;

  &:active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightred};
  }

  > span {
    margin-right: 8px;
  }

  [data-icon='icon-svg'] {
    height: 24px;
    margin-right: 8px;
    width: 24px;
  }
`;
