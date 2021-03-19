import { object } from 'prop-types';

import { Container } from 'components/UI';
import { Footer, Header } from 'components/Layout';

const PageHero = ({ match, location }) => {
  console.log({ match });
  console.log({ location });

  const {
    params: { heroId },
  } = match;

  return (
    <>
      <Header variant="secondary" />
      <Container as="main">
        <h1>PageHero</h1>
        <h2>HeroId: {heroId}</h2>
      </Container>
      <Footer />
    </>
  );
};

PageHero.propTypes = {
  match: object,
  location: object,
};

export { PageHero };
