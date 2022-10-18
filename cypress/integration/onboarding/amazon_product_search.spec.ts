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

    cy.get('@productGrid').each(($Product) => {

        cy.get('@productItems').each(($el) => {
          cy.log(`Product Item`)
          const Product = $el
            cy.log(`Product Text`)
            cy.wrap(Product)
              .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').as('productText').invoke('text').then(console.log)
            cy.log(`Product Link`)
            cy.wrap(Product)
              .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').first().invoke('attr', 'href').as('productLink').then(console.log)
            cy.log(`Product Price`)
            cy.wrap(Product)
              .find('.a-price-whole').as('productPrice').invoke('text').then(console.log)
            cy.log(`Product Image`)
            cy.wrap(Product)
              .find('.s-image').as('productImage').invoke('text').then(console.log)
          })          
        }
    )

  })

});
