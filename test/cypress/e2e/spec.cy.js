describe('Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://forhemer.github.io/React-Todo-List/')
    cy.get('[type="text"]').type('one');
    cy.get('[type="submit"]').click();
    cy.get('[type="text"]').type('two');
    cy.get('[type="submit"]').click();
    cy.get('[type="text"]').type('three');
    cy.get('[type="submit"]').click();
    cy.get('ul').children().should('have.length', 3);
    cy.get('[type="checkbox"]').first().check();
    cy.get('li').find('span').first().invoke('attr', 'style').should('contain','text-decoration: line-through');
    cy.contains('three').parent().find('button').click();
    cy.contains('three').should('not.exist');
  })
})