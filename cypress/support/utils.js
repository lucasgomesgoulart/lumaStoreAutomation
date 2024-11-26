Cypress.Commands.add('waitForStaticResources', () => {
    cy.intercept('GET', '**/js-translation.json').as('jsTranslation');
    cy.intercept('GET', '**/modal/modal-popup.html').as('modalPopup');
    cy.intercept('GET', '**/modal/modal-slide.html').as('modalSlide');
    cy.intercept('GET', '**/modal/modal-custom.html').as('modalCustom');
    cy.intercept('GET', '**/tooltip/tooltip.html').as('tooltip');
    cy.intercept('GET', '**/block-loader.html').as('blockLoader');
    cy.intercept('GET', '**/minicart/content.html').as('miniCart');
    cy.intercept('GET', '**/authentication-popup.html').as('authPopup');
    cy.intercept('GET', '**/messages.html').as('messages');
    cy.intercept('GET', '**/captcha.html').as('captcha');

    cy.visit('/');

    cy.wait('@jsTranslation');
    cy.wait('@modalPopup');
    cy.wait('@modalSlide');
    cy.wait('@modalCustom');
    cy.wait('@tooltip');
    cy.wait('@blockLoader');
    cy.wait('@miniCart');
    cy.wait('@authPopup');
    cy.wait('@messages');
    cy.wait('@captcha');
  });
  