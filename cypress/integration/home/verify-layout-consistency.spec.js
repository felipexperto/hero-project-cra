describe('Verifica componentes estipulados pelo layout', () => {
  before(() => {
    cy.visit('/');
  });

  it('Acessa a URL da home e verifica a existência dos elementos', () => {

    cy
      .get('[data-testid="HP_APP"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_HEADER"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_LOGO"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_LOGO"]')
      .parent()
      .should('have.attr', 'href', '/')

    cy
      .get('[data-testid="HP_SEARCH"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_BUTTON_ORDER"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_BUTTON_SHOW_FAVORITES"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_LIST_HEROES"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_COUNTER_HEROES"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_BUTTON_FAVORITE"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_FOOTER"]')
      .should('be.visible');
  });
});
