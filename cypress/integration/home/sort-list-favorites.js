describe('Escolhe 3 heróis dentre os itens da lista atual para favoritar e ordena alfabeticamente', () => {
  before(() => {
    cy
      .visit('/')
      .wait(1000)
      .clearHeroesLocalStorage();
  });

  const heroes = [
    {
      "id": 1009718,
      "name": "Wolverine",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
          "extension": "jpg"
      }
    },
    {
      "id": 1009313,
      "name": "Gambit",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/40/52696aa8aee99",
          "extension": "jpg"
      }
    },
    {
      "id": 1009268,
      "name": "Deadpool",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99",
          "extension": "jpg"
      }
    }
  ];

  it('Confere a existência da lista', () => {
    cy
      .get('[data-testid="HP_LIST_HEROES"]')
      .should('be.visible')
  });

  it('Confere a existência do botão de favoritos', () => {
    cy
      .get('[data-testid="HP_BUTTON_SHOW_FAVORITES"]')
      .should('be.visible');
  });


  it('Exibe a lista de favoritos e ordena alfabeticamente A-Z', () => {
    const jQuery = Cypress.$;

    cy
      .populateLocalStorage(heroes)
      .reload();

    cy
      .get('[data-testid="HP_BUTTON_SHOW_FAVORITES"]')
      .click()
      .wait(1500);

    cy
      .get('[data-testid="HP_BUTTON_ORDER"]')
      .click()
      .wait(1500);

    cy
      .getHeroesFromList((items) => {
        const heroesList = [];
        jQuery(items).each(function () {
          heroesList.push(jQuery(this).data('heroid'));
        });
        const isListOrdered = !!heroesList.reduce((n, item) => n !== false && item >= n && item);
        return isListOrdered;
      })
      .then((isListOrdered) => {
        expect(isListOrdered).to.eq(true)
      });
  });
});
