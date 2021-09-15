describe('Navigation', () => {
  it('should navigate to the login page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.actionsstyle__Container-sc-174lnpv-0 > .MuiButton-contained').click();
    cy.url().should('include', '/register');
    cy.get('h1').contains('register');
  });
});

export {};
