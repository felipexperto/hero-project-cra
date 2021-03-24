import { render, screen } from 'setupTests';
import { ListHeroes } from 'components/Layout';
import { favorites, itemsArr } from './ListHeroes.mock';

describe('<ListHeroes />', () => {
  const toggleHeroFavorites = () => {};
  const isHeroAmongFavorites = () => false;

  it('should render ListHeroes', () => {
    const { getByTestId } = render(
      <ListHeroes
        favorites={favorites}
        toggleHeroFavorites={toggleHeroFavorites}
        isHeroAmongFavorites={isHeroAmongFavorites}
        isLoading={false}
      />
    );
    const element = getByTestId('HP_LIST_HEROES');
    expect(element).toBeInTheDocument();
  });

  it('should render three heroes', () => {
    const list = render(
      <ListHeroes
        itemsArr={itemsArr}
        favorites={favorites}
        toggleHeroFavorites={toggleHeroFavorites}
        isHeroAmongFavorites={isHeroAmongFavorites}
        isLoading={false}
      />
    );
    const items = list.container.querySelectorAll('li');
    expect(items.length).toEqual(3);
  });

  it('should render Loader', () => {
    render(
      <ListHeroes
        favorites={favorites}
        toggleHeroFavorites={toggleHeroFavorites}
        isHeroAmongFavorites={isHeroAmongFavorites}
        isLoading={true}
      />
    );
    const element = screen.queryByText('Buscando heróis...');
    expect(element).toBeInTheDocument();
  });
});
