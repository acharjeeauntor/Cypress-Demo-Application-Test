/// <reference types="cypress"/>
describe('Alert Message', () => {
    it('Verify alert message', () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//button[normalize-space()='Click for JS Alert']").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm', () => true);


        // Implicit wait
        // cy.xpath("//p[@id='result']").contains('You successfully clicked an alert')
        cy.xpath("//p[@id='result']").should('contain', 'You successfully clicked an alert').and('contain', 'You successfully clicked an alert')



        // Explicit wait
        assert.equal(4, 4, 'not equal')
        expect(true).to.be.true
        let name = 'auntor'
        expect(name).to.be.equal('auntor')


    })
})