import { useEffect, useState } from 'react';
import { array, oneOf } from 'prop-types';

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
              name,
              thumbnail: { path, extension },
            } = item;
            return (
              <S.ListItem key={index}>
                <S.Image
                  aria-label={name}
                  fullPath={`${path}.${extension}`}
                  role="img"
                  title={name}
                />
                <S.Name>{name}</S.Name>
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
