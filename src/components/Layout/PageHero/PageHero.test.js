import { render } from 'setupTests';
import { PageHero } from 'components/Layout';

describe('<PageHero />', () => {
  it('should render PageHero properly', () => {
    const { getByTestId } = render(<PageHero match={{ params: { heroId: 1009149 } }} />);
    const element = getByTestId('HP_PAGEHERO');
    expect(element).toBeInTheDocument();
  });
});
