describe('Verifica componentes estipulados pelo layout', () => {
  before(() => {
    cy.visit('/hero/1009351');
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
      .get('[data-testid="HP_TITLE_HERO_NAME"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_PARAGRAPH_DESCRIPTION"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_COMICS"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_LAST_COMIC"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_IMAGE_FEATURED"]')
      .should('be.visible');

    cy
      .get('[data-testid="HP_FOOTER"]')
      .should('be.visible');
  });
});
