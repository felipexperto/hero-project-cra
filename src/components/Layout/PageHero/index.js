/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { object } from 'prop-types';

import { useLocalStorage } from 'hooks';
import { isArrayFilled, isObjectFilled } from 'utils/helpers';
import { getCharacter, getComics } from 'services';
import { Container } from 'components/UI';
import { Footer, Header } from 'components/Layout';
import { Book, HeartFilled, HeartOutline } from 'images/icons';
import * as S from './styles';

const PageHero = ({ match }) => {
  const {
    params: { heroId },
  } = match;
  const [characterId] = useState(heroId);
  const [characterDetails, setCharacterDetails] = useState({});
  const [isCharacterAmongFavorites, setIsCharacterAmongFavorites] = useState(false);
  const [storedFavoriteCharacters] = useLocalStorage('hp_favorite_characters', []);
  const [iconType, setIconType] = useState('');
  const [comics, setComics] = useState([]);
  const [lastComic, setLastComic] = useState([]);
  const maxComicsToShow = comics.length >= 10 ? 10 : comics.length;

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
    const formatDate = (stringDate) => {
      const fullDate = new Date(stringDate);
      const day = fullDate.getDate();
      const month = fullDate.getMonth() + 1;
      const year = fullDate.getFullYear();

      const intlMonth = new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format;
      const monthName = intlMonth(new Date(Date.UTC(year, month)));

      setLastComic(`${day} ${monthName} ${year}`);
    };
    formatDate(lastPublishedComic);
  }, [comics]);

  return (
    <S.WrapperPageHero>
      <Header variant="secondary" />
      <Container as="main">
        {isObjectFilled(characterDetails) && (
          <>
            <S.Details>
              <S.Column>
                <S.DetailsHeader>
                  <S.Name data-testid="HP_TITLE_HERO_NAME">
                    {characterDetails.name}
                  </S.Name>
                  <S.FavoriteIndicator id="favorite-indicator">
                    {iconType === 'filled' ? (
                      <>
                        <span>Herói favoritado</span>
                        <HeartFilled
                          data-icon="icon-svg"
                          aria-labelledby="favorite-indicator"
                        />
                      </>
                    ) : (
                      <>
                        <span>Herói não favoritado</span>
                        <HeartOutline
                          data-icon="icon-svg"
                          aria-labelledby="favorite-indicator"
                        />
                      </>
                    )}
                  </S.FavoriteIndicator>
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
          <>
            <S.OnSale>
              <S.OnSaleTitle>Últimos lançamentos</S.OnSaleTitle>
              <S.OnSaleList>
                {comics.slice(0, maxComicsToShow).map((item, index) => {
                  const {
                    title,
                    thumbnail: { path, extension },
                  } = item;
                  return (
                    <S.OnSaleListItem key={index}>
                      <img src={`${path}.${extension}`} alt={title} />
                      <h3>{title}</h3>
                    </S.OnSaleListItem>
                  );
                })}
              </S.OnSaleList>
            </S.OnSale>
          </>
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
