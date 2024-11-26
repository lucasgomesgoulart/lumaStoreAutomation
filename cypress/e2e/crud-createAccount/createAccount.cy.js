
// O teste comtempla a criacao de conta, validação dos dados, edição dos dados.
// Nao contempla validaçao de API pois nao daria tempo.

describe('Create, validate and edit account', () => {
    beforeEach(() => {
        cy.waitForStaticResources()
    });
    it('create/edit Account', () => {
        cy.createAccount()
        cy.validateInfos()
        cy.changeUserInfo()
    })
});
