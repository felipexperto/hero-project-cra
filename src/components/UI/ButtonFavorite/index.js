import { bool, func, oneOf, string } from 'prop-types';

import * as S from './styles';
import { HeartFilled, HeartOutline } from 'images/icons';

const ButtonFavorite = ({ handleClick, height, isDisabled, iconType, width }) => {
  return (
    <S.ButtonFavoriteWrapper>
      <S.ButtonFavorite
        data-testid="HP_BUTTON_FAVORITE"
        disabled={isDisabled}
        height={height}
        onClick={handleClick}
        width={width}
      >
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
  /** Define a altura do botão */
  height: string,

  /** Define a função de evento Click */
  handleClick: func,

  /** Define o estilo de ícone (traço ou preenchido)  */
  iconType: oneOf(['outline', 'filled']),

  /** Define se botão está desabilitado ou não */
  isDisabled: bool,

  /** Define a largura do botão */
  width: string,
};

ButtonFavorite.defaultProps = {
  iconType: 'outline',
  isDisabled: false,
};

export { ButtonFavorite };
