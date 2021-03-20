import { useEffect, useState } from 'react';

import { sortCharactersArray } from 'utils/helpers';
import { getCharacters } from 'services';
import { List, Toggle } from 'components/UI';
import { HeartFilled, SuperHero } from 'images/icons';
import * as S from './styles';

const SectionHeroes = () => {
  const [charactersLength, setCharactersLength] = useState(0);
  const [charactersArr, setCharactersArr] = useState([]);
  const [charactersShouldBeOrdered, setCharactersShouldBeOrdered] = useState(false);

  useEffect(() => {
    const getCharactersResult = async () => {
      const { results } = await getCharacters('limit=20');
      setCharactersArr(() => results);
    };
    getCharactersResult();
  }, []);

  useEffect(() => {
    setCharactersLength(() => charactersArr.length);
  }, [charactersArr]);

  return (
    <S.SectionHerosWrapper>
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
              <span>Ordernar por nome - A/Z</span>
              <Toggle />
            </button>
          </S.OrderByNameContainer>
          <S.ShowFavoritesContainer>
            <button>
              <HeartFilled data-icon="icon-svg" />
              <span>Somente favoritos</span>
            </button>
          </S.ShowFavoritesContainer>
        </S.MenubarColumn>
      </S.Menubar>
      <List
        as="ol"
        itemsArr={
          charactersShouldBeOrdered ? sortCharactersArray(charactersArr) : charactersArr
        }
      />
    </S.SectionHerosWrapper>
  );
};

export { SectionHeroes };
