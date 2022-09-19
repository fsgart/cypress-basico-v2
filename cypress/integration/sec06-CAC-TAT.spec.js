/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
      })

      it('Marcar ambos checkboxes, depois desmarcar o último (1)', () => {
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last().uncheck()
          .should('not.be.checked')
      })

      it('Marcar ambos checkboxes, depois desmarcar o último (2)', () => {
        cy.get('#email-checkbox').check()
        cy.get('#phone-checkbox').check()
        cy.get('#phone-checkbox').uncheck()
      })

    it('Marcar ambos checkboxes, depois desmarcar o último (3)', () => {
      cy.get('input[type="checkbox"]')
        .as('checkboxes')
        .check()

        cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })
      cy.get('#phone-checkbox').uncheck()
    })

    it('Exercício extra 1: Verificar campo telefone obrigatório não informado.', function() {
        cy.get('#firstName').type('Flavio')
        cy.get('#lastName').type('Goulart')
        cy.get('#email').type('fsgart@gmail.com')
        cy.get('#phone-checkbox')
          .should('be.visible')
          .check()
        cy.get('#open-text-area').type('Observação')
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
        // cy.get('.error').contains('Valide os campos obrigatórios!')
        // cy.contains('Valide os campos obrigatórios!').should('be.visible')
    });

});
