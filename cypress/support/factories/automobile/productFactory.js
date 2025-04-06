import { faker } from '@faker-js/faker';

export function generateProductData(overrides = {}) {
  // Regra de negócio: Data de início deve ser no futuro
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 31); // pelo menos 1 mês à frente

  const formattedStartDate = `${String(futureDate.getMonth() + 1).padStart(2, '0')}/${String(futureDate.getDate()).padStart(2, '0')}/${futureDate.getFullYear()}`;

  const requiredData = {
    startDate: formattedStartDate, // obrigatório e deve ser futura
    insuranceSum: faker.helpers.arrayElement([
      '3000000', '5000000', '7000000', '10000000',
      '15000000', '20000000', '25000000', '30000000', '35000000'
    ]),
    meritRating: faker.helpers.arrayElement([
      'Super Bonus', 'Bonus 1', 'Bonus 2', 'Bonus 3',
      'Malus 10', 'Malus 11', 'Malus 12'
    ]),
    damageInsurance: faker.helpers.arrayElement(['No Coverage', 'Partial Coverage', 'Full Coverage']),
    optionalProducts: faker.helpers.arrayElements(
      ['Euro Protection', 'Legal Defense Insurance'],
      { min: 1, max: 2 } // pelo menos um marcado
    ),
    courtesyCar: faker.helpers.arrayElement(['Yes', 'No']),
  };

  const optionalData = {
  };

  return {
    required: { ...requiredData, ...overrides.required },
    optional: { ...optionalData, ...overrides.optional }
  };
}
