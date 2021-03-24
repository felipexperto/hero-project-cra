import { render } from 'setupTests';
import { Page404 } from 'components/Layout';

describe('<Page404 />', () => {
  it('should render Page404', () => {
    const { getByTestId } = render(<Page404 />);
    const element = getByTestId('HP_PAGE_404');
    expect(element).toBeInTheDocument();
  });
});
