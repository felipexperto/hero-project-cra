import { bool } from 'prop-types';

import * as S from './styles';

const Toggle = ({ active }) => {
  return (
    <S.ToggleWrapper data-active={active} data-testid="HP_TOGGLE">
      <S.Toggle>
        <S.Indicator />
      </S.Toggle>
    </S.ToggleWrapper>
  );
};

Toggle.propTypes = {
  /** Define estado de ativado ou desativado */
  active: bool,
};

export { Toggle };
