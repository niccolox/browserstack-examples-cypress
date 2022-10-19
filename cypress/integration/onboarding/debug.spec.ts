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

describe('Amazon Debug', function () {

  beforeEach(() => {
    cy.visit('https://www.amazon.com/s?k=iPhone+14&i=mobile&rh=n%3A7072561011%2Cp_n_feature_twenty_browse-bin%3A17881878011&s=price-desc-rank&dc&ds=v1%3AO9FWSDiyPJ9qSSoglZOXgQx4htEKLUAe%2BCeD1bZP8Mg&crid=3AP80M6F9J0QU&qid=1666142998&rnid=17881875011&sprefix=iphone+14%2Caps%2C169&ref=sr_st_price-desc-rank')
  }) 
  
  it('Display a list in your console of the search results', () => {

    // define product grid of search results
    cy.get('.s-main-slot.s-result-list.s-search-results.sg-row').as('productGrid').should('be.exist');
    // define product items from product grid
    cy.get('@productGrid').find('[data-component-type="s-search-result"]').as('productItems').should('be.exist');


    cy.get('@productGrid').each(($Product) => {

          cy.get('@productItems').each(($el, index, $list) => {

            const Product = $el

            cy.get('@productItems')
            .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')
            .as('productItemsTextAlias')
            .should('be.exist')
            .invoke('text')
            .then((productItemsTextAlias => {
              let productname = productItemsTextAlias;
              cy.wrap(productname).as('productname')
            }));

            cy.get('@productItems')
            .find('.a-price-whole')
            .as('productItemsPriceAlias')
            .should('be.exist')
            .invoke('text')
            .then((productItemsPriceAlias => {
              let pricetext = productItemsPriceAlias;
              cy.wrap(pricetext).as('pricetext')
            }))

            // @todo bind the productname, producttext, linktext from the functions above and pass them to the consoleLog task_object

            const task_object = { name: 'productname', price: 'pricetext', link: 'linktext' }
            cy.wrap(task_object).as('task_object')
            cy.get('@task_object').then(task_object => {
                cy.task('consoleLog', task_object)
             });              
       
          })
    })          

  })

});
