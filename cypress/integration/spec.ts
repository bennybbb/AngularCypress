describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('smoke test', () => {
    cy.visit('/');
    cy.contains('AngularCypress1 app is running!');
  });

  it('has an app title, shows proper command by default and reacts on command changes', () => {
    cy.contains('AngularCypress');

    cy.contains('.terminal', 'ng generate component xyz');

    cy.contains('Angular Material').click();
    cy.contains('.terminal', 'ng add @angular/material');
  });
});
