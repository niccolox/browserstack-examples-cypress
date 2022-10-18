
# Onboarding Assignment

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
```

## Amazon Product Search
Assignment Duration: 3 hours

1. Go to www.amazon.com. Search for the product "iPhone X". Apply the following filters to the results:  
2. Cell Phone Operating System: iOS
3. Price Sort: High to Low
4. Display a list in your console of the search results. Each list item should contain the following:
   * Product name
   * Price
   * Link to the product details page