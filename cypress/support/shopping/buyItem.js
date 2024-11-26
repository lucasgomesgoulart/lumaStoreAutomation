import { faker } from "@faker-js/faker";

Cypress.Commands.add('goShopping', () => {
    cy.get('.panel.wrapper > .panel').contains('Sign In').click()
    cy.get('#email').type(Cypress.env('username'))
    cy.get('#pass').type(Cypress.env('userPassword'))
    cy.get('#send2').click()
    cy.get('.panel.wrapper > .panel').contains('Ansel Raynor!')
});

Cypress.Commands.add('goMenStore', () => {
    cy.get('#ui-id-5').click()
    cy.get('.sidebar-main').contains('Jackets').click()
});

Cypress.Commands.add('addToCart', () => {
    cy.get('.wrapper > .products > :nth-child(1)').contains('XS').click()
    cy.get('.swatch-opt-430 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49').click()
    cy.get('.wrapper > .products > :nth-child(1)')
        .trigger('mouseover')
        .contains('Add to Cart')
        .click({ force: true })

    cy.wait(5000)

    cy.get('.counter.qty .counter-number')
        .invoke('text')
        .then((currentCount) => {
            let count = parseInt(currentCount) || 0;
            cy.wrap(count).as('previousCount');
        });
});

Cypress.Commands.add('validateCart', () => {
    cy.get('@previousCount').then((previousCount) => {
        cy.get('.counter.qty .counter-number')
            .invoke('text')
            .then((newCount) => {
                const updatedCount = parseInt(newCount) || 0;
                expect(updatedCount).to.equal(previousCount);
            });
    });
});

Cypress.Commands.add('checkout', () => {
    cy.get('.showcart').click()
    cy.get('#top-cart-btn-checkout').click()

    cy.get('.new-address-popup > .action').click()

    cy.get('[name="shippingAddress.company"]').find('input').type(faker.company.name())
    cy.get('.street').find('input').eq(0).type(faker.location.city()).eq(0)
    cy.get('[name="shippingAddress.city"]').find('input').type(faker.location.city())
    cy.get('[name="shippingAddress.region_id"]').find('select').select('5')
    cy.get('[name="shippingAddress.postcode"]').find('input').type(faker.location.zipCode())
    cy.get('[name="shippingAddress.telephone"]').find('input').type(faker.phone.number())

    cy.get('.modal-footer > .primary').click()

    cy.get(':nth-child(1) > :nth-child(1) > .radio').click()

    cy.get('.button').contains('Next').click()
})

Cypress.Commands.add('payment', () => {
    cy.get('#billing-address-same-as-shipping-checkmo').click()
    cy.get('#billing-address-same-as-shipping-checkmo').should('have.checked')
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
    cy.get('#maincontent').contains('Thank you for your purchase!')
});