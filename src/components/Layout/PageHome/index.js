import { Container } from 'components/UI';
import { Footer, Header, SectionHeroes } from 'components/Layout';
import * as S from './styles';

const PageHome = () => {
  return (
    <S.WrapperPageHome>
      <Header />
      <Container as="main">
        <SectionHeroes />
      </Container>
      <Footer />
    </S.WrapperPageHome>
  );
};

export { PageHome };
