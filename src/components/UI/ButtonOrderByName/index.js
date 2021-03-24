import { bool, func } from 'prop-types';

import { Toggle } from 'components/UI';
import { SuperHero } from 'images/icons';
import * as S from './styles';

const ButtonOrderByName = ({ isActive, handleClick }) => {
  return (
    <S.OrderByNameButton
      data-testid="HP_BUTTON_ORDER"
      data-active={isActive ? 'ativado' : 'desativado'}
      onClick={handleClick}
      aria-label={`Ordenar lista de heróis por nome - A/Z (${
        isActive ? 'ativado' : 'desativado'
      })`}
    >
      <SuperHero data-icon="icon-svg" />
      <span>Ordenar por nome - A/Z</span>
      <Toggle active={isActive} />
    </S.OrderByNameButton>
  );
};

ButtonOrderByName.propTypes = {
  /** Define o estado de ativado ou desativado */
  isActive: bool,

  /** Define a função de click */
  handleClick: func,
};

ButtonOrderByName.defaultProps = {
  isActive: false,
  handleClick: () => {},
};

export { ButtonOrderByName };
