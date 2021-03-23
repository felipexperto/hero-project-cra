// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getHeroesFromList', (callback) => {
  const list = cy.get('[data-testid="HP_LIST_HEROES"]');
  const heroes = list.find('li');
  heroes.then((items) => callback(items));
});

Cypress.Commands.add('clearHeroesLocalStorage', () => {
  window.localStorage.removeItem('hp_favorite_characters');
});

Cypress.Commands.add('populateLocalStorage', (arr) => {
  window.localStorage.setItem('hp_favorite_characters', JSON.stringify(arr));
});
