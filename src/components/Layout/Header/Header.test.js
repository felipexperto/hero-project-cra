import { render, screen } from 'setupTests';
import { Header } from 'components/Layout';

describe('<Header />', () => {
  const titleContent = 'Explore o Universo';
  const descriptionContent =
    'Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!';

  it('should render Header Primary properly', () => {
    const { getByTestId } = render(<Header variant="primary" />);

    const header = getByTestId('HP_HEADER');
    const logo = getByTestId('HP_LOGO');
    const title = getByTestId('HP_HEADER_TITLE');
    const description = getByTestId('HP_HEADER_DESCRIPTION');

    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(title).toHaveTextContent(titleContent);
    expect(description).toHaveTextContent(descriptionContent);
  });

  it('should render Header Secondary properly', () => {
    const { getByTestId } = render(<Header variant="secondary" />);

    const header = getByTestId('HP_HEADER');
    const logo = getByTestId('HP_LOGO');
    const title = screen.queryByText('HP_HEADER_TITLE');
    const description = screen.queryByText('HP_HEADER_DESCRIPTION');

    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(title).toBeNull();
    expect(description).toBeNull();
  });
});
