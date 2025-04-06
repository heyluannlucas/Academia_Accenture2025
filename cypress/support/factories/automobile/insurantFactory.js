import { faker } from '@faker-js/faker';

export function generateInsurantData(overrides = {}) {
  const gender = faker.helpers.arrayElement(['Male', 'Female']);
  const age = faker.number.int({ min: 18, max: 70 });
  const randomZipCode = faker.number.int({ min: 1000, max: 99999999 }).toString();

  const requiredData = {
    firstName: faker.person.firstName(gender).replace(/[^a-zA-Z]/g, ''),
    lastName: faker.person.lastName().replace(/[^a-zA-Z]/g, ''),
    birthDate: new Date(new Date().getFullYear() - age, 0, 1).toLocaleDateString('en-US'),
    streetAddress: faker.location.streetAddress(),
    country: faker.helpers.arrayElement(['Brazil', 'United States']),
    zipCode: randomZipCode,
    occupation: faker.helpers.arrayElement(['Employee', 'Selfemployed']),
    hobbies: [faker.helpers.arrayElement(['Speeding', 'Bungee Jumping'])],
  };

  const optionalData = {
    gender,
    city: faker.location.city(),
    website: faker.internet.url(),
    picture: overrides.picture || 'cypress/fixtures/sample.jpg'
  };

  return {
    required: { ...requiredData, ...overrides.required },
    optional: { ...optionalData, ...overrides.optional }
  };
}
