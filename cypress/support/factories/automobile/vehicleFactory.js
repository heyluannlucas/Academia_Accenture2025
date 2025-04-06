import { faker } from '@faker-js/faker';

export function generateVehicleData(overrides = {}) {
  const formattedDate = faker.date
    .past({ years: 10 })
    .toLocaleDateString('en-US', { timeZone: 'UTC' }); 

  const baseData = {
    make: faker.helpers.arrayElement(['Audi', 'BMW', 'Ford', 'Honda']),
    enginePerformance: faker.number.int({ min: 50, max: 2000 }).toString(),
    dateOfManufacture: overrides.dateOfManufacture || formattedDate,
    numberOfSeats: faker.helpers.arrayElement(['2', '4', '5', '7']),
    fuelType: faker.helpers.arrayElement(['Petrol', 'Diesel', 'Electric Power']),
    listPrice: faker.number.int({ min: 500, max: 100000 }).toString(),
    annualMileage: faker.number.int({ min: 100, max: 100000 }).toString(),
    ...overrides,
  };

  return {
    required: baseData,
    optional: {
      licensePlateNumber: overrides.licensePlateNumber || faker.vehicle.vrm(),
    },
  };
}
