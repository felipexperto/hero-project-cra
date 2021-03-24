import { arr, number } from 'prop-types';

import * as S from './styles';

const SectionComics = ({ comics, maxComicsToShow }) => {
  return (
    <S.OnSale>
      <S.OnSaleTitle id="onsale-title">Últimos lançamentos</S.OnSaleTitle>
      <S.OnSaleList aria-labelledby="onsale-title">
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
  );
};

SectionComics.propTypes = {
  comics: arr,
  maxComicsToShow: number,
};

SectionComics.defaultProps = {
  comics: [],
  maxComicsToShow: 10,
};

export { SectionComics };
