describe('Navigation', () => {
  describe('unauthorized', () => {
    it('should navigate to the register page', () => {
      cy.visit('/');
      cy.get('h1').contains(/login/i);
      cy.findByTestId('link--register').click({ force: true });
      cy.url().should('include', '/register');
      cy.get('h1').contains(/register/i);
    });
  });
});

export {};
