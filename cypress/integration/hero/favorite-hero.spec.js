describe('Escolhe o herói/heroína como favorito na página de detalhes', () => {
  before(() => {
    cy.visit('/hero/1017100');
    cy.clearHeroesLocalStorage();
  });

  it('Confere a existência do botão de favoritos', () => {
    cy
      .get('[data-testid="HP_BUTTON_FAVORITE"]')
      .should('be.visible');
  });


  it('Favoritar um herói/heroína', () => {
    const hero = '[{"id":1017100,"name":"A-Bomb (HAS)","thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16","extension":"jpg"}}]';

    cy
      .get('[data-testid="HP_BUTTON_FAVORITE"]')
      .click()
      .should(() => {
        expect(localStorage.getItem('hp_favorite_characters')).to.eq(hero);
    });
  });
});
