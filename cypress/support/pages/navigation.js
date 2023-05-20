export class NavigateTo{

    loginPage(){

        cy.visit(Cypress.env('login')); 
        // Cypress.env matches the definition in the () with one defined in the config file
    }


}

export const navigateTo = new NavigateTo();