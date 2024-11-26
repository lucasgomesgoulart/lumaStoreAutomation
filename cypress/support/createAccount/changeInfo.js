Cypress.Commands.add('changeUserInfo', () => {
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#firstname').clear().type('Automacao')
    cy.get('#lastname').clear().type('Cypress')

    cy.get('#change-email').click().then(() => {
        cy.get('#email').should('be.visible').clear().type('automation@aut.com.br')
        cy.get('#current-password').should('be.visible').type(Cypress.env('password'))
    })
    
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.log(Cypress.env('password'))
    cy.log(Cypress.env('email'))
    
});