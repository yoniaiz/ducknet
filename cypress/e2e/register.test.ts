import { routes } from '@constants/routes';
import { buildUser } from 'cypress/support/generate';

describe('Register', () => {
  it('register new user', () => {
    const user = buildUser();

    cy.visit('/register');
    cy.findByLabelText(/first name/i).type(user.firstName);
    cy.findByLabelText(/last name/i).type(user.lastName);
    cy.findByLabelText(/email/i).type(user.email);
    cy.findByLabelText(/password/i).type(user.password);

    cy.findByText(/submit/i).click();

    cy.url().should('include', routes.projects);
    cy.getCookie('next-auth.session-token').should('exist');
  });
});

export {};
