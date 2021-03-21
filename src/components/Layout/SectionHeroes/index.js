import { useContext, useEffect, useState } from 'react';

import { useLocalStorage } from 'hooks';
import { HeroesListContext, SearchContext } from 'contexts';
import { sortCharactersArray } from 'utils/helpers';
import { getCharacters } from 'services';
import { ListHeroes } from 'components/Layout';
import { Toggle } from 'components/UI';
import { HeartFilled, HeartOutline, SuperHero } from 'images/icons';
import * as S from './styles';

const getHeroes = async (setHook, query = 'limit=20') => {
  const { results } = await getCharacters(query);
  setHook((prevState) => {
    return { ...prevState, heroes: results };
  });
};

const SectionHeroes = () => {
  const [renderItems, setRenderItems] = useState([]);
  const { heroesList, setHeroesList } = useContext(HeroesListContext);
  const { search } = useContext(SearchContext);
  const [heroesFoundInSearchQuantity, setHeroesFoundInSearchQuantity] = useState(0);
  const [storedFavoriteCharacters] = useLocalStorage('hp_favorite_characters', []);
  const isSearchFieldEmpty = !search || search === '';

  const applyFilterToList = () => {
    const items = heroesList.hearted ? heroesList.favorites : heroesList.heroes;
    const filteredItems = heroesList.sort ? sortCharactersArray(items) : items;
    setRenderItems(() => filteredItems);
  };

  useEffect(() => {
    isSearchFieldEmpty
      ? getHeroes(setHeroesList)
      : getHeroes(setHeroesList, `limit=100&nameStartsWith=${search}`);
  }, []);

  useEffect(() => {
    setHeroesList((prevState) => {
      return { ...prevState, favorites: storedFavoriteCharacters };
    });
  }, [storedFavoriteCharacters]);

  useEffect(() => {
    if (isSearchFieldEmpty) return;
    getHeroes(setHeroesList, `limit=100&nameStartsWith=${search}`);
  }, [search]);

  useEffect(() => {
    setHeroesFoundInSearchQuantity(() => heroesList.heroes.length);
  }, [heroesList.heroes]);

  useEffect(() => {
    applyFilterToList();
  }, [heroesList.heroes, heroesList.hearted, heroesList.sort]);

  return (
    <S.SectionHeroesWrapper>
      <S.Menubar>
        <S.MenubarColumn>
          <S.HeroesCount>
            {!heroesList.hearted && `Encontrados ${heroesFoundInSearchQuantity} heróis`}
          </S.HeroesCount>
        </S.MenubarColumn>
        <S.MenubarColumn>
          <S.OrderByNameContainer>
            <S.OrderByNameButton
              onClick={(event) => {
                event.preventDefault();
                setHeroesList((prevState) => {
                  const { sort } = prevState;
                  return { ...prevState, sort: !sort };
                });
              }}
              aria-label={`Ordenar lista de heróis por nome - A/Z (${
                heroesList.sort ? 'ativado' : 'desativado'
              })`}
            >
              <SuperHero data-icon="icon-svg" />
              <span>Ordenar por nome - A/Z</span>
              <Toggle active={heroesList.sort} />
            </S.OrderByNameButton>
          </S.OrderByNameContainer>
          <S.ShowFavoritesContainer>
            <S.ShowFavoritesButton
              onClick={(event) => {
                event.preventDefault();
                setHeroesList((prevState) => {
                  const { hearted } = prevState;
                  return { ...prevState, hearted: !hearted };
                });
              }}
              aria-label={`Exibir somente favoritos (${
                heroesList.hearted ? 'ativado' : 'desativado'
              })`}
            >
              {heroesList.hearted ? (
                <HeartOutline data-icon="icon-svg" />
              ) : (
                <HeartFilled data-icon="icon-svg" />
              )}
              <span>Somente favoritos</span>
            </S.ShowFavoritesButton>
          </S.ShowFavoritesContainer>
        </S.MenubarColumn>
      </S.Menubar>
      <ListHeroes itemsArr={renderItems} />
    </S.SectionHeroesWrapper>
  );
};

export { SectionHeroes };
