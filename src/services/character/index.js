import config from 'config';

const { REACT_APP_MARVEL_BASE_URL, REACT_APP_MARVEL_PUBLIC_KEY } = config;

/*
 * API Docs
 * https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
 */
const getCharacter = async (id) => {
  if (!id) throw new Error('É preciso passar um id de herói para realizar a busca');

  const characterPath = '/v1/public/characters/';
  const apikey = `?apikey=${REACT_APP_MARVEL_PUBLIC_KEY}`;
  const fullUrl = `${REACT_APP_MARVEL_BASE_URL}${characterPath}${id}${apikey}`;

  const response = await fetch(fullUrl);
  const content = await response.json();
  const data = content.data;

  return data;
};

export { getCharacter };
