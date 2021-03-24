import { render } from 'setupTests';
import { Logo } from 'components/UI';

describe('<Logo />', () => {
  it('should render Logo', () => {
    const { getByTestId } = render(<Logo />);
    const element = getByTestId('HP_LOGO');
    expect(element).toBeInTheDocument();
  });
});
