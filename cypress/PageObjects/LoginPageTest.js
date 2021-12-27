/// <reference types="cypress"/>

// 1st way

// class LoginPage {
//     visitToTheSite() {
//         cy.visit("https://admin-demo.nopcommerce.com/")
//     }
//     fillEmailField(email) {
//         const emailField = cy.get("#Email")
//         emailField.clear()
//         emailField.type(email)
//     }
//     fillPasswordField(password) {
//         const passwordField = cy.get("#Password")
//         passwordField.clear()
//         passwordField.type(password)
//     }
//     clickOnLoginButton() {
//         const btnElement = cy.get("button[type=submit]")
//         btnElement.click()
//     }
// }
// export default LoginPage



// 2nd Way

export class LoginPage {
    visitToTheSite() {
        cy.visit("https://admin-demo.nopcommerce.com/")
    }
    fillEmailField(email) {
        const emailField = cy.get("#Email")
        emailField.clear()
        emailField.type(email)
    }
    fillPasswordField(password) {
        const passwordField = cy.get("#Password")
        passwordField.clear()
        passwordField.type(password)
    }
    clickOnLoginButton() {
        const btnElement = cy.get("button[type=submit]")
        btnElement.click()
    }
}