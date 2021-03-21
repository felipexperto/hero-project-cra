import { useContext, useEffect, useState } from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';

// import { useLocalStorage } from 'hooks';
import { HeroesListContext } from 'contexts';
import { isArrayFilled } from 'utils/helpers';
import { ButtonFavorite } from 'components/UI';
import * as S from './styles';

const isHeroAmongFavorites = (arr, id) =>
  arr.some((el) => {
    return el.id === id;
  });

const ListHeroes = ({ itemsArr }) => {
  // console.log({ itemsArr });
  const { heroesList, setHeroesList } = useContext(HeroesListContext);
  const [items, setItems] = useState([]);
  // const [storedFavoriteCharacters, setStoredFavoriteCharacters] = useLocalStorage(
  //   'hp_favorite_characters',
  //   []
  // );

  const addCharacterToFavorites = (character) =>
    setHeroesList((prevState) => {
      console.log('addCharacterToFavorites');
      const { favorites } = prevState;
      if (favorites.length > 4) return;
      if (isHeroAmongFavorites(heroesList.favorites, character.id)) return;
      favorites.push(character);
      return { ...prevState, favorites };
    });
  // setStoredFavoriteCharacters((prevState) => [...prevState, { ...character }]);

  const removeCharacterFromFavorites = (character) => {
    // setStoredFavoriteCharacters((prevState) =>
    //   prevState.filter((el) => el.id !== character.id)
    // );
    setHeroesList((prevState) => {
      const { favorites } = prevState;
      favorites.filter((el) => el.id !== character.id);
      return { ...prevState, favorites };
    });
  };

  const handleClick = (character) => {
    const { id } = character;
    // if (isHeroAmongFavorites(storedFavoriteCharacters, id)) {
    if (isHeroAmongFavorites(heroesList.favorites, id)) {
      removeCharacterFromFavorites(character);
      return;
    }
    addCharacterToFavorites(character);
  };

  useEffect(() => {
    setItems(() => itemsArr);
    // setHeroesList((prevState) => {
    //   return { ...prevState, heroes: itemsArr };
    // });
  }, [itemsArr]);

  return (
    <S.ListWrapper>
      <S.List>
        {isArrayFilled(items) &&
          items.map((item, index) => {
            const { id, name, thumbnail } = item;
            const { path, extension } = thumbnail;
            const character = { id, name, thumbnail };

            // console.log(
            //   { id, name, thumbnail, path, extension },
            //   isHeroAmongFavorites(heroesList.heroes, id)
            // );
            // const iconType = isHeroAmongFavorites(storedFavoriteCharacters, id)
            const iconType = isHeroAmongFavorites(heroesList.favorites, id)
              ? 'filled'
              : 'outline';

            return (
              <S.ListItem key={index}>
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
                      handleClick(character);
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
};

ListHeroes.defaultProps = {
  itemsArr: [],
};

export { ListHeroes };
