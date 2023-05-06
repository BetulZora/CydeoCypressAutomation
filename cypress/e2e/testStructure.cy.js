/// <reference types = "cypress" />

// create a describe block
describe('Context: My First Tests', ()=> {


    //run comman npx cypress open to launch cypress

    // can control execution flow with these blocks
before(()=> {
// runs once before all test casses in this describe block
// it's like the beforeClass in TestNG
})

beforeEach(() => {
// runs before each test case
//functions like the beforeMethod in TestNG
cy.clearCookies(); //Like to clear cookies for this.
})
after(()=>{
// runs once after all tests are finished.
// functions like afterClass in TestNG
})
afterEach(()=>{
// runs after each test case is finished
// functions like the afterMethod in TestNG
})

//create it blocks for testing
// it('testName', ()=>{test block, each execution with ;})
it('Open a web application', ()=> {
//cy.visit('https://practice.cydeo.com/');
cy.visit('/registration_form'); // this end point will be added to the baseURL defined in cypress.config.js json object

cy.get('.nav-link').click();

cy.get('.nav-link').click();


})

})