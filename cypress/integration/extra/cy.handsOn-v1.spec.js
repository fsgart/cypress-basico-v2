describe.skip('handsOn-v1', function(){
  it('selects a random option from a select dropdow', () => {
      cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html')
      cy.get('select option')
        .as('options')
        .its('length', { log: false }).then(n => {
          cy.get('@options', { log: false }).then($options => {
            const randomOptionIndex = Cypress._.random(n - 1)
            const randomOptionText = $options[randomOptionIndex].innerText
            cy.get('select').select(randomOptionText)
          })
        })
  });
})


