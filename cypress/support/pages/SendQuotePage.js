import SendQuoteElements from '../elements/automobile/sendQuoteElements';
import { generateSendQuoteData } from '../factories/automobile/sendQuoteFactory';

class SendQuotePage {
    static completeRequiredFields(data = generateSendQuoteData().required) {
        cy.get(SendQuoteElements.email).type(data.email);
        cy.get(SendQuoteElements.phone).type(data.phone);
        cy.get(SendQuoteElements.username).type(data.username);
        cy.get(SendQuoteElements.password).type(data.password);
        cy.get(SendQuoteElements.confirmPassword).type(data.confirmPassword);
    }

    static fillOptionalFields(data = generateSendQuoteData().optional) {
        if (data.comments) {
            cy.get(SendQuoteElements.comments).type(data.comments);
        }
    }

    static fillFormAndSend(data = generateSendQuoteData()) {
        this.completeRequiredFields(data.required);
        this.fillOptionalFields(data.optional);
    }

    static verifySuccessMessage() {
        cy.get('.sweet-alert .sa-icon.sa-success', { timeout: 10000 })
          .should('be.visible');
    }

    static sendEmptyForm() {
        cy.get(SendQuoteElements.sendButton).click();
    }

    static verifyValidationErrors() {
        cy.get('.sa-warning').should('be.visible');
    }

    static submit() {
        cy.get(SendQuoteElements.sendButton).click();
    }
    
}

export default SendQuotePage;
