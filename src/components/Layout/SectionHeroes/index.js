import config from 'config';
import { useEffect, useState } from 'react';

import { List } from 'components/UI';
import * as S from './styles';

const { REACT_APP_MARVEL_BASE_URL, REACT_APP_MARVEL_PUBLIC_KEY } = config;

const SectionHeroes = () => {
  const charactersPath = '/v1/public/characters';
  const queryStringAPI = `?apikey=${REACT_APP_MARVEL_PUBLIC_KEY}`;
  const url = `${REACT_APP_MARVEL_BASE_URL}${charactersPath}${queryStringAPI}`;

  const [charactersLength, setCharactersLength] = useState(0);
  const [charactersArr, setCharactersArr] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const content = await response.json();
      const data = content.data;
      const { count, results } = data;
      console.log({ data });
      setCharactersLength(count);
      setCharactersArr(results);
    })();
  }, []);

  return (
    <S.SectionHerosWrapper>
      <h2>Encontrados {charactersLength} heróis</h2>
      <List as="ol" items={charactersArr} />
    </S.SectionHerosWrapper>
  );
};

export { SectionHeroes };
