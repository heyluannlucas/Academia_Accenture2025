import PriceOptionElements from '../elements/automobile/priceOptionElements';

class PriceOptionPage {
  static selectPlan(plan) {
    const plans = {
      Silver: PriceOptionElements.silverPlan,
      Gold: PriceOptionElements.goldPlan,
      Platinum: PriceOptionElements.platinumPlan,
      Ultimate: PriceOptionElements.ultimatePlan
    };

    if (plans[plan]) {
      cy.get(plans[plan]).click({ force: true });
    } else {
      throw new Error('Plano não encontrado: ' + plan);
    }
    cy.get(PriceOptionElements.nextButton).click();

  }
}

export default PriceOptionPage;
