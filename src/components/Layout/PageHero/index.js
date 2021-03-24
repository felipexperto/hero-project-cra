/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { object } from 'prop-types';

import { useLocalStorage } from 'hooks';
import {
  isArrayFilled,
  isObjectFilled,
  formatDate,
  isHeroAmongFavorites,
} from 'utils/helpers';
import { getCharacter, getComics } from 'services';
import { ButtonFavorite, Container } from 'components/UI';
import { Footer, Header, SectionComics } from 'components/Layout';
import { Book } from 'images/icons';
import * as S from './styles';

const PageHero = ({ match }) => {
  const {
    params: { heroId },
  } = match;
  const [characterId] = useState(heroId);
  const [characterDetails, setCharacterDetails] = useState({});
  const [isCharacterAmongFavorites, setIsCharacterAmongFavorites] = useState(false);
  const [storedFavoriteCharacters, setStoredFavoriteCharacters] = useLocalStorage(
    'hp_favorite_characters',
    []
  );
  const [comics, setComics] = useState([]);
  const [lastComic, setLastComic] = useState([]);
  const maxComicsToShow = comics.length >= 10 ? 10 : comics.length;
  const [iconType, setIconType] = useState('');

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

  useEffect(() => {
    const getHeroDetails = async (id) => {
      const { results } = await getCharacter(id);
      setCharacterDetails(() => results[0]);
    };
    getHeroDetails(characterId);

    const getComicsList = async (id, query) => {
      const { results } = await getComics(id, query);
      setComics(() => results);
    };
    getComicsList(characterId, 'orderBy=-onsaleDate');
  }, [characterId]);

  useEffect(() => {
    setIsCharacterAmongFavorites(() =>
      storedFavoriteCharacters.some(
        (el) => parseInt(el.id) === parseInt(characterDetails.id)
      )
    );
  }, [storedFavoriteCharacters, characterDetails]);

  useEffect(() => {
    isCharacterAmongFavorites ? setIconType('filled') : setIconType('outline');
  }, [isCharacterAmongFavorites]);

  useEffect(() => {
    const allDates = comics.map((item) => item.dates);
    const onSaleDates = allDates.map((value) => {
      const onsaleDate = Object.values(value).filter(
        (item) => item.type === 'onsaleDate'
      );
      return onsaleDate[0].date;
    });
    const lastPublishedComic = onSaleDates.reduce((acc, value) => {
      const accDate = new Date(acc);
      const valueDate = new Date(value);
      return accDate > valueDate ? accDate : valueDate;
    }, 0);
    setLastComic(() => formatDate(lastPublishedComic));
  }, [comics]);

  return (
    <S.WrapperPageHero data-testid="HP_PAGEHERO">
      <Header variant="secondary" />
      <Container as="main" aria-label="Detalhes do herói">
        {isObjectFilled(characterDetails) && (
          <>
            <S.Details>
              <S.Column>
                <S.DetailsHeader>
                  <S.Name data-testid="HP_TITLE_HERO_NAME">
                    {characterDetails.name}
                  </S.Name>
                  <ButtonFavorite
                    iconType={iconType}
                    height="32px"
                    width="32px"
                    handleClick={(event) => {
                      event.preventDefault();
                      const { id, name, thumbnail } = characterDetails;
                      toggleHeroFavorites({
                        id,
                        name,
                        thumbnail,
                      });
                    }}
                    isDisabled={
                      !isCharacterAmongFavorites && storedFavoriteCharacters.length >= 5
                    }
                    isActive={isCharacterAmongFavorites}
                  />
                </S.DetailsHeader>
                <S.Description data-testid="HP_PARAGRAPH_DESCRIPTION">
                  {characterDetails.description === ''
                    ? 'Sem descrição disponível para este personagem.'
                    : characterDetails.description}
                </S.Description>
                <S.Events>
                  <S.Comics>
                    <S.ComicsTitle>
                      <strong>Quadrinhos</strong>
                    </S.ComicsTitle>
                    <S.ComicsContent data-testid="HP_COMICS">
                      <Book data-icon="icon-svg" />
                      <span>{characterDetails.comics.available}</span>
                    </S.ComicsContent>
                  </S.Comics>
                </S.Events>
                <S.LastComic>
                  <S.LastComicTitle data-testid="HP_LAST_COMIC">
                    Último quadrinho:
                  </S.LastComicTitle>
                  <S.LastComicContent>{lastComic}</S.LastComicContent>
                </S.LastComic>
              </S.Column>
              <S.Column>
                <S.Image
                  alt={characterDetails.name}
                  data-testid="HP_IMAGE_FEATURED"
                  src={`${characterDetails.thumbnail.path}.${characterDetails.thumbnail.extension}`}
                />
              </S.Column>
            </S.Details>
          </>
        )}
        {isArrayFilled(comics) && (
          <SectionComics comics={comics} maxComicsToShow={maxComicsToShow} />
        )}
      </Container>
      <Footer />
    </S.WrapperPageHero>
  );
};

PageHero.propTypes = {
  /** Recebe informacoes do react-router */
  match: object,
};

export { PageHero };
