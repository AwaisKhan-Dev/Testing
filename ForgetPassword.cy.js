/// <reference types="cypress" />

const screenSizes = [
    'ipad-2',
    'ipad-mini',
    'iphone-3',
    'iphone-4',
    'iphone-5',
    'iphone-6',
    'iphone-6+',
    'iphone-7',
    'iphone-8',
    'iphone-x',
    'iphone-xr',
    'iphone-se2',
    'macbook-11',
    'macbook-13',
    'macbook-15',
    'macbook-16',
    'samsung-note9',
    'samsung-s10'
  ];

  describe('Test Forget Password Functionality on Different Screen', () => {
    screenSizes.forEach((screensize) => {
        it(`Checking Functionality of forget password button on login screen on ${screensize}`, () => {
            cy.visit('https://bsm-admin-abnj.vercel.app/')
            cy.get('.border-b-\[1px\]').click()
            cy.visit('https://bsm-admin-abnj.vercel.app/forgetpasswordpage')
            cy.find('Reset Password')

        } )

        it(`Valid Reset Password on ${screensize}`, () => { 
            cy.visit('https://bsm-admin-abnj.vercel.app/forgetpasswordpage')
            cy.contains('Reset').should('be.visible')
            cy.get('#email').type('eayzay001@gmail.com')
            cy.get(':nth-child(3) > .flex').click()
            cy.wait(5000)
            cy.get('.underline').click()
            cy.contains('Login').should('be.visible')
            cy.wait(5000)
        })


        it(`InValid Reset Password on ${screensize}`, () => { 
            cy.visit('https://bsm-admin-abnj.vercel.app/forgetpasswordpage')
            cy.contains('Reset').should('be.visible')
            cy.get('#email').type('eayzay0011@gmail.com')
            cy.get(':nth-child(3) > .flex').click()
            cy.contains('does not exist').should('be.visible')
            cy.wait(5000)
            cy.get('.underline').click()
            cy.contains('Login').should('be.visible')
            cy.wait(5000)
        })
    })
  })