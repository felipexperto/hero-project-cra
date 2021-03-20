import { useContext, useEffect, useState } from 'react';

import { useLocalStorage } from 'hooks';
import { SearchContext } from 'contexts';
import { sortCharactersArray } from 'utils/helpers';
import { getCharacters } from 'services';
import { ListHeroes } from 'components/Layout';
import { Toggle } from 'components/UI';
import { HeartFilled, SuperHero } from 'images/icons';
import * as S from './styles';

const getCharactersResult = async (query, setHook) => {
  const { results } = await getCharacters(query);
  setHook(() => results);
};

const SectionHeroes = () => {
  const { search } = useContext(SearchContext);
  const [charactersLength, setCharactersLength] = useState(0);
  const [charactersArr, setCharactersArr] = useState([]);
  const [charactersShouldBeOrdered, setCharactersShouldBeOrdered] = useState(false);
  const [charactersShouldBeFavorites, setCharactersShouldBeFavorites] = useState(false);
  const [storedFavoriteCharacters] = useLocalStorage('hp_favorite_characters', []);
  const isSearchFieldEmpty = !search || search === '';

  useEffect(() => {
    if (isSearchFieldEmpty) {
      getCharactersResult('limit=20', setCharactersArr);
      return;
    }
    getCharactersResult(`limit=100&nameStartsWith=${search}`, setCharactersArr);
  }, []);

  useEffect(() => {
    if (isSearchFieldEmpty) return;
    getCharactersResult(`limit=100&nameStartsWith=${search}`, setCharactersArr);
  }, [search]);

  useEffect(() => {
    setCharactersLength(() => charactersArr.length);
  }, [charactersArr]);

  const shouldBeRendered = () => {
    const items = charactersShouldBeFavorites ? storedFavoriteCharacters : charactersArr;
    return charactersShouldBeOrdered ? sortCharactersArray(items) : items;
  };

  return (
    <S.SectionHeroesWrapper>
      <S.Menubar>
        <S.MenubarColumn>
          <S.HeroesCount>Encontrados {charactersLength} heróis</S.HeroesCount>
        </S.MenubarColumn>
        <S.MenubarColumn>
          <S.OrderByNameContainer>
            <button
              onClick={() => setCharactersShouldBeOrdered((prevState) => !prevState)}
            >
              <SuperHero data-icon="icon-svg" />
              <span>Ordenar por nome - A/Z</span>
              <Toggle />
            </button>
          </S.OrderByNameContainer>
          <S.ShowFavoritesContainer>
            <button
              onClick={() => setCharactersShouldBeFavorites((prevState) => !prevState)}
            >
              <HeartFilled data-icon="icon-svg" />
              <span>Somente favoritos</span>
            </button>
          </S.ShowFavoritesContainer>
        </S.MenubarColumn>
      </S.Menubar>
      <ListHeroes itemsArr={shouldBeRendered()} />
    </S.SectionHeroesWrapper>
  );
};

export { SectionHeroes };
