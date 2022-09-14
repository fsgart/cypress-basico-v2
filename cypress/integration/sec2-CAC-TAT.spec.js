/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    it('Verificar o título da aplicação.', function() {
        cy.visit('./src/index.html')      
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
        cy.title().should('have.string','Central de Atendimento ao Cliente TAT')
        cy.get('#title').contains('CAC TAT')
    });
});
