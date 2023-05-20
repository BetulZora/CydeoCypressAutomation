class Auth{

// classes are different in JS:
// class name does not have to match the file name
// a file can contain more than one class

login(user_name, password){
    cy.get('[name="username"]').type(user_name);
    cy.get('[name="password"]').type(password);
    cy.get('#wooden_spoon').click();
}

logout(){
    cy.contains('Logout').should('be.visible').click();
}



}


const auth = new Auth(); // this makes an object of Auth

module.exports = {
    auth
}