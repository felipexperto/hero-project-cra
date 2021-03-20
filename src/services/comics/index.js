import config from 'config';

const { REACT_APP_MARVEL_BASE_URL, REACT_APP_MARVEL_PUBLIC_KEY } = config;

/*
 * API Docs
 * https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
 */
const getComics = async (id, query) => {
  if (!id) throw new Error('É preciso passar um id de herói para realizar a busca');

  const comicPath = `/v1/public/characters/${id}/comics`;
  const apikey = `?apikey=${REACT_APP_MARVEL_PUBLIC_KEY}`;
  const queryParameters = query ? query : '';
  const fullUrl = `${REACT_APP_MARVEL_BASE_URL}${comicPath}${apikey}&${queryParameters}`;

  const response = await fetch(fullUrl);
  const content = await response.json();
  const data = content.data;

  return data;
};

export { getComics };
