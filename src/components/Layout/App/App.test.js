import { render } from 'setupTests';
import { App } from 'components/Layout';

describe('<App />', () => {
  test('should render App', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('HP_APP');
    expect(element).toBeInTheDocument();
  });
});
