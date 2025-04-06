import VehicleDataPage from '../../pages/VehicleDataPage';
import InsurantDataPage from '../../pages/InsurantDataPage';
import ProductDataPage from '../../pages/ProductDataPage';

Cypress.Commands.add('trySkipVehicleForm', () => {
  VehicleDataPage.goToNextStep();
});

Cypress.Commands.add('trySkipInsurantForm', () => {
  InsurantDataPage.goToNextStep();
});

Cypress.Commands.add('trySkipProductForm', () => {
  ProductDataPage.goToNextStep();
});

Cypress.Commands.add('verifyFormValidationError', () => {
  ProductDataPage.verifyPriceLoaderVisible();
});
