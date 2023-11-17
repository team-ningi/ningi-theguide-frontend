import './commands';

before(() => {
    // cy.intercept('POST', 'https://api.amplitude.com', { body: '' });
});

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on('uncaught:exception', (err) => {
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
    }
});
