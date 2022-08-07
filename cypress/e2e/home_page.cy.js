describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('clicks the quiz button and asserts the url', () => {
    //click the button
    cy.get('.Quiz').click();
    //assert the url
    cy.url().should('include', 'Quiz');
  });
});
