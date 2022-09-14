describe('Duck Duck go Search', () => {
    beforeEach(() => {
        cy.visit('https://duckduckgo.com/')
        cy.get('input[type="text"]')
          .should('be.visible')
          .as('searchField')
    });
    
    it('Searches by typing and selecting the first option from the list', () => {
        cy.get('@searchField')
          .type('cypress.io{downarrow}{enter}', {delay: 500})

        cy.get('[data-testid="result"]')          
          .should('have.length',10)
    });

    it('searches by typing and selecting the second option from the list', () => {
      cy.get('@searchField')
        .type('cypress.io{downarrow}{downarrow}{enter}', { delay: 500 })
  
        cy.get('[data-testid="result"]')          
          .should('have.length',10)
    })
  
    it('searches by typing and selecting the third option from the list', () => {
      cy.get('@searchField')
        .type('cypress.io{downarrow}{downarrow}{downarrow}{enter}', { delay: 500 })
  
        cy.get('[data-testid="result"]')          
          .should('have.length',10)
    })    
});