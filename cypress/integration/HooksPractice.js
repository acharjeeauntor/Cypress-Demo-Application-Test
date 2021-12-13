/// <reference types="cypress"/>

describe('Cypress Hook Practice', () => {

    before(() => {
        cy.log("Setup Test Environment")
    })
    after(() => {
        cy.log("Tear Down Test Environment")
    })
    beforeEach(() => {
        cy.log("Login to the application")
    })
    afterEach(() => {
        cy.log("Logout from the application")
    })

    it('Test abc module', () => {
        cy.log("This is abc module")
    })

    it('Test xyz module', () => {
        cy.log("This is xyz module")
    })

    it('Test 123 module', () => {
        cy.log("This is 123 module")
    })
})