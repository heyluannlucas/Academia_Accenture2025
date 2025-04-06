import {When, And} from 'cypress-cucumber-preprocessor/steps';
import { generateVehicleData } from '../../../factories/automobile/vehicleFactory';
import { generateInsurantData } from '../../../factories/automobile/insurantFactory';
import { generateProductData } from '../../../factories/automobile/productFactory';
import { generateSendQuoteData } from '../../../factories/automobile/sendQuoteFactory';

import { Before } from 'cypress-cucumber-preprocessor/steps';

let dataSet;

Before({ tags: '@allFields' }, () => {
  dataSet = {
    vehicle: generateVehicleData(),
    insurant: generateInsurantData(),
    product: generateProductData(),
    quote: generateSendQuoteData()
  };
});

When('the user fills in required and optional vehicle data', () => {
  cy.fillCompleteVehicleForm(dataSet.vehicle);
});

And('the user fills in required and optional insurant data', () => {
  cy.fillCompleteInsurantForm(dataSet.insurant);
});

And('the user sends the quote with required and optional fields', () => {
  cy.fillCompleteQuoteForm(dataSet.quote);
});
