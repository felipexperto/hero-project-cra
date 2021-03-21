import { SuperHeroLogo } from 'images/logos';
import * as S from './styles';

const Logo = () => {
  return (
    <S.LogoWrapper data-logo data-testid="HP_LOGO">
      <SuperHeroLogo data-icon="icon-svg" />
    </S.LogoWrapper>
  );
};

export { Logo };
