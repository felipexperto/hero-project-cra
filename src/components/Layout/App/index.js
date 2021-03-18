import { Switch, Route } from 'react-router-dom';

import { Page404, PageHero, PageHome } from 'components/Layout';
import * as S from './styles';

function App() {
  return (
    <S.Wrapper data-testid="HP_APP">
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/hero/:heroId" component={PageHero} />
        <Route component={Page404} />
      </Switch>
    </S.Wrapper>
  );
}

export { App };
