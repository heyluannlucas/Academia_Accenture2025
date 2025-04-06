import ProductElements from '../elements/automobile/productElements';
import { generateProductData } from '../factories/automobile/productFactory';

class ProductDataPage {
    static completeRequiredFields(requiredData) {
        cy.get(ProductElements.startDate).type(requiredData.startDate);
        cy.get(ProductElements.insuranceSum).select(requiredData.insuranceSum);
        cy.get(ProductElements.meritRating).select(requiredData.meritRating);
        cy.get(ProductElements.damageInsurance).select(requiredData.damageInsurance);

        requiredData.optionalProducts.forEach(product => {
            cy.get(`#${product.replace(/\s/g, '')}`).parent().click({ force: true });
        });

        cy.get(ProductElements.courtesyCar).select(requiredData.courtesyCar);
    }

    static fillOptionalFields(optionalData) {
    }

    static goToNextStep() {
        cy.get(ProductElements.nextButton).click();
    }

    static fillProductData(data = generateProductData()) {
        this.completeRequiredFields(data.required);
        this.fillOptionalFields(data.optional);
    }

    static verifyPriceLoaderVisible() {
        cy.get('#xLoaderPrice')
          .should('be.visible')
          .and('have.css', 'display', 'block');
        return this;
    }
}

export default ProductDataPage;
