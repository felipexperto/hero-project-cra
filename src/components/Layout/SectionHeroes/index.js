import { useContext, useEffect, useState } from 'react';

import { useDebounce, useLocalStorage } from 'hooks';
import { HeroesListContext, SearchContext } from 'contexts';
import { isHeroAmongFavorites, sortCharactersArray } from 'utils/helpers';
import { getCharacters } from 'services';
import { ListHeroes } from 'components/Layout';
import { ButtonOrderByName, ButtonShowFavorites } from 'components/UI';
import * as S from './styles';

const getHeroes = async (setHook, setIsLoadingHook, query = 'limit=20') => {
  const { results } = await getCharacters(query);
  setHook((prevState) => {
    return { ...prevState, heroes: results };
  });
  setIsLoadingHook(() => false);
};

const SectionHeroes = () => {
  const [renderItems, setRenderItems] = useState([]);
  const { heroesList, setHeroesList } = useContext(HeroesListContext);
  const [heroesFoundInSearchQuantity, setHeroesFoundInSearchQuantity] = useState(0);

  const { search } = useContext(SearchContext);
  const debouncedSearch = useDebounce(search, 500);
  const isSearchFieldEmpty = !debouncedSearch || debouncedSearch === '';

  const [storedFavoriteCharacters, setStoredFavoriteCharacters] = useLocalStorage(
    'hp_favorite_characters',
    []
  );

  const [isLoading, setIsLoading] = useState(true);

  const toggleHeroFavorites = (character) =>
    setStoredFavoriteCharacters((prevState) => {
      const isHeroListFull = prevState.length >= 5;
      const isHeroFavorited = isHeroAmongFavorites(prevState, character.id);
      const addHero = prevState.concat(character);
      const removeHero = prevState.filter((el) => el.id !== character.id);

      if (isHeroListFull) {
        return isHeroFavorited ? removeHero : prevState;
      } else {
        return isHeroFavorited ? removeHero : addHero;
      }
    });

  const handleSearch = () => {
    const searchQuery = `limit=100&nameStartsWith=${debouncedSearch}`;
    isSearchFieldEmpty
      ? getHeroes(setHeroesList, setIsLoading)
      : getHeroes(setHeroesList, setIsLoading, searchQuery);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [debouncedSearch]);

  useEffect(() => {
    setHeroesList((prevState) => {
      return { ...prevState, favorites: storedFavoriteCharacters };
    });
  }, [storedFavoriteCharacters]);

  useEffect(() => {
    setHeroesFoundInSearchQuantity(() => heroesList.heroes.length);
  }, [heroesList.heroes]);

  const applyFilterToList = () => {
    const items = heroesList.hearted ? heroesList.favorites : heroesList.heroes;
    const filteredItems = heroesList.sort ? sortCharactersArray(items) : items;
    setRenderItems(() => filteredItems);
  };

  useEffect(() => {
    applyFilterToList();
  }, [heroesList.heroes, heroesList.hearted, heroesList.sort, heroesList.favorites]);

  return (
    <S.SectionHeroesWrapper data-testid="HP_SECTION_HEROES">
      <S.Menubar>
        <S.MenubarColumn>
          <S.HeroesCount id="counter-heroes" data-testid="HP_COUNTER_HEROES">
            {heroesList.hearted
              ? `${heroesList.favorites.length} heróis favoritados (máx. 5)`
              : `Encontrados ${heroesFoundInSearchQuantity} heróis`}
          </S.HeroesCount>
        </S.MenubarColumn>
        <S.MenubarColumn>
          <S.OrderByNameContainer>
            <ButtonOrderByName
              isActive={heroesList.sort}
              handleClick={(event) => {
                event.preventDefault();
                setHeroesList((prevState) => {
                  const { sort } = prevState;
                  return { ...prevState, sort: !sort };
                });
              }}
            />
          </S.OrderByNameContainer>
          <S.ShowFavoritesContainer>
            <ButtonShowFavorites
              isActive={heroesList.hearted}
              handleClick={(event) => {
                event.preventDefault();
                setHeroesList((prevState) => {
                  const { hearted } = prevState;
                  return { ...prevState, hearted: !hearted };
                });
              }}
            />
          </S.ShowFavoritesContainer>
        </S.MenubarColumn>
      </S.Menubar>
      <ListHeroes
        ariaLabelledby="counter-heroes"
        favorites={heroesList.favorites}
        itemsArr={renderItems}
        isHeroAmongFavorites={isHeroAmongFavorites}
        isLoading={isLoading}
        toggleHeroFavorites={toggleHeroFavorites}
      />
    </S.SectionHeroesWrapper>
  );
};

export { SectionHeroes };
