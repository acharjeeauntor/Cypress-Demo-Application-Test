/// <reference types="cypress"/>


describe('demo.nopcommerce.com', () => {
    it('Verify Add to Cart is working properly or not', () => {
     cy.visit("https://demo.nopcommerce.com/")
     cy.get("#small-searchterms").type("mac")
     cy.get(".search-box-button").click()
     cy.get(".product-box-add-to-cart-button").click()
     cy.get("#product_enteredQuantity_4").clear().type("3")
     cy.get(".add-to-cart-button").click()
     cy.wait(7000)
     cy.get("#topcartlink > a > span.cart-label").click()
     cy.wait(5000)
     cy.get(".product-subtotal").contains("$5,400.00") // Validation point

    })
  })