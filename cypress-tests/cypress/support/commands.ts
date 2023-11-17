/* eslint-disable @typescript-eslint/no-namespace */
// import "@testing-library/cypress/add-commands";
// import '@testing-library/cypress/add-commands';

/// <reference types="cypress" />

Cypress.Commands.add('goHomeCommand', () => {
    cy.visit('/');
});

Cypress.Commands.add('waitForSpinner', () => {
    cy.wait(500);
    return cy.get('[data-testid="spinner"]').should('not.exist');
});

declare namespace Cypress {
    interface Chainable {
        goHomeCommand(): Chainable<Element>;
    }
    interface Chainable {
        waitForSpinner(): Chainable<any>;
    }
}
