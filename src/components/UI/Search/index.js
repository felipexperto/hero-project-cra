import { func, oneOf, string } from 'prop-types';

import { Search as SearchIcon } from 'images/icons';
import * as S from './styles';

const Search = ({ value, setValue, variant }) => {
  return (
    <S.SearchWrapper data-testid="HP_SEARCH">
      <S.SearchGroup>
        <S.SearchInput
          aria-label="Procure por heróis"
          placeholder="Procure por heróis"
          type="search"
          variant={variant}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <S.SearchButton variant={variant}>
          <SearchIcon data-icon="icon-svg" />
        </S.SearchButton>
      </S.SearchGroup>
    </S.SearchWrapper>
  );
};

Search.propTypes = {
  margin: string,
  setValue: func,
  value: string,
  variant: oneOf(['primary', 'secondary']),
};

Search.defaultProps = {
  margin: '0',
  variant: 'primary',
};

export { Search };
