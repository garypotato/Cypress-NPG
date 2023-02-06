/// <reference types="Cypress"/>

describe('npdata.net.au', () => {
  beforeEach(() => {
    // cy.visit('cypress/index.html');
    cy.visit('/login');

    // variables
    cy.url().as('url');
    // cy.get('@url');

    // cy.get('#username').type('63');
    // cy.get('#password').type('garyC');

    // use of fixture folder
    cy.fixture('npdUsers').then(users => {
      cy.get('#username').type(users[0].userId);
      cy.get('#password').type(users[0].password);
      cy.get('.jss66').check();
      cy.contains('LOGIN').click();
    });

    cy.fixture('npdUsers').as('user');
  });

  it('tes log in', function () {
    cy.title().should('contain', 'National Property Data');

    cy.log(this.url);

    // use of others command
    const person = {
      name: 'Gary',
      des: 'handsome',
    };
    cy.wrap(person).should('have.a.property', 'name');
    cy.wrap(person).should('have.a.property', 'des');
  });

  afterEach(() => {
    cy.clearCookie('t');
    cy.get('[data-testid="headerMenuButton"] > .MuiButton-label').click();
    cy.contains('Log Out').click();
  });
});

describe('Text Case 2', () => {
  it('I love cypress', () => {
    cy.log('I love cypress');
  });
});
