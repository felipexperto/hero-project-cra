import { oneOf } from 'prop-types';

import { Logo, Search } from 'components/UI';
import * as S from './styles';

const Header = ({ kind }) => {
  return (
    <S.Wrapper kind={kind}>
      <Logo kind={kind} />
      {kind === 'primary' && (
        <div>
          <h1>Explore o Universo</h1>
          <p>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos que você
            ama - e aqueles que você descobrirá em breve!
          </p>
        </div>
      )}
      <Search kind={kind} />
    </S.Wrapper>
  );
};

Header.propTypes = {
  kind: oneOf(['primary', 'secondary']),
};

Header.defaultProps = {
  kind: 'primary',
};

export { Header };
