import { routes } from '@constants/routes';

describe('Navigation', () => {
  describe('unauthorized', () => {
    it('should navigate to login page as first page and then to register page after click', () => {
      cy.visit('/');
      cy.get('h1').contains(/login/i);
      cy.findByTestId('link--register').click();
      cy.url().should('include', routes.register);
      cy.get('h1').contains(/register/i);
    });

    it('shouldnt be able to got to create project page', () => {
      cy.visit(routes.create);
      cy.url().should('include', routes.login);
    });
  });

  describe('authorized', () => {
    it('Should be able to go to create project', () => {
      cy.loginNewUser();

      cy.findByTestId('link--create').click();
      cy.url().should('include', routes.create);
    });
  });
});

export {};
