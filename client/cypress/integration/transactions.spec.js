context('Transactions', () => {
  beforeEach(() => cy.visit('http://192.168.15.7:3000/transactions'));

  it('show add a new transaction', () => {
    cy.get('.add-input').type('123');
    cy.get('.add-btn').click();
    cy.get('.add-input').clear();
    cy.get('.add-input').prev().should('have.text', '123');
  });
});