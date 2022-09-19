/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
      })

    it('marca o tipo de atendimento "Feddback" (1).', function() {
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('have.value','feedback')
    });

    it('marca o tipo de atendimento "Feddback" (2).', function() {
       cy.get('[type="radio"]')
        .check('feedback')
        .should('be.checked')
    });

    it('Exercício Extra 1: marca cada tipo de atendimento (each)', function() {
      cy.get('[type="radio"]')
        .should('have.length',3)
        .each(function($radio) {
          cy.wrap($radio).check()
          cy.wrap($radio).should('be.checked')
        })
    });
});
