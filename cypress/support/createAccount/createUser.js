import { faker } from "@faker-js/faker";

const password = faker.internet.password();
const email = faker.internet.email();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();

Cypress.Commands.add('createAccount', () => {
    Cypress.env('password', password);
    Cypress.env('email', email);

    cy.get('.panel.wrapper > .panel').contains('Create an Account').click();
    cy.get('#maincontent').contains('Create New Customer Account');

    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);

    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);

    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();

    cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/');
});

Cypress.Commands.add('validateInfos', () => {
    cy.get('.block-dashboard-info > .block-content > .box').should('contain.text', `${firstName} ${lastName}`);
});
