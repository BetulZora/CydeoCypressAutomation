/// <reference types = "cypress" />

// NOTE: NO XPATH LOCATORS IN CYPRESS. USE CSS SELECTORS

// create a describe block
describe('Context: My First Tests', ()=> {

beforeEach(() => {
cy.clearCookies(); 
cy.visit('/login');
})

it('Lets Log In', ()=> {
    //by css locator
    cy.get("input[name='username']").type("CydeoStudent");
    //every statement creates and object to be interacted with.
    //and next comman makes operation to the object created at the previous statement
    //very easy to chain commands
    
    cy.get("[type = 'text']").clear(); // clear what was written there
    
    
   // cy.get("input[name='password']").type("CydeoStudent");

    // use the same syntax to find more than one element

    // use the tag name to find the two input boxes
    // each keyword helps assign keywords to three aspects of each item
    // each initiates a kind of a loop in the background
    cy.get("input").each((item, index, list)=>{ 
        //assert the length of the list is 2
        // the list created above has length two
        expect(list).to.have.length(2); // this is called an EXPLICIT assertion
        //check attribute type
        expect(item).to.have.attr("type");
    }) 

    //ALL locators
    //by attribute name in square brackets
    cy.get('[type]');

    // by class name after .
    cy.get('.btn.btn-primary');

    // by id after #
    cy.get('#wooden_spoon');

    // there is no xpath, there is a different approach
    // this instructs to find all button tags and among them choose the one with text containing Login
    cy.get('button').should('contain','Login').click();




})

// to run in headless mode use command: npx cypress run --spec .\cypress\e2e\locators.cy.js
// without the --spec part it will run everything in headless mode

//will record the simulation as a video that is shareable with team
// it is preferable to turn off the video recording go to cypress.config.js

it('Check finding elements by traveling through DOM', () => {
// DOM document object model

//travel to find the login button
// find the parent tag and within that find the login button
//locate username box- go to parent form -then find button

cy.get('input[name="username"]').type("hello world!").parents('form').find('button').should('contain','Login').click();
// this makes it find an input with attribute username, then go to it parent which is form. find a child with button tag and choose the one that contains Login as text.

});

it.only('Check Different Type of Assertions', () =>{

    //Cypress bundles assertions provided by Chai, Sinon and jQuery libraries

    //Should Assertion
    // verify button tag has login text and class of ....
    //Chai-jQuery library has should method
    //Should performs the assertion directly on the object itself
    cy.get('#wooden_spoon')
    .should('contain','Login')
    .and('have.class','btn btn-primary');

    //expect assertion / explicit assertion
    //creates a test subject then implements methods on that subject
    //testing the samething
    cy.get('#wooden_spoon').then((btnelement) => {
        expect(btnelement).to.have.text('Login');
        expect(btnelement).to.have.class('btn btn-primary');
    }    )
})


})