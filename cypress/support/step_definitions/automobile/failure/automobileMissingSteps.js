import {When, And, Then} from 'cypress-cucumber-preprocessor/steps';

When('the user leaves the vehicle data form blank', () => {
  cy.trySkipVehicleForm();
});

And('the user leaves the insurant data form blank', () => {
  cy.trySkipInsurantForm();
});

And('the user leaves the product data form blank', () => {
  cy.trySkipProductForm();
});

Then('the user should see an error message for required forms', () => {
  cy.verifyFormValidationError();
});
