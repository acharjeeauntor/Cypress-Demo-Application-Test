/// <reference types="cypress"/>

describe('demo.automationtesting.in', () => {
    it('Register form Test (Firstname,Lastname,Address,Gender)', () => {
        cy.visit("http://demo.automationtesting.in")
        cy.get("#btn2").should('be.visible').should("be.enabled").click()
        cy.url().should('include', 'Register')
        cy.get('input[ng-model=FirstName]').should("be.enabled").type("Auntor")
        cy.get('input[ng-model=LastName]').should("be.enabled").type("Acharja")
        cy.get('textarea[ng-model=Adress]').type("Dhaka")
        cy.get('input[value=Male]').should('be.visible').click()
    })


    it('Test Email input field by xpath',()=>{
        cy.xpath("//input[@type='email']").type("acharjeeauntor@gmail.com")
    })

    it('Hobbies checkbox Test', () => {
        cy.get("#checkbox1").check().should('be.checked').and('have.value', 'Cricket')
        cy.get("#checkbox2").check().should('be.checked').and('have.value', 'Movies')
        cy.get("#checkbox3").check().should('be.checked').and('have.value', 'Hockey')

        cy.get("#checkbox1").uncheck().should('not.be.checked')
        cy.get("#checkbox2").uncheck().should('not.be.checked')
        cy.get("#checkbox3").uncheck().should('not.be.checked')

        cy.get("input[type=checkbox]").check(['Cricket', 'Hockey'])

    })


    it('Skills DropDown Test', () => {
        cy.get('#Skills').select('Android').should('have.value', 'Android')
    })

    it('Languages Multi select Box Test', () => {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Hindi').click()
    })

    it('Select Country searchable drop down list Test', () => {
      cy.get('[role=combobox]').click({force:true})
      cy.get('input[role=textbox]').type('ind')
      cy.get('input[role=textbox]').type('{enter}')
      cy.get("[title=India]").contains('India')
    })

    
})



