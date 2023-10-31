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
  
  describe('Test Login Functionality on Different Screens', () => {
    screenSizes.forEach((screenSize) => {
      it(`Checking Login with Valid credentials on ${screenSize}`, () => {
        cy.viewport(screenSize); // Set the viewport size
        cy.visit('https://bsm-admin-abnj.vercel.app/');
        cy.get('#email').type('eayzay001@gmail.com');
        //cy.get('#user_type').click();
        cy.get('#user_type').select('Manager');
        cy.get('#password').type('1fb6a547');
        cy.get(':nth-child(6) > .flex').click();
        cy.wait(10000);
    });
    
    it(`Invalid Login Credentials on ${screenSize}`, () => {
        cy.viewport(screenSize);
        cy.visit('https://bsm-admin-abnj.vercel.app/');
        cy.get('#email').type('tester1@gmail.com');
        cy.get('#user_type').select('Manager');
        cy.get('#password').type('12345678');
        cy.get(':nth-child(6) > .flex').click();
        cy.get(':nth-child(6) > .flex').should('be.visible');
        cy.wait(10000);
        

      })
    });
  });