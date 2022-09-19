describe('privacy - lodash', function () {

    Cypress._.times(5, function () {
        it('Exercício extra 2 (Lodash): testa a página da política de privavidade de forma independente.', function () {
            cy.visit('./src/privacy.html')
            cy.contains('Talking About Testing').should('be.visible')
        });
    })
})
