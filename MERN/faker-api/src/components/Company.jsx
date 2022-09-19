import { faker } from "@faker-js/faker";

const createProduct = () => {
    const newFake = {
        name: faker.commerce.name(),
        _id: faker.commerce._id(),
        address: faker.commerce.address(
            street,
            faker.commerce.street(),
            city,
            faker.commerce.city(),
            state,
            faker.commerce.state(),
            zipCode,
            faker.commerce.zipCode(),
            country,
            faker.commerce.country()
        ),
    };
    return newFake;
};

const newFakeProduct = createProduct();
console.log(newFakeProduct);
