/// <reference types="cypress"/>


// function ll (email,password){
//     cy.visit("https://admin-demo.nopcommerce.com/")
//     cy.get("#Email").clear().type(email)
//     cy.get("#Password").clear().type(password)
//     cy.get("button[type=submit]").click()
// }

describe('Custom Command', () => {

    it('verify user can login to the application or not', () => {
        cy.login('admin@yourstore.com', 'admin')
       // ll('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })

    it('Add User...', () => {
        cy.login('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
        cy.log("Add User TestDone")
    })

    it('Delete User....', () => {
        cy.login('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
        cy.log("Delete User TestDone")
    })
})