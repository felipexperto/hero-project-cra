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
          data-testid="HP_SEARCH_INPUT"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Procure por heróis"
          type="search"
          value={value}
          variant={variant}
        />
        <S.SearchButton
          data-testid="HP_SEARCH_BUTTON"
          disabled={disabled}
          variant={variant}
          title="Clique para fazer a busca"
        >
          <SearchIcon data-icon="icon-svg" />
        </S.SearchButton>
      </S.SearchGroup>
    </S.SearchWrapper>
  );
};

Search.propTypes = {
  /** Define se botão e input de texto estão desabilitados */
  disabled: bool,

  /** Atualiza o estado com valor digitado */
  setValue: func,

  /** Define o valor digitado */
  value: string,

  /** Define as cores busca */
  variant: oneOf(['primary', 'secondary']),
};

Search.defaultProps = {
  margin: '0',
  variant: 'primary',
};

export { Search };
