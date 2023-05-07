/// <reference types = "cypress" />


describe('Context: Test Buttons', ()=> {

beforeEach(() => {
cy.clearCookies(); //Like to clear cookies for this.
cy.visit('/multiple_buttons');
})

it('Check Different Button Actions', ()=> {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Click on button two!').should('be.visible');
})


})