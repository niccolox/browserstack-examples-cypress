// /Users/nicholas/Projects/browserstack-examples-cypress
// npx cypress open
// ELECTRON_ENABLE_LOGGING=1 npm run cypress:run cypress/integration/onboarding/amazon_product_search.spec.ts
/// <reference types="Cypress" />

import { debug } from 'console';

   // https://glebbahmutov.com/blog/powerful-cy-task/
    // https://stackoverflow.com/questions/59626407/cypress-setting-a-variable-from-the-result-of-a-task
    // https://docs.cypress.io/api/commands/task#Arguments
    // https://stackoverflow.com/questions/63120556/how-to-extract-and-use-a-string-value-returned-from-cy-wrap
    // https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Variables
    // https://docs.cypress.io/api/commands/invoke#Syntax
    // https://stackoverflow.com/questions/50730959/how-to-use-values-from-dom-in-cypress-test
    // https://stackoverflow.com/questions/52491253/how-to-get-div-text-value-in-cypress-test-using-jquery
    // https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json
    // https://glebbahmutov.com/blog/powerful-cy-task/
    // https://stackoverflow.com/questions/69264220/get-property-from-json-response-in-cypress
    // https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Closures
    // https://glebbahmutov.com/blog/powerful-cy-task/
    // https://stackoverflow.com/questions/59184571/how-to-save-a-variable-text-to-use-later-in-cypress-test

describe('Localhost Product Grid Debug', function () {

  beforeEach(() => {
    cy.visit('http://localhost:8000')
  }) 
  
  it('Display a list in your console of the search results', () => {

    // define product grid of search results
    cy.get('.product-grid')
      .as('productGrid').should('be.exist');
    // define product items from product grid
    cy.get('@productGrid')
    .find('.product-item')
    .as('productItems').should('be.exist');

        cy.get('@productItems').each(($el, index, $list) => {

            const Product = $el

            cy.get('@productItems')
            .find('.product-name')
            .as('productItemsTextAlias')
            .should('be.exist')
            .invoke('text')
            .then((productItemsTextAlias => {
              let productname = productItemsTextAlias;
              cy.wrap(productname).as('productname')
              cy.task('log', productname)
            }));

            cy.get('@productItems')
            .find('.product-link')
            .as('productItemsLinkAlias')
            .should('be.exist')
            .invoke('text')
            .then((productItemsLinkAlias => {
              let productlink = productItemsLinkAlias;
              cy.wrap(productlink).as('productlink')
            }));         
       
        })
  })

});
