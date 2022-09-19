/// <reference types="Cypress" />

const longText = "Alguns minutos de estudo por dia valem a pena. Pesquisas mostram que os alunos que fazem do estudo um hábito têm maior probabilidade de alcançar suas metas. Reserve um tempo para estudar e receba lembretes usando seu programador de aprendizado."

describe('Central de Atendimento ao Cliente TAT', function () {

  beforeEach(function () {
    cy.visit('./src/index.html')
  })
  it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('preenche a area de texto usando o comando invoke', function () {
    const longText = Cypress._.repeat('0123456789', 20)
    cy.get('#open-text-area')
      .invoke('val', longText)
      .should('have.value', longText)
  })

  it('preenche a area de texto usando delay=0', function () {
    const longText = Cypress._.repeat('0123456789', 20)
    cy.get('#open-text-area').type(longText, { delay: 0 })
  })

  it('Exercício Extra 4: Faz uma requisição HTTP', function () {
    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
      .should(function (response) {
        console.log(response)
        const { status, statusText, body } = response
        expect(status).to.equal(200)
        expect(statusText).to.equal('OK')
        expect(body).to.include('CAC TAT')
      })
  })


  it.only('Encontra o gato escondido', function (){
    cy.get('#cat')
      .invoke('show')
      .should('be.visible')

      cy.get('#title')
      .invoke('text', 'CAT TAT')

      cy.get('#subtitle')
      .invoke('text', 'Eu 💙 gatos')


  })
});



