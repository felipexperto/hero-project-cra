/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { object } from 'prop-types';

import { useLocalStorage } from 'hooks';
import { isArrayFilled, isObjectFilled } from 'utils/helpers';
import { getCharacter, getComics } from 'services';
import { ButtonFavorite, Container } from 'components/UI';
import { Footer, Header } from 'components/Layout';
import { Book, Video } from 'images/icons';
import * as S from './styles';

const PageHero = ({ match }) => {
  const {
    params: { heroId },
  } = match;
  const [character, setCharacter] = useState({});
  const [characterId] = useState(heroId);
  const [characterDetails, setCharacterDetails] = useState({});
  const [isCharacterAmongFavorites, setIsCharacterAmongFavorites] = useState(false);
  const [storedFavoriteCharacters, setStoredFavoriteCharacters] = useLocalStorage(
    'hp_favorite_characters',
    []
  );
  const [comics, setComics] = useState([]);
  // const [validComics, setValidComics] = useState([]);
  const [iconType, setIconType] = useState('');

  const addCharacterToFavorites = (character) =>
    setStoredFavoriteCharacters((prevState) => [...prevState, { ...character }]);

  const removeCharacterFromFavorites = (character) => {
    setStoredFavoriteCharacters((prevState) =>
      prevState.filter((el) => el.id !== character.id)
    );
  };

  const handleClick = (character) => {
    if (isCharacterAmongFavorites) {
      removeCharacterFromFavorites(character);
      return;
    }
    addCharacterToFavorites(character);
  };

  useEffect(() => {
    const getCharacterResult = async (id) => {
      const { results } = await getCharacter(id);
      setCharacterDetails(() => results[0]);
    };
    getCharacterResult(characterId);

    const getComicsResult = async (id, query) => {
      const { results } = await getComics(id, query);
      setComics(() => results);
    };
    getComicsResult(characterId, 'orderBy=-onsaleDate');
  }, [characterId]);

  useEffect(() => {
    const { id, name, thumbnail } = characterDetails;
    setCharacter(() => ({
      id,
      name,
      thumbnail,
    }));
  }, [characterDetails]);

  useEffect(() => {
    setIsCharacterAmongFavorites(() =>
      storedFavoriteCharacters.some((el) => parseInt(el.id) === parseInt(character.id))
    );
  }, [storedFavoriteCharacters, character]);

  useEffect(() => {
    isCharacterAmongFavorites ? setIconType('filled') : setIconType('outline');
  }, [isCharacterAmongFavorites]);

  // useEffect(() => {
  //   console.log(comics);
  //   comics.map((item) => {
  //     const { dates } = item;
  //     const onSaleDate = dates[0].
  //   });
  // }, [comics]);

  return (
    <S.WrapperPageHero>
      <Header variant="secondary" />
      <Container as="main">
        {isObjectFilled(characterDetails) && (
          <>
            <S.Details>
              <S.Column>
                <S.DetailsHeader>
                  <S.Name>{characterDetails.name}</S.Name>
                  <ButtonFavorite
                    iconType={iconType}
                    handleClick={(event) => {
                      event.preventDefault();
                      console.log(character);
                      handleClick(character);
                    }}
                    height={'32px'}
                    width={'32px'}
                  />
                </S.DetailsHeader>
                <S.Description>{characterDetails.description}</S.Description>
                <S.Events>
                  <S.Comics>
                    <div>
                      <strong>Quadrinhos</strong>
                    </div>
                    <div>
                      <Book data-icon="icon-svg" />
                      <span>{characterDetails.comics.available}</span>
                    </div>
                  </S.Comics>
                  <S.Movies>
                    <div>
                      <strong>Filmes</strong>
                    </div>
                    <div>
                      <Video data-icon="icon-svg" />
                      <span>?</span>
                    </div>
                  </S.Movies>
                </S.Events>
                <S.Rating>????</S.Rating>
                <S.LastComic>????</S.LastComic>
              </S.Column>
              <S.Column>
                <S.Image
                  alt={characterDetails.name}
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
              {/* // e se não houverem 10 itens??? */}
              {comics.slice(0, 10).map((item) => {
                const {
                  title,
                  thumbnail: { path, extension },
                } = item;
                return (
                  <>
                    <img src={`${path}.${extension}`} />
                    <span>{title}</span>
                  </>
                );
              })}
            </S.OnSale>
          </>
        )}
      </Container>
      <Footer />
    </S.WrapperPageHero>
  );
};

PageHero.propTypes = {
  match: object,
  location: object,
};

export { PageHero };
