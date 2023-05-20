/// <reference types = "cypress" />


describe('Context: My First Tests', () => {
   
    beforeEach('Navigate to Upload Page', () => {
  
      cy.clearCookies(); // Like to clear cookies for this.
      cy.visit('/upload'); // this end point will be added to the baseURL defined in cypress.config.js json object
    });


    it('check upload action', () => {
        //locator for choose file button
        cy.get('input#file-upload').attachFile('whyPicture.png');
        // click on upload button
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').then(()=> {
            cy.contains('whyPicture.png').should('be.visible');
        })





    });
  

  });