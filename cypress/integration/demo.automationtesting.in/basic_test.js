/// <reference types="cypress" />

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//     });

describe("Practice ViewPort,Only,url,log,pause,should-exist,not.exist,debug features of cypress", () => {
    it("Practice the viewport for large screen", () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.viewport(1280, 720)
        cy.contains('Home')
    })

    it("Practice the viewport for Specific Device like iphone-6", () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.viewport('iphone-6')
    })

    // it.only("Practice the 'only' this TC run and 'pause' feature ",()=>{
    //     cy.visit("http://demo.automationtesting.in/Register.html")
    //     cy.get('#submitbtn').click()
    //     cy.pause()
    // })


    it("Practice get 'url' and 'log' feature", () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        //cy.log(cy.url())  // Can not get url this way
        cy.url().then(value => {
            cy.log(value)
            console.log(value)
        })
    })


    it("Practice should('exist') and should('not.exists') feature", () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
       cy.contains('Home').should('exist')
       cy.debug()
       cy.contains('Home').click()
       cy.contains('Home').should('not.exist')
    })

})