// /Users/nicholas/Projects/browserstack-examples-cypress
// npx cypress open
// ELECTRON_ENABLE_LOGGING=1 npm run cypress:run cypress/integration/onboarding/amazon_product_search.spec.ts
/// <reference types="Cypress" />

import { debug } from 'console';


describe('Localhost Product Grid Debug', function () {

  beforeEach(() => {
    cy.visit('http://localhost:8000')
  }) 
  
// https://stackoverflow.com/questions/59184571/how-to-save-a-variable-text-to-use-later-in-cypress-test

// it('Current Port change', () => {
//   cy.get('#viewport').find('div[id=message]').then(message => {
//     let wags = message;
//     cy.wrap(wags).as('wags')
//   });

//   cy.get('@wags').then(wags => {
//      expect(wags).to.contain("Portsmouth")
//   });
// });

  it('Product Names', () => {

    cy.get('.product-grid')
      .as('productGrid').should('be.exist');
    // define product items from product grid
    cy.get('@productGrid')
    .find('.product-item')
    .as('productItems').should('be.exist');

    // cy.get('@productItems')
    // .find('.product-name')
    // .as('productItemsTextAlias')
    // .should('be.exist')
    // .invoke('text')
    // .then((productItemsTextAlias => {
    //   let productname = productItemsTextAlias;
    //   cy.wrap(productname).as('productname')
    //   // cy.log('Product product-name')
    //   cy.task('log', productname)
    // }));

    cy.get('@productItems')
    .find('.product-link')
    .as('productItemsLinkAlias')
    .should('be.exist')
    .invoke('text')
    .then((productItemsLinkAlias => {
      let productlink = productItemsLinkAlias;
      cy.wrap(productlink).as('productlink')
      // cy.log('Product product-link')
      cy.task('logmessage', productlink)   
    }));   
    
  })

});
