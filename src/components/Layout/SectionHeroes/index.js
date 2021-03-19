import { useEffect, useState } from 'react';

import { List } from 'components/UI';
import { getCharacters } from 'services';
import * as S from './styles';

const SectionHeroes = () => {
  const [charactersLength, setCharactersLength] = useState(0);
  const [charactersArr, setCharactersArr] = useState([]);

  useEffect(() => {
    const getCharactersResult = async () => {
      const { count, results } = await getCharacters('limit=20');
      setCharactersLength(() => count);
      setCharactersArr(() => results);
    };
    getCharactersResult();
  }, []);

  return (
    <S.SectionHerosWrapper>
      <h2>Encontrados {charactersLength} heróis</h2>
      <List as="ol" items={charactersArr} />
    </S.SectionHerosWrapper>
  );
};

export { SectionHeroes };
