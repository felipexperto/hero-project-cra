import { oneOf, string } from 'prop-types';

import { Search as SearchIcon } from 'images/icons';
import * as S from './styles';

const Search = ({ margin, variant }) => {
  return (
    <S.SearchWrapper margin={margin} data-testid="HP_SEARCH">
      {/* <label for="site-search">Search the site:</label> */}
      <S.SearchGroup>
        <S.SearchInput
          aria-label="Procure por heróis"
          placeholder="Procure por heróis"
          type="search"
          variant={variant}
        />
        <S.SearchButton>
          <SearchIcon data-icon="icon-svg" />
        </S.SearchButton>
      </S.SearchGroup>
    </S.SearchWrapper>
  );
};

Search.propTypes = {
  margin: string,
  variant: oneOf(['primary', 'secondary']),
};

Search.defaultProps = {
  margin: '0',
  variant: 'primary',
};

export { Search };
