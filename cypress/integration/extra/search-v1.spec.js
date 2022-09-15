describe.skip('Search', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**?q=cypress.io**'
        ).as('getSearchResults')
        cy.visit('https://duckduckgo.com/')

        cy.get('input[type="text"]')
          .should('be.visible')
          .as('searchField')
    });
    
    it('types am hits ENTER', () => {
        cy.get('@searchField')
          .type('cypress.io{enter}')
        cy.wait('@getSearchResults')
        cy.get('[data-testid="result"]')          
          .should('have.length',10)
    });

    it('types and clicks the magnifying glass button', () => {
        cy.get('@searchField')
          .type('cypress.io')
        cy.get('input[type="submit"')
          .should('be.visible')
          .click()
        cy.wait('@getSearchResults')  
        cy.get('[data-testid="result"]')          
          .should('have.length',10)
    });

    it('types and submits the form directly', () => {
        cy.get('@searchField')
          .type('cypress.io')
        cy.get('form').submit()
        cy.wait('@getSearchResults')
        cy.get('[data-testid="result"]')          
          .should('have.length',10)
    });
});