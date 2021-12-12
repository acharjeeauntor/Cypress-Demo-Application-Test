/// <reference types="cypress"/>

describe('demo.automationtesting.in', () => {
    it('Web page back-Forward-reload Test', () => {
        cy.visit("http://demo.automationtesting.in")
        cy.get("#btn2").should('be.visible').should("be.enabled").click()
        cy.go('back')
        cy.title().should('eq','Index')
        cy.go('forward')
        cy.title().should('eq','Register')
        cy.reload()
    })
})