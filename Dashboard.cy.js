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
  
  describe('Testing dashboard features', () => {
//     screenSizes.forEach((screensize) => {
//     it(`Dashboard Elements Are Visible on ${screensize}`, () => {
//         cy.viewport(screensize)
//         cy.login()
//         cy.waitUntil(() => {
//           return cy.url().then(url => {
//           return url.includes('https://bsm-admin-abnj.vercel.app/home');
//         });
//       }, { timeout: 20000 }); // Adjust the timeout as needed.

//         cy.contains('Current Bookings').should('be.visible');
//         cy.contains('Current Check In').should('be.visible');
//         cy.contains('Current Orders').should('be.visible');
//         cy.contains('Analytics').should('be.visible');
//         cy.contains('Total Customers').should('be.visible');
//         cy.contains('Total Bookings').should('be.visible');
//         cy.contains('Total Orders').should('be.visible');
//         cy.contains('Current Bookings').should('be.visible');
//         cy.contains('Sales Report').should('be.visible');
//         if (cy.config('viewportWidth') <= 900) {
//             cy.get('.\\-m\\-2\\.5').click();
//             cy.wait(15000)
//             cy.waitUntilParentVisible('.lg\\:flex-col', 'text-white group flex gap-x-3 items-center  p-3 text-[18px] leading-7 font-bold cursor-pointer', 10000);
//             cy.contains('Restaurant').should('be.visible')
//             cy.contains('Bookings').should('be.visible')
//             cy.contains('Check In').should('be.visible')
//             cy.contains('Orders').should('be.visible')
//             cy.contains('Staff').should('be.visible')
//             cy.contains('Promotions & Discounts').should('be.visible')
//             cy.contains('Earnings').should('be.visible')
//           } 
//           else {
//             cy.contains('Restaurant').should('be.visible')
//             cy.contains('Bookings').should('be.visible')
//             cy.contains('Check In').should('be.visible')
//             cy.contains('Orders').should('be.visible')
//             cy.contains('Staff').should('be.visible')
//             cy.contains('Promotions & Discounts').should('be.visible')
//             cy.contains('Earnings').should('be.visible')
//           }
        
       
//     });
// })
    
    // it('Testing functionality of Menu Buttons', () => {
    //     cy.viewport('macbook-16')
    //     cy.login()
    //     cy.waitUntil(() => {
    //     return cy.url().then(url => {
    //     return url.includes('https://bsm-admin-abnj.vercel.app/home');
    //     });
    //     })
        
    //     cy.contains('Restaurant').should('be.visible').click()
    //     cy.contains('Table Management').should('be.visible')
    //     cy.contains('Bookings').should('be.visible').click()
    //     cy.contains('Booking Management').should('be.visible')
    //     cy.get('ul > :nth-child(4) > .text-white').click()
    //     cy.contains('Up coming Check-In').should('be.visible')
    //     cy.get(':nth-child(5) > .text-white').click()
    //     cy.contains('Current Orders').should('be.visible')
    //     cy.get(':nth-child(6) > .text-white').click()
    //     cy.contains('Total Staff').should('be.visible')
    //     cy.get(':nth-child(7) > .text-white').click()
    //     cy.contains('Active Promo Code').should('be.visible')
    //     cy.get(':nth-child(8) > .text-white').click()
    //     cy.contains('Payment Details').should('be.visible')

    // })

    it('Testing functionality of Current Bookings section on Dashboard', () => {
        cy.viewport('macbook-16')
        cy.login()
        cy.waitUntil(() => {
        return cy.url().then(url => {
        return url.includes('https://bsm-admin-abnj.vercel.app/home');
        });
        })
        
        cy.contains('Current Bookings').should('be.visible')
        cy.get('.md\\:flex > .relative > .block').type('khan');
        cy.wait(10000)
        cy.contains(77768).should('be.visible')
        //  Testing Pagination Scroll Buttons

        cy.get('[src="/static/media/nextIcon.46dd5919c4bc6de5dec030ce61786087.svg"]').click()
        cy.contains('2 /').should('be.visible')
        cy.get('.grayscale-0').click()
        cy.contains('1 /').should('be.visible')
    })
  });
  

  