describe('Navigation', () => {
  describe('unauthorized', () => {
    it('should navigate to the login page', () => {
      cy.visit('/');
      cy.findByTestId('link--register').click();
      cy.url().should('include', '/register');
      cy.get('h1').contains(/register/i);
    });

    it('First route for unautorized user should be login', () => {
      cy.visit('/');
      cy.url().should('include', '/login');
      cy.get('h1').contains(/login/i);
    });
  });
});

export {};
