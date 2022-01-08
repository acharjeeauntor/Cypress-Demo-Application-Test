/// <reference types="cypress"/>

describe('Alert Message', () => {
    it('Verify alert message', () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//button[normalize-space()='Click for JS Alert']").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm', () => true);
       

        cy.xpath("//p[@id='result']").contains('You successfully clicked an alert')
    })

    it('Verify the confirm message with OK',()=>{
        cy.xpath("//button[normalize-space()='Click for JS Confirm']").click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })
        cy.on('window:confirm', () => true);
        cy.get('#result').contains('You clicked: Ok')
    })


    it('Verify the confirm message with cancel',()=>{
        cy.xpath("//button[normalize-space()='Click for JS Confirm']").click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })
        cy.on('window:confirm', () => false);
        cy.get('#result',{timeout:6000}).contains('You clicked: Cancel')
    })
})