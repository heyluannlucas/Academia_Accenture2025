import VehicleDataPage from '../../pages/VehicleDataPage';
import InsurantDataPage from '../../pages/InsurantDataPage';
import SendQuotePage from '../../pages/SendQuotePage';

Cypress.Commands.add('fillCompleteVehicleForm', (vehicleData) => {
  VehicleDataPage.completeRequiredFields(vehicleData.required);
  VehicleDataPage.fillOptionalFields(vehicleData.optional);
  VehicleDataPage.goToNextStep();
});

Cypress.Commands.add('fillCompleteInsurantForm', (insurantData) => {
  InsurantDataPage.completeRequiredFields(insurantData.required);
  InsurantDataPage.fillOptionalFields(insurantData.optional);
  InsurantDataPage.goToNextStep();
});

Cypress.Commands.add('fillCompleteQuoteForm', (quoteData) => {
  SendQuotePage.completeRequiredFields(quoteData.required);
  SendQuotePage.fillOptionalFields(quoteData.optional);
  cy.wait(500); 
  SendQuotePage.submit();
});
