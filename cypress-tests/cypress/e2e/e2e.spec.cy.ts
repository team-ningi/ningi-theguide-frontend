/* eslint-disable mocha/no-nested-tests */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable mocha/valid-suite-description */
/* eslint-disable mocha/valid-test-description */
// eslint-disable-next-line mocha/valid-suite-description
import { LogoutBtn, DocBtn, TemplateBtn, TagsBtn, ReportsBtn } from '../support/finders/buttons';
import { createUser } from '../support/helpers/apiHelper';

describe(
    'E2E ',
    {
        viewportHeight: 768,
        viewportWidth: 1366
    },
    () => {
        it('Create user and navigate around the guide ', async () => {
            cy.wrap(createUser()).then(() => {
                cy.visit('/');
                cy.wait(1500);
                cy.url().should('include', '/');

                cy.visit('/?mode=verify&e=dGVzdEBuaW5naS5jby51aw==');
                cy.wait(1500);
                cy.url().should('include', '/dashboard');
                cy.waitForSpinner();
                cy.wait(1500);

                cy.contains('Welcome Back').should('exist');
                cy.contains(
                    'Before creating a report, it is important that you have uploaded your base template along with all the necessary supporting documents.'
                ).should('exist');

                cy.contains('How To Generate A Report').should('exist');
                cy.wait(1500);

                DocBtn().click({ force: true });
                cy.waitForSpinner();
                cy.wait(1500);
                cy.contains('Supporting Documents').should('exist');
                cy.contains(
                    'Please upload the necessary support documents for data extraction in order to generate your reports.'
                ).should('exist');

                TemplateBtn().click({ force: true });
                cy.waitForSpinner();
                cy.wait(1500);
                cy.contains('Base Templates').should('exist');
                cy.contains('Prior to generating reports, it is essential to upload the base templates.').should(
                    'exist'
                );

                TagsBtn().click({ force: true });
                cy.waitForSpinner();
                cy.wait(1500);
                cy.contains('Tags & Prompts').should('exist');
                cy.contains(
                    'This is where you can view, create and edit collections of tags & prompts, ready for when you generate a report.'
                ).should('exist');

                ReportsBtn().click({ force: true });
                cy.waitForSpinner();
                cy.wait(1500);
                cy.contains('Generated Reports').should('exist');
                cy.contains(
                    'Generate personalized reports by importing a base template and utilizing data from your uploaded documents.'
                ).should('exist');

                cy.wait(1500);
                LogoutBtn().click({ force: true });
                cy.wait(1500);
                cy.url().should('include', '/');
            });
        });
    }
);
