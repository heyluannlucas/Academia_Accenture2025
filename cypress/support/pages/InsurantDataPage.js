import InsurantElements from '../elements/automobile/insurantElements';
import { generateInsurantData } from '../factories/automobile/insurantFactory';

class InsurantDataPage {
    static elements = {
        firstNameInput: () => cy.get(InsurantElements.firstName),
        lastNameInput: () => cy.get(InsurantElements.lastName),
        birthDateInput: () => cy.get(InsurantElements.birthDate),
        genderMaleRadio: () => cy.get(InsurantElements.genderMale),
        genderFemaleRadio: () => cy.get(InsurantElements.genderFemale),
        streetAddressInput: () => cy.get(InsurantElements.streetAddress),
        countrySelect: () => cy.get(InsurantElements.country),
        zipCodeInput: () => cy.get(InsurantElements.zipCode),
        occupationSelect: () => cy.get(InsurantElements.occupation),
        hobbiesCheckbox: (hobby) =>
            cy.get(`#${hobby.toLowerCase().replace(/\s/g, '')}`).parent(),
        nextButton: () => cy.get(InsurantElements.nextButton),
        cityInput: () => cy.get(InsurantElements.city),
        websiteInput: () => cy.get(InsurantElements.website),
        pictureInput: () => cy.get(InsurantElements.picture),

    };


    static fillRequiredFields(data = generateInsurantData().required, validate = true) {
        this.typeFirstName(data.firstName, validate)
            .typeLastName(data.lastName, validate)
            .typeBirthDate(data.birthDate, validate)
            .typeStreetAddress(data.streetAddress, validate)
            .selectCountry(data.country, validate)
            .typeZipCode(data.zipCode, validate)
            .selectOccupation(data.occupation, validate)
            .selectHobbies(data.hobbies);
        return this;
    }

    static fillOptionalFields(data = generateInsurantData().optional, validate = true) {
        if (data.gender) this.selectGender(data.gender);
        if (data.city) this.typeCity(data.city, validate);
        if (data.website) this.typeWebsite(data.website, validate);
        if (data.picture) this.uploadPicture(data.picture);
        return this;
      }
      


    static typeFirstName(value, validate = true) {
        this.elements.firstNameInput().type(value);
        if (validate) this.elements.firstNameInput().should('have.value', value);
        return this;
    }

    static typeLastName(value, validate = true) {
        this.elements.lastNameInput().type(value);
        if (validate) this.elements.lastNameInput().should('have.value', value);
        return this;
    }

    static typeBirthDate(value, validate = true) {
        this.elements.birthDateInput().type(value);
        if (validate) this.elements.birthDateInput().should('have.value', value);
        return this;
    }

    static selectGender(value) {
        if (!value) return this;
    
        const isMale = value.toLowerCase() === 'male';
        const genderRadio = isMale ? this.elements.genderMaleRadio() : this.elements.genderFemaleRadio();
    
        genderRadio.click({ force: true });
        genderRadio.should('be.checked'); 
        return this;
    }
    

    static typeStreetAddress(value, validate = true) {
        this.elements.streetAddressInput().type(value);
        if (validate) this.elements.streetAddressInput().should('have.value', value);
        return this;
    }

    static selectCountry(value, validate = true) {
        this.elements.countrySelect().select(value);
        if (validate) this.elements.countrySelect().should('have.value', value);
        return this;
    }

    static typeZipCode(value, validate = true) {
        this.elements.zipCodeInput().type(value);
        if (validate) this.elements.zipCodeInput().should('have.value', value);
        return this;
    }

    static selectOccupation(value, validate = true) {
        this.elements.occupationSelect().select(value);
        if (validate) this.elements.occupationSelect().should('have.value', value);
        return this;
    }

    static selectHobbies(hobbies = []) {
        hobbies.forEach((hobby) => {
            this.elements.hobbiesCheckbox(hobby).click();
        });
        return this;
    }

    static completeRequiredFields(dataOverrides = {}) {
        const data = generateInsurantData(dataOverrides);
        return this.fillRequiredFields(data.required);
    }
    static typeCity(value, validate = true) {
        this.elements.cityInput().type(value);
        if (validate) this.elements.cityInput().should('have.value', value);
        return this;
    }

    static typeWebsite(value, validate = true) {
        this.elements.websiteInput().type(value);
        if (validate) this.elements.websiteInput().should('have.value', value);
        return this;
    }

    static uploadPicture(filePath = 'cypress/fixtures/sample.jpg') {
        this.elements.pictureInput().selectFile(filePath, { force: true });
        return this;
    }
    

    static goToNextStep() {
        this.elements.nextButton().click();
        return this;
    }
}

export default InsurantDataPage;
