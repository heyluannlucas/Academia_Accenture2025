import { generateVehicleData } from '../factories/automobile/vehicleFactory';
import VehicleElements from '../elements/automobile/vehicleElements';

class VehicleDataPage {
  static elements = {
    makeDropdown: () => cy.get(VehicleElements.make),
    enginePerformanceInput: () => cy.get(VehicleElements.enginePerformance),
    dateOfManufactureInput: () => cy.get(VehicleElements.dateOfManufacture),
    numberOfSeatsDropdown: () => cy.get(VehicleElements.numberOfSeats),
    fuelTypeDropdown: () => cy.get(VehicleElements.fuelType),
    listPriceInput: () => cy.get(VehicleElements.listPrice),
    annualMileageInput: () => cy.get(VehicleElements.annualMileage),
    licensePlateInput: () => cy.get(VehicleElements.licensePlateNumber), 
    nextButton: () => cy.get(VehicleElements.nextButton),
    errorIndicator: () => cy.get('.error'),
  };

 
  static visit() {
    cy.visit('/');
    cy.get(VehicleElements.navAutomobile).click();
    return this;
  }


  static fillRequiredFields(data = generateVehicleData().required, validate = true) {
    this.selectMake(data.make, validate)
      .typeEnginePerformance(data.enginePerformance, validate)
      .typeDateOfManufacture(data.dateOfManufacture, validate)
      .selectNumberOfSeats(data.numberOfSeats, validate)
      .selectFuelType(data.fuelType, validate)
      .typeListPrice(data.listPrice, validate)
      .typeAnnualMileage(data.annualMileage, validate);
    return this;
  }


  static fillOptionalFields(data = generateVehicleData().optional) {
    if (data.licensePlateNumber) {
      this.typeLicensePlate(data.licensePlateNumber);
    }
    return this;
  }


  static selectMake(value, validate = true) {
    this.elements.makeDropdown().select(value);
    if (validate) this.elements.makeDropdown().should('have.value', value);
    return this;
  }

  static typeEnginePerformance(value, validate = true) {
    this.elements.enginePerformanceInput().clear().type(value);
    if (validate) this.elements.enginePerformanceInput().should('have.value', value);
    return this;
  }

  static typeDateOfManufacture(value, validate = true) {
    this.elements.dateOfManufactureInput().type(value);
    if (validate) this.elements.dateOfManufactureInput().should('have.value', value);
    return this;
  }

  static selectNumberOfSeats(value, validate = true) {
    this.elements.numberOfSeatsDropdown().select(value);
    if (validate) this.elements.numberOfSeatsDropdown().should('have.value', value);
    return this;
  }

  static selectFuelType(value, validate = true) {
    this.elements.fuelTypeDropdown().select(value);
    if (validate) this.elements.fuelTypeDropdown().should('have.value', value);
    return this;
  }

  static typeListPrice(value, validate = true) {
    this.elements.listPriceInput().clear().type(value);
    if (validate) this.elements.listPriceInput().should('have.value', value);
    return this;
  }

  static typeAnnualMileage(value, validate = true) {
    this.elements.annualMileageInput().clear().type(value);
    if (validate) this.elements.annualMileageInput().should('have.value', value);
    return this;
  }

  static typeLicensePlate(value) {
    this.elements.licensePlateInput().type(value);
    return this;
  }

static submit(expectSuccess = true) {
    this.elements.nextButton().click();
    if (expectSuccess) {
      this.elements.errorIndicator().should('not.be.visible');
    }
    return this;
  }
  

  static verifyError(expectedError = null) {
    this.elements.errorIndicator().should('be.visible');
    if (expectedError) {
      this.elements.errorIndicator().should('contain', expectedError);
    }
    return this;
  }


  static completeRequiredFields(dataOverrides = {}) {
    const data = generateVehicleData(dataOverrides);
    return this.fillRequiredFields(data.required); 
  }  

  static goToNextStep() {
  this.elements.nextButton().click();
  return this;
}
static fillWithoutField(fieldName, data = generateVehicleData().required) {
    // Cria uma cópia dos dados sem o campo especificado
    const incompleteData = {...data};
    delete incompleteData[fieldName];
    
    // Preenche os campos restantes
    if (incompleteData.make) this.selectMake(incompleteData.make);
    if (incompleteData.enginePerformance) this.typeEnginePerformance(incompleteData.enginePerformance);
    if (incompleteData.dateOfManufacture) this.typeDateOfManufacture(incompleteData.dateOfManufacture);
    if (incompleteData.numberOfSeats) this.selectNumberOfSeats(incompleteData.numberOfSeats);
    
    return this;
  }
  
  static verifyStillOnPage() {
    cy.get(VehicleElements.make).should('be.visible');
    return this;
  }
}

export default VehicleDataPage;
