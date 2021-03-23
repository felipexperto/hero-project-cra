describe('Escolhe um herói/heroína dentre os itens da lista atual para ver detalhes', () => {
  before(() => {
    cy.visit('/');
  });

  it('Confere a existência da lista', () => {
    cy
      .get('[data-testid="HP_LIST_HEROES"]')
      .should('be.visible')
  });

  it('Clica no item e é redirecionado', () => {
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
          .click()
          .url()
          .should('include', `/hero/${selectedHero}`)
      });
  });
});
