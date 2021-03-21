import { func, oneOf, string } from 'prop-types';

import * as S from './styles';
import { HeartFilled, HeartOutline } from 'images/icons';

const ButtonFavorite = ({ handleClick, height, iconType, width }) => {
  return (
    <S.ButtonFavoriteWrapper>
      <S.ButtonFavorite height={height} width={width} onClick={handleClick}>
        {iconType === 'outline' ? (
          <HeartOutline data-icon="icon-svg" />
        ) : (
          <HeartFilled data-icon="icon-svg" />
        )}
      </S.ButtonFavorite>
    </S.ButtonFavoriteWrapper>
  );
};

ButtonFavorite.propTypes = {
  height: string,
  handleClick: func,
  iconType: oneOf(['outline', 'filled']),
  width: string,
};

ButtonFavorite.defaultProps = {
  iconType: 'outline',
};

export { ButtonFavorite };
