import { render } from 'setupTests';
import { Search } from 'components/UI';

describe('<Search />', () => {
  it('should render Search properly', () => {
    const { getByTestId } = render(<Search />);
    const element = getByTestId('HP_SEARCH');
    expect(element).toBeInTheDocument();
  });

  it('should render input', () => {
    const { getByTestId } = render(<Search />);
    const element = getByTestId('HP_SEARCH_INPUT');
    expect(element).toBeInTheDocument();
  });

  it('should render button', () => {
    const { getByTestId } = render(<Search />);
    const element = getByTestId('HP_SEARCH_BUTTON');
    expect(element).toBeInTheDocument();
  });

  it('should button be disabled', () => {
    const { getByTestId } = render(<Search disabled={true} />);
    const element = getByTestId('HP_SEARCH_BUTTON');
    expect(element.hasAttribute('disabled')).toBe(true);
  });

  it('should input be disabled', () => {
    const { getByTestId } = render(<Search disabled={true} />);
    const element = getByTestId('HP_SEARCH_INPUT');
    expect(element.hasAttribute('disabled')).toBe(true);
  });
});
