
# Browserstack Amazon Automate Onboarding Assignment in Cypress

## On Prem

```
npm run on-prem-onboarding
```

## Browserstack Automate Browser Single

```
npm run bstack-single-onboarding
```

## Local Debugging

```
ELECTRON_ENABLE_LOGGING=1 npm run cypress:run cypress/integration/onboarding/amazon_product_search.spec.ts
```
## Cypress in Local Interactive mode

```
npx cypress open
npx cypress open | grep "Greeting"
```

## Amazon Product Search
Assignment Duration: 3 hours

1. Go to www.amazon.com. 

cypress/integration/onboarding
```typescript
  it('Visit Amazon.com', () => {

    if (!Cypress.config().baseUrl) throw new Error('You need to provide a url');

    cy.intercept('GET', Cypress.config().baseUrl + '/').as('websiteCheck')
    cy.visit('/');
    cy.wait('@websiteCheck');

  })
```

2. Search for the product "iPhone X". 


cypress/integration/onboarding
```typescript
  it('Search iPhone X', function () {

    cy.on('uncaught:exception', (err, runnable) => {
      return false  
    })    
    cy.get('#nav-search-bar-form', { timeout: 30000 }).should('be.visible').click({ force: true }).type('iPhone 14' + '{enter}');
    cy.get('#nav-search-submit-button').click();

  })  
```

3. Apply the following filters to the results:  

4. Cell Phone Operating System: iOS

cypress/integration/onboarding
```typescript
  it('Select iOs on Cell Phone Operating System filter', () => {

    cy.get(`[aria-label="iOS"]`).should('exist')
    cy.get(`[aria-label="iOS"]`).click
    cy.wait(3000);

  })
```


5. Price Sort: High to Low

cypress/integration/onboarding
```typescript
  it('Price Sort High to Low', function () {

    cy.get('#s-result-sort-select', { timeout: 30000 }).select('price-desc-rank', { force: true }).click
    cy.wait(3000)

  })
```

6. Display a list in your console of the search results. Each list item should contain the following:
   * Product name
   * Price
   * Link to the product details page

@todo OPEN QUESTION: how to print to console on Browserstack in Cypress? 
@todo print product list below to console

cypress/integration/onboarding
```typescript
  it('Display a list in your console of the search results', () => {
    cy.get('.s-main-slot.s-result-list.s-search-results.sg-row').as('productGrid').should('be.exist');
    cy.get('@productGrid').find('[data-component-type="s-search-result"]').as('productItems').should('be.exist');

    cy.get('@productGrid').each(($Product) => {

        cy.get('@productItems').each(($el) => {
          cy.log(`Product Item`)
          const Product = $el
            cy.log(`Product Text`)
            cy.wrap(Product)
              .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').as('productText').invoke('text').then(cy.log)
            cy.wrap(Product)
              .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').as('productText').invoke('text').then(console.log)
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
```