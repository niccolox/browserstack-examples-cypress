// /Users/nicholas/Projects/browserstack-examples-cypress
// npx cypress open
// ELECTRON_ENABLE_LOGGING=1 npm run cypress:run cypress/integration/onboarding/amazon_product_search.spec.ts
/// <reference types="Cypress" />

import { debug } from 'console';
import Search from '../../pageObjects/search'

describe('Amazon Checker', function () {

  it('Display a list in your console of the search results', () => {
    
    if (true) {
        cy.intercept('GET', Cypress.config().baseUrl + '/').as('websiteCheck')
        cy.visit('/');
        cy.wait('@websiteCheck');    
      } else {
        // do something else
      }   

  })

});
