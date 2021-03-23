describe('Executa busca por herói', () => {
  before(() => {
    cy
      .visit('/')
      .wait(3000);
  });

  const hero = 'Wolverine';

  it('Confere a existência do campo de busca', () => {
    cy
      .get('[data-testid="HP_SEARCH"]')
      .should('be.visible')
  });

  it('Digita no campo de busca e confere o valor digitado', () => {

    cy
      .get('[data-testid="HP_SEARCH"] input[type="search"]')
      .click()
      .type(hero)
      .should('have.value', hero)
      .wait(3000);
  });

  it('Procura por ocorrências do herói/heroína na lista', () => {
    const jQuery = Cypress.$;

    cy
      .getHeroesFromList((items) => {
        const heroesList = [];
        jQuery(items).each(function () {
          heroesList.push(jQuery(this).find('> a').attr('title'));
        });
        const isHeroOnTheList = heroesList.includes(hero);
        return isHeroOnTheList;
      })
      .then((isHeroOnTheList) => {
        expect(isHeroOnTheList).to.eq(true)
      });

  });
});
