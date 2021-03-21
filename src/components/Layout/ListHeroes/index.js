import { useContext, useEffect, useState } from 'react';
import { array, func } from 'prop-types';
import { Link } from 'react-router-dom';

import { HeroesListContext } from 'contexts';
import { isArrayFilled } from 'utils/helpers';
import { ButtonFavorite } from 'components/UI';
import * as S from './styles';

const ListHeroes = ({ itemsArr, toggleHeroFavorites, isHeroAmongFavorites }) => {
  const { heroesList } = useContext(HeroesListContext);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    setHeroes(() => itemsArr);
  }, [itemsArr]);

  return (
    <S.ListWrapper>
      <S.List>
        {isArrayFilled(heroes) &&
          heroes.map((hero) => {
            const { id, name, thumbnail } = hero;
            const { path, extension } = thumbnail;
            const character = { id, name, thumbnail };
            const iconType = isHeroAmongFavorites(heroesList.favorites, id)
              ? 'filled'
              : 'outline';

            return (
              <S.ListItem key={id}>
                <Link to={`/hero/${id}`}>
                  <S.Image
                    aria-label={name}
                    fullPath={`${path}.${extension}`}
                    role="img"
                    title={name}
                  />
                </Link>
                <S.Content>
                  <Link to={`/hero/${id}`}>
                    <S.Name>{name}</S.Name>
                  </Link>
                  <ButtonFavorite
                    iconType={iconType}
                    handleClick={(event) => {
                      event.preventDefault();
                      toggleHeroFavorites(character);
                    }}
                  />
                </S.Content>
              </S.ListItem>
            );
          })}
      </S.List>
    </S.ListWrapper>
  );
};

ListHeroes.propTypes = {
  /** Define a lista a ser renderizada */
  itemsArr: array,

  /** Adiciona ou remove herois da lista de favoritos */
  toggleHeroFavorites: func.isRequired,

  /** Compara o item atual com a lista de herois favoritados */
  isHeroAmongFavorites: func.isRequired,
};

ListHeroes.defaultProps = {
  itemsArr: [],
};

export { ListHeroes };
