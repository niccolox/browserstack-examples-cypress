// /Users/nicholas/Projects/browserstack-examples-cypress
// npx cypress open
// ELECTRON_ENABLE_LOGGING=1 npm run cypress:run cypress/integration/onboarding/amazon_product_search.spec.ts
/// <reference types="Cypress" />

import { debug } from 'console';
import Search from '../../pageObjects/search'
  
  it('Display a list in your console of the search results', () => {
    const productUrl = 'https://www.amazon.com/s?k=iPhone+14&i=mobile&rh=n%3A7072561011%2Cp_n_feature_twenty_browse-bin%3A17881878011&s=price-desc-rank&dc&ds=v1%3Am7NJrLWeN1wqzZ4M9Hjxuz3D%2Bm7DK9lKetcXpaf3vVQ&qid=1666028120&rnid=17881875011&ref=sr_st_price-desc-rank'
    cy.get('@productUrl').should('exist');    

    cy.get('.s-main-slot.s-result-list.s-search-results.sg-row').as('productGrid').should('be.exist');
    cy.get('@productGrid').find('[data-component-type="s-search-result"]').as('productItems').should('be.exist');

    cy.get('@productGrid').each(($Product) => {

        cy.get('@productItems').each(($el) => {
          cy.log(`Product Item`)
          const Product = $el
            cy.log(`Product Text`)
            cy.wrap(Product)
              .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').as('productText').invoke('text').then(cy.log)
            cy.log(`Product Link`)
            cy.wrap(Product)
              .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').first().invoke('attr', 'href').as('productLink').then(cy.log)
            cy.log(`Product Price`)
            cy.wrap(Product)
              .find('.a-price-whole').as('productPrice').invoke('text').then(cy.log)
            cy.log(`Product Image`)
            cy.wrap(Product)
              .find('.s-image').as('productImage').invoke('text').then(cy.log)
          })          
        }
    )

    // try {
    //   //expect(imageOcrText).toContain(searchMatchTerm)
    //   true == true;
    //   (_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'passed',reason: 'Title matches defined searched term from OCR '}})}`);
    // } catch {
    //   await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'failed',reason: 'Title did not match'}})}`);
    // }    

     

  })

});
