describe('Create, validate and edit account', () => {
    beforeEach(() => {
        cy.waitForStaticResources()
    });

    it('acessShopping', () => {
        cy.goShopping()
        cy.goMenStore()
        cy.addToCart()
        cy.validateCart()
        cy.checkout()
        cy.payment()
    })
});

