/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
      })
    it('selecionar um produto (YouTube) por seu texto.', function() {
        cy.get('#product').select('youtube')
          .should('have.value','youtube')
    });

    it('Exercício Extra 1: selecionar um produto (Mentoria) por seu valor (value)', function() {
      cy.get('#product').select('mentoria')
      .should('have.value','mentoria')
  });

  it('Exercício Extra 2: selecionar um produto (Blog) por seu índice', function() {
    cy.get('#product').select(1)
    .should('have.value','blog')
  });
});
