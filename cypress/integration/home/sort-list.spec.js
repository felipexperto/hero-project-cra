describe('Ordenar heróis/heroínas por nome', () => {
  before(() => {
    cy.visit('/');
  });

  it('Confere a existência do botão de ordenar', () => {
    cy
      .get('[data-testid="HP_BUTTON_ORDER"]')
      .should('be.visible')
  });

  it('Confere a existência da lista', () => {
    cy
      .get('[data-testid="HP_LIST_HEROES"]')
      .should('be.visible')
  });

  it('Clica no botão e confere a ordenação da lista', () => {
    const jQuery = Cypress.$;

    cy
      .get('[data-testid="HP_BUTTON_ORDER"]')
      .click()
      .should('have.attr', 'data-active', 'ativado');

    cy
      .getHeroesFromList((items) => {
        const heroesList = [];
        jQuery(items).each(function () {
          heroesList.push(jQuery(this).find('> a').attr('title'));
        });
        const isListOrdered = !!heroesList.reduce((n, item) => n !== false && item >= n && item);
        return isListOrdered;
      })
      .then((isListOrdered) => {
        expect(isListOrdered).to.eq(true)
      });
  });
});
