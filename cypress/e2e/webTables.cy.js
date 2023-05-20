/// <reference types = "cypress" />

describe('CCypress WebTable Tests', {baseUrl: 'https://demoqa.com'}, () => {

  
    beforeEach(() => {
      cy.clearCookies(); // Like to clear cookies for this.
      // this test case is using a different base URL.
      // In this case, define the new baseURL in describe block or it block if test specific
      // after method title write {baseUrl: 'https://demoqa.com'}, between commas
      cy.visit('/webtables');// this end point will be added to the baseURL defined in cypress.config.js json object
    });

    it('Open a web application', () => { //bad practice, demonstration purpose only
        cy.get('.rt-tbody') // asks for the table body
        .contains('.rt-tr-group', 'Alden') // asks for the row that has Alden
        .then((row) => { // store it in a jquery element named row

            //click edit button
            cy.wrap(row).find('[title="Edit"]').click();

            // clear the box and enter new information
            cy.get('#firstName').clear().type('Harvey');
            cy.get('#lastName').clear().type('Specter')
            cy.get('#submit').click();

            // perform the assertions while on the row
            cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Harvey');
            cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Specter');

        })   

    });

    it('Check finding and deleting a record', () => { //bad practice, demonstration purpose only
        cy.get('.rt-tbody')    
        .contains('.rt-tr-group','Alden')
        .then((row) => {
            // click on Delete button for Alden record
            cy.wrap(row).find('[title="Delete"]').click();
        })
        // Assert that table does NOT have Alden record
        cy.get('.rt-tbody').should('not.contain', 'Alden');
        // search for Alden in the body  
        cy.get('#searchBox').type('Alden');
        // Assert that there is no record
        cy.get('.rt-tbody').should('not.contain', 'Alden');
        // No data found element is visible or not
        cy.get('.rt-noData').should('contain','No rows found')
        .should('be.visible');
     });

     it('Check search for different age records', () => { //bad practice, demonstration purpose only
        // define age groups
        const ageGroup = [29, 39, 45, 77];
        // for each age group perform same test scenario
        cy.wrap(ageGroup).each((age) => {
          // type age into search box
          cy.get('#searchBox').clear().type(age);
          // verify if that age exists, second number of records
          cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain', age);
          cy.get('.rt-tbody').contains('.rt-tr-group', age).should('have.length', 1);
        });
      });

      it('Check adding a new record - Bad code practice', () => {
        // click on add button
        cy.get('#addNewRecordButton').click();
        // fill form
        cy.get('#firstName').type('Harvey');
        cy.get('#lastName').type('Specter');
        cy.get('#userEmail').type('specter@example.com');
        cy.get('#age').type('40');
        cy.get('#salary').type('70000');
        cy.get('#department').type('legal');
        cy.get('#submit').click();
        // assert that new record is added
        cy.get('.rt-tbody')
          .contains('.rt-tr-group', 'Harvey')
          .then((row) => {
            cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Harvey');
            cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Specter');
            cy.wrap(row).find('.rt-td').eq(2).should('contain', '40');
            cy.wrap(row).find('.rt-td').eq(3).should('contain', 'specter@example.com');
            cy.wrap(row).find('.rt-td').eq(4).should('contain', '70000');
            cy.wrap(row).find('.rt-td').eq(5).should('contain', 'legal');
          });
      });

      it('Adding a new record - Better Aproach', () => {
        // click on add button
        cy.get('#addNewRecordButton').click();
        cy.fixture('user').then((user) => {
            const columnNames = Object.keys(user.user1); // goes to fixture folder, gets user1 object keys and stores into columnNames Array
            const userData = Object.values(user.user1);
            cy.wrap(columnNames).each((columnName, index) => {
                cy.log(columnName);
                cy.log(userData[index]);
            })
        })
      })
  

  });