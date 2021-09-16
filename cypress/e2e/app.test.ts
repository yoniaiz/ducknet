describe('Navigation', () => {
  describe('unauthorized', () => {
    it('First route for unauthorized user should be login', () => {
      cy.visit('/');
      cy.url().should('include', '/login');
      cy.get('h1').contains(/login/i);
    });

    it('should navigate to the login page', () => {
      cy.visit('/');
      cy.findByTestId('link--register').click();
      cy.url().should('include', '/register');
      cy.get('h1').contains(/register/i);
    });
  });
});

export {};
