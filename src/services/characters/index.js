import config from 'config';

const { REACT_APP_MARVEL_BASE_URL, REACT_APP_MARVEL_PUBLIC_KEY } = config;

/*
 * API Docs
 * https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
 */
const getCharacters = async (query) => {
  const charactersPath = '/v1/public/characters';
  const apikey = `?apikey=${REACT_APP_MARVEL_PUBLIC_KEY}`;
  const queryParameters = query ? query : '';
  const fullUrl = `${REACT_APP_MARVEL_BASE_URL}${charactersPath}${apikey}&${queryParameters}`;

  const response = await fetch(fullUrl);
  const content = await response.json();
  const data = content.data;

  return data;
};

export { getCharacters };
