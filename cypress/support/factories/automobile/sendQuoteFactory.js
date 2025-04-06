import { faker } from '@faker-js/faker';

export function generateSendQuoteData(overrides = {}) {
    const password = generateValidPassword();

    const baseData = {
        email: faker.internet.email(), // obrigatório
        phone: faker.string.numeric({ length: 8 }), // obrigatório: só números, 8 dígitos
        username: generateValidUsername(), // obrigatório: começa com letra, pode conter letras, números, _ e .
        password: password, // obrigatório: deve ter letra maiúscula, minúscula e número
        confirmPassword: password, // obrigatório: deve ser igual à senha
        comments: faker.lorem.text().slice(0, 300), // opcional
        ...overrides
    };

    return {
        required: {
            email: baseData.email,
            phone: baseData.phone,
            username: baseData.username,
            password: baseData.password,
            confirmPassword: baseData.confirmPassword
        },
        optional: {
            comments: baseData.comments
        }
    };
}

function generateValidPassword() {
    const upper = faker.string.alpha({ casing: 'upper', length: 1 });
    const lower = faker.string.alpha({ casing: 'lower', length: 1 });
    const number = faker.string.numeric(1);
    const extra = faker.string.alphanumeric(3);
    const remaining = faker.string.alphanumeric(2); 

    const base = [upper, lower, number, extra].join('');
    return faker.helpers.shuffle(base + remaining).join('');
}

function generateValidUsername() {
    const first = faker.string.alpha({ casing: 'lower', length: 1 });
    const rest = faker.helpers.arrayElements(
        [...faker.string.alphanumeric(31)].filter(c => /^[a-zA-Z0-9_.]$/.test(c)),
        faker.number.int({ min: 3, max: 31 }) 
    ).join('');

    return first + rest;
}
