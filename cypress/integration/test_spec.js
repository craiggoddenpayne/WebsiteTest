describe('Walk through Website', () => {
  it('Application form should work', () => {
    cy.visit('https://www.zuto.com/');
    cy.contains('Start your application').click();
    cy.url().should('include', '/apply/');

    cy.contains('Ok let\'s go').click();
    cy.contains('Car').click();
    cy.get('#loan-amount-input').type(10000).get('.confirm').click();
    cy.contains('Mr').click();
    cy.get('#firstName').type('CraigTest').get('#surname').type('CraigTest').get('.confirm').click();
  })

  it('Should make sure all the faq pages render correctly', () => {
    cy.visit('https://www.zuto.com/faq/');
    cy.get('.links-list a').each((element, index) => {
      cy.visit('https://www.zuto.com/' + element.attr('href'));
      cy.contains('Help & Advice');
    })
  });

});