import { oneOf } from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Logo, Search } from 'components/UI';
import * as S from './styles';

const Header = ({ variant }) => {
  const isPrimary = variant === 'primary';
  const alignment = isPrimary ? 'column' : 'row';

  return (
    <S.HeaderWrapper data-testid="HP_HEADER">
      <Container as="section">
        <S.Box variant={variant} alignment={alignment}>
          <S.LogoWrapper>
            <Link to={'/'} title="Marvel Search Heroes">
              <Logo variant={variant} />
            </Link>
          </S.LogoWrapper>
          {isPrimary && (
            <div>
              <S.Title>Explore o Universo</S.Title>
              <S.Description>
                Mergulhe no domínio deslumbrante de todos os personagens clássicos que
                você ama - e aqueles que você descobrirá em breve!
              </S.Description>
            </div>
          )}
          <Search variant={variant} />
        </S.Box>
      </Container>
    </S.HeaderWrapper>
  );
};

Header.propTypes = {
  variant: oneOf(['primary', 'secondary']),
};

Header.defaultProps = {
  variant: 'primary',
};

export { Header };
