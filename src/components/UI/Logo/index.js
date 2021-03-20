import { oneOf } from 'prop-types';

import { SuperHeroLogo } from 'images/logos';
import * as S from './styles';

const Logo = ({ variant }) => {
  return (
    <S.LogoWrapper variant={variant} data-testid="HP_LOGO">
      <SuperHeroLogo data-icon="icon-svg" />
    </S.LogoWrapper>
  );
};

Logo.propTypes = {
  variant: oneOf(['primary', 'secondary']),
};

Logo.defaultProps = {
  variant: 'primary',
};

export { Logo };
