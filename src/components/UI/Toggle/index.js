import { bool } from 'prop-types';

import * as S from './styles';

const Toggle = ({ active }) => {
  return (
    <S.ToggleWrapper data-active={active}>
      <S.Toggle>
        <S.Indicator />
      </S.Toggle>
    </S.ToggleWrapper>
  );
};

Toggle.propTypes = {
  active: bool,
};

export { Toggle };
