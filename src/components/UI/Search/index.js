import { bool, func, oneOf, string } from 'prop-types';

import { Search as SearchIcon } from 'images/icons';
import * as S from './styles';

const Search = ({ disabled, value, setValue, variant }) => {
  return (
    <S.SearchWrapper data-testid="HP_SEARCH">
      <S.SearchGroup>
        <S.SearchInput
          aria-label="Procure por heróis"
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Procure por heróis"
          type="search"
          value={value}
          variant={variant}
        />
        <S.SearchButton disabled={disabled} variant={variant}>
          <SearchIcon data-icon="icon-svg" />
        </S.SearchButton>
      </S.SearchGroup>
    </S.SearchWrapper>
  );
};

Search.propTypes = {
  disabled: bool,
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
