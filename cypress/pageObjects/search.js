class search{
    results(){
        return cy.get('.s-main-slot.s-result-list.s-search-results.sg-row').find('[data-component-type="s-search-result"]', { timeout: 30000 })
    }
}
export default search