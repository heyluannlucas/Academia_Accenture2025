import VehicleDataPage from '../../pages/VehicleDataPage';
import InsurantDataPage from '../../pages/InsurantDataPage';
import ProductDataPage from '../../pages/ProductDataPage';
import SendQuotePage from '../../pages/SendQuotePage';
import PriceOptionPage from '../../pages/PriceOptionPage';

Cypress.Commands.add('fillRequiredVehicleForm', () => {
  VehicleDataPage.completeRequiredFields();
  VehicleDataPage.goToNextStep();
});

Cypress.Commands.add('fillRequiredInsurantForm', () => {
  InsurantDataPage.completeRequiredFields();
  InsurantDataPage.goToNextStep();
});

Cypress.Commands.add('fillRequiredProductForm', () => {
  ProductDataPage.fillProductData();
  ProductDataPage.goToNextStep();
});

Cypress.Commands.add('submitRequiredQuote', () => {
  SendQuotePage.completeRequiredFields();
  SendQuotePage.submit();
});

Cypress.Commands.add('selectPriceOption', (plan) => {
  PriceOptionPage.selectPlan(plan);
});
