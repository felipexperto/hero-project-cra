import { useEffect, useState } from 'react';
import { array, oneOf } from 'prop-types';
import { Link } from 'react-router-dom';

import { ButtonFavorite } from 'components/UI';
import { isArrayFilled } from 'utils/helpers';
import * as S from './styles';

const List = ({ as, itemsArr }) => {
  console.log('List', { itemsArr });
  const [items, setItems] = useState(itemsArr);

  useEffect(() => {
    setItems(() => itemsArr);
  }, [itemsArr]);

  return (
    <S.ListWrapper>
      <S.List as={as}>
        {isArrayFilled(items) &&
          items.map((item, index) => {
            const {
              id,
              name,
              thumbnail: { path, extension },
            } = item;
            return (
              <S.ListItem key={index}>
                <Link to={`/hero/${id}`}>
                  <S.Image
                    aria-label={name}
                    fullPath={`${path}.${extension}`}
                    role="img"
                    title={name}
                  />
                </Link>
                <S.Content>
                  <Link to={`/hero/${id}`}>
                    <S.Name>{name}</S.Name>
                  </Link>
                  <ButtonFavorite handleClick={(e) => e.preventDefault()} />
                </S.Content>
              </S.ListItem>
            );
          })}
      </S.List>
    </S.ListWrapper>
  );
};

List.propTypes = {
  itemsArr: array,

  /** Define o elemento html renderizado */
  as: oneOf(['ul', 'ol']),
};

List.defaultProps = {
  itemsArr: [],
  as: 'ul',
};

export { List };
