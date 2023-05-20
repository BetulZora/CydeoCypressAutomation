/// <reference types = "cypress" />

describe('Alerts in Cypress Test Environment', { baseUrl: 'https://demoqa.com' }, () => {
    beforeEach(() => {
      // run before each test case, beforeMethod in TestNG
      cy.clearCookies();
      cy.visit('/alerts');
    });
    
    it('Check alert confirmation', () => {
      cy.get('#confirmButton').click();
    });
    
  });
    
  