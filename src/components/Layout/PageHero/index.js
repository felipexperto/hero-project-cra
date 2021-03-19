import { object } from 'prop-types';

import { Container } from 'components/UI';
import { Footer, Header } from 'components/Layout';
import * as S from './styles';

const PageHero = ({ match, location }) => {
  console.log({ match });
  console.log({ location });

  const {
    params: { heroId },
  } = match;

  return (
    <S.WrapperPageHero>
      <Header variant="secondary" />
      <Container as="main">
        <h1>Detalhes do herói</h1>
        <h2>{heroId}</h2>
      </Container>
      <Footer />
    </S.WrapperPageHero>
  );
};

PageHero.propTypes = {
  match: object,
  location: object,
};

export { PageHero };
