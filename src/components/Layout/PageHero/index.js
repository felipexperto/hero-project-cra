import { object } from 'prop-types';

import { Footer, Header } from 'components/Layout';

const PageHero = ({ match, location }) => {
  console.log({ match });
  console.log({ location });

  const {
    params: { heroId },
  } = match;

  return (
    <>
      <Header kind="secondary" />
      <main>
        <h1>PageHero</h1>
        <h2>HeroId: {heroId}</h2>
      </main>
      <Footer />
    </>
  );
};

PageHero.propTypes = {
  match: object,
  location: object,
};

export { PageHero };
