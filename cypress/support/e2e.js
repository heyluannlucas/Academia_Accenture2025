import './commands'
import './commands/automobile';

afterEach(() => {
    const testTitle = Cypress.currentTest.titlePath.join(' -- ');
    cy.screenshot(`fim-do-teste -- ${testTitle}`);
  });
  