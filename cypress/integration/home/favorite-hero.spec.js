describe('Escolhe um herói/heroína dentre os itens da lista atual para favoritar', () => {
  before(() => {
    cy.visit('/');
    cy.clearHeroesLocalStorage();
  });

  it('Confere a existência da lista', () => {
    cy
      .get('[data-testid="HP_LIST_HEROES"]')
      .should('be.visible')
  });

  it('Confere a existência do botão de favoritos', () => {
    cy
      .get('[data-testid="HP_BUTTON_FAVORITE"]')
      .should('be.visible');
  });


  it('Favoritar um herói/heroína', () => {
    const jQuery = Cypress.$;

    cy
      .getHeroesFromList((items) => {
        const heroesList = [];
        jQuery(items).each(function () {
          heroesList.push(jQuery(this).data('heroid'));
        });
        const selectedHero = heroesList[Math.floor(Math.random() * items.length)];
        return selectedHero;
      })
      .then((selectedHero) => {
        cy
          .get(`[data-heroid=${selectedHero}]`)
          .find('button')
          .click();

        cy
          .get('[data-testid="HP_BUTTON_SHOW_FAVORITES"]')
          .click();

        cy
          .get(`[data-heroid=${selectedHero}]`)
          .should('be.visible');
      });
  });
});
