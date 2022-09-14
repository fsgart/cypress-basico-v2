it('selects a random option from a select dropdow', () => {
    cy.visit('/index.html')

    cy.get('select option')
      .as('options')
      .its('length', { log: false }).then(n => {
        cy.get('@options', { log: false }).then($options => {
          // const randomOptionIndex = Cypress._.random(n - 1)
          cy.get('select').select(Cypress._.random(n - 1))
        })
      })
});