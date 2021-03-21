import React, { useContext } from 'react';
import { oneOf } from 'prop-types';
import { Link } from 'react-router-dom';

import { HeroesListContext, SearchContext } from 'contexts';
import { Container, Logo, Search } from 'components/UI';
import * as S from './styles';

const Header = ({ variant }) => {
  const { heroesList } = useContext(HeroesListContext);
  const { search, setSearch } = useContext(SearchContext);

  const isPrimary = variant === 'primary';

  return (
    <S.HeaderWrapper data-testid="HP_HEADER">
      <Container as="section">
        <S.Box variant={variant}>
          <S.LogoWrapper>
            <Link to={'/'} title="Marvel Search Heroes">
              <Logo />
            </Link>
          </S.LogoWrapper>
          {isPrimary && (
            <>
              <div>
                <S.Title>Explore o Universo</S.Title>
                <S.Description>
                  Mergulhe no domínio deslumbrante de todos os personagens clássicos que
                  você ama - e aqueles que você descobrirá em breve!
                </S.Description>
              </div>
              <Search
                disabled={heroesList.hearted}
                value={search}
                setValue={setSearch}
                variant={variant}
              />
            </>
          )}
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
