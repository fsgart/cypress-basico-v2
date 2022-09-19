/// <reference types="Cypress" />

const longText = "Alguns minutos de estudo por dia valem a pena. Pesquisas mostram que os alunos que fazem do estudo um hábito têm maior probabilidade de alcançar suas metas. Reserve um tempo para estudar e receba lembretes usando seu programador de aprendizado."

const THREE_SECONDS_IN_MS = 3000

describe('Central de Atendimento ao Cliente TAT', function () {

  beforeEach(function () {
    cy.visit('./src/index.html')
  })

  it('Verificar o título da aplicação.', function () {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    cy.title().should('have.string', 'Central de Atendimento ao Cliente TAT')
    cy.get('#title').contains('CAC TAT')
  });

  it('Preencher os campos obrigatórios e envia o formulário (1).', function () {

    cy.clock()

    cy.get('#firstName').should('be.visible').type('Flavio')
    cy.get('#lastName').should('be.visible').type('Goulart')
    cy.get('#email').should('be.visible').type('fsgart@gmail.com')
    cy.get('#open-text-area').type('observação')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')

    cy.tick(THREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')

  });

  it('Preencher os campos obrigatórios e envia o formulário (2).', function () {

    cy.clock()

    cy.get('#firstName').type('Flavio')
    cy.get('#lastName').type('Goulart')
    cy.get('#email').type('fsgart@gmail.com')
    cy.get('#open-text-area').type('observação')
    // cy.get('button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
    // cy.get('.success').contains('Mensagem enviada com sucesso.')
    // cy.contains('Mensagem enviada com sucesso.').should('be.visible')

    cy.tick(THREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')

  });

  it('Exercício extra 1: Preencher os campos obrigatórios com delay=0.', function () {

    cy.get('#firstName').type('Flavio')
    cy.get('#lastName').type('Goulart').should('have.value', 'Goulart')
    cy.get('#email').type('fsgart@gmail.com').should('have.value', 'fsgart@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 }).should('have.value', longText)
    cy.get('button[type="submit"]').click()
    // cy.get('.success').contains('Mensagem enviada com sucesso.')
    // cy.contains('Mensagem enviada com sucesso.').should('be.visible')
  });

  it('Exercício extra 2: Verificar email com formatação inválida.', function () {

    cy.clock()

    cy.get('#firstName').type('Flavio', '{delay=0}').should('have.value', 'Flavio')
    cy.get('#lastName').type('Goulart').should('have.value', 'Goulart')
    cy.get('#email').type('fsgart#gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 }).should('have.value', longText)
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
    // cy.get('.error').contains('Valide os campos obrigatórios!')
    // cy.contains('Valide os campos obrigatórios!').should('be.visible')

    cy.tick(THREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')

  });

  it('Exercício extra 3: Verificar campo telefone com valores não numéricos deve permanecer vazio.', function () {
    cy.get('#phone')
      .type('asddsdsfdfd')
      .should('have.value', '')
  });

  it('Exercício extra 4: Verificar campo telefone obrigatório não informado.', function () {

    cy.clock()

    cy.get('#firstName').type('Flavio', '{delay=0}').should('have.value', 'Flavio')
    cy.get('#lastName').type('Goulart').should('have.value', 'Goulart')
    cy.get('#email').type('fsgart@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 }).should('have.value', longText)
    cy.get('#phone-checkbox').click()
    cy.get('#phone-checkbox').should('be.visible').check()
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
    // cy.get('.error').contains('Valide os campos obrigatórios!')
    // cy.contains('Valide os campos obrigatórios!').should('be.visible')

    cy.tick(THREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')
  });

  it('Exercício extra 5: Preencher e limpar campos informados.', function () {
    cy.get('#firstName').type('Flavio').should('have.value', 'Flavio')
      .clear().should('have.value', '')
    cy.get('#lastName').type('Goulart').should('have.value', 'Goulart')
      .clear().should('have.value', '')
    cy.get('#email').type('fsgart@gmail.com').should('have.value', 'fsgart@gmail.com')
      .clear().should('have.value', '')
    cy.get('#phone').type('12345678').should('have.value', '12345678')
      .clear().should('have.value', '')
    cy.get('#open-text-area').type(longText).should('have.value', longText)
      .clear().should('have.value', '')

    // informando dados nos campos  
    cy.get('#firstName').type('Flavio').should('have.value', 'Flavio')
    cy.get('#lastName').type('Goulart').should('have.value', 'Goulart')
    cy.get('#email').type('fsgart@gmail.com').should('have.value', 'fsgart@gmail.com')
    cy.get('#phone').type('12345678').should('have.value', '12345678')
    cy.get('#open-text-area').type(longText).should('have.value', longText)

    // limpando os campos informados
    cy.get('#firstName').clear().should('have.value', '')
    cy.get('#lastName').clear().should('have.value', '')
    cy.get('#email').clear().should('have.value', '')
    cy.get('#phone').clear().should('have.value', '')
    cy.get('#open-text-area').clear().should('have.value', '')
  });

  it('Exercício extra 6: Verificar campos obrigatórios não informados.', function () {

    cy.clock()

    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
    // cy.get('.error').contains('Valide os campos obrigatórios!')
    // cy.contains('Valide os campos obrigatórios!').should('be.visible')

    cy.tick(THREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')
    
  });

  it('Exercício extra 7: Enviar o formuário com sucesso usando um comando customizado sem parâmetros.', function () {

    cy.clock()

    cy.fillMandatoryFieldsAndSubmit1()
    cy.enviar()
    cy.get('.success').should('be.visible')
    // // cy.get('.success').contains('Mensagem enviada com sucesso.')

    cy.tick(THREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')

  });

  it('Exercício extra 8: Enviar o formuário com sucesso usando um comando customizado com parâmetros.', function () {

    cy.clock()

    cy.fillMandatoryFieldsAndSubmit2('Flavio', 'Goulart', 'fsgart@gmail.com', '323232323', longText)
    cy.get('.success').should('be.visible')
    // cy.get('.success').contains('Mensagem enviada com sucesso.')
    // cy.contains('Mensagem enviada com sucesso.').should('be.visible')

    cy.tick(THREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')

  });

  it('Exercício extra 9: Obter nome do botão <Enviar> com cy.contains.', function () {
    cy.get('#firstName').type('Flavio')
    cy.get('#lastName').type('Goulart').should('have.value', 'Goulart')
    cy.get('#email').type('fsgart@gmail.com').should('have.value', 'fsgart@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('button', 'Enviar').click()
    // cy.get('.success').contains('Mensagem enviada com sucesso.')
    // cy.contains('Mensagem enviada com sucesso.').should('be.visible')
  });
});
