describe('How to do API test with Cypress', ()=>{

it('Simple GET request, check status, headers and body', ()=>{

    cy.request({
        // function takes a json object as parameter
        // define the core parts of the HTTP request in object

        method: 'GET',
        // to avoid hardcoding, we will pull this from the config file
        // hardcoded would be https://demoqa.com
        url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`, 

        failOnStatusCode: false
        
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.books[1].title).to.equal('Learning JavaScript Design Patterns');
    })
})

})