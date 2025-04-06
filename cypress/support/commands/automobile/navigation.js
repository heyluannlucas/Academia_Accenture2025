import VehicleDataPage from '../../pages/VehicleDataPage';
import SendQuotePage from '../../pages/SendQuotePage';

Cypress.Commands.add('visitAutomobilePage', () => {
  VehicleDataPage.visit();
});

Cypress.Commands.add('verifySuccessMessage', () => {
  SendQuotePage.verifySuccessMessage();
});
