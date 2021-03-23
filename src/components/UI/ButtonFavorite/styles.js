import styled from 'styled-components/macro';
import { Mixins } from 'styles';

const { resetButton, visuallyHidden } = Mixins;

export const ButtonFavoriteWrapper = styled.div``;

export const ButtonFavorite = styled.button`
  ${resetButton};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }

  span {
    ${visuallyHidden};
  }

  [data-icon='icon-svg'] {
    height: ${({ height }) => (height ? height : '16px')};
    width: ${({ width }) => (width ? width : '16px')};
  }
`;
