/// <reference types="cypress"/>

// 1st way

// import loginPage from '../PageObjects/LoginPageTest'
// describe('Login to the application',()=>{
//     it('Login Test',()=>{
//         const lp = new loginPage()
//         lp.visitToTheSite()
//         lp.fillEmailField('admin@yourstore.com')
//         lp.fillPasswordField('admin')
//         lp.clickOnLoginButton()
//         cy.title().should('eq','Dashboard / nopCommerce administration')
//     })
// })


// 2nd way

import {LoginPage} from '../PageObjects/LoginPageTest'
describe('Login to the application',()=>{
    it('Login Test',()=>{
        const lp = new LoginPage()
        lp.visitToTheSite()
        lp.fillEmailField('admin@yourstore.com')
        lp.fillPasswordField('admin')
        lp.clickOnLoginButton()
        cy.title().should('eq','Dashboard / nopCommerce administration')
    })
})