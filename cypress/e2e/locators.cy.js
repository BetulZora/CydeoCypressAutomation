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
        expect(list).to.have.length(2); 
        //check attribute type
        expect(item).to.have.attr("type");
    }) 



})



})