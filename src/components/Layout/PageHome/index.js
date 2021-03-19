import { Container } from 'components/UI';
import { Footer, Header } from 'components/Layout';
import * as S from './styles';

const PageHome = () => {
  return (
    <S.WrapperPageHome>
      <Header />
      <Container as="main">
        <h2>Lista de heróis</h2>
      </Container>
      <Footer />
    </S.WrapperPageHome>
  );
};

export { PageHome };
