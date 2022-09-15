describe.skip('Checkboxes', () => {

    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {
      cy.get('#check input[type="checkbox"]')
        .as('checkboxes')
        .check()
  
      cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })
    })

    it('checks the same checkbox twice', function() {
        cy.get('#tecnologia1').check()
        cy.get('#tecnologia1').check()
        cy.get('#tecnologia1').uncheck()
    })
  })