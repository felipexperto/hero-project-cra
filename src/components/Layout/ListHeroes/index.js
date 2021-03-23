import { useEffect, useState } from 'react';
import { array, func, string } from 'prop-types';
import { Link } from 'react-router-dom';

import { isArrayFilled } from 'utils/helpers';
import { ButtonFavorite } from 'components/UI';
import * as S from './styles';

const ListHeroes = ({
  ariaLabelledby,
  favorites,
  itemsArr,
  toggleHeroFavorites,
  isHeroAmongFavorites,
}) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    setHeroes(() => itemsArr);
  }, [itemsArr]);

  return (
    <S.ListWrapper data-testid="HP_LIST_HEROES">
      <S.List aria-labelledby={ariaLabelledby}>
        {isArrayFilled(heroes) ? (
          heroes.map((hero) => {
            const { id, name, thumbnail } = hero;
            const { path, extension } = thumbnail;
            const character = { id, name, thumbnail };
            const isHeroFavorited = isHeroAmongFavorites(favorites, id);
            const iconType = isHeroFavorited ? 'filled' : 'outline';
            const isDisabled = !isHeroFavorited && favorites.length >= 5;

            return (
              <S.ListItem key={id} data-heroid={id}>
                <Link to={`/hero/${id}`} title={name}>
                  <S.Image
                    aria-label={name}
                    fullPath={`${path}.${extension}`}
                    role="img"
                    title={name}
                  />
                </Link>
                <S.Content>
                  <Link to={`/hero/${id}`} title={name}>
                    <S.Name>{name}</S.Name>
                  </Link>
                  <ButtonFavorite
                    iconType={iconType}
                    isActive={isHeroFavorited}
                    isDisabled={isDisabled}
                    handleClick={(event) => {
                      event.preventDefault();
                      toggleHeroFavorites(character);
                    }}
                  />
                </S.Content>
              </S.ListItem>
            );
          })
        ) : (
          <S.ListPlaceholder>
            <S.ListPlaceholderTitle>
              Nenhum resultado encontrado :(
            </S.ListPlaceholderTitle>
          </S.ListPlaceholder>
        )}
      </S.List>
    </S.ListWrapper>
  );
};

ListHeroes.propTypes = {
  /** Define rótulo para lista em tecnologias assistivas
   *  baseado em objeto com id
   **/
  ariaLabelledby: string,

  /** Lista de herois favoritados */
  favorites: array,

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
