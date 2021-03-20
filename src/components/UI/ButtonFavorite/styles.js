import styled from 'styled-components/macro';
import { Mixins } from 'styles';

const { resetButton } = Mixins;

export const ButtonFavoriteWrapper = styled.div``;

export const ButtonFavorite = styled.button`
  ${resetButton};

  [data-icon='icon-svg'] {
    height: 16px;
    width: 16px;
  }
`;
