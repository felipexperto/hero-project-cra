import { bool, func } from 'prop-types';

import { HeartFilled, HeartOutline } from 'images/icons';
import * as S from './styles';

const ButtonShowFavorites = ({ isActive, handleClick }) => {
  return (
    <S.ButtonShowFavorites
      data-testid="HP_BUTTON_SHOW_FAVORITES"
      data-active={isActive ? 'ativado' : 'desativado'}
      onClick={handleClick}
      aria-label={`Exibir somente favoritos (${isActive ? 'ativado' : 'desativado'})`}
    >
      {isActive ? (
        <HeartOutline data-icon="icon-svg" />
      ) : (
        <HeartFilled data-icon="icon-svg" />
      )}
      <span>Somente favoritos</span>
    </S.ButtonShowFavorites>
  );
};

ButtonShowFavorites.propTypes = {
  /** Define o estado de ativado ou desativado */
  isActive: bool,

  /** Define a função de click */
  handleClick: func,
};

ButtonShowFavorites.defaultProps = {
  isActive: false,
  handleClick: () => {},
};

export { ButtonShowFavorites };
