/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
      })

      it('selecionar um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')  // ou cy.get('input[type="file"]#file-upload')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json')
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
      })

    it('Exercício extra 1: selecionar um arquivo simulando um drag-and-drop.', function() {
      cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json', {action: "drag-drop"})
      .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
});

    it('Exercício extra 2: selecionar um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
      cy.fixture('example.json').as('sampleFile')
      cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('@sampleFile')
      .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  });

});
