import { render, within } from 'setupTests';
import { ButtonFavorite } from 'components/UI';

describe('<ButtonFavorite />', () => {
  it('should render properly', () => {
    const { getByTestId } = render(<ButtonFavorite />);
    const element = getByTestId('HP_BUTTON_FAVORITE');
    expect(element).toBeInTheDocument();
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<ButtonFavorite isDisabled={true} />);
    const element = getByTestId('HP_BUTTON_FAVORITE');
    expect(element.hasAttribute('disabled')).toBe(true);
  });

  it('should have text "Desfavorite este herói"', () => {
    const { getByTestId } = render(<ButtonFavorite isActive={true} />);
    const { getByText } = within(getByTestId('HP_BUTTON_FAVORITE'));
    expect(getByText('Desfavorite este herói')).toBeInTheDocument();
  });
});
