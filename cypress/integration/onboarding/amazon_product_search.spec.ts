// /Users/nicholas/Projects/browserstack-examples-cypress
// npx cypress open
// ELECTRON_ENABLE_LOGGING=1 npm run cypress:run cypress/integration/onboarding/amazon_product_search.spec.ts
/// <reference types="Cypress" />

import { debug } from 'console';

describe('Amazon E2E', function () {
  
  it('Visit Amazon.com', () => {

    if (!Cypress.config().baseUrl) throw new Error('You need to provide a url');

    cy.intercept('GET', Cypress.config().baseUrl + '/').as('websiteCheck')
    cy.visit('/');
    cy.wait('@websiteCheck');

  })
  
  it('Search iPhone X', function () {

    cy.on('uncaught:exception', (err, runnable) => {
      return false  
    })    
    cy.get('#nav-search-bar-form', { timeout: 30000 }).should('be.visible').click({ force: true }).type('iPhone 14' + '{enter}');
    cy.get('#nav-search-submit-button').click();



  })  

  it('Select iOs on Cell Phone Operating System filter', () => {

    cy.get(`[aria-label="iOS"]`).should('exist')
    cy.get(`[aria-label="iOS"]`).click
    cy.wait(3000);

  })

  it('Price Sort High to Low', function () {

    cy.get('#s-result-sort-select', { timeout: 30000 }).select('price-desc-rank', { force: true }).click
    cy.wait(3000)

  })
  
  it('Display a list in your console of the search results', () => {

    cy.get('.s-main-slot.s-result-list.s-search-results.sg-row').as('productGrid').should('be.exist');
    cy.get('@productGrid').find('[data-component-type="s-search-result"]').as('productItems').should('be.exist');

    // in test
    cy.task('log', 'This will be output to the terminal')


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
    // https://stackoverflow.com/questions/65439936/how-to-iterate-over-and-test-different-child-elements-within-an-element-in-cypre
    // https://stackoverflow.com/questions/59184571/how-to-save-a-variable-text-to-use-later-in-cypress-test

    cy.get('@productGrid').each(($Product) => {
      
        cy.get('@productItems').each(($el) => {
          cy.log(`Product Item`)
          const Product = $el
            cy.log(`Product Text`)
            cy.wrap(Product)
              .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')
              .invoke('text')
              .as('productText')
              .should('be.exist')
              .then(() => {
                // now capture it again
                const productItemText = (Product.text())
                cy.wrap(productItemText).as('productItemText')
                // cy.task('consoleLog', { name: productItemText, price: 'World', link: 'Awesome' })
              })
              cy.get('@productItemText').then(productItemText => {
                cy.task('log', productItemText)
              });
              
              const task_object = { name: 'productname', price: 'productItemText', link: 'linktext' }
              cy.wrap(task_object).as('task_object')
              cy.get('@task_object').then(task_object => {
                  cy.task('consoleLog', task_object)
               });             

              // cy.wrap(Product)
            //   .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')
            //   .first()
            //   .invoke('attr', 'href')
            //   .as('productLink')
            //   .then(() => {
            //     // now capture it again
            //     const productItemLink = (Product.text())
            //     cy.task('consoleLog', { name: 'productItemText', price: 'World', link: productItemLink })
            //   })
 
            // cy.log(`Product Price`)
            // cy.wrap(Product)
            //   .find('.a-price-whole')
            //   .as('productPrice')
            //   .invoke('text')
            //   .then(cy.log)
            // cy.log(`Product Image`)
            // cy.wrap(Product)
            //   .find('.s-image')
            //   .as('productImage')
            //   .invoke('text')
            //   .then(cy.log)
            })          
        }
    )

  })

});
