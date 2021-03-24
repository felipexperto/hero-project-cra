import { render } from 'setupTests';
import { Footer } from 'components/Layout';

describe('<Footer />', () => {
  it('should render Footer', () => {
    const { getByTestId } = render(<Footer />);
    const element = getByTestId('HP_FOOTER');
    expect(element).toBeInTheDocument();
  });
});
