import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the Automobile insurance page', () => {
  cy.visitAutomobilePage();
});

When('the user fills in required vehicle data', () => {
  cy.fillRequiredVehicleForm();
});

And('the user fills in required insurant data', () => {
  cy.fillRequiredInsurantForm();
});

And('the user fills in required product data', () => {
  cy.fillRequiredProductForm();
});

And('the user selects the {string} price option', (plan) => {
  cy.selectPriceOption(plan);
});

And('the user sends the quote with required fields', () => {
  cy.submitRequiredQuote();
});

Then('a confirmation message should be displayed', () => {
  cy.verifySuccessMessage();
});
