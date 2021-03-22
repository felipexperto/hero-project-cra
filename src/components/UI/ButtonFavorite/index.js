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
  /** Define a altura do botão */
  height: string,

  /** Define a função de evento Click */
  handleClick: func,

  /** Define o estilo de ícone (traço ou preenchido)  */
  iconType: oneOf(['outline', 'filled']),

  /** Define a largura do botão */
  width: string,
};

ButtonFavorite.defaultProps = {
  iconType: 'outline',
};

export { ButtonFavorite };
