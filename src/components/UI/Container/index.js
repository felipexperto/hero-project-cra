import { bool, oneOf, node } from 'prop-types';

import * as S from './styles';

const Container = (props) => <S.Container {...props} />;

Container.propTypes = {
  /** Define elemento com display:flex e define flex-direction */
  alignment: oneOf(['column', 'row']),

  /** Define o elemento html renderizado */
  as: oneOf(['div', 'main', 'section']),

  /** Define o conteúdo a ser exibido dentro do card */
  children: node,

  /** Define o a largura de 100% */
  fullWidth: bool,
};

Container.defaultProps = {
  as: 'section',
};

export { Container };
