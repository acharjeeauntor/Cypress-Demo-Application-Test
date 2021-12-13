/// <reference types="cypress"/>


describe('Fixtures Test', () => {


    // beforeEach(()=>{
    //  cy.fixture('example').as('data')
    // })

    // beforeEach(()=>{
    //  cy.fixture('loginData/login.json').as('data')
    // })


    it('Fixtures Test using json data ', function () {
        cy.visit("https://admin-demo.nopcommerce.com/")
        cy.get("#Email").clear().type(this.data.email)
        cy.get("#Password").clear().type(this.data.password)
        cy.get("button[type=submit]").click()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })
})