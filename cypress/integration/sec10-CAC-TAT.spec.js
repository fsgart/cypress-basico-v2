/// <reference types="Cypress" />

const longText = "Alguns minutos de estudo por dia valem a pena. Pesquisas mostram que os alunos que fazem do estudo um hábito têm maior probabilidade de alcançar suas metas. Reserve um tempo para estudar e receba lembretes usando seu programador de aprendizado."

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
      })

      
    Cypress._.times(3, function(){
      it('Exercício extra 1 (Lodash): Verificar campo telefone com valores não numéricos deve permanecer vazio.', function() {
          cy.get('#phone')
            .type('asddsdsfdfd')
            .should('have.value','')
      });
    })  

    Cypress._.times(5, function () {
      it('Exercício extra 2 (Lodash): testa a página da política de privavidade de forma independente.', function () {
          cy.visit('./src/privacy.html')
          cy.contains('Talking About Testing').should('be.visible')
      });
  })
});
