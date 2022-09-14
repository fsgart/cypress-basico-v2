// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const longText = "Alguns minutos de estudo por dia valem a pena. Pesquisas mostram que os alunos que fazem do estudo um hábito têm maior probabilidade de alcançar suas metas. Reserve um tempo para estudar e receba lembretes usando seu programador de aprendizado."

Cypress.Commands.add('fillMandatoryFieldsAndSubmit1', () => { 
  cy.get('#firstName').should('be.visible')
    .type('Flavio').should('have.value','Flavio')
  cy.get('#lastName').should('be.visible')
    .type('Goulart').should('have.value','Goulart')
  cy.get('#email').should('be.visible')
    .type('fsgart@gmail.com').should('have.value','fsgart@gmail.com')
  cy.get('#open-text-area').should('be.visible').type(longText, { delay: 0 })
})

Cypress.Commands.add('preencherCampos', () => { 
  cy.get('#firstName').should('be.visible')
    .type('Flavio').should('have.value','Flavio')
  cy.get('#lastName').should('be.visible')
    .type('Goulart').should('have.value','Goulart')
  cy.get('#email').should('be.visible')
    .type('fsgart@gmail.com').should('have.value','fsgart@gmail.com')
  cy.get('#open-text-area').should('be.visible').type(longText, { delay: 0 })
})



Cypress.Commands.add('enviar', () => { 
  cy.contains('button','Enviar').click()
})


Cypress.Commands.add('fillMandatoryFieldsAndSubmit2', (firstName, lastName, email, phone, longText) => { 
    cy.get('#firstName').type(firstName, '{delay=0}').should('have.value',firstName)
    cy.get('#lastName').type(lastName).should('have.value',lastName)
    cy.get('#email').type(email).should('have.value',email)
    cy.get('#phone').type(phone).should('have.value',phone)
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()
})  

