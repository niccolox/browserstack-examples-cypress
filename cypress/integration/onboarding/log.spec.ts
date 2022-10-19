// /Users/nicholas/Projects/browserstack-examples-cypress
// npx cypress open
// ELECTRON_ENABLE_LOGGING=1 npm run cypress:run cypress/integration/onboarding/amazon_product_search.spec.ts
/// <reference types="Cypress" />

import { debug } from 'console';

describe('W3C', function () {
  
  it('Visit W3C', () => {

    cy.on('uncaught:exception', (err, runnable) => {
      return false  
    })    
    cy.visit('https://www.w3.org/');

    cy.get(".unit.size1on3.lastUnit").then(($span) => {

      // $span is the object that the previous command yielded
      const creditBalance = $span.text();
      cy.log(creditBalance);
      cy.task('hello', { greeting: creditBalance, name: 'World', feeling: 'Awesome' })
      
     })
 
 });
  

});
