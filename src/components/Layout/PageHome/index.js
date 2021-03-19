import { Container } from 'components/UI';
import { Footer, Header } from 'components/Layout';

const PageHome = () => {
  return (
    <>
      <Header />
      <Container as="main">
        <h2>HOME</h2>
      </Container>
      <Footer />
    </>
  );
};

export { PageHome };
