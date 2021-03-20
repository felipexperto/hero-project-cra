import { Switch, Route } from 'react-router-dom';

import { SearchContextProvider } from 'contexts';
import { Page404, PageHero, PageHome } from 'components/Layout';
import * as S from './styles';

function App() {
  return (
    <SearchContextProvider>
      <S.Wrapper data-testid="HP_APP">
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/hero/:heroId" component={PageHero} />
          <Route component={Page404} />
        </Switch>
      </S.Wrapper>
    </SearchContextProvider>
  );
}

export { App };
