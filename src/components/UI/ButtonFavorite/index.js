import * as S from './styles';
import { func } from 'prop-types';

import { HeartOutline } from 'images/icons';

const ButtonFavorite = ({ handleClick }) => {
  return (
    <S.ButtonFavoriteWrapper>
      <S.ButtonFavorite onClick={handleClick}>
        <HeartOutline data-icon="icon-svg" />
      </S.ButtonFavorite>
    </S.ButtonFavoriteWrapper>
  );
};

ButtonFavorite.propTypes = {
  handleClick: func,
};

ButtonFavorite.defaultProps = {
  handleClick: () => {},
};

export { ButtonFavorite };
