import { faker } from "@faker-js/faker";

const createProduct = () => {
    const newFake = {
        password: faker.commerce.password(),
        email: faker.commerce.email(),
        phoneNumber: faker.commerce.phoneNumber(),
        lastName: faker.commerce.lastName(),
        firstName: faker.commerce.firstName(),
        _id: faker.commerce._id(),
    };
    return newFake;
};

const newFakeProduct = createProduct();
console.log(newFakeProduct);
