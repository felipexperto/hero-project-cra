import { useContext, useEffect, useState } from 'react';

import { useLocalStorage } from 'hooks';
import { HeroesListContext, SearchContext } from 'contexts';
import { sortCharactersArray } from 'utils/helpers';
import { getCharacters } from 'services';
import { ListHeroes } from 'components/Layout';
import { Toggle } from 'components/UI';
import { HeartFilled, HeartOutline, SuperHero } from 'images/icons';
import * as S from './styles';

const getCharactersResult = async (query, setHook) => {
  const { results } = await getCharacters(query);
  console.log({ results });
  setHook((prevState) => {
    return { ...prevState, heroes: results };
  });
};

const SectionHeroes = () => {
  const { heroesList, setHeroesList } = useContext(HeroesListContext);
  const { search } = useContext(SearchContext);
  const [exibirItens, setExibirItens] = useState([]);
  const [heroesFoundInSearchQuantity, setHeroesFoundInSearchQuantity] = useState(0);
  const [storedFavoriteCharacters] = useLocalStorage('hp_favorite_characters', []);
  const isSearchFieldEmpty = !search || search === '';

  // useEffect(() => {
  // console.log({ heroesList });
  // }, [heroesList]);

  useEffect(() => {
    console.log('heroesList', { heroesList });
    console.log('exibirItens', { exibirItens });
  }, [exibirItens]);

  useEffect(() => {
    console.log('useEffect storedFavoriteCharacters', { storedFavoriteCharacters });
    setHeroesList((prevState) => {
      return { ...prevState, favorites: storedFavoriteCharacters };
    });
  }, [storedFavoriteCharacters]);

  useEffect(async () => {
    if (isSearchFieldEmpty) {
      await getCharactersResult('limit=20&orderBy=-name', setHeroesList);
      return;
    }
    await getCharactersResult(`limit=100&nameStartsWith=${search}`, setHeroesList);
  }, []);

  useEffect(async () => {
    if (isSearchFieldEmpty) return;
    await getCharactersResult(`limit=100&nameStartsWith=${search}`, setHeroesList);
  }, [search]);

  useEffect(() => {
    setHeroesFoundInSearchQuantity(() => heroesList.heroes.length);
  }, [heroesList.heroes]);

  useEffect(() => {
    console.log(
      'useEffect heroesList.hearted',
      heroesList.hearted,
      heroesList.favorites,
      heroesList.heroes
    );
    const items = heroesList.hearted ? heroesList.favorites : heroesList.heroes;
    const filteredItems = heroesList.sort ? sortCharactersArray(items) : items;
    setExibirItens(() => filteredItems);
  }, [heroesList.hearted, heroesList.sort]);

  // useEffect(() => {
  // setExibirItens((prevState) => heroesList.sort ? sortCharactersArray(prevState) : prevState);
  // const items = heroesList.hearted ? heroesList.favorites : heroesList.heroes;
  // const filteredItems = heroesList.sort ? sortCharactersArray(items) : items;
  // setExibirItens(() => (heroesList.sort ? sortCharactersArray(items) : items));
  // }, [heroesList.sort]);

  // const shouldBeRendered = () => {
  //   const items = heroesList.hearted ? heroesList.favorites : heroesList.heroes;
  //   const filteredItems = heroesList.sort ? sortCharactersArray(items) : items;
  //   return filteredItems;
  // };

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
            <button
              onClick={(event) => {
                event.preventDefault();
                setHeroesList((prevState) => {
                  const { sort } = prevState;
                  return { ...prevState, sort: !sort };
                });
              }}
            >
              <SuperHero data-icon="icon-svg" />
              <span>Ordenar por nome - A/Z</span>
              <Toggle />
            </button>
          </S.OrderByNameContainer>
          <S.ShowFavoritesContainer>
            <button
              onClick={(event) => {
                event.preventDefault();
                setHeroesList((prevState) => {
                  const { hearted } = prevState;
                  console.log('button', { ...prevState, hearted: !hearted });
                  return { ...prevState, hearted: !hearted };
                });
              }}
            >
              {heroesList.hearted ? (
                <HeartOutline data-icon="icon-svg" />
              ) : (
                <HeartFilled data-icon="icon-svg" />
              )}
              <span>
                {heroesList.hearted ? 'Resultados da busca' : 'Somente favoritos'}
              </span>
            </button>
          </S.ShowFavoritesContainer>
        </S.MenubarColumn>
      </S.Menubar>
      <ListHeroes itemsArr={exibirItens} />
    </S.SectionHeroesWrapper>
  );
};

export { SectionHeroes };
