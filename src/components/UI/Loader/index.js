import * as S from './styles';

const Loader = () => (
  <S.SpinningLoaderWrapper data-testid="HP_LOADER">
    <S.SpinningLoaderIcon />
  </S.SpinningLoaderWrapper>
);

export { Loader };
