import logo from './logo.svg';
import * as S from './styles';

function App() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <S.Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.Link>
      </S.Header>
    </S.Wrapper>
  );
}

export { App };
