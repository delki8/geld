context('Home', () => {
  beforeEach(() => cy.visit('http://192.168.15.7:3000'));

  it('should browse to the transactions route', () => {
    cy.get('.transactions-btn').click();
    cy.url().should('include', '/transactions');
  });
});