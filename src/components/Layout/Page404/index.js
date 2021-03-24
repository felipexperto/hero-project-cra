import { Link } from 'react-router-dom';

import { Container } from 'components/UI';
import Miranha from 'images/gifs/miranha.webp';
import * as S from './styles';

const Page404 = () => {
  return (
    <S.WrapperPage404 data-testid="HP_PAGE_404">
      <Container as="main" alignment="column">
        <S.Title>Oops!</S.Title>
        <S.Subtitle>Página não encontrada :(</S.Subtitle>
        <img src={Miranha} alt="Homem-Aranha batendo no computador sem resultados" />
        <div>
          <Link to={'/'} data-anchor="home" title="Voltar para a home">
            Voltar para a home
          </Link>
        </div>
      </Container>
    </S.WrapperPage404>
  );
};

export { Page404 };
