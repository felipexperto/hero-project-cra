import { render } from 'setupTests';
import { Toggle } from 'components/UI';

describe('<Toggle />', () => {
  it('should render Toggle', () => {
    const { getByTestId } = render(<Toggle />);
    const element = getByTestId('HP_TOGGLE');
    expect(element).toBeInTheDocument();
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<Toggle active={false} />);
    const element = getByTestId('HP_TOGGLE');
    expect(element.getAttribute('data-active')).toBe('false');
  });
});
