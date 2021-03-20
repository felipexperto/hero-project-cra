import { useEffect, useState } from 'react';
import { array, oneOf } from 'prop-types';
import { Link } from 'react-router-dom';

import { useLocalStorage } from 'hooks';
import { isArrayFilled } from 'utils/helpers';
import { ButtonFavorite } from 'components/UI';
import * as S from './styles';

const isCharacterAmongFavorites = (arr, id) => arr.some((el) => el.id === id);

const List = ({ as, itemsArr }) => {
  const [items, setItems] = useState(itemsArr);
  const [storedFavoriteCharacters, setStoredFavoriteCharacters] = useLocalStorage(
    'hp_favorite_characters',
    []
  );

  const addCharacterToFavorites = (character) =>
    setStoredFavoriteCharacters((prevState) => [...prevState, { ...character }]);

  const removeCharacterFromFavorites = (character) => {
    setStoredFavoriteCharacters((prevState) =>
      prevState.filter((el) => el.id !== character.id)
    );
  };

  const handleClick = (character) => {
    const { id } = character;
    if (isCharacterAmongFavorites(storedFavoriteCharacters, id)) {
      removeCharacterFromFavorites(character);
      return;
    }
    addCharacterToFavorites(character);
  };

  useEffect(() => {
    setItems(() => itemsArr);
  }, [itemsArr]);

  return (
    <S.ListWrapper>
      <S.List as={as}>
        {isArrayFilled(items) &&
          items.map((item, index) => {
            const { id, name, thumbnail } = item;
            const { path, extension } = thumbnail;
            const character = { id, name, thumbnail };
            const iconType = isCharacterAmongFavorites(storedFavoriteCharacters, id)
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

List.propTypes = {
  /** Define a lista a ser renderizada */
  itemsArr: array,

  /** Define o elemento html renderizado */
  as: oneOf(['ul', 'ol']),
};

List.defaultProps = {
  itemsArr: [],
  as: 'ul',
};

export { List };
